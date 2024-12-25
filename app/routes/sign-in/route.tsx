import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";
import { Link, useLoaderData } from "@remix-run/react";
import AsyncImg from "@/components/async-img";

const getImg = async () => {
   await new Promise((resolve) => setTimeout(resolve, 0));
   const imageUrl = "https://images.unsplash.com/photo-1546930722-a1292ed9dee8";
   return imageUrl;
};

export const clientLoader = async () => {
   return { imageUrl: getImg() };
};

export default function SignInPage() {
   const { imageUrl } = useLoaderData<typeof clientLoader>();

   return (
      <div className="min-h-[calc(100vh-136px)] flex items-center justify-center p-4">
         <div className="w-full max-w-[1200px] grid md:grid-cols-2 gap-8 items-center">
            <div className="w-full max-w-md mx-auto space-y-6">
               <div className="space-y-2 text-center">
                  <h1 className="text-3xl font-bold tracking-tight">LOGIN</h1>
                  <p className="text-gray-500">Enter your email to receive a login code</p>
               </div>
               <div className="space-y-4">
                  <div className="space-y-2">
                     <div className="relative">
                        <Input
                           type="email"
                           placeholder="Email"
                           className="pl-10 py-6 bg-gray-50/50"
                        />
                        <Mail
                           className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                           size={20}
                        />
                     </div>
                  </div>
                  <Button className="w-full py-6 bg-purple-600 hover:bg-purple-700">
                     Send Login Code
                  </Button>
               </div>
               <div className="text-center text-sm">
                  Don&apos;t have an account?{" "}
                  <Link
                     to="/register"
                     className="text-purple-600 hover:text-purple-700 font-semibold"
                  >
                     Register
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
