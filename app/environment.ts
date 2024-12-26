type Stage = "prod" | "uat" | "local";
const stage: Stage = "prod"; // process.env.NODE_ENV || "local";

const environment = {
   stage: stage as Stage,
   apiBaseUrl: import.meta.env.VITE_API_URL,
   cookieKey: import.meta.env.VITE_COOKIE_KEY,
};

for (const [key, val] of Object.entries(environment)) {
   if (!val) {
      console.error(`Missing required environment variable: ${key}`);
   }
}

export { environment };
