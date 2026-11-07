/**
 * STORAGE & LOCALSTATE UTILITIES
 * Safely handles browser localStorage operations with fallbacks.
 */

import { sampleOrders, samplePayments, sampleBookings } from '../data/sampleOrders';
import { restaurantData } from '../data/restaurant';

const CART_KEY = 'paradise_cart';
const ORDERS_KEY = 'paradise_custom_orders';
const BOOKINGS_KEY = 'paradise_custom_bookings';
const AUTH_KEY = 'paradise_owner_session';

// --- SAFE STORAGE HELPERS ---
function safeGet(key, fallback = null) {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : fallback;
  } catch (e) {
    console.warn(`Error reading ${key} from localStorage:`, e);
    return fallback;
  }
}

function safeSet(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.warn(`Error writing ${key} to localStorage:`, e);
  }
}

function safeRemove(key) {
  try {
    localStorage.removeItem(key);
  } catch (e) {
    console.warn(`Error removing ${key} from localStorage:`, e);
  }
}

// --- CART HELPERS ---
export function getCart() {
  return safeGet(CART_KEY, []);
}

export function saveCart(cart) {
  safeSet(CART_KEY, cart);
  window.dispatchEvent(new Event('cart-updated'));
}

export function addToCart(item, quantity = 1) {
  const current = getCart();
  const existingIndex = current.findIndex(i => i.id === item.id);
  
  if (existingIndex > -1) {
    current[existingIndex].quantity += quantity;
  } else {
    current.push({
      id: item.id,
      name: item.name,
      price: item.price,
      isVeg: item.isVeg,
      category: item.category,
      quantity: quantity
    });
  }
  saveCart(current);
}

export function updateCartQuantity(itemId, quantity) {
  let current = getCart();
  if (quantity <= 0) {
    current = current.filter(i => i.id !== itemId);
  } else {
    current = current.map(i => i.id === itemId ? { ...i, quantity } : i);
  }
  saveCart(current);
}

export function removeFromCart(itemId) {
  const current = getCart().filter(i => i.id !== itemId);
  saveCart(current);
}

export function clearCart() {
  safeRemove(CART_KEY);
  window.dispatchEvent(new Event('cart-updated'));
}

// --- ORDERS HELPERS ---
export function getOrders() {
  const customOrders = safeGet(ORDERS_KEY, []);
  // Return user placed orders first, followed by sample orders
  return [...customOrders, ...sampleOrders];
}

export function saveNewOrder(orderData) {
  const customOrders = safeGet(ORDERS_KEY, []);
  const newOrder = {
    ...orderData,
    isSample: false,
    createdAt: new Date().toLocaleString('en-IN', {
      dateStyle: 'short',
      timeStyle: 'short'
    })
  };
  customOrders.unshift(newOrder);
  safeSet(ORDERS_KEY, customOrders);
  return newOrder;
}

export function updateOrderStatus(orderId, newStatus) {
  const customOrders = safeGet(ORDERS_KEY, []);
  const customIdx = customOrders.findIndex(o => o.id === orderId);
  
  if (customIdx > -1) {
    customOrders[customIdx].status = newStatus;
    safeSet(ORDERS_KEY, customOrders);
    return true;
  }
  
  // Also check sample orders overrides in local storage
  const overridesKey = 'paradise_sample_order_overrides';
  const overrides = safeGet(overridesKey, {});
  overrides[orderId] = newStatus;
  safeSet(overridesKey, overrides);
  return true;
}

export function getEffectiveOrders() {
  const customOrders = safeGet(ORDERS_KEY, []);
  const overridesKey = 'paradise_sample_order_overrides';
  const overrides = safeGet(overridesKey, {});
  
  const mappedSampleOrders = sampleOrders.map(so => {
    if (overrides[so.id]) {
      return { ...so, status: overrides[so.id] };
    }
    return so;
  });

  return [...customOrders, ...mappedSampleOrders];
}

// --- BOOKINGS HELPERS ---
export function getBookings() {
  const customBookings = safeGet(BOOKINGS_KEY, []);
  return [...customBookings, ...sampleBookings];
}

export function saveBooking(bookingData) {
  const customBookings = safeGet(BOOKINGS_KEY, []);
  const newBooking = {
    ...bookingData,
    id: `BKG-${Math.floor(1000 + Math.random() * 9000)}`,
    status: 'Confirmed (Demo)',
    isSample: false,
    createdAt: new Date().toLocaleString('en-IN', {
      dateStyle: 'short',
      timeStyle: 'short'
    })
  };
  customBookings.unshift(newBooking);
  safeSet(BOOKINGS_KEY, customBookings);
  return newBooking;
}

// --- PAYMENTS HELPERS ---
export function getPayments() {
  const customOrders = safeGet(ORDERS_KEY, []);
  const customPayments = customOrders.map((ord, idx) => ({
    id: `PAY-${ord.id.replace('ORD-', '')}`,
    orderId: ord.id,
    method: ord.paymentMethod || 'UPI (Demo)',
    amount: ord.total,
    status: ord.paymentStatus || 'Success',
    date: ord.createdAt,
    isSample: false
  }));
  return [...customPayments, ...samplePayments];
}

// --- AUTH SESSION HELPERS ---
export function getOwnerSession() {
  return safeGet(AUTH_KEY, null);
}

export function setOwnerSession(user) {
  safeSet(AUTH_KEY, {
    username: user.username,
    loggedInAt: new Date().toISOString()
  });
}

export function clearOwnerSession() {
  safeRemove(AUTH_KEY);
}

// --- LIVE STATUS HELPER (Is restaurant open right now?) ---
export function isRestaurantOpenNow() {
  try {
    const now = new Date();
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();
    const currentDecimal = currentHour + currentMinute / 60;
    
    const openDecimal = restaurantData.hours.openHour24; // 11
    const closeDecimal = restaurantData.hours.closeHour24; // 23
    
    return currentDecimal >= openDecimal && currentDecimal < closeDecimal;
  } catch (e) {
    return true; // fallback
  }
}

