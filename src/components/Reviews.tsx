import React from 'react';
import { motion } from 'motion/react';
import { REVIEWS } from '../constants';
import { Star, Quote } from 'lucide-react';

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 bg-stone-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Guest Experiences</h2>
          <p className="text-stone-400">Read what our guests have to say about their stay at PaulBert's Cabin.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10"
            >
              <Quote className="absolute top-6 right-8 text-white/10" size={48} />
              
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={16} 
                    className={i < review.rating ? "fill-amber-400 text-amber-400" : "text-white/20"} 
                  />
                ))}
              </div>

              <p className="text-stone-300 mb-8 italic leading-relaxed">
                "{review.comment}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-stone-700 rounded-full flex items-center justify-center font-bold text-sm">
                  {review.author[0]}
                </div>
                <div>
                  <h4 className="font-bold text-sm">{review.author}</h4>
                  <p className="text-xs text-stone-500">{new Date(review.date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-6 px-8 py-4 bg-white/5 rounded-full border border-white/10">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map(i => (
                <img 
                  key={i}
                  src={`https://picsum.photos/seed/user${i}/100/100`} 
                  className="w-8 h-8 rounded-full border-2 border-stone-900"
                  alt="User"
                />
              ))}
            </div>
            <p className="text-sm text-stone-400">
              Join <span className="text-white font-bold">500+</span> happy guests who stayed with us.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
