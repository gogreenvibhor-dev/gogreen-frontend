import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import TeamSection from "@/components/TeamSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Team | Vidhi Enterprises",
  description: "Meet our dedicated and experienced team members at Vidhi Enterprises.",
};

export default function TeamPage() {
  return (
    <main className="bg-white">
      <Navbar />
      
      <PageHeader 
        title="Our Team" 
        backgroundImage="/img/carousel-1.jpg"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Pages", href: "#" },
          { label: "Our Team", active: true }
        ]}
      />

      <TeamSection />

      <Footer />
    </main>
  );
}
