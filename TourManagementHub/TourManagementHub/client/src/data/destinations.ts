import type { Destination } from "@shared/schema";

export const destinations: Destination[] = [
  {
    id: 1,
    name: "Kerala Backwaters",
    location: "Alleppey, Kerala",
    state: "Kerala",
    description: "Serene network of canals, rivers, and lakes with traditional houseboats",
    type: "Natural",
    imageUrl: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    highlights: ["Houseboat Experience", "Palm-lined Canals", "Traditional Villages", "Ayurvedic Spas"]
  },
  {
    id: 2,
    name: "Rajasthan Palaces",
    location: "Jaipur, Rajasthan",
    state: "Rajasthan",
    description: "Magnificent palaces showcasing royal heritage and Rajputana architecture",
    type: "Cultural",
    imageUrl: "https://images.unsplash.com/photo-1477587458883-47145ed94245?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    highlights: ["Royal Architecture", "Cultural Heritage", "Desert Landscapes", "Traditional Crafts"]
  }
];
