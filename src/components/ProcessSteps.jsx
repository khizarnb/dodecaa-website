import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    icon: '/assets/ICONS-02.png',
    title: 'Fast Quote',
    desc: 'Send your device list to:',
    highlight: 'sales@dodecaa.com',
    link: 'mailto:sales@dodecaa.com',
  },
  {
    icon: '/assets/ICONS-04.png',
    title: 'Logistics',
    desc: 'Free and insured courier collection',
  },
  {
    icon: '/assets/ICONS-03.png',
    title: 'Processing',
    desc: 'Processing and data erasure within 48 hours',
  },
  {
    icon: '/assets/ICONS-01.png',
    title: 'Reporting',
    desc: 'Data erasure certificates issued. Payment in 48 hours',
  },
];

export default function ProcessSteps({ className = '' }) {
  return (
    <section className={`w-full py-14 lg:py-16 bg-white ${className}`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-[#F0F5FA] rounded-xl p-6 text-center flex flex-col items-center justify-start border border-[#0287CC]/15 shadow-xs hover:shadow-md transition-all"
            >
              <div className="w-16 h-16 mb-4 flex items-center justify-center">
                <img
                  src={step.icon}
                  alt={step.title}
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              <h3 className="text-xl font-bold text-[#00114F] mb-2">
                {step.title}
              </h3>

              <p className="text-sm text-gray-600 leading-relaxed">
                {step.desc}{' '}
                {step.highlight && (
                  step.link ? (
                    <a
                      href={step.link}
                      className="text-[#0287CC] font-semibold hover:underline block mt-0.5"
                    >
                      {step.highlight}
                    </a>
                  ) : (
                    <span className="font-semibold text-gray-800">
                      {step.highlight}
                    </span>
                  )
                )}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
