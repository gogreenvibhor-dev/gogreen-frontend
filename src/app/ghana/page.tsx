import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ghana | Vidhi Enterprises",
  description: "Vidhi Enterprises exports drip kits, micro sprinklers, filters and HDPE fittings for Ghana’s vegetable, fruit and community farming sectors.",
  keywords: "irrigation Ghana, drip irrigation Ghana, micro irrigation Ghana",
};

export default function Ghana() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Global Presence", href: "/global-presence" },
    { label: "Ghana", active: true },
  ];

  return (
    <main className="min-h-screen">
      <Navbar />
      <PageHeader
        title="Ghana"
        backgroundImage="https://d170mw2nhcb1v0.cloudfront.net/img/head-eco.png"
        breadcrumbs={breadcrumbs}
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h6 className="text-xl font-bold text-primary mb-4">
              Welcome to our Ghana irrigation solutions page.
            </h6>
            <h1 className="text-4xl lg:text-5xl font-bold text-secondary text-shadow-sm">
              Akwaaba! (Welcome!)
            </h1>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="lg:w-2/3 space-y-12">
              {/* Introduction */}
              <div>
                <h2 className="text-3xl font-bold text-primary text-center mb-4">Introduction</h2>
                <div className="h-1 w-full bg-primary mb-6"></div>
                <div className="space-y-4 text-lg text-secondary font-bold text-justify">
                  <p>
                    Vidhi Enterprises supports Ghana’s agricultural growth by supplying efficient drip and micro-irrigation systems for vegetables, fruits, and community irrigation schemes.
                  </p>
                  <p>
                    Small and medium farms benefit from water-saving technologies that increase harvest yields.
                  </p>
                </div>
                <div className="h-px w-full bg-primary mt-6"></div>
              </div>

              {/* Market Insights */}
              <div>
                <h2 className="text-3xl font-bold text-primary text-center mb-4">Market Insights</h2>
                <div className="h-1 w-full bg-primary mb-6"></div>
                <div className="space-y-4 text-lg text-secondary font-bold text-justify">
                  <p>
                    Ghana’s horticulture sector is expanding, encouraging adoption of drip irrigation.
                  </p>
                  <p>
                    Government-backed agriculture programs drive demand for affordable systems.
                  </p>
                </div>
                <div className="h-px w-full bg-primary mt-6"></div>
              </div>

              {/* Products We Supply */}
              <div>
                <h2 className="text-3xl font-bold text-primary text-center mb-4">Products We Supply</h2>
                <div className="h-1 w-full bg-primary mb-6"></div>
                <ul className="space-y-2 text-lg text-secondary font-bold text-justify">
                  <li>• Drip irrigation kits</li>
                  <li>• Drip laterals</li>
                  <li>• Micro sprinklers</li>
                  <li>• Screen filters</li>
                  <li>• HDPE pipes</li>
                </ul>
                <div className="h-px w-full bg-primary mt-6"></div>
              </div>

              {/* Industries We Serve */}
              <div>
                <h2 className="text-3xl font-bold text-primary text-center mb-4">Industries We Serve</h2>
                <div className="h-1 w-full bg-primary mb-6"></div>
                <ul className="space-y-2 text-lg text-secondary font-bold text-justify">
                  <li>• Smallholder vegetable farmers</li>
                  <li>• Community irrigation programs</li>
                  <li>• Fruit growers</li>
                </ul>
                <div className="h-px w-full bg-primary mt-6"></div>
              </div>

              {/* Why Choose Vidhi Enterprises */}
              <div>
                <h2 className="text-3xl font-bold text-primary text-center mb-4">Why Choose Vidhi Enterprises</h2>
                <div className="h-1 w-full bg-primary mb-6"></div>
                <ul className="space-y-2 text-lg text-secondary font-bold text-justify">
                  <li>• Affordable systems for emerging farms</li>
                  <li>• Durable materials for tropical weather</li>
                  <li>• Reliable supply for West Africa</li>
                </ul>
                <div className="h-px w-full bg-primary mt-6"></div>
              </div>
            </div>

            <div className="lg:w-1/3 flex justify-center items-center lg:sticky lg:top-24">
              <div className="relative w-full max-w-sm">
                <Image
                  src="https://d170mw2nhcb1v0.cloudfront.net/img/Ghana.png"
                  alt="Ghana Map"
                  width={400}
                  height={400}
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
