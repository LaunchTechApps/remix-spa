import { sleep } from "@/lib/util";
import { useQuery } from "@tanstack/react-query";
import { fakeData } from "./fake-data";

function getRandNum(min: number, max: number) {
   return Math.random() * (max - min) + min;
}

function useEventsQuery() {
   const waitTime = getRandNum(500, 5000);
   return useQuery({
      queryKey: ["inPersonEvent"],
      queryFn: () => sleep.mili(waitTime).then(() => fakeData.events),
   });
}

function useRecentlyPurchasedQuery() {
   const waitTime = getRandNum(500, 5000);
   return useQuery({
      queryKey: ["recentlyPurchased"],
      queryFn: () => sleep.mili(waitTime).then(() => fakeData.recentlyPurchased),
   });
}

function useTrendingArtworkQuery() {
   const waitTime = getRandNum(500, 5000);
   return useQuery({
      queryKey: ["trendingArtwork"],
      queryFn: () => sleep.mili(waitTime).then(() => fakeData.trendingArtworks),
   });
}

export const ViewModel = () => {
   const eventsQuery = useEventsQuery();
   const recentPurchaseQuery = useRecentlyPurchasedQuery();
   const trendingQuery = useTrendingArtworkQuery();

   return {
      eventsQuery,
      recentPurchaseQuery,
      trendingQuery,
   };
};
