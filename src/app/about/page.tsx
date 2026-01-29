import React from "react";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import AboutSection from "@/components/AboutSection";
import StatsSection from "@/components/StatsSection";
import TeamSection from "@/components/TeamSection";
import Footer from "@/components/Footer";

const AboutPage = () => {
  return (
    <main className="min-h-screen bg-whitesmoke">
      <Navbar />
      <PageHeader 
        title="About Us" 
        backgroundImage="https://d170mw2nhcb1v0.cloudfront.net/img/12.png"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Pages", href: "#" },
          { label: "About", active: true }
        ]}
      />
      <AboutSection />
      <StatsSection />
      <TeamSection />
      <Footer />
    </main>
  );
};

export default AboutPage;