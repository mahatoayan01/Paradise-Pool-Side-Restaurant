/**
 * SAMPLE ORDERS & PAYMENT TRANSACTIONS
 * 
 * Clearly labeled demo dataset for the Owner Dashboard.
 * These simulate online and dine-in orders placed at Paradise Pool Side Restaurant.
 */

export const sampleOrders = [
  {
    id: "ORD-9201",
    customer: {
      name: "Vikram Sharma",
      phone: "+91 98451 22340",
      email: "vikram.sharma@example.com",
      address: "Table #04 (Poolside Deck)",
      tableNumber: "04"
    },
    orderType: "Dine-in",
    items: [
      { id: "plt-1", name: "Shakthi Hills Special Chicken Platter", price: 520, quantity: 1 },
      { id: "str-1", name: "Mushroom Dry", price: 240, quantity: 1 },
      { id: "bev-1", name: "Chilled Draught / Bottled Beer", price: 240, quantity: 2 }
    ],
    subtotal: 1240,
    tax: 62,
    total: 1302,
    paymentMethod: "UPI",
    paymentStatus: "Completed",
    status: "Delivered",
    createdAt: "2026-11-07 12:45 PM",
    isSample: true
  },
  {
    id: "ORD-9202",
    customer: {
      name: "Priya Sundaram",
      phone: "+91 97402 11982",
      email: "priya.s@example.com",
      address: "BEML 5th Stage, RR Nagar",
      tableNumber: ""
    },
    orderType: "Takeaway",
    items: [
      { id: "mc-1", name: "Kadai Chicken", price: 360, quantity: 1 },
      { id: "rb-5", name: "Butter Naan", price: 60, quantity: 3 },
      { id: "str-2", name: "Egg Chilli", price: 210, quantity: 1 }
    ],
    subtotal: 750,
    tax: 37.5,
    total: 787.5,
    paymentMethod: "Card",
    paymentStatus: "Completed",
    status: "Ready",
    createdAt: "2026-11-07 01:10 PM",
    isSample: true
  },
  {
    id: "ORD-9203",
    customer: {
      name: "Karthik Murthy",
      phone: "+91 99008 34125",
      email: "karthik.m@example.com",
      address: "Table #12 (Garden View)",
      tableNumber: "12"
    },
    orderType: "Dine-in",
    items: [
      { id: "plt-2", name: "Shakthi Hills Special Tandoori Non-Veg Platter", price: 680, quantity: 1 },
      { id: "bev-2", name: "Fresh Lime Soda", price: 90, quantity: 2 },
      { id: "rb-1", name: "Curd Rice", price: 180, quantity: 1 }
    ],
    subtotal: 1040,
    tax: 52,
    total: 1092,
    paymentMethod: "UPI",
    paymentStatus: "Completed",
    status: "Preparing",
    createdAt: "2026-11-07 01:25 PM",
    isSample: true
  },
  {
    id: "ORD-9204",
    customer: {
      name: "Sneha Patil",
      phone: "+91 94481 67890",
      email: "sneha.p@example.com",
      address: "Near Global Village Tech Park, RR Nagar",
      tableNumber: ""
    },
    orderType: "Delivery",
    items: [
      { id: "mc-3", name: "Paneer Butter Masala", price: 310, quantity: 1 },
      { id: "rb-3", name: "Veg Fried Rice", price: 230, quantity: 1 },
      { id: "str-6", name: "Baby Corn Manchurian", price: 230, quantity: 1 }
    ],
    subtotal: 770,
    tax: 38.5,
    total: 808.5,
    paymentMethod: "Cash on Delivery",
    paymentStatus: "Pending",
    status: "Pending",
    createdAt: "2026-11-07 01:40 PM",
    isSample: true
  },
  {
    id: "ORD-9205",
    customer: {
      name: "Arun Joseph",
      phone: "+91 88845 90123",
      email: "arun.j@example.com",
      address: "Table #07 (Poolside)",
      tableNumber: "07"
    },
    orderType: "Dine-in",
    items: [
      { id: "plt-3", name: "Seafood Platter", price: 650, quantity: 1 },
      { id: "bev-1", name: "Chilled Draught / Bottled Beer", price: 240, quantity: 3 }
    ],
    subtotal: 1370,
    tax: 68.5,
    total: 1438.5,
    paymentMethod: "Card",
    paymentStatus: "Completed",
    status: "Confirmed",
    createdAt: "2026-11-07 01:50 PM",
    isSample: true
  },
  {
    id: "ORD-9206",
    customer: {
      name: "Meenakshi Iyer",
      phone: "+91 91104 55678",
      email: "meenakshi@example.com",
      address: "Ideal Homes Township, RR Nagar",
      tableNumber: ""
    },
    orderType: "Takeaway",
    items: [
      { id: "mc-4", name: "Mushroom Masala", price: 290, quantity: 1 },
      { id: "rb-6", name: "Tandoori Roti", price: 40, quantity: 4 },
      { id: "sp-1", name: "Tomato Soup", price: 140, quantity: 2 }
    ],
    subtotal: 730,
    tax: 36.5,
    total: 766.5,
    paymentMethod: "UPI",
    paymentStatus: "Completed",
    status: "Delivered",
    createdAt: "2026-11-06 08:30 PM",
    isSample: true
  },
  {
    id: "ORD-9207",
    customer: {
      name: "Rohan Varma",
      phone: "+91 98862 33441",
      email: "rohan.v@example.com",
      address: "Table #02 (Poolside)",
      tableNumber: "02"
    },
    orderType: "Dine-in",
    items: [
      { id: "str-8", name: "Chicken Kebabs", price: 290, quantity: 2 },
      { id: "str-1", name: "Mushroom Dry", price: 240, quantity: 1 },
      { id: "bev-1", name: "Chilled Draught / Bottled Beer", price: 240, quantity: 2 }
    ],
    subtotal: 1300,
    tax: 65,
    total: 1365,
    paymentMethod: "Card",
    paymentStatus: "Completed",
    status: "Delivered",
    createdAt: "2026-11-06 09:15 PM",
    isSample: true
  },
  {
    id: "ORD-9208",
    customer: {
      name: "Deepak Chawla",
      phone: "+91 97311 88990",
      email: "deepak.c@example.com",
      address: "Channasandra Main Road, Kengeri",
      tableNumber: ""
    },
    orderType: "Delivery",
    items: [
      { id: "mc-2", name: "Butter Chicken", price: 380, quantity: 1 },
      { id: "rb-2", name: "Chicken Fried Rice", price: 280, quantity: 1 },
      { id: "rb-5", name: "Butter Naan", price: 60, quantity: 2 }
    ],
    subtotal: 780,
    tax: 39,
    total: 819,
    paymentMethod: "UPI",
    paymentStatus: "Completed",
    status: "Delivered",
    createdAt: "2026-11-06 07:45 PM",
    isSample: true
  },
  {
    id: "ORD-9209",
    customer: {
      name: "Swati Deshmukh",
      phone: "+91 96201 44556",
      email: "swati.d@example.com",
      address: "Table #15 (Indoor Lounge)",
      tableNumber: "15"
    },
    orderType: "Dine-in",
    items: [
      { id: "mc-3", name: "Paneer Butter Masala", price: 310, quantity: 1 },
      { id: "rb-5", name: "Butter Naan", price: 60, quantity: 2 },
      { id: "bev-3", name: "Chocolate Milkshake", price: 160, quantity: 1 }
    ],
    subtotal: 590,
    tax: 29.5,
    total: 619.5,
    paymentMethod: "UPI",
    paymentStatus: "Completed",
    status: "Delivered",
    createdAt: "2026-11-06 02:15 PM",
    isSample: true
  },
  {
    id: "ORD-9210",
    customer: {
      name: "Naveen Raj",
      phone: "+91 99450 77123",
      email: "naveen.raj@example.com",
      address: "Table #09 (Poolside)",
      tableNumber: "09"
    },
    orderType: "Dine-in",
    items: [
      { id: "plt-1", name: "Shakthi Hills Special Chicken Platter", price: 520, quantity: 1 },
      { id: "str-2", name: "Egg Chilli", price: 210, quantity: 1 },
      { id: "mc-1", name: "Kadai Chicken", price: 360, quantity: 1 },
      { id: "rb-5", name: "Butter Naan", price: 60, quantity: 4 }
    ],
    subtotal: 1330,
    tax: 66.5,
    total: 1396.5,
    paymentMethod: "Card",
    paymentStatus: "Completed",
    status: "Delivered",
    createdAt: "2026-11-05 08:50 PM",
    isSample: true
  },
  {
    id: "ORD-9211",
    customer: {
      name: "Harish Hebbar",
      phone: "+91 98440 19283",
      email: "harish.h@example.com",
      address: "BEML 3rd Stage, RR Nagar",
      tableNumber: ""
    },
    orderType: "Takeaway",
    items: [
      { id: "str-1", name: "Mushroom Dry", price: 240, quantity: 2 },
      { id: "str-7", name: "Baby Corn Chilli", price: 230, quantity: 1 },
      { id: "str-10", name: "Masala Papad", price: 90, quantity: 2 }
    ],
    subtotal: 890,
    tax: 44.5,
    total: 934.5,
    paymentMethod: "UPI",
    paymentStatus: "Completed",
    status: "Delivered",
    createdAt: "2026-11-05 07:10 PM",
    isSample: true
  },
  {
    id: "ORD-9212",
    customer: {
      name: "Lavanya Prasad",
      phone: "+91 97390 66554",
      email: "lavanya.p@example.com",
      address: "Table #06 (Poolside)",
      tableNumber: "06"
    },
    orderType: "Dine-in",
    items: [
      { id: "sp-3", name: "Veg Manchow Soup", price: 150, quantity: 2 },
      { id: "mc-6", name: "Dal Tadka", price: 220, quantity: 1 },
      { id: "rb-1", name: "Curd Rice", price: 180, quantity: 1 }
    ],
    subtotal: 700,
    tax: 35,
    total: 735,
    paymentMethod: "Cash on Delivery",
    paymentStatus: "Completed",
    status: "Delivered",
    createdAt: "2026-11-05 01:20 PM",
    isSample: true
  },
  {
    id: "ORD-9213",
    customer: {
      name: "Gautam Rao",
      phone: "+91 99801 88220",
      email: "gautam.rao@example.com",
      address: "BHEL Layout, RR Nagar",
      tableNumber: ""
    },
    orderType: "Delivery",
    items: [
      { id: "mc-1", name: "Kadai Chicken", price: 360, quantity: 1 },
      { id: "mc-2", name: "Butter Chicken", price: 380, quantity: 1 },
      { id: "rb-5", name: "Butter Naan", price: 60, quantity: 6 }
    ],
    subtotal: 1100,
    tax: 55,
    total: 1155,
    paymentMethod: "UPI",
    paymentStatus: "Completed",
    status: "Delivered",
    createdAt: "2026-11-04 08:15 PM",
    isSample: true
  },
  {
    id: "ORD-9214",
    customer: {
      name: "Divya Natesh",
      phone: "+91 96860 33112",
      email: "divya.n@example.com",
      address: "Table #11 (Cabana)",
      tableNumber: "11"
    },
    orderType: "Dine-in",
    items: [
      { id: "plt-2", name: "Shakthi Hills Special Tandoori Non-Veg Platter", price: 680, quantity: 1 },
      { id: "str-1", name: "Mushroom Dry", price: 240, quantity: 1 },
      { id: "bev-2", name: "Fresh Lime Soda", price: 90, quantity: 2 }
    ],
    subtotal: 1100,
    tax: 55,
    total: 1155,
    paymentMethod: "Card",
    paymentStatus: "Completed",
    status: "Delivered",
    createdAt: "2026-11-04 09:30 PM",
    isSample: true
  },
  {
    id: "ORD-9215",
    customer: {
      name: "Manoj Sandeep",
      phone: "+91 98450 44900",
      email: "manoj.s@example.com",
      address: "Table #03 (Poolside)",
      tableNumber: "03"
    },
    orderType: "Dine-in",
    items: [
      { id: "fb-1", name: "French Fries", price: 150, quantity: 1 },
      { id: "bev-1", name: "Chilled Draught / Bottled Beer", price: 240, quantity: 1 }
    ],
    subtotal: 390,
    tax: 19.5,
    total: 409.5,
    paymentMethod: "UPI",
    paymentStatus: "Refunded",
    status: "Cancelled",
    createdAt: "2026-11-04 03:00 PM",
    isSample: true
  },
  {
    id: "ORD-9216",
    customer: {
      name: "Aakash Banerjee",
      phone: "+91 99160 55443",
      email: "aakash.b@example.com",
      address: "Halagevaderahalli, RR Nagar",
      tableNumber: ""
    },
    orderType: "Delivery",
    items: [
      { id: "plt-1", name: "Shakthi Hills Special Chicken Platter", price: 520, quantity: 1 },
      { id: "rb-2", name: "Chicken Fried Rice", price: 280, quantity: 1 }
    ],
    subtotal: 800,
    tax: 40,
    total: 840,
    paymentMethod: "UPI",
    paymentStatus: "Completed",
    status: "Delivered",
    createdAt: "2026-11-03 08:00 PM",
    isSample: true
  },
  {
    id: "ORD-9217",
    customer: {
      name: "Tanvi Sharma",
      phone: "+91 97410 88219",
      email: "tanvi.s@example.com",
      address: "Table #08 (Poolside)",
      tableNumber: "08"
    },
    orderType: "Dine-in",
    items: [
      { id: "str-4", name: "Mushroom Tikka", price: 250, quantity: 1 },
      { id: "mc-3", name: "Paneer Butter Masala", price: 310, quantity: 1 },
      { id: "rb-5", name: "Butter Naan", price: 60, quantity: 3 }
    ],
    subtotal: 740,
    tax: 37,
    total: 777,
    paymentMethod: "Card",
    paymentStatus: "Completed",
    status: "Delivered",
    createdAt: "2026-11-03 09:10 PM",
    isSample: true
  },
  {
    id: "ORD-9218",
    customer: {
      name: "Kavita Rao",
      phone: "+91 94800 12789",
      email: "kavita.rao@example.com",
      address: "Jnanabharathi, Bangalore",
      tableNumber: ""
    },
    orderType: "Takeaway",
    items: [
      { id: "str-9", name: "Chicken Chilli", price: 290, quantity: 1 },
      { id: "rb-2", name: "Chicken Fried Rice", price: 280, quantity: 1 }
    ],
    subtotal: 570,
    tax: 28.5,
    total: 598.5,
    paymentMethod: "UPI",
    paymentStatus: "Completed",
    status: "Delivered",
    createdAt: "2026-11-02 07:30 PM",
    isSample: true
  }
];

export const samplePayments = [
  { id: "PAY-1081", orderId: "ORD-9201", method: "UPI (Google Pay)", amount: 1302, status: "Success", date: "2026-11-07 12:47 PM", isSample: true },
  { id: "PAY-1082", orderId: "ORD-9202", method: "Credit Card (Visa)", amount: 787.5, status: "Success", date: "2026-11-07 01:12 PM", isSample: true },
  { id: "PAY-1083", orderId: "ORD-9203", method: "UPI (PhonePe)", amount: 1092, status: "Success", date: "2026-11-07 01:26 PM", isSample: true },
  { id: "PAY-1084", orderId: "ORD-9204", method: "Cash on Delivery", amount: 808.5, status: "Pending", date: "2026-11-07 01:40 PM", isSample: true },
  { id: "PAY-1085", orderId: "ORD-9205", method: "Debit Card (HDFC)", amount: 1438.5, status: "Success", date: "2026-11-07 01:52 PM", isSample: true },
  { id: "PAY-1086", orderId: "ORD-9206", method: "UPI (Paytm)", amount: 766.5, status: "Success", date: "2026-11-06 08:32 PM", isSample: true },
  { id: "PAY-1087", orderId: "ORD-9207", method: "Credit Card (ICICI)", amount: 1365, status: "Success", date: "2026-11-06 09:17 PM", isSample: true },
  { id: "PAY-1088", orderId: "ORD-9208", method: "UPI (Google Pay)", amount: 819, status: "Success", date: "2026-11-06 07:46 PM", isSample: true },
  { id: "PAY-1089", orderId: "ORD-9209", method: "UPI (CRED)", amount: 619.5, status: "Success", date: "2026-11-06 02:17 PM", isSample: true },
  { id: "PAY-1090", orderId: "ORD-9210", method: "Credit Card (Axis)", amount: 1396.5, status: "Success", date: "2026-11-05 08:52 PM", isSample: true },
  { id: "PAY-1091", orderId: "ORD-9211", method: "UPI (PhonePe)", amount: 934.5, status: "Success", date: "2026-11-05 07:12 PM", isSample: true },
  { id: "PAY-1092", orderId: "ORD-9212", method: "Cash on Delivery", amount: 735, status: "Success", date: "2026-11-05 01:21 PM", isSample: true },
  { id: "PAY-1093", orderId: "ORD-9213", method: "UPI (Google Pay)", amount: 1155, status: "Success", date: "2026-11-04 08:16 PM", isSample: true },
  { id: "PAY-1094", orderId: "ORD-9214", method: "Credit Card (Amex)", amount: 1155, status: "Success", date: "2026-11-04 09:32 PM", isSample: true },
  { id: "PAY-1095", orderId: "ORD-9215", method: "UPI (Refunded)", amount: 409.5, status: "Refunded", date: "2026-11-04 03:02 PM", isSample: true },
  { id: "PAY-1096", orderId: "ORD-9216", method: "UPI (Google Pay)", amount: 840, status: "Success", date: "2026-11-03 08:02 PM", isSample: true },
  { id: "PAY-1097", orderId: "ORD-9217", method: "Credit Card (SBI)", amount: 777, status: "Success", date: "2026-11-03 09:12 PM", isSample: true },
  { id: "PAY-1098", orderId: "ORD-9218", method: "UPI (Paytm)", amount: 598.5, status: "Success", date: "2026-11-02 07:32 PM", isSample: true }
];

export const sampleBookings = [
  {
    id: "BKG-301",
    name: "Arvind Raghavan",
    phone: "+91 98450 99881",
    date: "2026-11-07",
    time: "07:30 PM",
    guests: "4 Guests",
    notes: "Poolside table preferred. Celebrating wedding anniversary.",
    status: "Confirmed",
    createdAt: "2026-11-06 04:20 PM",
    isSample: true
  },
  {
    id: "BKG-302",
    name: "Dr. Shalini Rao",
    phone: "+91 99001 23456",
    date: "2026-11-08",
    time: "08:00 PM",
    guests: "6 Guests",
    notes: "Family reunion dinner, need high chair for toddler.",
    status: "Confirmed",
    createdAt: "2026-11-07 10:15 AM",
    isSample: true
  },
  {
    id: "BKG-303",
    name: "Rohit Krishnan",
    phone: "+91 97415 67890",
    date: "2026-11-07",
    time: "08:30 PM",
    guests: "2 Guests",
    notes: "Quiet table by water.",
    status: "Pending",
    createdAt: "2026-11-07 11:50 AM",
    isSample: true
  }
];

