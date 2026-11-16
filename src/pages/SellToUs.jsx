import React from 'react';
import Hero from '../components/Hero';
import ContactForm from '../components/ContactForm';
import ContactSidebar from '../components/ContactSidebar';
import { DollarSign, CheckCircle, ShieldCheck } from 'lucide-react';

export default function SellToUs() {
  return (
    <div className="w-full flex flex-col min-h-screen">
      {/* 1. Page Hero */}
      <Hero
        title="Seamless & Profitable Experience"
        subtitle="Sell to us"
        breadcrumb="Home / Sell to us"
      />

      {/* 2. Main Content & Form with File Upload */}
      <section className="w-full py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left 7 cols: Intro + Upload Form */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs md:text-sm font-bold tracking-widest text-[#0287CC] uppercase block mb-1">
                  ENTERPRISE ASSET LIQUIDATION
                </span>
                <h2 className="text-3xl font-extrabold text-[#00114F] mb-3">
                  Contact us
                </h2>
                <p className="text-base text-gray-700 leading-relaxed bg-[#F0F5FA] p-4 rounded-xl border-l-4 border-[#0287CC]">
                  Looking to sell? If you have a list of products, simply submit your request via email. Complete the form below to get started.
                </p>
              </div>

              {/* Form with File Upload for XLSX/XLS/CSV */}
              <ContactForm
                formType="sell"
                title=""
                hasFileUpload={true}
              />
            </div>

            {/* Right 5 cols: Seller Benefits & Contact Info */}
            <div className="lg:col-span-5 space-y-6">
              <ContactSidebar showOfficesDesc={false} />

              {/* Seller Benefits Card */}
              <div className="bg-[#F7F7F7] p-6 rounded-2xl border border-gray-200/80">
                <h4 className="font-bold text-[#00114F] text-lg mb-4 flex items-center gap-2">
                  <DollarSign size={20} className="text-[#0287CC]" />
                  Why Sell To Dodecaa?
                </h4>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-green-600 shrink-0 mt-0.5" />
                    <span>Fast quotes within 24 hours of list submission</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-green-600 shrink-0 mt-0.5" />
                    <span>Certified data erasure & destruction certificates issued</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-green-600 shrink-0 mt-0.5" />
                    <span>Prompt payment issued within 48 hours of audit</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-green-600 shrink-0 mt-0.5" />
                    <span>Free and fully insured courier collection worldwide</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
