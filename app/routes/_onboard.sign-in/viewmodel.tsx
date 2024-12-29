import { api } from "@/api/api";
import { setSecureCookie } from "@/sessions";
import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { useNavigate } from "@remix-run/react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { z } from "zod";

const schema = z.object({
   email: z.string().email(),
});

const getImg = async () => {
   await new Promise((resolve) => setTimeout(resolve, 0));
   const imageUrl = "https://images.unsplash.com/photo-1546930722-a1292ed9dee8";
   return imageUrl;
};

function useImageQuery() {
   return useQuery({
      queryKey: ["getImage"],
      queryFn: getImg,
   });
}

export const ViewModel = () => {
   const imgQuery = useImageQuery();
   const navigate = useNavigate();

   const loginMutate = useMutation({
      mutationFn: (email: string) => api.requestOtp({ email }),
      onSuccess: (_, email: string, __) => {
         setSecureCookie("email", email);
         navigate("/otp");
      },
   });

   const [form, fields] = useForm({
      id: "sign-in",
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
