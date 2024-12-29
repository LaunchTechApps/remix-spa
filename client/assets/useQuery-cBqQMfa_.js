var ut=e=>{throw TypeError(e)};var G=(e,t,r)=>t.has(e)||ut("Cannot "+r);var s=(e,t,r)=>(G(e,t,"read from private field"),r?r.call(e):t.get(e)),f=(e,t,r)=>t.has(e)?ut("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),o=(e,t,r,i)=>(G(e,t,"write to private field"),i?i.call(e,r):t.set(e,r),r),l=(e,t,r)=>(G(e,t,"access private method"),r);import{S as Ot,j as lt,k as S,l as J,r as W,b as St,q as X,t as dt,u as Et,f as It,v as ft,n as Rt,w as Qt}from"./QueryClientProvider-DJJDjmpK.js";import{f as wt}from"./query-By7hmIlQ.js";import{r as Q}from"./sessions-CS7UQMji.js";import{s as xt,n as pt}from"./hooks-C5S8Veu0.js";var g,a,z,m,U,L,x,O,N,j,k,D,P,T,B,n,H,Y,Z,tt,et,st,rt,it,yt,gt,Tt=(gt=class extends Ot{constructor(t,r){super();f(this,n);f(this,g);f(this,a);f(this,z);f(this,m);f(this,U);f(this,L);f(this,x);f(this,O);f(this,N);f(this,j);f(this,k);f(this,D);f(this,P);f(this,T);f(this,B,new Set);this.options=r,o(this,g,t),o(this,O,null),o(this,x,lt()),this.options.experimental_prefetchInRender||s(this,x).reject(new Error("experimental_prefetchInRender feature flag is not enabled")),this.bindMethods(),this.setOptions(r)}bindMethods(){this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.size===1&&(s(this,a).addObserver(this),bt(s(this,a),this.options)?l(this,n,H).call(this):this.updateResult(),l(this,n,et).call(this))}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return at(s(this,a),this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return at(s(this,a),this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,l(this,n,st).call(this),l(this,n,rt).call(this),s(this,a).removeObserver(this)}setOptions(t,r){const i=this.options,d=s(this,a);if(this.options=s(this,g).defaultQueryOptions(t),this.options.enabled!==void 0&&typeof this.options.enabled!="boolean"&&typeof this.options.enabled!="function"&&typeof S(this.options.enabled,s(this,a))!="boolean")throw new Error("Expected enabled to be a boolean or a callback that returns a boolean");l(this,n,it).call(this),s(this,a).setOptions(this.options),i._defaulted&&!J(this.options,i)&&s(this,g).getQueryCache().notify({type:"observerOptionsUpdated",query:s(this,a),observer:this});const c=this.hasListeners();c&&mt(s(this,a),d,this.options,i)&&l(this,n,H).call(this),this.updateResult(r),c&&(s(this,a)!==d||S(this.options.enabled,s(this,a))!==S(i.enabled,s(this,a))||W(this.options.staleTime,s(this,a))!==W(i.staleTime,s(this,a)))&&l(this,n,Y).call(this);const h=l(this,n,Z).call(this);c&&(s(this,a)!==d||S(this.options.enabled,s(this,a))!==S(i.enabled,s(this,a))||h!==s(this,T))&&l(this,n,tt).call(this,h)}getOptimisticResult(t){const r=s(this,g).getQueryCache().build(s(this,g),t),i=this.createResult(r,t);return Ut(this,i)&&(o(this,m,i),o(this,L,this.options),o(this,U,s(this,a).state)),i}getCurrentResult(){return s(this,m)}trackResult(t,r){const i={};return Object.keys(t).forEach(d=>{Object.defineProperty(i,d,{configurable:!1,enumerable:!0,get:()=>(this.trackProp(d),r==null||r(d),t[d])})}),i}trackProp(t){s(this,B).add(t)}getCurrentQuery(){return s(this,a)}refetch({...t}={}){return this.fetch({...t})}fetchOptimistic(t){const r=s(this,g).defaultQueryOptions(t),i=s(this,g).getQueryCache().build(s(this,g),r);return i.fetch().then(()=>this.createResult(i,r))}fetch(t){return l(this,n,H).call(this,{...t,cancelRefetch:t.cancelRefetch??!0}).then(()=>(this.updateResult(),s(this,m)))}createResult(t,r){var ct;const i=s(this,a),d=this.options,c=s(this,m),h=s(this,U),E=s(this,L),R=t!==i?t.state:s(this,z),{state:y}=t;let u={...y},F=!1,v;if(r._optimisticResults){const b=this.hasListeners(),_=!b&&bt(t,r),M=b&&mt(t,i,r,d);(_||M)&&(u={...u,...wt(y.data,t.options)}),r._optimisticResults==="isRestoring"&&(u.fetchStatus="idle")}let{error:A,errorUpdatedAt:w,status:I}=u;if(r.select&&u.data!==void 0)if(c&&u.data===(h==null?void 0:h.data)&&r.select===s(this,N))v=s(this,j);else try{o(this,N,r.select),v=r.select(u.data),v=ft(c==null?void 0:c.data,v,r),o(this,j,v),o(this,O,null)}catch(b){o(this,O,b)}else v=u.data;if(r.placeholderData!==void 0&&v===void 0&&I==="pending"){let b;if(c!=null&&c.isPlaceholderData&&r.placeholderData===(E==null?void 0:E.placeholderData))b=c.data;else if(b=typeof r.placeholderData=="function"?r.placeholderData((ct=s(this,k))==null?void 0:ct.state.data,s(this,k)):r.placeholderData,r.select&&b!==void 0)try{b=r.select(b),o(this,O,null)}catch(_){o(this,O,_)}b!==void 0&&(I="success",v=ft(c==null?void 0:c.data,b,r),F=!0)}s(this,O)&&(A=s(this,O),v=s(this,j),w=Date.now(),I="error");const q=u.fetchStatus==="fetching",K=I==="pending",$=I==="error",ht=K&&q,ot=v!==void 0,C={status:I,fetchStatus:u.fetchStatus,isPending:K,isSuccess:I==="success",isError:$,isInitialLoading:ht,isLoading:ht,data:v,dataUpdatedAt:u.dataUpdatedAt,error:A,errorUpdatedAt:w,failureCount:u.fetchFailureCount,failureReason:u.fetchFailureReason,errorUpdateCount:u.errorUpdateCount,isFetched:u.dataUpdateCount>0||u.errorUpdateCount>0,isFetchedAfterMount:u.dataUpdateCount>R.dataUpdateCount||u.errorUpdateCount>R.errorUpdateCount,isFetching:q,isRefetching:q&&!K,isLoadingError:$&&!ot,isPaused:u.fetchStatus==="paused",isPlaceholderData:F,isRefetchError:$&&ot,isStale:nt(t,r),refetch:this.refetch,promise:s(this,x)};if(this.options.experimental_prefetchInRender){const b=V=>{C.status==="error"?V.reject(C.error):C.data!==void 0&&V.resolve(C.data)},_=()=>{const V=o(this,x,C.promise=lt());b(V)},M=s(this,x);switch(M.status){case"pending":t.queryHash===i.queryHash&&b(M);break;case"fulfilled":(C.status==="error"||C.data!==M.value)&&_();break;case"rejected":(C.status!=="error"||C.error!==M.reason)&&_();break}}return C}updateResult(t){const r=s(this,m),i=this.createResult(s(this,a),this.options);if(o(this,U,s(this,a).state),o(this,L,this.options),s(this,U).data!==void 0&&o(this,k,s(this,a)),J(i,r))return;o(this,m,i);const d={},c=()=>{if(!r)return!0;const{notifyOnChangeProps:h}=this.options,E=typeof h=="function"?h():h;if(E==="all"||!E&&!s(this,B).size)return!0;const p=new Set(E??s(this,B));return this.options.throwOnError&&p.add("error"),Object.keys(s(this,m)).some(R=>{const y=R;return s(this,m)[y]!==r[y]&&p.has(y)})};(t==null?void 0:t.listeners)!==!1&&c()&&(d.listeners=!0),l(this,n,yt).call(this,{...d,...t})}onQueryUpdate(){this.updateResult(),this.hasListeners()&&l(this,n,et).call(this)}},g=new WeakMap,a=new WeakMap,z=new WeakMap,m=new WeakMap,U=new WeakMap,L=new WeakMap,x=new WeakMap,O=new WeakMap,N=new WeakMap,j=new WeakMap,k=new WeakMap,D=new WeakMap,P=new WeakMap,T=new WeakMap,B=new WeakMap,n=new WeakSet,H=function(t){l(this,n,it).call(this);let r=s(this,a).fetch(this.options,t);return t!=null&&t.throwOnError||(r=r.catch(St)),r},Y=function(){l(this,n,st).call(this);const t=W(this.options.staleTime,s(this,a));if(X||s(this,m).isStale||!dt(t))return;const i=Et(s(this,m).dataUpdatedAt,t)+1;o(this,D,setTimeout(()=>{s(this,m).isStale||this.updateResult()},i))},Z=function(){return(typeof this.options.refetchInterval=="function"?this.options.refetchInterval(s(this,a)):this.options.refetchInterval)??!1},tt=function(t){l(this,n,rt).call(this),o(this,T,t),!(X||S(this.options.enabled,s(this,a))===!1||!dt(s(this,T))||s(this,T)===0)&&o(this,P,setInterval(()=>{(this.options.refetchIntervalInBackground||It.isFocused())&&l(this,n,H).call(this)},s(this,T)))},et=function(){l(this,n,Y).call(this),l(this,n,tt).call(this,l(this,n,Z).call(this))},st=function(){s(this,D)&&(clearTimeout(s(this,D)),o(this,D,void 0))},rt=function(){s(this,P)&&(clearInterval(s(this,P)),o(this,P,void 0))},it=function(){const t=s(this,g).getQueryCache().build(s(this,g),this.options);if(t===s(this,a))return;const r=s(this,a);o(this,a,t),o(this,z,t.state),this.hasListeners()&&(r==null||r.removeObserver(this),t.addObserver(this))},yt=function(t){Rt.batch(()=>{t.listeners&&this.listeners.forEach(r=>{r(s(this,m))}),s(this,g).getQueryCache().notify({query:s(this,a),type:"observerResultsUpdated"})})},gt);function Ft(e,t){return S(t.enabled,e)!==!1&&e.state.data===void 0&&!(e.state.status==="error"&&t.retryOnMount===!1)}function bt(e,t){return Ft(e,t)||e.state.data!==void 0&&at(e,t,t.refetchOnMount)}function at(e,t,r){if(S(t.enabled,e)!==!1){const i=typeof r=="function"?r(e):r;return i==="always"||i!==!1&&nt(e,t)}return!1}function mt(e,t,r,i){return(e!==t||S(i.enabled,e)===!1)&&(!r.suspense||e.state.status!=="error")&&nt(e,r)}function nt(e,t){return S(t.enabled,e)!==!1&&e.isStaleByTime(W(t.staleTime,e))}function Ut(e,t){return!J(e.getCurrentResult(),t)}var Ct=Q.createContext(!1),Dt=()=>Q.useContext(Ct);Ct.Provider;function Pt(){let e=!1;return{clearReset:()=>{e=!1},reset:()=>{e=!0},isReset:()=>e}}var _t=Q.createContext(Pt()),Mt=()=>Q.useContext(_t),Lt=(e,t)=>{(e.suspense||e.throwOnError||e.experimental_prefetchInRender)&&(t.isReset()||(e.retryOnMount=!1))},jt=e=>{Q.useEffect(()=>{e.clearReset()},[e])},kt=({result:e,errorResetBoundary:t,throwOnError:r,query:i})=>e.isError&&!t.isReset()&&!e.isFetching&&i&&xt(r,[e.error,i]),Bt=e=>{e.suspense&&(e.staleTime===void 0&&(e.staleTime=1e3),typeof e.gcTime=="number"&&(e.gcTime=Math.max(e.gcTime,1e3)))},At=(e,t)=>e.isLoading&&e.isFetching&&!t,Ht=(e,t)=>(e==null?void 0:e.suspense)&&t.isPending,vt=(e,t,r)=>t.fetchOptimistic(e).catch(()=>{r.clearReset()});function zt(e,t,r){var y,u,F,v,A;const i=Qt(),d=Dt(),c=Mt(),h=i.defaultQueryOptions(e);(u=(y=i.getDefaultOptions().queries)==null?void 0:y._experimental_beforeQuery)==null||u.call(y,h),h._optimisticResults=d?"isRestoring":"optimistic",Bt(h),Lt(h,c),jt(c);const E=!i.getQueryCache().get(h.queryHash),[p]=Q.useState(()=>new t(i,h)),R=p.getOptimisticResult(h);if(Q.useSyncExternalStore(Q.useCallback(w=>{const I=d?pt:p.subscribe(Rt.batchCalls(w));return p.updateResult(),I},[p,d]),()=>p.getCurrentResult(),()=>p.getCurrentResult()),Q.useEffect(()=>{p.setOptions(h,{listeners:!1})},[h,p]),Ht(h,R))throw vt(h,p,c);if(kt({result:R,errorResetBoundary:c,throwOnError:h.throwOnError,query:i.getQueryCache().get(h.queryHash)}))throw R.error;if((v=(F=i.getDefaultOptions().queries)==null?void 0:F._experimental_afterQuery)==null||v.call(F,h,R),h.experimental_prefetchInRender&&!X&&At(R,d)){const w=E?vt(h,p,c):(A=i.getQueryCache().get(h.queryHash))==null?void 0:A.promise;w==null||w.catch(pt).finally(()=>{p.updateResult()})}return h.notifyOnChangeProps?R:p.trackResult(R)}function Gt(e,t){return zt(e,Tt)}export{Gt as u};
