import React from "react";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Founder's Vision - Late Shri D.K. Jain | Vidhi Enterprises Irrigation Legacy",
  description: "Discover the inspiring journey of Late Shri Dhirendar Kumar Jain, founder of Vidhi Enterprises. Pioneer in drip irrigation manufacturing since 1983, engineer, architect & visionary who revolutionized agricultural irrigation in India.",
  keywords: [
    "Vidhi Enterprises founder",
    "D.K. Jain irrigation pioneer",
    "drip irrigation manufacturer India",
    "agricultural irrigation visionary",
    "irrigation manufacturing company",
    "precision irrigation equipment",
    "quality irrigation products",
    "UV-stabilized irrigation products",
    "virgin raw material irrigation",
    "micro irrigation systems",
    "water-efficient irrigation",
    "farm irrigation solutions",
    "modern irrigation equipment",
    "irrigation company India history"
  ],
  openGraph: {
    title: "Founder's Vision - Engineering Excellence in Irrigation Since 1983",
    description: "The inspiring story of Late Shri D.K. Jain who built Vidhi Enterprises from a single room to a leading irrigation manufacturer serving 50+ countries.",
    url: "https://vidhienterprises.com/founder-vision",
    type: "article"
  },
  alternates: {
    canonical: "https://vidhienterprises.com/founder-vision"
  }
};

const FounderVisionPage = () => {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Dhirendar Kumar Jain",
    "alternateName": "Pipewale Bauji",
    "jobTitle": "Founder",
    "worksFor": {
      "@type": "Organization",
      "name": "Vidhi Enterprises"
    },
    "description": "Engineer, Architect, and Visionary who founded Vidhi Enterprises in 1983 and pioneered precision irrigation manufacturing in India"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      
      <main className="min-h-screen bg-[#f9f9f5]" itemScope itemType="https://schema.org/AboutPage">
        <Navbar />
      
      {/* Hero Section */}
      <header className="relative bg-gradient-to-br from-[#2d5a27] via-[#4a7c59] to-[#90EE90] text-white py-24 overflow-hidden" itemScope itemType="https://schema.org/Person">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12 max-w-5xl mx-auto">
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-5xl lg:text-7xl font-bold mb-4 font-heading animate-fadeInUp">
                Founder's Vision - Pioneering Agricultural Irrigation Manufacturing
              </h1>
              <p className="text-xl lg:text-2xl font-normal opacity-90 mb-2 animate-fadeInUp delay-100" itemProp="name">
                Late Shri Dhirendar Kumar Jain (Pipewale Bauji)
              </p>
              <p className="text-lg lg:text-xl font-light opacity-80 animate-fadeInUp delay-200" itemProp="jobTitle">
                Engineer. Architect. Visionary. Founder of <strong>Vidhi Enterprises</strong> - Leading <strong>Irrigation Manufacturing Company</strong>
              </p>
            </div>
            <div className="relative w-64 h-64 lg:w-80 lg:h-80 shrink-0 animate-float">
              <div className="absolute inset-0 border-4 border-white/20 rounded-full scale-110"></div>
              <Image
                src="https://d170mw2nhcb1v0.cloudfront.net/img/dada-ji.png"
                alt="Founder"
                fill
                className="object-cover rounded-full border-4 border-white shadow-2xl"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Intro Section */}
      <section className="py-20 bg-white" aria-labelledby="founder-story">
        <div className="container mx-auto px-4 max-w-4xl text-center space-y-8">
          <p className="text-xl text-gray-700 leading-relaxed animate-fadeInUp">
            <strong>Vidhi Enterprises</strong>, a leading <strong>agricultural irrigation manufacturer</strong>, stands on the foundation laid by Late Shri Dhirendar Kumar Jain, affectionately known as Pipewale Bauji, whose remarkable journey in <strong>precision irrigation equipment</strong> manufacturing continues to guide our purpose, values, and ambition.
          </p>
          <p className="text-xl text-gray-700 leading-relaxed animate-fadeInUp delay-100">
            An engineer and architect by profession, he pioneered <strong>quality irrigation products</strong> and believed that precision, discipline, and good design were not just principles for buildings—but for <strong>modern irrigation equipment</strong>, businesses, and life itself.
          </p>
          <p className="text-xl text-gray-700 leading-relaxed animate-fadeInUp delay-200">
            In the early 1980s, with no capital, no workforce, and no industry connections, he started manufacturing <strong>drip irrigation accessories</strong> and <strong>micro irrigation systems</strong> from his home, working tirelessly with just one helper to build what would become a trusted <strong>irrigation manufacturing company</strong>.
          </p>
        </div>
      </section>

      {/* Vision Grid */}
      <section className="py-24 bg-gradient-to-br from-[#f0f8f0] to-[#e8f5e8]" aria-labelledby="vision-purpose">
        <div className="container mx-auto px-4">
          <h2 id="vision-purpose" className="text-4xl lg:text-5xl font-bold text-center text-[#2d5a27] mb-16 font-heading relative after:content-[''] after:block after:w-32 after:h-1 after:bg-[#2d5a27] after:mx-auto after:mt-4">
            A Vision Rooted in Water-Efficient Irrigation & Sustainable Agriculture
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: "fa-seedling", text: "Make reliable drip irrigation systems accessible to every farmer" },
              { icon: "fa-handshake", text: "Support farmers with quality irrigation products they can trust" },
              { icon: "fa-balance-scale", text: "Build an irrigation manufacturing company where ethics come before profit" },
              { icon: "fa-lightbulb", text: "Innovate water-efficient irrigation to reduce wastage and boost productivity" },
            ].map((item, i) => (
              <div key={i} className="bg-white p-10 rounded-2xl shadow-lg text-center hover:-translate-y-3 transition-all duration-500 group">
                <i className={`fas ${item.icon} text-4xl text-[#4a7c59] mb-6 group-hover:rotate-[360deg] transition-transform duration-700`}></i>
                <h3 className="text-lg font-bold text-[#2d5a27]">{item.text}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legacy Section */}
      <section className="py-24 bg-white" aria-labelledby="engineering-excellence">
        <div className="container mx-auto px-4">
          <h2 id="engineering-excellence" className="text-4xl lg:text-5xl font-bold text-center text-[#2d5a27] mb-16 font-heading">
            Engineering Excellence in Irrigation Manufacturing - A Philosophy of Precision
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { icon: "fa-ruler-combined", title: "Accuracy in design" },
              { icon: "fa-cogs", title: "Consistency in production" },
              { icon: "fa-hard-hat", title: "Long-lasting materials" },
              { icon: "fa-tools", title: "Practical innovation" },
              { icon: "fa-clipboard-check", title: "Strong quality control" },
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-xl border border-gray-100 bg-gray-50 text-center hover:bg-[#f0f8f0] transition-colors">
                <i className={`fas ${item.icon} text-3xl text-[#4a7c59] mb-4`}></i>
                <h4 className="font-bold text-[#2d5a27]">{item.title}</h4>
              </div>
            ))}
          </div>
          <p className="mt-16 text-center text-xl text-gray-600 max-w-4xl mx-auto italic">
            To him, every <strong>drip emitter</strong>, <strong>irrigation fitting</strong>, or <strong>sprinkler system</strong> was not a product — it was a responsibility to farmers. His engineering mindset shaped the culture of Vidhi Enterprises as a premier <strong>agricultural irrigation manufacturer</strong>: Work with precision. Deliver with honesty. Build <strong>UV-stabilized irrigation products</strong> with purpose.
          </p>
        </div>
      </section>

      {/* Promise Banner */}
      <section className="py-32 bg-gradient-to-r from-[#2d5a27] to-[#4a7c59] text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl lg:text-5xl font-bold mb-10 text-white font-heading">Looking Ahead — Continuing His Vision in Modern Irrigation Equipment</h2>
          <p className="text-2xl font-light italic max-w-3xl mx-auto leading-relaxed">
            &quot;His journey teaches us that great things are built with courage, honesty, and a clear vision, no matter how small the beginning. <strong>Vidhi Enterprises</strong>, a trusted <strong>irrigation manufacturing company</strong>, moves forward carrying his legacy in <strong>drip irrigation systems</strong>, <strong>sprinkler irrigation systems</strong>, and <strong>farm irrigation solutions</strong> — with pride, with purpose, and with a promise to uphold his standards in every <strong>quality irrigation product</strong> we manufacture.&quot;
          </p>
        </div>
      </section>

      <Footer />
    </main>
    </>
  );
};

export default FounderVisionPage;