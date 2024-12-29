import { api } from "@/api/api";
import { getErrorResponse } from "@/api/util";
import { useSession } from "@/hooks/use-session";
import { useToast } from "@/hooks/use-toast";
import log from "@/lib/logger";
import { sleep } from "@/lib/util";
import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { useNavigate, } from "@remix-run/react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { z } from "zod";

const schema = z.object({
   email: z.string().email("Please provide a valid email address.").nonempty("Email is required."),
   checkbox: z.boolean(),
});

export const ViewModel = () => {
   const navigate = useNavigate();
   const session = useSession();
   const { toast } = useToast();

   const waitlistImgQuery = useQuery({
      queryKey: ["waitlistPageImage"],
      queryFn: () => sleep.mili(500)
         .then(() => "https://images.unsplash.com/photo-1542772144-515ddfae17e9")
   })

   const registerWaitlistMutate = useMutation({
      mutationKey: ["registerWaitlist"],
      mutationFn: (email: string) => api.registerWaitlist({ email }),
      onSuccess: (_, email) => toast({ description: `Success! ${email} was added to the waitlist` }),
      onError: (error) => getErrorResponse(error)
         .then(e => { log.error(e); return e; })
         .then(e => e?.friendlyMsg && toast({ variant: "destructive", description: e.friendlyMsg }))
         .catch(e => log.error(e))
   })

   useEffect(() => { if (session.isSignedIn) navigate("/"); }, []);

   const [form, fields] = useForm({
      id: "waitlist-register",
      onValidate({ formData }) {
         return parseWithZod(formData, { schema });
      },
      onSubmit(e, ctx) {
         e.preventDefault();
         const email = ctx.formData.get("email")?.toString() || "";
         if (email) {
            registerWaitlistMutate.mutate(email)
         }
      },
      shouldRevalidate: "onBlur",
   });

   return {
      form,
      fields,
      isSubmitting: registerWaitlistMutate.isPending,
      waitlistImgQuery,
   };
};
