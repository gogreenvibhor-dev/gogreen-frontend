"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "./founder-vision.module.css";

export default function FounderVision() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // enhanced scroll animation trigger with IntersectionObserver
    const observerOptions = {
      threshold: 0.15,
      rootMargin: "0px 0px -100px 0px",
    };

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.animate);
          observerRef.current?.unobserve(entry.target); // One-time animation
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll(
      `.${styles.intro} p, .${styles.section}, .${styles.sectionHeading}, .${styles.subtitle}, .${styles.timelineItem}, .${styles.promiseSection} p, .${styles.visionItem}, .${styles.valueCard}`
    );

    elements.forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <main className="bg-[#f9f9f5] text-[#2d2d2d] leading-[1.8] overflow-x-hidden font-sans">
      <Navbar />

      <header className={styles.header}>
        <div className={styles.heroContent}>
          <div className="flex-1 text-center md:text-left">
            <h1 className={styles.headerTitle}>Founder’s Vision</h1>
            <p className={styles.founderName}>
              Late Shri Dhirendar Kumar Jain (Pipewale Bauji)
            </p>
            <p className={styles.founderSubtitle}>
              Engineer. Architect. Visionary.
            </p>
          </div>
          <div className={styles.photoPlaceholder}>
            <Image
              src="/img/dada-ji.png"
              alt="Late Shri Dhirendar Kumar Jain"
              width={300}
              height={340}
              className="rounded-[150px] object-cover"
              priority
            />
          </div>
        </div>
      </header>

      <section className={styles.intro}>
        <div className="container mx-auto px-4 max-w-[1400px]">
          <p>
            Vidhi Enterprises stands on the foundation laid by Late Shri
            Dhirendar Kumar Jain, affectionately known as Pipewale Bauji, whose
            remarkable journey continues to guide our purpose, values, and
            ambition.
          </p>
          <p>
            An engineer and architect by profession, he believed that precision,
            discipline, and good design were not just principles for
            buildings—but for businesses, products, and life itself.
          </p>
          <p>
            In the early 1980s, with no capital, no workforce, and no industry
            connections, he started everything from his home, working tirelessly
            with just one helper.
          </p>
          <p>
            What began as a modest effort grew—brick by brick—into a brand known
            for quality, integrity, and innovation in irrigation components.
          </p>
        </div>
      </section>

      <section className={`${styles.section} ${styles.visionSection}`}>
        <div className="container mx-auto px-4 max-w-[1400px]">
          <h2 className={styles.sectionHeading}>A Vision Rooted in Purpose</h2>
          <p className={styles.subtitle}>
            Shri D.K. Jain saw agriculture as the backbone of the nation and
            understood that water-efficient irrigation would shape the future of
            farming. His purpose was simple yet powerful:
          </p>
          <div className={styles.grid}>
            <div className={styles.visionItem} style={{ animationDelay: "0.2s" }}>
              <i className="fas fa-seedling"></i>
              <h3>Make reliable irrigation components accessible</h3>
            </div>
            <div className={styles.visionItem} style={{ animationDelay: "0.4s" }}>
              <i className="fas fa-handshake"></i>
              <h3>Support farmers with quality they can trust</h3>
            </div>
            <div className={styles.visionItem} style={{ animationDelay: "0.6s" }}>
              <i className="fas fa-balance-scale"></i>
              <h3>Build a company where ethics come before profit</h3>
            </div>
            <div className={styles.visionItem} style={{ animationDelay: "0.8s" }}>
              <i className="fas fa-lightbulb"></i>
              <h3>
                Innovate to reduce water wastage and increase productivity
              </h3>
            </div>
          </div>
          <p className={`${styles.subtitle} mt-10 text-center`}>
            His vision was not only to manufacture products, but to empower
            livelihoods.
          </p>
        </div>
      </section>

      <section className={`${styles.section} ${styles.legacySection}`}>
        <div className="container mx-auto px-4 max-w-[1400px]">
          <h2 className={styles.sectionHeading}>
            Engineering Excellence as a Philosophy
          </h2>
          <p className={styles.subtitle}>
            Being an engineer and architect, he was meticulous about:
          </p>
          <div className={styles.grid}>
            <div className={styles.visionItem}>
              <i className="fas fa-ruler-combined"></i>
              <h3>Accuracy in design</h3>
            </div>
            <div className={styles.visionItem}>
              <i className="fas fa-cogs"></i>
              <h3>Consistency in production</h3>
            </div>
            <div className={styles.visionItem}>
              <i className="fas fa-hard-hat"></i>
              <h3>Long-lasting materials</h3>
            </div>
            <div className={styles.visionItem}>
              <i className="fas fa-tools"></i>
              <h3>Practical innovation</h3>
            </div>
            <div className={styles.visionItem}>
              <i className="fas fa-clipboard-check"></i>
              <h3>Strong quality control</h3>
            </div>
          </div>
          <p className={`${styles.subtitle} mt-10 text-center`}>
            To him, every dripper, fitting, or pipe was not a product — it was a
            responsibility. His engineering mindset shaped the culture of Vidhi
            Enterprises: Work with precision. Deliver with honesty. Build with
            purpose.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container mx-auto px-4 max-w-[1400px]">
          <h2 className={styles.sectionHeading}>
            From a Small Room to a Global Journey
          </h2>
          <p className={styles.subtitle}>
            What began in one room with a single helper has today expanded into:
          </p>
          <div className={styles.journeyTimeline}>
            <div className={styles.timelineLine}></div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineContent}>
                <h3>A modern manufacturing setup</h3>
              </div>
              <div className={styles.timelineDot}></div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineDot}></div>
              <div className={styles.timelineContent}>
                <h3>A strong workforce</h3>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineContent}>
                <h3>Multiple product lines</h3>
              </div>
              <div className={styles.timelineDot}></div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineDot}></div>
              <div className={styles.timelineContent}>
                <h3>ISO and industry certifications</h3>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineContent}>
                <h3>
                  A growing export presence across the Middle East, Africa &
                  Asia
                </h3>
              </div>
              <div className={styles.timelineDot}></div>
            </div>
          </div>
          <p className={`${styles.subtitle} mt-10 text-center`}>
            This growth reflects the resilience, courage, and discipline he
            instilled in the company.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container mx-auto px-4 max-w-[1400px]">
          <h2 className={styles.sectionHeading}>
            Values That Continue to Guide Us
          </h2>
          <p className={styles.subtitle}>
            Shri D.K. Jain’s legacy continues to inspire every decision we make:
          </p>
          <div className={styles.valuesGrid}>
            <div className={styles.valueCard} style={{ animationDelay: "0.2s" }}>
              <h3>Integrity first</h3>
            </div>
            <div className={styles.valueCard} style={{ animationDelay: "0.4s" }}>
              <h3>Build long-term relationships</h3>
            </div>
            <div className={styles.valueCard} style={{ animationDelay: "0.6s" }}>
              <h3>Create value, not just products</h3>
            </div>
            <div className={styles.valueCard} style={{ animationDelay: "0.8s" }}>
              <h3>Work hard and stay grounded</h3>
            </div>
            <div className={styles.valueCard} style={{ animationDelay: "1s" }}>
              <h3>Let quality speak louder than marketing</h3>
            </div>
          </div>
          <p className={`${styles.subtitle} mt-10 text-center`}>
            These values remain the heart of Vidhi Enterprises.
          </p>
        </div>
      </section>

      <section className={`${styles.section} ${styles.promiseSection}`}>
        <div className="container mx-auto px-4 max-w-[1400px]">
          <h2 className={styles.sectionHeading}>
            Looking Ahead — Continuing His Vision
          </h2>
          <p>
            Today, the company is led with the same passion he carried — to
            become a global benchmark in: Micro-irrigation components,
            Water-efficient technologies, Precision agricultural solutions,
            Sustainable manufacturing.
          </p>
          <p>
            His journey teaches us that great things are built with courage,
            honesty, and a clear vision, no matter how small the beginning.
            Vidhi Enterprises moves forward carrying his legacy — with pride,
            with purpose, and with a promise to uphold his standards in
            everything we do.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
