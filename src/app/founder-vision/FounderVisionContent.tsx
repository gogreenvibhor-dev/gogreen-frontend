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
              Engineer, Architect, Visionary.
            </p>
          </div>
          <div className={styles.photoPlaceholder}>
            <Image
              src="https://d170mw2nhcb1v0.cloudfront.net/img/dada-ji.png"
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
            Dhirendar Kumar Jain, affectionately known as Pipewale Bauji. His
            journey continues to guide our purpose, values and ambition.
          </p>
          <p>
            An engineer and architect by profession, he believed precision,
            discipline and thoughtful design were essential not only for
            buildings, but for businesses, products and life itself.
          </p>
          <p>
            In the early 1980s, with no capital, no workforce and no industry
            backing, he began operations from his home, working tirelessly with
            just one helper.
          </p>
          <p>
            What started as a modest effort steadily evolved into a respected
            name in irrigation manufacturing, built on trust and technical
            excellence.
          </p>
        </div>
      </section>

      <section className={`${styles.section} ${styles.visionSection}`}>
        <div className="container mx-auto px-4 max-w-[1400px]">
          <h2 className={styles.sectionHeading}>A Vision Rooted in Purpose</h2>
          <p className={styles.subtitle}>
            Shri D.K. Jain viewed agriculture as the backbone of the nation and
            understood that water-efficient irrigation would define the future of
            farming. His purpose was clear:
          </p>
          <div className={styles.grid}>
            <div className={styles.visionItem} style={{ animationDelay: "0.2s" }}>
              <i className="fas fa-seedling"></i>
              <h3>Make dependable irrigation components accessible</h3>
            </div>
            <div className={styles.visionItem} style={{ animationDelay: "0.4s" }}>
              <i className="fas fa-handshake"></i>
              <h3>Support farmers with products they can rely on</h3>
            </div>
            <div className={styles.visionItem} style={{ animationDelay: "0.6s" }}>
              <i className="fas fa-balance-scale"></i>
              <h3>Build a business where ethics come before profit</h3>
            </div>
            <div className={styles.visionItem} style={{ animationDelay: "0.8s" }}>
              <i className="fas fa-lightbulb"></i>
              <h3>
                Innovate to reduce water waste and improve productivity
              </h3>
            </div>
          </div>
          <p className={`${styles.subtitle} mt-10 text-center`}>
            For him, manufacturing was not just about output. It was about
            empowering livelihoods.
          </p>
        </div>
      </section>

      <section className={`${styles.section} ${styles.legacySection}`}>
        <div className="container mx-auto px-4 max-w-[1400px]">
          <h2 className={styles.sectionHeading}>
            Engineering Excellence as a Philosophy
          </h2>
          <p className={styles.subtitle}>
            As an engineer and architect, he was deeply focused on:
          </p>
          <div className={styles.grid}>
            <div className={styles.visionItem}>
              <i className="fas fa-ruler-combined"></i>
              <h3>Design accuracy</h3>
            </div>
            <div className={styles.visionItem}>
              <i className="fas fa-cogs"></i>
              <h3>Production consistency</h3>
            </div>
            <div className={styles.visionItem}>
              <i className="fas fa-hard-hat"></i>
              <h3>Use of durable materials</h3>
            </div>
            <div className={styles.visionItem}>
              <i className="fas fa-tools"></i>
              <h3>Practical, field-driven innovation</h3>
            </div>
            <div className={styles.visionItem}>
              <i className="fas fa-clipboard-check"></i>
              <h3>Strong quality control systems</h3>
            </div>
          </div>
          <p className={`${styles.subtitle} mt-10 text-center`}>
            To him, every dripper, fitting or pipe carried responsibility. This
            mindset shaped the culture of Vidhi Enterprises: "Work with precision,
            deliver with honesty and build with purpose."
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container mx-auto px-4 max-w-[1400px]">
          <h2 className={styles.sectionHeading}>
            From a Small Room to a Global Journey
          </h2>
          <p className={styles.subtitle}>
            From a single room and one helper, Vidhi Enterprises has grown into:
          </p>
          <div className={styles.journeyTimeline}>
            <div className={styles.timelineLine}></div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineContent}>
                <h3>A modern manufacturing facility</h3>
              </div>
              <div className={styles.timelineDot}></div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineDot}></div>
              <div className={styles.timelineContent}>
                <h3>A skilled and committed workforce</h3>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineContent}>
                <h3>Multiple irrigation product lines</h3>
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
                  An expanding export footprint across the Middle East, Africa,
                  and Asia
                </h3>
              </div>
              <div className={styles.timelineDot}></div>
            </div>
          </div>
          <p className={`${styles.subtitle} mt-10 text-center`}>
            This growth reflects the discipline, resilience, and values instilled
            by the founder.
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
              <h3>Integrity above all</h3>
            </div>
            <div className={styles.valueCard} style={{ animationDelay: "0.4s" }}>
              <h3>Long-term relationships over short-term gains</h3>
            </div>
            <div className={styles.valueCard} style={{ animationDelay: "0.6s" }}>
              <h3>Creating value, not just products</h3>
            </div>
            <div className={styles.valueCard} style={{ animationDelay: "0.8s" }}>
              <h3>Hard work with humility</h3>
            </div>
            <div className={styles.valueCard} style={{ animationDelay: "1s" }}>
              <h3>Letting quality speak louder than marketing</h3>
            </div>
          </div>
          <p className={`${styles.subtitle} mt-10 text-center`}>
            These principles remain the heart of Vidhi Enterprises.
          </p>
        </div>
      </section>

      <section className={`${styles.section} ${styles.promiseSection}`}>
        <div className="container mx-auto px-4 max-w-[1400px]">
          <h2 className={styles.sectionHeading}>
            Looking Ahead Continuing His Vision
          </h2>
          <p>
            Today, Vidhi Enterprises moves forward with the same commitment to
            become a global benchmark in: Micro-irrigation components,
            Water-efficient technologies, Precision agricultural solutions,
            Sustainable manufacturing practices.
          </p>
          <p>
            The journey of our founder reminds us that enduring success is built
            with courage, honesty and clarity of vision, regardless of how small
            the beginning was. Vidhi Enterprises continues ahead with pride, with
            purpose and with an unwavering promise to uphold the standards on
            which it was built.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
