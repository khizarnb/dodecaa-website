import React from 'react';

const partnerLogos = [
  { name: 'Partner 1', src: '/assets/Vector-1-1.png' },
  { name: 'Partner 2', src: '/assets/Group-3-1.png' },
  { name: 'Partner 3', src: '/assets/Vector-2.png' },
  { name: 'Partner 4', src: '/assets/Group-2-1.png' },
  { name: 'Partner 5', src: '/assets/Group-6.png' },
  { name: 'Partner 6', src: '/assets/Group-1-1.png' },
  { name: 'Partner 7', src: '/assets/Group-5-1.png' },
  { name: 'Partner 8', src: '/assets/Group-5.png' },
  { name: 'Partner 9', src: '/assets/Group-4-1.png' },
];

export default function PartnersCarousel() {
  // Double array for seamless infinite marquee loop
  const duplicatedLogos = [...partnerLogos, ...partnerLogos];

  return (
    <section className="w-full py-10 bg-[#F0F5FA] overflow-hidden border-y border-gray-200/60">
      <div className="max-w-6xl mx-auto px-6 mb-4 text-center">
        <span className="text-xs uppercase font-bold tracking-widest text-gray-500">
          Trusted by Top Hardware Manufacturers & Global Brands
        </span>
      </div>

      <div className="relative w-full overflow-hidden flex items-center">
        {/* Subtle fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#F0F5FA] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#F0F5FA] to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee whitespace-nowrap items-center py-4">
          {duplicatedLogos.map((logo, index) => (
            <div
              key={index}
              className="inline-flex items-center justify-center mx-8 grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="h-10 sm:h-12 w-auto max-w-[140px] object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
