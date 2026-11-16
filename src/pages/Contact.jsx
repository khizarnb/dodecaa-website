import React from 'react';
import Hero from '../components/Hero';
import ContactForm from '../components/ContactForm';
import ContactSidebar from '../components/ContactSidebar';
import MapSection from '../components/MapSection';
import ProcessSteps from '../components/ProcessSteps';

export default function Contact() {
  return (
    <div className="w-full flex flex-col min-h-screen">
      {/* 1. Page Hero */}
      <Hero
        title="Get Your Best Quote Now!"
        subtitle="Contact Us"
        breadcrumb="Home / Contact Us"
      />

      {/* 2. Main Contact Form & Sidebar Section */}
      <section className="w-full py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left 7 cols: Form */}
            <div className="lg:col-span-7">
              <div className="mb-6">
                <span className="text-xs md:text-sm font-bold tracking-widest text-[#0287CC] uppercase block mb-1">
                  GET IN TOUCH
                </span>
                <h2 className="text-3xl font-extrabold text-[#00114F]">
                  Contact us
                </h2>
              </div>
              <ContactForm
                formType="contact"
                title="Sales | Purchasing | Technical Support | General Inquiries"
                hasFileUpload={false}
              />
            </div>

            {/* Right 5 cols: Contact Sidebar & Office Info */}
            <div className="lg:col-span-5">
              <ContactSidebar showOfficesDesc={true} />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Google Maps Integration */}
      <MapSection />

      {/* 4. Fast Quote, Logistics, Processing, Reporting */}
      <ProcessSteps className="border-t border-gray-100" />
    </div>
  );
}
