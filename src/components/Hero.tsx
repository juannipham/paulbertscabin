import React from 'react';
import { motion } from 'motion/react';
import { MapPin, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/seed/cabin-hero/1920/1080"
          alt="Urban Deca Towers View"
          className="w-full h-full object-cover brightness-50"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full mb-6 border border-white/20">
            <MapPin size={16} className="text-emerald-400" />
            <span className="text-sm font-medium tracking-wide uppercase">Urban Deca Towers, Mandaluyong</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Your Cozy Escape in the <span className="italic text-stone-300">Heart of the City</span>
          </h1>
          
          <p className="text-lg md:text-xl text-stone-200 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Experience the warmth of a cabin staycation hosted by Paul and Albert. 
            Modern comfort meets rustic charm at PaulBert's Cabin.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#rooms" className="btn-primary bg-white text-stone-900 hover:bg-stone-100 w-full sm:w-auto flex items-center justify-center gap-2">
              Explore Rooms <ArrowRight size={18} />
            </a>
            <a href="#contact" className="btn-secondary bg-transparent text-white border-white/30 hover:bg-white/10 w-full sm:w-auto">
              Contact Hosts
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-white rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
}
