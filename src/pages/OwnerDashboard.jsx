import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { 
  getOwnerSession, 
  clearOwnerSession, 
  getEffectiveOrders, 
  updateOrderStatus, 
  getBookings, 
  getPayments 
} from '../utils/storage';
import { 
  ShoppingBag, 
  IndianRupee, 
  Clock, 
  Calendar, 
  Search, 
  Filter, 
  LogOut, 
  CheckCircle2, 
  AlertCircle, 
  Eye, 
  X, 
  RefreshCw, 
  User, 
  Phone, 
  MapPin, 
  CreditCard,
  TrendingUp,
  BarChart3,
  ExternalLink
} from 'lucide-react';

export default function OwnerDashboard() {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [payments, setPayments] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [activeTab, setActiveTab] = useState('orders'); // 'orders', 'bookings', 'payments'
  const [updateFeedback, setUpdateFeedback] = useState(null);

  // Auth Protection Check
  useEffect(() => {
    const session = getOwnerSession();
    if (!session) {
      navigate('/owner-login');
      return;
    }
    loadData();
  }, [navigate]);

  const loadData = () => {
    setOrders(getEffectiveOrders());
    setBookings(getBookings());
    setPayments(getPayments());
  };

  const handleLogout = () => {
    clearOwnerSession();
    navigate('/owner-login');
  };

  const handleStatusChange = (orderId, newStatus) => {
    updateOrderStatus(orderId, newStatus);
    loadData();
    if (selectedOrder && selectedOrder.id === orderId) {
      setSelectedOrder(prev => ({ ...prev, status: newStatus }));
    }
    setUpdateFeedback(`Order ${orderId} updated to ${newStatus}`);
    setTimeout(() => setUpdateFeedback(null), 2500);
  };

  // Metrics computation
  const totalOrdersCount = orders.length;
  const pendingOrdersCount = orders.filter(o => o.status === 'Pending' || o.status === 'Preparing').length;
  const totalRevenue = orders
    .filter(o => o.status !== 'Cancelled')
    .reduce((acc, curr) => acc + (curr.total || 0), 0);

  // Compute Today's revenue (orders containing today's date "2026-11-07" or current date)
  const todayDateStr = new Date().toISOString().split('T')[0];
  const todayRevenue = orders
    .filter(o => o.createdAt && (o.createdAt.includes('2026-11-07') || o.createdAt.includes(todayDateStr)))
    .filter(o => o.status !== 'Cancelled')
    .reduce((acc, curr) => acc + (curr.total || 0), 0);

  // Filter orders
  const filteredOrders = orders.filter(o => {
    const matchesStatus = statusFilter === 'All' || o.status === statusFilter;
    const q = searchQuery.toLowerCase();
    const matchesSearch = 
      o.id.toLowerCase().includes(q) ||
      o.customer?.name.toLowerCase().includes(q) ||
      o.customer?.phone.toLowerCase().includes(q) ||
      o.orderType.toLowerCase().includes(q);
    return matchesStatus && matchesSearch;
  });

  // Simple CSS Bar Chart Data (Revenue for past 7 days)
  const chartDays = [
    { day: '01 Nov', amount: 3200, height: '40%' },
    { day: '02 Nov', amount: 3950, height: '50%' },
    { day: '03 Nov', amount: 4800, height: '62%' },
    { day: '04 Nov', amount: 5600, height: '72%' },
    { day: '05 Nov', amount: 6400, height: '82%' },
    { day: '06 Nov', amount: 7100, height: '90%' },
    { day: 'Today', amount: todayRevenue > 0 ? todayRevenue : 5440, height: '70%', isToday: true }
  ];

  return (
    <div className="min-h-screen bg-stone-100/60 pb-20">
      
      {/* Top Admin Header Bar */}
      <div className="bg-stone-900 text-white border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-teal-600 text-white flex items-center justify-center font-bold font-display text-lg shadow-sm">
              P
            </div>
            <div>
              <div className="font-display font-bold text-lg text-white">
                Paradise Pool Side Restaurant
              </div>
              <div className="text-xs text-stone-400 flex items-center space-x-2">
                <span>Owner Administrative Dashboard</span>
                <span>•</span>
                <span className="text-emerald-400 font-medium">● System Live</span>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-3 self-end sm:self-auto">
            <Link
              to="/"
              className="px-3.5 py-2 rounded-xl bg-stone-800 text-stone-200 text-xs font-semibold hover:bg-stone-700 transition-colors flex items-center space-x-1.5"
            >
              <span>View Public Site</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>

            <button
              onClick={handleLogout}
              className="px-3.5 py-2 rounded-xl bg-rose-950/60 text-rose-300 border border-rose-800/50 hover:bg-rose-900 text-xs font-bold transition-colors flex items-center space-x-1.5"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-8">
        
        {/* Update feedback toast */}
        {updateFeedback && (
          <div className="p-3 bg-emerald-600 text-white text-xs font-bold rounded-xl shadow-md flex items-center space-x-2 animate-in fade-in">
            <CheckCircle2 className="w-4 h-4 shrink-0" />
            <span>{updateFeedback}</span>
          </div>
        )}

        {/* 1. Summary Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          
          <div className="bg-white rounded-2xl p-5 border border-stone-200 shadow-sm flex items-center justify-between">
            <div className="space-y-1">
              <span className="text-xs text-stone-500 font-bold uppercase tracking-wider">
                Total Orders
              </span>
              <div className="font-display text-3xl font-bold text-stone-900">
                {totalOrdersCount}
              </div>
              <div className="text-[11px] text-stone-400">
                Merged with sample dataset
              </div>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-700 flex items-center justify-center">
              <ShoppingBag className="w-6 h-6" />
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-stone-200 shadow-sm flex items-center justify-between">
            <div className="space-y-1">
              <span className="text-xs text-stone-500 font-bold uppercase tracking-wider">
                Today's Revenue
              </span>
              <div className="font-display text-3xl font-bold text-stone-900 font-mono">
                ₹{Math.round(todayRevenue)}
              </div>
              <div className="text-[11px] text-emerald-600 font-semibold">
                Daily poolside receipts
              </div>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
              <IndianRupee className="w-6 h-6" />
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-stone-200 shadow-sm flex items-center justify-between">
            <div className="space-y-1">
              <span className="text-xs text-stone-500 font-bold uppercase tracking-wider">
                Total Revenue
              </span>
              <div className="font-display text-3xl font-bold text-stone-900 font-mono">
                ₹{Math.round(totalRevenue)}
              </div>
              <div className="text-[11px] text-stone-400">
                All confirmed transactions
              </div>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center">
              <TrendingUp className="w-6 h-6" />
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-stone-200 shadow-sm flex items-center justify-between">
            <div className="space-y-1">
              <span className="text-xs text-stone-500 font-bold uppercase tracking-wider">
                Pending Orders
              </span>
              <div className="font-display text-3xl font-bold text-stone-900">
                {pendingOrdersCount}
              </div>
              <div className="text-[11px] text-amber-600 font-semibold">
                Requires kitchen attention
              </div>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-700 flex items-center justify-center">
              <Clock className="w-6 h-6" />
            </div>
          </div>

        </div>

        {/* 2. CSS-based Revenue Bar Chart (No heavy chart library required) */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-teal-800 bg-teal-50 px-2.5 py-1 rounded inline-block">
                Weekly Performance
              </div>
              <h3 className="font-display font-bold text-xl text-stone-900 mt-1">
                Recent Revenue Trends (INR ₹)
              </h3>
            </div>
            <span className="text-xs text-stone-400">
              Clean CSS-based chart with zero external dependencies
            </span>
          </div>

          {/* Bar Chart Visualization */}
          <div className="pt-4 pb-2">
            <div className="h-48 flex items-end justify-between gap-2 sm:gap-6 border-b border-stone-200 px-2 sm:px-4">
              {chartDays.map((bar, idx) => (
                <div key={idx} className="flex-1 flex flex-col items-center gap-2 h-full justify-end group">
                  <span className="text-[10px] font-mono font-bold text-stone-600 opacity-0 group-hover:opacity-100 transition-opacity">
                    ₹{bar.amount}
                  </span>
                  <div
                    style={{ height: bar.height }}
                    className={`w-full max-w-[42px] rounded-t-xl transition-all duration-500 group-hover:opacity-90 ${
                      bar.isToday
                        ? 'bg-gradient-to-t from-teal-700 to-amber-500 shadow-md shadow-amber-500/20'
                        : 'bg-teal-700/80 hover:bg-teal-700'
                    }`}
                  ></div>
                  <span className={`text-[11px] font-medium mt-1 ${bar.isToday ? 'font-bold text-teal-900' : 'text-stone-500'}`}>
                    {bar.day}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 3. Navigation Tabs: Orders vs Bookings vs Payments */}
        <div className="flex items-center space-x-2 border-b border-stone-200 pb-2 overflow-x-auto">
          <button
            onClick={() => setActiveTab('orders')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeTab === 'orders'
                ? 'bg-stone-900 text-white shadow-sm'
                : 'text-stone-600 hover:bg-stone-200/60'
            }`}
          >
            Online &amp; Dine-in Orders ({orders.length})
          </button>

          <button
            onClick={() => setActiveTab('bookings')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeTab === 'bookings'
                ? 'bg-stone-900 text-white shadow-sm'
                : 'text-stone-600 hover:bg-stone-200/60'
            }`}
          >
            Table Reservations ({bookings.length})
          </button>

          <button
            onClick={() => setActiveTab('payments')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeTab === 'payments'
                ? 'bg-stone-900 text-white shadow-sm'
                : 'text-stone-600 hover:bg-stone-200/60'
            }`}
          >
            Payment Transactions ({payments.length})
          </button>
        </div>


        {/* ================= TAB 1: ONLINE ORDERS TABLE ================= */}
        {activeTab === 'orders' && (
          <div className="bg-white rounded-3xl border border-stone-200 shadow-sm overflow-hidden space-y-4">
            
            {/* Table Filters & Search Header */}
            <div className="p-5 border-b border-stone-100 flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
              
              <div className="relative flex-1 max-w-md">
                <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by order ID, customer name, phone, type..."
                  className="w-full pl-10 pr-4 py-2 rounded-xl border border-stone-300 text-xs sm:text-sm focus:ring-2 focus:ring-teal-600 outline-none"
                />
              </div>

              <div className="flex items-center space-x-2 overflow-x-auto">
                <span className="text-xs text-stone-500 font-bold shrink-0">Status:</span>
                {['All', 'Pending', 'Preparing', 'Ready', 'Delivered', 'Cancelled'].map((st) => (
                  <button
                    key={st}
                    onClick={() => setStatusFilter(st)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                      statusFilter === st
                        ? 'bg-teal-700 text-white'
                        : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                    }`}
                  >
                    {st}
                  </button>
                ))}
              </div>

            </div>

            {/* Orders Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-stone-50/70 text-stone-500 uppercase tracking-wider text-[11px] font-bold border-b border-stone-200">
                    <th className="py-3 px-4">Order ID</th>
                    <th className="py-3 px-4">Customer</th>
                    <th className="py-3 px-4">Type</th>
                    <th className="py-3 px-4">Items Summary</th>
                    <th className="py-3 px-4">Amount</th>
                    <th className="py-3 px-4">Status &amp; Action</th>
                    <th className="py-3 px-4 text-right">View</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100">
                  {filteredOrders.length === 0 ? (
                    <tr>
                      <td colSpan="7" className="py-8 text-center text-stone-500">
                        No orders match your filter criteria.
                      </td>
                    </tr>
                  ) : (
                    filteredOrders.map((ord) => (
                      <tr key={ord.id} className="hover:bg-stone-50/50 transition-colors">
                        
                        {/* Order ID & Sample tag */}
                        <td className="py-3.5 px-4 font-mono font-bold text-stone-900 whitespace-nowrap">
                          <div>{ord.id}</div>
                          <div className="text-[10px] text-stone-400 font-normal">{ord.createdAt}</div>
                          {ord.isSample && (
                            <span className="text-[9px] bg-amber-100 text-amber-800 px-1.5 py-0.2 rounded font-sans">
                              Sample demo
                            </span>
                          )}
                        </td>

                        {/* Customer */}
                        <td className="py-3.5 px-4">
                          <div className="font-bold text-stone-900">{ord.customer?.name}</div>
                          <div className="text-xs text-stone-500">{ord.customer?.phone}</div>
                        </td>

                        {/* Order Type */}
                        <td className="py-3.5 px-4 whitespace-nowrap">
                          <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${
                            ord.orderType === 'Dine-in'
                              ? 'bg-cyan-50 text-cyan-800 border border-cyan-200'
                              : ord.orderType === 'Delivery'
                              ? 'bg-purple-50 text-purple-800 border border-purple-200'
                              : 'bg-stone-100 text-stone-800 border border-stone-200'
                          }`}>
                            {ord.orderType}
                          </span>
                        </td>

                        {/* Items list */}
                        <td className="py-3.5 px-4 max-w-xs text-xs text-stone-600">
                          {ord.items.map((i, idx) => (
                            <span key={idx}>
                              {i.quantity}x {i.name}{idx < ord.items.length - 1 ? ', ' : ''}
                            </span>
                          ))}
                        </td>

                        {/* Amount */}
                        <td className="py-3.5 px-4 font-mono font-bold text-teal-900 whitespace-nowrap">
                          ₹{ord.total}
                        </td>

                        {/* Status dropdown to change status */}
                        <td className="py-3.5 px-4 whitespace-nowrap">
                          <select
                            value={ord.status}
                            onChange={(e) => handleStatusChange(ord.id, e.target.value)}
                            className={`text-xs font-bold px-2.5 py-1 rounded-lg border outline-none cursor-pointer ${
                              ord.status === 'Delivered'
                                ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
                                : ord.status === 'Pending'
                                ? 'bg-amber-50 text-amber-800 border-amber-300'
                                : ord.status === 'Preparing'
                                ? 'bg-blue-50 text-blue-800 border-blue-300'
                                : ord.status === 'Cancelled'
                                ? 'bg-rose-50 text-rose-800 border-rose-300'
                                : 'bg-stone-50 text-stone-800 border-stone-300'
                            }`}
                          >
                            <option value="Pending">Pending</option>
                            <option value="Confirmed">Confirmed</option>
                            <option value="Preparing">Preparing</option>
                            <option value="Ready">Ready</option>
                            <option value="Delivered">Delivered</option>
                            <option value="Cancelled">Cancelled</option>
                          </select>
                        </td>

                        {/* View Modal Trigger */}
                        <td className="py-3.5 px-4 text-right">
                          <button
                            onClick={() => setSelectedOrder(ord)}
                            className="p-1.5 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-700 transition-colors"
                            title="View order details"
                          >
                            <Eye className="w-4 h-4" />
                          </button>
                        </td>

                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>

          </div>
        )}


        {/* ================= TAB 2: TABLE BOOKINGS TABLE ================= */}
        {activeTab === 'bookings' && (
          <div className="bg-white rounded-3xl border border-stone-200 shadow-sm overflow-hidden p-6 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-stone-100">
              <div>
                <h3 className="font-display font-bold text-lg text-stone-900">
                  Poolside Table Reservations
                </h3>
                <p className="text-xs text-stone-500">
                  Real-time list of bookings submitted by guests from the homepage form.
                </p>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-stone-50/70 text-stone-500 uppercase tracking-wider text-[11px] font-bold border-b border-stone-200">
                    <th className="py-3 px-4">Booking ID</th>
                    <th className="py-3 px-4">Guest Name</th>
                    <th className="py-3 px-4">Contact</th>
                    <th className="py-3 px-4">Date &amp; Time</th>
                    <th className="py-3 px-4">Party Size</th>
                    <th className="py-3 px-4">Special Notes</th>
                    <th className="py-3 px-4">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100">
                  {bookings.map((bkg) => (
                    <tr key={bkg.id} className="hover:bg-stone-50/50 transition-colors">
                      <td className="py-3.5 px-4 font-mono font-bold text-stone-900">
                        {bkg.id}
                        {bkg.isSample && (
                          <div className="text-[9px] text-amber-700">Sample</div>
                        )}
                      </td>
                      <td className="py-3.5 px-4 font-bold text-stone-900">{bkg.name}</td>
                      <td className="py-3.5 px-4 text-stone-600">{bkg.phone}</td>
                      <td className="py-3.5 px-4">
                        <div className="font-semibold text-stone-900">{bkg.date}</div>
                        <div className="text-xs text-teal-800">{bkg.time}</div>
                      </td>
                      <td className="py-3.5 px-4 text-stone-800 font-medium">{bkg.guests}</td>
                      <td className="py-3.5 px-4 text-stone-500 max-w-xs">{bkg.notes || '—'}</td>
                      <td className="py-3.5 px-4">
                        <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-200">
                          {bkg.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}


        {/* ================= TAB 3: PAYMENT HISTORY TABLE ================= */}
        {activeTab === 'payments' && (
          <div className="bg-white rounded-3xl border border-stone-200 shadow-sm overflow-hidden p-6 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-stone-100">
              <div>
                <h3 className="font-display font-bold text-lg text-stone-900">
                  Payment Transactions Ledger
                </h3>
                <p className="text-xs text-stone-500">
                  Historical and newly simulated payments associated with customer orders.
                </p>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-stone-50/70 text-stone-500 uppercase tracking-wider text-[11px] font-bold border-b border-stone-200">
                    <th className="py-3 px-4">Payment Ref</th>
                    <th className="py-3 px-4">Order ID</th>
                    <th className="py-3 px-4">Payment Method</th>
                    <th className="py-3 px-4">Amount (INR)</th>
                    <th className="py-3 px-4">Transaction Status</th>
                    <th className="py-3 px-4 text-right">Timestamp</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100">
                  {payments.map((pay) => (
                    <tr key={pay.id} className="hover:bg-stone-50/50 transition-colors">
                      <td className="py-3.5 px-4 font-mono font-bold text-stone-900">{pay.id}</td>
                      <td className="py-3.5 px-4 font-mono text-stone-600">{pay.orderId}</td>
                      <td className="py-3.5 px-4 font-medium text-stone-800">{pay.method}</td>
                      <td className="py-3.5 px-4 font-mono font-bold text-teal-900">₹{pay.amount}</td>
                      <td className="py-3.5 px-4">
                        <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${
                          pay.status === 'Success'
                            ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                            : pay.status === 'Pending'
                            ? 'bg-amber-50 text-amber-800 border border-amber-200'
                            : 'bg-rose-50 text-rose-800 border border-rose-200'
                        }`}>
                          {pay.status}
                        </span>
                      </td>
                      <td className="py-3.5 px-4 text-right text-stone-500 text-xs">{pay.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

      </div>

      {/* ================= ORDER DETAIL VIEW MODAL ================= */}
      {selectedOrder && (
        <div 
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedOrder(null)}
        >
          <div 
            className="max-w-xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-stone-200 animate-in fade-in zoom-in-95 duration-150"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-6 bg-stone-900 text-white flex items-center justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-teal-400">
                  Order Details
                </span>
                <h3 className="font-display font-bold text-xl text-white">
                  {selectedOrder.id}
                </h3>
              </div>
              <button
                onClick={() => setSelectedOrder(null)}
                className="p-2 rounded-full bg-stone-800 hover:bg-stone-700 text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
              
              {/* Customer Box */}
              <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-stone-400">Customer:</span>
                  <span className="font-bold text-stone-900">{selectedOrder.customer?.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-400">Contact:</span>
                  <span className="text-stone-700">{selectedOrder.customer?.phone}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-400">Address / Table:</span>
                  <span className="text-stone-900 font-semibold">{selectedOrder.customer?.address}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-400">Order Mode:</span>
                  <span className="font-bold text-teal-800">{selectedOrder.orderType}</span>
                </div>
              </div>

              {/* Items Breakdown */}
              <div className="space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  Ordered Items
                </div>
                <div className="divide-y divide-stone-100 border-t border-b border-stone-100">
                  {selectedOrder.items.map((item, idx) => (
                    <div key={idx} className="py-2.5 flex items-center justify-between text-xs sm:text-sm">
                      <div>
                        <div className="font-bold text-stone-900">{item.name}</div>
                        <div className="text-stone-400 text-xs">₹{item.price} x {item.quantity}</div>
                      </div>
                      <div className="font-mono font-bold text-stone-800">
                        ₹{item.price * item.quantity}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Payment & Status Control */}
              <div className="space-y-3 pt-2">
                <div className="flex justify-between text-xs text-stone-500">
                  <span>Subtotal:</span>
                  <span className="font-mono">₹{selectedOrder.subtotal}</span>
                </div>
                <div className="flex justify-between text-xs text-stone-500">
                  <span>Tax (5% GST Demo):</span>
                  <span className="font-mono">₹{selectedOrder.tax}</span>
                </div>
                <div className="flex justify-between text-base font-bold text-stone-900 pt-2 border-t border-stone-200">
                  <span>Grand Total:</span>
                  <span className="font-mono text-teal-800">₹{selectedOrder.total}</span>
                </div>

                <div className="p-3 bg-stone-50 rounded-xl flex items-center justify-between text-xs">
                  <span>Payment Method: <strong>{selectedOrder.paymentMethod}</strong></span>
                  <span className="font-bold text-emerald-700">{selectedOrder.paymentStatus}</span>
                </div>

                <div className="pt-2">
                  <label className="block text-xs font-bold text-stone-700 uppercase mb-1">
                    Update Order Status:
                  </label>
                  <select
                    value={selectedOrder.status}
                    onChange={(e) => handleStatusChange(selectedOrder.id, e.target.value)}
                    className="w-full p-2.5 rounded-xl border border-stone-300 font-bold text-sm bg-white"
                  >
                    <option value="Pending">Pending</option>
                    <option value="Confirmed">Confirmed</option>
                    <option value="Preparing">Preparing</option>
                    <option value="Ready">Ready</option>
                    <option value="Delivered">Delivered</option>
                    <option value="Cancelled">Cancelled</option>
                  </select>
                </div>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-stone-50 border-t border-stone-200 flex justify-end">
              <button
                onClick={() => setSelectedOrder(null)}
                className="px-5 py-2 rounded-xl bg-stone-800 text-white font-bold text-xs hover:bg-stone-900"
              >
                Close Window
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

