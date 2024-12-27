/**
 * By default, Remix will handle hydrating your app on the client for you.
 * You are free to delete this file if you'd like to, but if you ever want it revealed again, you can run `npx remix reveal` ✨
 * For more information, see https://remix.run/file-conventions/entry.client
 */

import { accessTokenJob, jobInterval, refreshTokenJob } from "@/lib/backgroundJobs";
import { milliTo } from "@/lib/util";
import { RemixBrowser } from "@remix-run/react";
import { StrictMode, startTransition } from "react";
import { hydrateRoot } from "react-dom/client";

startTransition(() => {
   hydrateRoot(
      document,
      <StrictMode>
         <RemixBrowser />
      </StrictMode>,
   );
   jobInterval({
      interval: milliTo.seconds(15),
      timeout: 5000,
      job: () => accessTokenJob(),
   });
   jobInterval({
      interval: milliTo.minutes(5),
      timeout: 5000,
      job: () => refreshTokenJob(),
   });
});
