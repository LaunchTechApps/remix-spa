import{r as o,j as t}from"./jsx-runtime-DrMmwDmt.js";import{A as B}from"./async-img-Be8OCuy9.js";import{I as D,B as _}from"./input-O1wl_rFB.js";import{c as w}from"./util-HVvozJ9v.js";import{u as H,c as M,a as U,b as W,P as E,d as S,e as q,C as K}from"./react-icons.esm-DnXjuTK2.js";import{q as T,t as F}from"./components-BPHQ0Pcy.js";function J(e){const s=o.useRef({value:e,previous:e});return o.useMemo(()=>(s.current.value!==e&&(s.current.previous=s.current.value,s.current.value=e),s.current.previous),[e])}function X(e){const[s,r]=o.useState(void 0);return H(()=>{if(e){r({width:e.offsetWidth,height:e.offsetHeight});const i=new ResizeObserver(l=>{if(!Array.isArray(l)||!l.length)return;const a=l[0];let d,n;if("borderBoxSize"in a){const u=a.borderBoxSize,h=Array.isArray(u)?u[0]:u;d=h.inlineSize,n=h.blockSize}else d=e.offsetWidth,n=e.offsetHeight;r({width:d,height:n})});return i.observe(e,{box:"border-box"}),()=>i.unobserve(e)}else r(void 0)},[e]),s}var j="Checkbox",[Y,oe]=M(j),[$,G]=Y(j),I=o.forwardRef((e,s)=>{const{__scopeCheckbox:r,name:i,checked:l,defaultChecked:a,required:d,disabled:n,value:u="on",onCheckedChange:h,form:m,...g}=e,[f,v]=o.useState(null),y=U(s,c=>v(c)),k=o.useRef(!1),N=f?m||!!f.closest("form"):!0,[x=!1,C]=W({prop:l,defaultProp:a,onChange:h}),O=o.useRef(x);return o.useEffect(()=>{const c=f==null?void 0:f.form;if(c){const b=()=>C(O.current);return c.addEventListener("reset",b),()=>c.removeEventListener("reset",b)}},[f,C]),t.jsxs($,{scope:r,state:x,disabled:n,children:[t.jsx(E.button,{type:"button",role:"checkbox","aria-checked":p(x)?"mixed":x,"aria-required":d,"data-state":z(x),"data-disabled":n?"":void 0,disabled:n,value:u,...g,ref:y,onKeyDown:S(e.onKeyDown,c=>{c.key==="Enter"&&c.preventDefault()}),onClick:S(e.onClick,c=>{C(b=>p(b)?!0:!b),N&&(k.current=c.isPropagationStopped(),k.current||c.stopPropagation())})}),N&&t.jsx(Q,{control:f,bubbles:!k.current,name:i,value:u,checked:x,required:d,disabled:n,form:m,style:{transform:"translateX(-100%)"},defaultChecked:p(a)?!1:a})]})});I.displayName=j;var R="CheckboxIndicator",P=o.forwardRef((e,s)=>{const{__scopeCheckbox:r,forceMount:i,...l}=e,a=G(R,r);return t.jsx(q,{present:i||p(a.state)||a.state===!0,children:t.jsx(E.span,{"data-state":z(a.state),"data-disabled":a.disabled?"":void 0,...l,ref:s,style:{pointerEvents:"none",...e.style}})})});P.displayName=R;var Q=e=>{const{control:s,checked:r,bubbles:i=!0,defaultChecked:l,...a}=e,d=o.useRef(null),n=J(r),u=X(s);o.useEffect(()=>{const m=d.current,g=window.HTMLInputElement.prototype,v=Object.getOwnPropertyDescriptor(g,"checked").set;if(n!==r&&v){const y=new Event("click",{bubbles:i});m.indeterminate=p(r),v.call(m,p(r)?!1:r),m.dispatchEvent(y)}},[n,r,i]);const h=o.useRef(p(r)?!1:r);return t.jsx("input",{type:"checkbox","aria-hidden":!0,defaultChecked:l??h.current,...a,tabIndex:-1,ref:d,style:{...e.style,...u,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})};function p(e){return e==="indeterminate"}function z(e){return p(e)?"indeterminate":e?"checked":"unchecked"}var A=I,V=P;const L=o.forwardRef(({className:e,...s},r)=>t.jsx(A,{ref:r,className:w("peer h-4 w-4 shrink-0 rounded-sm  border-gray-300 focus:ring-purple-500 border shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",e),...s,children:t.jsx(V,{className:w("flex items-center justify-center text-current bg-purple-600 rounded"),children:t.jsx(K,{className:"h-4 w-4"})})}));L.displayName=A.displayName;const ne=async()=>({imageUrl:(async()=>(await new Promise(r=>setTimeout(r,0)),"https://images.unsplash.com/photo-1542772144-515ddfae17e9"))()});function ce(){const{imageUrl:e}=T();return t.jsx("div",{className:"min-h-[calc(100vh-136px)] flex items-center justify-center p-4",children:t.jsxs("div",{className:"w-full max-w-[1200px] grid md:grid-cols-2 gap-8 items-center",children:[t.jsxs("div",{className:"w-full max-w-md mx-auto space-y-6",children:[t.jsxs("div",{className:"space-y-2 text-center",children:[t.jsx("h1",{className:"text-3xl font-bold tracking-tight",children:"EARLY ACCESS"}),t.jsx("p",{className:"text-gray-500",children:"Join the waitlist"})]}),t.jsxs("div",{className:"space-y-4",children:[t.jsx("div",{className:"space-y-2",children:t.jsx("div",{className:"relative",children:t.jsx(D,{type:"email",placeholder:"your@email.com",className:"pl-5 py-6 bg-gray-50/50"})})}),t.jsxs("div",{className:"flex items-center space-x-2",children:[t.jsx(L,{id:"agree",className:"h-4 w-4"}),t.jsx("label",{htmlFor:"agree",className:"text-xs font-medium text-gray-700",children:"I agree to receive marketing emails & special deals"})]}),t.jsx("div",{className:"h-12"}),t.jsx(_,{className:"w-full py-6 bg-purple-600 hover:bg-purple-700",children:"JOIN NOW"})]}),t.jsx("hr",{}),t.jsxs("div",{className:"text-center text-sm",children:["Already have an account?"," ",t.jsx(F,{to:"/sign-in",className:"text-purple-600 hover:text-purple-700 font-semibold",children:"Sign In"})]})]}),t.jsx("div",{className:"hidden md:block relative h-full min-h-[600px] rounded-3xl overflow-hidden bg-gradient-to-br from-purple-500 to-purple-700",children:t.jsx(B,{src:e,alt:"Street art",className:"object-cover opacity-80 w-full h-full"})})]})})}export{ne as clientLoader,ce as default};
