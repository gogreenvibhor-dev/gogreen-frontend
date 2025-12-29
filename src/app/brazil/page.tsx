import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";

export default function Brazil() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Global Presence", href: "/global-presence" },
    { label: "Brazil", active: true },
  ];

  return (
    <main className="min-h-screen">
      <Navbar />
      <PageHeader
        title="Brazil"
        backgroundImage="/img/head-eco.png"
        breadcrumbs={breadcrumbs}
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h6 className="text-xl font-bold text-primary mb-4">
              Welcome to our Brazil irrigation solutions page.
            </h6>
            <h1 className="text-4xl lg:text-5xl font-bold text-secondary text-shadow-sm">
              Olá! (Hello!)
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
                    Vidhi Enterprises supplies robust, high-performance irrigation systems to Brazil’s vast agricultural sector, including coffee plantations, sugarcane estates, fruit orchards, and vegetable farms.
                  </p>
                  <p>
                    Given Brazil’s diverse climate — from tropical Amazonia to semi-arid Northeast regions — farmers rely heavily on precision irrigation systems that conserve water and enhance crop productivity.
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
                    Brazil is one of the world’s largest agricultural producers, increasing demand for plantation sprinklers, filtration systems, and durable drip lines.
                  </p>
                  <p>
                    Irrigation adoption is rapidly increasing in coffee-growing regions due to erratic rainfall patterns.
                  </p>
                </div>
                <div className="h-px w-full bg-primary mt-6"></div>
              </div>

              {/* Products We Supply */}
              <div>
                <h2 className="text-3xl font-bold text-primary text-center mb-4">Products We Supply</h2>
                <div className="h-1 w-full bg-primary mb-6"></div>
                <ul className="space-y-2 text-lg text-secondary font-bold text-justify">
                  <li>• Heavy-duty inline drip lines</li>
                  <li>• PC/Non-PC orchard drippers</li>
                  <li>• Plantation sprinklers</li>
                  <li>• Impact sprinklers</li>
                  <li>• Sand media & disc filters</li>
                  <li>• HDPE pipes & PP fittings</li>
                </ul>
                <div className="h-px w-full bg-primary mt-6"></div>
              </div>

              {/* Industries We Serve */}
              <div>
                <h2 className="text-3xl font-bold text-primary text-center mb-4">Industries We Serve</h2>
                <div className="h-1 w-full bg-primary mb-6"></div>
                <ul className="space-y-2 text-lg text-secondary font-bold text-justify">
                  <li>• Coffee plantations</li>
                  <li>• Sugarcane farms</li>
                  <li>• Fruit orchards</li>
                  <li>• Vegetable growers</li>
                  <li>• Greenhouses</li>
                </ul>
                <div className="h-px w-full bg-primary mt-6"></div>
              </div>

              {/* Why Choose Vidhi Enterprises */}
              <div>
                <h2 className="text-3xl font-bold text-primary text-center mb-4">Why Choose Vidhi Enterprises</h2>
                <div className="h-1 w-full bg-primary mb-6"></div>
                <ul className="space-y-2 text-lg text-secondary font-bold text-justify">
                  <li>• Products ideal for large-scale commercial farming</li>
                  <li>• Durable systems designed for tropical and semi-arid climates</li>
                  <li>• Strong export network for Latin American destinations</li>
                  <li>• High water efficiency for high-value crops</li>
                </ul>
                <div className="h-px w-full bg-primary mt-6"></div>
              </div>
            </div>

            <div className="lg:w-1/3 flex justify-center items-center lg:sticky lg:top-24">
              <div className="relative w-full max-w-sm">
                <Image
                  src="/img/Brazil.png"
                  alt="Brazil Map"
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
