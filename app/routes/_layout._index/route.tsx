import { useSession } from "@/hooks/use-session";
import { useMemo } from "react";

export default function Index() {
   const session = useSession();
   const claims = useMemo(() => session.getClaims(), [session.accessToken]);

   return (
      <div className="flex justify-center min-h-screen bg-gray-100">
         <div>
            <div className="h-56" />
            {session.isSignedIn ? (
               <h1 className="text-4xl text-center font-bold text-gray-700 mb-4">
                  You're signed in
               </h1>
            ) : (
               <h1 className="text-4xl text-center font-bold text-gray-700 mb-4">Not Signed In</h1>
            )}
            {session.isSignedIn ? (
               <div className="relative w-full">
                  <div className="border rounded-lg">
                     <pre className="p-4 sm:text-sm text-[10px]">
                        {JSON.stringify(claims, null, 2)}
                     </pre>
                  </div>
               </div>
            ) : (
               <p className="text-gray-500 text-lg text-center">
                  Nothing to display here at the moment.
               </p>
            )}
         </div>
      </div>
   );
}

// import { Footer } from "@/components/footer";
// import { Button } from "@/components/ui/button";
// import { Card } from "@/components/ui/card";
// import {
//    Carousel,
//    CarouselContent,
//    CarouselItem,
//    CarouselNext,
//    CarouselPrevious,
// } from "@/components/ui/carousel";
// import { useSession } from "@/hooks/use-session";
// import { getSecureCookie } from "@/sessions";
// import { useLoaderData } from "@remix-run/react";
// import useEmblaCarousel from "embla-carousel-react";
// import { Calendar, ChevronLeft, ChevronRight, DollarSign, MapPin } from "lucide-react";
// import { useCallback, useEffect, useState } from "react";
// import { fakeData } from "./fake-data";

// export const clientLoader = async () => {
//    return {
//       events: fakeData.events,
//       recentlyPurchased: fakeData.recentlyPurchased,
//       trendingArtworks: fakeData.trendingArtworks,
//    };
// };

// export default function Index() {
//    const { events, recentlyPurchased, trendingArtworks } = useLoaderData<typeof clientLoader>();

//    const session = useSession();
//    if (!session.isSignedIn) {
//       const accessToken = getSecureCookie("access");
//       if (accessToken) session.signIn(accessToken);
//    }

//    const [emblaRef, emblaApi] = useEmblaCarousel({
//       loop: true,
//       align: "center",
//       slidesToScroll: 1,
//    });

//    const [selectedIndex, setSelectedIndex] = useState(0);
//    const [, setScrollSnaps] = useState<number[]>([]);

//    const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
//    const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

//    const onSelect = useCallback(() => {
//       if (!emblaApi) return;
//       setSelectedIndex(emblaApi.selectedScrollSnap());
//    }, [emblaApi]);

//    useEffect(() => {
//       if (!emblaApi) return;

//       onSelect();
//       setScrollSnaps(emblaApi.scrollSnapList());
//       emblaApi.on("select", onSelect);
//       emblaApi.on("reInit", onSelect);

//       return () => {
//          emblaApi.off("select", onSelect);
//          emblaApi.off("reInit", onSelect);
//       };
//    }, [emblaApi, onSelect]);

//    return (
//       <div className="min-h-screen bg-gray-50">
//          <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
//             {/* Events Carousel */}
//             <section className="mb-8 sm:mb-16 relative">
//                <div className="overflow-hidden" ref={emblaRef}>
//                   <div className="flex">
//                      {events.map((event, index) => (
//                         <div
//                            key={event.id}
//                            className="flex-[0_0_100%] sm:flex-[0_0_80%] min-w-0 relative px-2 sm:px-4"
//                         >
//                            <div
//                               className={`relative rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-300 ${index === selectedIndex
//                                  ? "scale-100 opacity-100"
//                                  : "scale-95 sm:scale-90 opacity-70 sm:opacity-50"
//                                  }`}
//                            >
//                               <img
//                                  src={event.image}
//                                  alt={event.name}
//                                  width={1200}
//                                  height={400}
//                                  className="w-full h-[250px] sm:h-[400px] object-cover"
//                               />
//                               <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
//                               <div className="absolute top-2 sm:top-4 left-2 sm:left-4">
//                                  <span className="bg-white/10 backdrop-blur-md text-white text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full">
//                                     Upcoming Event
//                                  </span>
//                               </div>
//                               <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-6 text-white">
//                                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end">
//                                     <div>
//                                        <h2 className="text-lg sm:text-2xl font-bold mb-1 sm:mb-2">
//                                           {event.name}
//                                        </h2>
//                                        <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm">
//                                           <div className="flex items-center">
//                                              <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
//                                              <span>{event.location}</span>
//                                           </div>
//                                           <div className="flex items-center">
//                                              <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
//                                              <span>{event.date}</span>
//                                           </div>
//                                           <div className="flex items-center">
//                                              <DollarSign className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
//                                              <span>{event.priceRange}</span>
//                                           </div>
//                                        </div>
//                                     </div>
//                                     <div className="flex items-center space-x-2 mt-2 sm:mt-0">
//                                        <div className="flex -space-x-2">
//                                           {event.artists.map((artist) => (
//                                              <img
//                                                 key={artist.name + artist.image}
//                                                 src={artist.image}
//                                                 alt={artist.name}
//                                                 width={24}
//                                                 height={24}
//                                                 className="rounded-full border-2 border-white w-6 h-6 sm:w-8 sm:h-8"
//                                              />
//                                           ))}
//                                        </div>
//                                        <Button
//                                           size="sm"
//                                           className="bg-purple-600 hover:bg-purple-700 text-xs sm:text-sm"
//                                        >
//                                           Details
//                                        </Button>
//                                     </div>
//                                  </div>
//                               </div>
//                            </div>
//                         </div>
//                      ))}
//                   </div>
//                </div>
//                <Button
//                   variant="outline"
//                   size="icon"
//                   className="absolute left-2 sm:left-4 lg:left-8 top-1/2 -translate-y-1/2 z-10 bg-white/50 hover:bg-white/75 w-8 h-8 sm:w-10 sm:h-10"
//                   onClick={scrollPrev}
//                >
//                   <ChevronLeft className="h-4 w-4 sm:h-6 sm:w-6" />
//                </Button>
//                <Button
//                   variant="outline"
//                   size="icon"
//                   className="absolute right-2 sm:right-4 lg:right-8 top-1/2 -translate-y-1/2 z-10 bg-white/50 hover:bg-white/75 w-8 h-8 sm:w-10 sm:h-10"
//                   onClick={scrollNext}
//                >
//                   <ChevronRight className="h-4 w-4 sm:h-6 sm:w-6" />
//                </Button>
//             </section>

//             {/* Trending Artwork */}
//             <section className="mb-8 sm:mb-16">
//                <div className="max-w-full">
//                   <div className="flex items-center justify-between mb-4 sm:mb-8">
//                      <div>
//                         <h2 className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">
//                            Trending Artwork
//                         </h2>
//                         <p className="text-sm sm:text-base text-gray-500">
//                            Discover the most popular pieces right now
//                         </p>
//                      </div>
//                   </div>

//                   <Carousel className="2xl:w-[98%] w-[94%] m-auto">
//                      <CarouselContent className="-ml-2 md:-ml-4">
//                         {trendingArtworks.map((artwork) => (
//                            <CarouselItem
//                               key={artwork.id}
//                               className="pl-2 md:pl-4 basis-3/4 sm:basis-1/2 lg:basis-1/3 xl:basis-1/5"
//                            >
//                               <Card className="group relative rounded-2xl sm:rounded-3xl overflow-hidden">
//                                  <img
//                                     src={artwork.image}
//                                     alt={artwork.name}
//                                     width={300}
//                                     height={300}
//                                     className="w-full aspect-square object-cover"
//                                  />
//                                  <div className="absolute -bottom-1/2 group-hover:bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 sm:p-4 transition-all duration-300">
//                                     <div className="relative">
//                                        <img
//                                           src={artwork.artistImage}
//                                           alt={artwork.artistName}
//                                           width={48}
//                                           height={48}
//                                           className="rounded-full border-2 sm:border-4 border-white absolute -top-6 sm:-top-8 left-1/2 transform -translate-x-1/2 w-12 h-12 sm:w-16 sm:h-16"
//                                        />
//                                        <div className="pt-6 sm:pt-8 text-center">
//                                           <h3 className="text-white font-semibold text-sm sm:text-base">
//                                              {artwork.name}
//                                           </h3>
//                                           <p className="text-gray-300 text-xs sm:text-sm">
//                                              {artwork.artistName}
//                                           </p>
//                                        </div>
//                                     </div>
//                                  </div>
//                               </Card>
//                            </CarouselItem>
//                         ))}
//                      </CarouselContent>
//                      <CarouselPrevious className="hidden sm:flex" />
//                      <CarouselNext className="hidden sm:flex" />
//                   </Carousel>
//                </div>
//             </section>

//             {/* Recently Purchased */}
//             <section className="mb-8 sm:mb-16">
//                <div className="max-w-full">
//                   <div className="flex items-center justify-between mb-4 sm:mb-8">
//                      <div>
//                         <h2 className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">
//                            Recently Purchased
//                         </h2>
//                         <p className="text-sm sm:text-base text-gray-500">
//                            The latest additions to collections
//                         </p>
//                      </div>
//                   </div>

//                   <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">
//                      {recentlyPurchased.map((artwork) => (
//                         <Card
//                            key={artwork.id}
//                            className="group relative rounded-2xl sm:rounded-3xl overflow-hidden"
//                         >
//                            <img
//                               src={artwork.image}
//                               alt={artwork.name}
//                               width={300}
//                               height={300}
//                               className="w-full aspect-square object-cover"
//                            />
//                            <div className="absolute -bottom-1/2 group-hover:bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 sm:p-4 transition-all duration-300">
//                               <div className="text-center">
//                                  <h3 className="text-white font-semibold text-sm sm:text-base">
//                                     {artwork.name}
//                                  </h3>
//                                  <p className="text-gray-300 text-xs sm:text-sm">
//                                     {artwork.artistName}
//                                  </p>
//                                  <p className="text-gray-400 text-xs">
//                                     Purchased: {artwork.purchaseDate}
//                                  </p>
//                               </div>
//                            </div>
//                         </Card>
//                      ))}
//                   </div>
//                </div>
//             </section>
//          </div>
//          <Footer />
//       </div>
//    );
// }
