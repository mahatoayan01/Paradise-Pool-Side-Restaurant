import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Lock, 
  User, 
  AlertCircle, 
  Info, 
  ArrowRight,
  UtensilsCrossed 
} from 'lucide-react';
import { getOwnerSession, setOwnerSession } from '../utils/storage';

export default function OwnerLogin() {
  const [username, setUsername] = useState('owner');
  const [password, setPassword] = useState('demo123');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // If already logged in, redirect directly to dashboard
  useEffect(() => {
    const session = getOwnerSession();
    if (session) {
      navigate('/owner-dashboard');
    }
  }, [navigate]);

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');

    // Demo credentials check as specified
    if (username.trim() === 'owner' && password === 'demo123') {
      setOwnerSession({ username: 'owner' });
      navigate('/owner-dashboard');
    } else {
      setError('Invalid demo credentials. Use username: "owner" and password: "demo123".');
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full bg-white rounded-3xl p-8 sm:p-10 border border-stone-200 shadow-xl space-y-6">
        
        {/* Brand Header */}
        <div className="text-center space-y-2">
          <div className="w-12 h-12 rounded-2xl bg-teal-800 text-white flex items-center justify-center mx-auto shadow-md">
            <ShieldCheck className="w-6 h-6 text-amber-300" />
          </div>
          <h1 className="font-display text-2xl font-bold text-stone-900">
            Owner Portal Login
          </h1>
          <p className="text-xs text-stone-500">
            Administrative console for Paradise Pool Side Restaurant
          </p>
        </div>

        {/* Demo Credentials Callout */}
        <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-xs space-y-1">
          <div className="font-bold flex items-center space-x-1.5">
            <Info className="w-3.5 h-3.5 text-amber-700" />
            <span>Demo Credentials Note</span>
          </div>
          <div className="font-mono text-[11px] pt-1">
            Username: <strong className="text-amber-950">owner</strong> <br />
            Password: <strong className="text-amber-950">demo123</strong>
          </div>
        </div>

        {error && (
          <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-center space-x-2">
            <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-stone-700 uppercase mb-1">
              Username
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="owner"
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-stone-300 focus:ring-2 focus:ring-teal-600 outline-none text-sm"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-stone-700 uppercase mb-1">
              Password
            </label>
            <div className="relative">
              <Lock className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="demo123"
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-stone-300 focus:ring-2 focus:ring-teal-600 outline-none text-sm"
              />
            </div>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-teal-800 hover:bg-teal-900 text-white font-bold text-sm shadow-md active:scale-95 transition-all flex items-center justify-center space-x-2"
            >
              <span>Access Dashboard</span>
              <ArrowRight className="w-4 h-4 text-amber-300" />
            </button>
          </div>
        </form>

        {/* Security & Backend Disclaimer */}
        <div className="pt-2 border-t border-stone-100 text-center space-y-2">
          <p className="text-[11px] text-stone-400 leading-relaxed">
            * Note: Session is stored client-side in localStorage for this static demo. In a live production deployment, real authentication requires a secure backend API with JWT or session cookies.
          </p>
          <div>
            <Link to="/" className="text-xs text-teal-700 hover:underline font-semibold">
              ← Return to Public Website
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}

