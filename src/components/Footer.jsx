import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Phone, 
  Clock, 
  MessageSquare, 
  Instagram, 
  Facebook, 
  ShieldCheck, 
  ExternalLink,
  UtensilsCrossed 
} from 'lucide-react';
import { restaurantData } from '../data/restaurant';
import { isRestaurantOpenNow } from '../utils/storage';

export default function Footer() {
  const isOpen = isRestaurantOpenNow();

  return (
    <footer className="bg-stone-900 text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-stone-800">
          
          {/* Col 1: Brand & Ambience */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-teal-600 flex items-center justify-center text-white">
                <UtensilsCrossed className="w-5 h-5 text-amber-300" />
              </div>
              <span className="font-display font-bold text-xl text-white tracking-tight">
                {restaurantData.name}
              </span>
            </div>
            
            <p className="text-sm text-stone-400 leading-relaxed">
              {restaurantData.shortDescription}
            </p>

            <div className="pt-2 flex items-center space-x-2">
              <span className={`inline-block w-2.5 h-2.5 rounded-full ${isOpen ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'}`}></span>
              <span className="text-xs font-semibold text-stone-200">
                {isOpen ? 'Open Now for Dining & Orders' : 'Currently Closed (Opens 11 AM)'}
              </span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="font-display font-bold text-white text-base mb-4 tracking-wide">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="hover:text-teal-400 transition-colors">
                  Home Overview
                </Link>
              </li>
              <li>
                <Link to="/menu" className="hover:text-teal-400 transition-colors">
                  Full Dining Menu (INR ₹)
                </Link>
              </li>
              <li>
                <Link to="/location" className="hover:text-teal-400 transition-colors">
                  Location &amp; Directions
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-teal-400 transition-colors">
                  Contact &amp; Reservations
                </Link>
              </li>
              <li>
                <Link to="/cart" className="hover:text-teal-400 transition-colors">
                  Online Cart / Checkout
                </Link>
              </li>
              <li className="pt-2 border-t border-stone-800/60">
                <Link to="/owner-login" className="text-teal-400 hover:text-teal-300 font-medium flex items-center space-x-1.5">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Restaurant Owner Portal</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Real Timings & Cuisines */}
          <div>
            <h4 className="font-display font-bold text-white text-base mb-4 tracking-wide">
              Hours &amp; Cuisines
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2.5 text-stone-300">
                <Clock className="w-4 h-4 text-amber-400 mt-1 shrink-0" />
                <div>
                  <div className="font-semibold text-white">{restaurantData.hours.days}</div>
                  <div className="text-teal-400 font-mono text-xs mt-0.5">{restaurantData.hours.display}</div>
                  <div className="text-stone-400 text-xs mt-1">{restaurantData.hours.note}</div>
                </div>
              </div>

              <div className="pt-2">
                <div className="text-xs uppercase tracking-wider text-stone-400 font-bold mb-1">
                  Cuisines Served
                </div>
                <p className="text-xs text-stone-300 leading-relaxed">
                  {restaurantData.cuisineType}
                </p>
              </div>

              <div>
                <div className="text-xs uppercase tracking-wider text-stone-400 font-bold mb-1">
                  Average Price
                </div>
                <p className="text-xs text-amber-300 font-medium">
                  {restaurantData.priceRange}
                </p>
              </div>
            </div>
          </div>

          {/* Col 4: Location & Direct Contact */}
          <div>
            <h4 className="font-display font-bold text-white text-base mb-4 tracking-wide">
              Address &amp; Contacts
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2.5 text-stone-300">
                <MapPin className="w-4 h-4 text-teal-400 mt-1 shrink-0" />
                <address className="not-italic text-xs text-stone-300 leading-relaxed">
                  {restaurantData.address.fullAddress}
                </address>
              </div>

              <div className="flex items-center space-x-2.5 text-stone-300">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <div className="text-xs space-y-0.5">
                  <div>
                    <a href={`tel:${restaurantData.contact.phonePrimary}`} className="hover:text-white transition-colors">
                      {restaurantData.contact.phonePrimary}
                    </a>
                  </div>
                  <div>
                    <a href={`tel:${restaurantData.contact.phoneSecondary}`} className="hover:text-white transition-colors text-stone-400">
                      {restaurantData.contact.phoneSecondary}
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Channels & WhatsApp */}
              <div className="pt-3">
                <div className="text-xs uppercase tracking-wider text-stone-400 font-bold mb-2">
                  Connect With Us
                </div>
                <div className="flex items-center space-x-3">
                  <a
                    href={`https://wa.me/${restaurantData.contact.whatsAppClean}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg bg-emerald-600/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-colors"
                    aria-label="WhatsApp Chat"
                    title="Chat on WhatsApp"
                  >
                    <MessageSquare className="w-4 h-4" />
                  </a>
                  <a
                    href={restaurantData.contact.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg bg-teal-600/20 text-teal-400 border border-teal-500/30 flex items-center justify-center hover:bg-teal-600 hover:text-white transition-colors"
                    aria-label="Google Maps Location"
                    title="View on Google Maps"
                  >
                    <MapPin className="w-4 h-4" />
                  </a>
                  <a
                    href={restaurantData.socialLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg bg-rose-600/20 text-rose-400 border border-rose-500/30 flex items-center justify-center hover:bg-rose-600 hover:text-white transition-colors"
                    aria-label="Instagram Profile"
                    title={restaurantData.socialLinks.instagramHandle}
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                </div>
                <p className="text-[11px] text-stone-400 mt-2">
                  Instagram: <span className="text-stone-300 italic">{restaurantData.socialLinks.instagramHandle}</span>
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright & demo banner */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-400 space-y-3 sm:space-y-0">
          <div>
            © {new Date().getFullYear()} {restaurantData.name}. All rights reserved.
          </div>
          <div className="text-center sm:text-right text-stone-300">
            <span>Demo Website Ready to Deploy on Netlify</span>
            <span className="mx-2">•</span>
            <span className="text-teal-400 font-medium">All data editable in src/data/restaurant.js</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

