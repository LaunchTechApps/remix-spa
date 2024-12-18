import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, ImageIcon, User, Menu, ChevronDown } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Link } from "@remix-run/react";

export function Navigation() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <div className="w-full bg-white border-b">
      {/* Primary Navigation */}
      <div className="w-full border-b">
        <div className="w-full px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">C</span>
            </div>
            <span className="text-xl font-bold">urated</span>
          </Link>

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

          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/artist/1"
              className="flex items-center space-x-1 text-sm font-medium text-gray-600 hover:text-gray-900"
            >
              <ImageIcon size={20} />
              <span>Portfolio</span>
            </Link>
            <div className="relative group">
              <Button
                variant="ghost"
                className="flex items-center space-x-1 text-sm font-medium text-gray-600 hover:text-gray-900 p-0 h-auto"
              >
                <User size={20} />
                <span>Account</span>
                <ChevronDown size={16} />
              </Button>
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out z-50">
                <div className="py-1">
                  <Link
                    to="/sign-in"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Sign In
                  </Link>
                  <Link
                    to="/register"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Register
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="flex md:hidden items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
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
                <div className="mt-6 flex flex-col space-y-4">
                  <Link
                    to="/artist/1"
                    className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
                  >
                    <ImageIcon size={20} />
                    <span>Portfolio</span>
                  </Link>
                  <Link
                    to="/register"
                    className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
                  >
                    <User size={20} />
                    <span>Register</span>
                  </Link>
                  <Link
                    to="/sign-in"
                    className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
                  >
                    <User size={20} />
                    <span>Sign In</span>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      {/* Mobile Search Bar */}
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
