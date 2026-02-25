import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, User, CheckCircle2 } from 'lucide-react';
import { Room, Booking } from '../types';

interface BookingModalProps {
  room: Room | null;
  onClose: () => void;
  onSuccess: (booking: Booking) => void;
}

export default function BookingModal({ room, onClose, onSuccess }: BookingModalProps) {
  const [formData, setFormData] = useState({
    guestName: '',
    checkIn: '',
    checkOut: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!room) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      const newBooking: Booking = {
        id: Math.random().toString(36).substr(2, 9),
        roomId: room.id,
        guestName: formData.guestName,
        checkIn: formData.checkIn,
        checkOut: formData.checkOut,
        status: 'confirmed',
      };
      
      // Save to local storage for demo purposes
      const existingBookings = JSON.parse(localStorage.getItem('paulberts_bookings') || '[]');
      localStorage.setItem('paulberts_bookings', JSON.stringify([...existingBookings, newBooking]));
      
      setIsSubmitting(false);
      setIsSuccess(true);
      
      setTimeout(() => {
        onSuccess(newBooking);
        onClose();
      }, 2000);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-stone-900/60 backdrop-blur-sm"
      />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden"
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-stone-100 rounded-full transition-colors z-10"
        >
          <X size={20} />
        </button>

        {isSuccess ? (
          <div className="p-12 text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <CheckCircle2 size={40} />
            </motion.div>
            <h3 className="text-3xl font-bold mb-2">Booking Confirmed!</h3>
            <p className="text-stone-600">
              We've sent the details to your email. See you soon at PaulBert's Cabin!
            </p>
          </div>
        ) : (
          <div className="p-8">
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-1">Book {room.name}</h3>
              <p className="text-stone-500">₱{room.price} per night</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-stone-700 mb-2 flex items-center gap-2">
                  <User size={16} /> Full Name
                </label>
                <input
                  required
                  type="text"
                  value={formData.guestName}
                  onChange={(e) => setFormData({ ...formData, guestName: e.target.value })}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-stone-900/10 focus:border-stone-900 transition-all"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-stone-700 mb-2 flex items-center gap-2">
                    <Calendar size={16} /> Check-in
                  </label>
                  <input
                    required
                    type="date"
                    value={formData.checkIn}
                    onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-stone-900/10 focus:border-stone-900 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-stone-700 mb-2 flex items-center gap-2">
                    <Calendar size={16} /> Check-out
                  </label>
                  <input
                    required
                    type="date"
                    value={formData.checkOut}
                    onChange={(e) => setFormData({ ...formData, checkOut: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-stone-900/10 focus:border-stone-900 transition-all"
                  />
                </div>
              </div>

              <div className="pt-4">
                <button
                  disabled={isSubmitting}
                  type="submit"
                  className="w-full btn-primary py-4 text-lg"
                >
                  {isSubmitting ? 'Processing...' : `Confirm Booking`}
                </button>
                <p className="text-center text-xs text-stone-400 mt-4">
                  By clicking confirm, you agree to our house rules and cancellation policy.
                </p>
              </div>
            </form>
          </div>
        )}
      </motion.div>
    </div>
  );
}
