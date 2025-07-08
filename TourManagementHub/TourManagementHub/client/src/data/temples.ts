import type { Temple } from "@shared/schema";

export const temples: Temple[] = [
  {
    id: 1,
    name: "Golden Temple",
    location: "Amritsar, Punjab",
    state: "Punjab",
    description: "The holiest shrine of Sikhism with stunning golden architecture and sacred pool",
    price: 15999,
    imageUrl: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    category: "Sikh Temple",
    features: ["Golden Architecture", "Sacred Pool", "Langar Hall", "Spiritual Experience"]
  },
  {
    id: 2,
    name: "Meenakshi Temple",
    location: "Madurai, Tamil Nadu",
    state: "Tamil Nadu",
    description: "Ancient temple with stunning Dravidian architecture and colorful gopuram towers",
    price: 18999,
    imageUrl: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    category: "Hindu Temple",
    features: ["Dravidian Architecture", "Colorful Gopurams", "Ancient History", "Cultural Significance"]
  }
];
