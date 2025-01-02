import { Navigation } from "@/components/navigation";
import { Outlet } from "react-router";

export function Onboard() {
   return (
      <div>
         <Navigation forRoute="onboard" />
         <Outlet />
      </div>
   );
}
