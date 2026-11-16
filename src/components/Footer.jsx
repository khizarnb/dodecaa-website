import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ArrowUp, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer({ hidePreFooterCTA = false }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#00114F] text-white">
      {/* 1. Pre-footer CTA Bar */}
      {!hidePreFooterCTA && (
        <div className="border-b border-white/10 bg-[#000d3d] py-10 px-6">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <h2 className="text-xl md:text-2xl lg:text-[28px] font-bold text-white max-w-2xl leading-snug">
              Contact us today to discuss your needs and discover how we can help!
            </h2>
            <Link
              to="/contact-us"
              className="inline-flex items-center gap-2 btn-dodecaa font-semibold px-8 py-3.5 rounded-lg text-base hover:scale-105 transition-all shadow-lg shrink-0"
            >
              <span>Contact Us</span>
              <ChevronRight size={18} />
            </Link>
          </div>
        </div>
      )}

      {/* 2. Main 4-Column Footer */}
      <div className="max-w-6xl mx-auto px-6 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Col 1: About Dodecaa */}
          <div className="space-y-5">
            <Link to="/" className="inline-block">
              <img
                src="/assets/dode-white-logo.png"
                alt="Dodecaa White Logo"
                className="h-14 w-auto object-contain"
              />
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed">
              At Dodecaa, we're not just a distributor we're your trusted partner in procuring top-notch IT hardware solutions.
            </p>
          </div>

          {/* Col 2: About Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-5 pb-1 relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-[2px] after:bg-[#0287CC]">
              About
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white hover:translate-x-1 inline-block transition-transform">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about-us" className="text-gray-300 hover:text-white hover:translate-x-1 inline-block transition-transform">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-white hover:translate-x-1 inline-block transition-transform">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/contact-us" className="text-gray-300 hover:text-white hover:translate-x-1 inline-block transition-transform">
                  Contact us
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-5 pb-1 relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-[2px] after:bg-[#0287CC]">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/buy-from-us" className="text-gray-300 hover:text-white hover:translate-x-1 inline-block transition-transform">
                  Buy from us
                </Link>
              </li>
              <li>
                <Link to="/sell-to-us" className="text-gray-300 hover:text-white hover:translate-x-1 inline-block transition-transform">
                  Sell to us
                </Link>
              </li>
              <li>
                <a href="#terms" onClick={(e) => { e.preventDefault(); alert("Terms and Conditions are available upon request from Dodecaa LLC."); }} className="text-gray-300 hover:text-white hover:translate-x-1 inline-block transition-transform">
                  Terms and Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact us */}
          <div>
            <h3 className="text-lg font-bold text-white mb-5 pb-1 relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-[2px] after:bg-[#0287CC]">
              Contact us
            </h3>
            <ul className="space-y-3.5 text-sm text-gray-300">
              <li className="flex items-start gap-2.5">
                <MapPin size={18} className="text-[#0287CC] shrink-0 mt-0.5" />
                <span>12315 Darc Drest De, STE# 160, Stafford, TX 71227</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={18} className="text-[#0287CC] shrink-0" />
                <a href="tel:+1021458913134946" className="hover:text-white">
                  +1021458913134946
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={18} className="text-[#0287CC] shrink-0" />
                <a href="mailto:sales@dodecaa.com" className="hover:text-white">
                  sales@dodecaa.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* 3. Bottom Copyright Bar */}
      <div className="border-t border-white/10 py-6 px-6 bg-[#000a30]">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>© 2026 – Dodecaa. All Rights Reserved.</p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-gray-400 hover:text-white transition-colors cursor-pointer"
          >
            <span>Scroll to Top</span>
            <ArrowUp size={14} className="text-[#0287CC]" />
          </button>
        </div>
      </div>
    </footer>
  );
}
