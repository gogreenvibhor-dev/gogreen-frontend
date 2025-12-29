"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const GlobalPresenceMap = () => {
  const router = useRouter();
  const [tooltip, setTooltip] = useState({ show: false, x: 0, y: 0, content: "" });

  const countryRoutes: { [key: string]: string } = {
    "United Arab Emirates": "/uae",
    "Australia": "/australia",
    "Burundi": "/burundi",
    "Bangladesh": "/bangladesh",
    "Bahrain": "/bahrain",
    "Bolivia": "/bolivia",
    "Brazil": "/brazil",
    "Bhutan": "/bhutan",
    "Botswana": "/botswana",
    "Chile": "/chile",
    "Côte d'Ivoire": "/cote-divoire",
    "Cameroon": "/cameroon",
    "Egypt": "/egypt",
    "Ethiopia": "/ethiopia",
    "Gabon": "/gabon",
    "Georgia": "/georgia",
    "Ghana": "/ghana",
    "Guinea": "/guinea",
    "Guadeloupe": "/guadeloupe",
    "The Gambia": "/gambia",
    "Guatemala": "/guatemala",
    "Indonesia": "/indonesia",
    "Iran": "/iran",
    "Iraq": "/iraq",
    "Kenya": "/kenya",
    "Kuwait": "/kuwait",
    "Lebanon": "/lebanon",
    "Sri Lanka": "/sri-lanka",
    "Morocco": "/morocco",
    "Maldives": "/maldives",
    "Mexico": "/mexico",
    "Myanmar": "/myanmar",
    "Mongolia": "/mongolia",
    "Mozambique": "/mozambique",
    "Malawi": "/malawi",
    "Namibia": "/namibia",
    "Niger": "/niger",
    "Nigeria": "/nigeria",
    "Netherlands": "/netherlands",
    "Nepal": "/nepal",
    "New Zealand": "/new-zealand",
    "Oman": "/oman",
    "Peru": "/peru",
    "Philippines": "/philippines",
    "Qatar": "/qatar",
    "Rwanda": "/rwanda",
    "Sudan": "/sudan",
    "Saudi Arabia": "/saudi-arabia",
    "South Africa": "/south-africa",
    "Senegal": "/senegal",
    "Somalia": "/somalia",
    "Seychelles": "/seychelles",
    "Thailand": "/thailand",
    "Tanzania": "/tanzania",
    "Uganda": "/uganda",
    "United States": "/united-states",
    "Vietnam": "/viet-nam",
    "Yemen": "/yemen",
    "Zambia": "/zambia",
    "Zimbabwe": "/zimbabwe"
  };

  const handleMouseMove = (e: React.MouseEvent, country: string) => {
    setTooltip({
      show: true,
      x: e.clientX,
      y: e.clientY,
      content: country,
    });
  };

  const handleCountryClick = (country: string) => {
    const route = countryRoutes[country];
    if (route) {
      router.push(route);
    }
  };

  const getFillColor = (countryId: string) => {
    if (countryId === "India") return "#FFD700"; // Golden for India
    if (countryRoutes[countryId]) return "#90EE90"; // Light green for present countries
    return "#ececec"; // Default grey
  };

  return (
    <section className="py-20 bg-whitesmoke overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-primary font-bold uppercase tracking-wider mb-2">Our Global Presence</p>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
          <h2 className="text-4xl font-bold text-gray-900">Where You Can Find Us</h2>
        </div>

        <div className="bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200">
          <div className="flex items-center justify-between p-4 bg-gray-50 border-b">
            <div className="flex items-center">
              <i className="fa fa-map-marker-alt text-primary text-xl mr-3"></i>
              <strong className="text-gray-800">Worldwide Locations</strong>
            </div>
            <button 
              onClick={() => window.location.reload()} 
              className="text-sm font-bold text-primary border border-primary px-4 py-1 rounded hover:bg-primary hover:text-white transition"
            >
              <i className="fa fa-sync-alt mr-2"></i> Reset View
            </button>
          </div>

          <div className="relative aspect-[2000/857] bg-[#d0e0e8]">
            <svg 
              viewBox="0 0 2000 857" 
              className="w-full h-full"
              fill="#ececec"
              stroke="#000"
              strokeWidth="0.5"
            >
              <path className="allPaths hover:fill-primary transition-colors cursor-pointer" d="M1383 261.6l1.5 1.8-2.9 0.8-2.4 1.1-5.9 0.8-5.3 1.3-2.4 2.8 1.9 2.7 1.4 3.2-2 2.7 0.8 2.5-0.9 2.3-5.2-0.2 3.1 4.2-3.1 1.7-1.4 3.8 1.1 3.9-1.8 1.8-2.1-0.6-4 0.9-0.2 1.7-4.1 0-2.3 3.7 0.8 5.4-6.6 2.7-3.9-0.6-0.9 1.4-3.4-0.8-5.3 1-9.6-3.3 3.9-5.8-1.1-4.1-4.3-1.1-1.2-4.1-2.7-5.1 1.6-3.5-2.5-1 0.5-4.7 0.6-8 5.9 2.5 3.9-0.9 0.4-2.9 4-0.9 2.6-2-0.2-5.1 4.2-1.3 0.3-2.2 2.9 1.7 1.6 0.2 3 0 4.3 1.4 1.8 0.7 3.4-2 2.1 1.2 0.9-2.9 3.2 0.1 0.6-0.9-0.2-2.6 1.7-2.2 3.3 1.4-0.1 2 1.7 0.3 0.9 5.4 2.7 2.1 1.5-1.4 2.2-0.6 2.5-2.9 3.8 0.5 5.4 0z" id="Afghanistan" style={{fill: getFillColor("Afghanistan")}} onMouseMove={(e) => handleMouseMove(e, "Afghanistan")} onMouseLeave={() => setTooltip({ ...tooltip, show: false })} onClick={() => handleCountryClick("Afghanistan")} />
              <path className="allPaths hover:fill-primary transition-colors cursor-pointer" d="M1427.6 308l-2.8 3-0.9 6 5.8 2.4 5.8 3.1 7.8 3.6 7.7 0.9 3.8 3.2 4.3 0.6 6.9 1.5 4.6-0.1 0.1-2.5-1.5-4.1-0.2-2.7 3.1-1.4 1.5 5.1 0.4 1.2 5.5 2.5 3.2-1 4.7 0.4 4.5-0.2-0.5-3.9-2.6-2.1 4.2-0.8 3.9-4.8 5.4-4 4.9 1.5 3.2-2.7 3.6 4-1.2 2.7 6.1 1 1 2.4-1.7 1.2 1.4 3.9-4.2-1.1-6.2 4.4 0.9 3.7-2 5.4 0.3 3.1-1.6 5.3-4.6-1.5 0.9 6.7-1 2.2 1 2.7-2.5 1.5-4.4-10.2-1.5 0-0.3 4.2-3.6-3.4 1.2-3.6 2.4-0.4 1.6-5.4-3.4-1.1-5.1 0.1-5.4-0.9-1.2-4.5-2.7-0.3-4.9-2.8-1.2 4.4 4.6 3.4-3 2.4-0.9 2.3 3.7 1.7-0.3 3.9 2.6 4.8 1.6 5.3-0.5 2.4-3.8-0.1-6.6 1.3 0.9 4.8-2.4 3.8-7.5 4.4-5.3 7.5-3.8 4.1-5 4.2 0.3 2.9-2.6 1.6-4.8 2.3-2.6 0.3-1.2 4.9 1.9 8.4 0.7 5.3-1.9 6.1 0.7 10.9-2.9 0.3-2.3 4.9 1.9 2.2-5.1 1.8-1.7 4.3-2.2 1.9-5.6-6-3.1-9-2.5-6.5-2.2-3-3.4-6.2-2-8-1.4-4-5.9-8.8-3.5-12.5-2.6-8.2-0.8-7.8-1.7-6-7.7 3.9-4-0.8-8.1-7.8 2.4-2.3-1.9-2.5-7.1-5.5 3.2-4.3 12.1 0-1.8-5.5-3.5-3.2-1.4-5-4-2.8 4.9-6.8 6.5 0.5 4.5-6.7 2.2-6.5 3.9-6.5-1-4.6 3.8-3.7-5.1-3.1-2.9-4.4-3.3-5.6 2-2.8 8.5 1.6 5.7-1 3.8-5.4 7.7 7.6 0.8 5.2 3 3.3 0.6 3.3-4.1-0.9 3.2 7.1 6.2 4 8.6 4.5z" id="India" style={{fill: getFillColor("India")}} onMouseMove={(e) => handleMouseMove(e, "India")} onMouseLeave={() => setTooltip({ ...tooltip, show: false })} onClick={() => handleCountryClick("India")} />
              
              <path className="allPaths hover:fill-primary transition-colors cursor-pointer" d="M1488.8 323.5l2.6 2.1 0.5 3.9-4.5 0.2-4.7-0.4-3.2 1-5.5-2.5-0.4-1.2 2.6-4.8 2.6-1.6 4.3 1.4 2.9 0.2 2.8 1.7z" id="Bhutan" style={{fill: getFillColor("Bhutan")}} onMouseMove={(e) => handleMouseMove(e, "Bhutan")} onMouseLeave={() => setTooltip({ ...tooltip, show: false })} onClick={() => handleCountryClick("Bhutan")} />
              
              <path className="allPaths hover:fill-primary transition-colors cursor-pointer" d="M1264.1 333.3l0.3 0.1 0.2-0.1 0.4 0.7-0.1 0.2 0.1 0.9 0 0.7-0.2 0.4-0.1-0.4-0.6-0.8 0.1-0.4-0.2-0.7 0-0.4 0.1-0.2z" id="Bahrain" style={{fill: getFillColor("Bahrain")}} onMouseMove={(e) => handleMouseMove(e, "Bahrain")} onMouseLeave={() => setTooltip({ ...tooltip, show: false })} onClick={() => handleCountryClick("Bahrain")} />
              
              <path className="allPaths hover:fill-primary transition-colors cursor-pointer" d="M1500.6 360.3l0.6 4.6-2.1-1 1.1 5.2-2.1-3.3-0.8-3.3-1.5-3.1-2.8-3.7-5.2-0.3 0.9 2.7-1.2 3.5-2.6-1.3-0.6 1.2-1.7-0.7-2.2-0.6-1.6-5.3-2.6-4.8 0.3-3.9-3.7-1.7 0.9-2.3 3-2.4-4.6-3.4 1.2-4.4 4.9 2.8 2.7 0.3 1.2 4.5 5.4 0.9 5.1-0.1 3.4 1.1-1.6 5.4-2.4 0.4-1.2 3.6 3.6 3.4 0.3-4.2 1.5 0 4.4 10.2z" id="Bangladesh" style={{fill: getFillColor("Bangladesh")}} onMouseMove={(e) => handleMouseMove(e, "Bangladesh")} onMouseLeave={() => setTooltip({ ...tooltip, show: false })} onClick={() => handleCountryClick("Bangladesh")} />
              
              <path className="allPaths hover:fill-primary transition-colors cursor-pointer" d="M662.5 631.4l-0.3-2-5.4-3.3-5.2-0.1-9.6 1.9-2.1 5.6 0.2 3.5-1.5 7.7-1-1.4-6.4-0.3-1.6 5.2-3.7-4.6-7.5-1.6-4 5.8-3.9 0.9-3.1-8.9-3.7-7.2 1.1-6.2-3.2-2.7-1.2-4.6-3.2-4.4 2.9-6.9-2.9-5.4 1.1-2.2-1.2-2.4 1.9-3.2-0.3-5.4 0-4.6 1.1-2.1-5.5-10.4 4.2 0.6 2.9-0.2 1.1-1.9 4.8-2.6 2.9-2.4 7.3-1.1-0.4 4.8 0.9 2.5-0.3 4.3 6.5 5.7 6.4 1.1 2.3 2.4 3.9 1.3 2.5 1.8 3.5 0 3.4 1.9 0.5 3.7 1.2 1.9 0.3 2.7-1.7 0.1 2.8 7.5 10.7 0.3-0.5 3.7 0.8 2.5 3.2 1.8 1.7 4-0.6 5.1-1.3 2.8 0.8 3.6-1.6 1.4z" id="Bolivia" style={{fill: getFillColor("Bolivia")}} onMouseMove={(e) => handleMouseMove(e, "Bolivia")} onMouseLeave={() => setTooltip({ ...tooltip, show: false })} onClick={() => handleCountryClick("Bolivia")} />
              
              <path className="allPaths hover:fill-primary transition-colors cursor-pointer" d="M1127.6 615.7l1.9 5.1 1.1 1.2 1.6 3.7 6.1 7 2.3 0.7-0.1 2.3 1.5 4.1 4.3 1 3.4 2.9-8.1 4.7-5.2 4.8-2 4.3-1.8 2.4-3 0.5-1.2 3.1-0.6 2-3.6 1.4-4.5-0.3-2.5-1.8-2.3-0.7-2.8 1.4-1.5 3.1-2.7 1.9-2.8 2.9-4 0.7-1.1-2.3 0.6-3.9-3-6.1-1.4-1 0.6-18.7 5.5-0.2 0.8-22.9 4.2-0.2 8.7-2.3 2 2.7 3.7-2.5 1.7 0 3.2-1.5 1 0.5z" id="Botswana" style={{fill: getFillColor("Botswana")}} onMouseMove={(e) => handleMouseMove(e, "Botswana")} onMouseLeave={() => setTooltip({ ...tooltip, show: false })} onClick={() => handleCountryClick("Botswana")} />
              
              <path className="allPaths hover:fill-primary transition-colors cursor-pointer" d="M665.8 489.6l3.1 0.6 0.6-1.4-1-1.2 0.6-1.9 2.3 0.6 2.7-0.7 3.2 1.4 2.5 1.3 1.7-1.7 1.3 0.2 0.8 1.8 2.7-0.4 2.2-2.5 1.8-4.7 3.4-5.9 2-0.3 1.3 3.6 3 11.2 3.1 1.1 0.1 4.4-4.3 5.3 1.7 1.9 10.1 1 0.2 6.5 4.3-4.2 7.1 2.3 9.5 3.9 2.8 3.7-0.9 3.6 6.6-2 11 3.4 8.5-0.2 8.4 5.3 7.4 7.2 4.4 1.8 4.8 0.3 2.1 2 2 8.2 1.1 3.9-2.1 10.6-2.7 4.2-7.7 8.9-3.4 7.3-4 5.5-1.4 0.2-1.3 4.7 0.9 12-1.1 9.9-0.3 4.2-1.6 2.6-0.5 8.6-5.2 8.3-0.5 6.7-4.3 2.7-1.1 3.9-6 0-8.5 2.4-3.7 2.9-6 1.9-6.1 5.1-4.1 6.4-0.3 4.8 1.3 3.5-0.3 6.5-0.8 3.1-3.4 3.6-4.5 11.3-4 5-3.2 3.1-1.5 6.1-2.9 3.6-2.1-3.6 1.8-3.1-3.8-4.3-4.8-3.6-6.3-4.1-1.9 0.2-6.3-5-3.4 0.7 6-8.7 5.3-6.3 3.3-2.6 4.2-3.5-0.4-5.1-3.2-3.8-2.6 1.3 0.7-3.7 0.3-3.8-0.3-3.6-2.1-1.1-2 1-2.1-0.3-0.8-2.4-1.1-5.9-1.2-1.9-3.9-1.8-2.2 1.3-5.9-1.3-0.4-8.7-2-3.5 1.6-1.4-0.8-3.6 1.3-2.8 0.6-5.1-1.7-4-3.2-1.8-0.8-2.5 0.5-3.7-10.7-0.3-2.8-7.5 1.7-0.1-0.3-2.7-1.2-1.9-0.5-3.7-3.4-1.9-3.5 0-2.5-1.8-3.9-1.3-2.3-2.4-6.4-1.1-6.5-5.7 0.3-4.3-0.9-2.5 0.4-4.8-7.3 1.1-2.9 2.4-4.8 2.6-1.1 1.9-2.9 0.2-4.2-0.6-3.2 1.1-2.6-0.7-0.1-9.7-4.4 3.7-5-0.1-2.3-3.5-3.8-0.3 1-2.8-3.3-3.9-2.6-5.8 1.5-1.1-0.2-2.8 3.4-1.8-0.7-3.5 1.4-2.2 0.3-3 6.3-4.4 4.6-1.2 0.8-1 5.1 0.3 2.2-17.6 0.1-2.8-0.9-3.6-2.6-2.4 0.1-4.7 3.2-1 1.1 0.7 0.2-2.5-3.3-0.7 0-4 11 0.2 1.9-2.3 1.6 2.1 1 3.8 1.1-0.8 3.1 3.4 4.4-0.4 1.1-2 4.2-1.5 2.4-1.1 0.7-2.7 4.1-1.8-0.3-1.4-4.8-0.5-0.7-4.1 0.3-4.3-2.5-1.6 1.1-0.6 4.1 0.8 4.5 1.6 1.7-1.5 4.1-1 6.4-2.4 2.1-2.5-0.7-1.8 3-0.2 1.2 1.4-0.8 2.9 2 0.9 1.2 3-1.6 2.3-1 5.4 1.4 3.3 0.3 3 3.5 3 2.8 0.3 0.6-1.3 1.8-0.3 2.6-1.1 1.8-1.7 3.2 0.6 1.3-0.3z" id="Brazil" style={{fill: getFillColor("Brazil")}} onMouseMove={(e) => handleMouseMove(e, "Brazil")} onMouseLeave={() => setTooltip({ ...tooltip, show: false })} onClick={() => handleCountryClick("Brazil")} />
              
              <path className="allPaths hover:fill-primary transition-colors cursor-pointer" d="M1154.9 530.4l-0.6 0.1 0-0.3-2-6.1-0.01-0.06-0.09-1.04-1.4-2.9 3.5 0.5 1.7-3.7 3.1 0.4 0.3 2.5 1.2 1.5 0 2.1-1.4 1.3-2.3 3.4-2 2.3z" id="Burundi" style={{fill: getFillColor("Burundi")}} onMouseMove={(e) => handleMouseMove(e, "Burundi")} onMouseLeave={() => setTooltip({ ...tooltip, show: false })} onClick={() => handleCountryClick("Burundi")} />
              
              <path className="allPaths hover:fill-primary transition-colors cursor-pointer" d="M1072.8 454.2l-2.8 6.5-1.4 1.1-0.4 5 0.6 2.7-0.5 1.9 2.7 3.4 0.5 2.3 2.1 3.3 2.6 2.1 0.3 2.9 0.6 1.9-0.4 3.4-4.5-1.5-4.6-1.7-7.1-0.2-0.7-0.4-3.4 0.8-3.4-0.8-2.7 0.4-9.3-0.1 0.9-5.1-2.3-4.3-2.6-1-1.1-2.9-1.5-0.9 0.1-1.8 1.4-4.6 2.7-6.2 1.6 0 3.4-3.8 2.1-0.1 3.2 2.7 3.9-2.2 0.5-2.7 1.3-2.6 0.8-3.2 3-2.6 1.1-4.5 1.2-1.5 0.8-3.3 1.4-4.1 4.7-5 0.3-2.1 0.6-1.2-2.3-2.5 0.2-2.1 1.5-0.3 2.3 4.1 0.5 4.2-0.2 4.3 3.2 5.8-3.2 0-1.6 0.4-2.6-0.6-1.2 3 3.4 3.8 2.5 1.1 0.8 2.6 1.8 4.4-0.8 1.8z" id="Cameroon" style={{fill: getFillColor("Cameroon")}} onMouseMove={(e) => handleMouseMove(e, "Cameroon")} onMouseLeave={() => setTooltip({ ...tooltip, show: false })} onClick={() => handleCountryClick("Cameroon")} />
              
              <path className="allPaths hover:fill-primary transition-colors cursor-pointer" d="M655.1 837.9 661.1 851.5 666.1 851.5 669.1 851.7 668.6 854.1 665.4 856 663 855.8 659.9 855.3 655.7 853.5 650.3 852.6 642.8 849.2 636.4 846 626.6 839.1 631.2 840.4 639.8 844.5 647.1 846.7 648.3 843.9 648 839.7 651.4 837.1 655.1 837.9 Z" id="Chile" style={{fill: getFillColor("Chile")}} onMouseMove={(e) => handleMouseMove(e, "Chile")} onMouseLeave={() => setTooltip({ ...tooltip, show: false })} onClick={() => handleCountryClick("Chile")} />
              <path className="allPaths hover:fill-primary transition-colors cursor-pointer" d="M614.4 647.8 615.3 649.4 614.1 656.1 608.5 659.2 610.1 669.9 609.3 672 611.3 674.5 608 678.5 605.4 684.5 604.5 690.4 606.2 696.6 604.1 703.2 609 714.3 610.6 715.5 612 721.4 610.4 727.6 611.8 733 608.8 737.2 610.4 743 613.7 749.3 611.2 751.6 611.4 757.3 612.2 763.8 615.5 771.6 613.8 772.9 617.5 780.2 620.6 782.6 619.8 785.3 622.6 786.5 624 788.9 622.2 790.1 624 793.8 625.1 802.1 624.4 807.5 626.2 810.7 626.1 814.6 623.4 817.4 626.5 823.9 629.1 826.2 632.2 825.8 634.1 830.4 637.6 834 649.7 834.8 654.6 835.8 650.3 835.8 648.6 837.3 645.2 839.5 646.9 845.2 645 845.3 638.7 843.4 631.2 839.1 623.6 835.6 620.4 831.7 620.1 828.1 615.9 823.9 610.9 813.3 610.7 807.3 614.1 802.5 605.8 800.6 608.5 795.1 606.5 784.6 613 786.8 611.2 773.7 607.2 772 608.2 779.9 604.7 779 603.2 770 601.2 758.2 602.3 753.8 599 747.6 596.6 740.4 598.8 740.1 599.4 729.8 600.6 719.5 600.7 710 597.4 700.3 598 695 595.9 687.1 597.7 679.3 596.8 666.9 596.8 653.5 596.9 639.2 595.4 628.7 593.3 619.6 596.1 618 597.2 614.7 600.4 619.1 601.6 623.7 604.8 626.4 603.7 632.6 607.4 639.8 610.5 648.7 614.4 647.8 Z" id="Chile" style={{fill: getFillColor("Chile")}} onMouseMove={(e) => handleMouseMove(e, "Chile")} onMouseLeave={() => setTooltip({ ...tooltip, show: false })} onClick={() => handleCountryClick("Chile")} />
              
              <path className="allPaths hover:fill-primary transition-colors cursor-pointer" d="M955.9 435.2l2.5 1.4 1 2.2 2.5 1.3 2-1.6 2.6-0.2 3.9 1.6 1.5 9.2-2.4 5.3-1.5 7.3 2.4 5.5-0.2 2.6-2.6 0-3.9-1.2-3.7 0-6.7 1.2-3.9 1.8-5.6 2.4-1.1-0.2 0.4-5.3 0.6-0.8-0.2-2.5-2.4-2.7-1.8-0.4-1.6-1.8 1.2-2.9-0.5-3.1 0.2-1.8 0.9 0 0.4-2.8-0.4-1.3 0.5-0.9 2.1-0.7-1.4-5.2-1.3-2.6 0.5-2.2 1.1-0.5 0.8-0.6 1.5 1 4.4 0 1-1.8 1 0.1 1.6-0.7 0.9 2.7 1.3-0.8 2.4-1z" id="Côte d'Ivoire" style={{fill: getFillColor("Côte d'Ivoire")}} onMouseMove={(e) => handleMouseMove(e, "Côte d'Ivoire")} onMouseLeave={() => setTooltip({ ...tooltip, show: false })} onClick={() => handleCountryClick("Côte d'Ivoire")} />
              
              <path className="allPaths hover:fill-primary transition-colors cursor-pointer" d="M1172.1 301.4l3.9 9.4 0.7 1.6-1.3 2.6-0.7 4.8-1.2 3.4-1.2 1.1-2-2.1-2.7-2.8-4.7-9.2-0.5 0.6 2.8 6.7 3.9 6.5 4.9 10 2.3 3.5 2 3.6 5.4 7.1-1 1.1 0.4 4.2 6.8 5.8 1.1 1.3-22.1 0-21.5 0-22.3 0-1-23.7-1.3-22.8-2-5.2 1.1-3.9-1-2.8 1.7-3.1 7.2-0.1 5.4 1.7 5.5 1.9 2.6 1 4-2 2.1-1.8 4.7-0.6 3.9 0.8 1.8 3.2 1.1-2.1 4.4 1.5 4.3 0.4 2.5-1.6z" id="Egypt" style={{fill: getFillColor("Egypt")}} onMouseMove={(e) => handleMouseMove(e, "Egypt")} onMouseLeave={() => setTooltip({ ...tooltip, show: false })} onClick={() => handleCountryClick("Egypt")} />
              
              <path className="allPaths hover:fill-primary transition-colors cursor-pointer" d="M1207.3 408.5l3.9 0.1 5 2.6 1.5 2.2 2.6 2.1 2.5 3.7 2 2.1-1.9 2.8-1.8 3 0.5 1.8 0.2 2 3.2 0.1 1.3-0.5 1.3 1.2-1.2 2.2 2.2 3.6 2.2 3.1 2.2 2.3 18.7 7.6 4.8-0.1-15.6 19.3-7.3 0.3-5 4.5-3.6 0.1-1.5 2.1-3.9 0-2.3-2.2-5.2 2.7-1.6 2.7-3.8-0.6-1.3-0.7-1.3 0.2-1.8-0.1-7.2-5.4-4 0-1.9-2.1-0.1-3.6-2.9-1.1-3.5-7-2.6-1.5-1-2.6-3-3.1-3.5-0.5 1.9-3.6 3-0.2 0.8-1.9-0.2-5 0-0.8 1.5-6.7 2.6-1.8 0.5-2.6 2.3-5 3.3-3.1 2-6.4 0.7-5.5 6.6 1.4 1.5-4.8 3.6 2.9 3.2-1.5 1.4 1.3z" id="Ethiopia" style={{fill: getFillColor("Ethiopia")}} onMouseMove={(e) => handleMouseMove(e, "Ethiopia")} onMouseLeave={() => setTooltip({ ...tooltip, show: false })} onClick={() => handleCountryClick("Ethiopia")} />
            
            </svg>

            {tooltip.show && (
              <div 
                className="fixed bg-primary text-white px-3 py-1 rounded shadow-lg text-sm pointer-events-none z-50 transition-opacity duration-200"
                style={{ left: tooltip.x + 15, top: tooltip.y + 15 }}
              >
                {tooltip.content}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalPresenceMap;