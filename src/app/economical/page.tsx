import React from "react";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import CategoryProductGrid from "@/components/CategoryProductGrid";
import Footer from "@/components/Footer";

const products = [
  {
    title: "Drip Tubing & Fittings",
    image: "https://d170mw2nhcb1v0.cloudfront.net/img/icon/icon-4.png",
    subcategoryUrl: "/economical/drip-tubing-fittings",
    links: [
      { name: "Low Thickness Plain Laterals", url: "/low-thickness-plain" },
      { name: "Thin Wall Drip Line Cylindrical", url: "/thinwall-dripline" },
      { name: "Thin Wall Drip Tape Flat", url: "/thiwall-driptape" },
      { name: "Thin Wall Drip Tape Fittings", url: "/thin-wall-drip-tape-fittings" },
    ],
  },
  {
    title: "Vidhi Rain Pipe & Fittings",
    image: "https://d170mw2nhcb1v0.cloudfront.net/img/icon/icon-4.png",
    subcategoryUrl: "/economical/vidhi-rain-pipe-fittings",
    links: [
      { name: "Vidhi Rain Pipe", url: "/rain-pipe" },
      { name: "Vidhi Rain Pipe Fittings", url: "/rain-pipe-fittings" },
    ],
  },
  {
    title: "Lay Flat Pipes",
    image: "https://d170mw2nhcb1v0.cloudfront.net/img/icon/icon-4.png",
    subcategoryUrl: "/economical/lay-flat-pipes",
    links: [
      { name: "Lay Flat Pipe", url: "/layflat-pipe" },
    ],
  },
  {
    title: "Eco Sprinklers",
    image: "https://d170mw2nhcb1v0.cloudfront.net/img/icon/icon-4.png",
    subcategoryUrl: "/economical/eco-sprinklers",
    links: [
      { name: "Eco Rotating Sprinkler", url: "/eco-sprinkler" },
      { name: "Riser Pipes", url: "/riser-pipes-eco" },
    ],
  },
  {
    title: "EcoAcre Pro",
    image: "https://d170mw2nhcb1v0.cloudfront.net/img/icon/icon-4.png",
    subcategoryUrl: "/economical/ecoacre-pro",
    links: [
      { name: "EcoAcre Pro", url: "/ecoacre-pro" },
    ],
  },
];

const EconomicalPage = () => {
  return (
    <main className="min-h-screen bg-whitesmoke">
      <Navbar />
      <PageHeader 
        title="Economical Irrigation" 
        backgroundImage="https://d170mw2nhcb1v0.cloudfront.net/img/head-eco.png"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: "Economical Irrigation", active: true }
        ]}
      />
      <CategoryProductGrid products={products} />
      <Footer />
    </main>
  );
};

export default EconomicalPage;