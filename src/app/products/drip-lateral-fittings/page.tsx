import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";

export default function DripLateralFittings() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Drip Irrigation", href: "/dripirri" },
    { label: "Drip Lateral Fittings", active: true },
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
        "Used along with grommet to prevent leakage.",
        "Available Sizes: 12mm, 16mm & 16mm×12mm"
      ],
      img: "/img/Drip-23.jpg",
      modelImg: "/img/Model-1.png",
      pdf: true
    },
    {
      title: "RUBBER GROMMET/RUBBER WASHER/GTO",
      features: [
        "Ensures a leak-proof connection between the mainline and take-off connector.",
        "Made from high-quality, flexible, and uv-resistant rubber.",
        "Provides excellent sealing and prevents water leakage.",
        "Easy to install and fits perfectly with standard drip irrigation fittings.",
        "Durable and resistant to harsh weather conditions.",
        "Maintains consistent performance for long-term irrigation use.",
        "Available Sizes: 12mm & 16mm"
      ],
      img: "/img/Drip-24.jpg",
      modelImg: "/img/Model-2.png",
      pdf: true
    },
    {
      title: "RUBBER HOLE CLOSER",
      features: [
        "Made from high-quality, flexible rubber material.",
        "Used to close unused holes or outlets in submain pipes.",
        "Ensures a leak-proof and tight seal.",
        "Resistant to uv rays, weather, and chemicals.",
        "Easy to install and remove without damaging the pipe.",
        "Durable and reusable for long-term use.",
        "Available Sizes: 12mm & 16mm"
      ],
      img: "/img/Drip-25.jpg",
      modelImg: "/img/Model-3.png",
      pdf: true
    },
    {
      title: "STRAIGHT CONNECTOR/JOINTER",
      features: [
        "Used for joining two lengths of lateral pipes in drip irrigation systems.",
        "Ensures a secure and leak-proof connection.",
        "Made from high-quality, uv-resistant engineering material.",
        "Corrosion-resistant and suitable for all weather conditions.",
        "Easy to install and remove without special tools.",
        "Provides long-lasting durability and high performance.",
        "Available Sizes: 5.5mm, 8mm, 12mm, 16mm, 16×½\", 16×¾\" & 16×12mm"
      ],
      img: "/img/Drip-26.png",
      modelImg: "/img/Model-10.png",
      pdf: true
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
        "No need for any adhesive",
        "Available Sizes: 5.5mm, 12mm, 16mm, 16×12mm, 16×½\" & 16×¾\""
      ],
      img: "/img/Drip-52.png",
      modelImg: "/img/Model-4.png",
      pdf: true
    },
    {
      title: "TEE CONNECTOR",
      features: [
        "Made from 100% virgin raw material for long life",
        "Manufactured from high-quality, uv-resistant material for long-lasting use.",
        "Easy to install and remove without the need for tools.",
        "Provides smooth water flow with minimal pressure loss.",
        "Ideal for drip irrigation layouts requiring lateral divisions.",
        "Available Sizes: 12mm, 16mm & 16×12mm"
      ],
      img: "/img/Drip-53.png",
      modelImg: "/img/Model-5.png",
      pdf: true
    },
    {
      title: "CROSS",
      features: [
        "Used to connect four lateral pipes at a single junction.",
        "Ensures uniform water distribution in all directions.",
        "Made from strong, UV-stabilized engineering material.",
        "Corrosion and chemical resistant for long life.",
        "Provides a tight, leak-proof connection.",
        "Easy to install and suitable for all irrigation systems.",
        "Available Sizes: 12mm & 16mm"
      ],
      img: "/img/Drip-27.png",
      modelImg: "/img/Model-6.png",
      pdf: true
    },
    {
      title: "END CAP 8 TYPE",
      features: [
        "Used to close the end of lateral or mainline pipes securely.",
        "Made from high-quality, uv-stabilized plastic for long life.",
        "Provides a leak-proof seal to prevent water wastage.",
        "Easy to install, remove, and reuse for system maintenance.",
        "Used for flushing of lateral.",
        "Made from 100% virgin raw material for long life.",
        "Available Sizes: 12mm & 16mm"
      ],
      img: "/img/Drip-45.jpg",
      modelImg: "/img/Model-7.png",
      pdf: true
    },
    {
      title: "INSERT TYPE (END PLUG)",
      features: [
        "Used to close the end of lateral pipes in drip irrigation systems.",
        "Ensures a leak-proof sealing to prevent water wastage.",
        "Made from high-quality, UV-stabilized engineering material.",
        "Resistant to chemicals and weather conditions.",
        "Easy to install and remove for cleaning or maintenance.",
        "Durable design ensures long service life.",
        "Available Sizes: 16mm"
      ],
      img: "/img/Drip-46.jpg",
      modelImg: "/img/Model-8.png",
      pdf: true
    },
    {
      title: "LATERAL VALVE",
      features: [
        "Controls and regulates water flow in lateral pipelines.",
        "Allows easy opening and closing of specific irrigation sections.",
        "Maintains uniform water pressure throughout the system.",
        "Prevents water wastage by isolating unused areas.",
        "Facilitates repair and maintenance without stopping the main line.",
        "Enables efficient water distribution in drip systems.",
        "Supports zone-wise irrigation management for different crops.",
        "Ensures reliable performance and long service life of the system.",
        "Available Sizes: 12mm, 16mm & 16×½\""
      ],
      img: "/img/Drip-54.png",
      modelImg: "/img/Model-9.png",
      pdf: true
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
        "Ensures long-lasting and reliable performance in the field.",
        "Available Sizes: 16mm"
      ],
      img: "/img/Land-18.png",
      modelImg: "/img/Model-11.png",
      pdf: true
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
        "Ensures smooth water flow with minimal friction loss.",
        "Available Sizes: 16mm"
      ],
      img: "/img/Land-19.png",
      modelImg: "/img/Model-12.png",
      pdf: true
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
        "Maintains uniform water pressure across branches.",
        "Available Sizes: 16mm"
      ],
      img: "/img/Land-20.png",
      modelImg: "/img/Model-13.png",
      pdf: true
    },
    {
      title: "GOOF PLUG/SNAPPING",
      features: [
        "Used to seal unwanted holes or leaks in drip laterals.",
        "Made from durable, uv-resistant material for long-lasting performance.",
        "Provides a tight, leak-proof seal to maintain system efficiency.",
        "Easy to insert and remove without special tools.",
        "Ensures clean and professional maintenance of drip systems.",
        "Available Sizes: 4mm"
      ],
      img: "/img/Drip-28.jpg",
      modelImg: "/img/Model-14.png",
      pdf: true
    },
    {
      title: "HOLD DOWN STAKE/LATERAL STAKE/LOCATION STAKE",
      features: [
        "Used to firmly hold 16mm lateral pipes on the ground.",
        "Prevents movement or disturbance by labour or animals.",
        "Ensures proper alignment of lateral pipes in the field.",
        "Made from 100% virgin, high-quality material for long life.",
        "Uv-stabilized and weather-resistant for outdoor durability.",
        "Easy to install and remove without damaging the pipe.",
        "Provides stable and efficient irrigation system operation.",
        "Available in two models: VLS01 and VLS02."
      ],
      img: "/img/Drip-29.jpg",
      modelImg: "/img/Model-15.png",
      pdf: true
    },
    {
      title: "MICRO TUBE STAKE/NAILS",
      features: [
        "Used to hold micro tubes firmly in position near the plants.",
        "Prevents displacement of tubes caused by wind or water pressure.",
        "Ensures accurate water delivery to the root zone.",
        "Made from high-quality, uv-stabilized plastic for durability.",
        "Easy to install and suitable for all soil types.",
        "Provides long-lasting stability and efficient irrigation performance.",
        "Available Sizes: 5.5mm"
      ],
      img: "/img/Drip-30.jpg",
      modelImg: "/img/Model-16.png",
      pdf: true
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
        "Prevents pipe slippage or leakage under pressure.",
        "Available Sizes: 16mm"
      ],
      img: "/img/Drip-31.jpg",
      modelImg: "/img/Model-17.png",
      pdf: true
    },
    {
      title: "LATERAL PUNCHS/ PUNCH",
      features: [
        "Used to make precise holes in lateral pipes for dripper installation.",
        "Ensures clean and accurate punching without damaging the pipe.",
        "Made from durable, high-quality material.",
        "Ergonomic design provides comfortable grip and easy handling.",
        "Essential tool for quick and efficient drip irrigation setup.",
        "Available Sizes: 4mm"
      ],
      img: "/img/Drip-32.jpg",
      modelImg: "/img/Model-18.png",
      pdf: true
    },
    {
      title: "PLYER PUNCH/HAND PUNCH",
      features: [
        "Used to create accurate holes.",
        "Provides clean, round holes ensuring leak-free fitting connections.",
        "Made from strong, high-quality material or metal for durability.",
        "Ergonomically designed handle for comfortable grip and easy operation.",
        "Enables fast and efficient installation accessories.",
        "Lightweight, portable, and easy to use in field conditions.",
        "Available Sizes: 4mm"
      ],
      img: "/img/Drip-33.jpg",
      modelImg: "/img/Model-19.png",
      pdf: true
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
        "Suitable for use in drip irrigation systems.",
        "Available Sizes: 16mm"
      ],
      img: "/img/Drip-34.jpg",
      modelImg: "/img/Model-20.png",
      pdf: true
    },
    {
      title: "LAYFLAT PUNCH",
      features: [
        "Specially designed for punching holes in layflat delivery pipes.",
        "Ensures accurate and clean holes for connector or valve installation.",
        "Made from premium 100% virgin raw materials .",
        "Provides smooth operation without damaging the layflat pipe.",
        "Easy to use with ergonomic handle for better grip and control.",
        "Suitable for different sizes of layflat pipes used in irrigation.",
        "Enables quick and efficient field installation.",
        "Durable and long-lasting for repeated agricultural use.",
        "Available Sizes: 16mm, 20mm, 25mm, 32mm"
      ],
      img: "/img/Drip-35.jpg",
      modelImg: "/img/Model-21.png",
      pdf: true
    },
    {
      title: "VIDHI PRO TAPE TO TAPE",
      features: [
        "Joins two sections of drip tape securely in irrigation systems.",
        "Provides a leak-proof and tight connection",
        "Maintains consistent water pressure and flow throughout the line.",
        "Helps in extending drip tape length as per field requirement.",
        "Useful for repairing damaged sections of drip tape easily.",
        "Ensures smooth and uninterrupted water distribution.",
        "Simple to install and remove without special tools.",
        "Enhances efficiency and durability of the drip irrigation system"
      ],
      img: "/img/Drip-36.jpg",
      modelImg: "/img/Model-22.png",
      pdf: true
    },
    {
      title: "VIDHI PRO LATERAL TO TAPE",
      features: [
        "Connects drip tape to the main lateral pipe securely.",
        "Ensures smooth water transfer from lateral pipe to drip tape.",
        "Provides a leak-proof and durable connection.",
        "Maintains uniform pressure and water flow in the system.",
        "Easy to install and remove without any special tools.",
        "Helps in efficient water distribution across crop rows."
      ],
      img: "/img/Drip-37.jpg",
      modelImg: "/img/Model-23.png",
      pdf: true
    },
    {
      title: "VIDHI PRO TAPE ENDCAP",
      features: [
        "Used to close the end of drip tape lines securely.",
        "Prevents water leakage and ensures proper sealing.",
        "Helps maintain uniform pressure within the drip line.",
        "Allows easy reopening for flushing and maintenance.",
        "Simple to install and remove without any tools.",
        "Ensures efficient water management and prevents wastage.",
        "Made from durable, UV-resistant material for long life."
      ],
      img: "/img/Drip-38.jpg",
      modelImg: "/img/Model-24.png",
      pdf: false // No PDF button for this one in the source
    }
  ];

  return (
    <main className="min-h-screen">
      <Navbar />
      <PageHeader
        title="Drip Lateral Fittings"
        backgroundImage="/img/drip-head-17.png"
        breadcrumbs={breadcrumbs}
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-primary font-bold text-xl uppercase tracking-wider mb-2">Drip Irrigation</p>
            <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
            <h2 className="text-4xl font-bold text-primary italic">Drip Fittings</h2>
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
                  <h1 className="text-3xl font-bold text-secondary border-b-4 border-secondary pb-4 inline-block leading-tight">
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

                  {product.pdf && (
                    <div className="pt-4 text-center lg:text-left">
                      <a 
                        href="/pdf/AM pdf.pdf" 
                        target="_blank" 
                        className="btn-primary-custom btn-ripple text-white px-8 py-3 rounded-full font-bold text-lg inline-flex items-center shadow-xl transition"
                      >
                        <i className="fa fa-file-pdf mr-3"></i> View PDF
                      </a>
                    </div>
                  )}
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
