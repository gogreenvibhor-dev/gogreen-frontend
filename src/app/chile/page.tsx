import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";

export default function Chile() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Global Presence", href: "/global-presence" },
    { label: "Chile", active: true },
  ];

  return (
    <main className="min-h-screen">
      <Navbar />
      <PageHeader
        title="Chile"
        backgroundImage="/img/head-eco.png"
        breadcrumbs={breadcrumbs}
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h6 className="text-xl font-bold text-primary mb-4">
              Welcome to our Chile irrigation solutions page.
            </h6>
            <h1 className="text-4xl lg:text-5xl font-bold text-secondary text-shadow-sm">
              ¡Hola! (Hello!)
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
                    Vidhi Enterprises delivers high-quality irrigation systems to Chile’s thriving agricultural sector, including vineyards, fruit orchards, and greenhouse farms.
                  </p>
                  <p>
                    Chile’s diverse geography — from arid northern regions to Mediterranean climates in the central zone — makes precision irrigation essential for sustainable crop production.
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
                    Chile is one of the world’s largest exporters of grapes and cherries, creating strong demand for high-efficiency vineyard irrigation systems.
                  </p>
                  <p>
                    Advanced filtration systems are widely used due to variable water quality from wells and rivers.
                  </p>
                </div>
                <div className="h-px w-full bg-primary mt-6"></div>
              </div>

              {/* Products We Supply */}
              <div>
                <h2 className="text-3xl font-bold text-primary text-center mb-4">Products We Supply</h2>
                <div className="h-1 w-full bg-primary mb-6"></div>
                <ul className="space-y-2 text-lg text-secondary font-bold text-justify">
                  <li>• Precision inline vineyard drip lines</li>
                  <li>• Orchard drippers (PC/Non-PC)</li>
                  <li>• Mini sprinklers for fruit orchards</li>
                  <li>• Foggers & greenhouse misters</li>
                  <li>• Disc & screen filters</li>
                  <li>• HDPE pipes & compression fittings</li>
                </ul>
                <div className="h-px w-full bg-primary mt-6"></div>
              </div>

              {/* Industries We Serve */}
              <div>
                <h2 className="text-3xl font-bold text-primary text-center mb-4">Industries We Serve</h2>
                <div className="h-1 w-full bg-primary mb-6"></div>
                <ul className="space-y-2 text-lg text-secondary font-bold text-justify">
                  <li>• Vineyards & wineries</li>
                  <li>• Fruit orchards</li>
                  <li>• Vegetable growers</li>
                  <li>• Greenhouses & nurseries</li>
                </ul>
                <div className="h-px w-full bg-primary mt-6"></div>
              </div>

              {/* Why Choose Vidhi Enterprises */}
              <div>
                <h2 className="text-3xl font-bold text-primary text-center mb-4">Why Choose Vidhi Enterprises</h2>
                <div className="h-1 w-full bg-primary mb-6"></div>
                <ul className="space-y-2 text-lg text-secondary font-bold text-justify">
                  <li>• Highly precise irrigation systems suited for long-row vineyards</li>
                  <li>• Durable and clog-resistant drippers for orchard use</li>
                  <li>• Efficient filtration systems for mixed water sources</li>
                  <li>• Strong export reliability to South America</li>
                </ul>
                <div className="h-px w-full bg-primary mt-6"></div>
              </div>
            </div>

            <div className="lg:w-1/3 flex justify-center items-center lg:sticky lg:top-24">
              <div className="relative w-full max-w-sm">
                <Image
                  src="/img/Chile.png"
                  alt="Chile Map"
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
