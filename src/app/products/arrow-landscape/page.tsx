import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";

export default function ArrowLandscape() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Landscape Irrigation", href: "/landscape" },
    { label: "Pot Dripper/Arrow Dripper", active: true },
  ];

  const features = [
    "Ideal for watering planter boxes, pots, hanging baskets, nursery grow bags, and vertical garden trays.",
    "Provides a discharge of 3.5 LPH at 1 Kg/cm² ensuring efficient irrigation.",
    "Simple to install and requires minimal maintenance.",
    "Ensures uniform and consistent water distribution.",
    "Designed with clog-resistant technology for smooth performance.",
    "Suitable for both indoor and outdoor gardening setups.",
  ];

  return (
    <main className="min-h-screen">
      <Navbar />
      <PageHeader
        title="Pot Dripper/Arrow Dripper"
        backgroundImage="https://d170mw2nhcb1v0.cloudfront.net/img/land-head-6.png"
        breadcrumbs={breadcrumbs}
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-primary font-bold text-xl uppercase tracking-wider mb-2">Landscape Irrigation</p>
            <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
            <h2 className="text-4xl font-bold text-primary italic">Emitting Devices</h2>
            <div className="w-full h-px bg-secondary mt-6"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
            <div className="relative group">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-whitesmoke">
                <Image
                  src="https://d170mw2nhcb1v0.cloudfront.net/img/Drip-11.jpg"
                  alt="Pot Dripper/Arrow Dripper"
                  width={600}
                  height={700}
                  className="w-full h-auto object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
            </div>

            <div className="space-y-8">
              <h1 className="text-3xl lg:text-4xl font-bold text-secondary border-b-4 border-secondary pb-4 inline-block leading-tight">
                Pot Dripper/Arrow Dripper
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
                  Perfect for home gardens, nurseries, and vertical setups to ensure consistent, efficient, and hassle-free watering of plants.
                </p>
              </div>

              <div className="mt-8">
                <Image
                  src="https://d170mw2nhcb1v0.cloudfront.net/img/Model-37.png"
                  alt="Model Diagram"
                  width={400}
                  height={300}
                  className="w-full h-auto max-w-sm mx-auto lg:mx-0"
                />
              </div>

              <div className="pt-4">
                <a 
                  href="/pdf/AM pdf.pdf" 
                  target="_blank" 
                  className="btn-primary-custom btn-ripple text-white px-10 py-4 rounded-full font-bold text-lg inline-flex items-center shadow-xl transition"
                >
                  <i className="fa fa-file-pdf mr-3"></i> View PDF
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
