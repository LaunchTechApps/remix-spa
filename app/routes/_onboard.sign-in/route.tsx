import AsyncImg from "@/components/async-img";
import { FormError } from "@/components/form-error";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/util";
import { Form, Link } from "@remix-run/react";
import { ViewModel } from "./viewmodel";

export default function SignInPage() {
   const { form, fields, loginMutate, imgQuery } = ViewModel();

   return (
      <div className="min-h-[calc(100vh-136px)] flex items-center justify-center p-4">
         <div className="w-full max-w-[1200px] grid md:grid-cols-2 gap-8 items-center">
            <div className="w-full max-w-md mx-auto space-y-6">
               <div className="space-y-2 text-center">
                  <h1 className="text-3xl font-bold tracking-tight">LOGIN</h1>
                  <p className="text-gray-500">Enter your email to receive a login code</p>
               </div>
               <div className="space-y-4">
                  <Form method="post" id={form.id} onSubmit={form.onSubmit}>
                     <div className="space-y-2">
                        <div className="relative">
                           <Input
                              name={fields.email.name}
                              id="email"
                              type="text"
                              placeholder="your@email.com"
                              className="pl-5 py-6 bg-gray-50/50"
                           />
                           {fields.email.errors && <FormError errors={fields.email.errors} />}
                        </div>
                     </div>
                     <FormError errors={form.errors} />
                     <div className="h-5" />
                     <Button
                        type="submit"
                        disabled={loginMutate.isPending}
                        className={cn("w-full py-6 bg-purple-600 hover:bg-purple-700", {
                           "opacity-40": loginMutate.isPending,
                        })}
                     >
                        Send Login Code
                     </Button>
                  </Form>
               </div>

               <hr />
               <div className="text-center text-sm">
                  Don&apos;t have an account?{" "}
                  <Link
                     to="/waitlist"
                     className="text-purple-600 hover:text-purple-700 font-semibold"
                  >
                     Join the waitlist
                  </Link>
               </div>
            </div>
            <div className="hidden md:block relative h-full min-h-[600px] rounded-3xl overflow-hidden bg-gradient-to-br from-purple-500 to-purple-700">
               <AsyncImg
                  src={imgQuery}
                  alt="Street art"
                  className="object-cover opacity-80 w-full h-full"
               />
            </div>
         </div>
      </div>
   );
}
