import React from "react";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import GlobalPresenceMap from "@/components/GlobalPresenceMap";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Global Presence - Irrigation Products Exporter to 50+ Countries | Vidhi Enterprises",
  description: "Vidhi Enterprises exports drip irrigation systems, sprinklers & HDPE pipes to 50+ countries including UAE, Saudi Arabia, Qatar, Kenya, Tanzania, Nepal. Trusted agricultural irrigation supplier worldwide since 1983.",
  keywords: [
    "irrigation products exporter",
    "drip irrigation exporter India",
    "agricultural sprinkler manufacturer",
    "irrigation accessories supplier",
    "drip irrigation products India",
    "sprinkler system exporter",
    "HDPE pipes exporter",
    "irrigation fittings supplier",
    "drip irrigation UAE",
    "sprinklers Middle East",
    "irrigation equipment Africa",
    "farm irrigation exporter",
    "micro irrigation exporter",
    "irrigation products Kenya",
    "drip systems Tanzania",
    "agricultural irrigation Qatar",
    "greenhouse irrigation exporter",
    "orchard irrigation supplier",
    "landscape irrigation products",
    "water-saving irrigation exporter"
  ],
  openGraph: {
    title: "Global Irrigation Presence - Exporting to 50+ Countries Worldwide",
    description: "Leading exporter of drip irrigation & sprinkler systems to UAE, Saudi Arabia, Qatar, Kenya, Africa & Asia. ISO-certified quality trusted globally.",
    url: "https://vidhienterprises.com/global-presence",
    type: "website"
  },
  alternates: {
    canonical: "https://vidhienterprises.com/global-presence"
  }
};

const GlobalPresencePage = () => {
  const organizationPlaceSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Vidhi Enterprises",
    "description": "Leading exporter of agricultural irrigation systems, drip irrigation products, sprinklers and micro-irrigation solutions to 50+ countries",
    "areaServed": [
      { "@type": "Country", "name": "United Arab Emirates" },
      { "@type": "Country", "name": "Saudi Arabia" },
      { "@type": "Country", "name": "Qatar" },
      { "@type": "Country", "name": "Oman" },
      { "@type": "Country", "name": "Kuwait" },
      { "@type": "Country", "name": "Kenya" },
      { "@type": "Country", "name": "Tanzania" },
      { "@type": "Country", "name": "Uganda" },
      { "@type": "Country", "name": "Nigeria" },
      { "@type": "Country", "name": "Ghana" },
      { "@type": "Country", "name": "Ethiopia" },
      { "@type": "Country", "name": "Nepal" },
      { "@type": "Country", "name": "Bangladesh" },
      { "@type": "Country", "name": "Sri Lanka" },
      { "@type": "Country", "name": "India" }
    ],
    "makesOffer": {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Product",
        "name": "Drip Irrigation Systems and Agricultural Irrigation Equipment",
        "description": "Complete range of drip irrigation products, sprinkler systems, HDPE pipes, filters and micro-irrigation accessories"
      }
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationPlaceSchema) }}
      />
      
      <main className="min-h-screen bg-whitesmoke" itemScope itemType="https://schema.org/AboutPage">
        <Navbar />
        <PageHeader 
          title="Global Presence - Trusted Irrigation Exporter to 50+ Countries" 
          backgroundImage="https://d170mw2nhcb1v0.cloudfront.net/img/12.png"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Global Presence", active: true }
          ]}
        />
        <GlobalPresenceMap />
        <Footer />
      </main>
    </>
  );
};

export default GlobalPresencePage;