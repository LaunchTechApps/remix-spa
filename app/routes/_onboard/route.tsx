import { Navigation } from "@/components/navigation";
import { Outlet } from "@remix-run/react";

export default function Layout() {
   return (
      <div>
         <Navigation forRoute="onboard" />
         <Outlet />
      </div>
   );
}
