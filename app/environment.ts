import log from "@/lib/logger";

export type Stage = "prod" | "uat" | "local";
export type LogLevel = "debug" | "info" | "warn" | "error";

const environment = {
   apiBaseUrl: import.meta.env.VITE_API_URL,
   cookieKey: import.meta.env.VITE_COOKIE_KEY,
   stage: import.meta.env.VITE_STAGE as Stage,
};

for (const [key, val] of Object.entries(environment)) {
   if (!val) {
      log.error(`MISSING ENV VAR: "${key}"`);
   }
}

export { environment };
