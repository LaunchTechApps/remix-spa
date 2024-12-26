import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
   return twMerge(clsx(inputs));
}

export const milliTo = {
   seconds: (num: number) => num * 1000,
   minutes: (num: number) => milliTo.seconds(num) * 60,
   hours: (num: number) => milliTo.minutes(num) * 60,
   days: (num: number) => milliTo.hours(num) * 24,
};

export const secondsTo = {
   minutes: (num: number) => num * 60,
   hours: (num: number) => secondsTo.minutes(num) * 60,
   days: (num: number) => secondsTo.hours(num) * 24,
};

export const sleep = async (milli: number) =>
   await new Promise((resolve) => setTimeout(resolve, milli));

interface StartIntervalProps {
   interval: number;
   jobs: (() => Promise<void>)[];
   timeout: number;
}

export const jobInterval = async ({ interval, jobs, timeout }: StartIntervalProps) => {
   const allFuncs = async () => {
      try {
         const timeoutPromise = new Promise((_, reject) =>
            setTimeout(() => reject(new Error("Timeout reached!")), timeout),
         );

         const allJobs = Promise.all(jobs.map((f) => f()));

         await Promise.race([allJobs, timeoutPromise]);
      } catch (error) {
         console.error("Error running background jobs:", error);
      }
   };
   await sleep(0);
   await allFuncs();
   setInterval(async () => {
      await allFuncs();
   }, interval);
};
