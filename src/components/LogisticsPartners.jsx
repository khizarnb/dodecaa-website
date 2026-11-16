import React from 'react';
import { motion } from 'framer-motion';

const logisticsPartners = [
  { name: 'DHL', logo: '/assets/DHL-GSM-Club-1.png' },
  { name: 'FedEx', logo: '/assets/FedEx-GSM-Club-1.png' },
  { name: 'Dun & Bradstreet', logo: '/assets/Dun-and-Bradstreet-GSM-Club-1.png' },
  { name: 'UPS', logo: '/assets/UPS-GSM-Club-1.png' },
  { name: 'USPS', logo: '/assets/USPS-GSM-Club-1.png' },
];

export default function LogisticsPartners({ bgLight = false }) {
  return (
    <section className={`w-full py-16 lg:py-20 ${bgLight ? 'bg-white' : 'bg-[#F7F7F7]'} border-b border-gray-200/50`}>
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs md:text-sm font-bold tracking-widest text-[#0287CC] uppercase block mb-2"
        >
          FAST & SECURE
        </motion.span>
        
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-4xl font-extrabold text-[#00114F] mb-12 tracking-tight"
        >
          Our Partners
        </motion.h2>

        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
          {logisticsPartners.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-4 sm:p-6 rounded-xl shadow-xs border border-gray-100 flex items-center justify-center w-36 sm:w-44 h-24 hover:shadow-md transition-all"
            >
              <img
                src={item.logo}
                alt={item.name}
                className="max-h-14 max-w-full object-contain filter contrast-105"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
