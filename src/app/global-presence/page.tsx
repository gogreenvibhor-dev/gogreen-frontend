import Link from "next/link";
import WorldMap from "@/components/WorldMap";
import Header from "@/components/Header";

export default function GlobalPresence() {
  return (
    <>
      <Header />

      {/* Navbar - simplified version from HTML */}
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
              <Link href="/" className="nav-item nav-link"><b>Home</b></Link>
              <div className="nav-item dropdown">
                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown"><b>Products</b></a>
                <div className="dropdown-menu m-0 bg-light">
                  <Link href="/dripirri" className="dropdown-item"><b>Drip Irrigation</b></Link>
                  <Link href="/sprinkler" className="dropdown-item"><b>Sprinkler Irrigation</b></Link>
                  <Link href="/rainsprinkler" className="dropdown-item"><b>Rain Sprinkler</b></Link>
                  <Link href="/landscape" className="dropdown-item"><b>Landscape Irrigation</b></Link>
                  <Link href="/economical" className="dropdown-item"><b>Economical Irrigation</b></Link>
                  <Link href="/Vidhi-kit" className="dropdown-item"><b>Vidhi Kit</b></Link>
                </div>
              </div>
              <div className="nav-item dropdown">
                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown"><b>About Us</b></a>
                <div className="dropdown-menu bg-light m-0">
                  <Link href="/company-profile" className="dropdown-item"><b>Company Profile</b></Link>
                  <Link href="/founder-vision" className="dropdown-item"><b>Founder's Vision</b></Link>
                  <Link href="/our-journey" className="dropdown-item"><b>Our Journey</b></Link>
                  <Link href="/legacy-leader" className="dropdown-item"><b> Legacy &Leadership</b></Link>
                  <Link href="/manfacture" className="dropdown-item"><b>Manfacturing & Infrastructure</b></Link>
                  <Link href="/quality-policy" className="dropdown-item"><b>Quality Policy</b></Link>
                  <Link href="/sustainable" className="dropdown-item"><b>Sustainabilty Commitment</b></Link>
                  <Link href="/global-presence" className="dropdown-item"><b>Global Presence</b></Link>
                  <Link href="/knowledge-hub" className="dropdown-item"><b>Knowledge Hub</b></Link>
                  <Link href="/blog" className="dropdown-item"><b>Blog</b></Link>
                  <Link href="/careers" className="dropdown-item"><b>Careers</b></Link>
                </div>
              </div>
              <Link href="/contact" className="nav-item nav-link active"><b>Contact Us</b></Link>
              <Link href="/" className="navbar-brand d-flex align-items-center ps-4 mt-3 mt-lg-0">
                <img src="/img/logo-olored.png" className="logo-img img-fluid" alt="Vidhi Enterprises Logo Right" style={{ marginLeft: '0.5rem', marginBottom: '11px' }} />
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="mt-2">
        <div className="container">
          <h1>Global Presence</h1>
          <p>Trusted Irrigation Components Across Continents</p>
        </div>
      </header>

      {/* Introduction Section */}
      <section>
        <div className="container">
          <h2>Reaching Farmers Worldwide</h2>
          <p className="intro-text">
            Vidhi Enterprises has grown from a single workshop in India to a trusted supplier of drip and sprinkler irrigation components across the <strong>Middle East, Africa, and Asia</strong>.<br /><br />
            Our commitment to quality, precision, and reliability has helped us build strong distributor networks and long-term partnerships in multiple countries.
          </p>
        </div>
      </section>

      {/* Map Section */}
      <div className="container-xxl py-5" style={{ backgroundColor: 'whitesmoke' }}>
        <div className="container">
          <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '500px' }}>
            <p className="fs-5 fw-bold text-primary">Our Global Presence</p>
            <hr style={{ border: '2px solid darkgreen' }} />
            <h1 className="display-7 mb-5">Where You Can Find Us</h1>
          </div>

          <div className="map-card shadow rounded wow fadeInUp" data-wow-delay="0.3s">
            <div className="map-card-header d-flex justify-content-between align-items-center bg-light p-3 border-bottom">
              <div>
                <i className="fa fa-map-marker-alt text-primary"></i>
                <strong className="ms-2">Worldwide Locations</strong>
              </div>
              <div className="map-card-controls">
                <Link href="/" id="map-reset" className="btn btn-sm btn-outline-primary">
                  <i className="fa fa-sync-alt me-1"></i>Reset View
                </Link>
              </div>
            </div>
          
            <div className="map-card-body p-0 position-relative">
              <WorldMap />
            </div>
          </div>
        </div>
      </div>

      {/* Promise Section */}
      <section className="promise">
        <div className="container">
          <h2>Our Global Promise</h2>
          <p>
            With each new market we enter,<br />
            our promise remains the same:<br /><br />
            <strong>Consistent Quality • Timely Delivery • Engineered for Global Needs</strong>
          </p>
          <p style={{ marginTop: '70px', fontSize: '1.5em' }}>
            Vidhi Enterprises — Bringing precision irrigation to every corner of the world,<br />
            one trusted partnership at a time.
          </p>
        </div>
      </section>

      {/* Placeholder for footer - you can replace with actual Footer component */}
      <div id="footer-container"></div>

      {/* Back to Top Button */}
      <a href="#" className="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top">
        <i className="bi bi-arrow-up"></i>
      </a>
    </>
  );
}
