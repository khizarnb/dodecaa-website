import React from 'react';
import Hero from '../components/Hero';
import ProductShowcase from '../components/ProductShowcase';
import ProcessSteps from '../components/ProcessSteps';

export default function Products() {
  return (
    <div className="w-full flex flex-col min-h-screen">
      {/* 1. Page Hero Banner */}
      <Hero
        title="Products"
        subtitle="Premium Refurbished Electronics & IT Hardware"
        breadcrumb="Home / Products"
      />

      {/* 2. Complete 9 Product Categories Grid */}
      <ProductShowcase isFullPage={true} />

      {/* 3. Fast Quote, Logistics, Processing, Reporting */}
      <ProcessSteps className="bg-white border-t border-gray-100" />
    </div>
  );
}
