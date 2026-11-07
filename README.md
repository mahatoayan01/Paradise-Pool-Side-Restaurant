# Paradise Pool Side Restaurant - Web Application

A modern, responsive, mobile-first website for **Paradise Pool Side Restaurant** located inside Shakthi Hill Resorts premises in Rajarajeshwari Nagar (RR Nagar), Bengaluru. Built with React 18, Vite 5, Tailwind CSS, React Router v6, and Lucide Icons. Ready for instant deployment on Netlify.

---

## 🌟 Key Features & Architecture

- **Zero Backend / Serverless**: No database or environment variables required. All operational data, cart items, demo orders, and table bookings are managed statically and via safely-wrapped `localStorage`.
- **Theme & Ambience**: Custom tropical poolside aesthetic with dark emerald/teal water tones, sunlit amber accents, and clean typography matching the poolside open-air resort setting.
- **Single Source of Truth**:
  - `src/data/restaurant.js`: Restaurant address, verified phone numbers, operating hours, coordinates, rating, about paragraphs, offers, FAQs, gallery, reviews, and Instagram posts.
  - `src/data/menu.js`: Categorized dishes (Platters, Starters, Main Course, Breads/Rice, Beverages) with INR (₹) prices, Veg/Non-Veg markers, and quantity controls.
  - `src/data/sampleOrders.js`: 18 realistic sample orders and transactions for the demo owner dashboard.
- **7 Dedicated Routes**:
  1. `/` - Home: Hero with rating & open status badge, about us, popular dishes with quick add, deals, photo gallery with lightbox, timings, table booking form with WhatsApp send, customer reviews, Instagram tiles, and FAQ accordion.
  2. `/menu` - Menu: Category chips, instant search, Veg/Non-Veg filters, ₹ pricing, quantity increment/decrement controls, and sticky checkout bar.
  3. `/location` - Location: Verified address, landmark directions, operating hours, parking information, "Get Directions" button, and embedded Google Maps iframe (no API key required).
  4. `/contact` - Contact: Phone desk numbers, WhatsApp chat link, location details, and interactive demo contact inquiry form.
  5. `/cart` - Cart & Checkout: Itemized cart, quantity edits/removals, demo taxes calculation, Order Type selection (Dine-in / Takeaway / Delivery), customer inputs, demo payment method selector (UPI / Card / Cash on Delivery), and order receipt screen.
  6. `/owner-login` - Owner Login: Demo credentials check (`owner` / `demo123`).
  7. `/owner-dashboard` - Owner Dashboard: Protected route, summary metric cards, CSS-based revenue trend chart, real-time searchable/filterable orders table with status switcher, table bookings manager, and payment history ledger.
  - `/*` - 404 Fallback page with home return button.
- **Floating Contact Actions**: WhatsApp click-to-chat and direct Call button visible on all public pages.

---

## 🛠️ Local Development

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the local dev server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

3. **Build for production**:
   ```bash
   npm run build
   ```

4. **Preview the production build**:
   ```bash
   npm run preview
   ```

---

## 🚀 Netlify Deployment

1. Push this repository to GitHub or GitLab.
2. In Netlify, click **Add new site** > **Import an existing project**.
3. Configure the build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
4. The included `netlify.toml` and `public/_redirects` will automatically handle SPA routing (`/* -> /index.html 200`) so refreshes on nested routes work cleanly.

---

## 🔐 Demo Owner Credentials

- **Username**: `owner`
- **Password**: `demo123`
- Direct link: `/owner-login`

