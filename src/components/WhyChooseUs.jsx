import React from 'react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: '/assets/Layer_1-6.png',
    title: 'Inventory Flow',
    desc: 'We source directly from top carriers, and manufacturers to ensure consistent quantities.',
  },
  {
    icon: '/assets/Layer_1-7.png',
    title: 'Long Term Relationships',
    desc: 'We focus on providing high quality solutions to our customers all over the world to maintain reliable long-term relationships.',
  },
  {
    icon: '/assets/Layer_1-1.png',
    title: 'Global Distributors',
    desc: 'No matter where you are, Our fully experienced staff is available to serve your mobile needs today.',
  },
  {
    icon: '/assets/Layer_1-2.png',
    title: 'Well Qualified Staff',
    desc: 'Our fully experienced staff available to serve your needs today.',
  },
  {
    icon: '/assets/Layer_1-3.png',
    title: 'Accurate Grading',
    desc: 'All our devices are processed using strict guidelines to ensure the top quality!',
  },
  {
    icon: '/assets/Layer_1-4.png',
    title: 'Warranty & Quality Assurance',
    desc: 'We offer a 30-day warranty on all used products. Every device is tested using Phone Check.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative w-full py-20 lg:py-28 overflow-hidden bg-[#00114F] text-white">
      {/* Background image Frame-7.webp */}
      <div
        className="absolute inset-0 w-full h-full bg-center bg-cover bg-no-repeat opacity-20 pointer-events-none"
        style={{ backgroundImage: `url('/assets/Frame-7.webp')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#00114F]/90 via-[#00114F]/95 to-[#00114F] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs md:text-sm font-bold tracking-widest text-[#0287CC] uppercase block mb-3"
          >
            WHY CHOOSE US
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-[44px] font-extrabold text-white tracking-tight"
          >
            Our Process
          </motion.h2>
        </div>

        {/* 6 Cards Grid (3 columns on desktop, 2 on tablet, 1 on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-[#0287CC]/50 transition-all flex flex-col items-start group shadow-lg"
            >
              <div className="w-16 h-16 rounded-xl bg-white/10 flex items-center justify-center p-3 mb-6 group-hover:scale-110 group-hover:bg-[#0287CC]/20 transition-all">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="max-h-full max-w-full object-contain filter brightness-100"
                />
              </div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#0287CC] transition-colors">
                {item.title}
              </h3>

              <p className="text-sm text-gray-300 leading-relaxed font-normal">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
