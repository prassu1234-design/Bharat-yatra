import { Button } from "@/components/ui/button";
import { MapPin, Play } from "lucide-react";
import { Link } from "wouter";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1605649487212-47bdab064c6d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')`
        }}
      />
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
          Discover Sacred <span className="text-saffron">India</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
          Embark on a spiritual journey through India's most revered Hindu temples and breathtaking cultural destinations
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/booking">
            <Button size="lg" className="bg-saffron text-white hover:bg-orange-600 rounded-full text-lg px-8 py-4 transform hover:scale-105 transition-all">
              <MapPin className="mr-2 h-5 w-5" />
              Explore Packages
            </Button>
          </Link>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-2 border-white text-white hover:bg-white hover:text-gray-900 rounded-full text-lg px-8 py-4 transition-all"
          >
            <Play className="mr-2 h-5 w-5" />
            Watch Tours
          </Button>
        </div>
      </div>
    </section>
  );
}
