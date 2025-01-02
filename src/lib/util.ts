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

export const sleep = {
   mili: (mili: number): Promise<void> => {
      return new Promise((resolve) => setTimeout(resolve, mili));
   },
   seconds: (sec: number): Promise<void> => {
      const milliseconds = milliTo.seconds(sec);
      return new Promise((resolve) => setTimeout(resolve, milliseconds));
   },
};
