import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu as MenuIcon, 
  X, 
  ShoppingBag, 
  Phone, 
  Calendar, 
  Clock, 
  MapPin,
  UtensilsCrossed 
} from 'lucide-react';
import { restaurantData } from '../data/restaurant';
import { getCart, isRestaurantOpenNow } from '../utils/storage';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [isOpen, setIsOpen] = useState(true);
  const location = useLocation();

  const updateCount = () => {
    const items = getCart();
    const count = items.reduce((acc, curr) => acc + (curr.quantity || 1), 0);
    setCartCount(count);
  };

  useEffect(() => {
    updateCount();
    setIsOpen(isRestaurantOpenNow());
    window.addEventListener('cart-updated', updateCount);
    return () => window.removeEventListener('cart-updated', updateCount);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'Location', path: '/location' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200/80 shadow-sm transition-all">
      {/* Top micro bar with real operating status & primary phone */}
      <div className="bg-tropical-dark text-teal-100 text-xs py-1.5 px-4 hidden sm:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <span className="flex items-center space-x-1.5">
              <span className={`inline-block w-2 h-2 rounded-full ${isOpen ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'}`}></span>
              <span className="font-medium">
                {isOpen ? 'Open Now (11:00 AM – 11:00 PM)' : 'Closed Now (Opens 11:00 AM)'}
              </span>
            </span>
            <span className="flex items-center space-x-1 text-teal-200/80">
              <MapPin className="w-3.5 h-3.5 text-teal-400" />
              <span>Shakthi Hill Resorts, RR Nagar, Bangalore</span>
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <a 
              href={`tel:${restaurantData.contact.phonePrimary}`} 
              className="flex items-center space-x-1 hover:text-white transition-colors"
            >
              <Phone className="w-3 h-3 text-amber-400" />
              <span>{restaurantData.contact.phonePrimary}</span>
            </a>
            <span className="text-teal-700">|</span>
            <Link 
              to="/owner-login" 
              className="text-teal-300 hover:text-white text-xs transition-colors"
            >
              Owner Portal
            </Link>
          </div>
        </div>
      </div>

      {/* Main navigation bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 sm:h-20">
          
          {/* Brand Logo & Name */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-teal-600 to-teal-800 flex items-center justify-center text-white shadow-md shadow-teal-900/10 group-hover:scale-105 transition-transform">
              <UtensilsCrossed className="w-5 h-5 text-amber-300" />
            </div>
            <div>
              <div className="font-display font-bold text-lg sm:text-xl text-stone-900 tracking-tight leading-tight group-hover:text-teal-700 transition-colors">
                Paradise Pool Side
              </div>
              <div className="text-[11px] sm:text-xs text-stone-500 font-medium tracking-wide flex items-center space-x-1">
                <span>Restaurant</span>
                <span>•</span>
                <span className="text-teal-700 font-semibold">RR Nagar</span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-all ${
                    isActive
                      ? 'text-teal-800 bg-teal-50'
                      : 'text-stone-700 hover:text-teal-700 hover:bg-stone-50'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center space-x-3">
            {/* Cart Link with Badge */}
            <Link
              to="/cart"
              className="relative p-2.5 rounded-xl text-stone-700 hover:text-teal-700 hover:bg-teal-50 transition-colors"
              aria-label="View shopping cart"
            >
              <ShoppingBag className="w-5 h-5 sm:w-6 sm:h-6" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-amber-500 text-stone-900 font-bold text-xs w-5 h-5 rounded-full flex items-center justify-center shadow-sm animate-bounce">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Quick Table Booking CTA button */}
            <a
              href="#book-table"
              onClick={(e) => {
                if (location.pathname !== '/') {
                  // Let router handle navigation to /#book-table
                }
              }}
              className="hidden lg:inline-flex items-center space-x-1.5 px-4 py-2.5 rounded-xl bg-teal-700 text-white text-xs font-bold tracking-wide uppercase shadow-sm hover:bg-teal-800 hover:shadow-md transition-all active:scale-95"
            >
              <Calendar className="w-3.5 h-3.5 text-amber-300" />
              <span>Book Table</span>
            </a>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl text-stone-700 hover:bg-stone-100 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-stone-200 px-4 pt-3 pb-6 space-y-3 shadow-xl animate-in slide-in-from-top duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-stone-100 text-xs">
            <span className="flex items-center space-x-2">
              <span className={`w-2.5 h-2.5 rounded-full ${isOpen ? 'bg-emerald-500' : 'bg-amber-500'}`}></span>
              <span className="font-semibold text-stone-700">
                {isOpen ? 'Open Today: 11 AM - 11 PM' : 'Opens Today at 11 AM'}
              </span>
            </span>
            <Link to="/owner-login" className="text-teal-700 font-semibold text-xs">
              Owner Login
            </Link>
          </div>

          <div className="grid gap-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-4 py-2.5 rounded-xl text-base font-semibold transition-colors ${
                    isActive 
                      ? 'bg-teal-50 text-teal-800 font-bold' 
                      : 'text-stone-800 hover:bg-stone-50'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <Link
              to="/cart"
              className="flex items-center justify-between px-4 py-2.5 rounded-xl text-base font-semibold text-stone-800 hover:bg-stone-50"
            >
              <span>View Cart / Checkout</span>
              {cartCount > 0 && (
                <span className="bg-amber-500 text-stone-900 text-xs font-bold px-2 py-0.5 rounded-full">
                  {cartCount} items
                </span>
              )}
            </Link>
          </div>

          <div className="pt-2 grid grid-cols-2 gap-2">
            <a
              href={`tel:${restaurantData.contact.phonePrimary}`}
              className="flex items-center justify-center space-x-2 py-3 rounded-xl bg-stone-100 text-stone-800 text-sm font-semibold hover:bg-stone-200 transition-colors"
            >
              <Phone className="w-4 h-4 text-teal-700" />
              <span>Call Now</span>
            </a>
            <a
              href="#book-table"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center space-x-2 py-3 rounded-xl bg-teal-700 text-white text-sm font-semibold shadow hover:bg-teal-800 transition-colors"
            >
              <Calendar className="w-4 h-4 text-amber-300" />
              <span>Book Table</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

