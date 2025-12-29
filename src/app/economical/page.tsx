import React from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";

export default function EconomicalIrrigation() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "Economical Irrigation", active: true },
  ];

  const categories = [
    {
      title: "Drip Tubing & Fittings",
      icon: "/img/icon/icon-4.png",
      links: [
        { name: "Low Thickness Plain Laterals", href: "/products/low-thickness-plain" },
        { name: "Thin Wall Drip Line Cylindrical", href: "/products/thinwall-dripline" },
        { name: "Thin Wall Drip Tape Flat", href: "/products/thiwall-driptape" },
        { name: "Thin Wall Drip Tape Fittings", href: "/products/thin-wall-drip-tape-fittings" },
      ],
    },
    {
      title: "Vidhi Rain Pipe & Fittings",
      icon: "/img/icon/icon-4.png",
      links: [
        { name: "Vidhi Rain Pipe", href: "/products/rain-pipe" },
        { name: "Vidhi Rain Pipe Fittings", href: "/products/rain-pipe-fittings" },
      ],
    },
    {
      title: "Lay Flat Pipes",
      icon: "/img/icon/icon-4.png",
      links: [
        { name: "Lay Flat Pipe", href: "/products/layflat-pipe" },
      ],
    },
    {
      title: "Eco Sprinklers",
      icon: "/img/icon/icon-4.png",
      links: [
        { name: "Eco Rotating Sprinkler", href: "/products/eco-rotating-sprinkler" },
        { name: "Riser Pipes", href: "/products/riser-pipes-eco" },
      ],
    },
    {
      title: "EcoAcre Pro",
      icon: "/img/icon/icon-4.png",
      links: [
        { name: "EcoAcre Pro", href: "/products/ecoacre-pro" },
      ],
    },
  ];

  return (
    <main className="min-h-screen">
      <Navbar />
      <PageHeader
        title="Economical Irrigation"
        backgroundImage="/img/head-eco.png"
        breadcrumbs={breadcrumbs}
      />

      <section className="py-16 bg-[#cbddcb]/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-primary font-bold text-xl uppercase tracking-wider mb-2">Economical Irrigation</p>
            <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Products That We Offer For You
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition duration-500 border border-white/50 flex flex-col h-full">
                <div className="mb-6 flex justify-center">
                  <div className="w-24 h-24 relative bg-slate-50 rounded-full p-4">
                    <Image
                      src={cat.icon}
                      alt={cat.title}
                      fill
                      className="object-contain p-4"
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
