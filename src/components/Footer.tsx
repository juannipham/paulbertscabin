import React from 'react';
import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-stone-50 py-12 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-stone-900 text-white rounded flex items-center justify-center font-serif font-bold">
              P
            </div>
            <span className="font-serif text-lg font-bold tracking-tight">
              PaulBert's Cabin
            </span>
          </div>

          <div className="flex gap-8 text-sm text-stone-500 font-medium">
            <a href="#home" className="hover:text-stone-900 transition-colors">Home</a>
            <a href="#rooms" className="hover:text-stone-900 transition-colors">Rooms</a>
            <a href="#reviews" className="hover:text-stone-900 transition-colors">Reviews</a>
            <a href="#contact" className="hover:text-stone-900 transition-colors">Contact</a>
          </div>

          <p className="text-sm text-stone-400 flex items-center gap-1">
            Made with <Heart size={14} className="text-red-400 fill-red-400" /> by Paul & Albert
          </p>
        </div>
        
        <div className="mt-12 pt-8 border-t border-stone-200 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-stone-400 uppercase tracking-widest font-bold">
          <p>© 2026 PaulBert's Cabin. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-stone-600">Privacy Policy</a>
            <a href="#" className="hover:text-stone-600">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
