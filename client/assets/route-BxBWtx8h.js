import{r as n,j as t,a as D,l as E}from"./sessions-CS7UQMji.js";import{z as C,u as _,a as L,p as q,F as I,A as H}from"./hooks-C5S8Veu0.js";import{I as K,B as Q}from"./input-Cj0MnBok.js";import{v as w,w as T,s as J,F as V,x as X}from"./components-DkzrqAQC.js";import{f as $,c as Y,u as Z,a as G,P,e as R,b as U}from"./index-DuRxZEL2.js";import{C as ee}from"./react-icons.esm-BjMQU0Cg.js";import{g as te}from"./util-uYZNSEiQ.js";import{u as se}from"./use-session-DiZFoWcF.js";import{u as re}from"./use-toast-DH-AXcMx.js";import{u as ae}from"./useQuery-cBqQMfa_.js";import"./QueryClientProvider-DJJDjmpK.js";import"./index-Bb4qSo10.js";import"./query-By7hmIlQ.js";function oe(e){const r=n.useRef({value:e,previous:e});return n.useMemo(()=>(r.current.value!==e&&(r.current.previous=r.current.value,r.current.value=e),r.current.previous),[e])}function ie(e){const[r,s]=n.useState(void 0);return $(()=>{if(e){s({width:e.offsetWidth,height:e.offsetHeight});const c=new ResizeObserver(l=>{if(!Array.isArray(l)||!l.length)return;const i=l[0];let d,o;if("borderBoxSize"in i){const a=i.borderBoxSize,m=Array.isArray(a)?a[0]:a;d=m.inlineSize,o=m.blockSize}else d=e.offsetWidth,o=e.offsetHeight;s({width:d,height:o})});return c.observe(e,{box:"border-box"}),()=>c.unobserve(e)}else s(void 0)},[e]),r}var N="Checkbox",[ne,Ee]=Y(N),[ce,le]=ne(N),z=n.forwardRef((e,r)=>{const{__scopeCheckbox:s,name:c,checked:l,defaultChecked:i,required:d,disabled:o,value:a="on",onCheckedChange:m,form:p,...v}=e,[f,g]=n.useState(null),y=Z(r,u=>g(u)),k=n.useRef(!1),S=f?p||!!f.closest("form"):!0,[x=!1,j]=G({prop:l,defaultProp:i,onChange:m}),W=n.useRef(x);return n.useEffect(()=>{const u=f==null?void 0:f.form;if(u){const b=()=>j(W.current);return u.addEventListener("reset",b),()=>u.removeEventListener("reset",b)}},[f,j]),t.jsxs(ce,{scope:s,state:x,disabled:o,children:[t.jsx(P.button,{type:"button",role:"checkbox","aria-checked":h(x)?"mixed":x,"aria-required":d,"data-state":F(x),"data-disabled":o?"":void 0,disabled:o,value:a,...v,ref:y,onKeyDown:R(e.onKeyDown,u=>{u.key==="Enter"&&u.preventDefault()}),onClick:R(e.onClick,u=>{j(b=>h(b)?!0:!b),S&&(k.current=u.isPropagationStopped(),k.current||u.stopPropagation())})}),S&&t.jsx(de,{control:f,bubbles:!k.current,name:c,value:a,checked:x,required:d,disabled:o,form:p,style:{transform:"translateX(-100%)"},defaultChecked:h(i)?!1:i})]})});z.displayName=N;var A="CheckboxIndicator",M=n.forwardRef((e,r)=>{const{__scopeCheckbox:s,forceMount:c,...l}=e,i=le(A,s);return t.jsx(U,{present:c||h(i.state)||i.state===!0,children:t.jsx(P.span,{"data-state":F(i.state),"data-disabled":i.disabled?"":void 0,...l,ref:r,style:{pointerEvents:"none",...e.style}})})});M.displayName=A;var de=e=>{const{control:r,checked:s,bubbles:c=!0,defaultChecked:l,...i}=e,d=n.useRef(null),o=oe(s),a=ie(r);n.useEffect(()=>{const p=d.current,v=window.HTMLInputElement.prototype,g=Object.getOwnPropertyDescriptor(v,"checked").set;if(o!==s&&g){const y=new Event("click",{bubbles:c});p.indeterminate=h(s),g.call(p,h(s)?!1:s),p.dispatchEvent(y)}},[o,s,c]);const m=n.useRef(h(s)?!1:s);return t.jsx("input",{type:"checkbox","aria-hidden":!0,defaultChecked:l??m.current,...i,tabIndex:-1,ref:d,style:{...e.style,...a,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})};function h(e){return e==="indeterminate"}function F(e){return h(e)?"indeterminate":e?"checked":"unchecked"}var B=z,ue=M;const O=n.forwardRef(({className:e,...r},s)=>t.jsx(B,{ref:s,className:w("peer h-4 w-4 shrink-0 rounded-sm  border-gray-300 focus:ring-purple-500 border shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",e),...r,children:t.jsx(ue,{className:w("flex items-center justify-center text-current bg-purple-600 rounded"),children:t.jsx(ee,{className:"h-4 w-4"})})}));O.displayName=B.displayName;const me=C.object({email:C.string().email("Please provide a valid email address.").nonempty("Email is required."),checkbox:C.boolean()}),pe=()=>{const e=T(),r=se(),{toast:s}=re(),c=ae({queryKey:["waitlistPageImage"],queryFn:()=>J.mili(500).then(()=>"https://images.unsplash.com/photo-1542772144-515ddfae17e9")}),l=_({mutationKey:["registerWaitlist"],mutationFn:o=>D.registerWaitlist({email:o}),onSuccess:(o,a)=>s({description:`Success! ${a} was added to the waitlist`}),onError:o=>te(o).then(a=>(E.error(a),a)).then(a=>(a==null?void 0:a.friendlyMsg)&&s({variant:"destructive",description:a.friendlyMsg})).catch(a=>E.error(a))});n.useEffect(()=>{r.isSignedIn&&e("/")},[]);const[i,d]=L({id:"waitlist-register",onValidate({formData:o}){return q(o,{schema:me})},onSubmit(o,a){var p;o.preventDefault();const m=((p=a.formData.get("email"))==null?void 0:p.toString())||"";m&&l.mutate(m)},shouldRevalidate:"onBlur"});return{form:i,fields:d,isSubmitting:l.isPending,waitlistImgQuery:c}};function Ie(){const{form:e,fields:r,isSubmitting:s,waitlistImgQuery:c}=pe();return t.jsx("div",{className:"min-h-[calc(100vh-136px)] flex items-center justify-center p-4",children:t.jsxs("div",{className:"w-full max-w-[1200px] grid md:grid-cols-2 gap-8 items-center",children:[t.jsxs("div",{className:"w-full max-w-md mx-auto space-y-6",children:[t.jsxs("div",{className:"space-y-2 text-center",children:[t.jsx("h1",{className:"text-3xl font-bold tracking-tight",children:"EARLY ACCESS"}),t.jsx("p",{className:"text-gray-500",children:"Join the waitlist"})]}),t.jsx(V,{method:"post",id:e.id,onSubmit:e.onSubmit,className:"space-y-6",children:t.jsxs("div",{className:"space-y-4",children:[t.jsx("div",{className:"space-y-2",children:t.jsxs("div",{className:"relative",children:[t.jsx(K,{name:r.email.name,type:"email",placeholder:"your@email.com",className:"pl-5 py-6 bg-gray-50/50"}),t.jsx(I,{errors:r.email.errors})]})}),t.jsxs("div",{className:"flex items-center space-x-2",children:[t.jsx(O,{name:r.checkbox.name,id:"agree",className:"h-4 w-4"}),t.jsx("label",{htmlFor:"agree",className:"text-xs font-medium text-gray-700",children:"I agree to receive marketing emails & special deals"})]}),t.jsx(I,{errors:r.checkbox.errors}),t.jsx("div",{className:"h-12"}),t.jsx(Q,{type:"submit",disabled:s,className:w("w-64 bg-purple-600 hover:bg-purple-700 mx-auto flex",{"opacity-50":s}),children:"JOIN NOW"})]})}),t.jsx("hr",{}),t.jsxs("div",{className:"text-center text-sm",children:["Already have an account?"," ",t.jsx(X,{to:"/sign-in",className:"text-purple-600 hover:text-purple-700 font-semibold",children:"Sign In"})]})]}),t.jsx("div",{className:"hidden md:block relative h-full min-h-[600px] rounded-3xl overflow-hidden bg-gradient-to-br from-purple-500 to-purple-700",children:t.jsx(H,{src:c.data||"",alt:"Street art",className:"object-cover opacity-80 w-full h-full"})})]})})}export{Ie as default};
