"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const FeatureCards = () => {
  const features = [
    {
      icon: "https://d170mw2nhcb1v0.cloudfront.net/img/few Logo.png",
      title: "100+ Reliable Products for Small & Large Farms",
      description: "Builds instant credibility and trust",
    },
    {
      icon: "https://d170mw2nhcb1v0.cloudfront.net/img/2.png",
      title: "Quality You Can Rely On",
      description: "Simple, strong, and customer-focused",
    },
    {
      icon: "https://d170mw2nhcb1v0.cloudfront.net/img/3.png",
      title: "Innovation Meets Integrity",
      description: "Shows modern, forward-thinking values with honesty",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <div className="w-full py-5">
      <div className="max-w-7xl mx-auto py-5">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4"
        >
          {features.map((f, i) => (
            <motion.div key={i} variants={itemVariants}>
              <motion.div
                whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
                transition={{ duration: 0.3 }}
                className="bg-[#fffdf5] shadow-lg rounded-2xl flex flex-col sm:flex-row items-center h-full px-6 py-6 sm:px-10 sm:py-8 min-h-[160px] sm:min-h-[180px] text-center sm:text-left"
              >
                <div className="flex flex-col sm:flex-row w-full items-center">
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className="flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-light flex items-center justify-center mb-4 sm:mb-0"
                  >
                    <Image src={f.icon} alt={f.title} width={80} height={80} className="w-12 h-12 sm:w-16 sm:h-16 object-contain" />
                  </motion.div>
                  <div className="sm:pl-6">
                    <h4 className="text-primary font-bold mb-2 leading-tight">{f.title}</h4>
                    <span className="text-green-900 font-bold text-sm">{f.description}</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default FeatureCards;
