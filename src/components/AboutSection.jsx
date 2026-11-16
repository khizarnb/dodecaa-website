import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function AboutSection() {
  return (
    <section className="w-full py-16 lg:py-24 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Illustration / Image Frame-6.webp */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative flex justify-center"
          >
            <div className="w-full max-w-lg overflow-hidden rounded-2xl shadow-xl border border-gray-100 bg-[#F0F5FA] p-2">
              <img
                src="/assets/Frame-6.webp"
                alt="About Dodecaa"
                className="w-full h-auto object-cover rounded-xl hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <span className="text-xs md:text-sm font-bold tracking-widest text-[#0287CC] uppercase mb-2 block">
                ABOUT US
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-[40px] font-extrabold text-[#00114F] leading-tight">
                At Dodecaa
              </h2>
            </div>

            <p className="text-base text-gray-700 leading-relaxed font-normal">
              At Dodecaa, we stand as a premier distributor of IT hardware, leveraging over two decades of combined expertise in the tech industry. Specializing in comprehensive distribution services, we offer meticulously tested and high-quality IT hardware, covering a wide spectrum from smartphones, networking, cards, memories, processors, laptops, to various other components.
            </p>

            <div>
              <Link
                to="/about-us"
                className="inline-flex items-center gap-3 btn-dodecaa font-semibold px-8 py-3.5 rounded-lg text-base shadow-md group"
              >
                <span>Explore</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
