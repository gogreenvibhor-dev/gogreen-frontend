import Link from "next/link";

export default function Header() {
  return (
    <>
      {/* Topbar Start */}
      <div className="container-fluid bg-dark text-light px-0 py-2">
        <div className="row gx-0 d-none d-lg-flex">
          <div className="col-lg-7 px-5 text-start">
            <div className="h-100 d-inline-flex align-items-center me-4">
              <span className="fa fa-phone-alt me-2"></span>
              <span>+91-8376007474</span>
            </div>
            <div className="h-100 d-inline-flex align-items-center">
              <span className="far fa-envelope me-2"></span>
              <span>buyfromvidhi@gmail.com</span>
            </div>
          </div>
          <div className="col-lg-5 px-5 text-end">
            <div className="h-100 d-inline-flex align-items-center mx-n2">
              <span>Follow Us:</span>
              <a 
                className="btn btn-link text-light" 
                target="_blank" 
                rel="noopener noreferrer"
                href="https://www.facebook.com/p/Vidhi-Enterprises-61560940581059/"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a 
                className="btn btn-link text-light" 
                target="_blank" 
                rel="noopener noreferrer"
                href=""
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a 
                className="btn btn-link text-light" 
                target="_blank" 
                rel="noopener noreferrer"
                href="https://www.linkedin.com/company/vidhi_enterprises/"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a 
                className="btn btn-link text-light" 
                target="_blank" 
                rel="noopener noreferrer"
                href="https://www.instagram.com/vidhi_enterprises_delhi/"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a 
                className="btn btn-link text-light" 
                target="_blank" 
                rel="noopener noreferrer"
                href="https://www.youtube.com/@VidhiEnterprisesNewDelhi"
              >
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Topbar End */}
    </>
  );
}
