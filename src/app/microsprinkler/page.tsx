import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Micro Sprinkler - Drip Irrigation Products | Vidhi Enterprises",
  description: "High-quality micro sprinklers for horticultural crops, orchards, greenhouses, and nurseries. Available in 4 models: 50 LPH, 60 LPH, 90 LPH, and 160 LPH with color-coded options.",
  keywords: "micro sprinkler, drip irrigation, greenhouse irrigation, nursery irrigation",
};

export default function MicroSprinkler() {
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
      <div className="container-fluid page-header py-5 mb-5 mt-2" style={{ backgroundImage: 'url(https://d170mw2nhcb1v0.cloudfront.net/img/drip-head-14.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="container text-center py-5">
          <h1 className="display-3 text-white mb-4">Micro Sprinkler</h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center mb-0" style={{ fontWeight: 'bolder' }}>
              <li className="breadcrumb-item"><Link href="/">Home</Link></li>
              <li className="breadcrumb-item"><Link href="/dripirri">Drip Irrigation</Link></li>
              <li className="breadcrumb-item active" aria-current="page">Micro Sprinkler</li>
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
                    <Image src="https://d170mw2nhcb1v0.cloudfront.net/img/Drip-17.png" style={{ width: '600px', height: '700px' }} alt="Micro Sprinkler" />
                  </div>
                </div>
              </div>
              
              <div className="col-md-6 mt-5">
                <h1 className="Irrigation mt-5 text-success">Micro Sprinkler</h1>
                <hr style={{ border: '3px solid darkgreen' }} />
                <ul className="box" style={{ color: 'rgb(3, 3, 123)', textAlign: 'justify', fontSize: 'medium' }}>
                  <li className="mt-2">Constructed from premium virgin engineering material and UV-stabilized for superior durability and longevity.</li>
                  <li className="mt-2">Designed for precise, low-volume irrigation in horticultural crops, orchards, greenhouses, nurseries, and gardens.</li>
                  <li className="mt-2">Suitable for both upright and inverted installation ideal for overhead watering in greenhouses and nurseries.</li>
                  <li className="mt-2">Comes with 5.5mm microtube, pin connector, and sturdy PVC support stake for easy setup.</li>
                  <li className="mt-2">Ensures uniform water distribution with fine droplet formation for efficient irrigation.</li>
                  <li className="mt-2">Resistant to clogging and weather variations, offering reliable operation in all seasons.</li>
                  <li className="mt-2">Easy to install, clean, and maintain for long-term, hassle-free use.</li>
                  <li className="mt-2">Reduces water wastage while promoting healthy and uniform plant growth.</li>
                  <li className="mt-2"><b>Available Model: </b>50 LPH, 60 LPH, 90 LPH, 160 LPH</li>
                </ul>
                <hr style={{ border: '1px solid darkgreen' }} />

                <p className="Irrigation mt-1" style={{ color: 'rgb(3, 3, 123)' }}>
                  <b>Available in 4 Different Colours Micro Sprinklers</b>
                  <ul className="box" style={{ color: 'rgb(3, 3, 123)', textAlign: 'justify', fontSize: 'medium' }}>
                    <li>50 LPH <b style={{ color: 'red' }}>Red</b> Micro Sprinkler 8mm</li>
                    <li>60 LPH <b style={{ color: 'black' }}>Black</b> and <b style={{ color: 'white', backgroundColor: 'black' }}>White</b> Micro Sprinkler 8mm / 16mm</li>
                    <li>90 LPH <b style={{ color: 'orangered' }}>Orange</b> Micro Sprinkler 5.5mm</li>
                    <li>160 LPH <b style={{ color: 'green' }}>Green</b> Micro Sprinkler 8mm</li>
                  </ul>
                </p>
                <hr style={{ border: '1px solid darkgreen' }} />
              </div>
            </div>
            
            <div className="row">
              <div className="col-md-6 mt-5">
                <div className="image_2">
                  <Image src="https://d170mw2nhcb1v0.cloudfront.net/img/Drip-16.jpg" style={{ width: '550px', height: '650px' }} alt="Micro Sprinkler Application" />
                </div>
              </div>
              <div className="col-md-6">
                <h1 className="Irrigation mt-5 text-success">Application</h1>
                <hr style={{ border: '3px solid darkgreen' }} />
                <p className="Irrigation mt-1" style={{ color: 'rgb(3, 3, 123)' }}>
                  <b>Perfect for greenhouses, nurseries, fruit orchards, and landscape irrigation used for overhead or under-tree watering, frost protection, and efficient crop cooling.</b>
                </p>
                <hr style={{ border: '1px solid darkgreen' }} />
                <div className="image_2 text-center">
                  <Image src="https://d170mw2nhcb1v0.cloudfront.net/img/Model-40.png" alt="Micro Sprinkler Model" />
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
