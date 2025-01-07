import "../tailwind.css";
import { ClientEntry } from "@/entry.client";
import * as Page from "@/pages";
import * as Layout from "@/pages/layouts";
import { createBrowserRouter } from "react-router";

const routes = [
   {
      path: "/",
      element: <ClientEntry />,
      children: [
         {
            path: "/",
            element: <Layout.Main />,
            children: [
               {
                  index: true,
                  element: <Page.Home />,
               },
               {
                  path: "portfolio",
                  element: <Page.Home />,
               },
            ],
         },
         {
            path: "/onboard",
            element: <Layout.Onboard />,
            children: [
               {
                  path: "signin",
                  element: <Page.SignIn />,
               },
               {
                  path: "waitlist",
                  element: <Page.Waitlist />,
               },
               {
                  path: "otp",
                  element: <Page.VerifyOtp />,
               },
            ],
         },
      ],
   },
];

export const router = createBrowserRouter(routes, {
   basename: "/remix-spa", // Set your base path here
});
