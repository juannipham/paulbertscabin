/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import RoomList from './components/RoomList';
import BookingModal from './components/BookingModal';
import CancelBooking from './components/CancelBooking';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Room, Booking } from './types';

export default function App() {
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
  const [lastBooking, setLastBooking] = useState<Booking | null>(null);

  const handleBook = (room: Room) => {
    setSelectedRoom(room);
  };

  const handleBookingSuccess = (booking: Booking) => {
    setLastBooking(booking);
    // You could show a global toast here if desired
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        
        <RoomList onBook={handleBook} />
        
        <CancelBooking />
        
        <Reviews />
        
        <Contact />
      </main>

      <Footer />

      <AnimatePresence>
        {selectedRoom && (
          <BookingModal 
            room={selectedRoom} 
            onClose={() => setSelectedRoom(null)} 
            onSuccess={handleBookingSuccess}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
