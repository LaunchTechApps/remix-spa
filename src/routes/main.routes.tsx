import "../tailwind.css";
import * as Layout from '@/pages/layouts';
import * as Page from '@/pages';
import { ClientEntry } from '@/entry.client';
import { createBrowserRouter } from 'react-router'

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
            element: <Page.Home />
          },
        ]
      },
      {
        path: "/onboard",
        element: <Layout.Onboard />,
        children: [
          {
            path: "/onboard/signin",
            element: <Page.SignIn />
          },
          {
            path: "/onboard/waitlist",
            element: <Page.Waitlist />,
          },
          {
            path: "/onboard/otp",
            element: <Page.VerifyOtp />
          }
        ]
      }
    ]
  },
];

export const router = createBrowserRouter(routes)