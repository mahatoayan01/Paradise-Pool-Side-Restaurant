/**
 * PARADISE POOL SIDE RESTAURANT - MENU DATA
 * 
 * Includes real dishes found from Google Maps listing, reviews, and local food portals,
 * along with clearly labeled sample items that the restaurant owner can edit or expand.
 */

export const menuCategories = [
  "All",
  "Platters",
  "Starters",
  "Main Course",
  "Rice & Breads",
  "Soups & Salads",
  "Fast Bites",
  "Beverages"
];

export const menuItems = [
  // --- PLATTERS ---
  {
    id: "plt-1",
    name: "Shakthi Hills Special Chicken Platter",
    category: "Platters",
    price: 520,
    isVeg: false,
    rating: 4.8,
    isPopular: true,
    description: "Chef's signature combination of succulent tandoori chicken, malai kebabs, and spicy tikka skewers served with mint dip.",
    image: "/images/platter.svg"
  },
  {
    id: "plt-2",
    name: "Shakthi Hills Special Tandoori Non-Veg Platter",
    category: "Platters",
    price: 680,
    isVeg: false,
    rating: 4.7,
    isPopular: true,
    description: "Grand assortment of roasted chicken kebabs, mutton seekh, and fish bites marinated in rich tandoori spices.",
    image: "/images/platter.svg"
  },
  {
    id: "plt-3",
    name: "Seafood Platter",
    category: "Platters",
    price: 650,
    isVeg: false,
    rating: 4.6,
    isPopular: true,
    description: "Crispy fried coastal fish fillets and masala tossed tandoori prawns garnished with fresh cilantro and lemon.",
    image: "/images/seafood-platter.svg"
  },
  {
    id: "plt-4",
    name: "Special Veg Tandoori Platter (Sample item - edit me)",
    category: "Platters",
    price: 450,
    isVeg: true,
    rating: 4.5,
    isPopular: false,
    isSample: true,
    description: "Assorted platter of Paneer Tikka, Tandoori Mushroom, Gobi Tikka, and grilled bell peppers. Owner can edit.",
    image: "/images/platter.svg"
  },

  // --- STARTERS & APPETIZERS ---
  {
    id: "str-1",
    name: "Mushroom Dry",
    category: "Starters",
    price: 240,
    isVeg: true,
    rating: 4.9,
    isPopular: true,
    description: "Wok-tossed button mushrooms with crushed black pepper, aromatic curry leaves, and green chillies. A patron favorite.",
    image: "/images/mushroom-dry.svg"
  },
  {
    id: "str-2",
    name: "Egg Chilli",
    category: "Starters",
    price: 210,
    isVeg: false,
    rating: 4.7,
    isPopular: true,
    description: "Crispy coated boiled egg quarters tossed in fiery Indo-Chinese garlic chilli sauce with spring onions.",
    image: "/images/egg-chilli.svg"
  },
  {
    id: "str-3",
    name: "Gobi Tikka",
    category: "Starters",
    price: 220,
    isVeg: true,
    rating: 4.4,
    isPopular: false,
    description: "Charcoal-grilled spiced cauliflower florets marinated in hung curd, carom seeds, and mustard oil.",
    image: "/images/mushroom-dry.svg"
  },
  {
    id: "str-4",
    name: "Mushroom Tikka",
    category: "Starters",
    price: 250,
    isVeg: true,
    rating: 4.5,
    isPopular: false,
    description: "Plump button mushrooms marinated in red chilli paste and roasted in clay oven with capsicum and onions.",
    image: "/images/mushroom-dry.svg"
  },
  {
    id: "str-5",
    name: "Veg Ball Manchurian",
    category: "Starters",
    price: 230,
    isVeg: true,
    rating: 4.3,
    isPopular: false,
    description: "Crispy fried vegetable dumplings tossed in ginger-coriander dark soya sauce.",
    image: "/images/mushroom-dry.svg"
  },
  {
    id: "str-6",
    name: "Baby Corn Manchurian",
    category: "Starters",
    price: 230,
    isVeg: true,
    rating: 4.4,
    isPopular: false,
    description: "Golden fried tender baby corn wok-tossed with chopped garlic, green chillies, and soy glaze.",
    image: "/images/mushroom-dry.svg"
  },
  {
    id: "str-7",
    name: "Baby Corn Chilli",
    category: "Starters",
    price: 230,
    isVeg: true,
    rating: 4.5,
    isPopular: false,
    description: "Spicy and crunchy baby corn batons flavored with green chillies, soy, and spring onions.",
    image: "/images/mushroom-dry.svg"
  },
  {
    id: "str-8",
    name: "Chicken Kebabs",
    category: "Starters",
    price: 290,
    isVeg: false,
    rating: 4.8,
    isPopular: true,
    description: "Classic Bengaluru military-style fried chicken pieces marinated in southern spices and deep-fried crisp.",
    image: "/images/kadai-chicken.svg"
  },
  {
    id: "str-9",
    name: "Chicken Chilli",
    category: "Starters",
    price: 290,
    isVeg: false,
    rating: 4.6,
    isPopular: false,
    description: "Tender boneless chicken cubes stir-fried with diced capsicum, onions, and spicy red chilli sauce.",
    image: "/images/kadai-chicken.svg"
  },
  {
    id: "str-10",
    name: "Masala Papad",
    category: "Starters",
    price: 90,
    isVeg: true,
    rating: 4.5,
    isPopular: false,
    description: "Roasted or fried lentil papad topped with chopped onions, tomatoes, coriander, chaat masala, and fresh lemon.",
    image: "/images/mushroom-dry.svg"
  },

  // --- MAIN COURSE ---
  {
    id: "mc-1",
    name: "Kadai Chicken",
    category: "Main Course",
    price: 360,
    isVeg: false,
    rating: 4.8,
    isPopular: true,
    description: "Chicken cooked with freshly roasted whole spices, bell peppers, tomatoes, and chunky onion gravy in an iron wok.",
    image: "/images/kadai-chicken.svg"
  },
  {
    id: "mc-2",
    name: "Butter Chicken",
    category: "Main Course",
    price: 380,
    isVeg: false,
    rating: 4.7,
    isPopular: false,
    description: "Tender tandoori chicken simmered in rich buttery tomato puree finished with fresh cream and dried fenugreek.",
    image: "/images/kadai-chicken.svg"
  },
  {
    id: "mc-3",
    name: "Paneer Butter Masala",
    category: "Main Course",
    price: 310,
    isVeg: true,
    rating: 4.7,
    isPopular: true,
    description: "Fresh cottage cheese cooked in creamy tomato and cashew nut gravy, mildly sweet and savory.",
    image: "/images/paneer-butter.svg"
  },
  {
    id: "mc-4",
    name: "Mushroom Masala",
    category: "Main Course",
    price: 290,
    isVeg: true,
    rating: 4.6,
    isPopular: false,
    description: "Button mushrooms stewed in a hearty onion-tomato spiced gravy with garlicky undertones.",
    image: "/images/paneer-butter.svg"
  },
  {
    id: "mc-5",
    name: "Mixed Veg Curry",
    category: "Main Course",
    price: 260,
    isVeg: true,
    rating: 4.3,
    isPopular: false,
    description: "Seasonal garden vegetables cooked in traditional homestyle North Indian masala gravy.",
    image: "/images/paneer-butter.svg"
  },
  {
    id: "mc-6",
    name: "Dal Tadka",
    category: "Main Course",
    price: 220,
    isVeg: true,
    rating: 4.5,
    isPopular: false,
    description: "Yellow lentils cooked smooth and tempered with ghee, cumin seeds, garlic, and dried red chillies.",
    image: "/images/paneer-butter.svg"
  },

  // --- RICE & BREADS ---
  {
    id: "rb-1",
    name: "Curd Rice",
    category: "Rice & Breads",
    price: 180,
    isVeg: true,
    rating: 4.7,
    isPopular: true,
    description: "Comforting South Indian curd rice tempered with mustard seeds, curry leaves, ginger, and pomegranate pearls.",
    image: "/images/paneer-butter.svg"
  },
  {
    id: "rb-2",
    name: "Chicken Fried Rice",
    category: "Rice & Breads",
    price: 280,
    isVeg: false,
    rating: 4.4,
    isPopular: false,
    description: "Wok-fried long grain rice with shredded chicken, scrambled eggs, and diced vegetables.",
    image: "/images/kadai-chicken.svg"
  },
  {
    id: "rb-3",
    name: "Veg Fried Rice",
    category: "Rice & Breads",
    price: 230,
    isVeg: true,
    rating: 4.3,
    isPopular: false,
    description: "Classic Indo-Chinese fried rice loaded with finely chopped carrots, beans, and spring onions.",
    image: "/images/paneer-butter.svg"
  },
  {
    id: "rb-4",
    name: "Dal Rice Combo",
    category: "Rice & Breads",
    price: 210,
    isVeg: true,
    rating: 4.5,
    isPopular: false,
    description: "Steamed basmati rice served alongside piping hot dal tadka and roasted papad.",
    image: "/images/paneer-butter.svg"
  },
  {
    id: "rb-5",
    name: "Butter Naan",
    category: "Rice & Breads",
    price: 60,
    isVeg: true,
    rating: 4.6,
    isPopular: false,
    description: "Fluffy leavened oven-baked flatbread brushed with butter.",
    image: "/images/paneer-butter.svg"
  },
  {
    id: "rb-6",
    name: "Tandoori Roti",
    category: "Rice & Breads",
    price: 40,
    isVeg: true,
    rating: 4.5,
    isPopular: false,
    description: "Whole wheat bread baked crisp on the inner walls of the tandoor.",
    image: "/images/paneer-butter.svg"
  },

  // --- SOUPS & SALADS ---
  {
    id: "sp-1",
    name: "Tomato Soup",
    category: "Soups & Salads",
    price: 140,
    isVeg: true,
    rating: 4.4,
    isPopular: false,
    description: "Rich and tangy ripe tomato broth served with crunchy golden croutons.",
    image: "/images/mushroom-dry.svg"
  },
  {
    id: "sp-2",
    name: "Chicken Manchow Soup",
    category: "Soups & Salads",
    price: 180,
    isVeg: false,
    rating: 4.6,
    isPopular: false,
    description: "Spicy dark soy broth loaded with minced chicken, garlic, and served with fried noodles.",
    image: "/images/mushroom-dry.svg"
  },
  {
    id: "sp-3",
    name: "Veg Manchow Soup",
    category: "Soups & Salads",
    price: 150,
    isVeg: true,
    rating: 4.4,
    isPopular: false,
    description: "Zesty Indo-Chinese soup with finely chopped vegetables and crispy noodle toppings.",
    image: "/images/mushroom-dry.svg"
  },
  {
    id: "sp-4",
    name: "Fresh Green Salad",
    category: "Soups & Salads",
    price: 120,
    isVeg: true,
    rating: 4.3,
    isPopular: false,
    description: "Slices of fresh cucumber, juicy tomatoes, onions, carrots, and green chillies with lemon.",
    image: "/images/mushroom-dry.svg"
  },

  // --- FAST BITES & SNACKS ---
  {
    id: "fb-1",
    name: "French Fries",
    category: "Fast Bites",
    price: 150,
    isVeg: true,
    rating: 4.5,
    isPopular: false,
    description: "Crispy salted potato fries served hot with tangy tomato ketchup.",
    image: "/images/mushroom-dry.svg"
  },
  {
    id: "fb-2",
    name: "Veg Grilled Sandwich",
    category: "Fast Bites",
    price: 170,
    isVeg: true,
    rating: 4.4,
    isPopular: false,
    description: "Toasted sandwich stuffed with spiced potato mash, cucumber, tomatoes, and mint chutney.",
    image: "/images/mushroom-dry.svg"
  },
  {
    id: "fb-3",
    name: "Sample Pool Snack (Edit me)",
    category: "Fast Bites",
    price: 190,
    isVeg: true,
    rating: 4.2,
    isPopular: false,
    isSample: true,
    description: "Sample quick bite item placeholder for the restaurant owner to customize in src/data/menu.js.",
    image: "/images/mushroom-dry.svg"
  },

  // --- BEVERAGES ---
  {
    id: "bev-1",
    name: "Chilled Draught / Bottled Beer (Dine-in Bar)",
    category: "Beverages",
    price: 240,
    isVeg: true,
    rating: 4.9,
    isPopular: true,
    description: "Chilled premium lager beer served at the poolside bar table (21+ only).",
    image: "/images/cocktail.svg"
  },
  {
    id: "bev-2",
    name: "Fresh Lime Soda (Sweet / Salt)",
    category: "Beverages",
    price: 90,
    isVeg: true,
    rating: 4.7,
    isPopular: false,
    description: "Refreshing freshly squeezed lemon with effervescent soda, prepared sweet, salted, or mixed.",
    image: "/images/cocktail.svg"
  },
  {
    id: "bev-3",
    name: "Chocolate Milkshake",
    category: "Beverages",
    price: 160,
    isVeg: true,
    rating: 4.5,
    isPopular: false,
    description: "Thick and creamy chilled milkshake made with chocolate syrup and dairy ice cream.",
    image: "/images/cocktail.svg"
  },
  {
    id: "bev-4",
    name: "Tropical Mocktail (Sample item - edit me)",
    category: "Beverages",
    price: 180,
    isVeg: true,
    rating: 4.3,
    isPopular: false,
    isSample: true,
    description: "Chilled tropical poolside cooler with blue curacao syrup, lime, and sprite. Owner can edit.",
    image: "/images/cocktail.svg"
  }
];

