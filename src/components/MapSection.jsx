import React from 'react';
import { MapPin } from 'lucide-react';

export default function MapSection() {
  return (
    <section className="w-full bg-white py-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 relative h-80 sm:h-96 w-full">
          {/* Real responsive Google Maps iframe centered on Stafford, TX 71227 */}
          <iframe
            title="Dodecaa Office Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110940.66952763297!2d-95.63296236528703!3d29.615918797960627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640e70abf3b5a77%3A0xb366b57912fb6e98!2sStafford%2C%20TX%2077477!5e0!3m2!1sen!2sus!4v1710000000000!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full filter saturate-110"
          />

          {/* Floating Address Overlay Card */}
          <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-md border border-gray-100 max-w-xs text-xs pointer-events-none">
            <div className="flex items-center gap-2 text-[#00114F] font-bold text-sm mb-1">
              <MapPin size={16} className="text-[#0287CC]" />
              <span>Dodecaa Headquarters</span>
            </div>
            <p className="text-gray-600 leading-snug">
              12315 Darc Drest De, STE# 160, Stafford, TX 71227
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
