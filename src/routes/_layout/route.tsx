import { Navigation } from "@/components/navigation";
import { Outlet } from "react-router";

export default function Layout() {
   return (
      <div>
         <Navigation forRoute="main" />
         <div />
         <Outlet />
      </div>
   );
}
