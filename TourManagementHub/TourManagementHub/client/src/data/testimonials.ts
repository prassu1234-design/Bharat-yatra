export interface Testimonial {
  name: string;
  location: string;
  content: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    name: "Priya Sharma",
    location: "Mumbai, Maharashtra",
    content: "The Golden Temple journey was truly transformative. The arrangements were perfect and the spiritual experience was beyond words.",
    rating: 5
  },
  {
    name: "Rajesh Patel",
    location: "Ahmedabad, Gujarat",
    content: "Char Dham Yatra exceeded all expectations. Professional guidance and comfortable accommodation made it memorable.",
    rating: 5
  },
  {
    name: "Sunita Devi",
    location: "Delhi, NCR",
    content: "South India temple tour was beautifully organized. Every detail was taken care of with devotion and respect.",
    rating: 5
  }
];
