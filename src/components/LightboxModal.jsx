import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Info } from 'lucide-react';

export default function LightboxModal({ items, activeIndex, onClose, onPrev, onNext }) {
  if (activeIndex === null || !items || !items[activeIndex]) return null;

  const currentItem = items[activeIndex];

  // Close modal on Escape key, navigate on arrows
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onPrev, onNext]);

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 z-50 p-2.5 rounded-full bg-stone-800/80 text-white hover:bg-stone-700 transition-colors focus:outline-none"
        aria-label="Close image lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev button */}
      {items.length > 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-stone-800/80 text-white hover:bg-stone-700 transition-colors focus:outline-none"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}

      {/* Next button */}
      {items.length > 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-stone-800/80 text-white hover:bg-stone-700 transition-colors focus:outline-none"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      )}

      {/* Center Image Container */}
      <div 
        className="max-w-4xl w-full bg-stone-900 rounded-2xl overflow-hidden shadow-2xl border border-stone-800"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-black flex items-center justify-center overflow-hidden">
          <img
            src={currentItem.src || currentItem.image}
            alt={currentItem.title || currentItem.caption || "Paradise Pool Side Photo"}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Caption bar */}
        <div className="p-5 bg-stone-900 border-t border-stone-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h3 className="text-white font-display text-lg font-bold">
              {currentItem.title}
            </h3>
            <p className="text-stone-400 text-sm mt-0.5">
              {currentItem.caption}
            </p>
          </div>

          <div className="flex items-center space-x-2 text-xs text-teal-400 bg-teal-950/60 border border-teal-800/40 px-3 py-1.5 rounded-lg shrink-0">
            <Info className="w-3.5 h-3.5" />
            <span>{currentItem.note || "Editable in restaurant.js"}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

