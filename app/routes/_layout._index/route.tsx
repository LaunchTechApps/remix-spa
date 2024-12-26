import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
   Carousel,
   CarouselContent,
   CarouselItem,
   CarouselNext,
   CarouselPrevious,
} from "@/components/ui/carousel";
import useEmblaCarousel from "embla-carousel-react";
import { Calendar, ChevronLeft, ChevronRight, DollarSign, MapPin } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

// Mock data for events
const events = [
   {
      id: 1,
      name: "Urban Art Expo",
      description: "The Urban Art Expo is NOW",
      location: "Chicago - Humboldt park",
      date: "Jan 7th 2025",
      priceRange: "$2,000 - $10,000",
      image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&h=600&fit=crop",
      artists: [
         {
            name: "Gabriel Moskolis",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
         },
         {
            name: "CinQ",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
         },
         {
            name: "Jane Doe",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
         },
      ],
   },
   {
      id: 2,
      name: "Graffiti Gala",
      description:
         "Experience the city's vibrant art scene come alive under the glow of neon lights",
      location: "New York - Times Square",
      date: "Jan 15th 2024",
      priceRange: "$100 - $500",
      image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&h=600&fit=crop",
      artists: [
         {
            name: "Alex Neon",
            image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop",
         },
         {
            name: "Lumi Glow",
            image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
         },
         {
            name: "Zara Bright",
            image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop",
         },
      ],
   },
   {
      id: 3,
      name: "Eco Art Extravaganza",
      description:
         "Celebrating sustainable art and raising awareness for environmental conservation",
      location: "San Francisco - Golden Gate Park",
      date: "Jan 22nd 2024",
      priceRange: "$500 - $2,000",
      image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=800&h=600&fit=crop",
      artists: [
         {
            name: "Gaia Green",
            image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop",
         },
         {
            name: "Forrest Maker",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
         },
         {
            name: "River Flow",
            image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=100&h=100&fit=crop",
         },
      ],
   },
   {
      id: 4,
      name: "Digital Dreams Exhibition",
      description: "Explore the intersection of technology and art in this futuristic showcase",
      location: "Tokyo - Akihabara",
      date: "Feb 5th 2025",
      priceRange: "$1,500 - $5,000",
      image: "https://images.unsplash.com/photo-1519011985187-444d62641929?w=800&h=600&fit=crop",
      artists: [
         {
            name: "Pixel Master",
            image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop",
         },
         {
            name: "Cyber Canvas",
            image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop",
         },
         {
            name: "Neon Ninja",
            image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100&h=100&fit=crop",
         },
      ],
   },
];

// Updated mock data for trending artworks
const trendingArtworks = [
   {
      id: 1,
      name: "Neon Dreams",
      image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=500&h=500&fit=crop",
      artistImage:
         "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop",
      artistName: "John Doe",
   },
   {
      id: 2,
      name: "Urban Symphony",
      image: "https://images.unsplash.com/photo-1536924940846-227afb31e2a5?w=500&h=500&fit=crop",
      artistImage:
         "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
      artistName: "Jane Smith",
   },
   {
      id: 3,
      name: "Digital Horizon",
      image: "https://images.unsplash.com/photo-1551913902-c92207136625?w=500&h=500&fit=crop",
      artistImage:
         "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
      artistName: "Alex Johnson",
   },
   {
      id: 4,
      name: "Ethereal Whispers",
      image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=500&h=500&fit=crop",
      artistImage:
         "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop",
      artistName: "Samantha Lee",
   },
   {
      id: 5,
      name: "Chromatic Odyssey",
      image: "https://images.unsplash.com/photo-1511735111819-9a3f7709049c?w=500&h=500&fit=crop",
      artistImage:
         "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop",
      artistName: "Michael Chen",
   },
   {
      id: 6,
      name: "Quantum Reflections",
      image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=500&h=500&fit=crop",
      artistImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop",
      artistName: "Emily Watson",
   },
   {
      id: 7,
      name: "Nebula's Embrace",
      image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=500&h=500&fit=crop",
      artistImage:
         "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=200&h=200&fit=crop",
      artistName: "David Kim",
   },
   {
      id: 8,
      name: "Temporal Echoes",
      image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=500&h=500&fit=crop",
      artistImage:
         "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
      artistName: "Olivia Martinez",
   },
];

// Updated mock data for recently purchased artworks
const recentlyPurchased = [
   {
      id: 1,
      name: "Cityscape Dreams",
      image: "https://images.unsplash.com/photo-1551913902-c92207136625?w=500&h=500&fit=crop",
      artistName: "Emily Johnson",
      purchaseDate: "2023-12-01",
   },
   {
      id: 2,
      name: "Abstract Thoughts",
      image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=500&h=500&fit=crop",
      artistName: "Michael Brown",
      purchaseDate: "2023-11-28",
   },
   {
      id: 3,
      name: "Neon Nights",
      image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=500&h=500&fit=crop",
      artistName: "Sophia Lee",
      purchaseDate: "2023-11-25",
   },
   {
      id: 4,
      name: "Geometric Harmony",
      image: "https://images.unsplash.com/photo-1536924940846-227afb31e2a5?w=500&h=500&fit=crop",
      artistName: "Daniel Wilson",
      purchaseDate: "2023-11-22",
   },
   {
      id: 5,
      name: "Ethereal Landscapes",
      image: "https://images.unsplash.com/photo-1511735111819-9a3f7709049c?w=500&h=500&fit=crop",
      artistName: "Olivia Taylor",
      purchaseDate: "2023-11-19",
   },
   {
      id: 6,
      name: "Digital Dreamscapes",
      image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=500&h=500&fit=crop",
      artistName: "Ryan Chen",
      purchaseDate: "2023-11-16",
   },
   {
      id: 7,
      name: "Quantum Visions",
      image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=500&h=500&fit=crop",
      artistName: "Emma Rodriguez",
      purchaseDate: "2023-11-13",
   },
   {
      id: 8,
      name: "Chromatic Fusion",
      image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=500&h=500&fit=crop",
      artistName: "Alex Thompson",
      purchaseDate: "2023-11-10",
   },
   {
      id: 9,
      name: "Urban Rhythms",
      image: "https://images.unsplash.com/photo-1519011985187-444d62641929?w=500&h=500&fit=crop",
      artistName: "Isabella Kim",
      purchaseDate: "2023-11-07",
   },
   {
      id: 10,
      name: "Surreal Symmetry",
      image: "https://images.unsplash.com/photo-1533158326339-7f3cf2404354?q=80&w=1968&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      artistName: "Nathan Parker",
      purchaseDate: "2023-11-04",
   },
];

export default function Index() {
   const [emblaRef, emblaApi] = useEmblaCarousel({
      loop: true,
      align: "center",
      slidesToScroll: 1,
   });

   const [selectedIndex, setSelectedIndex] = useState(0);
   const [, setScrollSnaps] = useState<number[]>([]);

   const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
   const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

   const onSelect = useCallback(() => {
      if (!emblaApi) return;
      setSelectedIndex(emblaApi.selectedScrollSnap());
   }, [emblaApi]);

   useEffect(() => {
      if (!emblaApi) return;

      onSelect();
      setScrollSnaps(emblaApi.scrollSnapList());
      emblaApi.on("select", onSelect);
      emblaApi.on("reInit", onSelect);

      return () => {
         emblaApi.off("select", onSelect);
         emblaApi.off("reInit", onSelect);
      };
   }, [emblaApi, onSelect]);

   return (
      <div className="min-h-screen bg-gray-50">
         <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
            {/* Events Carousel */}
            <section className="mb-8 sm:mb-16 relative">
               <div className="overflow-hidden" ref={emblaRef}>
                  <div className="flex">
                     {events.map((event, index) => (
                        <div
                           key={event.id}
                           className="flex-[0_0_100%] sm:flex-[0_0_80%] min-w-0 relative px-2 sm:px-4"
                        >
                           <div
                              className={`relative rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-300 ${
                                 index === selectedIndex
                                    ? "scale-100 opacity-100"
                                    : "scale-95 sm:scale-90 opacity-70 sm:opacity-50"
                              }`}
                           >
                              <img
                                 src={event.image}
                                 alt={event.name}
                                 width={1200}
                                 height={400}
                                 className="w-full h-[250px] sm:h-[400px] object-cover"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                              <div className="absolute top-2 sm:top-4 left-2 sm:left-4">
                                 <span className="bg-white/10 backdrop-blur-md text-white text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full">
                                    Upcoming Event
                                 </span>
                              </div>
                              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-6 text-white">
                                 <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end">
                                    <div>
                                       <h2 className="text-lg sm:text-2xl font-bold mb-1 sm:mb-2">
                                          {event.name}
                                       </h2>
                                       <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm">
                                          <div className="flex items-center">
                                             <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                                             <span>{event.location}</span>
                                          </div>
                                          <div className="flex items-center">
                                             <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                                             <span>{event.date}</span>
                                          </div>
                                          <div className="flex items-center">
                                             <DollarSign className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                                             <span>{event.priceRange}</span>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="flex items-center space-x-2 mt-2 sm:mt-0">
                                       <div className="flex -space-x-2">
                                          {event.artists.map((artist) => (
                                             <img
                                                key={artist.name + artist.image}
                                                src={artist.image}
                                                alt={artist.name}
                                                width={24}
                                                height={24}
                                                className="rounded-full border-2 border-white w-6 h-6 sm:w-8 sm:h-8"
                                             />
                                          ))}
                                       </div>
                                       <Button
                                          size="sm"
                                          className="bg-purple-600 hover:bg-purple-700 text-xs sm:text-sm"
                                       >
                                          Details
                                       </Button>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
               <Button
                  variant="outline"
                  size="icon"
                  className="absolute left-2 sm:left-4 lg:left-8 top-1/2 -translate-y-1/2 z-10 bg-white/50 hover:bg-white/75 w-8 h-8 sm:w-10 sm:h-10"
                  onClick={scrollPrev}
               >
                  <ChevronLeft className="h-4 w-4 sm:h-6 sm:w-6" />
               </Button>
               <Button
                  variant="outline"
                  size="icon"
                  className="absolute right-2 sm:right-4 lg:right-8 top-1/2 -translate-y-1/2 z-10 bg-white/50 hover:bg-white/75 w-8 h-8 sm:w-10 sm:h-10"
                  onClick={scrollNext}
               >
                  <ChevronRight className="h-4 w-4 sm:h-6 sm:w-6" />
               </Button>
            </section>

            {/* Trending Artwork */}
            <section className="mb-8 sm:mb-16">
               <div className="max-w-full">
                  <div className="flex items-center justify-between mb-4 sm:mb-8">
                     <div>
                        <h2 className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">
                           Trending Artwork
                        </h2>
                        <p className="text-sm sm:text-base text-gray-500">
                           Discover the most popular pieces right now
                        </p>
                     </div>
                  </div>

                  <Carousel className="w-full">
                     <CarouselContent className="-ml-2 md:-ml-4">
                        {trendingArtworks.map((artwork) => (
                           <CarouselItem
                              key={artwork.id}
                              className="pl-2 md:pl-4 basis-3/4 sm:basis-1/2 lg:basis-1/3 xl:basis-1/5"
                           >
                              <Card className="group relative rounded-2xl sm:rounded-3xl overflow-hidden">
                                 <img
                                    src={artwork.image}
                                    alt={artwork.name}
                                    width={300}
                                    height={300}
                                    className="w-full aspect-square object-cover"
                                 />
                                 <div className="absolute -bottom-1/2 group-hover:bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 sm:p-4 transition-all duration-300">
                                    <div className="relative">
                                       <img
                                          src={artwork.artistImage}
                                          alt={artwork.artistName}
                                          width={48}
                                          height={48}
                                          className="rounded-full border-2 sm:border-4 border-white absolute -top-6 sm:-top-8 left-1/2 transform -translate-x-1/2 w-12 h-12 sm:w-16 sm:h-16"
                                       />
                                       <div className="pt-6 sm:pt-8 text-center">
                                          <h3 className="text-white font-semibold text-sm sm:text-base">
                                             {artwork.name}
                                          </h3>
                                          <p className="text-gray-300 text-xs sm:text-sm">
                                             {artwork.artistName}
                                          </p>
                                       </div>
                                    </div>
                                 </div>
                              </Card>
                           </CarouselItem>
                        ))}
                     </CarouselContent>
                     <CarouselPrevious className="hidden sm:flex" />
                     <CarouselNext className="hidden sm:flex" />
                  </Carousel>
               </div>
            </section>

            {/* Recently Purchased */}
            <section className="mb-8 sm:mb-16">
               <div className="max-w-full">
                  <div className="flex items-center justify-between mb-4 sm:mb-8">
                     <div>
                        <h2 className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">
                           Recently Purchased
                        </h2>
                        <p className="text-sm sm:text-base text-gray-500">
                           The latest additions to collections
                        </p>
                     </div>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">
                     {recentlyPurchased.map((artwork) => (
                        <Card
                           key={artwork.id}
                           className="group relative rounded-2xl sm:rounded-3xl overflow-hidden"
                        >
                           <img
                              src={artwork.image}
                              alt={artwork.name}
                              width={300}
                              height={300}
                              className="w-full aspect-square object-cover"
                           />
                           <div className="absolute -bottom-1/2 group-hover:bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 sm:p-4 transition-all duration-300">
                              <div className="text-center">
                                 <h3 className="text-white font-semibold text-sm sm:text-base">
                                    {artwork.name}
                                 </h3>
                                 <p className="text-gray-300 text-xs sm:text-sm">
                                    {artwork.artistName}
                                 </p>
                                 <p className="text-gray-400 text-xs">
                                    Purchased: {artwork.purchaseDate}
                                 </p>
                              </div>
                           </div>
                        </Card>
                     ))}
                  </div>
               </div>
            </section>
         </div>
         <Footer />
      </div>
   );
}
