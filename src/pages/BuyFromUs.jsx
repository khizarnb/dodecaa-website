import React from 'react';
import Hero from '../components/Hero';
import ContactForm from '../components/ContactForm';
import ContactSidebar from '../components/ContactSidebar';
import { ShoppingBag, CheckCircle, FileSpreadsheet } from 'lucide-react';

export default function BuyFromUs() {
  return (
    <div className="w-full flex flex-col min-h-screen">
      {/* 1. Page Hero */}
      <Hero
        title="Experience Unmatched Quality & Service"
        subtitle="Buy from us"
        breadcrumb="Home / Buy from us"
      />

      {/* 2. Main Content & Form with File Upload */}
      <section className="w-full py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left 7 cols: Intro + Upload Form */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs md:text-sm font-bold tracking-widest text-[#0287CC] uppercase block mb-1">
                  WHOLESALE PROCUREMENT
                </span>
                <h2 className="text-3xl font-extrabold text-[#00114F] mb-3">
                  Contact us
                </h2>
                <p className="text-base text-gray-700 leading-relaxed bg-[#F0F5FA] p-4 rounded-xl border-l-4 border-[#0287CC]">
                  Looking to buy? If you have a list of products, simply submit your request via email. Complete the form below to get started.
                </p>
              </div>

              {/* Form with File Upload for XLSX/XLS/CSV */}
              <ContactForm
                formType="buy"
                title=""
                hasFileUpload={true}
              />
            </div>

            {/* Right 5 cols: Value propositions & Contact Info */}
            <div className="lg:col-span-5 space-y-6">
              <ContactSidebar showOfficesDesc={false} />

              {/* Buying Perks Card */}
              <div className="bg-[#F7F7F7] p-6 rounded-2xl border border-gray-200/80">
                <h4 className="font-bold text-[#00114F] text-lg mb-4 flex items-center gap-2">
                  <ShoppingBag size={20} className="text-[#0287CC]" />
                  Why Buy From Dodecaa?
                </h4>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-green-600 shrink-0 mt-0.5" />
                    <span>Consistent volume directly sourced from major carriers & OEMs</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-green-600 shrink-0 mt-0.5" />
                    <span>30-Day functional warranty on all pre-owned hardware</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-green-600 shrink-0 mt-0.5" />
                    <span>Strict cosmetic grading and comprehensive PhoneCheck diagnostics</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-green-600 shrink-0 mt-0.5" />
                    <span>Fast global shipping with free insured courier collection</span>
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
