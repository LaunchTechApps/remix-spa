type Stage = "prod" | "uat" | "local";
const stage: Stage = "prod"; // process.env.NODE_ENV || "local";

const environment = {
   STAGE: stage as Stage,
   API_URL: import.meta.env.VITE_API_URL,
};

for (const [key, val] of Object.entries(environment)) {
   if (!val) {
      console.error(`Missing required environment variable: ${key}`);
   }
   if (val) console.log(`We have the environment variable: ${key}`);
}

export { environment };
