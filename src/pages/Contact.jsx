import React, { useState } from 'react';
import { 
  Phone, 
  MessageCircle, 
  MapPin, 
  Clock, 
  Mail, 
  Instagram, 
  Facebook, 
  Send, 
  CheckCircle2, 
  ShieldAlert,
  Headphones
} from 'lucide-react';
import { restaurantData } from '../data/restaurant';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.message) {
      alert("Please enter your name, phone number, and message.");
      return;
    }
    // Demo only: shows success state without remote server calls
    setSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-teal-800 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
          Get In Touch
        </span>
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-stone-900">
          Contact Paradise Pool Side
        </h1>
        <p className="text-stone-600 text-sm">
          Have questions regarding reservations, private party hosting, or poolside dining? We're here to assist.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Direct Contact Info */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Phone & WhatsApp Quick Connect */}
          <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm space-y-4">
            <h3 className="font-display font-bold text-stone-900 text-lg flex items-center space-x-2">
              <Headphones className="w-5 h-5 text-teal-700" />
              <span>Direct Lines</span>
            </h3>

            <div className="space-y-3 pt-1">
              <a
                href={`tel:${restaurantData.contact.phonePrimary}`}
                className="flex items-center justify-between p-3.5 rounded-xl bg-stone-50 hover:bg-stone-100 border border-stone-200 transition-colors group"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-teal-600 text-white flex items-center justify-center">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-stone-500 font-medium">Primary Desk Phone</div>
                    <div className="text-sm font-bold text-stone-900 group-hover:text-teal-700">
                      {restaurantData.contact.phonePrimary}
                    </div>
                  </div>
                </div>
                <span className="text-xs font-bold text-teal-700 bg-teal-50 px-2.5 py-1 rounded-lg">
                  Call
                </span>
              </a>

              <a
                href={`tel:${restaurantData.contact.phoneSecondary}`}
                className="flex items-center justify-between p-3.5 rounded-xl bg-stone-50 hover:bg-stone-100 border border-stone-200 transition-colors group"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-stone-700 text-white flex items-center justify-center">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-stone-500 font-medium">Secondary Line</div>
                    <div className="text-sm font-bold text-stone-900 group-hover:text-teal-700">
                      {restaurantData.contact.phoneSecondary}
                    </div>
                  </div>
                </div>
                <span className="text-xs font-bold text-stone-700 bg-stone-200/60 px-2.5 py-1 rounded-lg">
                  Call
                </span>
              </a>

              <a
                href={`https://wa.me/${restaurantData.contact.whatsAppClean}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-colors group"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-emerald-800 font-medium">Instant WhatsApp Chat</div>
                    <div className="text-sm font-bold text-emerald-950">
                      {restaurantData.contact.whatsAppDisplay}
                    </div>
                  </div>
                </div>
                <span className="text-xs font-bold text-emerald-800 bg-emerald-200 px-2.5 py-1 rounded-lg">
                  Chat
                </span>
              </a>
            </div>
          </div>

          {/* Venue & Timings Box */}
          <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm space-y-4 text-xs text-stone-600">
            <div className="flex items-start space-x-3">
              <MapPin className="w-4 h-4 text-teal-700 mt-0.5 shrink-0" />
              <div>
                <div className="font-bold text-stone-900 text-sm">Location</div>
                <address className="not-italic mt-0.5 text-stone-600 leading-relaxed">
                  {restaurantData.address.fullAddress}
                </address>
              </div>
            </div>

            <div className="flex items-start space-x-3 pt-2 border-t border-stone-100">
              <Clock className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
              <div>
                <div className="font-bold text-stone-900 text-sm">Operating Hours</div>
                <div className="mt-0.5 font-mono text-teal-800 font-semibold">{restaurantData.hours.display}</div>
                <div className="text-stone-500 mt-0.5">{restaurantData.hours.days}</div>
              </div>
            </div>

            <div className="flex items-start space-x-3 pt-2 border-t border-stone-100">
              <Instagram className="w-4 h-4 text-rose-500 mt-0.5 shrink-0" />
              <div>
                <div className="font-bold text-stone-900 text-sm">Social Presence</div>
                <div className="mt-0.5 text-stone-500 italic">
                  {restaurantData.socialLinks.instagramHandle}
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Right Column: Demo Contact Form */}
        <div className="lg:col-span-7">
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-xl space-y-6">
            <div>
              <h2 className="font-display text-2xl font-bold text-stone-900">
                Send a Message
              </h2>
              <p className="text-xs text-stone-500 mt-1">
                Fill in your query below. This is an interactive demo form.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-teal-50 border border-teal-200 text-center space-y-4 animate-in fade-in">
                <div className="w-12 h-12 rounded-full bg-teal-600 text-white flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="font-display text-xl font-bold text-stone-900">
                  Message Sent Successfully!
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="font-bold text-teal-800">{form.name}</span>. We have received your query regarding "{form.subject}". In a production deployment with a backend, this triggers an automated email or SMS notification.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setForm({ name: '', phone: '', email: '', subject: 'General Inquiry', message: '' });
                    }}
                    className="px-5 py-2.5 rounded-xl bg-teal-700 text-white font-bold text-xs shadow hover:bg-teal-800 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="e.g. Anand Gowda"
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
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="e.g. +91 98450 00000"
                      className="w-full px-4 py-2.5 rounded-xl border border-stone-300 focus:ring-2 focus:ring-teal-600 outline-none text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="e.g. anand@example.com"
                      className="w-full px-4 py-2.5 rounded-xl border border-stone-300 focus:ring-2 focus:ring-teal-600 outline-none text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase mb-1">
                      Subject
                    </label>
                    <select
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-stone-300 focus:ring-2 focus:ring-teal-600 outline-none text-sm bg-white"
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Table Reservation">Table Reservation</option>
                      <option value="Poolside Private Party">Poolside Private Party</option>
                      <option value="Menu & Dietary Query">Menu &amp; Dietary Query</option>
                      <option value="Feedback / Suggestion">Feedback / Suggestion</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase mb-1">
                    Your Message *
                  </label>
                  <textarea
                    rows="4"
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us what you would like to know or request..."
                    className="w-full px-4 py-2.5 rounded-xl border border-stone-300 focus:ring-2 focus:ring-teal-600 outline-none text-sm"
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-bold text-sm shadow-md active:scale-95 transition-all flex items-center justify-center space-x-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Inquiry (Demo)</span>
                  </button>
                </div>

                <div className="flex items-center justify-center space-x-1.5 text-[11px] text-stone-500">
                  <ShieldAlert className="w-3.5 h-3.5 text-teal-700" />
                  <span>Demo contact form: Does not store data remotely.</span>
                </div>
              </form>
            )}

          </div>
        </div>

      </div>

    </div>
  );
}

