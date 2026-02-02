import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
export const metadata: Metadata = {
  title: "Cylindrical Dripline/ Emitting Pipe/ Inline Drip Tube - PC & NON PC | Vidhi Enterprises",
  description: "High-quality UV-resistant inline drip tubes and cylindrical driplines for landscape irrigation. Available in PC and NON PC variants with discharge rates from 1-8 LPH.",
  keywords: "inline drip tube, cylindrical dripline, emitting pipe, landscape irrigation, drip irrigation systems",
};

export default function InlineDrip() {
  return (
    <>
      {/* Placeholder for header - you can replace with actual Header component */}
      <div id="header-container"></div>

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light sticky-top p-2" style={{ backgroundColor: 'rgb(177, 226, 177)' }}>
        <div className="container-fluid px-0">
          <div className="d-flex w-100 align-items-center justify-content-between flex-wrap flex-lg-nowrap">
            <Link href="/" className="navbar-brand d-flex align-items-center px-4 px-lg-5 mb-2 mb-lg-0">
              <Image src="https://d170mw2nhcb1v0.cloudfront.net/img/vidhi_logo.png" className="ps-4 logo-img img-fluid" alt="Vidhi Enterprises Logo" />
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
      <div className="container-fluid page-header py-5 mb-5 mt-2" style={{ backgroundImage: 'url(https://d170mw2nhcb1v0.cloudfront.net/img/land-head-2.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="container text-center py-5">
          <h1 className="display-4 text-success mb-4">Cylindrical Dripline/ Emitting Pipe/ </h1>
          <h1 className="display-5 text-success mb-4">Inline Drip Tube - PC & NON PC</h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center mb-0" style={{ fontWeight: 'bolder' }}>
              <li className="breadcrumb-item"><Link href="/">Home</Link></li>
              <li className="breadcrumb-item"><Link href="/landscape">Landscape Irrigation</Link></li>
              <li className="breadcrumb-item active" aria-current="page">Cylindrical Dripline/ Emitting Pipe/ Inline Drip Tube - PC & NON PC</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Product Section */}
      <div className="cycle_section layout_padding">
        <div className="container">
          <div className="text-center mx-auto" style={{ maxWidth: '500px' }}>
            <p className="fs-5 fw-bold text-primary">Landscape Irrigation</p>
            <h1 className="display-5 mb-5" style={{ color: 'rgba(16, 16, 223, 0.668)' }}>Brown Drip Tubing</h1>
          </div>
          
          <div className="cycle_section_2 layout_padding">
            <div className="row mt-5">
              <div className="col-md-6">
                <div className="box_main mt-5">
                  <div className="image_2">
                    <Image src="https://d170mw2nhcb1v0.cloudfront.net/img/Land-2.png" width={700} height={700} alt="Brown Drip Tubing" />
                  </div>
                </div>
              </div>
              
              <div className="col-md-6 mt-5">
                <h2 className="Irrigation mt-5 text-success">Cylindrical Dripline/ Emitting Pipe/ Inline Drip Tube - PC & NON PC</h2>
                <hr style={{ border: '3px solid darkgreen' }} />
                <ul className="box" style={{ color: 'rgb(3, 3, 123)', textAlign: 'justify', fontSize: 'medium' }}>
                  <li className="mt-2">Maintains uniform irrigation even on uneven terrain or long lateral lengths.</li>
                  <li className="mt-2">Made from high-quality UV-resistant <b>raw material</b> for long life under sunlight exposure.</li>
                  <li className="mt-2">Compatible with fertigation and commonly used agrochemicals.</li>
                  <li className="mt-2">Emitting pipes (Drip lines) are made from 100% virgin raw materials.</li>
                  <li className="mt-2">Wide range of discharge from 1 LPH to 8 LPH to suit field conditions.</li>
                  <li className="mt-2">Excellent coefficient of variation (Less than 5%).</li>
                  <li className="mt-2">Option of 2 / 4 outlets per emitter enhancing uniform distribution of water along the length</li>
                  <li className="mt-2">Clog resistant due to wide flow path of Emitters.</li>
                  <li className="mt-2">Standard spacing of Emitters depending on individual customer requirement starting from 20 cm onwards</li>
                </ul>
                <hr style={{ border: '1px solid darkgreen' }} />

                <h1 className="Irrigation mt-5 text-success">Application</h1>
                <hr style={{ border: '3px solid darkgreen' }} />
                <p className="Irrigation mt-1" style={{ color: 'rgb(3, 3, 123)' }}>
                  <b>Ideal for row crops, vegetables, horticultural plantations, orchards, vineyards, fruit crops, sugarcane, floriculture, banana, cotton, chillies, and all kinds of close-spaced field crops, as well as greenhouses and landscape irrigation.</b>
                </p>
                <hr style={{ border: '1px solid darkgreen' }} />
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
