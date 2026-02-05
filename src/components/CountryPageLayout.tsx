import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";

interface CountryPageLayoutProps {
  countryName: string;
  heroImage?: string;
  flagSrc: string; // Path to the flag/map image (e.g., "/img/UAE.png")
  welcomeMessage: string; // e.g., "Welcome to our UAE irrigation solutions page."
  greeting: string; // e.g., "Marhaban! (Hello!)"
  introduction: string[]; // Array of paragraphs
  marketInsights: string[]; // Array of paragraphs
  products: string[]; // List of products
  industries: string[]; // List of industries
  whyChooseUs: string[]; // List of reasons
}

export default function CountryPageLayout({
  countryName,
  heroImage = "https://d170mw2nhcb1v0.cloudfront.net/img/head-eco.png", // Default hero image
  flagSrc,
  welcomeMessage,
  greeting,
  introduction,
  marketInsights,
  products,
  industries,
  whyChooseUs,
}: CountryPageLayoutProps) {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Global Presence", href: "/global-presence" },
    { label: countryName, active: true },
  ];

  return (
    <main className="min-h-screen bg-whitesmoke">
      <Navbar />
      <PageHeader
        title={countryName}
        backgroundImage={heroImage}
        breadcrumbs={breadcrumbs}
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h6 className="text-xl font-bold text-primary mb-4">
              {welcomeMessage}
            </h6>
            <h1 className="text-4xl lg:text-5xl font-bold text-green-900 text-shadow-sm">
              {greeting}
            </h1>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="lg:w-2/3 space-y-12">
              {/* Introduction */}
              <div>
                <h2 className="text-3xl font-bold text-primary text-center mb-4">Introduction</h2>
                <div className="h-1 w-full bg-primary mb-6"></div>
                <div className="space-y-4 text-lg text-green-900 font-bold text-justify">
                  {introduction.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
                <div className="h-px w-full bg-primary mt-6"></div>
              </div>

              {/* Market Insights */}
              <div>
                <h2 className="text-3xl font-bold text-primary text-center mb-4">Market Insights</h2>
                <div className="h-1 w-full bg-primary mb-6"></div>
                <div className="space-y-4 text-lg text-green-900 font-bold text-justify">
                  {marketInsights.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
                <div className="h-px w-full bg-primary mt-6"></div>
              </div>

              {/* Products We Supply */}
              <div>
                <h2 className="text-3xl font-bold text-primary text-center mb-4">Products We Supply</h2>
                <div className="h-1 w-full bg-primary mb-6"></div>
                <ul className="space-y-2 text-lg text-green-900 font-bold text-justify">
                  {products.map((item, index) => (
                    <li key={index}>• {item}</li>
                  ))}
                </ul>
                <div className="h-px w-full bg-primary mt-6"></div>
              </div>

              {/* Industries We Serve */}
              <div>
                <h2 className="text-3xl font-bold text-primary text-center mb-4">Industries We Serve</h2>
                <div className="h-1 w-full bg-primary mb-6"></div>
                <ul className="space-y-2 text-lg text-green-900 font-bold text-justify">
                  {industries.map((item, index) => (
                    <li key={index}>• {item}</li>
                  ))}
                </ul>
                <div className="h-px w-full bg-primary mt-6"></div>
              </div>

              {/* Why Choose Vidhi Enterprises */}
              <div>
                <h2 className="text-3xl font-bold text-primary text-center mb-4">Why Choose Vidhi Enterprises</h2>
                <div className="h-1 w-full bg-primary mb-6"></div>
                <ul className="space-y-2 text-lg text-green-900 font-bold text-justify">
                  {whyChooseUs.map((item, index) => (
                    <li key={index}>• {item}</li>
                  ))}
                </ul>
                <div className="h-px w-full bg-primary mt-6"></div>
              </div>
            </div>

            <div className="lg:w-1/3 flex justify-center items-center lg:sticky lg:top-24">
              <div className="relative w-full max-w-sm">
                <Image
                  src={flagSrc}
                  alt={`${countryName} Map`}
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
