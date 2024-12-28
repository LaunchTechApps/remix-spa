import{r as a,j as s}from"./jsx-runtime-DrMmwDmt.js";import{z as u,p as j,g as p,a as C,l as h,s as g,e as S}from"./sessions-inXgIWnD.js";import{A as k}from"./async-img-Be8OCuy9.js";import{F as T,u as R}from"./hooks-CT4g7AK1.js";import{I,B as O}from"./input-O1wl_rFB.js";import{c as i}from"./util-HVvozJ9v.js";import{u as E}from"./use-session-DUYmeLH9.js";import{F,t as V,w as D,y as L}from"./components-BPHQ0Pcy.js";import{c as A}from"./createLucideIcon-DkxNIuRF.js";const y=a.forwardRef(({className:e,...t},r)=>s.jsx("div",{ref:r,className:i("rounded-xl border bg-card text-card-foreground shadow",e),...t}));y.displayName="Card";const N=a.forwardRef(({className:e,...t},r)=>s.jsx("div",{ref:r,className:i("flex flex-col space-y-1.5 p-6",e),...t}));N.displayName="CardHeader";const w=a.forwardRef(({className:e,...t},r)=>s.jsx("div",{ref:r,className:i("font-semibold leading-none tracking-tight",e),...t}));w.displayName="CardTitle";const B=a.forwardRef(({className:e,...t},r)=>s.jsx("div",{ref:r,className:i("text-sm text-muted-foreground",e),...t}));B.displayName="CardDescription";const v=a.forwardRef(({className:e,...t},r)=>s.jsx("div",{ref:r,className:i("p-6 pt-0",e),...t}));v.displayName="CardContent";const P=a.forwardRef(({className:e,...t},r)=>s.jsx("div",{ref:r,className:i("flex items-center p-6 pt-0",e),...t}));P.displayName="CardFooter";/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z=A("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]),x=u.object({code:u.string()}),X=async({request:e})=>{var r;const t=await e.formData();try{const o=j(t,{schema:x}),n=(r=t.get("code"))==null?void 0:r.valueOf().toString(),l=p("email");if(!n||!l)return o.reply({formErrors:["Submission error"]});const{accessToken:d,refreshToken:m}=(await C.confirmOtp({email:l,code:n})).data;return!d||!m?o.reply({formErrors:["Submission error"]}):(h.info("new accessToken set:",d),h.info("new refreshToken set:",m),g("access",d),g("refresh",m,{expires:30}),o.reply())}catch(o){return S({formData:t,schema:x,error:o})}};function Y(){const e=H();return s.jsx("div",{className:"min-h-[calc(100vh-136px)] flex items-center justify-center p-4",children:s.jsxs("div",{className:"w-full max-w-[1200px] grid md:grid-cols-2 gap-8 items-center",children:[s.jsx("div",{className:"w-full max-w-md mx-auto space-y-8",children:s.jsxs(y,{className:"w-full",children:[s.jsxs(N,{className:"space-y-1 text-center",children:[s.jsx(w,{className:"text-2xl",children:"OTP Verification"}),s.jsx("p",{className:"text-sm text-gray-500",children:"Enter OTP we will send to example@email.com"})]}),s.jsx(v,{children:s.jsxs(F,{method:"post",id:e.form.id,onSubmit:e.form.onSubmit,className:"space-y-6",children:[s.jsx("div",{className:"flex justify-center space-x-4",children:s.jsx(I,{name:e.fields.code.name,type:"text",inputMode:"numeric",pattern:"[0-9]*",maxLength:7,style:{fontSize:"18px"},onChange:e.handleInputChange,className:"w-64 h-12 text-center font-semibold tracking-widest text-gray-600",value:e.otp})}),s.jsx("div",{className:"text-center",children:e.fields.code.errors&&s.jsx(T,{errors:e.fields.code.errors})}),s.jsx(O,{type:"submit",className:i("w-64 bg-purple-600 hover:bg-purple-700 mx-auto flex",{"opacity-50":e.isSubmitting}),disabled:e.isSubmitting,children:"Confirm"}),s.jsx("div",{className:"text-center",children:s.jsxs(V,{to:"/sign-in",className:"inline-flex items-center text-sm text-gray-600 hover:text-gray-900",children:[s.jsx(z,{className:"w-4 h-4 mr-1"}),"Back to log in"]})})]})})]})}),s.jsx("div",{className:"hidden md:block relative h-full min-h-[600px] rounded-3xl overflow-hidden bg-gradient-to-br from-purple-500 to-purple-700",children:s.jsx(k,{src:"https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=1200&fit=crop",alt:"OTP Verification",className:"object-cover opacity-80 h-full w-full"})})]})})}const H=()=>{const e=D(),[t,r]=a.useState(""),o=L(),n=E(),l=(e==null?void 0:e.status)==="success",d=c=>{const f=c.target.value.replace(/[^0-9]/g,"");r(f)};if(a.useEffect(()=>{n.isSignedIn&&setTimeout(()=>o("/"),150)},[n.isSignedIn]),l){const c=p("access"),f=p("refresh");c&&f&&n.signIn(c)}const[m,b]=R({id:"otp-signin",onValidate({formData:c}){return j(c,{schema:x})},lastResult:e,shouldRevalidate:"onBlur"});return{action:e,otp:t,handleInputChange:d,form:m,fields:b,isSubmitting:l}};export{X as clientAction,Y as default};
