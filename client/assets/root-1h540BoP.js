import{r as i,j as e}from"./jsx-runtime-DrMmwDmt.js";import{U as h}from"./use-session-DUYmeLH9.js";import{l as f,n as y,o as x,p as S,_ as g,O as j,M as w,L as k,S as b}from"./components-BPHQ0Pcy.js";import"./sessions-inXgIWnD.js";/**
 * @remix-run/react v2.15.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */let a="positions";function M({getKey:t,...l}){let{isSpaMode:c}=f(),o=y(),p=x();S({getKey:t,storageKey:a});let u=i.useMemo(()=>{if(!t)return null;let s=t(o,p);return s!==o.key?s:null},[]);if(c)return null;let d=((s,m)=>{if(!window.history.state||!window.history.state.key){let r=Math.random().toString(32).slice(2);window.history.replaceState({key:r},"")}try{let n=JSON.parse(sessionStorage.getItem(s)||"{}")[m||window.history.state.key];typeof n=="number"&&window.scrollTo(0,n)}catch(r){console.error(r),sessionStorage.removeItem(s)}}).toString();return i.createElement("script",g({},l,{suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:`(${d})(${JSON.stringify(a)}, ${JSON.stringify(u)})`}}))}const I=()=>[{rel:"preconnect",href:"https://fonts.googleapis.com"},{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:"anonymous"},{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"}];function R({children:t}){return e.jsxs("html",{lang:"en",children:[e.jsxs("head",{children:[e.jsx("meta",{charSet:"utf-8"}),e.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),e.jsx(w,{}),e.jsx(k,{})]}),e.jsxs("body",{children:[e.jsx(h,{children:t}),e.jsx(M,{}),e.jsx(b,{})]})]})}function _(){return e.jsx(j,{})}function E(){return e.jsx("div",{className:"flex h-screen items-center justify-center",children:e.jsx("div",{className:"h-12 w-12 animate-spin rounded-full border-[5px] border-blue-600 border-t-transparent"})})}export{E as HydrateFallback,R as Layout,_ as default,I as links};
//# sourceMappingURL=root-1h540BoP.js.map
