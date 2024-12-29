import { useSession } from "@/hooks/use-session";
import { getSecureCookie, setSecureCookie } from "@/sessions";
import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { useNavigate } from "@remix-run/react";
import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";

import { api } from "@/api/api";
import { getErrorResponse } from "@/api/util";
import log from "@/lib/logger";
import { z } from "zod";

const schema = z.object({
   code: z.string(),
});

interface ConfirmOtpProps {
   email: string;
   code: string;
}

export const ViewModel = () => {
   const [otp, setOtp] = useState<string>("");

   const navigate = useNavigate();
   const session = useSession();

   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newOtp = e.target.value.replace(/[^0-9]/g, "");
      setOtp(newOtp);
   };

   const submitOtpMutate = useMutation({
      mutationFn: ({ email, code }: ConfirmOtpProps) => api.confirmOtp({ email, code }),
      onSuccess: (response) => {
         const { accessToken, refreshToken } = response.data;
         if (!accessToken || !refreshToken) {
            log.error("no tokens returned from api");
            return;
         }

         log.info("new accessToken set:", accessToken);
         log.info("new refreshToken set:", refreshToken);

         setSecureCookie("access", accessToken);
         setSecureCookie("refresh", refreshToken, { expires: 30 });
         session.signIn(accessToken);

         navigate("/");
      },
      onError: (error) => getErrorResponse(error).then((e) => log.error(e)),
   });

   useEffect(() => {
      if (session.isSignedIn) navigate("/");
   }, []);

   const [form, fields] = useForm({
      id: "otp-signin",
      onValidate({ formData }) {
         return parseWithZod(formData, { schema });
      },
      shouldRevalidate: "onBlur",
      onSubmit(e, ctx) {
         e.preventDefault();
         const code = ctx.formData.get("code")?.toString() || "";
         const email = getSecureCookie("email");
         if (email && code) {
            submitOtpMutate.mutate({ email, code });
         }
      },
   });

   return {
      otp,
      handleInputChange,
      form,
      fields,
      isSubmitting: submitOtpMutate.isPending,
   };
};
