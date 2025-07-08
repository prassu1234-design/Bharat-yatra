import { Link } from "wouter";
import { Facebook, Instagram, Youtube, MessageSquare } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-3xl font-display font-bold text-saffron mb-4">Bharat Yatra</h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Connecting souls to the divine through authentic pilgrimage experiences across India's most sacred destinations.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-saffron rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-saffron rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-saffron rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-saffron rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors">
                <MessageSquare className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="/temples" className="hover:text-saffron transition-colors">Temple Tours</Link></li>
              <li><Link href="/destinations" className="hover:text-saffron transition-colors">Destinations</Link></li>
              <li><Link href="/booking" className="hover:text-saffron transition-colors">Tour Packages</Link></li>
              <li><a href="#" className="hover:text-saffron transition-colors">Travel Guide</a></li>
              <li><a href="#" className="hover:text-saffron transition-colors">About Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Popular Tours</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-saffron transition-colors">Char Dham Yatra</a></li>
              <li><a href="#" className="hover:text-saffron transition-colors">South India Temples</a></li>
              <li><a href="#" className="hover:text-saffron transition-colors">Himalayas Pilgrimage</a></li>
              <li><a href="#" className="hover:text-saffron transition-colors">Golden Triangle + Temples</a></li>
              <li><a href="#" className="hover:text-saffron transition-colors">Spiritual Retreats</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Bharat Yatra. All rights reserved. | Designed with devotion for spiritual journeys.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-saffron transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-saffron transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-saffron transition-colors">Cancellation Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
