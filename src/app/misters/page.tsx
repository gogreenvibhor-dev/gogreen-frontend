import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Misters - Drip Irrigation Products | Vidhi Enterprises",
  description: "High-quality misters for controlled environment agriculture. UV-stabilized with fine misting uniformity, ideal for greenhouses, nurseries, and shade houses.",
  keywords: "misters, misting systems, greenhouse irrigation, humidity control",
};

export default function Misters() {
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
                <img src="/img/logo-olored.png" className="logo-img img-fluid" alt="Vidhi Enterprises Logo Right" style={{ marginLeft: '0.5rem', marginBottom: '11px' }} />
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Page Header */}
      <div className="container-fluid page-header py-5 mb-5 mt-2" style={{ backgroundImage: 'url(/img/drip-head-13.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="container text-center py-5">
          <h1 className="display-3 text-white mb-4">Misters</h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center mb-0" style={{ fontWeight: 'bolder' }}>
              <li className="breadcrumb-item"><Link href="/">Home</Link></li>
              <li className="breadcrumb-item"><Link href="/dripirri">Drip Irrigation</Link></li>
              <li className="breadcrumb-item active" aria-current="page">Misters</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Product Section */}
      <div className="cycle_section layout_padding">
        <div className="container">
          <div className="text-center mx-auto" style={{ maxWidth: '500px' }}>
            <p className="fs-5 fw-bold text-primary">Drip Irrigation</p>
            <hr style={{ border: '1px solid darkgreen' }} />
            <h1 className="display-5 mb-5" style={{ color: 'rgba(16, 16, 223, 0.668)' }}>Emitting Devices</h1>
            <hr style={{ border: '1px solid darkgreen' }} />
          </div>
          
          <div className="cycle_section_2 layout_padding">
            <div className="row">
              <div className="col-md-6">
                <div className="box_main">
                  <div className="image_2">
                    <img src="/img/Drip-14.png" style={{ width: '600px', height: '700px' }} alt="Misters" />
                  </div>
                </div>
              </div>
              <div className="col-md-6 mt-5">
                <h1 className="Irrigation mt-5 text-success">Misters</h1>
                <hr style={{ border: '3px solid darkgreen' }} />
                <ul className="box" style={{ color: 'rgb(3, 3, 123)', textAlign: 'justify', fontSize: 'medium' }}>
                  <li className="mt-2">Manufactured from high-grade virgin engineering material with UV stabilization for extended durability.</li>
                  <li className="mt-2">Essential component for controlled environment agriculture and precision irrigation systems.</li>
                  <li className="mt-2">Functions effectively as a humidifier to maintain optimal humidity levels for plant growth.</li>
                  <li className="mt-2">Provides superior water distribution with fine misting uniformity.</li>
                  <li className="mt-2">Available with anti-drip or leak prevention mechanisms for efficient operation.</li>
                  <li className="mt-2">Easy to install, clean, and maintain, ensuring long-term performance.</li>
                  <li className="mt-2">Delivers gentle mist ideal for delicate plants and seedlings.</li>
                  <li className="mt-2">Ensures energy-efficient operation with low water consumption.</li>
                  <li className="mt-2">Equipped with optional Leak Prevention Devices (LPD) for efficient and drip-free performance.</li>
                </ul>
                <hr style={{ border: '1px solid darkgreen' }} />
              </div>
            </div>

            <div className="row" style={{ marginTop: '-130px' }}>
              <div className="col-md-6 mt-5">
                <div className="image_2">
                  <img src="/img/Drip-15.jpg" style={{ width: '600px', height: '600px' }} alt="Misters Application" />
                </div>
              </div>
              <div className="col-md-6 mt-5">
                <h1 className="Irrigation mt-5 text-success">Application</h1>
                <hr style={{ border: '3px solid darkgreen' }} />
                <p className="Irrigation mt-1" style={{ color: 'rgb(3, 3, 123)' }}>
                  <b>Best suited for greenhouses, nurseries, and shade houses for overhead cooling, humidity control, and uniform misting to enhance plant growth under controlled climatic conditions.</b>
                </p>
                <hr style={{ border: '1px solid darkgreen' }} />
                <div className="image_2 text-center mt-5">
                  <img src="/img/drip-table-14.png" alt="Misters Table" />
                </div>
                <div className="image_2 text-center">
                  <img src="/img/Model-39.png" alt="Misters Model" />
                </div>
              </div>
            </div>

            <div className="text-center">
              <Link href="/AM pdf.pdf" target="_blank" className="btn btn-outline-light px-4 py-2" style={{ color: 'rgba(16, 16, 223, 0.668)' }}>
                View PDF
              </Link>
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
