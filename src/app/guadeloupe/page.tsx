import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Vidhi Enterprises - Guadeloupe Irrigation Solutions",
  description: "Vidhi Enterprises exports drip systems, foggers, sprinklers and filtration units for Guadeloupe's landscaping, nurseries and farms.",
  keywords: "irrigation Guadeloupe, landscaping irrigation Caribbean, drip Guadeloupe",
};

export default function Guadeloupe() {
  return (
    <>
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
                <Image src="https://d170mw2nhcb1v0.cloudfront.net/img/logo-olored.png" className="logo-img img-fluid" alt="Vidhi Enterprises Logo Right" style={{ marginLeft: '0.5rem', marginBottom: '11px' }} />
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Page Header */}
      <div className="container-fluid page-header py-5 mb-5 mt-2" style={{ backgroundImage: 'url(https://d170mw2nhcb1v0.cloudfront.net/img/head-eco.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="container text-center py-5">
          <h1 className="display-3 text-white mb-4">Guadeloupe</h1>
          <nav aria-label="breadcrumb">
            <p></p>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="watermark">
        <div className="cycle_section layout_padding">
          <div className="container">
            <div className="text-center mx-auto" style={{ maxWidth: '500px' }}>
              <h6 className="display-8 mb-5 fw-bolder" style={{ color: 'rgba(16, 16, 223, 0.668)', fontSize: 'x-large' }}>
                Welcome to our Guadeloupe irrigation solutions page.
              </h6>
              <h1 className="display-8 mb-5 fw-bolder" style={{ color: 'rgba(16, 16, 223, 0.668)', textShadow: '2px 2px 4px rgba(43, 126, 198, 0.5)' }}>
                Bonjour! (Hello!)
              </h1>
            </div>

            <div className="cycle_section_2 layout_padding">
              <div className="row">
                <div className="col-md-8 text-justify">
                  <p className="fs-1 fw-bold text-primary text-center">Introduction</p>
                  <hr style={{ border: '3px solid darkgreen' }} />
                  <p className="box" style={{ color: 'rgb(3, 3, 123)', textAlign: 'justify', fontSize: 'medium', fontWeight: 'bolder' }}>
                    Vidhi Enterprises provides irrigation systems to Guadeloupe's landscaping sector, nurseries, and small-scale agriculture.
                  </p>
                  <p className="box" style={{ color: 'rgb(3, 3, 123)', textAlign: 'justify', fontSize: 'medium', fontWeight: 'bolder' }}>
                    As a Caribbean island, Guadeloupe requires coastal-resistant materials that withstand humidity and saline conditions
                  </p>
                  <hr style={{ border: '1px solid darkgreen' }} />

                  <p className="fs-1 fw-bold text-primary text-center mt-5">Market Insights</p>
                  <hr style={{ border: '3px solid darkgreen' }} />
                  <p className="box" style={{ color: 'rgb(3, 3, 123)', textAlign: 'justify', fontSize: 'medium', fontWeight: 'bolder' }}>
                    Resort landscaping and nurseries frequently use micro sprinklers and foggers.
                  </p>
                  <p className="box" style={{ color: 'rgb(3, 3, 123)', textAlign: 'justify', fontSize: 'medium', fontWeight: 'bolder' }}>
                    Compact filtration is essential due to varying water quality.
                  </p>
                  <hr style={{ border: '1px solid darkgreen' }} />

                  <p className="fs-1 fw-bold text-primary text-center mt-5">Products We Supply</p>
                  <hr style={{ border: '3px solid darkgreen' }} />
                  <ul className="box" style={{ color: 'rgb(3, 3, 123)', textAlign: 'justify', fontSize: 'medium', fontWeight: 'bolder' }}>
                    <li className="mt-2">Drip laterals & drippers</li>
                    <li className="mt-2">Micro sprinklers</li>
                    <li className="mt-2">Foggers & misters</li>
                    <li className="mt-2">Filtration units</li>
                    <li className="mt-2">HDPE pipes</li>
                  </ul>
                  <hr style={{ border: '1px solid darkgreen' }} />

                  <p className="fs-1 fw-bold text-primary text-center mt-5">Industries We Serve</p>
                  <hr style={{ border: '3px solid darkgreen' }} />
                  <ul className="box" style={{ color: 'rgb(3, 3, 123)', textAlign: 'justify', fontSize: 'medium', fontWeight: 'bolder' }}>
                    <li className="mt-2">Resorts & landscaping</li>
                    <li className="mt-2">Nurseries</li>
                    <li className="mt-2">Smallholder farms</li>
                  </ul>
                  <hr style={{ border: '1px solid darkgreen' }} />

                  <p className="fs-1 fw-bold text-primary text-center mt-5">Why Choose Vidhi Enterprises</p>
                  <hr style={{ border: '3px solid darkgreen' }} />
                  <ul className="box" style={{ color: 'rgb(3, 3, 123)', textAlign: 'justify', fontSize: 'medium', fontWeight: 'bolder' }}>
                    <li className="mt-2">Coastal-resistant irrigation materials</li>
                    <li className="mt-2">Reliable Caribbean shipment support</li>
                    <li className="mt-2">Suitable for horticulture & decorative landscaping</li>
                  </ul>
                  <hr style={{ border: '1px solid darkgreen' }} />
                </div>
                <div className="col-md-6 mt-5" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <div className="image_2 mt-5">
                    <Image src="https://d170mw2nhcb1v0.cloudfront.net/img/Guadeloupe.png" alt="Guadeloupe" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Placeholder for footer - you can replace with actual Footer component */}
      <div id="footer-container"></div>

      {/* Back to Top */}
      <Link href="/" className="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top">
        <i className="bi bi-arrow-up"></i>
      </Link>
    </>
  );
}
