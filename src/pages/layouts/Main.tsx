import { Navigation } from "@/components/navigation";
import { Outlet } from "react-router";

export function Main() {
   return (
      <div>
         <Navigation forRoute="main" />
         <div />
         <Outlet />
      </div>
   );
}
