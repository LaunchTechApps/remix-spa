import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronLeft } from 'lucide-react'
import { type ClientActionFunctionArgs, Form, Link, redirect, useActionData, useNavigate } from '@remix-run/react'
import AsyncImg from '@/components/async-img'
import type { TopNavSettings } from '@/routes/_layout/route'
import { useForm } from '@conform-to/react'
import { z } from 'zod'
import { parseWithZod } from '@conform-to/zod'
import { errorResponse } from '@/api/util'
import { FormError } from '@/components/form-error'
import { getSecureCookie, setSecureCookie } from '@/sessions'
import { api } from '@/api/api'
import { useSession } from '@/hooks/use-session'
import log from '@/lib/logger'

export const handle: TopNavSettings = {
   showSearch: false,
   showNavLinks: false,
};

const schema = z.object({
   code: z.string(),
});

export const clientAction = async ({ request }: ClientActionFunctionArgs) => {
   const formData = await request.formData();
   try {
      const submission = parseWithZod(formData, { schema });

      const code = formData.get("code")?.valueOf().toString();
      const email = getSecureCookie("email");
      if (!code || !email) {
         return submission.reply({ formErrors: ["Submission error"] });
      }
      const { accessToken, refreshToken } = (await api.confirmOtp({ email, code })).data
      if (!accessToken || !refreshToken) {
         return submission.reply({ formErrors: ["Submission error"] });
      }
      log.info("new accessToken set:", accessToken)
      log.info("new refreshToken set:", refreshToken)
      setSecureCookie("access", accessToken)
      setSecureCookie("refresh", refreshToken, { expires: 30 })
      return submission.reply();
   } catch (error) {
      return errorResponse({ formData, schema, error })
   }
};

export default function VerifyOTPPage() {
   const action = useActionData<typeof clientAction>();
   const [otp, setOtp] = useState<string>("");

   const navigate = useNavigate();
   const session = useSession()

   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newOtp = e.target.value.replace(/[^0-9]/g, '');
      setOtp(newOtp);
   };


   if (action?.status === "success") {
      const accessToken = getSecureCookie("access")
      const refreshToken = getSecureCookie("refresh")
      if (accessToken && refreshToken) {
         session.signIn(accessToken)
         navigate("/")
      }
   }

   const [form, fields] = useForm({
      id: "otp-signin",
      onValidate({ formData }) {
         return parseWithZod(formData, { schema });
      },
      lastResult: action,
      shouldRevalidate: "onBlur",
   })

   return (
      <div className="min-h-[calc(100vh-136px)] flex items-center justify-center p-4">
         <div className="w-full max-w-[1200px] grid md:grid-cols-2 gap-8 items-center">
            <div className="w-full max-w-md mx-auto space-y-8">
               <Card className="w-full">
                  <CardHeader className="space-y-1 text-center">
                     <CardTitle className="text-2xl">OTP Verification</CardTitle>
                     <p className="text-sm text-gray-500">
                        Enter OTP we will send to useradmit@gmail.com
                     </p>
                  </CardHeader>
                  <CardContent>
                     <Form method='post' id={form.id} onSubmit={form.onSubmit} className="space-y-6">
                        <div className="flex justify-center space-x-4">
                           <Input
                              name={fields.code.name}
                              type="text"
                              inputMode="numeric"
                              pattern="[0-9]*"
                              maxLength={7}
                              style={{ fontSize: '18px' }}
                              onChange={handleInputChange}
                              className="w-64 h-12 text-center font-semibold tracking-widest text-gray-600"
                              value={otp}
                           />
                        </div>
                        <div className='text-center'>
                           {fields.code.errors && <FormError errors={fields.code.errors} />}
                        </div>
                        <Button
                           type="submit"
                           className="w-64 bg-purple-600 hover:bg-purple-700 mx-auto flex"
                        >
                           Confirm
                        </Button>
                        <div className="text-center">
                           <Link
                              to="/sign-in"
                              className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900"
                           >
                              <ChevronLeft className="w-4 h-4 mr-1" />
                              Back to log in
                           </Link>
                        </div>
                     </Form>
                  </CardContent>
               </Card>
            </div>
            <div className="hidden md:block relative h-full min-h-[600px] rounded-3xl overflow-hidden bg-gradient-to-br from-purple-500 to-purple-700">
               <AsyncImg
                  src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=1200&fit=crop"
                  alt="OTP Verification"
                  className="object-cover opacity-80 h-full w-full"
               />
            </div>
         </div>
      </div>
   )
}

