import AsyncImg from "@/components/async-img";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Link, useLoaderData } from "@remix-run/react";

const getImg = async () => {
   await new Promise((resolve) => setTimeout(resolve, 0));
   const imageUrl = "https://images.unsplash.com/photo-1542772144-515ddfae17e9";
   return imageUrl;
};

export const clientLoader = async () => {
   return { imageUrl: getImg() };
};

export default function RegisterPage() {
   const { imageUrl } = useLoaderData<typeof clientLoader>();
   return (
      <div className="min-h-[calc(100vh-136px)] flex items-center justify-center p-4">
         <div className="w-full max-w-[1200px] grid md:grid-cols-2 gap-8 items-center">
            <div className="w-full max-w-md mx-auto space-y-6">
               <div className="space-y-2 text-center">
                  <h1 className="text-3xl font-bold tracking-tight">EARLY ACCESS</h1>
                  <p className="text-gray-500">Join the waitlist</p>
               </div>
               <div className="space-y-4">
                  <div className="space-y-2">
                     <div className="relative">
                        <Input
                           type="email"
                           placeholder="your@email.com"
                           className="pl-5 py-6 bg-gray-50/50"
                        />
                     </div>
                  </div>
                  <div className="flex items-center space-x-2">
                     <Checkbox id="agree" className="h-4 w-4" />
                     <label htmlFor="agree" className="text-xs font-medium text-gray-700">
                        I agree to receive marketing emails & special deals
                     </label>
                  </div>
                  <div className="h-12" />
                  <Button className="w-full py-6 bg-purple-600 hover:bg-purple-700">
                     JOIN NOW
                  </Button>
               </div>
               <hr />
               <div className="text-center text-sm">
                  Already have an account?{" "}
                  <Link
                     to="/sign-in"
                     className="text-purple-600 hover:text-purple-700 font-semibold"
                  >
                     Sign In
                  </Link>
               </div>
            </div>
            <div className="hidden md:block relative h-full min-h-[600px] rounded-3xl overflow-hidden bg-gradient-to-br from-purple-500 to-purple-700">
               <AsyncImg
                  src={imageUrl}
                  alt="Street art"
                  className="object-cover opacity-80 w-full h-full"
               />
            </div>
         </div>
      </div>
   );
}
