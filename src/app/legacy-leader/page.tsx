'use client';

import { useEffect, useRef } from "react";
import Link from "next/link";

export default function LegacyLeader() {
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const h2Refs = useRef<(HTMLElement | null)[]>([]);
  const generationRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.15 }
    );

    // Observe all elements
    [...sectionRefs.current, ...h2Refs.current, ...generationRefs.current].forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style jsx>{`
        body {
          font-family: 'Inter', sans-serif;
          margin: 0;
          padding: 0;
          background-color: #fdfbf5;
          color: #3d2b1f;
          line-height: 1.8;
          overflow-x: hidden;
        }
        h1, h2, h3 { font-family: 'Playfair Display', serif; }
        .container { max-width: 1000px; margin: 0 auto; padding: 0 20px; }

        header {
          background: linear-gradient(135deg, #8B4513 0%, #D2691E 50%, #DEB887 100%);
          color: white;
          text-align: center;
          padding: 100px 0;
          position: relative;
          overflow: hidden;
        }
        header::before {
          content: ''; position: absolute; top: 0; left: -100%; width: 100%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          animation: shimmer 3s infinite;
        }
        @keyframes shimmer { 0% { left: -100%; } 100% { left: 100%; } }
        header h1 {
          font-size: 3.8em; font-weight: 700; margin: 0 0 10px 0;
          animation: fadeInUp 1.5s ease-out, glow 2.5s ease-in-out infinite alternate;
        }
        @keyframes glow {
          from { text-shadow: 0 0 10px rgba(255,255,255,0.6); }
          to { text-shadow: 0 0 20px rgba(255,255,255,255,0.9), 0 0 30px rgba(139,69,19,0.6); }
        }
        .header-subtitle { font-size: 1.4em; font-weight: 300; animation: fadeInUp 1.5s ease-out 0.4s both; }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }

        section { padding: 90px 0; opacity: 0; transform: translateY(70px); transition: opacity 1s, transform 1s; }
        section.visible { opacity: 1; transform: translateY(0); }

        h2 {
          font-size: 3em; text-align: center; color: #8B4513; margin-bottom: 50px;
          position: relative; opacity: 0; transform: translateY(30px); transition: all 1s;
        }
        h2.visible { opacity: 1; transform: translateY(0); }
        h2::after {
          content: ''; display: block; width: 0; height: 3px;
          background: linear-gradient(90deg, #8B4513, #D2691E); margin: 15px auto;
          transition: width 1s;
        }
        h2.visible::after { width: 120px; }

        /* Generations */
        .generation {
          margin: 120px 0;
          padding: 60px;
          border-radius: 25px;
          background: white;
          box-shadow: 0 15px 40px rgba(0,0,0,0.08);
          overflow: hidden;
          opacity: 0;
          transform: translateY(80px);
          transition: all 1.4s ease-out;
        }
        .generation.visible { opacity: 1; transform: translateY(0); }

        .gen-badge {
          display: inline-flex;
          align-items: center;
          gap: 15px;
          font-size: 2.2em;
          font-weight: 700;
          color: white;
          padding: 12px 30px;
          border-radius: 50px;
          margin-bottom: 30px;
          box-shadow: 0 8px 25px rgba(0,0,0,0.2);
        }
        .gen-1 .gen-badge { background: linear-gradient(135deg, #4169E1, #6495ED); }
        .gen-2 .gen-badge { background: linear-gradient(135deg, #32CD32, #90EE90); }
        .gen-3 .gen-badge { background: linear-gradient(135deg, #9370DB, #DDA0DD); }

        .leader-name {
          font-size: 2.8em;
          text-align: center;
          margin: 20px 0 10px;
          color: #3d2b1f;
        }
        .leader-title {
          text-align: center;
          font-size: 1.3em;
          color: #8B4513;
          margin-bottom: 40px;
          font-style: italic;
        }

        .leader-content {
          display: grid;
          grid-template-columns: 1fr 320px;
          gap: 50px;
          align-items: start;
        }
        .leader-desc ul {
          list-style: none;
          padding: 0;
        }
        .leader-desc li {
          padding: 12px 0 12px 35px;
          position: relative;
          opacity: 0;
          transform: translateX(-30px);
          transition: all 0.7s ease-out;
        }
        .generation.visible .leader-desc li { opacity: 1; transform: translateX(0); }
        .leader-desc li:nth-child(1) { transition-delay: 0.3s; }
        .leader-desc li:nth-child(2) { transition-delay: 0.4s; }
        .leader-desc li:nth-child(3) { transition-delay: 0.5s; }
        .leader-desc li:nth-child(4) { transition-delay: 0.6s; }
        .leader-desc li:nth-child(5) { transition-delay: 0.7s; }
        .leader-desc li::before {
          content: '✔';
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          color: #D2691E;
          font-weight: bold;
        }

        .photo-placeholder {
          width: 100%;
          height: 310px;
          background: linear-gradient(135deg, #f5f5dc, #fdfbf5);
          border-radius: 160px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          border: 1px dashed #D2691E;
          font-size: 1em;
          color: #8B4513;
          animation: float 5s ease-in-out infinite;
        }
        @keyframes float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-12px); } }
        .photo-placeholder i { font-size: 5.5em; margin-bottom: 15px; animation: pulse 2s infinite; }
        @keyframes pulse { 0% { transform: scale(1); } 50% { transform: scale(1.12); } 100% { transform: scale(1); } }

        .quote-box {
          background: #f5f5dc;
          padding: 35px;
          border-radius: 20px;
          margin-top: 40px;
          border-left: 6px solid #D2691E;
          font-style: italic;
          font-size: 1.15em;
          line-height: 1.7;
          box-shadow: 0 8px 25px rgba(139,69,19,0.1);
          opacity: 0;
          transform: translateY(30px);
          transition: all 1s ease-out 0.5s;
        }
        .generation.visible .quote-box { opacity: 1; transform: translateY(0); }

        .closing-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
          margin: 40px 0;
        }
        .closing-card {
          background: white;
          padding: 30px;
          border-radius: 15px;
          text-align: center;
          box-shadow: 0 8px 25px rgba(0,0,0,0.08);
          transition: transform 0.3s ease;
        }
        .closing-card:hover {
          transform: translateY(-5px);
        }
        .closing-card i {
          font-size: 2.5em;
          color: #8B4513;
          margin-bottom: 15px;
        }
        .closing-card h3 {
          font-size: 1.2em;
          color: #3d2b1f;
          margin: 0;
        }

        @media (max-width: 768px) {
          .leader-content { grid-template-columns: 1fr; }
          .gen-badge { font-size: 1.8em; }
          .leader-name { font-size: 2.2em; }
          .photo-placeholder { height: 280px; }
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

      {/* Header */}
      <header className="mt-2">
        <div className="container">
          <h1>⭐Legacy & Leadership</h1>
          <p className="header-subtitle">Three Generations. One Vision. Endless Commitment to Quality.</p>
        </div>
      </header>

      {/* Legacy Introduction */}
      <section ref={(el) => { sectionRefs.current[0] = el; }} className="legacy-intro">
        <div className="container">
          <h2 ref={(el) => { h2Refs.current[0] = el; }}>🌿 A Legacy Built on Precision & Integrity</h2>
          <p style={{ textAlign: 'center', fontSize: '1.15em', maxWidth: '800px', margin: '0 auto 30px', color: '#5d4037' }}>
            Vidhi Enterprises was built on the dedication and engineering brilliance of Late Shri Dhirendar Kumar Jain (D.K. Jain) — an engineer, architect, and visionary whose passion for accuracy changed the way micro-irrigation components were made in India.
          </p>
          <p style={{ textAlign: 'center', fontSize: '1.15em', maxWidth: '800px', margin: '0 auto' }}>
            Starting in the early 1980s with just one helper and a small home-based setup, he transformed a simple idea into a respected manufacturing enterprise. His legacy lives in every product we create — the insistence on perfect flow rate, consistent discharge, accurate dimensions, and the belief that precision is the soul of irrigation technology.
          </p>
        </div>
      </section>

      {/* Generation 1 */}
      <section ref={(el) => { generationRefs.current[0] = el; }} className="generation gen-1">
        <div className="container">
          <div className="gen-badge">First Generation — The Visionary</div>
          <h2 className="leader-name">Late Shri Dhirendar Kumar Jain (D.K. Jain)</h2>
          <p className="leader-title">Founder – Engineer, Architect & Precision Expert</p>

          <div className="leader-content">
            <div className="leader-desc">
              <ul>
                <li>Pioneer in OEM and white-label production for irrigation brands.</li>
                <li>Known for unmatched mastery in flow discharge, emitter accuracy, and sprinkler performance.</li>
                <li>Built the foundation of the company's manufacturing and engineering capabilities.</li>
                <li>Expanded production from hand moulding machines to automatic injection moulding lines, extruders, and a full tool room.</li>
                <li>Inspired future generations through discipline, honesty, and technical excellence.</li>
              </ul>
              <p style={{ marginTop: '25px', fontStyle: 'italic', color: '#8B4513' }}>
                His legacy remains the heartbeat of Vidhi Enterprises.
              </p>
            </div>
            <div className="photo-placeholder">
              <img src="/img/dada-ji.png" alt="Late Shri Dhirendar Kumar Jain" />
            </div>
          </div>

          <div className="quote-box">
            "The man who built Vidhi from one room with precision, honesty, and discipline — the foundation of everything we are today."<br /><br />
            "I named this company Vidhi because Vidhi means the right way — the right way of doing any work. My vision was simple: make every product with honesty, precision, and discipline. When the way is right, the results will always be right..."
          </div>
        </div>
      </section>

      {/* Generation 2 */}
      <section ref={(el) => { generationRefs.current[1] = el; }} className="generation gen-2">
        <div className="container">
          <div className="gen-badge">Second Generation — Expansion Leader</div>
          <h2 className="leader-name">Mr. Vineet Jain</h2>
          <p className="leader-title">Driving Growth, Modernization & Global Markets</p>

          <div className="leader-content">
            <div className="leader-desc">
              <ul>
                <li>Joining in 1995 — propelled Vidhi into technological upgrades</li>
                <li>Introduced plastic & brass sprinkler manufacturing</li>
                <li>Started gravity die casting & large-format rain sprinklers</li>
                <li>Led entry into UAE, Saudi Arabia, Qatar, Oman & Middle East markets</li>
                <li>Strengthened OEM partnerships across India</li>
                <li>Ensured founder's values remain at the core of every decision</li>
              </ul>
            </div>
            <div className="photo-placeholder">
              <img src="/img/vineet-jain.png" alt="Mr. Vineet Jain" />
            </div>
          </div>

          <div className="quote-box">
            "Expanding the founder's vision with global reach, modern innovation, and long-term relationships."<br /><br />
            "My focus has always been on quality, consistency, and long-term relationships — values my father lived by. From expanding our product range to entering international markets, every step has been driven by the belief that farmers and partners deserve the best."
          </div>
        </div>
      </section>

      {/* Generation 3 */}
      <section ref={(el) => { generationRefs.current[2] = el; }} className="generation gen-3">
        <div className="container">
          <div className="gen-badge">Third Generation — Future-Ready Vision</div>
          <h2 className="leader-name">Mr. Vibhor Jain</h2>
          <p className="leader-title">Innovation, Global Strategy & Next-Gen Precision</p>

          <div className="leader-content">
            <div className="leader-desc">
              <ul>
                <li>Started on the factory floor — learned every technical detail hands-on</li>
                <li>Led African market expansion — major success in Kenya (2024)</li>
                <li>Modernized digital presence & brand identity</li>
                <li>Improved export packaging, documentation & global compliance</li>
                <li>Upgraded product lines to latest international standards</li>
                <li>Building new distributor networks worldwide</li>
              </ul>
            </div>
            <div className="photo-placeholder">
              <img src="/img/vibhor-jain.png" alt="Mr. Vibhor Jain" />
            </div>
          </div>

          <div className="quote-box">
            "Carrying forward a three-generation legacy with new ideas, new markets, and the same dedication."<br /><br />
            "The vision my grandfather started in the early 80s lives through every decision I make. I am committed to preserving his values while shaping Vidhi Enterprises into a global name built on quality, trust, and engineering excellence."<br /><br />
            — Vibhor Jain
          </div>
        </div>
      </section>

      {/* Leadership Philosophy */}
      <section ref={(el) => { sectionRefs.current[1] = el; }} style={{ background: '#8B4513', color: 'white', padding: '100px 0', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color: 'white' }}>🌎Leadership Philosophy</h2>
          <p style={{ fontSize: '1.4em', maxWidth: '800px', margin: '0 auto 30px' }}>
            Across three generations, the leadership of Vidhi Enterprises is united by a single belief:<br /><br />
            <strong>"Build products that last. Build relationships that trust. Build a company that stands the test of time."</strong>
          </p>
          <p style={{ fontSize: '1.2em', opacity: 0.9 }}>
            Together, we lead the company toward becoming a global benchmark in micro-irrigation technology — rooted in family values, driven by engineering excellence, and committed to a water-efficient future.
          </p>
        </div>
      </section>

      {/* Moving Forward */}
      <section ref={(el) => { sectionRefs.current[2] = el; }} className="closing">
        <div className="container">
          <h2 ref={(el) => { h2Refs.current[1] = el; }}>Moving Forward With Purpose</h2>
          <p style={{ fontSize: '1.3em', maxWidth: '800px', margin: '0 auto 60px', opacity: '.95' }}>
            Vidhi Enterprises continues to grow under the combined strength of:
          </p>
          <div className="closing-grid">
            <div className="closing-card">
              <i className="fas fa-book-open"></i>
              <h3>Founder's principles</h3>
            </div>
            <div className="closing-card">
              <i className="fas fa-light fa-chart-line"></i>
              <h3>Experience of the second generation</h3>
            </div>
            <div className="closing-card">
              <i className="fas fa-rocket"></i>
              <h3>Energy and innovation of the third generation</h3>
            </div>
          </div>
          <p className="closing-p" style={{ fontSize: '1.25em', maxWidth: '900px', margin: '50px auto 0', opacity: '.95', lineHeight: '1.7' }}>
            Together, they lead the company toward becoming a <strong>global benchmark in micro-irrigation technology</strong>, supplying reliable components that support farmers, contractors, and industries worldwide.
          </p>
        </div>
      </section>

      {/* Placeholder for footer - you can replace with actual Footer component */}
      <div id="footer-container"></div>

      {/* Back to Top */}
      <Link href="#" className="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top">
        <i className="bi bi-arrow-up"></i>
      </Link>
    </>
  );
}
