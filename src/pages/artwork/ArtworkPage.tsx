import { NewArtworkModal } from "@/components/new-artwork-modal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
   Carousel,
   CarouselContent,
   CarouselItem,
   CarouselNext,
   CarouselPrevious,
} from "@/components/ui/carousel";
import {
   Dialog,
   DialogContent,
   DialogDescription,
   DialogFooter,
   DialogHeader,
   DialogTitle,
} from "@/components/ui/dialog";
import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuItem,
   DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import log from "@/lib/logger";
import { ExternalLink, MoreHorizontal, Pencil, Trash2 } from "lucide-react";
import { useState } from "react";
import { Link, type LoaderFunctionArgs, useLoaderData } from "react-router";

type ArtworkType = {
   id: number;
   name: string;
   images: string[];
   dimensions: string;
   unit: string;
   medium: string;
   description: string;
   artist: {
      id: number;
      name: string;
      image: string;
   };
   links: {
      name: string;
      url: string;
   }[];
   status: "available" | "sold" | "reserved";
   soldDate?: string;
};

// export async function loader({ params }: LoaderFunctionArgs) {
//    const { id } = params;
//    log.info("id used", id);

//    return {
//       id: 1,
//       name: "Urban Jungle",
//       images: [
//          "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=500&h=500&fit=crop",
//          "https://images.unsplash.com/photo-1536924940846-227afb31e2a5?w=500&h=500&fit=crop",
//          "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=500&h=500&fit=crop",
//          "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=500&h=500&fit=crop",
//       ],
//       dimensions: "24 x 36",
//       unit: "inches",
//       medium: "Acrylic, Pastel on Canvas",
//       description:
//          "Vibrant painting with bold colors and dynamic patterns represent skyscrapers intertwined with foliage, capturing the harmony and chaos of urban environments.",
//       artist: {
//          id: 1,
//          name: "Gabe Moskolis",
//          image: "https://images.unsplash.com/photo-1500048993953-d23a436266cf?w=100&h=100&fit=crop",
//       },
//       links: [
//          { name: "Artist's Portfolio", url: "https://www.google.com/portfolio" },
//          { name: "Exhibition Details", url: "https://www.google.com/exhibition" },
//          { name: "Making Process", url: "https://www.google.com/process" },
//       ],
//       status: "sold",
//       soldDate: "2024-01-01",
//    } as ArtworkType;
// }

export function Artwork() {
   // const artworkData = useLoaderData<typeof loader>();
   const artworkData = {
      id: 1,
      name: "Urban Jungle",
      images: [
         "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=500&h=500&fit=crop",
         "https://images.unsplash.com/photo-1536924940846-227afb31e2a5?w=500&h=500&fit=crop",
         "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=500&h=500&fit=crop",
         "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=500&h=500&fit=crop",
      ],
      dimensions: "24 x 36",
      unit: "inches",
      medium: "Acrylic, Pastel on Canvas",
      description:
         "Vibrant painting with bold colors and dynamic patterns represent skyscrapers intertwined with foliage, capturing the harmony and chaos of urban environments.",
      artist: {
         id: 1,
         name: "Gabe Moskolis",
         image: "https://images.unsplash.com/photo-1500048993953-d23a436266cf?w=100&h=100&fit=crop",
      },
      links: [
         { name: "Artist's Portfolio", url: "https://www.google.com/portfolio" },
         { name: "Exhibition Details", url: "https://www.google.com/exhibition" },
         { name: "Making Process", url: "https://www.google.com/process" },
      ],
      status: "sold",
      soldDate: "2024-01-01",
   } as ArtworkType;
   const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
   const [isEditModalOpen, setIsEditModalOpen] = useState(false);

   const handleDelete = () => {
      log.info("Artwork deleted");
      setIsDeleteModalOpen(false);
   };

   const handleEdit = () => {
      log.info("Artwork editing");
      setIsEditModalOpen(true);
   };

   return (
      <div className="min-h-screen bg-white mt-20">
         <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
               <div className="relative">
                  <Carousel className="w-full">
                     <CarouselContent>
                        {artworkData?.images.map((image, index) => (
                           <CarouselItem key={image}>
                              <div className="relative">
                                 <img
                                    src={image}
                                    alt={`${artworkData.name} - View ${index + 1}`}
                                    width={800}
                                    height={800}
                                    className="w-full max-h-[calc(100vh-200px)] object-contain rounded-lg"
                                 />
                                 {artworkData.status === "sold" && index === 0 && (
                                    <div className="absolute top-4 left-4">
                                       <Badge
                                          variant="secondary"
                                          className="bg-white/90 backdrop-blur-sm text-red-600 border-red-200 font-semibold px-3 py-1"
                                       >
                                          <span className="flex items-center gap-2">
                                             <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
                                             Sold
                                          </span>
                                       </Badge>
                                    </div>
                                 )}
                              </div>
                           </CarouselItem>
                        ))}
                     </CarouselContent>
                     <CarouselPrevious className="left-2" />
                     <CarouselNext className="right-2" />
                  </Carousel>
                  <div className="absolute top-4 right-4">
                     <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                           <Button
                              variant="ghost"
                              size="icon"
                              className="bg-black/50 hover:bg-black/70 text-white rounded-full"
                           >
                              <MoreHorizontal className="h-5 w-5" />
                           </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                           <DropdownMenuItem onClick={handleEdit}>
                              <Pencil className="mr-2 h-4 w-4" />
                              Edit
                           </DropdownMenuItem>
                           <DropdownMenuItem
                              className="text-red-600"
                              onClick={() => setIsDeleteModalOpen(true)}
                           >
                              <Trash2 className="mr-2 h-4 w-4" />
                              Delete
                           </DropdownMenuItem>
                        </DropdownMenuContent>
                     </DropdownMenu>
                  </div>
               </div>

               <div className="space-y-8">
                  <div className="space-y-6">
                     <div>
                        <h1 className="text-3xl font-bold mb-6">{artworkData.name}</h1>
                        <div className="flex items-center gap-3 mb-8">
                           <img
                              src={artworkData.artist.image}
                              alt={artworkData.artist.name}
                              width={40}
                              height={40}
                              className="rounded-full"
                           />
                           <Link
                              to={`/artist/${artworkData.artist.id}`}
                              className="text-lg hover:underline"
                           >
                              By {artworkData.artist.name}
                           </Link>
                        </div>
                     </div>

                     <div className="space-y-4">
                        <div>
                           <h2 className="text-sm font-semibold text-gray-500 mb-1">DIMENSIONS</h2>
                           <p>
                              {artworkData.dimensions} {artworkData.unit}
                           </p>
                        </div>

                        <div>
                           <h2 className="text-sm font-semibold text-gray-500 mb-1">MEDIUM</h2>
                           <p>{artworkData.medium}</p>
                        </div>

                        <div>
                           <h2 className="text-sm font-semibold text-gray-500 mb-1">
                              ABOUT THIS ARTWORK
                           </h2>
                           <p className="text-gray-600 leading-relaxed">
                              {artworkData.description}
                           </p>
                        </div>

                        {artworkData.links.length > 0 && (
                           <div>
                              <h2 className="text-sm font-semibold text-gray-500 mb-3">
                                 RELATED LINKS
                              </h2>
                              <div className="flex flex-wrap gap-3">
                                 {artworkData.links.map((link, _) => (
                                    <a
                                       key={link.url}
                                       href={link.url}
                                       target="_blank"
                                       rel="noopener noreferrer"
                                       className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 hover:bg-gray-200 text-sm text-gray-700 transition-colors"
                                    >
                                       {link.name}
                                       <ExternalLink className="ml-2 h-3 w-3" />
                                    </a>
                                 ))}
                              </div>
                           </div>
                        )}
                     </div>
                  </div>
               </div>
            </div>
         </div>

         {/* TODO: for some reason, when this modal closes, the page is unusable */}
         <Dialog open={isDeleteModalOpen} onOpenChange={setIsDeleteModalOpen}>
            <DialogContent>
               <DialogHeader>
                  <DialogTitle>Are you sure you want to delete?</DialogTitle>
                  <DialogDescription>
                     This action cannot be undone. This will permanently delete the artwork "
                     {artworkData.name}" from our servers.
                  </DialogDescription>
               </DialogHeader>
               <DialogFooter>
                  <Button variant="outline" onClick={() => setIsDeleteModalOpen(false)}>
                     Cancel
                  </Button>
                  <Button variant="destructive" onClick={handleDelete}>
                     Delete
                  </Button>
               </DialogFooter>
            </DialogContent>
         </Dialog>

         <NewArtworkModal
            isOpen={isEditModalOpen}
            onClose={() => {
               setIsEditModalOpen(false);
            }}
            initialData={artworkData}
            isEditing={true}
         />
      </div>
   );
}
