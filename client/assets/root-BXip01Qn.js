import{o as m,p as f,q as y,t as x,r as i,_ as g,n as e,O as w,M as S,L as j,S as k}from"./components-DArogIL1.js";/**
 * @remix-run/react v2.15.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */let a="positions";function b({getKey:t,...l}){let{isSpaMode:c}=m(),o=f(),u=y();x({getKey:t,storageKey:a});let p=i.useMemo(()=>{if(!t)return null;let s=t(o,u);return s!==o.key?s:null},[]);if(c)return null;let d=((s,h)=>{if(!window.history.state||!window.history.state.key){let r=Math.random().toString(32).slice(2);window.history.replaceState({key:r},"")}try{let n=JSON.parse(sessionStorage.getItem(s)||"{}")[h||window.history.state.key];typeof n=="number"&&window.scrollTo(0,n)}catch(r){console.error(r),sessionStorage.removeItem(s)}}).toString();return i.createElement("script",g({},l,{suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:`(${d})(${JSON.stringify(a)}, ${JSON.stringify(p)})`}}))}const O=()=>[{rel:"preconnect",href:"https://fonts.googleapis.com"},{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:"anonymous"},{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"}];function v({children:t}){return e.jsxs("html",{lang:"en",children:[e.jsxs("head",{children:[e.jsx("meta",{charSet:"utf-8"}),e.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),e.jsx(S,{}),e.jsx(j,{})]}),e.jsxs("body",{children:[t,e.jsx(b,{}),e.jsx(k,{})]})]})}function L(){return e.jsx(w,{})}function N(){return e.jsx("div",{className:"flex h-screen items-center justify-center",children:e.jsx("div",{className:"h-12 w-12 animate-spin rounded-full border-[5px] border-blue-600 border-t-transparent"})})}export{N as HydrateFallback,v as Layout,L as default,O as links};
