import React from 'react';
import { motion } from 'framer-motion';

export default function Hero({ isHome = false, title, subtitle, breadcrumb }) {
  if (isHome) {
    return (
      <section className="relative w-full min-h-[50vh] sm:min-h-[58vh] lg:min-h-[64vh] flex items-center justify-center overflow-hidden bg-white">
        {/* Background Image Frame-1.webp */}
        <div 
          className="absolute inset-0 w-full h-full bg-center bg-no-repeat bg-cover z-0"
          style={{ backgroundImage: `url('/assets/Frame-1.webp')` }}
        />
        
        {/* Optional subtle gradient overlay for contrast */}
        <div className="absolute inset-0 bg-black/10 z-1" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            {/* The original site has Frame-1.webp which visually incorporates hero graphics */}
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative w-full bg-gradient-to-r from-[#00114F] via-[#002275] to-[#0287CC] text-white py-16 lg:py-20 overflow-hidden">
      {/* Decorative background grid and glow */}
      <div 
        className="absolute inset-0 opacity-15 bg-center bg-cover mix-blend-overlay"
        style={{ backgroundImage: `url('/assets/Frame-7.webp')` }}
      />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#0287CC]/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#00114F]/40 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center md:text-left"
        >
          {subtitle && (
            <span className="inline-block text-[#FFBC7D] text-sm md:text-base font-semibold tracking-wider uppercase mb-2">
              {subtitle}
            </span>
          )}
          <h1 className="text-3xl md:text-5xl lg:text-[52px] font-bold tracking-tight text-white leading-tight">
            {title}
          </h1>
          {breadcrumb && (
            <p className="mt-3 text-sm text-gray-200">
              {breadcrumb}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
