import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";

export default function Ethiopia() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Global Presence", href: "/global-presence" },
    { label: "Ethiopia", active: true },
  ];

  return (
    <main className="min-h-screen">
      <Navbar />
      <PageHeader
        title="Ethiopia"
        backgroundImage="/img/head-eco.png"
        breadcrumbs={breadcrumbs}
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h6 className="text-xl font-bold text-primary mb-4">
              Welcome to our Ethiopia irrigation solutions page.
            </h6>
            <h1 className="text-4xl lg:text-5xl font-bold text-secondary text-shadow-sm uppercase">
              Selam! (Hello!)
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
                    Vidhi Enterprises provides affordable and efficient micro-irrigation solutions to Ethiopia’s farmers, cooperatives, and agricultural development programs.
                  </p>
                  <p>
                    Micro and drip irrigation are helping Ethiopian farmers improve yields despite water scarcity and unpredictable rainfall.
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
                    Ethiopia’s vegetable and horticulture sectors are growing, increasing demand for drip kits and small sprinklers.
                  </p>
                  <p>
                    NGO-funded irrigation programs play a large role in expanding micro-irrigation adoption.
                  </p>
                </div>
                <div className="h-px w-full bg-primary mt-6"></div>
              </div>

              {/* Products We Supply */}
              <div>
                <h2 className="text-3xl font-bold text-primary text-center mb-4">Products We Supply</h2>
                <div className="h-1 w-full bg-primary mb-6"></div>
                <ul className="space-y-2 text-lg text-secondary font-bold text-justify">
                  <li>• Low-pressure drip kits</li>
                  <li>• 16mm laterals</li>
                  <li>• Micro sprinklers</li>
                  <li>• Screen filtration units</li>
                  <li>• HDPE pipes</li>
                </ul>
                <div className="h-px w-full bg-primary mt-6"></div>
              </div>

              {/* Industries We Serve */}
              <div>
                <h2 className="text-3xl font-bold text-primary text-center mb-4">Industries We Serve</h2>
                <div className="h-1 w-full bg-primary mb-6"></div>
                <ul className="space-y-2 text-lg text-secondary font-bold text-justify">
                  <li>• Smallholder farming</li>
                  <li>• Vegetable cultivation</li>
                  <li>• Community irrigation programs</li>
                </ul>
                <div className="h-px w-full bg-primary mt-6"></div>
              </div>

              {/* Why Choose Vidhi Enterprises */}
              <div>
                <h2 className="text-3xl font-bold text-primary text-center mb-4">Why Choose Vidhi Enterprises</h2>
                <div className="h-1 w-full bg-primary mb-6"></div>
                <ul className="space-y-2 text-lg text-secondary font-bold text-justify">
                  <li>• Affordable systems for rural and small farms</li>
                  <li>• Easy installation with low-pressure water</li>
                  <li>• Trusted partner for NGO agriculture projects</li>
                </ul>
                <div className="h-px w-full bg-primary mt-6"></div>
              </div>
            </div>

            <div className="lg:w-1/3 flex justify-center items-center lg:sticky lg:top-24">
              <div className="relative w-full max-w-sm">
                <Image
                  src="/img/Ethiopia.png"
                  alt="Ethiopia Map"
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
