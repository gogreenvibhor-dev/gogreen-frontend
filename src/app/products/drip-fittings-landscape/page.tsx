import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";

export default function DripFittingsLandscape() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Landscape Irrigation", href: "/landscape" },
    { label: "Drip Fittings", active: true },
  ];

  const products = [
    {
      title: "START CONNECTOR/POLYANO/TAKE OFF",
      features: [
        "Used to connect the dripline with the mainline efficiently.",
        "Made from high-quality, uv-resistant materials for long-lasting performance.",
        "Provides a leak-proof and secure connection.",
        "Easy to install and remove without special tools.",
        "Suitable for all types of drip irrigation systems.",
        "Ensures smooth water flow and system durability.",
        "Used for connecting sub mains to laterals.",
        "Used along with grommet to prevent leakage."
      ],
      img: "/img/Land-11.png"
    },
    {
      title: "RUBBER GROMMET/RUBBER WASHER/GTO",
      features: [
        "Ensures a leak-proof connection between the mainline and take-off connector.",
        "Made from high-quality, flexible, and uv-resistant rubber.",
        "Provides excellent sealing and prevents water leakage.",
        "Easy to install and fits perfectly with standard drip irrigation fittings.",
        "Durable and resistant to harsh weather conditions.",
        "Maintains consistent performance for long-term irrigation use."
      ],
      img: "/img/Land-12.png"
    },
    {
      title: "RUBBER HOLE CLOSER/DUMMY",
      features: [
        "Made from high-quality, flexible rubber material.",
        "Used to close unused holes or outlets in submain pipes.",
        "Ensures a leak-proof and tight seal.",
        "Resistant to uv rays, weather, and chemicals.",
        "Easy to install and remove without damaging the pipe.",
        "Durable and reusable for long-term use."
      ],
      img: "/img/Land-13.png"
    },
    {
      title: "STRAIGHT CONNECTOR/JOINTER",
      features: [
        "Used for joining two lengths of lateral pipes in drip irrigation systems.",
        "Ensures a secure and leak-proof connection.",
        "Made from high-quality, uv-resistant engineering material.",
        "Corrosion-resistant and suitable for all weather conditions.",
        "Easy to install and remove without special tools.",
        "Provides long-lasting durability and high performance."
      ],
      img: "/img/Land-14.png"
    },
    {
      title: "ELBOW CONNECTOR",
      features: [
        "Used to connect two pipes at a 90° angle in irrigation systems.",
        "Double barbed design ensures a secure, leak-proof connection.",
        "Made from durable, uv-resistant material for long service life.",
        "Easy to install and suitable for quick system adjustments.",
        "Made from 100% virgin raw material for long life.",
        "Ensures leak proof joint",
        "No need for any adhesive"
      ],
      img: "/img/land-34.png",
      modelImg: "/img/Model-51.png"
    },
    {
      title: "TEE CONNECTOR",
      features: [
        "Made from 100% virgin raw material for long life",
        "Manufactured from high-quality, uv-resistant material for long-lasting use.",
        "Easy to install and remove without the need for tools.",
        "Provides smooth water flow with minimal pressure loss.",
        "Ideal for drip irrigation layouts requiring lateral divisions."
      ],
      img: "/img/land-35.png",
      modelImg: "/img/Model-46.png"
    },
    {
      title: "CROSS",
      features: [
        "Used to connect four lateral pipes at a single junction.",
        "Ensures uniform water distribution in all directions.",
        "Made from strong, UV-stabilized engineering material.",
        "Corrosion and chemical resistant for long life.",
        "Provides a tight, leak-proof connection.",
        "Easy to install and suitable for all irrigation systems."
      ],
      img: "/img/Land-15.png"
    },
    {
      title: "END CAP 8 TYPE",
      features: [
        "Used to close the end of lateral or mainline pipes securely.",
        "Made from high-quality, uv-stabilized plastic for long life.",
        "Provides a leak-proof seal to prevent water wastage.",
        "Easy to install, remove, and reuse for system maintenance.",
        "Used for flushing of lateral.",
        "Made from 100% virgin raw material for long life."
      ],
      img: "/img/land-16.png",
      modelImg: "/img/Model-47.png"
    },
    {
      title: "INSERT TYPE (END PLUG)",
      features: [
        "Used to close the end of lateral pipes in drip irrigation systems.",
        "Ensures a leak-proof sealing to prevent water wastage.",
        "Made from high-quality, UV-stabilized engineering material.",
        "Resistant to chemicals and weather conditions.",
        "Easy to install and remove for cleaning or maintenance.",
        "Durable design ensures long service life."
      ],
      img: "/img/land-17.png",
      modelImg: "/img/Model-48.png"
    },
    {
      title: "LATERAL VALVE",
      features: [
        "Controls and regulates water flow in lateral pipelines.",
        "Allows easy opening and closing of specific irrigation sections.",
        "Maintains uniform water pressure throughout the system.",
        "Prevents water wastage by isolating unused areas.",
        "Facilitates repair and maintenance without stopping the main line.",
        "Enables efficient water distribution in drip systems."
      ],
      img: "/img/Drip-54.png"
    },
    {
      title: "DRIP COUPLER",
      features: [
        "Used to connect two lengths of 16mm lateral.",
        "Provides a strong, leak-proof joint for irrigation pipelines.",
        "Maintains uniform pressure and continuous water flow.",
        "Easy to install without special tools or adhesives.",
        "Made from high-quality, uv-stabilized engineering material .",
        "Resistant to corrosion, chemicals, and weather conditions.",
        "Ideal for extending pipe length or repairing broken sections.",
        "Ensures long-lasting and reliable performance in the field."
      ],
      img: "/img/Land-18.png"
    },
    {
      title: "DRIP ELBOW",
      features: [
        "Connects two pipes at a 90° angle in irrigation systems.",
        "Helps in changing direction of pipelines efficiently.",
        "Provides a leak-proof and secure corner connection.",
        "Easy to assemble and disassemble for maintenance.",
        "Made from durable, uv-resistant engineering material.",
        "Withstands high pressure and varying field conditions.",
        "Suitable for both above-ground and underground installations.",
        "Ensures smooth water flow with minimal friction loss."
      ],
      img: "/img/Land-19.png"
    },
    {
      title: "DRIP TEE",
      features: [
        "Made from 100% virgin raw material for long life",
        "Manufactured from high-quality, uv-resistant material for long-lasting use.",
        "Easy to install and remove without the need for tools.",
        "Provides smooth water flow with minimal pressure loss.",
        "Ideal for drip irrigation layouts requiring lateral divisions.",
        "Used to connect three pipes in a t-shaped configuration.",
        "Divides or combines water flow between different lines",
        "Maintains uniform water pressure across branches."
      ],
      img: "/img/Land-20.png"
    },
    {
      title: "GOOF PLUG/SNAPPING",
      features: [
        "Used to seal unwanted holes or leaks in drip laterals.",
        "Made from durable, uv-resistant material for long-lasting performance.",
        "Provides a tight, leak-proof seal to maintain system efficiency.",
        "Easy to insert and remove without special tools.",
        "Ensures clean and professional maintenance of drip systems."
      ],
      img: "/img/Land-21.png"
    },
    {
      title: "LOCATION STAKE",
      features: [
        "Used to firmly hold 16mm lateral pipes on the ground.",
        "Prevents movement or disturbance by labour or animals.",
        "Ensures proper alignment of lateral pipes in the field.",
        "Made from 100% virgin, high-quality material for long life.",
        "Uv-stabilized and weather-resistant for outdoor durability.",
        "Easy to install and remove without damaging the pipe.",
        "Provides stable and efficient irrigation system operation.",
        "Available in two models: LS01 and LS02."
      ],
      img: "/img/land-22.png",
      modelImg: "/img/Model-49.png"
    },
    {
      title: "MICRO TUBE STAKE/NAILS",
      features: [
        "Used to hold micro tubes firmly in position near the plants.",
        "Prevents displacement of tubes caused by wind or water pressure.",
        "Ensures accurate water delivery to the root zone.",
        "Made from high-quality, uv-stabilized plastic for durability.",
        "Easy to install and suitable for all soil types.",
        "Provides long-lasting stability and efficient irrigation performance."
      ],
      img: "/img/Land-23.png"
    },
    {
      title: "RATCHET CLAMP",
      features: [
        "Provides strong and secure grip for holding pipes and fittings in irrigation systems.",
        "Made from high-quality, uv-stabilized material for long-lasting durability.",
        "Easy to install and remove without the need for special tools.",
        "Adjustable ratchet mechanism (ZIGZAG) ensures a tight and leak-proof connection.",
        "Corrosion and chemical resistant, suitable for all weather conditions.",
        "Lightweight and reusable, ideal for repeated applications.",
        "Prevents pipe slippage or leakage under pressure."
      ],
      img: "/img/Land-24.png",
      modelImg: "/img/Model-50.png"
    },
    {
      title: "LATERAL PUNCH/S PUNCH",
      features: [
        "Used to make precise holes in lateral pipes for dripper installation.",
        "Ensures clean and accurate punching without damaging the pipe.",
        "Made from durable, high-quality material.",
        "Ergonomic design provides comfortable grip and easy handling.",
        "Essential tool for quick and efficient drip irrigation setup."
      ],
      img: "/img/Land-25.png"
    },
    {
      title: "PLYER PUNCH/HAND PUNCH",
      features: [
        "Used to create accurate holes.",
        "Provides clean, round holes ensuring leak-free fitting connections.",
        "Made from strong, high-quality material or metal for durability.",
        "Ergonomically designed handle for comfortable grip and easy operation.",
        "Enables fast and efficient installation accessories.",
        "Lightweight, portable, and easy to use in field conditions."
      ],
      img: "/img/Land-26.png"
    },
    {
      title: "PUNCH (FOR PVC/ HDPE PIPE)/ DRILL BIT",
      features: [
        "Designed for making precise holes in pipes.",
        "Ensures smooth and accurate drilling without cracking the pipe.",
        "Made from high-strength, rust-resistant metal for durability.",
        "Provides perfect hole size.",
        "Easy to attach to manual.",
        "Enables fast and efficient pipeline installation.",
        "Suitable for use in drip irrigation systems."
      ],
      img: "/img/Land-27.png"
    }
  ];

  return (
    <main className="min-h-screen">
      <Navbar />
      <PageHeader
        title="Drip Fittings"
        backgroundImage="/img/land-head-9.png"
        breadcrumbs={breadcrumbs}
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-primary font-bold text-xl uppercase tracking-wider mb-2">Landscape Irrigation</p>
            <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
            <h2 className="text-4xl font-bold text-primary italic">Drip Fittings & Accessories</h2>
            <div className="w-full h-px bg-secondary mt-6"></div>
          </div>

          <div className="space-y-24">
            {products.map((product, index) => (
              <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <div className="relative group">
                  <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-whitesmoke">
                    <Image
                      src={product.img}
                      alt={product.title}
                      width={600}
                      height={700}
                      className="w-full h-auto object-cover group-hover:scale-105 transition duration-500"
                    />
                  </div>
                </div>

                <div className="space-y-6">
                  <h1 className="text-3xl font-bold text-secondary border-b-4 border-secondary pb-4 inline-block leading-tight uppercase">
                    {product.title}
                  </h1>
                  <ul className="space-y-3">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-start text-primary font-medium text-lg leading-relaxed">
                        <span className="mr-3 mt-2 w-2 h-2 rounded-full bg-secondary shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  {product.modelImg && (
                    <div className="mt-6 flex justify-center lg:justify-start">
                      <div className="rounded-xl overflow-hidden shadow-lg border border-gray-100 max-w-sm">
                        <Image 
                          src={product.modelImg} 
                          alt={`${product.title} Model`} 
                          width={400} 
                          height={300} 
                          className="w-full h-auto" 
                        />
                      </div>
                    </div>
                  )}

                  <div className="pt-4 text-center lg:text-left">
                    <a 
                      href="/pdf/AM pdf.pdf" 
                      target="_blank" 
                      className="btn-primary-custom btn-ripple text-white px-8 py-3 rounded-full font-bold text-lg inline-flex items-center shadow-xl transition"
                    >
                      <i className="fa fa-file-pdf mr-3"></i> View PDF
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-20 text-center">
             <a 
                href="/pdf/AM pdf.pdf" 
                target="_blank" 
                className="btn-primary-custom btn-ripple text-white px-10 py-4 rounded-full font-bold text-lg inline-flex items-center shadow-xl transition"
              >
                <i className="fa fa-file-pdf mr-3"></i> View Full PDF Catalog
              </a>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
