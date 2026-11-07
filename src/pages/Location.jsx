import React from 'react';
import { 
  MapPin, 
  Navigation, 
  Clock, 
  Car, 
  Compass, 
  ExternalLink, 
  Phone, 
  CheckCircle2, 
  Info 
} from 'lucide-react';
import { restaurantData } from '../data/restaurant';
import { isRestaurantOpenNow } from '../utils/storage';

export default function Location() {
  const isOpen = isRestaurantOpenNow();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      
      {/* Page Header */}
      <div className="space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-teal-800 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
          Directions &amp; Map
        </span>
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-stone-900">
          Find Paradise Pool Side Restaurant
        </h1>
        <p className="text-stone-600 text-sm max-w-2xl">
          Located inside the scenic grounds of Shakthi Hill Resorts in Rajarajeshwari Nagar, Bengaluru. Follow the guide below for easy navigation and parking.
        </p>
      </div>

      {/* Main Grid: Details on Left, Map on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Address, Hours, Parking */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Address Card */}
          <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="font-display font-bold text-stone-900 text-lg">
                  Physical Address
                </h3>
                <address className="not-italic text-sm text-stone-600 leading-relaxed">
                  {restaurantData.address.fullAddress}
                </address>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-stone-50 border border-stone-200/70 text-xs text-stone-600 space-y-1">
              <div className="font-bold text-stone-800">Key Landmarks &amp; Access:</div>
              <div>• {restaurantData.address.landmark}</div>
              <div>• Approachable via Mysore Road through RR Nagar Main Arch &amp; BEML 5th Stage</div>
              <div>• Latitude: {restaurantData.coordinates.lat}, Longitude: {restaurantData.coordinates.lng}</div>
            </div>

            <div className="pt-2">
              <a
                href={restaurantData.contact.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-bold text-xs shadow flex items-center justify-center space-x-2 active:scale-95 transition-all"
              >
                <Navigation className="w-4 h-4 text-amber-300" />
                <span>Get Directions on Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-70" />
              </a>
            </div>
          </div>

          {/* Operating Hours Card */}
          <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display font-bold text-stone-900 text-lg">
                  Operating Hours
                </h3>
                <div className="flex items-center space-x-2 text-xs mt-0.5">
                  <span className={`w-2 h-2 rounded-full ${isOpen ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500'}`}></span>
                  <span className="font-semibold text-stone-700">
                    {isOpen ? 'Open Now (11:00 AM – 11:00 PM)' : 'Closed Now (Opens 11:00 AM)'}
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-2 text-sm text-stone-600 border-t border-stone-100 pt-3">
              <div className="flex justify-between py-1 border-b border-stone-100">
                <span className="font-medium text-stone-800">Monday to Sunday</span>
                <span className="font-mono font-bold text-teal-800">{restaurantData.hours.display}</span>
              </div>
              <div className="text-xs text-stone-500 pt-1">
                {restaurantData.hours.note}
              </div>
            </div>
          </div>

          {/* Parking & Amenities Card */}
          <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm space-y-3">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                <Car className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-stone-900 text-lg">
                Parking &amp; Facilities
              </h3>
            </div>

            <ul className="text-xs text-stone-600 space-y-2 pt-2">
              <li className="flex items-start space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span>Dedicated on-site parking for two-wheelers and four-wheelers inside resort gates.</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span>Open-air poolside tables with resort garden landscape.</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span>Washroom facilities and covered seating available inside resort pavilion.</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Right Column: Embedded Google Map */}
        <div className="lg:col-span-7 space-y-4">
          <div className="bg-white rounded-3xl overflow-hidden border border-stone-200 shadow-xl">
            <div className="p-4 bg-stone-900 text-white flex items-center justify-between text-xs">
              <div className="flex items-center space-x-2">
                <Compass className="w-4 h-4 text-teal-400" />
                <span className="font-bold tracking-wide">Google Maps Live Embed</span>
              </div>
              <span className="text-stone-400">Coords: 12.9099, 77.5283</span>
            </div>

            {/* Embedded Iframe as specified in instructions: https://www.google.com/maps?q=12.9099667,77.5283524&output=embed */}
            <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full bg-stone-100">
              <iframe
                title="Paradise Pool Side Restaurant Location Map"
                src={restaurantData.contact.embedMapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </div>

            <div className="p-4 bg-stone-50 border-t border-stone-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-stone-600">
              <div className="flex items-center space-x-1.5">
                <Info className="w-4 h-4 text-teal-700 shrink-0" />
                <span>Need help with navigation? Call our front desk directly.</span>
              </div>

              <a
                href={`tel:${restaurantData.contact.phonePrimary}`}
                className="font-bold text-teal-800 hover:text-teal-900 flex items-center space-x-1"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>{restaurantData.contact.phonePrimary}</span>
              </a>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}

