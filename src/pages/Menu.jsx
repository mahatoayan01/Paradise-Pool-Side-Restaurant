import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  ShoppingBag, 
  Plus, 
  Minus, 
  Check, 
  Flame, 
  Leaf, 
  UtensilsCrossed, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { menuCategories, menuItems } from '../data/menu';
import { getCart, addToCart, updateCartQuantity } from '../utils/storage';

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [dietFilter, setDietFilter] = useState("all"); // 'all', 'veg', 'non-veg'
  const [cartMap, setCartMap] = useState({});

  // Sync cart quantities
  const syncCart = () => {
    const items = getCart();
    const map = {};
    items.forEach(i => {
      map[i.id] = i.quantity;
    });
    setCartMap(map);
  };

  useEffect(() => {
    syncCart();
    window.addEventListener('cart-updated', syncCart);
    return () => window.removeEventListener('cart-updated', syncCart);
  }, []);

  // Filter items
  const filteredItems = menuItems.filter((item) => {
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch = 
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDiet = 
      dietFilter === "all" ? true :
      dietFilter === "veg" ? item.isVeg === true :
      item.isVeg === false;

    return matchesCategory && matchesSearch && matchesDiet;
  });

  const totalCartCount = Object.values(cartMap).reduce((a, b) => a + b, 0);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-teal-900 to-stone-900 rounded-3xl p-6 sm:p-10 text-white shadow-lg space-y-3">
        <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-amber-300 bg-amber-400/20 px-3 py-1 rounded-full border border-amber-400/30">
          <UtensilsCrossed className="w-3.5 h-3.5" />
          <span>Dining &amp; Takeaway Menu</span>
        </div>
        <h1 className="font-display text-3xl sm:text-4xl font-bold">
          Paradise Pool Side Specialties
        </h1>
        <p className="text-teal-100 text-xs sm:text-sm max-w-2xl leading-relaxed">
          From sizzling Shakthi Hills tandoori platters to crispy Mushroom Dry, enjoy our multi-cuisine spread by the water. All prices in Indian Rupees (INR ₹).
        </p>
      </div>

      {/* Search & Category Filter Controls */}
      <div className="space-y-4">
        
        {/* Top search & Diet toggle row */}
        <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
          
          {/* Search Box */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search dishes (e.g. Kadai Chicken, Platter, Mushroom)..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-stone-300 focus:ring-2 focus:ring-teal-600 focus:border-teal-600 outline-none text-sm bg-white shadow-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-stone-600"
              >
                Clear
              </button>
            )}
          </div>

          {/* Diet Filter Chips */}
          <div className="flex items-center space-x-1.5 bg-stone-100 p-1 rounded-xl border border-stone-200 self-start sm:self-auto">
            <button
              onClick={() => setDietFilter("all")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                dietFilter === "all" ? 'bg-white text-stone-900 shadow-sm' : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              All Items
            </button>
            <button
              onClick={() => setDietFilter("veg")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center space-x-1 ${
                dietFilter === "veg" ? 'bg-emerald-600 text-white shadow-sm' : 'text-emerald-700 hover:bg-emerald-50'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>Veg Only</span>
            </button>
            <button
              onClick={() => setDietFilter("non-veg")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center space-x-1 ${
                dietFilter === "non-veg" ? 'bg-rose-600 text-white shadow-sm' : 'text-rose-700 hover:bg-rose-50'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-rose-400"></span>
              <span>Non-Veg Only</span>
            </button>
          </div>

        </div>

        {/* Categories Chips */}
        <div className="flex items-center space-x-2 overflow-x-auto no-scrollbar pb-2 pt-1">
          {menuCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-teal-700 text-white shadow-md shadow-teal-800/20'
                  : 'bg-white text-stone-700 border border-stone-200 hover:bg-stone-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

      </div>

      {/* Menu Items Grid */}
      {filteredItems.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-2xl border border-stone-200 p-8 space-y-3">
          <UtensilsCrossed className="w-10 h-10 text-stone-400 mx-auto" />
          <h3 className="font-bold text-stone-800 text-lg">No dishes found</h3>
          <p className="text-stone-500 text-xs">
            Try adjusting your search query or selecting a different category filter.
          </p>
          <button
            onClick={() => { setSearchQuery(""); setSelectedCategory("All"); setDietFilter("all"); }}
            className="px-4 py-2 rounded-xl bg-teal-700 text-white text-xs font-bold"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => {
            const qty = cartMap[item.id] || 0;

            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl overflow-hidden border border-stone-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="relative aspect-[16/10] bg-stone-100 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />

                    {/* Veg/Non-Veg indicator */}
                    <div className="absolute top-3 left-3 flex items-center space-x-1.5">
                      <div className="w-5 h-5 rounded bg-white/95 backdrop-blur-md flex items-center justify-center shadow-sm">
                        <span className={`w-2.5 h-2.5 rounded-full ${item.isVeg ? 'bg-emerald-600' : 'bg-rose-600'}`}></span>
                      </div>

                      {item.isPopular && (
                        <span className="bg-amber-500 text-stone-950 font-bold text-[10px] px-2 py-0.5 rounded-full shadow-sm flex items-center space-x-1">
                          <Flame className="w-3 h-3 fill-stone-950" />
                          <span>Popular</span>
                        </span>
                      )}

                      {item.isSample && (
                        <span className="bg-stone-800 text-amber-300 font-mono text-[10px] px-2 py-0.5 rounded-full shadow-sm">
                          Sample item
                        </span>
                      )}
                    </div>

                    <div className="absolute bottom-2 right-2 px-2.5 py-1 rounded-lg bg-stone-900/80 backdrop-blur-md text-white font-mono font-bold text-sm shadow">
                      ₹{item.price}
                    </div>
                  </div>

                  <div className="p-4 sm:p-5 space-y-2">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-display font-bold text-stone-900 text-base leading-snug">
                        {item.name}
                      </h3>
                    </div>

                    <p className="text-xs text-stone-500 line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>

                    <div className="text-[11px] font-semibold text-teal-700 bg-teal-50 px-2 py-0.5 rounded inline-block">
                      {item.category}
                    </div>
                  </div>
                </div>

                {/* Add to Cart / Quantity controls */}
                <div className="p-4 sm:p-5 pt-0">
                  {qty === 0 ? (
                    <button
                      onClick={() => addToCart(item, 1)}
                      className="w-full py-2.5 rounded-xl bg-teal-700 hover:bg-teal-800 text-white text-xs font-bold shadow-sm active:scale-95 transition-all flex items-center justify-center space-x-1.5"
                    >
                      <Plus className="w-4 h-4" />
                      <span>Add to Order</span>
                    </button>
                  ) : (
                    <div className="flex items-center justify-between bg-teal-50 border border-teal-200 rounded-xl p-1">
                      <button
                        onClick={() => updateCartQuantity(item.id, qty - 1)}
                        className="w-8 h-8 rounded-lg bg-white text-stone-800 font-bold flex items-center justify-center hover:bg-teal-100 transition-colors shadow-sm"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>

                      <span className="font-bold text-sm text-teal-900 px-3">
                        {qty} in cart
                      </span>

                      <button
                        onClick={() => updateCartQuantity(item.id, qty + 1)}
                        className="w-8 h-8 rounded-lg bg-teal-700 text-white font-bold flex items-center justify-center hover:bg-teal-800 transition-colors shadow-sm"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Floating Bottom Cart Bar when items are selected */}
      {totalCartCount > 0 && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 w-11/12 max-w-md bg-stone-900 text-white rounded-2xl p-4 shadow-2xl border border-stone-700 flex items-center justify-between animate-in slide-in-from-bottom duration-300">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500 text-stone-900 font-bold flex items-center justify-center shadow">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-sm text-white">
                {totalCartCount} {totalCartCount === 1 ? 'item' : 'items'} in cart
              </div>
              <div className="text-[11px] text-teal-300">
                Ready for checkout
              </div>
            </div>
          </div>

          <Link
            to="/cart"
            className="px-4 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-500 text-white text-xs font-bold flex items-center space-x-1.5 transition-colors"
          >
            <span>Proceed</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      )}

    </div>
  );
}

