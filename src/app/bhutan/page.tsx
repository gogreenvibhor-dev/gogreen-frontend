import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";

export default function Bhutan() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Global Presence", href: "/global-presence" },
    { label: "Bhutan", active: true },
  ];

  return (
    <main className="min-h-screen">
      <Navbar />
      <PageHeader
        title="Bhutan"
        backgroundImage="/img/head-eco.png"
        breadcrumbs={breadcrumbs}
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h6 className="text-xl font-bold text-primary mb-4">
              Welcome to our Bhutan irrigation solutions page.
            </h6>
            <h1 className="text-4xl lg:text-5xl font-bold text-secondary text-shadow-sm">
              Kuzu Zangpo La! (Hello!)
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
                    Vidhi Enterprises supports Bhutan’s agriculture by supplying easy-to-install drip systems that help smallholder farmers improve productivity across terraced fields and high-altitude farmlands.
                  </p>
                  <p>
                    Bhutan’s rural regions rely heavily on low-pressure irrigation solutions, which makes micro-irrigation highly suitable for improving vegetable and fruit cultivation.
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
                    Due to mountainous terrain, farmers prefer lightweight irrigation materials that are easy to transport and install.
                  </p>
                  <p>
                    Micro-irrigation adoption is rising in community farming and organic cultivation projects.
                  </p>
                </div>
                <div className="h-px w-full bg-primary mt-6"></div>
              </div>

              {/* Products We Supply */}
              <div>
                <h2 className="text-3xl font-bold text-primary text-center mb-4">Products We Supply</h2>
                <div className="h-1 w-full bg-primary mb-6"></div>
                <ul className="space-y-2 text-lg text-secondary font-bold text-justify">
                  <li>• Low-pressure drip laterals (16mm)</li>
                  <li>• Online drippers (2–4 LPH)</li>
                  <li>• Microtubes & connectors</li>
                  <li>• Mini sprinklers for nurseries</li>
                  <li>• Compact screen filtration units</li>
                  <li>• Small-diameter HDPE coils</li>
                </ul>
                <div className="h-px w-full bg-primary mt-6"></div>
              </div>

              {/* Industries We Serve */}
              <div>
                <h2 className="text-3xl font-bold text-primary text-center mb-4">Industries We Serve</h2>
                <div className="h-1 w-full bg-primary mb-6"></div>
                <ul className="space-y-2 text-lg text-secondary font-bold text-justify">
                  <li>• Smallholder vegetable farmers</li>
                  <li>• Terrace farming groups</li>
                  <li>• Fruit orchards</li>
                  <li>• Community agriculture projects</li>
                </ul>
                <div className="h-px w-full bg-primary mt-6"></div>
              </div>

              {/* Why Choose Vidhi Enterprises */}
              <div>
                <h2 className="text-3xl font-bold text-primary text-center mb-4">Why Choose Vidhi Enterprises</h2>
                <div className="h-1 w-full bg-primary mb-6"></div>
                <ul className="space-y-2 text-lg text-secondary font-bold text-justify">
                  <li>• Affordable, low-pressure irrigation systems</li>
                  <li>• Easy installation on slopes and terraced farms</li>
                  <li>• Durable materials that reduce maintenance</li>
                  <li>• Trusted supplier for rural farming initiatives</li>
                </ul>
                <div className="h-px w-full bg-primary mt-6"></div>
              </div>
            </div>

            <div className="lg:w-1/3 flex justify-center items-center lg:sticky lg:top-24">
              <div className="relative w-full max-w-sm">
                <Image
                  src="/img/Bhutan.png"
                  alt="Bhutan Map"
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
