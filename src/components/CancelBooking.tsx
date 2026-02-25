import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Trash2, AlertCircle, CheckCircle2 } from 'lucide-react';
import { Booking } from '../types';
import { ROOMS } from '../constants';

export default function CancelBooking() {
  const [searchId, setSearchId] = useState('');
  const [booking, setBooking] = useState<Booking | null>(null);
  const [error, setError] = useState('');
  const [isCancelling, setIsCancelling] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    const bookings = JSON.parse(localStorage.getItem('paulberts_bookings') || '[]');
    const found = bookings.find((b: Booking) => b.id === searchId);
    
    if (found) {
      setBooking(found);
    } else {
      setError('Booking ID not found. Please check your confirmation email.');
      setBooking(null);
    }
  };

  const handleCancel = () => {
    if (!booking) return;
    setIsCancelling(true);
    
    setTimeout(() => {
      const bookings = JSON.parse(localStorage.getItem('paulberts_bookings') || '[]');
      const updated = bookings.map((b: Booking) => 
        b.id === booking.id ? { ...b, status: 'cancelled' } : b
      );
      localStorage.setItem('paulberts_bookings', JSON.stringify(updated));
      
      setIsCancelling(false);
      setIsSuccess(true);
      setBooking(null);
      setSearchId('');
      
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  const room = booking ? ROOMS.find(r => r.id === booking.roomId) : null;

  return (
    <section className="py-24 bg-white border-y border-stone-100">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Manage Your Stay</h2>
          <p className="text-stone-600">Need to change your plans? You can cancel your booking here using your Booking ID.</p>
        </div>

        <div className="glass p-8 rounded-3xl border border-stone-200">
          <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" size={20} />
              <input
                type="text"
                value={searchId}
                onChange={(e) => setSearchId(e.target.value)}
                placeholder="Enter Booking ID (e.g. x8j2k9l1)"
                className="w-full pl-12 pr-4 py-4 rounded-2xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-stone-900/10 focus:border-stone-900 transition-all"
              />
            </div>
            <button type="submit" className="btn-primary whitespace-nowrap px-8">
              Find Booking
            </button>
          </form>

          <AnimatePresence mode="wait">
            {error && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="flex items-center gap-3 p-4 bg-red-50 text-red-600 rounded-2xl border border-red-100"
              >
                <AlertCircle size={20} />
                <p className="text-sm font-medium">{error}</p>
              </motion.div>
            )}

            {isSuccess && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center gap-3 p-4 bg-emerald-50 text-emerald-600 rounded-2xl border border-emerald-100"
              >
                <CheckCircle2 size={20} />
                <p className="text-sm font-medium">Booking successfully cancelled. We hope to see you another time!</p>
              </motion.div>
            )}

            {booking && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-stone-50 rounded-2xl p-6 border border-stone-200"
              >
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider mb-2 ${booking.status === 'confirmed' ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-700'}`}>
                      {booking.status}
                    </span>
                    <h4 className="text-xl font-bold">{room?.name}</h4>
                    <p className="text-stone-500 text-sm">Guest: {booking.guestName}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-stone-400 uppercase font-bold tracking-widest">Dates</p>
                    <p className="text-sm font-medium">{booking.checkIn} — {booking.checkOut}</p>
                  </div>
                </div>

                {booking.status === 'confirmed' && (
                  <button
                    onClick={handleCancel}
                    disabled={isCancelling}
                    className="w-full flex items-center justify-center gap-2 py-3 bg-white text-red-600 border border-red-200 rounded-xl font-semibold hover:bg-red-50 transition-colors"
                  >
                    <Trash2 size={18} />
                    {isCancelling ? 'Cancelling...' : 'Cancel This Booking'}
                  </button>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
