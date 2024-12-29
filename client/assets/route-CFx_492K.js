import{a as u,s as p,j as e}from"./sessions-CS7UQMji.js";import{z as m,a as x,b as h,u as g,p as f,F as c,A as j}from"./hooks-CjegAr_H.js";import{I as v,B as y}from"./input-Cj0MnBok.js";import{w as N,s as b,F as w,v as S,x as I}from"./components-DkzrqAQC.js";import"./QueryClientProvider-BcxaLf2W.js";import"./index-Bb4qSo10.js";const F=m.object({email:m.string().email()});function k(){return g({queryKey:["signInImg"],queryFn:()=>b.mili(1500).then(()=>"https://images.unsplash.com/photo-1546930722-a1292ed9dee8")})}const M=()=>{const t=k(),a=N(),i=x({mutationFn:s=>u.requestOtp({email:s}),onSuccess:(s,l,o)=>{p("email",l),a("/otp")}}),[r,d]=h({id:"sign-in",onValidate({formData:s}){return f(s,{schema:F})},onSubmit:(s,l)=>{var n;s.preventDefault();const o=((n=l.formData.get("email"))==null?void 0:n.toString())||"";i.mutate(o)},shouldRevalidate:"onBlur"});return{imgQuery:t,loginMutate:i,form:r,fields:d}};function P(){const{form:t,fields:a,loginMutate:i,imgQuery:r}=M();return e.jsx("div",{className:"min-h-[calc(100vh-136px)] flex items-center justify-center p-4",children:e.jsxs("div",{className:"w-full max-w-[1200px] grid md:grid-cols-2 gap-8 items-center",children:[e.jsxs("div",{className:"w-full max-w-md mx-auto space-y-6",children:[e.jsxs("div",{className:"space-y-2 text-center",children:[e.jsx("h1",{className:"text-3xl font-bold tracking-tight",children:"LOGIN"}),e.jsx("p",{className:"text-gray-500",children:"Enter your email to receive a login code"})]}),e.jsx("div",{className:"space-y-4",children:e.jsxs(w,{method:"post",id:t.id,onSubmit:t.onSubmit,children:[e.jsx("div",{className:"space-y-2",children:e.jsxs("div",{className:"relative",children:[e.jsx(v,{name:a.email.name,id:"email",type:"text",placeholder:"your@email.com",className:"pl-5 py-6 bg-gray-50/50"}),a.email.errors&&e.jsx(c,{errors:a.email.errors})]})}),e.jsx(c,{errors:t.errors}),e.jsx("div",{className:"h-5"}),e.jsx(y,{type:"submit",disabled:i.isPending,className:S("w-full py-6 bg-purple-600 hover:bg-purple-700",{"opacity-40":i.isPending}),children:"Send Login Code"})]})}),e.jsx("hr",{}),e.jsxs("div",{className:"text-center text-sm",children:["Don't have an account?"," ",e.jsx(I,{to:"/waitlist",className:"text-purple-600 hover:text-purple-700 font-semibold",children:"Join the waitlist"})]})]}),e.jsx("div",{className:"hidden md:block relative h-full min-h-[600px] rounded-3xl overflow-hidden bg-gradient-to-br from-purple-500 to-purple-700",children:e.jsx(j,{src:r,alt:"Street art",className:"object-cover opacity-80 w-full h-full"})})]})})}export{P as default};
