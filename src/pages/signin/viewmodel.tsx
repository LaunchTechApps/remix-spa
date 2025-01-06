import { api } from "@/api/api";
import { sleep } from "@/lib/util";
import { setSecureCookie } from "@/sessions";
import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { z } from "zod";

const schema = z.object({
   email: z.string().email(),
});

function useImageQuery() {
   return useQuery({
      queryKey: ["signInImg"],
      queryFn: () => sleep.mili(1500)
         .then(() => "https://images.unsplash.com/photo-1546930722-a1292ed9dee8"),
   });
}

export const ViewModel = () => {
   const imgQuery = useImageQuery();
   const navigate = useNavigate();

   const loginMutate = useMutation({
      mutationFn: (email: string) => api.requestOtp({ email }),
      onSuccess: (_, email: string, __) => {
         setSecureCookie("email", email);
         navigate("/onboard/otp");
      },
   });

   const [form, fields] = useForm({
      id: "/onboard/signin",
      onValidate({ formData }) {
         return parseWithZod(formData, { schema });
      },
      onSubmit: (e, ctx) => {
         e.preventDefault();
         const email = ctx.formData.get("email")?.toString() || "";
         loginMutate.mutate(email);
      },
      shouldRevalidate: "onBlur",
   });

   return {
      imgQuery,
      loginMutate,
      form,
      fields,
   };
};
