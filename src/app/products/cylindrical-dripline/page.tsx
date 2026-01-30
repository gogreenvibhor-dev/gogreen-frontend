import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";

export default function CylindricalDripline() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Drip Irrigation", href: "/dripirri" },
    { label: "Cylindrical Dripline/ Emitting Pipe", active: true },
  ];

  const features = [
    "Maintains uniform irrigation even on uneven terrain or long lateral lengths.",
    "Made from high-quality UV-resistant raw material for long life under sunlight exposure.",
    "Compatible with fertigation and commonly used agrochemicals.",
    "Emitting pipes (Drip lines) are made from 100% virgin raw materials.",
    "Wide range of discharge from 1 LPH to 8 LPH to suit field conditions.",
    "Excellent coefficient of variation (Less than 5%).",
    "Option of 2/4 outlets per emitter enhancing uniform distribution of water along the length.",
    "Clog resistant due to wide flow path of Emitters.",
    "Standard spacing of Emitters depending on individual customer requirement starting from 20 cm onwards.",
  ];

  const tables = [
    "https://d170mw2nhcb1v0.cloudfront.net/img/drip-table-2.png",
    "https://d170mw2nhcb1v0.cloudfront.net/img/drip-table-3.png",
    "https://d170mw2nhcb1v0.cloudfront.net/img/drip-table-4.png",
    "https://d170mw2nhcb1v0.cloudfront.net/img/drip-table-5.png",
    "https://d170mw2nhcb1v0.cloudfront.net/img/drip-table-6.png",
  ];

  return (
    <main className="min-h-screen">
      <Navbar />
      <PageHeader
        title="Cylindrical Dripline/ Emitting Pipe/ Inline Drip Tube - PC & NON PC"
        backgroundImage="https://d170mw2nhcb1v0.cloudfront.net/img/drip-head-2.png"
        breadcrumbs={breadcrumbs}
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-primary font-bold text-xl uppercase tracking-wider mb-2">Drip Irrigation</p>
            <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
            <h2 className="text-4xl font-bold text-primary italic">Drip Tubing</h2>
            <div className="w-full h-px bg-secondary mt-6"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
            <div className="relative group">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-whitesmoke">
                <Image
                  src="https://d170mw2nhcb1v0.cloudfront.net/img/Drip-2.jpg"
                  alt="Cylindrical Dripline"
                  width={700}
                  height={700}
                  className="w-full h-auto object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
            </div>

            <div className="space-y-8">
              <h1 className="text-3xl lg:text-4xl font-bold text-secondary border-b-4 border-secondary pb-4 inline-block leading-tight">
                Cylindrical Dripline/ Emitting Pipe/ Inline Drip Tube - PC & NON PC
              </h1>
              <ul className="space-y-4">
                {features.map((feature, i) => (
                  <li key={i} className="flex items-start text-primary font-medium text-lg leading-relaxed">
                    <span className="mr-3 mt-2 w-2 h-2 rounded-full bg-secondary shrink-0"></span>
                    {feature}
                  </li>
                ))}
              </ul>

              <h3 className="text-2xl font-bold text-secondary border-b-2 border-secondary pb-2 inline-block">
                Application
              </h3>
              <div className="bg-whitesmoke p-6 rounded-xl border-l-4 border-primary">
                <p className="text-xl text-primary font-semibold leading-relaxed">
                  Ideal for row crops, vegetables, horticultural plantations, orchards, vineyards, fruit crops, sugarcane, floriculture, banana, cotton, chillies, and all kinds of close-spaced field crops, as well as greenhouses and landscape irrigation.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-8 max-w-4xl mx-auto">
            {tables.map((src, index) => (
              <div key={index} className="rounded-xl overflow-hidden shadow-lg border border-gray-100">
                <Image
                  src={src}
                  alt={`Technical Data Table ${index + 1}`}
                  width={800}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a 
              href="/pdf/AM pdf.pdf" 
              target="_blank" 
              className="btn-primary-custom btn-ripple text-white px-10 py-4 rounded-full font-bold text-lg inline-flex items-center shadow-xl transition"
            >
              <i className="fa fa-file-pdf mr-3"></i> View PDF
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
