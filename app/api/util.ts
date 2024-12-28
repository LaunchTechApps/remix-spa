import { parseWithZod } from "@conform-to/zod";
import type { z } from "zod";

class ApiResponseError {
   status?: number;
   errors?: string[];
   friendlyMsg?: string;
   message = "unknown error";
   isStatus(status: number) {
      return this.status === status;
   }
}

export async function getErrorResponse(response: unknown): Promise<ApiResponseError | null> {
   if (!(response instanceof Response)) {
      return null;
   }

   const result = new ApiResponseError();
   result.status = response.status;

   try {
      const body = await response.json();

      if (body && typeof body === "object" && body !== null) {
         const { errors, friendlyMsg, message } = body;

         if (Array.isArray(errors) && errors.every((e) => typeof e === "string")) {
            result.errors = errors;
         }
         if (typeof message === "string") {
            result.message = message;
         }
         if (typeof friendlyMsg === "string") {
            result.friendlyMsg = friendlyMsg;
         }
      }
   } catch (_) {}

   return result;
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
      if (errRes && errRes.friendlyMsg !== undefined) {
         return submission.reply({ formErrors: [errRes.friendlyMsg] });
      }
   } catch (_) {}

   return submission.reply({ formErrors: ["Unknown error"] });
}

export const HttpStatus = {
   // 1xx Informational responses
   Continue: 100,
   SwitchingProtocols: 101,
   Processing: 102,
   EarlyHints: 103,

   // 2xx Success
   OK: 200,
   Created: 201,
   Accepted: 202,
   NonAuthoritativeInformation: 203,
   NoContent: 204,
   ResetContent: 205,
   PartialContent: 206,
   MultiStatus: 207,
   AlreadyReported: 208,
   IMUsed: 226,

   // 3xx Redirection
   MultipleChoices: 300,
   MovedPermanently: 301,
   Found: 302,
   SeeOther: 303,
   NotModified: 304,
   UseProxy: 305,
   TemporaryRedirect: 307,
   PermanentRedirect: 308,

   // 4xx Client errors
   BadRequest: 400,
   Unauthorized: 401,
   PaymentRequired: 402,
   Forbidden: 403,
   NotFound: 404,
   MethodNotAllowed: 405,
   NotAcceptable: 406,
   ProxyAuthenticationRequired: 407,
   RequestTimeout: 408,
   Conflict: 409,
   Gone: 410,
   LengthRequired: 411,
   PreconditionFailed: 412,
   PayloadTooLarge: 413,
   URITooLong: 414,
   UnsupportedMediaType: 415,
   RangeNotSatisfiable: 416,
   ExpectationFailed: 417,
   ImATeapot: 418,
   MisdirectedRequest: 421,
   UnprocessableEntity: 422,
   Locked: 423,
   FailedDependency: 424,
   TooEarly: 425,
   UpgradeRequired: 426,
   PreconditionRequired: 428,
   TooManyRequests: 429,
   RequestHeaderFieldsTooLarge: 431,
   UnavailableForLegalReasons: 451,

   // 5xx Server errors
   InternalServerError: 500,
   NotImplemented: 501,
   BadGateway: 502,
   ServiceUnavailable: 503,
   GatewayTimeout: 504,
   HTTPVersionNotSupported: 505,
   VariantAlsoNegotiates: 506,
   InsufficientStorage: 507,
   LoopDetected: 508,
   NotExtended: 510,
   NetworkAuthenticationRequired: 511,
};

type ContentType = "application/json" | "text/html" | "application/xml" | "multipart/form-data";
export class HeadersBuilder {
   private headers = new Headers();

   static New(): HeadersBuilder {
      return new HeadersBuilder();
   }

   setAccessToken(accessToken: string): this {
      this.headers.append("x-cur-access", accessToken);
      return this;
   }

   setRefreshToken(refreshToken: string): this {
      this.headers.append("x-cur-refresh", refreshToken);
      return this;
   }

   setContentType(contentType: ContentType): this {
      this.headers.append("Content-Type", contentType);
      return this;
   }

   build(): { headers: Headers } {
      return { headers: this.headers };
   }
}
