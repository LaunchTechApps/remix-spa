import { EditArtistDetailsModal } from "@/components/edit-artist-details-modal";
import { EditBannerModal } from "@/components/edit-banner-modal";
import { EditProfilePictureModal } from "@/components/edit-profile-picture-modal";
import { NewArtworkModal } from "@/components/new-artwork-modal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Camera, Pencil } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";

const artistData = {
   name: "Gabe Moskolis",
   username: "@gabemoskolis",
   location: "Chicago, IL",
   profileImage:
      "https://images.unsplash.com/photo-1500048993953-d23a436266cf?w=200&h=200&fit=crop",
   bannerImage:
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=1600&h=400&fit=crop",
   artworks: [
      {
         id: 1,
         name: "Urban Jungle",
         image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=500&h=500&fit=crop",
         status: "sold",
         dimensions: "24 x 36 inches",
      },
      {
         id: 2,
         name: "City Lights",
         image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=500&h=500&fit=crop",
         status: "available",
         dimensions: "18 x 24 inches",
      },
      {
         id: 3,
         name: "Concrete Dreams",
         image: "https://images.unsplash.com/photo-1536924940846-227afb31e2a5?w=300&h=300&fit=crop",
         status: "sold",
         dimensions: "30 x 40 inches",
      },
   ],
};

// Populate artworks array with varied names
const artworkNames = [
   "Urban Symphony",
   "Neon Dreams",
   "Digital Horizon",
   "Abstract Thoughts",
   "Chromatic Fusion",
   "Ethereal Whispers",
   "Quantum Reflections",
   "City Pulse",
   "Nature's Algorithm",
   "Cosmic Dance",
   "Solar Flare",
   "Midnight Echo",
   "Desert Mirage",
   "Ocean Memory",
   "Mountain Code",
   "Forest Debug",
   "Binary Sunset",
   "Digital Rain",
   "Crystal Logic",
   "Neural Path",
];

for (let i = 4; i <= 24; i++) {
   artistData.artworks.push({
      id: i,
      name: artworkNames[(i - 4) % artworkNames.length],
      image: `https://picsum.photos/seed/${i}/300/300`,
      status: i % 3 === 0 ? "sold" : "available",
      dimensions: `${Math.floor(Math.random() * 30 + 10)} x ${Math.floor(Math.random() * 30 + 10)} inches`,
   });
}

export function Portfolio() {
   const [isNewArtworkModalOpen, setIsNewArtworkModalOpen] = useState(false);
   const [isProfilePictureModalOpen, setIsProfilePictureModalOpen] = useState(false);
   const [isBannerModalOpen, setIsBannerModalOpen] = useState(false);
   const [isArtistDetailsModalOpen, setIsArtistDetailsModalOpen] = useState(false);

   return (
      <div className="min-h-screen bg-gray-50">
         <div className="relative">
            {/* Banner Image */}
            <div className="relative h-[300px] w-full overflow-hidden">
               <div className="relative h-full w-full">
                  <img
                     src={artistData.bannerImage}
                     alt="Artist Banner"
                     className="object-cover mx-auto min-h-[20rem] mt-10"
                     style={{
                        maskImage:
                           "linear-gradient(to right, transparent, black 20%, black 80%, transparent)",
                        WebkitMaskImage:
                           "linear-gradient(to right, transparent, black 20%, black 80%, transparent)",
                     }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60 pointer-events-none" />
               </div>
            </div>

            <div className="absolute w-full max-w-screen-2xl mx-auto h-10 top-20 left-0 right-0 flex justify-end items-center">
               <Button
                  variant="ghost"
                  size="icon"
                  className="bg-black/50 hover:bg-black/70 text-white rounded-full mr-6"
                  onClick={() => setIsBannerModalOpen(true)}
               >
                  <Camera className="h-6 w-6" />
               </Button>
            </div>

            {/* Profile Info Overlay */}
            <div className="absolute bottom-0 left-0 right-0">
               <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-6">
                  <div className="flex items-end space-x-4">
                     <div className="relative group -mb-12">
                        <img
                           src={artistData.profileImage}
                           alt={artistData.name}
                           width={120}
                           height={120}
                           className="rounded-full border-4 border-white"
                        />
                        <Button
                           variant="ghost"
                           size="icon"
                           className="absolute inset-0 w-full h-full rounded-full bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity"
                           onClick={() => setIsProfilePictureModalOpen(true)}
                        >
                           <Pencil className="h-6 w-6" />
                        </Button>
                     </div>
                     <div className="mb-2 flex items-end">
                        <div>
                           <h1 className="text-3xl font-bold text-white mb-1">{artistData.name}</h1>
                           <p className="text-gray-200 mb-1">{artistData.username}</p>
                           <p className="text-gray-300">{artistData.location}</p>
                        </div>
                        <Button
                           variant="ghost"
                           size="icon"
                           className="ml-4 bg-black/50 hover:bg-black/70 text-white rounded-full"
                           onClick={() => setIsArtistDetailsModalOpen(true)}
                        >
                           <Pencil className="h-6 w-6" />
                        </Button>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="mb-6">
               <ScrollArea className="h-[calc(100vh-400px)]">
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                     {artistData.artworks.map((artwork) => (
                        <Link to={`/artwork/${artwork.id}`} key={artwork.id}>
                           <Card className="group relative rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
                              <img
                                 src={artwork.image}
                                 alt={artwork.name}
                                 width={200}
                                 height={200}
                                 className="w-full aspect-square object-cover"
                              />
                              {artwork.status === "sold" && (
                                 <div className="absolute top-2 left-2 z-10">
                                    <Badge
                                       variant="secondary"
                                       className="bg-white/90 backdrop-blur-sm text-red-600 border-red-200 font-semibold"
                                    >
                                       <span className="flex items-center gap-2">
                                          <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
                                          Sold
                                       </span>
                                    </Badge>
                                 </div>
                              )}
                              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                 <div className="absolute bottom-2 left-2 right-2 text-center">
                                    <h3 className="text-white font-semibold text-sm sm:text-base mb-1">
                                       {artwork.name}
                                    </h3>
                                    <p className="text-gray-200 text-xs sm:text-sm">
                                       {artwork.dimensions}
                                    </p>
                                 </div>
                              </div>
                           </Card>
                        </Link>
                     ))}
                  </div>
               </ScrollArea>
            </div>

            <div className="flex justify-end">
               <Button
                  size="lg"
                  className="bg-purple-600 hover:bg-purple-700"
                  onClick={() => setIsNewArtworkModalOpen(true)}
               >
                  New Submission
               </Button>
            </div>

            <NewArtworkModal
               isOpen={isNewArtworkModalOpen}
               onClose={() => setIsNewArtworkModalOpen(false)}
            />

            <EditProfilePictureModal
               isOpen={isProfilePictureModalOpen}
               onClose={() => setIsProfilePictureModalOpen(false)}
               currentProfilePicture={artistData.profileImage}
            />

            <EditBannerModal
               isOpen={isBannerModalOpen}
               onClose={() => setIsBannerModalOpen(false)}
               currentBanner={artistData.bannerImage}
            />

            <EditArtistDetailsModal
               isOpen={isArtistDetailsModalOpen}
               onClose={() => setIsArtistDetailsModalOpen(false)}
               currentDetails={{
                  name: artistData.name,
                  username: artistData.username,
                  location: artistData.location,
               }}
            />
         </div>
      </div>
   );
}
