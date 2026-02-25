import React from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
            <p className="text-stone-600 mb-10 text-lg leading-relaxed">
              Have questions about your stay? Paul and Albert are here to help. 
              Reach out to us through any of these channels or send us a message directly.
            </p>

            <div className="space-y-8">
              <ContactItem 
                icon={<Phone className="text-stone-900" />} 
                title="Call or WhatsApp" 
                detail="+63 917 123 4567" 
              />
              <ContactItem 
                icon={<Mail className="text-stone-900" />} 
                title="Email Us" 
                detail="hello@paulbertscabin.com" 
              />
              <ContactItem 
                icon={<MapPin className="text-stone-900" />} 
                title="Location" 
                detail="Urban Deca Towers, EDSA, Mandaluyong City, Philippines" 
              />
            </div>

            <div className="mt-12 flex gap-4">
              <a href="#" className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div className="bg-white p-10 rounded-3xl shadow-xl border border-stone-100">
            <h3 className="text-2xl font-bold mb-8">Send a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-stone-700 mb-2">Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-stone-900/10 focus:border-stone-900 transition-all" placeholder="Your Name" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-stone-700 mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-stone-900/10 focus:border-stone-900 transition-all" placeholder="your@email.com" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-stone-700 mb-2">Subject</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-stone-900/10 focus:border-stone-900 transition-all" placeholder="How can we help?" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-stone-700 mb-2">Message</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-stone-900/10 focus:border-stone-900 transition-all" placeholder="Tell us more..."></textarea>
              </div>
              <button className="w-full btn-primary py-4 flex items-center justify-center gap-2">
                Send Message <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactItem({ icon, title, detail }: { icon: React.ReactNode; title: string; detail: string }) {
  return (
    <div className="flex gap-6">
      <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-stone-100 shrink-0">
        {icon}
      </div>
      <div>
        <h4 className="font-bold text-stone-900">{title}</h4>
        <p className="text-stone-500">{detail}</p>
      </div>
    </div>
  );
}
