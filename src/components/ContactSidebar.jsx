import React from 'react';
import { MapPin, Phone, Mail, Clock, Building2 } from 'lucide-react';

export default function ContactSidebar({ showOfficesDesc = false }) {
  return (
    <div className="space-y-6">
      {/* Contact Info Card */}
      <div className="bg-[#00114F] text-white rounded-2xl p-6 sm:p-8 shadow-xl border border-white/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#0287CC]/20 rounded-full blur-2xl pointer-events-none" />

        <h3 className="text-2xl font-bold text-white mb-6 pb-2 border-b border-white/15">
          Contact Info
        </h3>

        <div className="space-y-5 text-sm">
          {/* Address */}
          <div className="flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center shrink-0 mt-0.5 text-[#0287CC]">
              <MapPin size={18} />
            </div>
            <div>
              <p className="font-semibold text-white">Office Address</p>
              <p className="text-gray-300 mt-0.5 leading-relaxed">
                12315 Darc Drest De, STE# 160,<br />
                Stafford, TX 71227
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center shrink-0 mt-0.5 text-[#0287CC]">
              <Phone size={18} />
            </div>
            <div>
              <p className="font-semibold text-white">Call Us</p>
              <a
                href="tel:+1021458913134946"
                className="text-gray-300 hover:text-white mt-0.5 inline-block transition-colors"
              >
                +1021458913134946
              </a>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center shrink-0 mt-0.5 text-[#0287CC]">
              <Mail size={18} />
            </div>
            <div>
              <p className="font-semibold text-white">Email Us</p>
              <a
                href="mailto:sales@dodecaa.com"
                className="text-[#0287CC] hover:text-blue-300 font-medium mt-0.5 inline-block transition-colors"
              >
                sales@dodecaa.com
              </a>
            </div>
          </div>

          {/* Business Hours */}
          <div className="flex items-start gap-3.5 pt-2 border-t border-white/10">
            <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center shrink-0 mt-0.5 text-[#FFBC7D]">
              <Clock size={18} />
            </div>
            <div>
              <p className="font-semibold text-white">Business Hours</p>
              <p className="text-gray-300 mt-0.5 leading-relaxed">
                Monday - Friday: 8:00 AM to 5:00 PM<br />
                Saturday - Sunday: Closed.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Offices description card */}
      {showOfficesDesc && (
        <div className="bg-[#F0F5FA] rounded-2xl p-6 sm:p-8 border border-gray-200/80 shadow-xs">
          <div className="flex items-center gap-3 mb-3 text-[#00114F]">
            <Building2 size={22} className="text-[#0287CC]" />
            <h3 className="text-xl font-bold">Our Offices</h3>
          </div>
          <p className="text-sm text-gray-700 leading-relaxed">
            Dodecaa, LLC is here to provide you with more information, answer any questions you may have, and create effective solutions tailored to your needs.
          </p>
        </div>
      )}
    </div>
  );
}
