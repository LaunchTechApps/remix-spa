if(!self.define){let s,e={};const n=(n,r)=>(n=new URL(n+".js",r).href,e[n]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=n,s.onload=e,document.head.appendChild(s)}else s=n,importScripts(n),e()})).then((()=>{let s=e[n];if(!s)throw new Error(`Module ${n} didn’t register its module`);return s})));self.define=(r,i)=>{const l=s||("document"in self?document.currentScript.src:"")||location.href;if(e[l])return;let u={};const o=s=>n(s,l),t={module:{uri:l},exports:u,require:o};e[l]=Promise.all(r.map((s=>t[s]||o(s)))).then((s=>(i(...s),u)))}}define(["./workbox-3e8df8c8"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/async-img-Be8OCuy9.js",revision:null},{url:"assets/components-BPHQ0Pcy.js",revision:null},{url:"assets/createLucideIcon-DkxNIuRF.js",revision:null},{url:"assets/entry.client-CX-zzvD3.js",revision:null},{url:"assets/hooks-CT4g7AK1.js",revision:null},{url:"assets/input-O1wl_rFB.js",revision:null},{url:"assets/jsx-runtime-DrMmwDmt.js",revision:null},{url:"assets/navigation-BAWcR_lp.js",revision:null},{url:"assets/react-icons.esm-DnXjuTK2.js",revision:null},{url:"assets/root-1h540BoP.js",revision:null},{url:"assets/root-B6goNyrH.css",revision:null},{url:"assets/route-aEb0Ipjb.js",revision:null},{url:"assets/route-Bf1OPaR9.js",revision:null},{url:"assets/route-CxpdY3_R.js",revision:null},{url:"assets/route-DhSVTrSC.js",revision:null},{url:"assets/route-yMpdUxKJ.js",revision:null},{url:"assets/route-yvt6iO1D.js",revision:null},{url:"assets/sessions-inXgIWnD.js",revision:null},{url:"assets/use-session-DUYmeLH9.js",revision:null},{url:"assets/util-HVvozJ9v.js",revision:null},{url:"registerSW.js",revision:"f0700fbf30b24c98929ae718109c2ef5"},{url:"favicon.svg",revision:"71dcfd191507c31dc79efe3341dfa3b9"},{url:"pwa-192x192.png",revision:"f24c9384006bbc8de95ed69990459dca"},{url:"pwa-512x512.png",revision:"4db5b8fe442a8f8fdc6e35cd40138057"},{url:"manifest.webmanifest",revision:"76dc8af38b2a00ac59a3b8bce122ea9d"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
//# sourceMappingURL=sw.js.map
