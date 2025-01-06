import { Navigation } from "@/components/navigation";
import { Outlet } from "react-router";

export function Onboard() {
   return (
      <div>
         <Navigation forRoute="onboard" />
         <div className="h-14" />
         <Outlet />
      </div>
   );
}
