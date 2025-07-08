import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { Send, CheckCircle } from "lucide-react";
import type { InsertBooking } from "@shared/schema";

const destinationOptions = [
  "Golden Temple", "Meenakshi Temple", "Tirupati", "Vaishno Devi", 
  "Kedarnath", "Badrinath", "Kerala Backwaters", "Rajasthan Palaces",
  "Goa Beaches", "Kashmir Valleys"
];

export default function Booking() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    travelers: "1 Person",
    travelDate: "",
    budget: "₹10,000 - ₹25,000",
    destinations: [] as string[],
    requirements: ""
  });

  const bookingMutation = useMutation({
    mutationFn: async (data: InsertBooking) => {
      const response = await apiRequest("POST", "/api/bookings", data);
      return response.json();
    },
    onSuccess: () => {
      setIsSubmitted(true);
      queryClient.invalidateQueries({ queryKey: ["/api/bookings"] });
      toast({
        title: "Booking Inquiry Submitted!",
        description: "Our travel experts will contact you within 24 hours.",
      });
    },
    onError: (error) => {
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your inquiry. Please try again.",
        variant: "destructive",
      });
      console.error("Booking error:", error);
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.fullName || !formData.email || !formData.phone) {
      toast({
        title: "Missing Required Fields",
        description: "Please fill in all required fields (Name, Email, Phone).",
        variant: "destructive",
      });
      return;
    }

    if (formData.destinations.length === 0) {
      toast({
        title: "No Destinations Selected",
        description: "Please select at least one destination for your journey.",
        variant: "destructive",
      });
      return;
    }

    bookingMutation.mutate(formData);
  };

  const handleDestinationChange = (destination: string, checked: boolean) => {
    if (checked) {
      setFormData(prev => ({
        ...prev,
        destinations: [...prev.destinations, destination]
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        destinations: prev.destinations.filter(d => d !== destination)
      }));
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-warm-gray">
        <Navigation />
        <section className="py-20">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Card className="p-12">
              <CardContent>
                <CheckCircle className="mx-auto h-16 w-16 text-green-500 mb-6" />
                <h1 className="text-3xl font-display font-bold text-gray-900 mb-4">
                  Thank You for Your Inquiry!
                </h1>
                <p className="text-lg text-gray-600 mb-6">
                  Your booking request has been successfully submitted. Our travel experts will review your requirements and contact you within 24 hours to discuss your sacred journey.
                </p>
                <div className="space-y-2 text-sm text-gray-500">
                  <p>📧 Check your email for a confirmation</p>
                  <p>📞 We'll call you on {formData.phone}</p>
                  <p>🏛️ {formData.destinations.length} destination(s) selected</p>
                </div>
                <Button 
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({
                      fullName: "",
                      email: "",
                      phone: "",
                      travelers: "1 Person",
                      travelDate: "",
                      budget: "₹10,000 - ₹25,000",
                      destinations: [],
                      requirements: ""
                    });
                  }}
                  className="mt-8 bg-saffron hover:bg-orange-600"
                >
                  Submit Another Inquiry
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-warm-gray">
      <Navigation />
      
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
              Plan Your <span className="text-saffron">Sacred Journey</span>
            </h1>
            <p className="text-xl text-gray-600">
              Let us create a personalized pilgrimage experience for you
            </p>
          </div>

          <Card className="rounded-3xl shadow-2xl">
            <CardContent className="p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="fullName" className="text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </Label>
                    <Input
                      id="fullName"
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.fullName}
                      onChange={(e) => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
                      className="rounded-xl"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      className="rounded-xl"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-sm font-semibold text-gray-700 mb-2">
                      Phone Number *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                      className="rounded-xl"
                      required
                    />
                  </div>
                  <div>
                    <Label className="text-sm font-semibold text-gray-700 mb-2">
                      Number of Travelers
                    </Label>
                    <Select value={formData.travelers} onValueChange={(value) => setFormData(prev => ({ ...prev, travelers: value }))}>
                      <SelectTrigger className="rounded-xl">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1 Person">1 Person</SelectItem>
                        <SelectItem value="2 People">2 People</SelectItem>
                        <SelectItem value="3-5 People">3-5 People</SelectItem>
                        <SelectItem value="6-10 People">6-10 People</SelectItem>
                        <SelectItem value="More than 10">More than 10</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="travelDate" className="text-sm font-semibold text-gray-700 mb-2">
                      Preferred Travel Dates
                    </Label>
                    <Input
                      id="travelDate"
                      type="date"
                      value={formData.travelDate}
                      onChange={(e) => setFormData(prev => ({ ...prev, travelDate: e.target.value }))}
                      className="rounded-xl"
                    />
                  </div>
                  <div>
                    <Label className="text-sm font-semibold text-gray-700 mb-2">
                      Budget Range
                    </Label>
                    <Select value={formData.budget} onValueChange={(value) => setFormData(prev => ({ ...prev, budget: value }))}>
                      <SelectTrigger className="rounded-xl">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="₹10,000 - ₹25,000">₹10,000 - ₹25,000</SelectItem>
                        <SelectItem value="₹25,000 - ₹50,000">₹25,000 - ₹50,000</SelectItem>
                        <SelectItem value="₹50,000 - ₹1,00,000">₹50,000 - ₹1,00,000</SelectItem>
                        <SelectItem value="₹1,00,000+">₹1,00,000+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label className="text-sm font-semibold text-gray-700 mb-4 block">
                    Preferred Destinations *
                  </Label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {destinationOptions.map((destination) => (
                      <label key={destination} className="flex items-center space-x-3 cursor-pointer">
                        <Checkbox
                          checked={formData.destinations.includes(destination)}
                          onCheckedChange={(checked) => handleDestinationChange(destination, checked as boolean)}
                        />
                        <span className="text-sm text-gray-700">{destination}</span>
                      </label>
                    ))}
                  </div>
                  {formData.destinations.length === 0 && (
                    <p className="text-sm text-red-500 mt-2">Please select at least one destination</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="requirements" className="text-sm font-semibold text-gray-700 mb-2">
                    Special Requirements or Preferences
                  </Label>
                  <Textarea
                    id="requirements"
                    rows={4}
                    placeholder="Tell us about any special requirements, dietary restrictions, accessibility needs, or preferences..."
                    value={formData.requirements}
                    onChange={(e) => setFormData(prev => ({ ...prev, requirements: e.target.value }))}
                    className="rounded-xl"
                  />
                </div>

                <div className="text-center">
                  <Button 
                    type="submit" 
                    disabled={bookingMutation.isPending}
                    className="bg-saffron text-white hover:bg-orange-600 rounded-full text-lg px-12 py-4 transform hover:scale-105 transition-all shadow-lg"
                  >
                    {bookingMutation.isPending ? (
                      "Submitting..."
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        Submit Inquiry
                      </>
                    )}
                  </Button>
                  <p className="text-sm text-gray-500 mt-4">
                    Our travel experts will contact you within 24 hours
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}
