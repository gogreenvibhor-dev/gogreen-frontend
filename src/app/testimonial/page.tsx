import React from "react";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import TestimonialSection from "@/components/TestimonialSection";
import Footer from "@/components/Footer";

const TestimonialPage = () => {
  return (
    <main className="min-h-screen bg-whitesmoke">
      <Navbar />
      <PageHeader 
        title="Testimonials" 
        backgroundImage="https://d170mw2nhcb1v0.cloudfront.net/img/12.png"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Pages", href: "#" },
          { label: "Testimonial", active: true }
        ]}
      />
      <TestimonialSection />
      <Footer />
    </main>
  );
};

export default TestimonialPage;
