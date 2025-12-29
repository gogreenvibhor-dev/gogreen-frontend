import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Landscape Irrigation Products | Vidhi Enterprises",
  description: "Complete range of landscape irrigation products including brown drip tubing, emitting devices, control valves, and accessories for professional landscape irrigation systems.",
  keywords: "landscape irrigation, drip tubing, emitters, control valves, irrigation fittings",
};

export default function Landscape() {
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
      <div className="container-fluid page-header py-5 mb-5 mt-2" style={{ backgroundImage: 'url(/img/12.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="container text-center py-5">
          <h1 className="display-3 text-white mb-4">Landscape Irrigation</h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center mb-0" style={{ fontWeight: 'bolder', color: 'rgba(1, 1, 90, 0.668)' }}>
              <li className="breadcrumb-item"><Link href="/">Home</Link></li>
              <li className="breadcrumb-item"><Link href="/products">Products</Link></li>
              <li className="breadcrumb-item active" aria-current="page">Landscape Irrigation</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Service Section */}
      <div className="container-xxl py-5" style={{ backgroundColor: 'rgb(203, 221, 203)' }}>
        <div className="text-center mx-auto" style={{ maxWidth: '500px' }}>
          <p className="fs-5 fw-bold text-primary">Landscape Irrigation</p>
          <hr style={{ border: '2px solid darkgreen' }} />
          <h1 className="display-5 mb-5">Products That We Offer For You</h1>
        </div>
        
        <div className="container d-flex">
          <div className="row lg-2">
            {/* Brown Drip Tubing */}
            <div className="col-sm-4 product-card">
              <div className="card">
                <div className="card-body" style={{ height: '450px' }}>
                  <img src="/img/icon/icon-4.png" className="d-block mx-auto" alt="Brown Drip Tubing" />
                  <h2 className="card-title mt-4" style={{ textAlign: 'center', color: 'rgba(1, 1, 90, 0.668)' }}>Brown Drip Tubing</h2>
                  <p className="card-text">
                    <ul style={{ fontSize: 'large', fontWeight: '600', marginTop: '35px' }}>
                      <li><Link href="/plain-drip">Plain Lateral/ Polytubes</Link></li>
                      <li><Link href="/inline-drip">Cylindrical Dripline/ Emitting Pipe/ Inline Drip Tube - PC & NON PC</Link></li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>

            {/* Emitting Devices */}
            <div className="col-sm-4 product-card">
              <div className="card" style={{ height: '450px' }}>
                <div className="card-body">
                  <img src="/img/icon/icon-4.png" className="d-block mx-auto" alt="Emitting Devices" />
                  <h2 className="card-title mt-4" style={{ textAlign: 'center', color: 'rgba(1, 1, 90, 0.668)' }}>Emitting Devices</h2>
                  <p className="card-text">
                    <ul style={{ fontSize: 'large', fontWeight: '600', marginTop: '35px' }}>
                      <li><Link href="/online-landscape">Online Emitters PC</Link></li>
                      <li><Link href="/online-turbokey-lands">Online Emitters NPC TurboKey Drippers</Link></li>
                      <li><Link href="/2-way-landscape">2-Way / 4-Way Connector</Link></li>
                      <li><Link href="/arrow-landscape">Pot Dripper/Arrow Dripper</Link></li>
                      <li><Link href="/anti-bug-landscape">Anti Bug Cup</Link></li>
                      <li><Link href="/6mm-landscape">6 mm Spagetty Pipe / Distributor Pipe</Link></li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>

            {/* Drip Fittings & Accessories */}
            <div className="col-sm-4 product-card">
              <div className="card" style={{ height: '450px' }}>
                <div className="card-body">
                  <img src="/img/icon/icon-4.png" className="d-block mx-auto" alt="Drip Fittings" />
                  <h3 className="card-title mt-4" style={{ textAlign: 'center', color: 'rgba(1, 1, 90, 0.668)' }}><b>Drip Fittings & Accessories</b></h3>
                  <p className="card-text">
                    <ul style={{ fontSize: 'large', fontWeight: '600', marginTop: '35px' }}>
                      <li><Link href="/drip-fitting-landscape">Drip Fittings</Link></li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>

            {/* Control Valves & ACC */}
            <div className="col-sm-4 product-card">
              <div className="card" style={{ height: '480px' }}>
                <div className="card-body">
                  <img src="/img/DI-6.png" className="d-block mx-auto" alt="Control Valves" style={{ width: '120px', height: '120px' }} />
                  <h2 className="card-title mt-4" style={{ textAlign: 'center', color: 'rgba(1, 1, 90, 0.668)' }}>Control Valves & ACC</h2>
                  <p className="card-text">
                    <ul style={{ fontSize: 'large', fontWeight: '600', marginTop: '35px' }}>
                      <li><Link href="/air-realease-landscape">Air Release Valve</Link></li>
                      <li><Link href="/single-union-landscape">Single Union Ball Valve</Link></li>
                      <li><Link href="/double-union-landscape">Double Union Ball Valve</Link></li>
                      <li><Link href="/prv">Pressure Relief Valve</Link></li>
                      <li><Link href="/pressure-gauge-landscape">Pressure Gauge</Link></li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>

            {/* Accessories For Pop Ups */}
            <div className="col-sm-4 product-card">
              <div className="card" style={{ height: '450px' }}>
                <div className="card-body">
                  <img src="/img/icon/icon-4.png" className="d-block mx-auto" alt="Accessories" />
                  <h2 className="card-title mt-4" style={{ textAlign: 'center', color: 'rgba(1, 1, 90, 0.668)' }}>Accessories For Pop Ups</h2>
                  <p className="card-text">
                    <ul style={{ fontSize: 'large', fontWeight: '600', marginTop: '35px' }}>
                      <li><Link href="/valve-box">Valve Box</Link></li>
                      <li><Link href="/saddles">Saddles</Link></li>
                      <li><Link href="/swing-joint">Swing Joint</Link></li>
                      <li><Link href="/quick-coupling">Quick Coupling Valves, Key & Elbow</Link></li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Placeholder for footer - you can replace with actual Footer component */}
      <div id="footer-container"></div>

      {/* Back to Top */}
      <Link href="#" className="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top">
        <i className="bi bi-arrow-up"></i>
      </Link>
    </>
  );
}
