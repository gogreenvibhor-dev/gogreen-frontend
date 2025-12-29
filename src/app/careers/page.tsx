"use client";

import React, { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Careers() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slideUpFade");
            entry.target.classList.remove("opacity-0", "translate-y-10");
            observerRef.current?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".reveal-on-scroll");
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  return (
    <main className="min-h-screen bg-slate-50 font-sans">
      <Navbar />

      {/* Header */}
      <header className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-500 text-white text-center py-36 px-4 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 800'%3E%3Cdefs%3E%3Cpattern id='grid' width='80' height='80' patternUnits='userSpaceOnUse'%3E%3Cpath d='M80 0 L0 0 0 80' fill='none' stroke='white' stroke-width='2'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)'/%3E%3C/svg%3E")`,
            animation: "gridMove 30s linear infinite",
          }}
        ></div>
        <div className="relative z-10 container mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-serif tracking-tight animate-slideDown">
            👥 Careers
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto opacity-90 animate-slideUp">
            Join a Legacy of Engineering, Integrity & Growth
          </p>
        </div>
        <style jsx>{`
          @keyframes gridMove {
            from { background-position: 0 0; }
            to { background-position: 80px 80px; }
          }
        `}</style>
      </header>

      {/* Why Work With Us */}
      <section className="py-24 reveal-on-scroll opacity-0 translate-y-10 transition-all duration-1000">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-blue-900 mb-6 font-serif">
            Why Work With Us?
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-800 to-blue-500 mx-auto mb-12"></div>
          <p className="text-center text-lg text-slate-600 max-w-4xl mx-auto mb-16 leading-relaxed">
            At Vidhi Enterprises, we believe people are the strength behind every milestone we achieve. For over four decades, our company has been built by individuals who value precision, honesty, teamwork, and excellence — the same values our founder lived by.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "fa-history",
                title: "1. A Legacy of 40+ Years",
                desc: "Be part of a company built on strong principles, consistent growth, and engineering excellence.",
              },
              {
                icon: "fa-graduation-cap",
                title: "2. Learning-Focused Environment",
                desc: "From moulding and production to quality testing and export management — every team member gets opportunities to learn, evolve, and upskill.",
              },
              {
                icon: "fa-globe",
                title: "3. Exposure to Global Markets",
                desc: "Work with clients and partners from the Middle East, Africa, and Asia and learn how international business works.",
              },
              {
                icon: "fa-shield-alt",
                title: "4. Stable, Ethical & Value-Driven Workplace",
                desc: "Built on trust, the company culture is rooted in honesty, discipline, and respect for every employee.",
              },
              {
                icon: "fa-tools",
                title: "5. Innovation & Modern Manufacturing",
                desc: "Get hands-on experience with advanced moulding, extrusion, tool room systems, die casting, and quality labs.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-10 rounded-2xl shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 group overflow-hidden relative"
              >
                <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-blue-100/20 to-transparent group-hover:left-full transition-all duration-1000"></div>
                <i className={`fas ${item.icon} text-5xl text-blue-500 mb-6 block group-hover:text-blue-800 transition-colors duration-300`}></i>
                <h3 className="text-xl font-bold text-blue-900 mb-4">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Opportunities */}
      <section className="py-24 bg-blue-50 reveal-on-scroll opacity-0 translate-y-10 transition-all duration-1000 delay-200">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-blue-900 mb-6 font-serif">
            Current Opportunities
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-800 to-blue-500 mx-auto mb-12"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
            {[
              {
                title: "Production & Operations",
                roles: [
                  "Machine Operators (Injection Moulding / Extrusion)",
                  "Production Supervisors",
                  "Quality Control Assistants",
                  "Tool Room Technicians",
                  "Assembly Line Workers",
                ],
              },
              {
                title: "Office & Management",
                roles: [
                  "Accounts Executive",
                  "Sales & Marketing Coordinator",
                  "Export Documentation Executive",
                  "Inventory & Store Management",
                ],
              },
              {
                title: "Field & Technical",
                roles: [
                  "Service/Installation Technician",
                  "Field Support Engineer",
                  "Irrigation Product Trainer",
                ],
              },
              {
                title: "Internships",
                roles: [
                  "Engineering Intern (Mechanical/Plastic Tech)",
                  "Marketing & International Business Intern",
                  "Operations & Supply Chain Intern",
                ],
              },
            ].map((cat, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-2xl shadow-md hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-blue-900 mb-6 border-b-2 border-blue-500 pb-2 inline-block">
                  {cat.title}
                </h3>
                <ul className="space-y-3">
                  {cat.roles.map((role, idx) => (
                    <li key={idx} className="flex items-start text-slate-700">
                      <span className="mr-2 text-blue-500 text-xl">•</span>
                      {role}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Look For */}
      <section className="py-24 reveal-on-scroll opacity-0 translate-y-10 transition-all duration-1000">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-blue-900 mb-6 font-serif">
            What We Look For
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-800 to-blue-500 mx-auto mb-16"></div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { icon: "fa-award", text: "Commitment to Quality" },
              { icon: "fa-book-reader", text: "Willingness to Learn" },
              { icon: "fa-clock", text: "Discipline & Responsibility" },
              { icon: "fa-lightbulb", text: "Problem-Solving Attitude" },
              { icon: "fa-hands-helping", text: "Respect for Values & Teamwork" },
              { icon: "fa-search", text: "Technical Curiosity" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-2xl shadow-sm text-center hover:scale-105 hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <i className={`fas ${item.icon} text-4xl text-blue-500 mb-4`}></i>
                <h3 className="text-lg font-bold text-slate-800">{item.text}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Apply */}
      <section className="py-24 bg-gradient-to-br from-blue-900 to-blue-600 text-white text-center reveal-on-scroll opacity-0 translate-y-10 transition-all duration-1000">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif text-white">How to Apply</h2>
          <div className="w-32 h-1 bg-white mx-auto mb-10"></div>
          
          <p className="text-xl mb-4 max-w-2xl mx-auto">
            Email your resume to:
          </p>
          <p className="text-3xl font-bold mb-8">careers@vidhienterprises.com</p>
          <p className="text-lg mb-10 opacity-90 max-w-2xl mx-auto">
            Our HR team will contact shortlisted candidates for further rounds.
          </p>
          
          <a
            href="mailto:careers@vidhienterprises.com"
            className="inline-block bg-white text-blue-900 py-4 px-10 rounded-full font-bold text-lg hover:shadow-2xl hover:-translate-y-1 hover:scale-105 transition-all duration-300 animate-pulse"
          >
            Send Your Resume
          </a>
        </div>
      </section>

      {/* Life at Vidhi */}
      <section className="py-20 bg-white text-center reveal-on-scroll opacity-0 translate-y-10 transition-all duration-1000">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 font-serif">Life at Vidhi Enterprises</h2>
          <p className="text-xl text-slate-600 italic max-w-3xl mx-auto leading-relaxed">
            "A workplace where you grow not just as a professional, but as a person — learning discipline, precision, and values from a legacy built since the 1980s."
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
