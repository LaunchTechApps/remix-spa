import { Navigation } from "@/components/navigation";
import { Outlet } from "react-router";

export default function MainLayout() {
   return (
      <div>
         <Navigation forRoute="main" />
         <div />
         <Outlet />
      </div>
   );
}
