import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className="footer-section text-secondary pt-5 border-top"
      style={{
        background: "linear-gradient(135deg, #000000, #4a0000, #000000)",
        color: "#fff",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="container-fluid px-5 pb-2">
        <div className="row g-5">
          {/* Address */}
          <div className="col-lg-4 col-md-6">
            <h5 className="fw-bold mb-3 text-danger text-uppercase">
              <i className="fa-solid fa-building me-2"></i> Office Address
            </h5>
            <p>
              <i className="fa fa-map-marker-alt me-2 text-danger"></i>
              <a
                href="mailto:TechMahindra@gmail.com"
                className="text-decoration-none text-white"
              >
                Near MDP Junction, Vizag
              </a>
            </p>
            <p>
              <i className="fa fa-envelope me-2 text-danger"></i>
              <a
                href="mailto:TechMahindra@gmail.com"
                className="text-decoration-none text-white"
              >
                TechMahindra@gmail.com
              </a>
            </p>
            <p>
              <i className="fa fa-phone me-2 text-danger"></i>0822-277-1234
            </p>
          </div>

          {/* Links */}
          <div className="col-lg-4 col-md-6">
            <h5 className="fw-bold mb-3 text-danger text-uppercase">
              <i className="fa-solid fa-link me-2"></i> Quick Links
            </h5>
            <ul className="list-unstyled">
              {[
                "About Us",
                "Contact Us",
                "Our Services",
                "Terms & Conditions",
                "Support",
              ].map((link, idx) => (
                <li key={idx}>
                  <a
                    href="#"
                    className="text-white text-decoration-none d-inline-block mb-2 link-hover"
                  >
                    <i className="fa-solid fa-chevron-right me-2 small text-danger"></i>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Section */}
          <div className="col-lg-4 col-md-12">
            <h5 className="fw-bold mb-3 text-danger text-uppercase">
              <i className="fa-solid fa-headset me-2"></i> Connect With Us
            </h5>
            <p className="text-white">
              Tech Mahindra Foundation - IT Helpdesk
              <br />
              Reach us for any support or queries.
            </p>

            <div className="d-flex gap-4 flex-wrap">
              {[
                { href: "#", icon: "fab fa-facebook-f", label: "Facebook" },
                { href: "#", icon: "fab fa-twitter", label: "Twitter" },
                { href: "#", icon: "fab fa-linkedin-in", label: "LinkedIn" },
                { href: "#", icon: "fab fa-instagram", label: "Instagram" },
              ].map(({ href, icon, label }, idx) => (
                <a
                  key={idx}
                  href={href}
                  className="social-circle d-flex align-items-center justify-content-center text-white border border-danger rounded-circle"
                  title={label}
                  aria-label={label}
                  style={{
                    width: "40px",
                    height: "40px",
                    fontSize: "16px",
                    transition: "0.3s",
                  }}
                >
                  <i className={icon}></i>
                </a>
              ))}
            </div>
          </div>
        </div>

        <hr className="mt-5 mb-3 border-danger opacity-50" />

        {/* Footer bottom */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center text-center text-md-start pb-3">
          <div>
            © {currentYear}{" "}
            <span className="text-danger fw-bold">Tech Mahindra</span>. All
            Rights Reserved.
          </div>
          <div className="mt-3 mt-md-0">
            Designed by <span className="text-danger fw-semibold">Rakesh</span>
          </div>
        </div>
      </div>

      {/* Back to Top */}
      <button
        className="btn btn-danger back-to-top shadow-lg"
        onClick={scrollToTop}
        aria-label="Back to top"
        title="Back to Top"
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          borderRadius: "50%",
          width: "45px",
          height: "45px",
          zIndex: 999,
        }}
      >
        <i className="fa-solid fa-arrow-up"></i>
      </button>

      {/* Inline styles for hover effects */}
      <style jsx="true">{`
        .social-circle:hover {
          background-color: #dc3545;
          border-color: #dc3545;
          transform: translateY(-3px);
        }

        .link-hover:hover {
          color: #dc3545 !important;
          transform: translateX(4px);
          transition: 0.3s;
        }

        .back-to-top:hover {
          background-color: #900000 !important;
        }
      `}</style>
    </footer>
  );
}

export default Footer;
