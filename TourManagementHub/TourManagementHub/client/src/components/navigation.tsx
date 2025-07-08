import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

export default function Navigation() {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/temples", label: "Temples" },
    { path: "/destinations", label: "Destinations" },
    { path: "/booking", label: "Packages" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <h1 className="text-2xl font-display font-bold text-saffron">Bharat Yatra</h1>
              <p className="text-xs text-deep-green font-medium">Sacred Journeys</p>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <Link key={item.path} href={item.path} className={`px-3 py-2 text-sm font-medium transition-colors ${
                  location === item.path 
                    ? "text-saffron" 
                    : "text-gray-700 hover:text-saffron"
                }`}>
                  {item.label}
                </Link>
              ))}
              <Link href="/booking">
                <Button className="bg-saffron text-white hover:bg-orange-600 rounded-full">
                  Book Now
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {navItems.map((item) => (
                <Link key={item.path} href={item.path} className={`block px-3 py-2 text-base font-medium transition-colors ${
                  location === item.path 
                    ? "text-saffron" 
                    : "text-gray-700 hover:text-saffron"
                }`}>
                  {item.label}
                </Link>
              ))}
              <div className="px-3 py-2">
                <Link href="/booking">
                  <Button className="bg-saffron text-white hover:bg-orange-600 rounded-full w-full">
                    Book Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
