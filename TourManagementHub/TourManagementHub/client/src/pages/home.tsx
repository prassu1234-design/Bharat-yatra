import { useQuery } from "@tanstack/react-query";
import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import TempleCard from "@/components/temple-card";
import DestinationCard from "@/components/destination-card";
import Testimonial from "@/components/testimonial";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Droplets, Heart, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import type { Temple, Destination } from "@shared/schema";

const testimonials = [
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

export default function Home() {
  const { data: temples, isLoading: templesLoading } = useQuery<Temple[]>({
    queryKey: ["/api/temples"],
  });

  const { data: destinations, isLoading: destinationsLoading } = useQuery<Destination[]>({
    queryKey: ["/api/destinations"],
  });

  return (
    <div className="min-h-screen bg-warm-gray">
      <Navigation />
      <Hero />
      
      {/* Featured Temples Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
              Sacred <span className="text-saffron">Temples</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the divine energy and architectural marvels of India's most revered Hindu temples
            </p>
          </div>
          
          {templesLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Array.from({ length: 6 }, (_, i) => (
                <div key={i} className="bg-gray-200 rounded-2xl h-96 animate-pulse" />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {temples?.slice(0, 6).map((temple) => (
                <TempleCard key={temple.id} temple={temple} />
              ))}
            </div>
          )}
          
          <div className="text-center">
            <Link href="/temples">
              <Button size="lg" className="bg-saffron hover:bg-orange-600 text-white rounded-full">
                View All Temples <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Cultural Destinations Section */}
      <section className="py-20 bg-warm-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
              Cultural <span className="text-deep-green">Destinations</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Immerse yourself in India's rich heritage, natural beauty, and spiritual significance
            </p>
          </div>

          {destinationsLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {Array.from({ length: 4 }, (_, i) => (
                <div key={i} className="bg-gray-200 rounded-2xl h-80 animate-pulse" />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {destinations?.slice(0, 4).map((destination) => (
                <DestinationCard key={destination.id} destination={destination} />
              ))}
            </div>
          )}

          {/* Spiritual Cities */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white shadow-xl hover:shadow-2xl transition-all">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-saffron rounded-full flex items-center justify-center mb-6">
                  <Users className="text-white text-2xl" />
                </div>
                <h3 className="text-2xl font-display font-semibold text-gray-900 mb-4">Rishikesh</h3>
                <p className="text-gray-600 mb-6">
                  The yoga capital of the world, nestled in the foothills of the Himalayas along the sacred Ganges River.
                </p>
                <Button variant="link" className="text-saffron hover:text-orange-600 p-0">
                  Explore More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-xl hover:shadow-2xl transition-all">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-deep-green rounded-full flex items-center justify-center mb-6">
                  <Droplets className="text-white text-2xl" />
                </div>
                <h3 className="text-2xl font-display font-semibold text-gray-900 mb-4">Haridwar</h3>
                <p className="text-gray-600 mb-6">
                  One of the seven holiest places in Hinduism, where the Ganges leaves the mountains and enters the plains.
                </p>
                <Button variant="link" className="text-saffron hover:text-orange-600 p-0">
                  Explore More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-xl hover:shadow-2xl transition-all">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-royal-blue rounded-full flex items-center justify-center mb-6">
                  <Heart className="text-white text-2xl" />
                </div>
                <h3 className="text-2xl font-display font-semibold text-gray-900 mb-4">Varanasi</h3>
                <p className="text-gray-600 mb-6">
                  The spiritual capital of India, one of the oldest continuously inhabited cities in the world.
                </p>
                <Button variant="link" className="text-saffron hover:text-orange-600 p-0">
                  Explore More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-deep-green text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Blessed <span className="text-saffron">Experiences</span>
            </h2>
            <p className="text-xl opacity-90">
              Hear from pilgrims who found spiritual fulfillment through our journeys
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Testimonial key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
