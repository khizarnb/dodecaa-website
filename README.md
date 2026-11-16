# Dodecaa Website Recreation

A high-fidelity recreation of the complete [Dodecaa](https://dodecaa.com/) website built with React 19, Vite, Tailwind CSS v4, Framer Motion, React Router v7, and Lucide Icons.

## 🚀 Pages Included

1. **Homepage (`/`)**:
   - Two-tier header with brand logo & `#00114F` navigation bar with active underline indicators
   - Hero banner with original `Frame-1.webp` background
   - Statistics section:
     - 2 Million+ Mobile Devices Processed Yearly
     - 50+ Countries Serviced on 6 Continents
     - 500+ Retail and Wholesale Partners Globally
     - 20+ Years in Business
   - 4-Step Process Section (Fast Quote, Logistics, Processing, Reporting) with authentic `ICONS-01` to `ICONS-04`
   - About Us Section with `Frame-6.webp` graphic and exploration CTA
   - Brand Partners infinite marquee carousel featuring all 9 partner logos
   - "Why Choose Us / Our Process" with `Frame-7.webp` background and 6 feature cards:
     - Inventory Flow
     - Long Term Relationships
     - Global Distributors
     - Well Qualified Staff
     - Accurate Grading
     - Warranty & Quality Assurance
   - "Fast & Secure / Our Partners" logistics badges (DHL, FedEx, Dun & Bradstreet, UPS, USPS)
   - "Premium Refurbished" showcase with featured categories (Computer Parts, Laptops, Mobile Devices)
   - Pre-Footer CTA banner & 4-column footer with contact details and scroll-to-top

2. **About Us (`/about-us`)**:
   - Hero banner with typography & gradients
   - Complete company story, IT hardware distribution expertise, and sustainability content
   - 4 Trust highlights (30-day warranty, PhoneCheck certified, Accurate grading, Global logistics)
   - Why Choose Us (6 feature cards) & Logistics Partners
   - "Get a Quote" section with interactive contact form

3. **Products (`/products`)**:
   - Hero banner and interactive category search filter
   - All 9 hardware categories:
     - Computer Parts
     - Laptops
     - Mobile Devices
     - Servers
     - Desktops
     - Drives & Storage
     - Computer Accessories
     - Monitors
     - Wholesale Goods
   - Quick specs modal & quote request links
   - 4-Step Process Section & Pre-footer CTA

4. **Contact Us (`/contact-us`)**:
   - "Get Your Best Quote Now!" hero
   - Contact form with frontend validation (Full Name, Email, Phone, Website, Company, Message)
   - Contact information & business hours
   - Office location description
   - Google Maps integration of Stafford, TX headquarters
   - 4-Step Process Section & Pre-footer CTA

5. **Buy From Us (`/buy-from-us`)**:
   - "Experience Unmatched Quality & Service" hero
   - Procurement form with drag-and-drop file upload supporting `.xlsx`, `.xls`, `.csv` files
   - Buyer value propositions & contact sidebar

6. **Sell To Us (`/sell-to-us`)**:
   - "Seamless & Profitable Experience" hero
   - Asset liquidation form with `.xlsx`, `.xls`, `.csv` file upload
   - Seller benefits (24h quotes, payment in 48h, data destruction certificates) & contact sidebar

## 🛠️ Technology Stack

- **React 19**
- **Vite 6**
- **Tailwind CSS v4** with `@tailwindcss/vite`
- **Framer Motion** for smooth transitions and scroll animations
- **React Router v7** for SPA routing and aliases
- **Lucide React** for icons
- **Original Assets**: All original logos, illustrations, graphics, and partner badges preserved

## 💻 Running the Application

```bash
# Install dependencies
npm install

# Start Vite development server
npm run dev

# Build for production
npm run build

# Preview production build (runs on http://localhost:4173)
npm run preview
```
