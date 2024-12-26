import { cn } from "@/lib/util";
import type { ClassValue } from "clsx";
import { useEffect, useState } from "react";

interface AsyncImageProps {
   src: string | Promise<string>;
   alt?: string;
   height?: number;
   width?: number;
   className?: ClassValue;
}

const AsyncImg = (props: AsyncImageProps) => {
   const { src, alt, className, height, width } = props;
   const [isLoading, setIsLoading] = useState<boolean>(true);
   const [error, setError] = useState<boolean>(false);
   const [imageSrc, setImageSrc] = useState<string>("");

   useEffect(() => {
      const loadImage = async () => {
         try {
            const resolvedSrc = typeof src === "string" ? src : await src;
            setImageSrc(resolvedSrc);
         } catch (_) {
            setError(true);
            setIsLoading(false);
         }
      };

      loadImage();
   }, [src]);

   const handleLoad = (): void => {
      setIsLoading(false);
   };

   const handleError = (): void => {
      setIsLoading(false);
      setError(true);
   };

   return (
      <>
         {isLoading && (
            <div className="absolute inset-0 overflow-hidden">
               <div className="absolute inset-0 bg-gray-200">
                  <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200" />
               </div>
            </div>
         )}

         {error && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
               <p className="text-gray-500">Failed to load image</p>
            </div>
         )}

         {imageSrc && (
            <img
               src={imageSrc}
               alt={alt}
               className={cn(isLoading && "invisible", className)}
               height={height}
               width={width}
               onLoad={handleLoad}
               onError={handleError}
            />
         )}
      </>
   );
};

export default AsyncImg;
