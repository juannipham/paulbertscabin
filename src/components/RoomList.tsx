import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ROOMS } from '../constants';
import { Room } from '../types';
import { Users, Wifi, Tv, Coffee, Wind, ChevronRight } from 'lucide-react';

interface RoomListProps {
  onBook: (room: Room) => void;
}

export default function RoomList({ onBook }: RoomListProps) {
  return (
    <section id="rooms" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-4xl font-bold mb-4">Our Curated Cabins</h2>
            <p className="text-stone-600 max-w-xl">
              Each unit is uniquely designed to provide a relaxing atmosphere. 
              Whether you're here for work or play, we have the perfect space for you.
            </p>
          </div>
          <div className="flex gap-2">
            <span className="px-4 py-2 bg-stone-200 rounded-full text-xs font-bold uppercase tracking-wider text-stone-600">
              {ROOMS.length} Units Available
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          {ROOMS.map((room, index) => (
            <RoomCard key={room.id} room={room} index={index} onBook={onBook} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface RoomCardProps {
  room: Room;
  index: number;
  onBook: (room: Room) => void;
  key?: string;
}

function RoomCard({ room, index, onBook }: RoomCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-stone-100"
    >
      <div className="relative h-72 overflow-hidden">
        <img
          src={room.image}
          alt={room.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-4 py-2 rounded-full font-bold text-stone-900 shadow-sm">
          ₱{room.price} <span className="text-xs font-normal text-stone-500">/ night</span>
        </div>
      </div>

      <div className="p-8">
        <div className="flex items-center gap-2 text-stone-500 text-xs font-bold uppercase tracking-widest mb-3">
          <Users size={14} />
          <span>Up to {room.capacity} Guests</span>
        </div>
        
        <h3 className="text-2xl font-bold mb-3 group-hover:text-stone-700 transition-colors">{room.name}</h3>
        <p className="text-stone-600 mb-6 line-clamp-2 leading-relaxed">
          {room.description}
        </p>

        <div className="flex flex-wrap gap-4 mb-8">
          {room.amenities.slice(0, 4).map((amenity) => (
            <div key={amenity} className="flex items-center gap-1.5 text-sm text-stone-500">
              {getAmenityIcon(amenity)}
              <span>{amenity}</span>
            </div>
          ))}
        </div>

        <button 
          onClick={() => onBook(room)}
          className="w-full btn-primary flex items-center justify-center gap-2 group/btn"
        >
          Book This Cabin <ChevronRight size={18} className="transition-transform group-hover/btn:translate-x-1" />
        </button>
      </div>
    </motion.div>
  );
}

function getAmenityIcon(name: string) {
  const n = name.toLowerCase();
  if (n.includes('wifi')) return <Wifi size={14} />;
  if (n.includes('netflix') || n.includes('tv')) return <Tv size={14} />;
  if (n.includes('coffee')) return <Coffee size={14} />;
  if (n.includes('air') || n.includes('ac')) return <Wind size={14} />;
  return null;
}
