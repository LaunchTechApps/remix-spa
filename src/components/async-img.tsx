import { cn } from "@/lib/util";
import type { ClassValue } from "clsx";
import type { UseQueryResult } from "@tanstack/react-query";

interface AsyncImageProps {
   src: UseQueryResult<string, Error>;
   alt?: string;
   height?: number;
   width?: number;
   className?: ClassValue;
}

const AsyncImg = (props: AsyncImageProps) => {
   const { src, alt, className, height, width } = props;

   return (
      <>
         {src.isLoading && (
            <div className="absolute inset-0 overflow-hidden">
               <div className="absolute inset-0 bg-gray-200">
                  <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200" />
               </div>
            </div>
         )}

         {src.isError && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
               <p className="text-gray-500">Failed to load image</p>
            </div>
         )}

         {src.data && (
            <img
               src={src.data}
               alt={alt}
               className={cn(className)}
               height={height}
               width={width}
            />
         )}
      </>
   );
};

export default AsyncImg;
