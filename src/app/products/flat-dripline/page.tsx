import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";

export default function FlatDripline() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Drip Irrigation", href: "/dripirri" },
    { label: "Flat Dripline PC & NON-PC", active: true },
  ];

  const features = [
    "Uniform water distribution across all plants.",
    "Designed for efficient irrigation in uneven terrains and long laterals.",
    "Manufactured from high-quality UV-resistant material for longer life.",
    "Compact and durable dripper design minimizes clogging.",
    "Easy installation and suitable for both surface and subsurface irrigation.",
    "Ensures high performance even under varying pressure conditions.",
    "Wide range of discharge from 1.2 LPH to 4 LPH.",
    "Excellent coefficient of variation (Less than 5%)",
    "Standard spacing of Emitters depending on field condition starting from 20 cm onwards.",
  ];

  const tableImages = [
    "https://d170mw2nhcb1v0.cloudfront.net/img/drip-table-7.png",
    "https://d170mw2nhcb1v0.cloudfront.net/img/drip-table-8.png",
    "https://d170mw2nhcb1v0.cloudfront.net/img/drip-table-9.png",
    "https://d170mw2nhcb1v0.cloudfront.net/img/drip-table-10.png",
    "https://d170mw2nhcb1v0.cloudfront.net/img/drip-table-11.png",
  ];

  return (
    <main className="min-h-screen">
      <Navbar />
      <PageHeader
        title="Flat Dripline PC & NON-PC"
        backgroundImage="https://d170mw2nhcb1v0.cloudfront.net/img/drip-head-3.png"
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
                  src="https://d170mw2nhcb1v0.cloudfront.net/img/Drip-3.jpg"
                  alt="Flat Dripline"
                  width={750}
                  height={700}
                  className="w-full h-auto object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
            </div>

            <div className="space-y-8">
              <h1 className="text-3xl lg:text-4xl font-bold text-secondary border-b-4 border-secondary pb-4 inline-block leading-tight">
                Flat Dripline PC & NON-PC
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
              <div className="bg-whitesmoke p-6 rounded-xl border-l-4 border-primary italic">
                <p className="text-xl text-primary font-semibold leading-relaxed">
                  Ideal for row crops, vegetables, horticultural plantations, orchards, vineyards, fruit crops, sugarcane, floriculture, banana, cotton, chillies, and all kinds of close-spaced field crops, as well as greenhouses and landscape irrigation.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-12 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-primary mb-8 underline">Technical Specifications</h2>
            {tableImages.map((src, idx) => (
              <div key={idx} className="rounded-xl overflow-hidden shadow-lg border border-gray-100 bg-white">
                <Image
                  src={src}
                  alt={`Technical Data Table ${idx + 7}`}
                  width={800}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
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
