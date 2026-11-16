import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About us', path: '/about-us' },
    { name: 'Products', path: '/products' },
    { name: 'Contact us', path: '/contact-us' },
    { name: 'Buy from us', path: '/buy-from-us' },
    { name: 'Sell to us', path: '/sell-to-us' },
  ];

  return (
    <header className="w-full bg-white z-50 relative shadow-xs">
      {/* 1. Top Logo Bar (Desktop) */}
      <div className="hidden md:flex justify-center items-center py-5 px-6 border-b border-gray-100">
        <Link to="/" className="inline-block transition-transform duration-200 hover:scale-[1.02]">
          <img
            src="/assets/dode-logo.png"
            alt="Dodecaa Logo"
            className="h-16 w-auto object-contain"
          />
        </Link>
      </div>

      {/* 2. Desktop Navigation Bar (Deep Midnight Blue #00114F) */}
      <nav className="hidden md:block bg-[#00114F] text-white">
        <div className="max-w-6xl mx-auto px-4">
          <ul className="flex items-center justify-center space-x-1 lg:space-x-4">
            {navLinks.map((item) => (
              <li key={item.path} className="relative">
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `block px-4 py-4 text-[16px] font-medium tracking-wide transition-colors duration-200 relative ${
                      isActive
                        ? 'text-white font-semibold'
                        : 'text-gray-200 hover:text-white'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span>{item.name}</span>
                      {isActive && (
                        <span className="absolute bottom-0 left-0 w-full h-[5px] bg-[#0287CC] rounded-t-sm" />
                      )}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* 3. Mobile Header Bar */}
      <div className="flex md:hidden items-center justify-between px-4 py-3 bg-white border-b border-gray-200">
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 text-[#00114F] hover:text-[#0287CC] focus:outline-hidden transition-colors"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <Link to="/" className="flex-1 flex justify-center mr-8">
          <img
            src="/assets/dode-logo.png"
            alt="Dodecaa Logo"
            className="h-12 w-auto object-contain"
          />
        </Link>
      </div>

      {/* 4. Mobile Menu Drawer / Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#00114F] text-white border-t border-[#0287CC]/30 animate-fadeIn">
          <ul className="py-2 px-4 space-y-1">
            {navLinks.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `block py-3 px-4 rounded-md text-[16px] font-medium transition-all ${
                      isActive
                        ? 'bg-[#0287CC] text-white font-semibold pl-6'
                        : 'text-gray-200 hover:bg-white/10 hover:text-white'
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="p-4 mt-2 border-t border-white/10 text-xs text-gray-300 space-y-2">
            <div className="flex items-center space-x-2">
              <Mail size={14} className="text-[#0287CC]" />
              <a href="mailto:sales@dodecaa.com" className="hover:text-white">
                sales@dodecaa.com
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <Phone size={14} className="text-[#0287CC]" />
              <a href="tel:+1021458913134946" className="hover:text-white">
                +1 (214) 589-1313
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
