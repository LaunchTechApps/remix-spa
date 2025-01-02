import AsyncImg from "@/components/async-img";
import { FormError } from "@/components/form-error";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/util";
import { ChevronLeft } from "lucide-react";
import { ViewModel } from "./viewmodel";
import { Form, Link } from "react-router";

export default function VerifyOtpPage() {
   const vm = ViewModel();

   return (
      <div className="min-h-[calc(100vh-136px)] flex items-center justify-center p-4">
         <div className="w-full max-w-[1200px] grid md:grid-cols-2 gap-8 items-center">
            <div className="w-full max-w-md mx-auto space-y-8">
               <Card className="w-full">
                  <CardHeader className="space-y-1 text-center">
                     <CardTitle className="text-2xl">OTP Verification</CardTitle>
                     <p className="text-sm text-gray-500">
                        Enter OTP we will send to example@email.com
                     </p>
                  </CardHeader>
                  <CardContent>
                     <Form
                        method="post"
                        id={vm.form.id}
                        onSubmit={vm.form.onSubmit}
                        className="space-y-6"
                     >
                        <div className="flex justify-center space-x-4">
                           <Input
                              name={vm.fields.code.name}
                              type="text"
                              inputMode="numeric"
                              pattern="[0-9]*"
                              maxLength={7}
                              style={{ fontSize: "18px" }}
                              onChange={vm.handleInputChange}
                              className="w-64 h-12 text-center font-semibold tracking-widest text-gray-600"
                              value={vm.otp}
                           />
                        </div>
                        <div className="text-center">
                           {vm.fields.code.errors && <FormError errors={vm.fields.code.errors} />}
                        </div>
                        <Button
                           type="submit"
                           className={cn("w-64 bg-purple-600 hover:bg-purple-700 mx-auto flex", {
                              "opacity-50": vm.isSubmitting,
                           })}
                           disabled={vm.isSubmitting}
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
                  src={vm.onBoardQuery}
                  alt="OTP Verification"
                  className="object-cover opacity-80 h-full w-full"
               />
            </div>
         </div>
      </div>
   );
}
