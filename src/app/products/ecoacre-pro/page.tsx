import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";

export default function EcoAcrePro() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Economical Irrigation", href: "/economical" },
    { label: "EcoAcre Pro", active: true },
  ];

  const features = [
    "Complete one-acre irrigation solution packed in a single affordable kit.",
    "Available in two strong pipe wall thickness options: 0.3 mm and 0.4 mm.",
    "All components made from high-grade virgin raw material for long life.",
    "UV-stabilized materials ensure resistance to sunlight and weathering.",
    "Includes 4000 meters of 2 LPH drip line for efficient and uniform water delivery.",
    "Comes with essential control instruments like Screen Filter, Pressure Gauge, and Venturi.",
    "Heavy-duty 50mm Lay Flat Pipe (100 meters) for smooth water flow.",
    "Multiple fittings (Start Connector, Ring Jointer, End Caps) for easy installation.",
    "Durable 50mm valves and SS clamps provide leak-proof performance.",
    "Designed to reduce water consumption and increase crop yield with precision irrigation.",
  ];

  return (
    <main className="min-h-screen">
      <Navbar />
      <PageHeader
        title="EcoAcre Pro"
        backgroundImage="https://d170mw2nhcb1v0.cloudfront.net/img/eco-head-10.png"
        breadcrumbs={breadcrumbs}
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-primary font-bold text-xl uppercase tracking-wider mb-2">Economical Irrigation</p>
            <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
            <h2 className="text-4xl font-bold text-primary italic">EcoAcre Pro</h2>
            <div className="w-full h-px bg-secondary mt-6"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
            <div className="relative group">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-whitesmoke">
                <Image
                  src="https://d170mw2nhcb1v0.cloudfront.net/img/Eco-23.png"
                  alt="EcoAcre Pro Kit"
                  width={700}
                  height={700}
                  className="w-full h-auto object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
            </div>

            <div className="space-y-8">
              <h1 className="text-3xl lg:text-4xl font-bold text-green-900 border-b-4 border-secondary pb-4 inline-block leading-tight uppercase">
                EcoAcre Pro
              </h1>
              
              <div className="bg-slate-50 p-6 rounded-xl border-l-4 border-primary shadow-sm">
                <p className="text-lg text-primary font-medium leading-relaxed">
                  EcoAcre Pro is a complete One Acre – One Solution irrigation kit, designed to provide farmers with an efficient and affordable way to manage water for their crops. The kit is available in two durable models featuring 0.3 mm and 0.4 mm wall thickness pipes, ensuring long-lasting performance in all field conditions. 
                </p>
                <p className="text-lg text-primary font-medium leading-relaxed mt-4">
                  Inside the box, farmers receive all essential components required for a full irrigation setup, including 50mm Lay Flat Pipe (100 meters), 50mm Screen Filter (1 unit), Venturi (1 unit), Pressure Gauge (1 unit), Air Release Valve – ARV (1 unit), 50mm Valves (4 units), 4000 meters of 16×20cm × 2 LPH drip line (0.4mm), Start Connectors (100 units), Ring Jointers (25 units), Tape End Caps (100 units), Hole Punch (1 unit), SS Clamps (10 units), and Lay Flat End Caps (4 units).
                </p>
              </div>

              <ul className="space-y-4">
                {features.map((feature, i) => (
                  <li key={i} className="flex items-start text-primary font-medium text-lg leading-relaxed">
                    <span className="mr-3 mt-2 w-2 h-2 rounded-full bg-secondary shrink-0"></span>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-green-900 border-b-2 border-secondary pb-2 inline-block">
                  Application
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start text-primary font-semibold text-lg leading-relaxed">
                    <span className="mr-3 mt-2 w-2 h-2 rounded-full bg-primary shrink-0"></span>
                    Ideal for irrigating one acre of crops, including vegetables, orchards, flowers, and field crops.
                  </li>
                  <li className="flex items-start text-primary font-semibold text-lg leading-relaxed">
                    <span className="mr-3 mt-2 w-2 h-2 rounded-full bg-primary shrink-0"></span>
                    Perfect for farmers looking for a ready-to-install, cost-effective, and durable irrigation system.
                  </li>
                </ul>
              </div>

              <div className="pt-4 text-center lg:text-left">
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
