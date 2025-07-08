import { Badge } from "@/components/ui/badge";
import type { Destination } from "@shared/schema";

interface DestinationCardProps {
  destination: Destination;
  onExplore?: (destination: Destination) => void;
}

export default function DestinationCard({ destination, onExplore }: DestinationCardProps) {
  return (
    <div 
      className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all cursor-pointer"
      onClick={() => onExplore?.(destination)}
    >
      <img 
        src={destination.imageUrl} 
        alt={destination.name}
        className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
      <div className="absolute top-4 left-4">
        <Badge className="bg-white/20 text-white border-0 backdrop-blur-sm">
          {destination.type}
        </Badge>
      </div>
      <div className="absolute bottom-6 left-6 text-white">
        <h3 className="text-xl font-display font-semibold mb-2">
          {destination.name}
        </h3>
        <p className="text-sm opacity-90">{destination.location}</p>
        <div className="mt-2 flex flex-wrap gap-1">
          {destination.highlights.slice(0, 2).map((highlight, index) => (
            <Badge key={index} variant="outline" className="bg-white/10 text-white border-white/20 text-xs">
              {highlight}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
