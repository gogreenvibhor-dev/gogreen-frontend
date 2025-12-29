import React from "react";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";

export default function Blog() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Blog", active: true },
  ];

  const blogs = [
    { title: "The Future of Drip Irrigation", img: "https://images.unsplash.com/photo-1602526218489-dc8b0d3f28b2?auto=format&fit=crop&w=800&q=80" },
    { title: "Soil Health: The Foundation of Farming", img: "https://images.unsplash.com/photo-1524594081293-190a2fe0baae?auto=format&fit=crop&w=800&q=80" },
    { title: "Precision Agriculture: Smart Farming Revolution", img: "https://images.unsplash.com/photo-1516912481808-3406841bd33c?auto=format&fit=crop&w=800&q=80" },
    { title: "Organic Fertilizers and Their Impact", img: "https://images.unsplash.com/photo-1607877460814-340dca82bdb3?auto=format&fit=crop&w=800&q=80" },
    { title: "Sustainable Water Use in Agriculture", img: "https://images.unsplash.com/photo-1587574293340-e63f58e8b1f3?auto=format&fit=crop&w=800&q=80" },
    { title: "Greenhouse Farming Techniques", img: "https://images.unsplash.com/photo-1600271886991-7a8db8d4bb45?auto=format&fit=crop&w=800&q=80" },
    { title: "Benefits of Crop Rotation", img: "https://images.unsplash.com/photo-1616627782325-c8f4e16e8e1a?auto=format&fit=crop&w=800&q=80" },
    { title: "How IoT Is Changing Agriculture", img: "https://images.unsplash.com/photo-1518733057094-95b53151d6d6?auto=format&fit=crop&w=800&q=80" },
    { title: "Eco-Friendly Pest Management", img: "https://images.unsplash.com/photo-1589739909474-6ccdfc2283d9?auto=format&fit=crop&w=800&q=80" },
    { title: "Smart Water Sensors in Fields", img: "https://images.unsplash.com/photo-1602526432604-029a709d99d9?auto=format&fit=crop&w=800&q=80" },
    { title: "Organic Farming: Back to Roots", img: "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?auto=format&fit=crop&w=800&q=80" },
    { title: "Rainwater Harvesting Methods", img: "https://images.unsplash.com/photo-1600634498740-64e54b661b88?auto=format&fit=crop&w=800&q=80" },
    { title: "Digital Farming Tools Every Farmer Needs", img: "https://images.unsplash.com/photo-1602526218489-dc8b0d3f28b2?auto=format&fit=crop&w=800&q=80" },
    { title: "Composting at Farm Scale", img: "https://images.unsplash.com/photo-1624378442393-d30ec8c9a6df?auto=format&fit=crop&w=800&q=80" },
    { title: "Sustainable Crop Protection Strategies", img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80" },
    { title: "Farm Automation: The Next Big Thing", img: "https://images.unsplash.com/photo-1602526218489-dc8b0d3f28b2?auto=format&fit=crop&w=800&q=80" },
    { title: "Solar-Powered Irrigation Systems", img: "https://images.unsplash.com/photo-1589739909474-6ccdfc2283d9?auto=format&fit=crop&w=800&q=80" },
    { title: "Agroforestry: Trees for a Greener Future", img: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80" },
  ];

  return (
    <main className="min-h-screen bg-[#f6fff7]">
      <Navbar />
      <PageHeader
        title="Blog"
        backgroundImage="/img/drip-head-12.png" // Updated to use local image as per previous pages logic, assuming it's suitable or fallback to provided url if specific
        breadcrumbs={breadcrumbs}
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-zoomIn">
            <p className="text-xl font-bold text-success underline mb-2">Vidhi Blogs</p>
            <h2 className="text-4xl lg:text-5xl font-bold text-success mb-6">Latest Blogs & Articles</h2>
            <hr className="border-t-2 border-success w-24 mx-auto mb-2" />
            <hr className="border-t-2 border-success w-24 mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog, index) => (
              <div 
                key={index} 
                className="bg-white rounded-[15px] overflow-hidden shadow-lg hover:-translate-y-2 hover:shadow-2xl transition duration-300 group"
              >
                <div className="h-[220px] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src={blog.img} 
                    alt={blog.title} 
                    className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h5 className="text-[#145a32] font-bold text-lg mb-3">{blog.title}</h5>
                  <p className="text-gray-500 mb-0">
                    Explore in-depth how Vidhi Enterprises is transforming agriculture with innovation and sustainability.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
