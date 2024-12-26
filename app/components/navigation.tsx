import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useSession } from "@/hooks/use-session";
import { Link } from "@remix-run/react";
import { ImageIcon, LogOut, Menu, Search, User } from "lucide-react";
import { useState } from "react";

interface NavigationProps {
   showSearch?: boolean;
   showNavLinks?: boolean;
   isSignedIn?: boolean;
}

export function Navigation({
   showSearch = true,
   showNavLinks = true,
   isSignedIn = false,
}: NavigationProps) {
   const [isSearchOpen, setIsSearchOpen] = useState(false);

   return (
      <div className="w-full bg-white border-b">
         {/* Primary Navigation */}
         <div className="w-full border-b">
            <div className="max-w-screen-2xl mx-auto px-4 py-4 flex justify-between">
               <Logo />
               <SearchBar showSearch={showSearch} />
               <div className="hidden md:flex items-center space-x-4">
                  {showNavLinks && <MobileMenu isSignedIn={isSignedIn} />}
               </div>

               <div className="flex md:hidden items-center space-x-4">
                  {showSearch && (
                     <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setIsSearchOpen(!isSearchOpen)}
                        aria-label="Toggle search"
                     >
                        <Search className="h-5 w-5" />
                     </Button>
                  )}
                  {showNavLinks && <MobileMenu isSignedIn={isSignedIn} />}
               </div>
            </div>
         </div>

         {/* Mobile Search Bar */}
         {isSearchOpen && showSearch && (
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

const MobileMenu = (props: { isSignedIn?: boolean }) => {
   const session = useSession();
   return (
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
            <div className="mt-6 flex flex-col space-y-4">
               {props.isSignedIn && (
                  <Link
                     to="/artist/1"
                     className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
                  >
                     <ImageIcon size={20} />
                     <span>Portfolio</span>
                  </Link>
               )}
               {props.isSignedIn && (
                  <Link
                     to="account"
                     className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
                  >
                     <User size={20} />
                     <span>Account</span>
                  </Link>
               )}
               {props.isSignedIn && (
                  <Link
                     to="sign-in"
                     className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
                     onClick={session.signOut}
                  >
                     <LogOut size={20} />
                     <span>Log Out</span>
                  </Link>
               )}

               {!props.isSignedIn && (
                  <Link
                     to="/sign-in"
                     className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
                  >
                     <User size={20} />
                     <span>Sign In</span>
                  </Link>
               )}
               {!props.isSignedIn && (
                  <Link
                     to="/waitlist"
                     className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
                  >
                     <User size={20} />
                     <span>Waitlist</span>
                  </Link>
               )}
            </div>
         </SheetContent>
      </Sheet>
   );
};

const Logo = () => (
   <Link to="/" className="flex items-center space-x-2">
      <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
         <span className="text-white font-bold text-xl">C</span>
      </div>
      <span className="text-xl font-bold">urated</span>
   </Link>
);

const SearchBar = (props: { showSearch?: boolean }) => {
   if (!props.showSearch) return <></>;

   return (
      <div className="hidden md:flex flex-1 max-w-2xl px-8">
         <div className="relative w-full">
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
   );
};
