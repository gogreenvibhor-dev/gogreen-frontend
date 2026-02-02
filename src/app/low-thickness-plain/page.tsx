import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Low Thickness Plain Laterals - Economical Irrigation | Vidhi Enterprises",
  description: "Budget-friendly low-thickness plain laterals (ISI Class I) for drip irrigation systems. UV-protected, 100% virgin material, compact coils for easy storage and transportation.",
  keywords: "low thickness plain laterals, economical irrigation, drip tubing, budget irrigation",
};

export default function LowThicknessPlain() {
  return (
    <>
      {/* Placeholder for header - you can replace with actual Header component */}
      <div id="header-container"></div>

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light sticky-top p-2" style={{ backgroundColor: 'rgb(177, 226, 177)' }}>
        <div className="container-fluid px-0">
          <div className="d-flex w-100 align-items-center justify-content-between flex-wrap flex-lg-nowrap">
            <Link href="/" className="navbar-brand d-flex align-items-center px-4 px-lg-5 mb-2 mb-lg-0">
              <Image src="https://d170mw2nhcb1v0.cloudfront.net/img/vidhi_logo.png" className="ps-4 logo-img img-fluid" alt="Vidhi Enterprises Logo" width={150} height={60} />
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
                <Link href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown"><b>Products</b></Link>
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
                <Link href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown"><b>About Us</b></Link>
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
      <div className="container-fluid page-header py-5 mb-5 mt-2" style={{ backgroundImage: 'url(https://d170mw2nhcb1v0.cloudfront.net/img/eco-head-1.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="container text-center py-5">
          <h1 className="display-4 text-green mb-4 text-justify" style={{ marginBottom: '80px' }}>LOW THICKNESS PLAIN LATERALS</h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center mb-0" style={{ fontWeight: 'bolder', marginBottom: '15px' }}>
              <li className="breadcrumb-item"><Link href="/">Home</Link></li>
              <li className="breadcrumb-item"><Link href="/economical">Economical Irrigation</Link></li>
              <li className="breadcrumb-item active" aria-current="page">Low Thickness Plain Laterals</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Product Section */}
      <div className="cycle_section layout_padding">
        <div className="container">
          <div className="text-center mx-auto" style={{ maxWidth: '500px' }}>
            <p className="fs-5 fw-bold text-primary">Economical Irrigation</p>
            <h1 className="display-5 mb-5" style={{ color: 'rgba(16, 16, 223, 0.668)' }}>Drip Tubing & Fittings</h1>
          </div>
          
          <div className="cycle_section_2 layout_padding">
            <div className="row mt">
              <div className="col-md-6 mt-5">
                <div className="box_main mt-3">
                  <div className="image_2">
                    <Image src="https://d170mw2nhcb1v0.cloudfront.net/img/Eco-1.png" style={{ width: '800px', height: '700px' }} alt="Low Thickness Plain Laterals" />
                  </div>
                </div>
              </div>
              
              <div className="col-md-6 mt-5">
                <h2 className="Irrigation mt-5 text-success">LOW THICKNESS PLAIN LATERALS</h2>
                <hr style={{ border: '3px solid darkgreen' }} />
                <ul className="box" style={{ color: 'rgb(3, 3, 123)', textAlign: 'justify', fontSize: 'medium' }}>
                  <li className="mt-2">Designed as a budget-friendly option, these low-thickness plain laterals (ISI Class I) perfectly fulfill farmers' irrigation needs.</li>
                  <li className="mt-2">These laterals act as the backbone of any efficient drip irrigation setup.</li>
                  <li className="mt-2">Manufactured using premium-quality 100% virgin material for superior performance.</li>
                  <li className="mt-2">Each roll features laser-etched product information with time stamping for complete production tracking.</li>
                  <li className="mt-2">Comes in neatly packed compact coils, ensuring convenient storage and easy transportation.</li>
                  <li className="mt-2">UV-protected material safeguards the pipe from sunlight damage and prevents stress-related cracks.</li>
                  <li className="mt-2">Every batch passes through strict quality inspections at multiple manufacturing levels.</li>
                  <li className="mt-2">Suitable for both above-ground installation and underground drip irrigation systems.</li>
                  <li className="mt-2">A green guiding strip helps in perfect alignment while installing emitters or dripper accessories.</li>
                  <li className="mt-2">The smooth interior minimizes frictional resistance, ensuring better water flow and long-term dependability.</li>
                </ul>
                <hr style={{ border: '1px solid darkgreen' }} />
              </div>
            </div>
            
            <div className="mt-4 text-center">
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
