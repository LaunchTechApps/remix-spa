import { api } from "@/api/api";
import { errorResponse, getErrorResponse } from "@/api/util";
import AsyncImg from "@/components/async-img";
import { useToast } from "@/hooks/use-toast"
import { FormError } from "@/components/form-error";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { useSession } from "@/hooks/use-session";
import log from "@/lib/logger";
import { type SubmissionResult, useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import {
   type ClientActionFunctionArgs,
   Form,
   Link,
   useActionData,
   useLoaderData,
   useNavigate,
} from "@remix-run/react";
import { useEffect, useState } from "react";
import { z } from "zod";

const schema = z.object({
   email: z
      .string()
      .email("Please provide a valid email address.")
      .nonempty("Email is required."),
   checkbox: z.boolean()
});


export const clientAction = async ({ request }: ClientActionFunctionArgs) => {
   const formData = await request.formData();
   const submission = parseWithZod(formData, { schema });

   try {
      const email = formData.get("email")?.valueOf().toString();
      if (!email) {
         return submission.reply({ formErrors: ["Submission error"] });
      }

      await api.registerWaitlist({ email });

      return submission.reply();
   } catch (error) {
      const err = await getErrorResponse(error);
      if (err?.friendlyMsg) {
         return {
            formErrors: ["Email is required."],
            status: "error",
            error: { friendlyError: err.friendlyMsg }
         }
      }
      log.error("Error during client action", { error: err });
      return errorResponse({ formData, schema, error });
   }
};

export const clientLoader = async () => {
   const getImg = async () => {
      await new Promise((resolve) => setTimeout(resolve, 0));
      const imageUrl = "https://images.unsplash.com/photo-1542772144-515ddfae17e9";
      return imageUrl;
   };
   return { imageUrl: getImg() };
};

export default function WaitlistPage() {
   const vm = WaitlistViewModel();
   return (
      <div className="min-h-[calc(100vh-136px)] flex items-center justify-center p-4">
         <div className="w-full max-w-[1200px] grid md:grid-cols-2 gap-8 items-center">
            <div className="w-full max-w-md mx-auto space-y-6">
               <div className="space-y-2 text-center">
                  <h1 className="text-3xl font-bold tracking-tight">EARLY ACCESS</h1>
                  <p className="text-gray-500">Join the waitlist</p>
               </div>
               <Form
                  method="post"
                  id={vm.form.id}
                  onSubmit={vm.form.onSubmit}
                  className="space-y-6"
               >
                  <div className="space-y-4">
                     <div className="space-y-2">
                        <div className="relative">
                           <Input
                              name={vm.fields.email.name}
                              type="email"
                              placeholder="your@email.com"
                              className="pl-5 py-6 bg-gray-50/50"
                           />
                           <FormError errors={vm.fields.email.errors} />
                        </div>
                     </div>
                     <div className="flex items-center space-x-2">
                        <Checkbox name={vm.fields.checkbox.name} id="agree" className="h-4 w-4" />
                        <label htmlFor="agree" className="text-xs font-medium text-gray-700">
                           I agree to receive marketing emails & special deals
                        </label>
                     </div>
                     <FormError errors={vm.fields.checkbox.errors} />
                     <div className="h-12" />
                     <Button
                        type="submit"
                        disabled={vm.isSubmitting}
                        className="w-full py-6 bg-purple-600 hover:bg-purple-700"
                     >
                        JOIN NOW
                     </Button>
                  </div>
               </Form>
               <hr />
               <div className="text-center text-sm">
                  Already have an account?{" "}
                  <Link
                     to="/sign-in"
                     className="text-purple-600 hover:text-purple-700 font-semibold"
                  >
                     Sign In
                  </Link>
               </div>
            </div>
            <div className="hidden md:block relative h-full min-h-[600px] rounded-3xl overflow-hidden bg-gradient-to-br from-purple-500 to-purple-700">
               <AsyncImg
                  src={vm.imageUrl}
                  alt="Street art"
                  className="object-cover opacity-80 w-full h-full"
               />
            </div>
         </div>
      </div>
   );
}

const WaitlistViewModel = () => {
   const action = useActionData<typeof clientAction>();
   const [isSubmitting, setSubmitting] = useState(false);
   const { imageUrl } = useLoaderData<typeof clientLoader>();
   let submissionStatus = action?.status || "";
   const navigate = useNavigate();
   const session = useSession();
   const { toast } = useToast()


   useEffect(() => {
      if (session.isSignedIn) navigate("/");
   }, [session.isSignedIn]);

   const [form, fields] = useForm({
      id: "waitlist-register",
      onValidate({ formData }) {
         return parseWithZod(formData, { schema });
      },
      onSubmit() {
         setSubmitting(true);
         setTimeout(() => setSubmitting(false), 2000);
      },
      lastResult: action as SubmissionResult<string[]> | null | undefined,
      shouldRevalidate: "onBlur",
   });

   useEffect(() => {
      if (submissionStatus === "success") {
         log.info("WORKED!");
         toast({ description: `Success! added '${fields.email.value}' to the waitlist` })
      }
      if (action?.error?.friendlyError) {
         // TODO: need to show this message everytime we get it from the action
         toast({ variant: "destructive", description: action.error.friendlyError });
      }
   }, [submissionStatus]);

   return {
      action,
      form,
      fields,
      isSubmitting,
      imageUrl,
   };
};
