import type { CtrlutilErrorBody, CtrlutilErrorResponse } from "@/api/client.g";
import { parseWithZod } from "@conform-to/zod";
import type { z } from "zod";

class ResponseError extends Error {
   public status: number | undefined;
   public body: CtrlutilErrorBody | undefined;

   constructor(
      message: string | undefined,
      body: CtrlutilErrorBody | undefined,
      status: number | undefined,
   ) {
      super(message || "An error occurred");
      this.name = "CustomCtrlutilError";
      this.body = body;
      this.status = status;
   }
}

export async function getErrorResponse(response: unknown): Promise<ResponseError | null> {
   if (!(response instanceof Response)) {
      return null;
   }

   try {
      const error = await response.json();

      if (typeof error !== "object" || error === null) {
         return null;
      }

      const { body, status } = error as CtrlutilErrorResponse;

      if (body) {
         if (typeof body !== "object" || body === null) {
            return null;
         }

         const { errors, friendlyMsg, message } = body;

         if (
            (errors && !Array.isArray(errors)) ||
            (friendlyMsg && typeof friendlyMsg !== "string") ||
            (message && typeof message !== "string")
         ) {
            return null;
         }
      }

      if (status && typeof status !== "number") {
         return null;
      }

      return new ResponseError(error.message, body, status);
   } catch (_) {
      return null;
   }
}

interface ErrorResponseProps {
   formData: FormData;
   schema: z.ZodTypeAny;
   error: unknown;
}
export async function errorResponse({ formData, schema, error }: ErrorResponseProps) {
   const submission = parseWithZod(formData, { schema });
   try {
      const errRes = await getErrorResponse(error);
      if (errRes && errRes.body?.friendlyMsg !== undefined) {
         return submission.reply({ formErrors: [errRes.body?.friendlyMsg] });
      }
   } catch (_) {}

   return submission.reply({ formErrors: ["Unknown error"] });
}

// async function exampleApi() {
//    const response = await api.isActive(
//       { type: "refresh" },
//       {
//          headers: {
//             "x-cur-access": "{{accessToken}}",
//             "x-cur-refresh": "{{refreshToken}}",
//          },
//       },
//    );
//    const result = response.data.message;
//    console.log("isActive result:", result);
// }
