import { Toaster } from "@/components/ui/toaster";
import { UserSessionProvider } from "@/hooks/use-session";
import { accessTokenJob, createJobInterval, refreshTokenJob } from "@/lib/backgroundJobs";
import { milliTo } from "@/lib/util";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { Outlet } from "react-router";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

createJobInterval({
   interval: milliTo.seconds(15),
   timeout: 5000,
   runOnStart: true,
   job: accessTokenJob,
});

createJobInterval({
   interval: milliTo.minutes(5),
   timeout: 5000,
   runOnStart: true,
   job: refreshTokenJob,
});

const queryClient = new QueryClient({
   defaultOptions: {
      queries: { retry: 3 },
   },
});

export function ClientEntry() {
   const [isHydrating, setIsHydrating] = useState(true);

   useEffect(() => {
      const timer = setTimeout(() => setIsHydrating(false), 1000);
      return () => clearTimeout(timer);
   }, []);

   if (isHydrating) {
      return (
         <div className="flex h-screen items-center justify-center">
            <div className="h-12 w-12 animate-spin rounded-full border-[5px] border-blue-600 border-t-transparent" />
         </div>
      );
   }

   return (
      <UserSessionProvider>
         <QueryClientProvider client={queryClient}>
            <Outlet />
         </QueryClientProvider>
         <Toaster />
      </UserSessionProvider>
   );
}
