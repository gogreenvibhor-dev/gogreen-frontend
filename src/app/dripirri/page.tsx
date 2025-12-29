import React from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";

export default function DripIrrigation() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "Drip Irrigation", active: true },
  ];

  const categories = [
    {
      title: "Drip Tubing",
      icon: "/img/DI-1.png",
      links: [
        { name: "Plain Lateral/ Polytubes", href: "/products/plain-lateral" },
        { name: "Cylindrical Dripline/ Emitting Pipe/ Inline Drip Tube - PC & NON PC", href: "/products/cylindrical-dripline" },
        { name: "Flat Dripline PC & NON-PC", href: "/products/flat-dripline" },
      ],
    },
    {
      title: "Emitting Devices",
      icon: "/img/DI-2.png",
      links: [
        { name: "Online PC Dripper/Emitters", href: "/products/online-pc-dripper" },
        { name: "Online Emitters/Dripper NPC TurboKey", href: "/products/online-emitters" },
        { name: "Adjustable Dripper", href: "/products/adjustable-dripper" },
        { name: "Adjustable Bubbler With Filter And Take (0-420 LPH)", href: "/products/adjustable-bubbler" },
        { name: "2-Way/4-Way Connector", href: "/products/2-4-way-connector" },
        { name: "Pot Dripper/Arrow Dripper", href: "/products/arrow-dripper" },
        { name: "5.5 mm Spagetty/ Distribution Pipes / Micro Tube", href: "/products/5-5mm-tube" },
        { name: "Anti Bug Cup", href: "/products/anti-bug" },
        { name: "Misters", href: "/products/misters" },
        { name: "Micro Sprinkler", href: "/products/micro-sprinkler" },
        { name: "1-Way Foggers", href: "/products/one-way-fogger" },
        { name: "4-Way Foggers", href: "/products/four-way-fogger" },
      ],
    },
    {
      title: "Drip Fittings",
      icon: "/img/DI-3.png",
      links: [
        { name: "Drip Lateral Fittings", href: "/products/drip-lateral-fittings" },
      ],
    },
    {
      title: "Filtration",
      icon: "/img/DI-4.png",
      links: [
        { name: "Y-Type Filter", href: "/products/y-type-filter" },
        { name: "T-Type Filter", href: "/products/t-type-filter" },
        { name: "How to Choose the Right Irrigation Filter", href: "/blog/choose-right-filter" },
      ],
    },
    {
      title: "Fertigation Devices",
      icon: "/img/DI-5.png",
      links: [
        { name: "Ventury Injector", href: "/products/ventury-injector" },
      ],
    },
    {
      title: "Control Valves & ACC",
      icon: "/img/DI-6.png",
      links: [
        { name: "Air Release Valve", href: "/products/air-release-valve" },
        { name: "Single Union Ball Valve", href: "/products/single-union-ball-valve" },
        { name: "Double Union Ball Valve", href: "/products/double-union-ball-valve" },
        { name: "Pressure Relief Valve", href: "/products/pressure-relief-valve" },
        { name: "Pressure Gauge", href: "/products/pressure-gauge" },
      ],
    },
  ];

  return (
    <main className="min-h-screen">
      <Navbar />
      <PageHeader
        title="Drip Irrigation"
        backgroundImage="/img/Drip-header.png"
        breadcrumbs={breadcrumbs}
      />

      <section className="py-16 bg-[#cbddcb]/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-primary font-bold text-xl uppercase tracking-wider mb-2">Drip Irrigation</p>
            <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Products That We Offer For You
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition duration-500 border border-white/50 flex flex-col h-full">
                <div className="mb-6 flex justify-center">
                  <div className="w-24 h-24 relative">
                    <Image
                      src={cat.icon}
                      alt={cat.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-[#01015a] mb-6 text-center border-b pb-4">
                  {cat.title}
                </h3>
                <ul className="space-y-3 flex-1">
                  {cat.links.map((link, i) => (
                    <li key={i} className="group">
                      <Link 
                        href={link.href}
                        className="text-slate-700 hover:text-secondary font-semibold transition flex items-start"
                      >
                        <i className="fa fa-caret-right mt-1.5 mr-2 text-primary opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition"></i>
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
