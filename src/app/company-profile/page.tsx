"use client";

import React, { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function CompanyProfile() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slideUpFade");
            entry.target.classList.remove("opacity-0", "translate-y-10");
            observerRef.current?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".reveal-on-scroll");
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  const cardData = [
    {
      title: "What We Do",
      items: [
        { icon: "fa-tint", text: "Drip Irrigation Pipes & Fittings" },
        { icon: "fa-snowflake", text: "Inline & Online Emitters" },
        { icon: "fa-water", text: "Sprinklers & Rainguns" },
        { icon: "fa-filter", text: "Filters (Screen, Disc, Hydrocyclone)" },
        { icon: "fa-slash", text: "HDPE Pipes & Fittings" }, // Closest to fa-pipe
        { icon: "fa-toggle-on", text: "Valves & Control Devices" }, // Closest to fa-valve
        { icon: "fa-tools", text: "Micro-Irrigation Tools & Accessories" },
      ],
      footer: "Our products are designed to deliver maximum water efficiency, long field life, and dependable performance across diverse agricultural and landscape environments.",
    },
    {
      title: "Our Manufacturing Strength",
      items: [
        { icon: "fa-industry", text: "High-Precision Extrusion Lines" },
        { icon: "fa-cogs", text: "Advanced Moulding & Injection Machinery" },
        { icon: "fa-flask", text: "In-House Tool Room & R&D" },
        { icon: "fa-vial", text: "Comprehensive Quality Testing Lab" },
        { icon: "fa-search", text: "Strict Inspection & Calibration" },
        { icon: "fa-certificate", text: "Certified International Standards" },
      ],
      footer: "Each component is engineered with precision, ensuring durability, uniform flow, and superior field performance.",
    },
    {
      title: "Export Capabilities",
      items: [
        { icon: "fa-users", text: "Dedicated Export Team" },
        { icon: "fa-box", text: "Customized Packaging & Palletization" },
        { icon: "fa-plane", text: "Flexible Shipping (FCL, LCL, Air)" },
        { icon: "fa-file-alt", text: "Country-Specific Compliance" },
        { icon: "fa-clock", text: "Consistent On-Time Delivery" },
      ],
      footer: "Our products are trusted in Qatar, Oman, UAE, Africa, Nepal, and many emerging agricultural markets.",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Header */}
      <header className="relative min-h-[700px] h-screen bg-gradient-to-br from-[#0f4c81] to-[#00a0df] text-white flex items-center overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1000 1000'%3E%3Ccircle cx='200' cy='200' r='80' fill='white'/%3E%3Ccircle cx='800' cy='600' r='120' fill='white'/%3E%3C/svg%3E")`,
            animation: "floatBubbles 25s linear infinite",
          }}
        ></div>
        <div className="container mx-auto px-4 z-10 text-center animate-slideUpFade">
          <h1 className="text-5xl md:text-8xl font-bold mb-6 font-serif tracking-tight">
            Company Profile
          </h1>
          <p className="text-xl md:text-3xl font-light mb-8 opacity-90 tracking-widest uppercase">
            “INNOVATING PRECISION IRRIGATION SINCE 1983”
          </p>
          <div className="max-w-4xl mx-auto space-y-6 text-lg md:text-xl leading-relaxed opacity-0 animate-slideUpFade delay-500">
            <p>
              At Vidhi Enterprises, we are committed to strengthening global agriculture and water-management systems through reliable, efficient, and high-quality irrigation components.
            </p>
            <p>
              Built on a strong foundation of engineering expertise, innovation, and uncompromising quality, we have grown into a trusted partner for farmers, distributors, irrigation companies, EPC contractors, landscaping firms, and government projects around the world.
            </p>
          </div>
        </div>
        <style jsx>{`
          @keyframes floatBubbles {
            from { transform: translateY(0); }
            to { transform: translateY(-1000px); }
          }
        `}</style>
      </header>

      {/* Dynamic Sections */}
      {cardData.map((section, idx) => ( section.title !== "Export Capabilities" ? (
        <section key={idx} className="py-24 bg-slate-50 reveal-on-scroll opacity-0 translate-y-10 transition-all duration-1000">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0f4c81] mb-12 font-serif relative inline-block after:content-[''] after:absolute after:-bottom-4 after:left-1/2 after:-translate-x-1/2 after:w-32 after:h-1 after:bg-[#00a0df]">
              {section.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
              {section.items.map((item, i) => (
                <div key={i} className="bg-white p-10 rounded-3xl shadow-xl hover:-translate-y-2 transition-all duration-500 group border border-slate-100">
                  <i className={`fas ${item.icon} text-5xl text-[#00a0df] mb-6 group-hover:scale-110 transition-transform`}></i>
                  <h3 className="text-xl font-bold text-[#0f4c81]">{item.text}</h3>
                </div>
              ))}
            </div>
            <p className="mt-12 text-lg text-slate-600 max-w-3xl mx-auto italic font-medium">
              {section.footer}
            </p>
          </div>
        </section>
      ) : (
        <section key={idx} className="py-24 bg-white reveal-on-scroll opacity-0 translate-y-10 transition-all duration-1000">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0f4c81] mb-12 font-serif relative inline-block after:content-[''] after:absolute after:-bottom-4 after:left-1/2 after:-translate-x-1/2 after:w-32 after:h-1 after:bg-[#00a0df]">
              {section.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
              {section.items.map((item, i) => (
                <div key={i} className="bg-slate-50 p-10 rounded-3xl shadow-lg hover:-translate-y-2 transition-all duration-500 group border border-slate-100">
                  <i className={`fas ${item.icon} text-5xl text-[#00a0df] mb-6 group-hover:scale-110 transition-transform`}></i>
                  <h3 className="text-xl font-bold text-[#0f4c81]">{item.text}</h3>
                </div>
              ))}
            </div>
            <p className="mt-12 text-lg text-slate-600 max-w-3xl mx-auto italic font-medium">
              {section.footer}
            </p>
          </div>
        </section>
      )))}

      {/* Promise Section */}
      <section className="relative py-32 bg-gradient-to-r from-[#0f4c81] to-[#00a0df] text-white text-center overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 reveal-on-scroll opacity-0 translate-y-10 transition-all duration-1000">
          <h2 className="text-4xl md:text-5xl font-bold mb-10 font-serif text-white after:bg-white">Our Promise</h2>
          <p className="text-xl md:text-2xl font-light leading-relaxed max-w-4xl mx-auto">
            We believe irrigation is more than a system — it is the <strong>life source of crops</strong>.<br /><br />
            Our mission is to enable sustainable agriculture, reduce water wastage, and support communities with reliable irrigation solutions backed by strong engineering and customer service.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-slate-50 reveal-on-scroll opacity-0 translate-y-10 transition-all duration-1000">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0f4c81] mb-12 font-serif after:bg-[#00a0df]">Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mt-16">
            {[
              { icon: "fa-gem", title: "Quality First", desc: "No compromise on material, performance, or durability." },
              { icon: "fa-lightbulb", title: "Innovation", desc: "Continuous improvement in design and processes." },
              { icon: "fa-handshake", title: "Integrity", desc: "Transparent practices and long-term relationships." },
              { icon: "fa-leaf", title: "Sustainability", desc: "Products that optimize water and energy efficiency." },
              { icon: "fa-heart", title: "Customer Commitment", desc: "Delivering value, reliability, and support." },
            ].map((v, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-md border border-slate-100 group">
                <i className={`fas ${v.icon} text-4xl text-[#00a0df] mb-4 group-hover:text-[#0f4c81] transition-colors`}></i>
                <h3 className="text-lg font-bold text-[#0f4c81] mb-2">{v.title}</h3>
                <p className="text-sm text-slate-500 leading-snug">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-24 bg-white reveal-on-scroll opacity-0 translate-y-10 transition-all duration-1000">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0f4c81] mb-12 font-serif after:bg-[#00a0df]">Who We Serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-16">
            {[
              { icon: "fa-store", text: "Irrigation Distributors" },
              { icon: "fa-hard-hat", text: "EPC & Contractors" },
              { icon: "fa-building", text: "Government & NGO" },
              { icon: "fa-seedling", text: "Agro Input Suppliers" },
              { icon: "fa-home", text: "Greenhouses" },
              { icon: "fa-tractor", text: "Farmers" },
            ].map((s, i) => (
              <div key={i} className="flex flex-col items-center group">
                <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-[#00a0df] group-hover:text-white transition-all duration-300 shadow-sm border border-slate-100">
                  <i className={`fas ${s.icon} text-2xl`}></i>
                </div>
                <h4 className="text-sm font-bold text-[#0f4c81]">{s.text}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
