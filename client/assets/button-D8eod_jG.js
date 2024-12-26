import{r as o,n as E}from"./components-D7tnEHaP.js";import{c as N}from"./util-CAt4lsMI.js";function v(){return v=Object.assign?Object.assign.bind():function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var r in e)({}).hasOwnProperty.call(e,r)&&(n[r]=e[r])}return n},v.apply(null,arguments)}function w(n,t){typeof n=="function"?n(t):n!=null&&(n.current=t)}function j(...n){return t=>n.forEach(e=>w(e,t))}const x=o.forwardRef((n,t)=>{const{children:e,...r}=n,s=o.Children.toArray(e),i=s.find(O);if(i){const l=i.props.children,c=s.map(m=>m===i?o.Children.count(l)>1?o.Children.only(null):o.isValidElement(l)?l.props.children:null:m);return o.createElement(h,v({},r,{ref:t}),o.isValidElement(l)?o.cloneElement(l,void 0,c):null)}return o.createElement(h,v({},r,{ref:t}),e)});x.displayName="Slot";const h=o.forwardRef((n,t)=>{const{children:e,...r}=n;return o.isValidElement(e)?o.cloneElement(e,{...k(r,e.props),ref:t?j(t,e.ref):e.ref}):o.Children.count(e)>1?o.Children.only(null):null});h.displayName="SlotClone";const A=({children:n})=>o.createElement(o.Fragment,null,n);function O(n){return o.isValidElement(n)&&n.type===A}function k(n,t){const e={...t};for(const r in t){const s=n[r],i=t[r];/^on[A-Z]/.test(r)?s&&i?e[r]=(...c)=>{i(...c),s(...c)}:s&&(e[r]=s):r==="style"?e[r]={...s,...i}:r==="className"&&(e[r]=[s,i].filter(Boolean).join(" "))}return{...n,...e}}function $(n){var t,e,r="";if(typeof n=="string"||typeof n=="number")r+=n;else if(typeof n=="object")if(Array.isArray(n))for(t=0;t<n.length;t++)n[t]&&(e=$(n[t]))&&(r&&(r+=" "),r+=e);else for(t in n)n[t]&&(r&&(r+=" "),r+=t);return r}function P(){for(var n,t,e=0,r="";e<arguments.length;)(n=arguments[e++])&&(t=$(n))&&(r&&(r+=" "),r+=t);return r}const b=n=>typeof n=="boolean"?"".concat(n):n===0?"0":n,p=P,S=(n,t)=>e=>{var r;if((t==null?void 0:t.variants)==null)return p(n,e==null?void 0:e.class,e==null?void 0:e.className);const{variants:s,defaultVariants:i}=t,l=Object.keys(s).map(a=>{const u=e==null?void 0:e[a],f=i==null?void 0:i[a];if(u===null)return null;const d=b(u)||b(f);return s[a][d]}),c=e&&Object.entries(e).reduce((a,u)=>{let[f,d]=u;return d===void 0||(a[f]=d),a},{}),m=t==null||(r=t.compoundVariants)===null||r===void 0?void 0:r.reduce((a,u)=>{let{class:f,className:d,...C}=u;return Object.entries(C).every(V=>{let[g,y]=V;return Array.isArray(y)?y.includes({...i,...c}[g]):{...i,...c}[g]===y})?[...a,f,d]:a},[]);return p(n,l,m,e==null?void 0:e.class,e==null?void 0:e.className)},B=S("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),_=o.forwardRef(({className:n,variant:t,size:e,asChild:r=!1,...s},i)=>{const l=r?x:"button";return E.jsx(l,{className:N(B({variant:t,size:e,className:n})),ref:i,...s})});_.displayName="Button";export{_ as B,S as c};
