import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import WhyChooseUs from '../components/WhyChooseUs';
import LogisticsPartners from '../components/LogisticsPartners';
import ContactForm from '../components/ContactForm';
import { CheckCircle2, ShieldCheck, RefreshCw, Award } from 'lucide-react';

export default function About() {
  return (
    <div className="w-full flex flex-col min-h-screen">
      {/* 1. Page Hero */}
      <Hero
        title="About Us"
        subtitle="Powering IT. Delivering Trust."
        breadcrumb="Home / About Us"
      />

      {/* 2. Company Description & Hardware Distribution Content */}
      <section className="w-full py-16 lg:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-gray-700 leading-relaxed text-base md:text-lg"
          >
            <p className="text-xl md:text-2xl font-medium text-[#00114F] leading-snug">
              At Dodecaa, we stand as a premier distributor of IT hardware, leveraging over two decades of combined expertise in the tech industry. Specializing in comprehensive distribution services, we offer meticulously tested and high-quality IT hardware, covering a wide spectrum from smartphones, networking, cards, memories, processors, laptops, to various other components. Our dedication to excellence resonates through our commitment to delivering superior product quality, exceptional customer service, and a sustainable approach.
            </p>

            <p>
              As a trusted name in the industry, we cater to both national and international markets, providing competitive prices to distributors worldwide. Our extensive inventory ensures that we have something for everyone, whether you’re seeking budget-friendly bulk deals on specific part numbers or seeking a reliable wholesaler in the USA.
            </p>

            <p>
              Our streamlined processes ensure a seamless experience for our customers, from easy ordering and payment methods to prompt shipping and dependable after-sales support. Every item in our inventory undergoes rigorous grading, quality control, and testing before it’s made available for purchase, guaranteeing the highest standards of reliability and performance.
            </p>

            <div className="p-6 bg-[#F0F5FA] rounded-2xl border-l-4 border-[#0287CC] my-8 shadow-xs">
              <p className="text-[#00114F] font-bold text-lg md:text-xl italic">
                “At Dodecaa, we’re not just a distributor; we’re your trusted partner in procuring top-notch IT hardware solutions.”
              </p>
            </div>

            <p>
              At Dodecaa, we specialize in creating, executing, and delivering tailored programs and initiatives that ensure maximum ROI while meeting the specific needs of each client, both economically and environmentally. As a B2B supplier of IT hardware, we prioritize sustainability and the reduction of electronic waste.
            </p>

            <p>
              We collaborate with trade-in suppliers, pre-owned device distributors, and second-hand phone distributors to curate a reliable supply of used devices. These devices undergo thorough refurbishment before being made available to our clients at competitive prices. Our commitment to sustainability extends to our entire product range, which includes not only mobile phones and tablets but also hard drives, solid-state drives, network storage devices, storage controllers, tape drives, switches, transceivers, routers, network interface adapters, wired networking equipment, network firewalls, IP phones, UPS units, processors, and much more.
            </p>

            <p>
              At Dodecaa, we take our role as a wholesale distributor seriously. Our team of qualified staff meticulously grades and tests every device, backed by a 30-day warranty on all used products. We prioritize building long-term relationships with our clients through exceptional customer service and support, ensuring a seamless experience in meeting their inventory needs.
            </p>

            <p>
              We go beyond being just a distributor; we’re committed to providing comprehensive solutions and helping our clients navigate the complexities of the IT hardware landscape. With our expertise and dedication to sustainability, we’re the preferred partner for those seeking a reliable source of secondary IT devices. Contact us today to discover how Dodecaa can empower your business with quality IT hardware solutions.
            </p>
          </motion.div>

          {/* 4 Trust Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 pt-12 border-t border-gray-100">
            <div className="flex items-center gap-3.5 p-4 rounded-xl bg-[#F7F7F7]">
              <ShieldCheck size={28} className="text-[#0287CC] shrink-0" />
              <div>
                <h4 className="font-bold text-[#00114F] text-sm">30-Day Warranty</h4>
                <p className="text-xs text-gray-500">Every used product backed</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 p-4 rounded-xl bg-[#F7F7F7]">
              <RefreshCw size={28} className="text-[#0287CC] shrink-0" />
              <div>
                <h4 className="font-bold text-[#00114F] text-sm">PhoneCheck Certified</h4>
                <p className="text-xs text-gray-500">Strict diagnostic standards</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 p-4 rounded-xl bg-[#F7F7F7]">
              <Award size={28} className="text-[#0287CC] shrink-0" />
              <div>
                <h4 className="font-bold text-[#00114F] text-sm">Accurate Grading</h4>
                <p className="text-xs text-gray-500">Transparent condition reports</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 p-4 rounded-xl bg-[#F7F7F7]">
              <CheckCircle2 size={28} className="text-[#0287CC] shrink-0" />
              <div>
                <h4 className="font-bold text-[#00114F] text-sm">Global Logistics</h4>
                <p className="text-xs text-gray-500">Fast worldwide dispatch</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Why Choose Us / Our Process (6 Feature Cards) */}
      <WhyChooseUs />

      {/* 4. Logistics Partners */}
      <LogisticsPartners bgLight={true} />

      {/* 5. Get a Quote Section with Contact Form */}
      <section className="w-full py-16 lg:py-24 bg-[#F0F5FA]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-10">
            <span className="text-xs md:text-sm font-bold tracking-widest text-[#0287CC] uppercase block mb-2">
              REQUEST PRICING
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#00114F] tracking-tight">
              Get a Quote
            </h2>
          </div>

          <ContactForm
            formType="quote"
            title="Sales | Purchasing | Technical Support | General Inquiries"
            hasFileUpload={false}
          />
        </div>
      </section>
    </div>
  );
}
