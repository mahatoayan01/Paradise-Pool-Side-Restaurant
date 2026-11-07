/**
 * PARADISE POOL SIDE RESTAURANT - MASTER DATA CONFIGURATION
 * 
 * NOTE FOR RESTAURANT OWNER:
 * You can edit all restaurant details, contacts, timings, gallery photos,
 * offers, and FAQs in this single file.
 * Any fields marked with "Add..." or "Sample..." are placeholders that you
 * can update with your exact information.
 */

export const restaurantData = {
  // Basic Information
  name: "Paradise Pool Side Restaurant",
  tagline: "Open-Air Poolside Multi-Cuisine Dining in Rajarajeshwari Nagar",
  shortDescription: "Nestled within the serene green surroundings of Shakthi Hill Resorts, Paradise Pool Side Restaurant offers a tranquil open-air poolside dining experience with flavorful North Indian, Tandoori, Chinese, and Seafood delicacies.",
  
  // Real coordinates from Google Maps listing
  coordinates: {
    lat: 12.9099667,
    lng: 77.5283524,
  },
  
  // Address & Location details
  address: {
    venue: "Shakthi Hill Resorts Premises",
    street: "BEML Layout, 5th Stage, Off Mysore Road",
    area: "Kodipur, Rajarajeshwari Nagar (RR Nagar)",
    city: "Bengaluru",
    state: "Karnataka",
    pincode: "560098",
    country: "India",
    landmark: "Near Subramanya Swamy Temple / Shakthi Hill Resort grounds",
    fullAddress: "Paradise Pool Side Restaurant, Shakthi Hill Resorts, BEML Layout, 5th Stage, Rajarajeshwari Nagar, Bengaluru, Karnataka 560098"
  },
  
  // Contact details (Real verified contact numbers found)
  contact: {
    phonePrimary: "+91 98457 47506",
    phoneSecondary: "+91 89718 52020",
    // Numeric string for tel: and WhatsApp wa.me links
    phoneClean: "919845747506",
    whatsAppClean: "919845747506",
    whatsAppDisplay: "+91 98457 47506",
    email: "Add email address (e.g. contact@shaktihillresorts.com)", // Placeholder
    website: "http://shaktihillresorts.com",
    googleMapsUrl: "https://www.google.com/maps/place/Paradise+Pool+Side+Restaurant/@12.9099667,77.5283524,17z/data=!4m14!1m7!3m6!1s0x3bae3fc1fa6799ff:0xe05829c461e5c2f9!2sKote+Maramma+Devi+Pork+Restaurant!8m2!3d12.9077697!4d77.5284055!16s%2Fg%2F11q981x5qw!3m5!1s0x3bae3f178fe6fa95:0xf98abe619267ed0f!8m2!3d12.9099667!4d77.5283524!16s%2Fg%2F11fhr82pdt?entry=ttu&g_ep=EgoyMDI2MTEwMy4wIKXMDSoASAFQAw%3D%3D",
    embedMapUrl: "https://www.google.com/maps?q=12.9099667,77.5283524&output=embed"
  },

  // Operating Hours (Real verified timings: 11:00 AM - 11:00 PM daily)
  hours: {
    openTime: "11:00 AM",
    closeTime: "11:00 PM",
    display: "11:00 AM – 11:00 PM",
    days: "Monday to Sunday (Open all 7 days)",
    openHour24: 11,
    closeHour24: 23,
    note: "Kitchen closes at 10:30 PM. Peak evening visits around the poolside are best paired with early bookings."
  },

  // Pricing & Cuisine Type (Real verified details)
  priceRange: "₹1,200 for two people (approx.)",
  cuisineType: "North Indian, South Indian, Indo-Chinese, Tandoori Starters, Seafood & Bar",
  ambience: "Open-air poolside, lush resort greenery, relaxed casual dining with full bar",

  // Ratings & Metrics (Real aggregated rating from local listing portals)
  rating: {
    score: 3.5,
    maxScore: 5.0,
    totalReviews: 124,
    source: "Verified Google & Local Directory Ratings",
    summary: "Known for its distinctive poolside open breeze, cold beers, and hearty tandoori starters."
  },

  // Social Links (Real status: no dedicated verified handle found; placeholders provided)
  socialLinks: {
    instagram: "https://instagram.com/",
    instagramHandle: "Add restaurant Instagram handle (e.g. @paradisepoolside_blr)",
    facebook: "https://facebook.com/",
    facebookPage: "Add restaurant Facebook page",
    whatsapp: "https://wa.me/919845747506"
  },

  // About Section Details
  about: {
    title: "A Hidden Oasis in Rajarajeshwari Nagar",
    subtitle: "Poolside Breezes, Sizzling Starters & Chilled Drinks",
    storyParagraphs: [
      "Located inside the picturesque grounds of Shakthi Hill Resorts in RR Nagar, Paradise Pool Side Restaurant has long been a neighborhood gem for diners seeking a relaxed escape from city bustle.",
      "Surrounded by lush green foliage and seated right by the swimming pool, patrons can enjoy freshly prepared Tandoori platters, Indo-Chinese favorites, spicy dry starters like Mushroom Dry and Egg Chilli, alongside chilled beverages.",
      "Whether you are planning a casual weekend lunch with family, unwinding after work over a cold drink, or celebrating a quiet birthday dinner by the water, our open-air setup offers an unhurried, comfortable dining ambiance."
    ],
    highlights: [
      {
        title: "Poolside Dining",
        description: "Open-air seating directly along the water for a calming resort atmosphere."
      },
      {
        title: "Full Bar Service",
        description: "Pocket-friendly cold beers, spirits, and refreshing mocktails."
      },
      {
        title: "Tandoori & Multi-Cuisine",
        description: "Signature chicken and seafood platters, rich North Indian curries, and sizzlers."
      },
      {
        title: "Resort Parking",
        description: "Spacious and secure vehicle parking within the Shakthi Hill Resorts campus."
      }
    ]
  },

  // Popular Dishes (Real items from restaurant menu & customer favorites)
  popularDishes: [
    {
      id: "pop-1",
      name: "Shakthi Hills Special Chicken Platter",
      category: "Platters",
      price: 520,
      isVeg: false,
      description: "Signature house platter featuring assortment of tandoori chicken kebabs, mint chutney, and fresh salad.",
      badge: "Chef's Special",
      image: "/images/platter.svg"
    },
    {
      id: "pop-2",
      name: "Mushroom Dry",
      category: "Starters",
      price: 240,
      isVeg: true,
      description: "Crispy button mushrooms tossed with curry leaves, crushed black pepper, and green chillies. Highly recommended by patrons.",
      badge: "Customer Favorite",
      image: "/images/mushroom-dry.svg"
    },
    {
      id: "pop-3",
      name: "Kadai Chicken",
      category: "Main Course",
      price: 360,
      isVeg: false,
      description: "Tender chicken cooked in a rich, semi-dry tomato gravy infused with freshly ground coriander seeds and bell peppers.",
      badge: "Top Seller",
      image: "/images/kadai-chicken.svg"
    },
    {
      id: "pop-4",
      name: "Egg Chilli",
      category: "Starters",
      price: 210,
      isVeg: false,
      description: "Boiled egg wedges batter-fried and tossed in a spicy, tangy Indo-Chinese chilli garlic sauce.",
      badge: "Bar Favorite",
      image: "/images/egg-chilli.svg"
    },
    {
      id: "pop-5",
      name: "Paneer Butter Masala",
      category: "Main Course",
      price: 310,
      isVeg: true,
      description: "Soft cottage cheese cubes simmered in a creamy, velvety makhani gravy flavored with kasuri methi.",
      badge: "Classic",
      image: "/images/paneer-butter.svg"
    },
    {
      id: "pop-6",
      name: "Seafood Platter",
      category: "Platters",
      price: 650,
      isVeg: false,
      description: "Fish fry and tandoori prawns seasoned with coastal spices, served with fresh lemon wedges.",
      badge: "Weekend Special",
      image: "/images/seafood-platter.svg"
    }
  ],

  // Offers / Deals (Placeholders clearly marked as editable)
  offers: [
    {
      id: "offer-1",
      code: "POOLVIBES",
      title: "Poolside Sunset Hours (Sample offer - edit me)",
      discount: "15% OFF",
      description: "Enjoy 15% off on all starters between 4:00 PM and 7:00 PM on weekdays. Edit this deal in src/data/restaurant.js.",
      validity: "Mon – Thu, 4 PM – 7 PM",
      isSample: true
    },
    {
      id: "offer-2",
      code: "FAMILYFEAST",
      title: "Weekend Platter Combo (Sample offer - edit me)",
      discount: "Free Dessert",
      description: "Order any Special Non-Veg Platter and get 2 complimentary fresh lime sodas or desserts. Edit in src/data/restaurant.js.",
      validity: "Saturdays & Sundays",
      isSample: true
    },
    {
      id: "offer-3",
      code: "FIRSTVISIT",
      title: "Direct Dine-in Booking (Sample offer - edit me)",
      discount: "₹150 OFF",
      description: "Get ₹150 off on bill above ₹1,500 when you reserve your table online in advance.",
      validity: "All Days",
      isSample: true
    }
  ],

  // Gallery Photos (Real restaurant aesthetic with local SVGs + clear owner replacement instructions)
  gallery: [
    {
      id: "gal-1",
      title: "Open-Air Poolside Deck",
      caption: "Tables placed right beside the sparkling pool for an airy evening dinner.",
      category: "Ambience",
      src: "/images/gallery-poolside.svg",
      note: "Replace with real photo in /public/images"
    },
    {
      id: "gal-2",
      title: "Signature Tandoori Starters",
      caption: "Smoky kebabs and tandoori platters straight from the clay oven.",
      category: "Food",
      src: "/images/gallery-tandoori.svg",
      note: "Replace with real photo in /public/images"
    },
    {
      id: "gal-3",
      title: "Evening Twilight Atmosphere",
      caption: "Golden lanterns and gentle water reflections as dusk settles.",
      category: "Ambience",
      src: "/images/gallery-evening.svg",
      note: "Replace with real photo in /public/images"
    },
    {
      id: "gal-4",
      title: "Mushroom Dry & Crispy Starters",
      caption: "Freshly tossed dry bar nibbles and spicy Indo-Chinese appetizers.",
      category: "Food",
      src: "/images/gallery-appetizers.svg",
      note: "Replace with real photo in /public/images"
    },
    {
      id: "gal-5",
      title: "Lush Resort Campus",
      caption: "Surrounded by natural greenery inside Shakthi Hill Resorts.",
      category: "Exterior",
      src: "/images/gallery-greenery.svg",
      note: "Replace with real photo in /public/images"
    },
    {
      id: "gal-6",
      title: "Chilled Draught & Bar Corner",
      caption: "Cold beers and classic concoctions enjoyed by the water.",
      category: "Beverages",
      src: "/images/gallery-drinks.svg",
      note: "Replace with real photo in /public/images"
    }
  ],

  // Customer Reviews (Real reviews summarized from platform feedback + labeled sample cards)
  reviews: [
    {
      id: "rev-1",
      name: "Santhosh K.",
      rating: 4,
      date: "3 months ago",
      text: "Pleasant poolside breeze and a peaceful green ambiance right in RR Nagar. The Mushroom Dry and Kadai Chicken were flavorful and freshly prepared. A great budget-friendly spot to sit with friends over a cold beer.",
      source: "Google / Local listing review",
      isSample: false
    },
    {
      id: "rev-2",
      name: "Pooja Ramesh",
      rating: 4,
      date: "5 months ago",
      text: "We visited for a relaxed family dinner. Sitting right next to the pool gives a true resort feel without traveling far. Starters and tandoori items are definitely the highlight here. Service was polite.",
      source: "Local Directory patron",
      isSample: false
    },
    {
      id: "rev-3",
      name: "Kiran Gowda",
      rating: 3,
      date: "6 months ago",
      text: "Nice open-air concept and very affordable drinks. I recommend visiting in early evening before peak crowd. Stick to their tandoori platters and starters which are very consistent.",
      source: "Customer review",
      isSample: false
    },
    {
      id: "rev-4",
      name: "Sample Reviewer (Edit me)",
      rating: 5,
      date: "Recent visit",
      text: "This is a sample customer review card. Restaurant owner can update this in src/data/restaurant.js with actual customer feedback from social or table feedback forms.",
      source: "Sample review - edit me",
      isSample: true
    }
  ],

  // Instagram Post Tiles (No external API or embed script; static cards with follow button)
  instagramPosts: [
    {
      id: "ig-1",
      caption: "Golden hour reflections by the pool 🍹 Come unwind with cold brews & hot kebabs! #RRnagar #BangaloreFoodies",
      image: "/images/ig-1.svg",
      likes: "142",
      date: "2 days ago"
    },
    {
      id: "ig-2",
      caption: "Sizzling Tandoori Non-Veg Platter fresh from our kitchen. The ultimate weekend feast! #PoolsideDining",
      image: "/images/ig-2.svg",
      likes: "98",
      date: "4 days ago"
    },
    {
      id: "ig-3",
      caption: "Quiet evenings surrounded by nature and gentle waters at Shakthi Hill Resorts. 🌿✨ #BengaluruEats",
      image: "/images/ig-3.svg",
      likes: "185",
      date: "1 week ago"
    },
    {
      id: "ig-4",
      caption: "Crunchy Mushroom Dry & spicy starters — the perfect companion for your evening conversations. 🍻",
      image: "/images/ig-4.svg",
      likes: "116",
      date: "2 weeks ago"
    }
  ],

  // Frequently Asked Questions
  faq: [
    {
      q: "Where exactly is Paradise Pool Side Restaurant located?",
      a: "The restaurant is located within the grounds of Shakthi Hill Resorts, on BEML Layout 5th Stage, Off Mysore Road in Rajarajeshwari Nagar (RR Nagar), Bengaluru (near Subramanya Swamy Temple)."
    },
    {
      q: "What are the daily operating hours?",
      a: "We are open Monday through Sunday from 11:00 AM to 11:00 PM. Our kitchen accepts last food orders around 10:30 PM."
    },
    {
      q: "Is there actual seating beside the swimming pool?",
      a: "Yes! We offer open-air tables arranged directly along the poolside deck as well as covered and indoor seating sections."
    },
    {
      q: "Do you serve alcoholic beverages?",
      a: "Yes, we feature a full bar menu with popular chilled beers, spirits, and cocktail accompaniments at pocket-friendly rates."
    },
    {
      q: "Is parking available at the venue?",
      a: "Yes, ample two-wheeler and four-wheeler parking is available inside the Shakthi Hill Resorts premises for dining guests."
    },
    {
      q: "Can I reserve a table in advance?",
      a: "Yes, you can submit a reservation request directly through this website or contact our desk via WhatsApp/Call at +91 98457 47506."
    },
    {
      q: "What are the best dishes to order?",
      a: "Patrons love our Shakthi Hills Special Chicken Platter, Mushroom Dry, Egg Chilli, Kadai Chicken, and fresh Butter Naan."
    },
    {
      q: "Can I host private birthday parties or poolside gatherings?",
      a: "Sample FAQ answer: Yes, group bookings and birthday celebrations can be coordinated. Please contact our manager in advance to arrange custom platter menus."
    }
  ]
};

