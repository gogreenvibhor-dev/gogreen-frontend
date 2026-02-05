import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";

export default function Features() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Features", active: true },
  ];

  return (
    <main className="min-h-screen">
      <Navbar />
      <PageHeader
        title="Features"
        backgroundImage="https://d170mw2nhcb1v0.cloudfront.net/img/3.png"
        breadcrumbs={breadcrumbs}
      />

      {/* Feature Start */}
      <div className="container-fluid py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
            <div className="bg-white shadow-lg flex items-center h-full px-8 py-10 border-r border-gray-100 min-h-[160px] animate-fadeIn delay-100">
              <div className="flex items-center">
                <div className="shrink-0 w-16 h-16 rounded-full bg-light flex items-center justify-center mr-4">
                  <i className="fa fa-times text-primary text-2xl"></i>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-800 mb-1">No Hidden Cost</h4>
                  <span className="text-gray-600">Clita erat ipsum lorem sit sed stet duo justo</span>
                </div>
              </div>
            </div>
            <div className="bg-white shadow-lg flex items-center h-full px-8 py-10 border-r border-gray-100 min-h-[160px] animate-fadeIn delay-300">
              <div className="flex items-center">
                <div className="shrink-0 w-16 h-16 rounded-full bg-light flex items-center justify-center mr-4">
                  <i className="fa fa-users text-primary text-2xl"></i>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-800 mb-1">Dedicated Team</h4>
                  <span className="text-gray-600">Clita erat ipsum lorem sit sed stet duo justo</span>
                </div>
              </div>
            </div>
            <div className="bg-white shadow-lg flex items-center h-full px-8 py-10 min-h-[160px] animate-fadeIn delay-500">
              <div className="flex items-center">
                <div className="shrink-0 w-16 h-16 rounded-full bg-light flex items-center justify-center mr-4">
                  <i className="fa fa-phone text-primary text-2xl"></i>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-800 mb-1">24/7 Available</h4>
                  <span className="text-gray-600">Clita erat ipsum lorem sit sed stet duo justo</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Feature End */}

      {/* Facts Start */}
      <div className="container-fluid py-20 my-20 bg-cover bg-fixed relative" style={{ backgroundImage: "url('https://d170mw2nhcb1v0.cloudfront.net/img/carousel-1.jpg')" }}>
        <div className="absolute inset-0 bg-primary/60"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            <div className="text-center animate-fadeIn delay-100">
              <h1 className="text-5xl font-bold text-white mb-2">1234</h1>
              <span className="text-lg font-semibold text-light">Happy Clients</span>
            </div>
            <div className="text-center animate-fadeIn delay-300">
              <h1 className="text-5xl font-bold text-white mb-2">1234</h1>
              <span className="text-lg font-semibold text-light">Garden Completed</span>
            </div>
            <div className="text-center animate-fadeIn delay-500">
              <h1 className="text-5xl font-bold text-white mb-2">1234</h1>
              <span className="text-lg font-semibold text-light">Dedicated Staff</span>
            </div>
            <div className="text-center animate-fadeIn delay-700">
              <h1 className="text-5xl font-bold text-white mb-2">1234</h1>
              <span className="text-lg font-semibold text-light">Awards Achieved</span>
            </div>
          </div>
        </div>
      </div>
      {/* Facts End */}

      {/* Features Section Start */}
      <div className="container-fluid py-20 bg-whitesmoke">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slideUpFade delay-100">
              <p className="text-primary font-bold text-xl mb-2">Why Choosing Us!</p>
              <h1 className="text-4xl lg:text-5xl font-bold text-green-900 mb-6 leading-tight">
                Few Reasons Why People Choosing Us!
              </h1>
              <p className="text-gray-600 mb-8 text-lg">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet
              </p>
              <Link href="/about" className="btn-primary-custom btn-ripple py-3 px-8 text-white rounded font-bold shadow-md transition inline-block">
                Explore More
              </Link>
            </div>
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="col-span-1">
                  <div className="bg-white rounded-xl p-8 text-center shadow-lg animate-fadeIn delay-300 transform transition hover:-translate-y-2">
                    <div className="w-20 h-20 bg-light rounded-full mx-auto mb-6 flex items-center justify-center">
                      <i className="fa fa-check text-primary text-3xl"></i>
                    </div>
                    <h4 className="text-xl font-bold text-gray-800">100% Satisfaction</h4>
                  </div>
                </div>
                <div className="col-span-1 translate-y-0 md:translate-y-12">
                  <div className="bg-white rounded-xl p-8 text-center shadow-lg animate-fadeIn delay-500 transform transition hover:-translate-y-2">
                    <div className="w-20 h-20 bg-light rounded-full mx-auto mb-6 flex items-center justify-center">
                      <i className="fa fa-users text-primary text-3xl"></i>
                    </div>
                    <h4 className="text-xl font-bold text-gray-800">Dedicated Team</h4>
                  </div>
                </div>
                <div className="col-span-1 md:col-span-2 md:w-1/2 md:mx-auto">
                  <div className="bg-white rounded-xl p-8 text-center shadow-lg animate-fadeIn delay-700 transform transition hover:-translate-y-2">
                    <div className="w-20 h-20 bg-light rounded-full mx-auto mb-6 flex items-center justify-center">
                      <i className="fa fa-tools text-primary text-3xl"></i>
                    </div>
                    <h4 className="text-xl font-bold text-gray-800">Modern Equipment</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Features Section End */}

      <Footer />
    </main>
  );
}
