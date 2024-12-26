import { Link } from "@remix-run/react";
import {
   Facebook,
   Instagram,
   TextIcon as Telegram,
   Twitter,
   PhoneIcon as WhatsApp,
   Youtube,
} from "lucide-react";

export function Footer() {
   return (
      <footer className="bg-[#1C1C24] text-white py-12">
         <div className="px-4 max-w-screen-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
               <div>
                  <Link to="/" className="flex items-center space-x-1">
                     <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-2xl">C</span>
                     </div>
                     <span className="text-xl font-bold">urated</span>
                  </Link>
               </div>

               <div>
                  <h3 className="text-gray-400 uppercase text-sm font-semibold mb-4">PAGES</h3>
                  <ul className="space-y-2">
                     <li>
                        <Link to="/categories" className="hover:text-purple-500">
                           Categories
                        </Link>
                     </li>
                     <li>
                        <Link to="/artists" className="hover:text-purple-500">
                           Artists
                        </Link>
                     </li>
                     <li>
                        <Link to="/portfolio" className="hover:text-purple-500">
                           Portfolio
                        </Link>
                     </li>
                     <li>
                        <Link to="/account" className="hover:text-purple-500">
                           Account
                        </Link>
                     </li>
                  </ul>
               </div>

               <div>
                  <h3 className="text-gray-400 uppercase text-sm font-semibold mb-4">CONTACT US</h3>
                  <ul className="space-y-2">
                     <li>+1 950-971-24-19</li>
                     <li>hello@loopsipsum.com</li>
                  </ul>
               </div>

               <div>
                  <h3 className="text-gray-400 uppercase text-sm font-semibold mb-4">Follow us</h3>
                  <div className="flex space-x-4">
                     <Link
                        to="#"
                        className="w-10 h-10 border border-gray-700 rounded-full flex items-center justify-center hover:border-purple-500 hover:text-purple-500"
                     >
                        <Facebook size={20} />
                     </Link>
                     <Link
                        to="#"
                        className="w-10 h-10 border border-gray-700 rounded-full flex items-center justify-center hover:border-purple-500 hover:text-purple-500"
                     >
                        <Instagram size={20} />
                     </Link>
                     <Link
                        to="#"
                        className="w-10 h-10 border border-gray-700 rounded-full flex items-center justify-center hover:border-purple-500 hover:text-purple-500"
                     >
                        <Youtube size={20} />
                     </Link>
                  </div>
                  <div className="flex space-x-4 mt-4">
                     <Link
                        to="#"
                        className="w-10 h-10 border border-gray-700 rounded-full flex items-center justify-center hover:border-purple-500 hover:text-purple-500"
                     >
                        <Twitter size={20} />
                     </Link>
                     <Link
                        to="#"
                        className="w-10 h-10 border border-gray-700 rounded-full flex items-center justify-center hover:border-purple-500 hover:text-purple-500"
                     >
                        <Telegram size={20} />
                     </Link>
                     <Link
                        to="#"
                        className="w-10 h-10 border border-gray-700 rounded-full flex items-center justify-center hover:border-purple-500 hover:text-purple-500"
                     >
                        <WhatsApp size={20} />
                     </Link>
                  </div>
               </div>
            </div>
         </div>
      </footer>
   );
}
