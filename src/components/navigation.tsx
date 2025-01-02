import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useSession } from "@/hooks/use-session";
import log from "@/lib/logger";
import {
   BookCheck,
   ChevronDown,
   ImageIcon,
   LogIn,
   LogOut,
   Menu,
   Search,
   Settings,
   User,
} from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router";

type Route = "main" | "onboard";

export function Navigation({ forRoute: route }: { forRoute: Route }) {
   const { setIsSearchOpen, isSearchOpen, isSignedIn } = NavigationViewModel();

   return (
      <div className="w-full bg-white border-b-2 fixed top-0 z-50">
         <div className="max-w-screen-2xl m-auto">
            <div className="w-full px-4 py-4 flex items-center justify-between">
               <div className="flex items-center w-64">
                  <Link to="/" className="flex items-center">
                     <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-xl">C</span>
                     </div>
                     <span className="text-xl font-bold ml-1">urated</span>
                  </Link>
               </div>

               {route === "main" && (
                  <div className="hidden md:block flex-grow mx-4 w-full">
                     <div className="w-[25rem] mx-auto">
                        <Search className="absolute ml-3 mt-2 z-0 text-gray-400" size={20} />
                        <Input
                           type="text"
                           placeholder="Search"
                           className="w-full pl-10 pr-4 rounded-xl bg-gray-100 border-none"
                        />
                     </div>
                  </div>
               )}

               {route === "main" && (
                  <div className="flex justify-end w-64">
                     <div className="hidden md:block">
                        {isSignedIn ? <SignedIn /> : <Anonymous />}
                     </div>

                     <div className="md:hidden">
                        <HamburgerMenu onClick={() => setIsSearchOpen(!isSearchOpen)} />
                     </div>
                  </div>
               )}
            </div>
         </div>

         {isSearchOpen && (
            <div className="md:hidden p-4 bg-white">
               <div className="relative">
                  <Input
                     type="text"
                     placeholder="Search..."
                     className="w-full pl-10 pr-4 py-2 rounded-full bg-gray-100 border-none"
                  />
                  <Search
                     className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                     size={20}
                  />
               </div>
            </div>
         )}
      </div>
   );
}

interface HamburgerMenuProps {
   onClick: () => void;
}

const HamburgerMenu = (props: HamburgerMenuProps) => {
   const { signOut, isSignedIn } = NavigationViewModel();

   return (
      <>
         <Button
            variant="ghost"
            size="icon"
            onClick={() => props.onClick()}
            aria-label="Toggle search"
         >
            <Search className="h-5 w-5" />
         </Button>
         <Sheet>
            <SheetTrigger asChild>
               <Button variant="ghost" size="icon" aria-label="Open menu">
                  <Menu className="h-5 w-5" />
               </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
               <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
               </SheetHeader>
               {isSignedIn ? (
                  <div className="mt-6 flex flex-col space-y-4">
                     <Link
                        to="#"
                        className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
                     >
                        <ImageIcon size={20} />
                        <span>Portfolio</span>
                     </Link>
                     <Link
                        to="#"
                        className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
                     >
                        <Settings size={20} />
                        <span>Settings</span>
                     </Link>
                     <Link
                        to={"#"}
                        onClick={signOut}
                        className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
                     >
                        <LogOut size={20} />
                        <span>Sign out</span>
                     </Link>
                  </div>
               ) : (
                  <div className="mt-6 flex flex-col space-y-4">
                     <Link
                        to="sign-in"
                        className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
                     >
                        <LogIn size={20} />
                        <span>Sign in</span>
                     </Link>
                     <Link
                        to="/waitlist"
                        className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
                     >
                        <BookCheck size={20} />
                        <span>Waitlist</span>
                     </Link>
                  </div>
               )}
            </SheetContent>
         </Sheet>
      </>
   );
};

const SignedIn = () => {
   const { signOut } = NavigationViewModel();

   return (
      <div className="hidden md:flex items-center w-full">
         <Link
            to="/"
            className="flex items-center space-x-1 text-sm font-medium text-gray-600 hover:text-gray-900"
         >
            <ImageIcon size={20} />
            <span>Portfolio</span>
         </Link>
         <div className="group ml-5">
            <Button
               variant="ghost"
               className="flex items-center text-sm font-medium text-gray-600 hover:text-gray-900 px-1"
            >
               <User className="-mr-1" />
               <span>Account</span>
               <ChevronDown className="-ml-1" size={16} />
            </Button>
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out z-50">
               <div className="py-1">
                  <Link
                     to="/"
                     className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                     <Settings size={20} />
                     <span className="pl-2">Settings</span>
                  </Link>
                  <Link
                     to={"#"}
                     onClick={signOut}
                     className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                     <LogOut size={20} />
                     <span className="pl-2">Sign out</span>
                  </Link>
               </div>
            </div>
         </div>
      </div>
   );
};

const Anonymous = () => {
   return (
      <div className="hidden md:flex items-center justify-end">
         <Link
            to="/sign-in"
            className="flex items-center w-20 space-x-1 text-sm font-medium text-gray-600 hover:text-gray-900"
         >
            <LogIn size={20} />
            <span>Sign In</span>
         </Link>
         <div className="w-3" />
         <Link
            to="/waitlist"
            className="flex items-center w-28 space-x-1 text-sm font-medium text-gray-600 hover:text-gray-900"
         >
            <BookCheck size={20} />
            <span>Join Waitlist</span>
         </Link>
      </div>
   );
};

const NavigationViewModel = () => {
   const [isSearchOpen, setIsSearchOpen] = useState(false);
   const session = useSession();
   const navigate = useNavigate();

   const signOut = () =>
      session
         .signOut()
         .then(() => setTimeout(() => navigate("/sign-in"), 50))
         .catch((error) => log.error(error));

   return {
      isSearchOpen,
      setIsSearchOpen,
      signOut,
      isSignedIn: session.isSignedIn,
   };
};
