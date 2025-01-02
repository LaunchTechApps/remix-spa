import ReactDOM from "react-dom/client";
import { RouterProvider } from 'react-router'
import "./tailwind.css";
import { router } from "@/routes/main.routes";
import React from "react";


const rootElement: HTMLElement | null = document.getElementById("root");
if (rootElement) {
   const reactRoot: ReactDOM.Root = ReactDOM.createRoot(rootElement);
   reactRoot.render(
      <React.StrictMode>
         <RouterProvider router={router} />
      </React.StrictMode>
   );
}
