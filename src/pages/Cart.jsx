import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  ShoppingBag, 
  Trash2, 
  Plus, 
  Minus, 
  ArrowLeft, 
  CheckCircle2, 
  ShieldCheck, 
  AlertCircle, 
  CreditCard, 
  Smartphone, 
  Banknote, 
  UtensilsCrossed,
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import { 
  getCart, 
  updateCartQuantity, 
  removeFromCart, 
  clearCart, 
  saveNewOrder 
} from '../utils/storage';

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [orderType, setOrderType] = useState('Dine-in'); // 'Dine-in', 'Takeaway', 'Delivery'
  const [customer, setCustomer] = useState({
    name: '',
    phone: '',
    email: '',
    tableNumber: '04',
    address: 'Near RR Nagar Main Road'
  });
  const [paymentMethod, setPaymentMethod] = useState('UPI'); // 'UPI', 'Card', 'COD'
  const [confirmedOrder, setConfirmedOrder] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const loadCart = () => {
    setCartItems(getCart());
  };

  useEffect(() => {
    loadCart();
    window.addEventListener('cart-updated', loadCart);
    return () => window.removeEventListener('cart-updated', loadCart);
  }, []);

  // Compute pricing
  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * (item.quantity || 1)), 0);
  const demoTax = Math.round(subtotal * 0.05 * 10) / 10; // 5% demo GST
  const total = subtotal + demoTax;

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    if (!customer.name || !customer.phone) {
      alert("Please enter customer name and phone number.");
      return;
    }

    if (cartItems.length === 0) {
      alert("Your cart is empty. Please add dishes from the menu.");
      return;
    }

    setIsSubmitting(true);

    // Simulate order placement
    setTimeout(() => {
      const orderId = `ORD-${Math.floor(10000 + Math.random() * 90000)}`;
      const orderData = {
        id: orderId,
        customer: {
          name: customer.name,
          phone: customer.phone,
          email: customer.email || 'customer@example.com',
          tableNumber: orderType === 'Dine-in' ? customer.tableNumber : '',
          address: orderType === 'Delivery' ? customer.address : orderType === 'Dine-in' ? `Table #${customer.tableNumber}` : 'Takeaway counter'
        },
        orderType: orderType,
        items: cartItems.map(item => ({
          id: item.id,
          name: item.name,
          price: item.price,
          quantity: item.quantity
        })),
        subtotal: subtotal,
        tax: demoTax,
        total: total,
        paymentMethod: paymentMethod === 'UPI' ? 'UPI (Demo)' : paymentMethod === 'Card' ? 'Card (Demo)' : 'Cash on Delivery',
        paymentStatus: paymentMethod === 'COD' ? 'Pending' : 'Completed',
        status: 'Pending'
      };

      const savedOrder = saveNewOrder(orderData);
      clearCart();
      setConfirmedOrder(savedOrder);
      setIsSubmitting(false);
    }, 400);
  };

  // If order is successfully placed, show Confirmation Receipt Screen
  if (confirmedOrder) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-stone-200 shadow-2xl space-y-6 text-center animate-in fade-in">
          
          <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              Demo Order Placed Successfully
            </span>
            <h1 className="font-display text-3xl font-bold text-stone-900">
              Thank You, {confirmedOrder.customer.name}!
            </h1>
            <p className="text-xs sm:text-sm text-stone-500 max-w-md mx-auto">
              Your order has been recorded in the local demo database. The restaurant kitchen is preparing your poolside order.
            </p>
          </div>

          {/* Receipt Card */}
          <div className="bg-stone-50 rounded-2xl p-6 border border-stone-200/80 text-left space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-stone-200 text-xs">
              <div>
                <span className="text-stone-400">Order Reference:</span>{' '}
                <span className="font-mono font-bold text-stone-900 text-sm">{confirmedOrder.id}</span>
              </div>
              <div className="text-stone-500 mt-1 sm:mt-0">
                Type: <span className="font-bold text-teal-800">{confirmedOrder.orderType}</span> ({confirmedOrder.customer.address})
              </div>
            </div>

            <div className="space-y-2">
              <div className="text-xs font-bold uppercase tracking-wider text-stone-400">
                Ordered Items
              </div>
              {confirmedOrder.items.map((item, idx) => (
                <div key={idx} className="flex justify-between text-xs sm:text-sm text-stone-700">
                  <span>{item.quantity}x {item.name}</span>
                  <span className="font-mono">₹{item.price * item.quantity}</span>
                </div>
              ))}
            </div>

            <div className="pt-3 border-t border-stone-200 space-y-1 text-xs">
              <div className="flex justify-between text-stone-500">
                <span>Subtotal:</span>
                <span className="font-mono">₹{confirmedOrder.subtotal}</span>
              </div>
              <div className="flex justify-between text-stone-500">
                <span>Demo GST (5%):</span>
                <span className="font-mono">₹{confirmedOrder.tax}</span>
              </div>
              <div className="flex justify-between text-base font-bold text-stone-900 pt-1 border-t border-stone-200">
                <span>Total Paid (Demo):</span>
                <span className="font-mono text-teal-800">₹{confirmedOrder.total}</span>
              </div>
            </div>

            <div className="text-[11px] text-stone-500 bg-white p-3 rounded-xl border border-stone-200 flex items-center justify-between">
              <span>Payment Mode: <strong>{confirmedOrder.paymentMethod}</strong> ({confirmedOrder.paymentStatus})</span>
              <span className="text-emerald-700 font-bold">✓ Verified Demo</span>
            </div>
          </div>

          {/* Navigation Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/owner-dashboard"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-teal-800 hover:bg-teal-900 text-white font-bold text-xs shadow flex items-center justify-center space-x-2 transition-all"
            >
              <span>View in Owner Dashboard</span>
              <ExternalLink className="w-4 h-4" />
            </Link>

            <Link
              to="/menu"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 font-bold text-xs transition-colors"
            >
              Order More Items
            </Link>
          </div>

        </div>
      </div>
    );
  }

  // Empty cart view
  if (cartItems.length === 0) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-16 text-center space-y-6">
        <div className="w-16 h-16 rounded-full bg-teal-50 text-teal-700 flex items-center justify-center mx-auto">
          <ShoppingBag className="w-8 h-8" />
        </div>
        <div className="space-y-2">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-stone-900">
            Your Cart is Empty
          </h2>
          <p className="text-xs sm:text-sm text-stone-500 max-w-md mx-auto">
            Explore our poolside menu to add signature chicken platters, Mushroom Dry, and chilled beverages.
          </p>
        </div>
        <Link
          to="/menu"
          className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-bold text-sm shadow transition-all"
        >
          <UtensilsCrossed className="w-4 h-4 text-amber-300" />
          <span>Browse Restaurant Menu</span>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      {/* Title */}
      <div className="flex items-center justify-between">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-teal-800 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
            Review &amp; Checkout
          </span>
          <h1 className="font-display text-3xl font-bold text-stone-900 mt-2">
            Your Order Cart
          </h1>
        </div>

        <Link
          to="/menu"
          className="text-xs font-bold text-teal-800 hover:text-teal-900 flex items-center space-x-1"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Menu</span>
        </Link>
      </div>

      {/* Main Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Col: Cart Items List */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-stone-100">
            <h3 className="font-display font-bold text-lg text-stone-900">
              Selected Items ({cartItems.length})
            </h3>
            <button
              onClick={() => clearCart()}
              className="text-xs text-rose-600 hover:text-rose-700 font-semibold"
            >
              Clear Cart
            </button>
          </div>

          <div className="divide-y divide-stone-100 space-y-2">
            {cartItems.map((item) => (
              <div key={item.id} className="pt-4 pb-2 flex items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <span className={`w-2 h-2 rounded-full ${item.isVeg ? 'bg-emerald-600' : 'bg-rose-600'}`}></span>
                    <h4 className="font-bold text-stone-900 text-sm sm:text-base">
                      {item.name}
                    </h4>
                  </div>
                  <div className="font-mono text-xs text-teal-800 font-bold">
                    ₹{item.price} each
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  {/* Quantity Controls */}
                  <div className="flex items-center bg-stone-100 rounded-xl p-1 border border-stone-200">
                    <button
                      onClick={() => updateCartQuantity(item.id, item.quantity - 1)}
                      className="w-7 h-7 rounded-lg bg-white text-stone-700 flex items-center justify-center hover:bg-stone-200 transition-colors shadow-xs"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="font-bold text-xs sm:text-sm px-3 text-stone-900">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateCartQuantity(item.id, item.quantity + 1)}
                      className="w-7 h-7 rounded-lg bg-teal-700 text-white flex items-center justify-center hover:bg-teal-800 transition-colors shadow-xs"
                      aria-label="Increase quantity"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Line total */}
                  <span className="font-mono font-bold text-stone-900 text-sm sm:text-base w-16 text-right">
                    ₹{item.price * item.quantity}
                  </span>

                  {/* Remove Button */}
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="p-1.5 rounded-lg text-stone-400 hover:text-rose-600 hover:bg-rose-50 transition-colors"
                    aria-label="Remove item"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Pricing Breakdown */}
          <div className="pt-6 border-t border-stone-200 space-y-2 text-xs sm:text-sm">
            <div className="flex justify-between text-stone-600">
              <span>Item Subtotal</span>
              <span className="font-mono font-bold">₹{subtotal}</span>
            </div>
            <div className="flex justify-between text-stone-500">
              <span className="flex items-center space-x-1">
                <span>Demo Taxes (5% GST)</span>
                <span className="text-[10px] bg-stone-200 text-stone-700 px-1.5 rounded">Demo</span>
              </span>
              <span className="font-mono">₹{demoTax}</span>
            </div>
            <div className="flex justify-between text-base sm:text-lg font-bold text-stone-900 pt-3 border-t border-stone-200">
              <span>Grand Total</span>
              <span className="font-mono text-teal-800">₹{total}</span>
            </div>
          </div>

        </div>

        {/* Right Col: Customer Details & Demo Payment */}
        <div className="lg:col-span-5 space-y-6">
          <form onSubmit={handlePlaceOrder} className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-xl space-y-6">
            
            <h3 className="font-display font-bold text-lg text-stone-900 pb-2 border-b border-stone-100">
              Delivery &amp; Customer Info
            </h3>

            {/* Order Type Tabs */}
            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-stone-700 uppercase">
                Order Type *
              </label>
              <div className="grid grid-cols-3 gap-2">
                {['Dine-in', 'Takeaway', 'Delivery'].map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setOrderType(type)}
                    className={`py-2 text-xs font-bold rounded-xl border transition-all ${
                      orderType === type
                        ? 'bg-teal-700 text-white border-teal-700 shadow-sm'
                        : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Customer Contact inputs */}
            <div className="space-y-3">
              <div>
                <label className="block text-xs font-bold text-stone-700 uppercase mb-1">
                  Customer Name *
                </label>
                <input
                  type="text"
                  required
                  value={customer.name}
                  onChange={(e) => setCustomer({ ...customer, name: e.target.value })}
                  placeholder="e.g. Vikram Sharma"
                  className="w-full px-4 py-2.5 rounded-xl border border-stone-300 focus:ring-2 focus:ring-teal-600 outline-none text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 uppercase mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  value={customer.phone}
                  onChange={(e) => setCustomer({ ...customer, phone: e.target.value })}
                  placeholder="e.g. +91 98450 12345"
                  className="w-full px-4 py-2.5 rounded-xl border border-stone-300 focus:ring-2 focus:ring-teal-600 outline-none text-sm"
                />
              </div>

              {orderType === 'Dine-in' && (
                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase mb-1">
                    Table Number (Poolside / Deck)
                  </label>
                  <input
                    type="text"
                    value={customer.tableNumber}
                    onChange={(e) => setCustomer({ ...customer, tableNumber: e.target.value })}
                    placeholder="e.g. Table 04 or Pool Deck"
                    className="w-full px-4 py-2.5 rounded-xl border border-stone-300 focus:ring-2 focus:ring-teal-600 outline-none text-sm"
                  />
                </div>
              )}

              {orderType === 'Delivery' && (
                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase mb-1">
                    Delivery Address (RR Nagar Area)
                  </label>
                  <textarea
                    rows="2"
                    required
                    value={customer.address}
                    onChange={(e) => setCustomer({ ...customer, address: e.target.value })}
                    placeholder="Enter your street and apartment address"
                    className="w-full px-4 py-2.5 rounded-xl border border-stone-300 focus:ring-2 focus:ring-teal-600 outline-none text-sm"
                  ></textarea>
                </div>
              )}
            </div>

            {/* Demo Payment Section */}
            <div className="space-y-3 pt-2 border-t border-stone-100">
              <label className="block text-xs font-bold text-stone-700 uppercase">
                Payment Method (Demo Mode)
              </label>

              {/* DEMO BANNER AS REQUIRED */}
              <div className="p-3 rounded-xl bg-amber-50 border border-amber-300 text-amber-900 text-xs font-bold flex items-center space-x-2">
                <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Demo payment - no real money is charged</span>
              </div>

              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('UPI')}
                  className={`p-3 rounded-xl border flex flex-col items-center justify-center space-y-1 transition-all ${
                    paymentMethod === 'UPI'
                      ? 'bg-teal-50 border-teal-600 text-teal-900 shadow-sm font-bold'
                      : 'border-stone-200 text-stone-600 hover:bg-stone-50'
                  }`}
                >
                  <Smartphone className="w-4 h-4 text-teal-700" />
                  <span className="text-xs">UPI</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('Card')}
                  className={`p-3 rounded-xl border flex flex-col items-center justify-center space-y-1 transition-all ${
                    paymentMethod === 'Card'
                      ? 'bg-teal-50 border-teal-600 text-teal-900 shadow-sm font-bold'
                      : 'border-stone-200 text-stone-600 hover:bg-stone-50'
                  }`}
                >
                  <CreditCard className="w-4 h-4 text-teal-700" />
                  <span className="text-xs">Card</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('COD')}
                  className={`p-3 rounded-xl border flex flex-col items-center justify-center space-y-1 transition-all ${
                    paymentMethod === 'COD'
                      ? 'bg-teal-50 border-teal-600 text-teal-900 shadow-sm font-bold'
                      : 'border-stone-200 text-stone-600 hover:bg-stone-50'
                  }`}
                >
                  <Banknote className="w-4 h-4 text-teal-700" />
                  <span className="text-xs">Cash</span>
                </button>
              </div>
            </div>

            {/* Place Order CTA */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-bold text-sm tracking-wide shadow-lg shadow-teal-800/20 active:scale-95 transition-all flex items-center justify-center space-x-2 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Processing Demo Payment...</span>
                ) : (
                  <>
                    <span>Complete Order (₹{total})</span>
                    <ArrowRight className="w-4 h-4 text-amber-300" />
                  </>
                )}
              </button>
            </div>

          </form>
        </div>

      </div>

    </div>
  );
}

