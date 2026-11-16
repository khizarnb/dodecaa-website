import React from 'react';
import Hero from '../components/Hero';
import Statistics from '../components/Statistics';
import ProcessSteps from '../components/ProcessSteps';
import AboutSection from '../components/AboutSection';
import PartnersCarousel from '../components/PartnersCarousel';
import WhyChooseUs from '../components/WhyChooseUs';
import LogisticsPartners from '../components/LogisticsPartners';
import ProductShowcase from '../components/ProductShowcase';

export default function Home() {
  return (
    <div className="w-full flex flex-col min-h-screen">
      {/* 1. Hero Section (Frame-1.webp) */}
      <Hero isHome={true} />

      {/* 2. Statistics Section (2M+, 50+, 500+, 20+) */}
      <Statistics />

      {/* 3. 4-Step Process (Fast Quote, Logistics, Processing, Reporting) */}
      <ProcessSteps />

      {/* 4. About Us Section (Frame-6.webp, At Dodecaa, Explore) */}
      <AboutSection />

      {/* 5. Brand Logos Carousel (9 Partners Marquee) */}
      <PartnersCarousel />

      {/* 6. Why Choose Us / Our Process (Frame-7.webp, 6 Feature Cards) */}
      <WhyChooseUs />

      {/* 7. Logistics Partners (DHL, FedEx, D&B, UPS, USPS) */}
      <LogisticsPartners />

      {/* 8. Premium Refurbished & 3 Featured Category Cards */}
      <ProductShowcase isFullPage={false} />
    </div>
  );
}
