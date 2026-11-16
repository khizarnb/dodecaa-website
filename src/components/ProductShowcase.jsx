import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, Search, CheckCircle2 } from 'lucide-react';

export const allProducts = [
  {
    id: 'computer-parts',
    title: 'Computer Parts',
    subtitle: 'Top Manufacturers for Computer Parts',
    image: '/assets/Computer-Parts.webp',
    description: 'CPUs, motherboards, RAM modules, GPUs, power supplies, and thermal systems from Intel, AMD, NVIDIA, and Kingston.',
    badge: 'Popular',
  },
  {
    id: 'laptops',
    title: 'Laptops',
    subtitle: 'Top Manufacturers for Laptops',
    image: '/assets/Desktops-2.webp',
    description: 'Enterprise and consumer laptops from Apple, Dell, Lenovo, HP, and ASUS. Fully inspected, graded, and certified.',
    badge: 'Top Seller',
  },
  {
    id: 'mobile-devices',
    title: 'Mobile Devices',
    subtitle: 'Top Manufacturers for Mobile Devices',
    image: '/assets/Mobile-Devices.webp',
    description: 'Smartphones, iPhones, Samsung Galaxy, iPads, and tablets tested with PhoneCheck diagnostics and backed by warranty.',
    badge: 'High Demand',
  },
  {
    id: 'servers',
    title: 'Servers',
    subtitle: 'Top Manufacturers for Servers',
    image: '/assets/Computer-Parts-3.webp',
    description: 'Rackmount, blade, and tower servers from Dell PowerEdge, HP ProLiant, Cisco UCS, and Lenovo ThinkSystem.',
    badge: 'Enterprise',
  },
  {
    id: 'desktops',
    title: 'Desktops',
    subtitle: 'Top Manufacturers for Desktops',
    image: '/assets/Desktops-2.webp',
    description: 'All-in-one workstations, gaming rigs, and enterprise micro towers from Dell OptiPlex, HP EliteDesk, and Lenovo ThinkCentre.',
    badge: 'Refurbished',
  },
  {
    id: 'drives-storage',
    title: 'Drives & Storage',
    subtitle: 'Top Manufacturers for Drives & Storage',
    image: '/assets/Computer-Parts.webp',
    description: 'NVMe SSDs, SATA drives, enterprise SAS drives, NAS arrays, SAN storage, and tape storage solutions.',
    badge: 'Tested',
  },
  {
    id: 'computer-accessories',
    title: 'Computer Accessories',
    subtitle: 'Top Manufacturers for Computer Accessories',
    image: '/assets/Frame-6.webp',
    description: 'Docking stations, mechanical keyboards, ergonomic mice, webcams, headsets, adapters, and high-speed cables.',
    badge: 'In Stock',
  },
  {
    id: 'monitors',
    title: 'Monitors',
    subtitle: 'Top Manufacturers for Monitors',
    image: '/assets/Desktops-2.webp',
    description: '4K IPS displays, ultrawide productivity screens, dual-monitor office bundles from Dell, LG, Samsung, and ASUS.',
    badge: 'Grade A',
  },
  {
    id: 'wholesale-goods',
    title: 'Wholesale Goods',
    subtitle: 'Top Manufacturers for Wholesale Goods',
    image: '/assets/Computer-Parts-3.webp',
    description: 'Mixed wholesale pallets, carrier trade-in lots, tested B2B inventory, and custom bulk lots at distributor prices.',
    badge: 'Bulk Deals',
  },
];

export default function ProductShowcase({ isFullPage = false }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const displayList = isFullPage
    ? allProducts.filter(
        (p) =>
          p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : allProducts.slice(0, 3);

  return (
    <section className="w-full bg-[#F7F7F7] py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Banner Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs md:text-sm font-bold tracking-widest text-[#0287CC] uppercase block mb-2">
              Premium Refurbished
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-[42px] font-extrabold text-[#00114F] tracking-tight max-w-xl leading-tight">
              Your Trusted Hub for Quality Pre-Owned Electronics
            </h2>
          </div>

          {!isFullPage ? (
            <Link
              to="/products"
              className="inline-flex items-center gap-2 btn-dodecaa font-semibold px-8 py-3.5 rounded-lg text-base shadow-md shrink-0 hover:scale-105 transition-all"
            >
              <span>Explore</span>
              <ArrowUpRight size={18} />
            </Link>
          ) : (
            <div className="w-full md:w-72 relative">
              <input
                type="text"
                placeholder="Search categories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-300 bg-white text-sm focus:outline-hidden focus:border-[#0287CC] focus:ring-1 focus:ring-[#0287CC]"
              />
              <Search size={18} className="absolute left-3 top-3 text-gray-400" />
            </div>
          )}
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayList.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl border border-gray-200/70 transition-all flex flex-col group relative"
            >
              {/* Card Image Area with overlay */}
              <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-gray-900">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#00114F]/90 via-[#00114F]/30 to-transparent" />
                
                <span className="absolute top-4 left-4 bg-[#0287CC] text-white text-xs font-semibold px-3 py-1 rounded-full shadow-xs">
                  {product.badge}
                </span>

                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-bold text-white mb-1 drop-shadow-sm">
                    {product.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-200 font-medium">
                    {product.subtitle}
                  </p>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                  {product.description}
                </p>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <Link
                    to="/buy-from-us"
                    className="text-xs font-semibold uppercase tracking-wider text-[#0287CC] group-hover:text-[#00114F] flex items-center gap-1 transition-colors"
                  >
                    <span>Request Inventory Quote</span>
                    <ArrowUpRight size={16} />
                  </Link>

                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="text-xs text-gray-500 hover:text-[#0287CC] underline cursor-pointer"
                  >
                    Quick Specs
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quick Specs Modal */}
        {selectedProduct && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl relative"
            >
              <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                <h3 className="text-xl font-bold text-[#00114F]">
                  {selectedProduct.title}
                </h3>
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="text-gray-400 hover:text-gray-700 text-lg font-bold p-1 cursor-pointer"
                >
                  ✕
                </button>
              </div>

              <div className="py-4 space-y-3 text-sm text-gray-700">
                <p>{selectedProduct.description}</p>
                <div className="bg-[#F0F5FA] p-3 rounded-lg space-y-1 text-xs">
                  <div className="flex items-center gap-2 text-green-700 font-medium">
                    <CheckCircle2 size={14} /> 30-Day Dodecaa Hardware Warranty
                  </div>
                  <div className="flex items-center gap-2 text-green-700 font-medium">
                    <CheckCircle2 size={14} /> Rigorously tested & PhoneCheck certified
                  </div>
                  <div className="flex items-center gap-2 text-green-700 font-medium">
                    <CheckCircle2 size={14} /> Wholesale & pallet quantities available
                  </div>
                </div>
              </div>

              <div className="flex gap-3 pt-2">
                <Link
                  to="/buy-from-us"
                  className="flex-1 text-center btn-dodecaa py-2.5 rounded-lg text-sm font-semibold"
                >
                  Buy This Category
                </Link>
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="px-4 py-2.5 rounded-lg border border-gray-300 text-sm font-medium hover:bg-gray-50 cursor-pointer"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
}
