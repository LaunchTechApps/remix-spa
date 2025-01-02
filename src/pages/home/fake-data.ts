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

export const fakeData = { recentlyPurchased, trendingArtworks, events };
