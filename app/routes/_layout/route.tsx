import { Navigation } from "@/components/navigation";
import { useSession } from "@/hooks/use-session";
import { Outlet, type Params, useMatches } from "@remix-run/react";
import { useMemo } from "react";

export type TopNavSettings = {
   showSearch: boolean;
   showNavLinks: boolean;
   isSignedIn?: boolean;
};

export type Matches = {
   id: string;
   pathname: string;
   params: Params<string>;
   data: unknown;
   handle: unknown;
};

export default function Layout() {
   const { topNavSettings } = LayoutViewModel();
   const { isSignedIn } = useSession();
   return (
      <div>
         <Navigation
            showNavLinks={topNavSettings?.showNavLinks}
            showSearch={topNavSettings?.showSearch}
            isSignedIn={isSignedIn}
         />
         <Outlet />
      </div>
   );
}

const LayoutViewModel = () => {
   const matches = useMatches();

   const topNavSettings = useMemo(() => {
      return matches
         .filter((m: Matches) => isTopNavSettings(m.handle))
         .map((i) => i.handle as TopNavSettings)
         .find((i) => isTopNavSettings(i));
   }, [matches]);

   return { topNavSettings };
};

const isTopNavSettings = (value: unknown): boolean => {
   return (
      typeof value === "object" &&
      value !== null &&
      "showSearch" in value &&
      "showNavLinks" in value &&
      typeof value.showSearch === "boolean" &&
      typeof value.showNavLinks === "boolean"
   );
};
