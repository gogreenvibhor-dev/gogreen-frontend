"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Head from "next/head";

const KnowledgeHubPage = () => {
  const [openIndex, setOpenOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "Why is my dripper not giving proper water flow?",
      a: "Drippers may not deliver water properly due to clogging caused by dirt or sand, incorrect water pressure, bent lateral pipes, or air lock inside the system. Regular filter cleaning and flushing of lateral pipes help restore proper water flow.",
    },
    {
      q: "What is a Venturi Injector and why is it used in drip irrigation?",
      a: "Venturi Injector is used to inject fertilizers and chemicals into drip irrigation systems. It works on pressure difference and ensures uniform fertilizer distribution while saving time, water and labor.",
    },
    {
      q: "How can clogging be prevented in drip irrigation systems?",
      a: "Clogging can be prevented by cleaning sand and screen filters regularly, flushing lateral pipes, using clean water, performing fertigation with proper filtration and installing air release valves.",
    },
    {
      q: "Why are filters important in drip and sprinkler irrigation systems?",
      a: "Filters remove sand, silt, algae and debris from irrigation water. Without proper filtration, drippers and sprinkler nozzles can clog easily which will lead to uneven irrigation and system damage.",
    },
    {
      q: "Why is my irrigation pipe leaking or bursting?",
      a: "Pipe leakage or bursting usually occurs due to high water pressure, poor-quality pipes, incorrect installation or improper use of clamps and grommets. Using ISI-marked products and correct fittings helps prevent these issues.",
    },
    {
      q: "Does drip irrigation reduce electricity consumption?",
      a: "Yes, drip irrigation reduces electricity costs by 30–50% because it uses less water and requires shorter pump running time compared to traditional irrigation methods.",
    },
    {
      q: "Can drip irrigation be used for polyhouse farming?",
      a: "Yes, drip irrigation is ideal for polyhouse farming. It is commonly used for crops such as capsicum, cucumber, tomato, strawberry and other greenhouse vegetables.",
    },
    {
      q: "What is drip irrigation and how does it work?",
      a: "Drip irrigation is a water-efficient irrigation method where water is supplied slowly and directly to the plant's root zone. It saves up to 60–70% water which helps improve crop yield and reduce weed growth.",
    },
    {
      q: "Is drip irrigation suitable for all crops?",
      a: "Drip irrigation is suitable for vegetables, fruits, orchards, sugarcane, cotton, floriculture crops, greenhouses and landscape irrigation.",
    },
  ];

  // Structured Data for FAQ Page
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <>
      <Head>
        <title>Drip Irrigation FAQ - Expert Answers | Vidhi Enterprises Knowledge Hub</title>
        <meta name="description" content="Get expert answers to your drip irrigation questions. Learn about drippers, filters, venturi injectors, clogging prevention, polyhouse farming & more from irrigation specialists." />
        <meta name="keywords" content="drip irrigation FAQ, irrigation troubleshooting, dripper problems, venturi injector guide, filter maintenance, drip system clogging, polyhouse irrigation, irrigation questions, drip irrigation help" />
        <link rel="canonical" href="https://vidhienterprises.com/knowledge-hub" />
        <meta property="og:title" content="Irrigation FAQ & Troubleshooting Guide | Vidhi Enterprises" />
        <meta property="og:description" content="Expert answers to common drip irrigation questions. Troubleshoot dripper issues, learn about filtration & optimize your irrigation system." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vidhienterprises.com/knowledge-hub" />
      </Head>

      {/* JSON-LD Structured Data for FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="min-h-screen bg-white" itemScope itemType="https://schema.org/FAQPage">
      <Navbar />
      
      <header className="h-[45vh] min-h-[450px] bg-gradient-to-br from-black/60 to-black/70 flex items-center justify-center text-center text-white relative mt-2 bg-[url('https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center bg-blend-overlay">
        <div className="container mx-auto px-4 animate-fadeIn">
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 font-heading drop-shadow-lg">Drip Irrigation Knowledge Hub & FAQ</h1>
          <p className="text-xl lg:text-3xl max-w-3xl mx-auto font-light tracking-wide opacity-90">
            Expert Answers to Your Drip Irrigation, Sprinkler & Micro-Irrigation Questions
          </p>
        </div>
      </header>

      <section className="py-24" aria-labelledby="faq-heading">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 id="faq-heading" className="text-4xl lg:text-5xl font-bold text-center text-[#0e3d27] mb-16 font-heading relative after:content-[''] after:block after:w-32 after:h-1 after:bg-[#9c7a3a] after:mx-auto after:mt-6">
            Frequently Asked Questions About Drip Irrigation Systems
          </h2>

          <div className="space-y-6" itemScope itemType="https://schema.org/FAQPage">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-[#f8fdfa] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-green-50" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <button 
                  onClick={() => setOpenOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between p-8 text-left bg-[#1a5f3d] text-white hover:bg-[#0e3d27] transition-colors"
                  aria-expanded={openIndex === i}
                  aria-controls={`faq-answer-${i}`}
                >
                  <span className="text-xl font-bold" itemProp="name">{faq.q}</span>
                  <i className={`fas fa-chevron-down transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`} aria-hidden="true"></i>
                </button>
                <div 
                  id={`faq-answer-${i}`}
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${openIndex === i ? 'max-h-[500px] p-8 opacity-100' : 'max-h-0 p-0 opacity-0'}`}
                  itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer"
                >
                  <p className="text-lg text-gray-700 leading-relaxed font-medium" itemProp="text">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
</>
  );
};

export default KnowledgeHubPage;