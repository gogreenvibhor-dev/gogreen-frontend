import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vidhi Enterprises - Leading Drip Irrigation Manufacturer & Exporter Since 1983 | Company Profile",
  description: "Vidhi Enterprises: Premier manufacturer and exporter of drip irrigation systems, sprinklers, HDPE pipes, filters, and micro-irrigation solutions. Serving 50+ countries since 1983 with ISO-certified quality irrigation products.",
  keywords: [
    "drip irrigation manufacturer",
    "irrigation systems exporter",
    "HDPE pipes manufacturer",
    "sprinkler systems supplier",
    "micro irrigation company",
    "agricultural irrigation solutions",
    "drip irrigation India",
    "irrigation products exporter UAE",
    "precision irrigation manufacturer",
    "water management systems",
    "inline drippers manufacturer",
    "online emitters supplier",
    "irrigation filters manufacturer",
    "agricultural equipment exporter",
    "sustainable irrigation solutions"
  ],
  authors: [{ name: "Vidhi Enterprises" }],
  creator: "Vidhi Enterprises",
  publisher: "Vidhi Enterprises",
  openGraph: {
    title: "Vidhi Enterprises - Global Leader in Precision Irrigation Manufacturing",
    description: "Manufacturing excellence in drip irrigation since 1983. Trusted by farmers worldwide with ISO-certified products across 50+ countries.",
    url: "https://vidhienterprises.com/company-profile",
    siteName: "Vidhi Enterprises",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-company-profile.jpg",
        width: 1200,
        height: 630,
        alt: "Vidhi Enterprises - Leading Irrigation Solutions Manufacturer"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Vidhi Enterprises - Precision Irrigation Since 1983",
    description: "Leading manufacturer & exporter of drip irrigation systems, sprinklers, and agricultural water management solutions.",
    images: ["/og-company-profile.jpg"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  alternates: {
    canonical: "https://vidhienterprises.com/company-profile"
  }
};

const CompanyProfilePage = () => {
  // Structured Data for Organization
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Vidhi Enterprises",
    "description": "Leading manufacturer and exporter of drip irrigation systems, sprinklers, HDPE pipes, and precision irrigation solutions since 1983",
    "foundingDate": "1983",
    "url": "https://vidhienterprises.com",
    "logo": "https://vidhienterprises.com/logo.png",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN",
      "addressRegion": "India"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Sales",
      "availableLanguage": ["English", "Hindi"]
    },
    "sameAs": [
      "https://www.linkedin.com/company/vidhi-enterprises",
      "https://www.facebook.com/vidhienterprises"
    ],
    "areaServed": [
      "India", "UAE", "Qatar", "Oman", "Saudi Arabia", "Africa", "Nepal", "Middle East", "Asia"
    ],
    "knowsAbout": [
      "Drip Irrigation", "Sprinkler Systems", "HDPE Pipes", "Micro Irrigation", "Agricultural Water Management", "Precision Irrigation"
    ]
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ProductCollection",
    "name": "Vidhi Enterprises Irrigation Products",
    "description": "Complete range of precision irrigation products including drip systems, sprinklers, filters, and HDPE pipes",
    "manufacturer": {
      "@type": "Organization",
      "name": "Vidhi Enterprises"
    }
  };

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />

      <main className="min-h-screen bg-[#f8fdff]">
        <Navbar />

        {/* Hero Section */}
        <header className="relative h-[100vh] min-h-[700px] bg-gradient-to-br from-[#0f4c81]/95 to-[#00a0df]/90 flex items-center overflow-hidden" itemScope itemType="https://schema.org/Organization">
          <div className="absolute inset-0 z-0 pointer-events-none opacity-10">
            {/* Placeholder for floating bubbles effect if needed */}
          </div>
          <div className="container mx-auto px-4 text-center relative z-0 animate-fadeInUp">
            <h1 className="text-3xl lg:text-5xl font-bold text-white mb-6 drop-shadow-2xl font-heading" itemProp="name">
              Vidhi Enterprises - Leading Drip Irrigation Manufacturer Since 1983
            </h1>
            <p className="text-xl lg:text-2xl font-light text-white/95 mb-10 tracking-widest" itemProp="slogan">
              "INNOVATING PRECISION IRRIGATION & SUSTAINABLE WATER MANAGEMENT SINCE 1983"
            </p>
            <div className="text-lg lg:text-2xl max-w-5xl mx-auto text-white/90 leading-relaxed" itemProp="description">
              <p className="mb-4">
                <strong>Vidhi Enterprises</strong> is a global leader in manufacturing and exporting <strong>drip irrigation systems</strong>, <strong>sprinkler solutions</strong>, and <strong>precision irrigation products</strong>. Since 1983, we have been strengthening agriculture and water management worldwide through dependable, efficient, and high-performance irrigation components.
              </p>
              <p className="mb-4">
                As a trusted <strong>ISO-certified irrigation manufacturer</strong>, we specialize in producing complete ranges of drip laterals, inline and online drippers, sprinklers, HDPE pipes, filtration units, valves, and micro-irrigation accessories. Our products serve farmers across <strong>India, UAE, Middle East, Africa, Nepal, and Asia</strong>, adapting to diverse climatic and agricultural conditions.
              </p>
              <p>
                Built on engineering excellence, continuous R&D innovation, and uncompromising quality standards, Vidhi Enterprises is the preferred partner for farmers, irrigation distributors, EPC contractors, landscaping firms, and government agricultural projects worldwide.
              </p>
            </div>
          </div>
        </header>

        {/* What We Do Section */}
        <section className="py-24 animate-fadeInUp" aria-labelledby="products-services">
          <div className="container mx-auto px-4">
            <h2 id="products-services" className="text-5xl font-bold text-center text-[#0f4c81] mb-20 relative after:content-[''] after:block after:w-44 after:h-1.5 after:bg-gradient-to-r after:from-[#0f4c81] after:to-[#00a0df] after:mx-auto after:mt-4 font-heading">
              Premium Irrigation Products & Services - Complete Solutions for Modern Agriculture
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8" itemScope itemType="https://schema.org/ItemList">
              {[
                { icon: "fa-tint", title: "Drip Irrigation Pipes & Fittings", desc: "High-quality drip laterals and fittings" },
                { icon: "fa-snowflake", title: "Inline & Online Emitters", desc: "Precision water distribution emitters" },
                { icon: "fa-water", title: "Sprinklers & Rainguns", desc: "Efficient sprinkler irrigation systems" },
                { icon: "fa-filter", title: "Filters (Screen, Disc, Hydrocyclone)", desc: "Advanced irrigation filtration systems" },
                { icon: "fa-grip-lines", title: "HDPE Pipes & Fittings", desc: "Durable HDPE pipe solutions" },
                { icon: "fa-sliders-h", title: "Valves & Control Devices", desc: "Reliable irrigation control systems" },
                { icon: "fa-tools", title: "Micro-Irrigation Tools & Accessories", desc: "Complete micro-irrigation accessories" },
              ].map((item, i) => (
                <article key={i} className="bg-white p-10 rounded-[28px] shadow-xl text-center group hover:-translate-y-4 hover:shadow-2xl transition-all duration-500 border border-blue-50" itemProp="itemListElement" itemScope itemType="https://schema.org/Product">
                  <i className={`fas ${item.icon} text-5xl text-[#00a0df] mb-6 group-hover:text-[#0f4c81] transition-colors`} aria-hidden="true"></i>
                  <h3 className="text-xl font-bold text-[#0f4c81]" itemProp="name">{item.title}</h3>
                  <meta itemProp="description" content={item.desc} />
                </article>
              ))}
            </div>
            <p className="text-center text-xl mt-16 text-gray-600">
              Each <strong>irrigation product</strong> is precision-engineered to deliver <strong>high water efficiency</strong>, extended field life, and consistent performance across agricultural, horticultural, greenhouse, and landscape irrigation applications.
            </p>
          </div>
        </section>

        {/* Export Capabilities Section */}
        <section className="py-24 bg-gradient-to-br from-gray-50 to-white" aria-labelledby="export-capabilities">
          <div className="container mx-auto px-4">
            <h2 id="export-capabilities" className="text-5xl font-bold text-center text-[#0f4c81] mb-12 font-heading">Global Irrigation Export Capabilities - Serving 50+ Countries Worldwide</h2>
            <p className="text-center text-xl text-gray-700 max-w-4xl mx-auto mb-16">
              As a leading <strong>irrigation products exporter</strong>, we maintain a robust global supply network supported by dedicated export services, ISO-certified quality, and reliable delivery schedules to <strong>Middle East, Africa, Asia, and beyond</strong>.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                { icon: "fa-users", title: "Dedicated Export Team" },
                { icon: "fa-box", title: "Customized Packaging" },
                { icon: "fa-shipping-fast", title: "Flexible Logistics (FCL, LCL, Air)" },
                { icon: "fa-certificate", title: "Country-Specific Compliance" },
                { icon: "fa-clock", title: "On-Time Delivery" },
                { icon: "fa-globe", title: "Global Network" },
              ].map((item, i) => (
                <div key={i} className="bg-white p-8 rounded-2xl shadow-lg text-center hover:-translate-y-2 transition-all duration-300 border border-blue-100">
                  <i className={`fas ${item.icon} text-5xl text-[#00a0df] mb-6`}></i>
                  <h3 className="text-lg font-bold text-[#0f4c81]">{item.title}</h3>
                </div>
              ))}
            </div>
            <p className="text-center text-lg mt-12 text-gray-600">
              Our <strong>drip irrigation systems</strong> and <strong>sprinkler products</strong> are successfully deployed across <strong>UAE, Qatar, Oman, Saudi Arabia, Kuwait, Kenya, Tanzania, Nigeria, Nepal, Bangladesh, and 40+ more countries</strong>, supporting sustainable agriculture in diverse climatic zones.
            </p>
          </div>
        </section>

        {/* Manufacturing Section */}
        <section className="py-24 bg-blue-50/30" aria-labelledby="manufacturing-capabilities">
          <div className="container mx-auto px-4">
            <h2 id="manufacturing-capabilities" className="text-5xl font-bold text-center text-[#0f4c81] mb-20 font-heading">Advanced Manufacturing Facilities - ISO-Certified Production Excellence</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: "fa-industry", title: "High-Precision Extrusion Lines" },
                { icon: "fa-cogs", title: "Advanced Moulding & Injection Machinery" },
                { icon: "fa-flask", title: "In-House Tool Room & R&D" },
                { icon: "fa-vial", title: "Comprehensive Quality Testing Lab" },
                { icon: "fa-search", title: "Strict Inspection & Calibration" },
                { icon: "fa-certificate", title: "Certified International Standards" },
              ].map((item, i) => (
                <div key={i} className="bg-white p-10 rounded-[28px] shadow-lg text-center hover:-translate-y-2 transition-all duration-300">
                  <i className={`fas ${item.icon} text-5xl text-[#00a0df] mb-6`}></i>
                  <h3 className="text-xl font-bold text-[#0f4c81]">{item.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Promise Section */}
        <section className="py-32 bg-gradient-to-br from-[#0f4c81] to-[#00a0df] text-white text-center relative overflow-hidden" aria-labelledby="company-mission">
          <div className="container mx-auto px-4 relative z-10">
            <h2 id="company-mission" className="text-5xl font-bold mb-10 text-white font-heading">Our Mission - Empowering Sustainable Agriculture Through Smart Irrigation</h2>
            <p className="text-2xl lg:text-3xl max-w-4xl mx-auto leading-relaxed font-light">
              We believe <strong>precision irrigation</strong> is not just infrastructure—it is the lifeline of crops, communities, and sustainable food production.
              <br /><br />
              Our mission is to enable <strong>water-efficient agriculture</strong>, reduce water wastage by up to 60%, and support farming livelihoods through robust engineering, <strong>ISO-certified irrigation products</strong>, and responsive technical support worldwide.
            </p>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-24" aria-labelledby="core-values">
          <div className="container mx-auto px-4">
            <h2 id="core-values" className="text-5xl font-bold text-center text-[#0f4c81] mb-20 font-heading">Our Core Values - Quality, Innovation & Sustainability</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {[
                { icon: "fa-gem", title: "Quality First", desc: "No compromise on material, performance or durability" },
                { icon: "fa-lightbulb", title: "Innovation", desc: "Continuous improvement in design and processes" },
                { icon: "fa-handshake", title: "Integrity", desc: "Transparency and long-term partnerships" },
                { icon: "fa-leaf", title: "Sustainability", desc: "Water and energy efficiency" },
                { icon: "fa-heart", title: "Customer Commitment", desc: "Reliability, support and value delivery" },
              ].map((item, i) => (
                <div key={i} className="bg-white p-8 rounded-2xl shadow-md border-t-4 border-[#00a0df] text-center hover:shadow-xl transition-all">
                  <i className={`fas ${item.icon} text-4xl text-[#00a0df] mb-4`}></i>
                  <h3 className="text-lg font-bold text-[#0f4c81] mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who We Serve Section */}
        <section className="py-24 bg-blue-50/30" aria-labelledby="target-customers">
          <div className="container mx-auto px-4">
            <h2 id="target-customers" className="text-5xl font-bold text-center text-[#0f4c81] mb-20 font-heading">Our Global Clientele - Trusted by Industry Leaders Worldwide</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                { icon: "fa-store", title: "Irrigation Distributors & Dealers" },
                { icon: "fa-hard-hat", title: "EPC & Landscaping Contractors" },
                { icon: "fa-landmark", title: "Government & NGO Projects" },
                { icon: "fa-tractor", title: "Agro-Input Suppliers" },
                { icon: "fa-seedling", title: "Greenhouses & Nurseries" },
                { icon: "fa-users", title: "Farmers & Community Networks" },
              ].map((item, i) => (
                <div key={i} className="bg-white p-10 rounded-2xl shadow-lg text-center hover:-translate-y-2 transition-all duration-300">
                  <i className={`fas ${item.icon} text-5xl text-[#00a0df] mb-6`}></i>
                  <h3 className="text-xl font-bold text-[#0f4c81]">{item.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default CompanyProfilePage;