import { Star, User } from "lucide-react";

interface TestimonialProps {
  name: string;
  location: string;
  content: string;
  rating: number;
}

export default function Testimonial({ name, location, content, rating }: TestimonialProps) {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
      <div className="flex items-center mb-6">
        <div className="w-12 h-12 bg-saffron rounded-full flex items-center justify-center mr-4">
          <User className="h-6 w-6 text-white" />
        </div>
        <div>
          <h4 className="font-semibold text-white">{name}</h4>
          <p className="text-sm opacity-75 text-white">{location}</p>
        </div>
      </div>
      <p className="mb-4 italic text-white">"{content}"</p>
      <div className="flex text-gold">
        {Array.from({ length: rating }, (_, i) => (
          <Star key={i} className="h-4 w-4 fill-current" />
        ))}
      </div>
    </div>
  );
}
