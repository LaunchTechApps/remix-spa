import{r as n,j as e,a as C,l as d,s as u,g as S}from"./sessions-CS7UQMji.js";import{z as x,u as k,a as F,b as I,p as R,F as T,A as O}from"./hooks-CjegAr_H.js";import{I as E,B}from"./input-Cj0MnBok.js";import{v as i,w as L,s as P,F as V,x as D}from"./components-DkzrqAQC.js";import{u as M}from"./use-session-DiZFoWcF.js";import{g as Q}from"./util-uYZNSEiQ.js";import{c as q}from"./createLucideIcon-li7BXDxd.js";import"./QueryClientProvider-BcxaLf2W.js";import"./index-Bb4qSo10.js";/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z=q("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]),h=n.forwardRef(({className:s,...a},t)=>e.jsx("div",{ref:t,className:i("rounded-xl border bg-card text-card-foreground shadow",s),...a}));h.displayName="Card";const g=n.forwardRef(({className:s,...a},t)=>e.jsx("div",{ref:t,className:i("flex flex-col space-y-1.5 p-6",s),...a}));g.displayName="CardHeader";const j=n.forwardRef(({className:s,...a},t)=>e.jsx("div",{ref:t,className:i("font-semibold leading-none tracking-tight",s),...a}));j.displayName="CardTitle";const A=n.forwardRef(({className:s,...a},t)=>e.jsx("div",{ref:t,className:i("text-sm text-muted-foreground",s),...a}));A.displayName="CardDescription";const y=n.forwardRef(({className:s,...a},t)=>e.jsx("div",{ref:t,className:i("p-6 pt-0",s),...a}));y.displayName="CardContent";const H=n.forwardRef(({className:s,...a},t)=>e.jsx("div",{ref:t,className:i("flex items-center p-6 pt-0",s),...a}));H.displayName="CardFooter";const K=x.object({code:x.string()}),W=()=>{const[s,a]=n.useState(""),t=L(),l=M(),N=k({queryKey:["otpImg"],queryFn:()=>P.mili(1500).then(()=>"https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=1200&fit=crop")}),v=o=>{const r=o.target.value.replace(/[^0-9]/g,"");a(r)},m=F({mutationFn:({email:o,code:r})=>C.confirmOtp({email:o,code:r}),onSuccess:o=>{const{accessToken:r,refreshToken:c}=o.data;if(!r||!c){d.error("no tokens returned from api");return}d.info("new accessToken set:",r),d.info("new refreshToken set:",c),u("access",r),u("refresh",c,{expires:30}),l.signIn(r),t("/")},onError:o=>Q(o).then(r=>d.error(r))});n.useEffect(()=>{l.isSignedIn&&t("/")},[]);const[w,b]=I({id:"otp-signin",onValidate({formData:o}){return R(o,{schema:K})},shouldRevalidate:"onBlur",onSubmit(o,r){var f;o.preventDefault();const c=((f=r.formData.get("code"))==null?void 0:f.toString())||"",p=S("email");p&&c&&m.mutate({email:p,code:c})}});return{otp:s,handleInputChange:v,form:w,fields:b,isSubmitting:m.isPending,onBoardQuery:N}};function se(){const s=W();return e.jsx("div",{className:"min-h-[calc(100vh-136px)] flex items-center justify-center p-4",children:e.jsxs("div",{className:"w-full max-w-[1200px] grid md:grid-cols-2 gap-8 items-center",children:[e.jsx("div",{className:"w-full max-w-md mx-auto space-y-8",children:e.jsxs(h,{className:"w-full",children:[e.jsxs(g,{className:"space-y-1 text-center",children:[e.jsx(j,{className:"text-2xl",children:"OTP Verification"}),e.jsx("p",{className:"text-sm text-gray-500",children:"Enter OTP we will send to example@email.com"})]}),e.jsx(y,{children:e.jsxs(V,{method:"post",id:s.form.id,onSubmit:s.form.onSubmit,className:"space-y-6",children:[e.jsx("div",{className:"flex justify-center space-x-4",children:e.jsx(E,{name:s.fields.code.name,type:"text",inputMode:"numeric",pattern:"[0-9]*",maxLength:7,style:{fontSize:"18px"},onChange:s.handleInputChange,className:"w-64 h-12 text-center font-semibold tracking-widest text-gray-600",value:s.otp})}),e.jsx("div",{className:"text-center",children:s.fields.code.errors&&e.jsx(T,{errors:s.fields.code.errors})}),e.jsx(B,{type:"submit",className:i("w-64 bg-purple-600 hover:bg-purple-700 mx-auto flex",{"opacity-50":s.isSubmitting}),disabled:s.isSubmitting,children:"Confirm"}),e.jsx("div",{className:"text-center",children:e.jsxs(D,{to:"/sign-in",className:"inline-flex items-center text-sm text-gray-600 hover:text-gray-900",children:[e.jsx(z,{className:"w-4 h-4 mr-1"}),"Back to log in"]})})]})})]})}),e.jsx("div",{className:"hidden md:block relative h-full min-h-[600px] rounded-3xl overflow-hidden bg-gradient-to-br from-purple-500 to-purple-700",children:e.jsx(O,{src:s.onBoardQuery,alt:"OTP Verification",className:"object-cover opacity-80 h-full w-full"})})]})})}export{se as default};
