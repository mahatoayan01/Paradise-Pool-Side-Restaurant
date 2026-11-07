import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Star, 
  Clock, 
  MapPin, 
  Phone, 
  MessageCircle, 
  Calendar, 
  ShoppingBag, 
  ChevronDown, 
  ChevronUp, 
  CheckCircle2, 
  ShieldAlert, 
  Sparkles, 
  Tag, 
  Instagram, 
  Utensils, 
  Wine, 
  Trees, 
  Car,
  ArrowRight,
  Plus
} from 'lucide-react';
import { restaurantData } from '../data/restaurant';
import { isRestaurantOpenNow, addToCart, saveBooking } from '../utils/storage';
import LightboxModal from '../components/LightboxModal';

export default function Home() {
  const isOpen = isRestaurantOpenNow();
  const [activeFaq, setActiveFaq] = useState(null);
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [cartFeedback, setCartFeedback] = useState(null);

  // Table booking form state
  const [bookingForm, setBookingForm] = useState({
    name: '',
    phone: '',
    date: '',
    time: '07:30 PM',
    guests: '2 Guests',
    notes: ''
  });
  const [bookingSuccess, setBookingSuccess] = useState(null);

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    if (!bookingForm.name || !bookingForm.phone || !bookingForm.date) {
      alert("Please enter your name, phone number, and date.");
      return;
    }
    const saved = saveBooking(bookingForm);
    setBookingSuccess(saved);
  };

  const handleAddToCart = (dish) => {
    addToCart(dish, 1);
    setCartFeedback(dish.id);
    setTimeout(() => setCartFeedback(null), 1800);
  };

  const toggleFaq = (idx) => {
    setActiveFaq(activeFaq === idx ? null : idx);
  };

  const whatsAppBookingUrl = bookingSuccess
    ? `https://wa.me/${restaurantData.contact.whatsAppClean}?text=${encodeURIComponent(
        `Hi Paradise Pool Side Restaurant! I have placed a table reservation (ID: ${bookingSuccess.id}):\nName: ${bookingSuccess.name}\nDate: ${bookingSuccess.date} at ${bookingSuccess.time}\nGuests: ${bookingSuccess.guests}\nNotes: ${bookingSuccess.notes || 'None'}`
      )}`
    : `https://wa.me/${restaurantData.contact.whatsAppClean}`;

  return (
    <div className="space-y-20 pb-16">
      
      {/* ================= 1. HERO SECTION ================= */}
      <section className="relative overflow-hidden bg-gradient-to-b from-stone-900 via-teal-950 to-stone-900 text-white pt-12 pb-24 lg:pt-20 lg:pb-32">
        {/* Ambient background glow & water reflection motif */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-teal-500 blur-3xl"></div>
          <div className="absolute bottom-0 -left-20 w-80 h-80 rounded-full bg-amber-500 blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              {/* Rating & Live Open Status Badge */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
                <div className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-amber-300 text-xs font-bold">
                  <Star className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
                  <span>{restaurantData.rating.score} / 5.0</span>
                  <span className="text-white/60 font-normal">({restaurantData.rating.totalReviews} local reviews)</span>
                </div>

                <div className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-teal-900/60 backdrop-blur-md border border-teal-500/30 text-teal-200 text-xs font-semibold">
                  <span className={`w-2 h-2 rounded-full ${isOpen ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'}`}></span>
                  <span>{isOpen ? 'Open Today: 11 AM – 11 PM' : 'Opens Today at 11:00 AM'}</span>
                </div>
              </div>

              {/* Title & Tagline */}
              <div className="space-y-3">
                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
                  Paradise Pool Side <br className="hidden sm:inline" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-teal-200 to-amber-200">
                    Restaurant
                  </span>
                </h1>
                <p className="text-lg sm:text-xl text-teal-100/90 font-light max-w-2xl leading-relaxed">
                  {restaurantData.tagline}
                </p>
                <p className="text-sm text-stone-300 max-w-xl">
                  {restaurantData.shortDescription}
                </p>
              </div>

              {/* Four Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4">
                <Link
                  to="/menu"
                  className="px-6 py-3.5 rounded-xl bg-amber-500 text-stone-950 font-bold text-sm tracking-wide shadow-lg shadow-amber-500/20 hover:bg-amber-400 hover:scale-105 active:scale-95 transition-all flex items-center space-x-2"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Order Online</span>
                </Link>

                <a
                  href="#book-table"
                  className="px-6 py-3.5 rounded-xl bg-teal-700/80 hover:bg-teal-700 text-white font-bold text-sm tracking-wide border border-teal-500/30 shadow-md hover:scale-105 active:scale-95 transition-all flex items-center space-x-2"
                >
                  <Calendar className="w-4 h-4 text-amber-300" />
                  <span>Book a Table</span>
                </a>

                <a
                  href={`tel:${restaurantData.contact.phonePrimary}`}
                  className="px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 transition-all flex items-center space-x-2"
                >
                  <Phone className="w-4 h-4 text-teal-300" />
                  <span>Call Desk</span>
                </a>

                <a
                  href={`https://wa.me/${restaurantData.contact.whatsAppClean}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3.5 rounded-xl bg-emerald-700/80 hover:bg-emerald-600 text-white font-semibold text-sm border border-emerald-500/30 transition-all flex items-center space-x-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </div>

              {/* Micro Landmark note */}
              <div className="pt-2 flex items-center justify-center lg:justify-start space-x-2 text-xs text-stone-400">
                <MapPin className="w-3.5 h-3.5 text-teal-400" />
                <span>Inside Shakthi Hill Resorts grounds, BEML 5th Stage, RR Nagar</span>
              </div>
            </div>

            {/* Right Featured Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border border-white/15 shadow-2xl bg-stone-900/60 backdrop-blur-md group">
                <div className="aspect-[4/3] w-full overflow-hidden bg-stone-950">
                  <img
                    src="/images/platter.svg"
                    alt="Paradise Pool Side Restaurant Special Platter"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 sm:p-6 bg-gradient-to-t from-stone-950 to-stone-900/90 text-white space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase font-bold tracking-widest text-teal-400">
                      Poolside Experience
                    </span>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                      Multi-Cuisine &amp; Bar
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-white">
                    Relax by the Water with Sizzling Starters
                  </h3>
                  <p className="text-xs text-stone-300 leading-relaxed">
                    Savor Bengaluru favorites like Mushroom Dry, Chicken Kebabs, Kadai Chicken, and cold draught beer by the illuminated swimming pool.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ================= 2. ABOUT US SECTION ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-teal-800 bg-teal-50 px-3 py-1.5 rounded-lg border border-teal-200">
              <Trees className="w-3.5 h-3.5" />
              <span>Real Location &amp; History</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl font-bold text-stone-900 leading-tight">
              {restaurantData.about.title}
            </h2>

            <p className="text-stone-600 font-medium text-base">
              {restaurantData.about.subtitle}
            </p>

            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              {restaurantData.about.storyParagraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {restaurantData.about.highlights.map((h, i) => (
                <div key={i} className="p-4 rounded-xl bg-stone-50 border border-stone-200/80">
                  <h4 className="font-bold text-stone-900 text-sm flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-teal-600"></span>
                    <span>{h.title}</span>
                  </h4>
                  <p className="text-xs text-stone-500 mt-1">
                    {h.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden shadow-md border border-stone-200 bg-stone-100 aspect-[4/3]">
                <img src="/images/gallery-poolside.svg" alt="Poolside seating deck" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-md border border-stone-200 bg-stone-100 aspect-square">
                <img src="/images/mushroom-dry.svg" alt="Mushroom dry dish" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="space-y-4 pt-6">
              <div className="rounded-2xl overflow-hidden shadow-md border border-stone-200 bg-stone-100 aspect-square">
                <img src="/images/kadai-chicken.svg" alt="Kadai chicken curry" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-md border border-stone-200 bg-stone-100 aspect-[4/3]">
                <img src="/images/gallery-evening.svg" alt="Evening twilight dining" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

        </div>
      </section>


      {/* ================= 3. POPULAR DISHES ================= */}
      <section className="bg-stone-100/70 py-16 border-y border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-teal-800 bg-teal-100 px-3 py-1 rounded-full">
                Customer Favorites
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-stone-900 mt-2">
                Popular Poolside Dishes
              </h2>
              <p className="text-stone-600 text-sm mt-1 max-w-xl">
                Real dishes curated from patron feedback and restaurant specialty tandoor menus.
              </p>
            </div>

            <Link
              to="/menu"
              className="inline-flex items-center space-x-1.5 text-teal-800 font-bold text-sm hover:text-teal-900 transition-colors"
            >
              <span>Explore Full Menu (35+ Items)</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {restaurantData.popularDishes.map((dish) => (
              <div
                key={dish.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md border border-stone-200 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="relative aspect-[16/10] bg-stone-100 overflow-hidden">
                    <img
                      src={dish.image}
                      alt={dish.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3 flex items-center space-x-1.5">
                      <span className={`w-3 h-3 rounded-full border border-white ${dish.isVeg ? 'bg-emerald-600' : 'bg-rose-600'}`} title={dish.isVeg ? 'Vegetarian' : 'Non-Vegetarian'}></span>
                      <span className="bg-stone-900/80 backdrop-blur-md text-white text-[11px] font-bold px-2 py-0.5 rounded-full">
                        {dish.badge}
                      </span>
                    </div>
                  </div>

                  <div className="p-5 space-y-2">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-display font-bold text-lg text-stone-900 leading-snug">
                        {dish.name}
                      </h3>
                      <span className="font-bold text-teal-800 text-base shrink-0 font-mono">
                        ₹{dish.price}
                      </span>
                    </div>
                    <p className="text-xs text-stone-500 leading-relaxed">
                      {dish.description}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <button
                    onClick={() => handleAddToCart(dish)}
                    className={`w-full py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center space-x-1.5 ${
                      cartFeedback === dish.id
                        ? 'bg-emerald-600 text-white'
                        : 'bg-teal-700 text-white hover:bg-teal-800'
                    }`}
                  >
                    {cartFeedback === dish.id ? (
                      <>
                        <CheckCircle2 className="w-4 h-4" />
                        <span>Added to Cart!</span>
                      </>
                    ) : (
                      <>
                        <Plus className="w-4 h-4" />
                        <span>Add to Cart</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* ================= 4. OFFERS / DEALS SECTION ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-teal-900 via-teal-800 to-stone-900 text-white p-8 sm:p-12 shadow-xl relative overflow-hidden">
          <div className="relative z-10 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="inline-flex items-center space-x-1 text-xs font-bold uppercase tracking-wider text-amber-300 bg-amber-400/20 px-3 py-1 rounded-full border border-amber-400/30">
                  <Tag className="w-3.5 h-3.5" />
                  <span>Special Offers &amp; Combos</span>
                </span>
                <h2 className="font-display text-2xl sm:text-3xl font-bold mt-2">
                  Poolside Deals &amp; Dine-in Perks
                </h2>
              </div>
              <span className="text-xs bg-white/10 px-3 py-1.5 rounded-lg border border-white/20 text-teal-200">
                Sample offers (Editable in src/data/restaurant.js)
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
              {restaurantData.offers.map((offer) => (
                <div
                  key={offer.id}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/15 flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-amber-400 text-stone-950">
                        {offer.code}
                      </span>
                      <span className="font-bold text-amber-300 text-sm">
                        {offer.discount}
                      </span>
                    </div>
                    <h3 className="font-bold text-white text-base">
                      {offer.title}
                    </h3>
                    <p className="text-xs text-stone-300 leading-relaxed">
                      {offer.description}
                    </p>
                  </div>

                  <div className="text-[11px] text-teal-300 border-t border-white/10 pt-2 font-medium">
                    Valid: {offer.validity}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* ================= 5. PHOTO GALLERY ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-800 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
            Visual Tour
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-stone-900">
            Poolside Ambience &amp; Flavors
          </h2>
          <p className="text-stone-600 text-sm">
            Click on any photo to open the fullscreen view. Real images can be saved into /public/images.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {restaurantData.gallery.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(idx)}
              className="group cursor-pointer rounded-2xl overflow-hidden border border-stone-200 bg-stone-100 shadow-sm hover:shadow-lg transition-all"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-stone-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="px-4 py-2 rounded-xl bg-white/90 text-stone-900 font-bold text-xs shadow-md">
                    Click to Enlarge
                  </span>
                </div>
              </div>
              <div className="p-4 bg-white">
                <div className="flex items-center justify-between text-xs text-teal-700 font-bold uppercase tracking-wider">
                  <span>{item.category}</span>
                  <span className="text-stone-400 font-normal">Photo #{idx + 1}</span>
                </div>
                <h4 className="font-bold text-stone-900 text-sm mt-1">{item.title}</h4>
                <p className="text-xs text-stone-500 mt-0.5">{item.caption}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        <LightboxModal
          items={restaurantData.gallery}
          activeIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={() => setLightboxIndex((prev) => (prev > 0 ? prev - 1 : restaurantData.gallery.length - 1))}
          onNext={() => setLightboxIndex((prev) => (prev < restaurantData.gallery.length - 1 ? prev + 1 : 0))}
        />
      </section>


      {/* ================= 6. OPENING HOURS & TIMINGS ================= */}
      <section className="bg-stone-900 text-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            <div className="md:col-span-5 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-400/20 px-3 py-1 rounded-full border border-amber-400/30">
                Operating Schedule
              </span>
              <h2 className="font-display text-3xl font-bold">
                Restaurant Timings
              </h2>
              <p className="text-stone-300 text-sm leading-relaxed">
                We operate continuously seven days a week, welcoming lunch guests, afternoon catch-ups, and evening poolside dining.
              </p>
              
              <div className="p-4 rounded-xl bg-stone-800/80 border border-stone-700 space-y-1">
                <div className="flex items-center space-x-2">
                  <span className={`w-3 h-3 rounded-full ${isOpen ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'}`}></span>
                  <span className="font-bold text-white text-sm">
                    {isOpen ? 'Currently Open Right Now' : 'Currently Closed'}
                  </span>
                </div>
                <p className="text-xs text-stone-400">
                  {isOpen ? 'Walk-in dining and online orders active.' : 'We open promptly at 11:00 AM daily.'}
                </p>
              </div>
            </div>

            <div className="md:col-span-7 bg-stone-800 rounded-2xl p-6 border border-stone-700 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-stone-700">
                <span className="font-bold text-stone-200">Monday – Sunday</span>
                <span className="font-mono font-bold text-teal-400">{restaurantData.hours.display}</span>
              </div>
              <div className="flex items-center justify-between pb-3 border-b border-stone-700 text-sm">
                <span className="text-stone-300">Last Food Order</span>
                <span className="font-mono text-stone-300">10:30 PM</span>
              </div>
              <div className="flex items-center justify-between pb-3 border-b border-stone-700 text-sm">
                <span className="text-stone-300">Poolside Bar Service</span>
                <span className="font-mono text-stone-300">11:00 AM – 11:00 PM</span>
              </div>
              <div className="text-xs text-stone-400 pt-1 leading-relaxed">
                💡 <span className="font-semibold text-stone-300">Tip from local patrons:</span> For the most relaxing poolside experience, reserve your table between 5:30 PM and 7:30 PM to catch sunset reflections across the water.
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ================= 7. TABLE BOOKING FORM ================= */}
      <section id="book-table" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-stone-200">
          
          <div className="text-center max-w-xl mx-auto space-y-2 mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-800 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
              Instant Reservation (Demo)
            </span>
            <h2 className="font-display text-3xl font-bold text-stone-900">
              Book a Poolside Table
            </h2>
            <p className="text-xs sm:text-sm text-stone-500">
              Reserve your open-air table in advance. Stored in localStorage and appears in the Owner Dashboard.
            </p>
          </div>

          {bookingSuccess ? (
            <div className="p-6 rounded-2xl bg-teal-50 border border-teal-200 text-center space-y-4 animate-in fade-in">
              <div className="w-12 h-12 rounded-full bg-teal-600 text-white flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-stone-900">
                  Table Reservation Confirmed (Demo)!
                </h3>
                <p className="text-sm text-stone-600 mt-1">
                  Thank you, <span className="font-bold text-teal-800">{bookingSuccess.name}</span>. We've recorded your booking for <span className="font-bold">{bookingSuccess.guests}</span> on <span className="font-bold">{bookingSuccess.date}</span> at <span className="font-bold">{bookingSuccess.time}</span> (Booking ID: <span className="font-mono font-bold">{bookingSuccess.id}</span>).
                </p>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={whatsAppBookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow flex items-center justify-center space-x-2 transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send Confirmation on WhatsApp</span>
                </a>

                <button
                  onClick={() => setBookingSuccess(null)}
                  className="w-full sm:w-auto px-5 py-3 rounded-xl bg-stone-200 hover:bg-stone-300 text-stone-800 text-xs font-bold transition-colors"
                >
                  Book Another Table
                </button>
              </div>

              <div className="text-[11px] text-stone-500 pt-2 border-t border-teal-100">
                Note: This is an interactive demo. The booking is securely saved in your browser localStorage and shows up on the <Link to="/owner-dashboard" className="text-teal-700 underline font-bold">Owner Dashboard</Link>.
              </div>
            </div>
          ) : (
            <form onSubmit={handleBookingSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={bookingForm.name}
                    onChange={(e) => setBookingForm({ ...bookingForm, name: e.target.value })}
                    placeholder="e.g. Ramesh Kumar"
                    className="w-full px-4 py-2.5 rounded-xl border border-stone-300 focus:ring-2 focus:ring-teal-600 focus:border-teal-600 outline-none text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={bookingForm.phone}
                    onChange={(e) => setBookingForm({ ...bookingForm, phone: e.target.value })}
                    placeholder="e.g. +91 98450 12345"
                    className="w-full px-4 py-2.5 rounded-xl border border-stone-300 focus:ring-2 focus:ring-teal-600 focus:border-teal-600 outline-none text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase mb-1">
                    Reservation Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={bookingForm.date}
                    onChange={(e) => setBookingForm({ ...bookingForm, date: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-stone-300 focus:ring-2 focus:ring-teal-600 focus:border-teal-600 outline-none text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase mb-1">
                    Preferred Time
                  </label>
                  <select
                    value={bookingForm.time}
                    onChange={(e) => setBookingForm({ ...bookingForm, time: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-stone-300 focus:ring-2 focus:ring-teal-600 focus:border-teal-600 outline-none text-sm bg-white"
                  >
                    <option value="12:30 PM">12:30 PM (Lunch)</option>
                    <option value="01:30 PM">01:30 PM (Lunch)</option>
                    <option value="04:30 PM">04:30 PM (Sunset Starters)</option>
                    <option value="06:30 PM">06:30 PM (Early Dinner)</option>
                    <option value="07:30 PM">07:30 PM (Prime Dinner)</option>
                    <option value="08:30 PM">08:30 PM (Dinner)</option>
                    <option value="09:30 PM">09:30 PM (Late Dinner)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase mb-1">
                    Number of Guests
                  </label>
                  <select
                    value={bookingForm.guests}
                    onChange={(e) => setBookingForm({ ...bookingForm, guests: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-stone-300 focus:ring-2 focus:ring-teal-600 focus:border-teal-600 outline-none text-sm bg-white"
                  >
                    <option value="1 Guest">1 Guest</option>
                    <option value="2 Guests">2 Guests (Couple)</option>
                    <option value="4 Guests">4 Guests (Family)</option>
                    <option value="6 Guests">6 Guests</option>
                    <option value="8+ Guests">8+ Guests (Group/Party)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 uppercase mb-1">
                  Special Notes or Seating Preference
                </label>
                <textarea
                  rows="2"
                  value={bookingForm.notes}
                  onChange={(e) => setBookingForm({ ...bookingForm, notes: e.target.value })}
                  placeholder="e.g. Please arrange a table directly beside the pool water. Celebrating anniversary."
                  className="w-full px-4 py-2.5 rounded-xl border border-stone-300 focus:ring-2 focus:ring-teal-600 focus:border-teal-600 outline-none text-sm"
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-bold text-sm shadow-md active:scale-95 transition-all flex items-center justify-center space-x-2"
                >
                  <Calendar className="w-4 h-4 text-amber-300" />
                  <span>Confirm Table Reservation (Demo)</span>
                </button>
              </div>

              <div className="flex items-center justify-center space-x-1.5 text-[11px] text-stone-500">
                <ShieldAlert className="w-3.5 h-3.5 text-teal-700" />
                <span>Demo booking form: No payment needed, records to your local browser storage.</span>
              </div>
            </form>
          )}

        </div>
      </section>


      {/* ================= 8. CUSTOMER REVIEWS ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-teal-800 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
              Feedback &amp; Reputation
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-stone-900 mt-2">
              What Patrons Say
            </h2>
            <p className="text-stone-600 text-sm mt-1">
              Real dining impressions compiled from local public directories.
            </p>
          </div>

          <div className="flex items-center space-x-3 bg-stone-100 p-3 rounded-2xl border border-stone-200">
            <div className="text-2xl font-display font-bold text-teal-900">
              {restaurantData.rating.score}
            </div>
            <div>
              <div className="flex items-center text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-3.5 h-3.5 ${i < 4 ? 'fill-amber-400' : 'text-stone-300'}`} />
                ))}
              </div>
              <div className="text-[11px] text-stone-500">Based on 120+ ratings</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {restaurantData.reviews.map((rev) => (
            <div
              key={rev.id}
              className={`rounded-2xl p-5 border flex flex-col justify-between ${
                rev.isSample
                  ? 'bg-amber-50/50 border-amber-200'
                  : 'bg-white border-stone-200 shadow-sm'
              }`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3.5 h-3.5 ${i < rev.rating ? 'fill-amber-400' : 'text-stone-300'}`}
                      />
                    ))}
                  </div>
                  <span className="text-[11px] text-stone-400">{rev.date}</span>
                </div>

                <p className="text-xs text-stone-700 leading-relaxed italic">
                  "{rev.text}"
                </p>
              </div>

              <div className="pt-4 border-t border-stone-100 mt-4 flex items-center justify-between">
                <div>
                  <div className="font-bold text-stone-900 text-xs">{rev.name}</div>
                  <div className="text-[10px] text-stone-400">{rev.source}</div>
                </div>
                {rev.isSample && (
                  <span className="text-[10px] font-bold bg-amber-200 text-amber-900 px-2 py-0.5 rounded">
                    Sample
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* ================= 9. INSTAGRAM POSTS SECTION ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-rose-700 bg-rose-50 px-3 py-1 rounded-full border border-rose-200">
              Social Community
            </span>
            <h2 className="font-display text-3xl font-bold text-stone-900 mt-2">
              Follow Us on Instagram
            </h2>
            <p className="text-xs sm:text-sm text-stone-500">
              Handle placeholder: <span className="font-mono text-teal-800 font-semibold">{restaurantData.socialLinks.instagramHandle}</span>
            </p>
          </div>

          <a
            href={restaurantData.socialLinks.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-rose-500 to-pink-600 text-white font-bold text-xs shadow-md hover:opacity-95 active:scale-95 transition-all self-start sm:self-auto"
          >
            <Instagram className="w-4 h-4" />
            <span>Follow on Instagram</span>
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {restaurantData.instagramPosts.map((post) => (
            <div
              key={post.id}
              className="group relative rounded-2xl overflow-hidden border border-stone-200 bg-stone-900 aspect-square shadow-sm"
            >
              <img
                src={post.image}
                alt="Instagram post thumbnail"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-stone-950/75 opacity-0 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-between text-white">
                <span className="text-[10px] text-teal-300 font-bold">{post.date}</span>
                <p className="text-xs text-stone-200 line-clamp-3 leading-relaxed">
                  {post.caption}
                </p>
                <div className="text-[11px] font-bold text-amber-300">
                  ♥ {post.likes} likes
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* ================= 10. FREQUENTLY ASKED QUESTIONS ================= */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-800 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
            Common Questions
          </span>
          <h2 className="font-display text-3xl font-bold text-stone-900">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-stone-500">
            Verified information about seating, parking, cuisines, and bookings.
          </p>
        </div>

        <div className="space-y-3">
          {restaurantData.faq.map((item, idx) => {
            const isExpanded = activeFaq === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-stone-200 bg-white overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-sm text-stone-900 hover:text-teal-800 focus:outline-none"
                >
                  <span>{item.q}</span>
                  {isExpanded ? (
                    <ChevronUp className="w-4 h-4 text-teal-700 shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-stone-400 shrink-0" />
                  )}
                </button>

                {isExpanded && (
                  <div className="px-4 sm:px-5 pb-5 pt-0 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100 bg-stone-50/50">
                    <p className="pt-3">{item.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
}

