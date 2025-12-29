'use client';

import { useState } from "react";
import Link from "next/link";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export default function KnowledgeHub() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleAnswer = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  const faqs: FAQItem[] = [
    {
      id: 1,
      question: "Why is my dripper not giving proper water?",
      answer: "Reasons may be:\n\n• Clogging due to dirt\n• Low or high pressure\n• Pipe bending\n• Air-lock in the system\n\nSolution: Clean the filter regularly and flush the laterals."
    },
    {
      id: 2,
      question: "What is a venturi injector? Why is it used?",
      answer: "A venturi injector is a device used to apply fertilizers through the irrigation system. It works on pressure differences and saves time & labor."
    },
    {
      id: 3,
      question: "What is the difference between sprinkler and rain gun?",
      answer: "Sprinkler: Used for small to medium fields; uniform water distribution.\n\nRain Gun: Covers large areas (up to 60–80 meters radius) and is useful for crops like sugarcane, fodder, groundnut, potato."
    },
    {
      id: 4,
      question: "How to prevent clogging in drip systems?",
      answer: "• Clean sand & screen filters weekly\n• Flush lateral pipes\n• Use clean water\n• Use fertigation only with proper filtration\n• Install air release valves"
    },
    {
      id: 5,
      question: "Why are filters important in irrigation systems?",
      answer: "Filters remove sand, mud, and other particles. Without filters, drippers and nozzles get blocked easily."
    },
    {
      id: 6,
      question: "What are micro sprinklers?",
      answer: "Micro sprinklers are small sprinklers used for nurseries, orchards, and vegetables. They save water and give gentle irrigation."
    },
    {
      id: 7,
      question: "Do drip systems increase crop yield?",
      answer: "Yes! Drip irrigation provides:\n\n• Uniform water\n• No water stress\n• Efficient fertigation\n\nOverall yield can increase by 20–60%."
    },
    {
      id: 8,
      question: "Why is my pipe bursting or leaking?",
      answer: "Possible reasons:\n\n• High pressure\n• Poor quality pipes\n• Wrong installation\n• Not using clamps or grommets properly\n\nSolution: Use ISI-quality products and proper fittings."
    },
    {
      id: 9,
      question: "What is an air release valve? Why do we need it?",
      answer: "It releases trapped air from pipes during irrigation.\n\n• Prevents bursting\n• Improves water flow\n• Protects pump and pipelines"
    },
    {
      id: 10,
      question: "Does drip irrigation reduce electricity cost?",
      answer: "Yes! It requires less water and shorter pump running time, saving 30–50% electricity."
    },
    {
      id: 11,
      question: "Can I use drip irrigation for polyhouse farming?",
      answer: "Yes, it is the best method for polyhouse crops like capsicum, cucumber, strawberry, tomato."
    },
    {
      id: 12,
      question: "What is drip irrigation?",
      answer: "Drip irrigation is a system where water is supplied slowly and directly to the root zone of the plant. It saves water (up to 60–70%), increases yield, and reduces weed growth."
    }
  ];

  return (
    <>
      <style jsx>{`
        :root {
          --green: #1a5f3d;
          --green-dark: #0e3d27;
          --green-light: #4a9c6d;
          --gold: #9c7a3a;
          --light: #f8fdfa;
        }
        
        body { 
          margin: 0; 
          font-family: 'Segoe UI', Tahoma, sans-serif; 
          background: #fff; 
          color: #333; 
          line-height: 1.7; 
        }
        
        h1, h2, h3 { 
          font-family: Georgia, serif; 
          color: var(--green-dark); 
        }
        
        h1 { 
          font-family: Georgia, serif; 
          color: whitesmoke; 
        }

        /* Hero */
        .hero {
          height: 45vh; 
          min-height: 450px;
          background: linear-gradient(rgba(0,0,0,0.62), rgba(0,0,0,0.72)),
                     url('https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2070&auto=format&fit=crop') center/cover no-repeat;
          display: flex; 
          align-items: center; 
          justify-content: center; 
          text-align: center; 
          color: white;
        }
        
        .hero h1 { 
          font-size: 4.5rem; 
          margin: 0; 
          text-shadow: 0 4px 20px rgba(0,0,0,0.7); 
        }
        
        .hero p { 
          font-size: 1.45rem; 
          max-width: 820px; 
          margin: 20px auto 0; 
        }

        .section { 
          padding: 110px 20px; 
        }
        
        .container { 
          max-width: 1200px; 
          margin: 0 auto; 
          padding: 0 20px; 
        }

        .section-title {
          text-align: center; 
          font-size: 3.2rem; 
          margin-bottom: 70px; 
          position: relative;
        }
        
        .section-title::after {
          content: ''; 
          width: 120px; 
          height: 5px; 
          background: var(--gold);
          display: block; 
          margin: 25px auto; 
          border-radius: 3px;
        }

        /* FAQ Accordion */
        .faq {
          background: var(--light); 
          border-radius: 18px; 
          overflow: hidden;
          box-shadow: 0 12px 40px rgba(0,0,0,0.08); 
          margin-bottom: 25px;
          transition: 0.4s;
        }
        
        .faq:hover { 
          transform: translateY(-8px); 
          box-shadow: 0 20px 50px rgba(26,95,61,0.16); 
        }
        
        .faq-question {
          background: var(--green); 
          color: white; 
          padding: 28px 35px;
          font-size: 1.38rem; 
          font-weight: 600; 
          cursor: pointer;
          display: flex; 
          justify-content: space-between; 
          align-items: center;
        }
        
        .faq-question:hover { 
          background: var(--green-dark); 
        }
        
        .faq-question i { 
          transition: 0.3s; 
        }
        
        .faq-answer {
          padding: 0 35px; 
          max-height: 0; 
          overflow: hidden;
          background: #fdfefe; 
          transition: max-height 0.5s ease;
        }
        
        .faq-answer.show { 
          padding: 35px; 
          max-height: 800px; 
        }

        .faq-answer p {
          white-space: pre-line;
        }

        .faq-answer ul {
          list-style: none; 
          padding-left: 0; 
          margin: 18px 0;
        }
        
        .faq-answer ul li {
          padding-left: 32px; 
          position: relative; 
          margin: 14px 0;
        }
        
        .faq-answer ul li::before {
          content: "•"; 
          color: var(--green-light); 
          font-weight: bold;
          position: absolute; 
          left: 0;
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
        <div>
          <h1>Knowledge Hub</h1>
          <p>Expert Answers to Your Irrigation Questions</p>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>

          {faqs.map((faq, index) => (
            <div key={faq.id} className="faq" style={{ animationDelay: `${index * 50}ms` }}>
              <div 
                className="faq-question" 
                onClick={() => toggleAnswer(faq.id)}
              >
                {faq.question} 
                <i 
                  className="fas fa-chevron-down" 
                  style={{ 
                    transform: openFAQ === faq.id ? 'rotate(180deg)' : 'rotate(0)' 
                  }}
                ></i>
              </div>
              <div className={`faq-answer ${openFAQ === faq.id ? 'show' : ''}`}>
                {faq.answer.includes('\n') ? (
                  <>
                    {faq.answer.split('\n\n').map((paragraph, pIndex) => {
                      if (paragraph.includes('•')) {
                        return (
                          <ul key={pIndex}>
                            {paragraph.split('\n').filter(line => line.includes('•')).map((line, liIndex) => (
                              <li key={liIndex}>{line.replace('•', '').trim()}</li>
                            ))}
                          </ul>
                        );
                      } else if (paragraph.includes('Solution:')) {
                        return <p key={pIndex}><strong>{paragraph}</strong></p>;
                      } else {
                        return <p key={pIndex}>{paragraph}</p>;
                      }
                    })}
                  </>
                ) : (
                  <p>{faq.answer}</p>
                )}
              </div>
            </div>
          ))}
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
