import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";

export default function AluminiumSprinkler() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Sprinkler Irrigation", href: "/sprinkler" },
    { label: "Aluminium Sprinkler", active: true },
  ];

  const features3N = [
    "1-1/4” Full Circle Metal Sprinkler equipped with three nozzles for wide and efficient coverage",
    "Brass Bearing Assembly ensures smooth rotation and long service life.",
    "Compatible with 1-1/4” Male or Female BSP/NPT connection for easy installation.",
    "Stainless Steel Fulcrum Pin, Arm & Bearing Spring provide long wearing reliability.",
    "Chemical-resistant bearing seal enhances protection against corrosion and wear.",
    "Aluminum Body combined with Copper Base Alloy Arm offers extra strength and durability.",
    "Designed for consistent water distribution under varying pressure conditions.",
    "Suitable for both agricultural and industrial irrigation systems.",
    "Built to deliver reliable performance in rugged field environments.",
  ];

  const features2N = [
    "1-1/4” Full Circle Metal Sprinkler designed with two nozzles for efficient water coverage.",
    "Strong and durable Brass Bearing Assembly ensures smooth operation.",
    "Available with 1-1/4” Male or Female BSP/NPT connection for easy fitting.",
    "Stainless Steel Fulcrum Pin, Arm & Bearing Spring provide long wearing reliability.",
    "Chemical-resistant bearing seal ensures protection against corrosion and wear.",
    "Pressure Die Cast Aluminum Body & Arm deliver superior strength and durability.",
    "Designed for high performance under varying pressure conditions.",
    "Ensures uniform and consistent water distribution over large areas.",
    "Built to withstand tough agricultural and industrial environments.",
  ];

  return (
    <main className="min-h-screen">
      <Navbar />
      <PageHeader
        title="Aluminium Sprinkler"
        backgroundImage="https://d170mw2nhcb1v0.cloudfront.net/img/Spri-head-3.png"
        breadcrumbs={breadcrumbs}
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-primary font-bold text-xl uppercase tracking-wider mb-2">Sprinkler Irrigation</p>
            <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
            <h2 className="text-4xl font-bold text-primary italic">Metal Sprinklers</h2>
            <div className="w-full h-px bg-secondary mt-6"></div>
          </div>

          {/* 3N Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
            <div className="relative group">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-whitesmoke">
                <Image
                  src="https://d170mw2nhcb1v0.cloudfront.net/img/Spri-9.png"
                  alt="Aluminium Sprinkler 3N"
                  width={600}
                  height={700}
                  className="w-full h-auto object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
            </div>

            <div className="space-y-8">
              <h1 className="text-3xl lg:text-4xl font-bold text-green-900 border-b-4 border-secondary pb-4 inline-block leading-tight">
                1-1/4" METAL SPRINKLER (3N) ALUMINIUM
              </h1>
              <ul className="space-y-4">
                {features3N.map((feature, i) => (
                  <li key={i} className="flex items-start text-primary font-medium text-lg leading-relaxed">
                    <span className="mr-3 mt-2 w-2 h-2 rounded-full bg-secondary shrink-0"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <h3 className="text-2xl font-bold text-green-900 border-b-2 border-secondary pb-2 inline-block">
                Application
              </h3>
              <p className="text-lg text-primary font-medium leading-relaxed mb-6">
                Ideal for large-scale agricultural irrigation, plantations, and industrial watering systems. Ensures uniform full-circle water coverage with long-lasting operational reliability.
              </p>

              <div className="mt-8">
                 <Image
                  src="/img/metaltable-3n.png"
                  alt="Technical Data 3N"
                  width={600}
                  height={300}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          {/* 2N Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
            <div className="relative group">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-whitesmoke">
                <Image
                  src="https://d170mw2nhcb1v0.cloudfront.net/img/Spri-10.png"
                  alt="Aluminium Sprinkler 2N"
                  width={600}
                  height={700}
                  className="w-full h-auto object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
            </div>

            <div className="space-y-8">
              <h2 className="text-3xl lg:text-4xl font-bold text-green-900 border-b-4 border-secondary pb-4 inline-block leading-tight">
                1-1/4" METAL SPRINKLER (2N) ALUMINIUM
              </h2>
              <ul className="space-y-4">
                {features2N.map((feature, i) => (
                  <li key={i} className="flex items-start text-primary font-medium text-lg leading-relaxed">
                    <span className="mr-3 mt-2 w-2 h-2 rounded-full bg-secondary shrink-0"></span>
                    {feature}
                  </li>
                ))}
              </ul>

              <h3 className="text-2xl font-bold text-green-900 border-b-2 border-secondary pb-2 inline-block">
                Application
              </h3>
              <p className="text-lg text-primary font-medium leading-relaxed mb-6">
                 Ideal for large-scale agricultural fields, plantations, and industrial irrigation setups. Provides efficient full-circle water coverage and long-term durability under heavy-duty use.
              </p>
              
               <div className="mt-8">
                 <Image
                  src="https://d170mw2nhcb1v0.cloudfront.net/img/metaltable-2n.png"
                  alt="Technical Data 2N"
                  width={600}
                  height={300}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <a 
              href="https://d170mw2nhcb1v0.cloudfront.net/pdf/AM%20pdf.pdf" 
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
