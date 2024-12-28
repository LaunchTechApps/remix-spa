import { api } from "@/api/api";
import { getErrorResponse } from "@/api/util";
import AsyncImg from "@/components/async-img";
import { FormError } from "@/components/form-error";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/util";
import { getSecureCookie, setSecureCookie } from "@/sessions";
import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import {
   type ClientActionFunctionArgs,
   Form,
   Link,
   redirect,
   useActionData,
   useLoaderData,
   useNavigation,
} from "@remix-run/react";
import { z } from "zod";

const schema = z.object({
   email: z.string().email(),
});

export const clientAction = async ({ request }: ClientActionFunctionArgs) => {
   const formData = await request.formData();
   const submission = parseWithZod(formData, { schema });
   try {
      const email = formData.get("email")?.valueOf().toString();
      if (!email) return submission.reply({ formErrors: ["Email was not submitted"] });
      await api.requestOtp({ email });
      setSecureCookie("email", email);
   } catch (error) {
      const errRes = await getErrorResponse(error);
      if (errRes && errRes.friendlyMsg !== undefined) {
         return submission.reply({ formErrors: [errRes.friendlyMsg] });
      }
      return submission.reply({ formErrors: ["Unknown error"] });
   }

   return redirect("/otp");
};

export const clientLoader = async () => {
   const getImg = async () => {
      await new Promise((resolve) => setTimeout(resolve, 0));
      const imageUrl = "https://images.unsplash.com/photo-1546930722-a1292ed9dee8";
      return imageUrl;
   };

   if (getSecureCookie("access")) {
      return redirect("/");
   }
   return { imageUrl: getImg() };
};

export default function SignInPage() {
   const { imageUrl } = useLoaderData<typeof clientLoader>();
   const action = useActionData<typeof clientAction>();
   const navigation = useNavigation();

   const [form, fields] = useForm({
      id: "sign-in",
      onValidate({ formData }) {
         return parseWithZod(formData, { schema });
      },
      lastResult: action,
      shouldRevalidate: "onBlur",
   });

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
                        disabled={navigation.state === "submitting"}
                        className={cn("w-full py-6 bg-purple-600 hover:bg-purple-700", {
                           "opacity-40": navigation.state === "submitting",
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
                  src={imageUrl}
                  alt="Street art"
                  className="object-cover opacity-80 w-full h-full"
               />
            </div>
         </div>
      </div>
   );
}
