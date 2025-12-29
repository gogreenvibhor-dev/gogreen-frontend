'use client';

import { useEffect, useRef } from "react";
import Link from "next/link";

export default function Manfacture() {
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style jsx>{`
        :root {
            --green: #1a5f3d;
            --green-dark: #0e3d27;
            --green-light: #b1e2b8;
            --gold: #9c7a3a;
            --light: #f8fdfa;
        }

        body {font-family: 'Inter', sans-serif; background:#fff; color:#333; line-height:1.8;}
        h3,h4,h5 {font-family: 'Playfair Display', serif; color:var(--green-dark);}
        h1,h2 {font-family: 'Playfair Display', serif; color:var(--green-light);}

        /* Full-Height Hero */
        .hero {
            height: 45vh;
            min-height: 450px;
            background: linear-gradient(rgba(26,95,61,0.92), rgba(14,61,39,0.96)),
                        url('https://images.unsplash.com/photo-1581093458791-3d5c6c4e9e7e?q=80&w=2070&auto=format&fit=crop') center/cover no-repeat fixed;
            display: flex; align-items: center; justify-content: center;
            text-align: center; color: white; position: relative; overflow: hidden;
        }
        .hero::before {
            content: ''; position: absolute; inset: 0;
            background: url('https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2070&auto=format&fit=crop') center/cover;
            opacity: 0.15; animation: float 25s ease-in-out infinite alternate;
        }
        @keyframes float {0%{transform:translateY(0)}100%{transform:translateY(-40px)}}

        .hero h1 {font-size: 4.8rem; font-weight: 800; text-shadow: 0 5px 25px rgba(0,0,0,0.5);}
        .hero p {font-size: 1.45rem; max-width: 820px; margin: 25px auto 0; opacity: 0.95;}

        .section {padding: 120px 0;}
        .section-alt {background: #f8fdfa;}

        .section-title {
            font-size: 3.4rem; text-align: center; margin-bottom: 70px; position: relative;
        }
        .section-title::after {
            content: ''; width: 120px; height: 5px; background: var(--gold);
            display: block; margin: 25px auto; border-radius: 4px;
        }

        /* Facility Cards */
        .facility-card {
            background: white; border-radius: 24px; overflow: hidden;
            box-shadow: 0 15px 50px rgba(0,0,0,0.09); transition: all 0.5s ease;
            border: 1px solid #e8f5e9; height: 100%;
        }
        .facility-card:hover {transform: translateY(-20px); box-shadow: 0 30px 80px rgba(26,95,61,0.22);}
        .facility-icon {
            height: 200px; background: linear-gradient(135deg, var(--green), var(--green-light));
            display: flex; align-items: center; justify-content: center;
            color: white; font-size: 5rem;
        }

        /* Quality Timeline */
        .timeline {position:relative; max-width:1200px; margin:0 auto;}
        .timeline::after {content:''; position:absolute; width:6px; background:var(--green-light); top:0; bottom:0; left:50%; margin-left:-3px;}
        .t-item {padding:20px 50px; position:relative; width:50%;}
        .t-item::after {
            content:''; position:absolute; width:30px; height:30px; background:var(--gold);
            border:6px solid white; border-radius:50%; top:30px; right:-18px; z-index:2;
            box-shadow:0 0 0 6px var(--green-light);
        }
        .left {left:0;}
        .right {left:50%;}
        .right::after {left:-18px;}
        .t-content {
            padding:35px; background:white; border-radius:20px;
            box-shadow:0 12px 40px rgba(0,0,0,0.1);
        }

        .commitment {
            background: linear-gradient(135deg, var(--green-dark), var(--green));
            color:white; border-radius:40px; padding:110px 50px; margin:120px 0;
            position:relative; overflow:hidden;
        }
        .commitment::before {
            content:''; position:absolute; inset:-60%; background:url('https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=2070') center/cover;
            opacity:0.1; animation:float 30s infinite alternate;
        }

        /* Animation Classes */
        .fade-in {
            opacity: 1;
            transform: translateY(0);
            transition: all 0.8s ease-out;
        }
        .fade-in-left {
            opacity: 1;
            transform: translateX(0);
            transition: all 0.8s ease-out;
        }
        .fade-in-right {
            opacity: 1;
            transform: translateX(0);
            transition: all 0.8s ease-out;
        }

        /* Initial State */
        .fade-in:not(.fade-in),
        .fade-in-left:not(.fade-in-left),
        .fade-in-right:not(.fade-in-right) {
            opacity: 0;
            transform: translateY(30px);
        }
        .fade-in-left:not(.fade-in-left) {
            transform: translateX(-30px);
        }
        .fade-in-right:not(.fade-in-right) {
            transform: translateX(30px);
        }

        @media (max-width:992px) {
            .hero h1 {font-size:3.4rem;}
            .timeline::after {left:40px;}
            .t-item {width:100%; padding-left:90px; padding-right:30px;}
            .t-item::after {left:22px;}
            .right {left:0;}
        }
      `}</style>

      {/* Placeholder for header - you can replace with actual Header component */}
      <div id="header-container"></div>

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light sticky-top p-2" style={{ backgroundColor: 'rgb(177, 226, 177)' }}>
        <div className="container-fluid px-0">
          <div className="d-flex w-100 align-items-center justify-content-between flex-wrap flex-lg-nowrap">
            <Link href="/" className="navbar-brand d-flex align-items-center px-4 px-lg-5 mb-2 mb-lg-0">
              <img src="/img/vidhi_logo-removebg-preview.png" className="ps-4 logo-img img-fluid" alt="Vidhi Enterprises Logo" />
            </Link>
            <form className="d-flex mx-auto my-2 my-lg-0 flex-grow-1" role="search" style={{ maxWidth: '400px', minWidth: '180px', width: '100%' }}>
              <div className="input-group input-group-lg shadow-sm search-bar-rounded position-relative" style={{ width: '100%' }}>
                <input id="searchInput" type="search" className="form-control rounded-pill border-1 ps-4" placeholder="Search" aria-label="Search" style={{ background: '#f8f9fa', fontSize: '1.1rem', minHeight: '48px' }} autoComplete="off" />
                <button className="btn btn-primary rounded-pill d-flex align-items-center justify-content-center" type="submit" title="Search" style={{ width: '48px', height: '48px', marginLeft: '-48px', zIndex: 2 }}>
                  <i className="fa fa-search"></i>
                </button>
                <ul id="searchSuggestions" className="search-suggestions"></ul>
              </div>
            </form>
            <button type="button" className="navbar-toggler ms-2 me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div className="collapse navbar-collapse w-100" id="navbarCollapse" style={{ marginRight: '2rem' }}>
            <div className="navbar-nav ms-auto p-4 p-lg-0 align-items-lg-center">
              <Link href="/" className="nav-item nav-link active"><b>Home</b></Link>
              <div className="nav-item dropdown">
                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown"><b>Products</b></a>
                <div className="dropdown-menu m-0 bg-light">
                  <Link href="/dripirri" className="dropdown-item"><b>Drip Irrigation</b></Link>
                  <Link href="/sprinkler" className="dropdown-item"><b>Sprinkler Irrigation</b></Link>
                  <Link href="/rainsprinkler" className="dropdown-item"><b>Rain Sprinkler</b></Link>
                  <Link href="/landscape" className="dropdown-item"><b>Landscape Irrigation</b></Link>
                  <Link href="/economical" className="dropdown-item"><b>Economical Irrigation</b></Link>
                  <Link href="/vidhi-kit" className="dropdown-item"><b>Vidhi Kit</b></Link>
                </div>
              </div>
              <div className="nav-item dropdown">
                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown"><b>About Us</b></a>
                <div className="dropdown-menu bg-light m-0">
                  <Link href="/company-profile" className="dropdown-item"><b>Company Profile</b></Link>
                  <Link href="/founder-vision" className="dropdown-item"><b>Founder's Vision</b></Link>
                  <Link href="/our-journey" className="dropdown-item"><b>Our Journey</b></Link>
                  <Link href="/legacy-leader" className="dropdown-item"><b>Legacy &Leadership</b></Link>
                  <Link href="/manfacture" className="dropdown-item"><b>Manfacturing & Infrastructure</b></Link>
                  <Link href="/quality-policy" className="dropdown-item"><b>Quality Policy</b></Link>
                  <Link href="/sustainable" className="dropdown-item"><b>Sustainabilty Commitment</b></Link>
                  <Link href="/global-presence" className="dropdown-item"><b>Global Presence</b></Link>
                  <Link href="/knowledge-hub" className="dropdown-item"><b>Knowledge Hub</b></Link>
                  <Link href="/blog" className="dropdown-item"><b>Blog</b></Link>
                  <Link href="/careers" className="dropdown-item"><b>Careers</b></Link>
                </div>
              </div>
              <Link href="/contact" className="nav-item nav-link"><b>Contact Us</b></Link>
              <Link href="/" className="navbar-brand d-flex align-items-center ps-4 mt-3 mt-lg-0">
                <img src="/img/logo-olored.png" className="logo-img img-fluid" alt="Vidhi Enterprises Logo Right" style={{ marginLeft: '0.5rem', marginBottom: '11px' }} />
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero mt-2">
        <div ref={(el) => { sectionRefs.current[0] = el; }}>
          <h1>Manufacturing & Infrastructure</h1>
          <p>Precision Engineering • Cutting-Edge Technology • Global Quality Standards</p>
        </div>
      </section>

      {/* Intro */}
      <section className="section section-alt">
        <div className="container text-center" ref={(el) => { sectionRefs.current[1] = el; }}>
          <p className="lead fs-3 col-lg-10 mx-auto text-muted">
            At <strong>Vidhi Enterprises</strong>, we operate one of New Delhi's most advanced and fully integrated manufacturing facilities for irrigation components — delivering unmatched precision and reliability to farmers across India and the world.
          </p>
        </div>
      </section>

      {/* Production Units */}
      <section className="section">
        <div className="container">
          <h2 className="section-title" ref={(el) => { sectionRefs.current[2] = el; }}>Our Production Excellence</h2>
          <div className="row g-5">
            <div className="col-lg-6" ref={(el) => { sectionRefs.current[3] = el; }}>
              <div className="facility-card">
                <div className="facility-icon"><i className="fas fa-tint"></i></div>
                <div className="p-5">
                  <h3>Advanced Manufacturing Unit</h3>
                  <ul className="mt-4 fs-5">
                    <li>Drip irrigation pipes & laterals</li>
                    <li>Online/inline drippers & emitters</li>
                    <li>Plastic sprinklers & micro accessories</li>
                    <li>Precision fittings & connectors</li>
                  </ul>
                  <p className="mt-4 text-success fw-bold">Dedicated molds → 100% leak-proof & durable</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6" ref={(el) => { sectionRefs.current[4] = el; }}>
              <div className="facility-card">
                <div className="facility-icon"><i className="fas fa-cogs"></i></div>
                <div className="p-5">
                  <h3>High-Tech Metal Components Unit</h3>
                  <ul className="mt-4 fs-5">
                    <li>Brass & aluminum sprinklers</li>
                    <li>Rain guns & long-range nozzles</li>
                    <li>Heavy-duty fittings & adaptors</li>
                    <li>Corrosion-resistant valves</li>
                  </ul>
                  <p className="mt-4 text-success fw-bold">Superior strength & consistent field performance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Timeline */}
      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title" ref={(el) => { sectionRefs.current[5] = el; }}>Uncompromising Quality Journey</h2>
          <div className="timeline">
            <div className="t-item left" ref={(el) => { sectionRefs.current[6] = el; }}>
              <div className="t-content">
                <h5>Material Inspection</h5>
                <p>Virgin polymers & certified metals only</p>
              </div>
            </div>
            <div className="t-item right" ref={(el) => { sectionRefs.current[7] = el; }}>
              <div className="t-content">
                <h5>Pressure & Burst Testing</h5>
                <p>Validated up to 10 bar</p>
              </div>
            </div>
            <div className="t-item left" ref={(el) => { sectionRefs.current[8] = el; }}>
              <div className="t-content">
                <h5>Flow Rate Precision</h5>
                <p>Uniform discharge guaranteed</p>
              </div>
            </div>
            <div className="t-item right" ref={(el) => { sectionRefs.current[9] = el; }}>
              <div className="t-content">
                <h5>UV Resistance Testing</h5>
                <p>5000+ hours accelerated weathering</p>
              </div>
            </div>
            <div className="t-item left" ref={(el) => { sectionRefs.current[10] = el; }}>
              <div className="t-content">
                <h5>Final Certification</h5>
                <p>IS Standards & International Compliance</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment */}
      <section className="commitment" ref={(el) => { sectionRefs.current[11] = el; }}>
        <div className="container text-center position-relative">
          <h2 className="display-5 fw-bold">Our Promise to Every Farmer</h2>
          <p className="lead mt-4 col-lg-10 mx-auto">
            Reliable, affordable, and water-efficient irrigation solutions that increase productivity and conserve every precious drop.
          </p>
          <p className="fs-4 mt-4">
            <strong>Vidhi Enterprises</strong> – Engineered for tomorrow's agriculture.
          </p>
        </div>
      </section>

      {/* Placeholder for footer - you can replace with actual Footer component */}
      <div id="footer-container"></div>

      {/* Back to Top */}
      <Link href="/" className="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top">
        <i className="bi bi-arrow-up"></i>
      </Link>
    </>
  );
}
