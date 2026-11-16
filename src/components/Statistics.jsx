import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  {
    number: '2 Million+',
    label: 'Mobile Devices Processed Yearly',
  },
  {
    number: '50+',
    label: 'Countries Serviced on 6 Continents',
  },
  {
    number: '500+',
    label: 'Retail and Wholesale Partners Globally',
  },
  {
    number: '20+',
    label: 'Years in Business',
  },
];

export default function Statistics() {
  return (
    <section className="w-full bg-white py-12 lg:py-16 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`text-center px-4 ${index !== 0 ? 'pt-6 sm:pt-0' : ''}`}
            >
              <div className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#0287CC] tracking-tight mb-2">
                {item.number}
              </div>
              <div className="text-sm sm:text-base font-medium text-[#16171A] leading-snug max-w-[220px] mx-auto">
                {item.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
