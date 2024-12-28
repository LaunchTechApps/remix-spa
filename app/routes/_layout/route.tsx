import { Navigation } from "@/components/navigation";
import { Outlet } from "@remix-run/react";

export default function Layout() {
   return (
      <div>
         <Navigation forRoute="main" />
         <div className="mt-12" />
         <Outlet />
      </div>
   );
}