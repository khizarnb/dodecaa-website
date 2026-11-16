import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Contact from './pages/Contact';
import BuyFromUs from './pages/BuyFromUs';
import SellToUs from './pages/SellToUs';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-white">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            
            {/* About us */}
            <Route path="/about-us" element={<About />} />
            <Route path="/about-us/" element={<About />} />
            <Route path="/about" element={<Navigate to="/about-us" replace />} />
            
            {/* Products */}
            <Route path="/products" element={<Products />} />
            <Route path="/products/" element={<Products />} />
            
            {/* Contact us */}
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/contact-us/" element={<Contact />} />
            <Route path="/contact" element={<Navigate to="/contact-us" replace />} />
            
            {/* Buy from us */}
            <Route path="/buy-from-us" element={<BuyFromUs />} />
            <Route path="/buy-from-us/" element={<BuyFromUs />} />
            <Route path="/buy" element={<Navigate to="/buy-from-us" replace />} />
            
            {/* Sell to us */}
            <Route path="/sell-to-us" element={<SellToUs />} />
            <Route path="/sell-to-us/" element={<SellToUs />} />
            <Route path="/sell" element={<Navigate to="/sell-to-us" replace />} />

            {/* Fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
