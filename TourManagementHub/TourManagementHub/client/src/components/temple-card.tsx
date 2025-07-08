import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { Temple } from "@shared/schema";

interface TempleCardProps {
  temple: Temple;
  onViewDetails?: (temple: Temple) => void;
}

export default function TempleCard({ temple, onViewDetails }: TempleCardProps) {
  return (
    <Card className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-2">
      <img 
        src={temple.imageUrl} 
        alt={temple.name}
        className="w-full h-64 object-cover"
      />
      <CardContent className="p-6">
        <div className="mb-2">
          <Badge variant="secondary" className="bg-saffron/10 text-saffron border-0">
            {temple.category}
          </Badge>
        </div>
        <h3 className="text-2xl font-display font-semibold text-gray-900 mb-2">
          {temple.name}
        </h3>
        <p className="text-gray-600 mb-4">
          {temple.location} • {temple.description}
        </p>
        <div className="flex flex-wrap gap-1 mb-4">
          {temple.features.slice(0, 2).map((feature, index) => (
            <Badge key={index} variant="outline" className="text-xs">
              {feature}
            </Badge>
          ))}
          {temple.features.length > 2 && (
            <Badge variant="outline" className="text-xs">
              +{temple.features.length - 2} more
            </Badge>
          )}
        </div>
        <div className="flex items-center justify-between">
          <span className="text-saffron font-semibold text-lg">
            ₹{temple.price.toLocaleString()}
          </span>
          <Button 
            className="bg-deep-green text-white hover:bg-green-700 rounded-full"
            onClick={() => onViewDetails?.(temple)}
          >
            View Details
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
