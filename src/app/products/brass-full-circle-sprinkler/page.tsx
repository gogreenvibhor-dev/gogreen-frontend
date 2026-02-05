import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";

export default function BrassFullCircleSprinkler() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Sprinkler Irrigation", href: "/sprinkler" },
    { label: "Brass Full Circle Sprinkler", active: true },
  ];

  const products = [
    {
      title: '1/2" BRASS FULL CIRCLE SPRINKLER',
      image: "https://d170mw2nhcb1v0.cloudfront.net/img/Spri-1.png",
      features: [
        "½” full circle sprinkler designed for wide and even water coverage.",
        "Equipped with a robust brass bearing assembly for enhanced durability.",
        "Features a ½” male BSP/NPT connection suitable for standard fittings.",
        "Certified and BIS-approved (ISI marked) for superior quality assurance.",
        "Stainless steel fulcrum pin, arm spring, and bearing spring ensure long-term reliability.",
        "Copper-based alloy body and arm provide exceptional strength and corrosion resistance.",
        "Delivers consistent performance even under tough field conditions.",
        "Designed for easy installation and low maintenance.",
        "Ensures efficient water utilization with uniform droplet distribution."
      ],
      application: "Ideal for agricultural use, particularly in center pivot systems, crop cooling, and frost protection applications. Designed to ensure uniform water distribution for efficient irrigation.",
      tableImage: "https://d170mw2nhcb1v0.cloudfront.net/img/full-table-1.png"
    },
    {
      title: '3/4" BRASS FULL CIRCLE SPRINKLER',
      image: "https://d170mw2nhcb1v0.cloudfront.net/img/Spri-2.png",
      features: [
        "¾” full circle brass sprinkler designed for wide and efficient coverage.",
        "Durable brass and stainless steel bearing assembly for long-lasting performance.",
        "Equipped with a ¾” male BSP/NPT connection compatible with standard fittings.",
        "Stainless steel fulcrum pin, arm, and bearing spring provide extended wear resistance.",
        "Chemical-resistant bearing seal ensures reliable operation under varied water conditions.",
        "Copper-based alloy body and arm provide exceptional strength and corrosion resistance.",
        "BIS-approved and ISI-marked for assured quality and safety standards.",
        "Designed for consistent water distribution with minimal maintenance needs.",
        "Suitable for high-performance irrigation in large agricultural and landscape areas."
      ],
      application: "Perfectly suited for agriculture, horticulture, golf courses, and field crops like wheat and vegetables. Ideal for both solid-set and portable irrigation systems ensuring uniform water distribution.",
      tableImage: "https://d170mw2nhcb1v0.cloudfront.net/img/full-table-2.png"
    },
    {
      title: '3/4" BRASS FULL CIRCLE SPRINKLER (VIDHI ECO)',
      image: "https://d170mw2nhcb1v0.cloudfront.net/img/Spri-3.png",
      features: [
        "¾” full circle brass sprinkler designed for wide and efficient coverage.",
        "Durable brass and stainless steel bearing assembly for long-lasting performance.",
        "Equipped with a ¾” male BSP/NPT connection compatible with standard fittings.",
        "Stainless steel fulcrum pin, arm, and bearing spring provide extended wear resistance.",
        "Chemical-resistant bearing seal ensures reliable operation under varied water conditions.",
        "Copper-based alloy body and arm provide exceptional strength and corrosion resistance.",
        "BIS-approved and ISI-marked for assured quality and safety standards.",
        "Designed for consistent water distribution with minimal maintenance needs.",
        "Suitable for high-performance irrigation in large agricultural and landscape areas."
      ],
      application: "Perfectly suited for agriculture, horticulture, golf courses, and field crops like wheat and vegetables. Ideal for both solid-set and portable irrigation systems ensuring uniform water distribution.",
      tableImage: "https://d170mw2nhcb1v0.cloudfront.net/img/full-table-3.png"
    },
    {
      title: '1" BRASS FULL CIRCLE SPRINKLER',
      image: "https://d170mw2nhcb1v0.cloudfront.net/img/Spri-4.png",
      features: [
        "1” full circle metal sprinkler engineered for maximum water distribution.",
        "Equipped with a durable brass bearing assembly for smooth and long-lasting performance.",
        "Standard 1” male BSP/NPT connection ensures easy installation and compatibility.",
        "Stainless steel fulcrum pin, arm, and bearing spring offer superior wear resistance.",
        "Chemical-resistant bearing seal ensures reliable operation under varied water conditions.",
        "Strong aluminum body with copper-based alloy arm provides excellent durability.",
        "Delivers consistent and even water spread across large irrigation areas.",
        "Designed for corrosion resistance and long service life in tough environments.",
        "Suitable for heavy-duty agricultural and landscape watering applications."
      ],
      application: "Highly efficient for agricultural fields, horticultural crops, lawns, and large landscape irrigation. Designed to provide uniform water coverage in both solid-set and portable irrigation systems.",
      tableImage: "https://d170mw2nhcb1v0.cloudfront.net/img/full-table-4.png"
    },
    {
      title: '1¼" BRASS FULL CIRCLE SPRINKLER',
      image: "https://d170mw2nhcb1v0.cloudfront.net/img/Spri-5.png",
      features: [
        "1¼ full circle metal sprinkler designed for wide and efficient water coverage.",
        "Fitted with a high-quality brass bearing assembly for smooth operation and durability.",
        "Standard 1¼” male BSP/NPT connection for easy installation and compatibility.",
        "Stainless steel fulcrum pin, arm, and bearing spring ensure long-lasting reliability.",
        "Chemical-resistant bearing seal provides dependable performance in all water conditions.",
        "Rugged aluminum body and copper-based alloy arm offer superior strength and corrosion resistance.",
        "Built for consistent performance under heavy-duty agricultural use.",
        "Delivers uniform droplet distribution for effective irrigation and reduced water loss.",
        "Low maintenance design ensures long service life and operational efficiency."
      ],
      application: "Ideally suited for large-scale agricultural fields, plantations, and landscape irrigation. Ensures uniform water distribution in solid-set and portable irrigation systems for efficient crop growth.",
      tableImage: "https://d170mw2nhcb1v0.cloudfront.net/img/full-table-5.png"
    }
  ];

  return (
    <main className="min-h-screen">
      <Navbar />
      <PageHeader
        title="Brass Full Circle Sprinkler"
        backgroundImage="https://d170mw2nhcb1v0.cloudfront.net/img/Spri-head-1.png"
        breadcrumbs={breadcrumbs}
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-primary font-bold text-xl uppercase tracking-wider mb-2">Sprinkler Irrigation</p>
            <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
            <h2 className="text-4xl font-bold text-primary italic">Brass Impact Sprinklers</h2>
            <div className="w-full h-px bg-secondary mt-6"></div>
          </div>

          {products.map((product, index) => (
            <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24 last:mb-0">
              <div className="relative group">
                <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-whitesmoke">
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={600}
                    height={700}
                    className="w-full h-auto object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>
              </div>

              <div className="space-y-8">
                <h3 className="text-3xl lg:text-3xl font-bold text-green-900 border-b-4 border-secondary pb-4 inline-block leading-tight uppercase">
                  {product.title}
                </h3>
                <ul className="space-y-4">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-primary font-medium text-lg leading-relaxed">
                      <span className="mr-3 mt-2 w-2 h-2 rounded-full bg-secondary shrink-0"></span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div>
                  <h4 className="text-2xl font-bold text-green-900 border-b-2 border-secondary pb-2 inline-block mb-4">
                    Application
                  </h4>
                  <p className="text-lg text-primary font-medium leading-relaxed">
                    {product.application}
                  </p>
                </div>

                <div className="mt-8">
                  <Image
                    src={product.tableImage}
                    alt={`Technical Data for ${product.title}`}
                    width={600}
                    height={300}
                    className="w-full h-auto shadow-lg rounded-lg"
                  />
                </div>
              </div>
            </div>
          ))}

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
