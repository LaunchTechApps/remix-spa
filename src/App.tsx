// import { Toaster } from "@/components/ui/toaster";
// import type { LinksFunction } from "@remix-run/node";
// import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// // import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

// import "./tailwind.css";
// import { UserSessionProvider } from "./hooks/use-session";

// export const links: LinksFunction = () => [
//    { rel: "preconnect", href: "https://fonts.googleapis.com" },
//    {
//       rel: "preconnect",
//       href: "https://fonts.gstatic.com",
//       crossOrigin: "anonymous",
//    },
//    {
//       rel: "stylesheet",
//       href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
//    },
// ];

// const queryClient = new QueryClient({
//    defaultOptions: {
//       queries: { retry: 3 },
//    },
// });

// export function Layout({ children }: { children: React.ReactNode }) {
//    return (
//       <html lang="en">
//          <head>
//             <meta charSet="utf-8" />
//             <meta name="viewport" content="width=device-width, initial-scale=1" />
//             <Meta />
//             <Links />
//          </head>
//          <body>
//             <UserSessionProvider>
//                <QueryClientProvider client={queryClient}>
//                   {children}
//                   {/* <ReactQueryDevtools initialIsOpen={false} /> */}
//                </QueryClientProvider>
//                <Toaster />
//             </UserSessionProvider>
//             <ScrollRestoration />
//             <Scripts />
//          </body>
//       </html>
//    );
// }

// export default function App() {
//    return <Outlet />;
// }

// export function HydrateFallback() {
//    return (
//       <div className="flex h-screen items-center justify-center">
//          <div className="h-12 w-12 animate-spin rounded-full border-[5px] border-blue-600 border-t-transparent" />
//       </div>
//    );
// }
