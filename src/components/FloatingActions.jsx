import React from 'react';
import { useLocation } from 'react-router-dom';
import { Phone, MessageCircle } from 'lucide-react';
import { restaurantData } from '../data/restaurant';

export default function FloatingActions() {
  const location = useLocation();

  // Hide floating action buttons on owner dashboard for clean administrative view
  if (location.pathname.startsWith('/owner-dashboard')) {
    return null;
  }

  const prefilledText = encodeURIComponent(
    `Hello Paradise Pool Side Restaurant! I would like to inquire about table reservations / poolside dining.`
  );

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-3 pointer-events-none">
      {/* Floating Call Button */}
      <a
        href={`tel:${restaurantData.contact.phonePrimary}`}
        className="pointer-events-auto flex items-center space-x-2 bg-stone-900 text-white px-3.5 py-2.5 rounded-full shadow-lg shadow-stone-900/30 hover:bg-stone-800 hover:scale-105 active:scale-95 transition-all group"
        aria-label="Call Paradise Pool Side Restaurant"
        title={`Call ${restaurantData.contact.phonePrimary}`}
      >
        <span className="w-8 h-8 rounded-full bg-amber-500 text-stone-900 flex items-center justify-center shrink-0">
          <Phone className="w-4 h-4 fill-current" />
        </span>
        <span className="text-xs font-bold tracking-wide pr-1 hidden sm:inline">
          Call Desk
        </span>
      </a>

      {/* Floating WhatsApp Button */}
      <a
        href={`https://wa.me/${restaurantData.contact.whatsAppClean}?text=${prefilledText}`}
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto flex items-center space-x-2 bg-emerald-600 text-white px-3.5 py-2.5 rounded-full shadow-lg shadow-emerald-700/30 hover:bg-emerald-700 hover:scale-105 active:scale-95 transition-all group"
        aria-label="Chat with Paradise Pool Side Restaurant on WhatsApp"
        title="Chat on WhatsApp"
      >
        <span className="w-8 h-8 rounded-full bg-white text-emerald-600 flex items-center justify-center shrink-0">
          <MessageCircle className="w-4 h-4 fill-current" />
        </span>
        <span className="text-xs font-bold tracking-wide pr-1 hidden sm:inline">
          WhatsApp
        </span>
      </a>
    </div>
  );
}

