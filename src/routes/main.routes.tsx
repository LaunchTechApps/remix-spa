import { createBrowserRouter, Outlet } from 'react-router'
import { Toaster } from "@/components/ui/toaster";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import "../tailwind.css";
import { UserSessionProvider } from '@/hooks/use-session';
import { useEffect, useState } from 'react';
import MainLayout from '@/pages/layouts/MainLayout';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { retry: 3 },
  },
});

const routes = [
  {
    path: "/",
    element: <ClientEntry />,
    children: [
      {
        index: true,
        element: <div>this is the child</div>
      }
    ]
  },
];

function ClientEntry() {

  const [isHydrating, setIsHydrating] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsHydrating(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (isHydrating) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="h-12 w-12 animate-spin rounded-full border-[5px] border-blue-600 border-t-transparent" />
      </div>
    );
  }

  return (
    <UserSessionProvider>
      <QueryClientProvider client={queryClient}>
        <MainLayout />
        <Outlet />
      </QueryClientProvider>
      <Toaster />
    </UserSessionProvider>
  );
}

export const router = createBrowserRouter(routes)