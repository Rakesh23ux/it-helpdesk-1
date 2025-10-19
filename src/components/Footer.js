import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css"; // ✅ Import Font Awesome
import "bootstrap/dist/css/bootstrap.min.css"; // ✅ Import Bootstrap

function Footer() {
  const currentYear = new Date().getFullYear();

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (

    <footer className="footer-section bg-light text-white mt-5 pt-5 border-top">
      <div className="container-fuild bg-black pb-2 w-100 px-5 ">
        <div className="row gy-4">
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
                Near MDP
                Junction, Vizag
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

            <div className="d-flex gap-5 ">
              {[
                { href: "#", icon: "fab fa-facebook-f", label: "Facebook" },
                { href: "#", icon: "fab fa-twitter", label: "Twitter" },
                { href: "#", icon: "fab fa-linkedin-in", label: "LinkedIn" },
                { href: "#", icon: "fab fa-instagram", label: "Instagram" },
              ].map(({ href, icon, label }, idx) => (
                <a
                  key={idx}
                  href={href}
                  className="social-circle"
                  title={label}
                  aria-label={label}
                >
                  <i className={icon}></i>
                </a>
              ))}
            </div>
          </div>
        </div>

        <hr className="mt-5 mb-3 border-danger opacity-50" />

        {/* Footer bottom */}
        <div className="d-flex flex-column  justify-content-between align-items-center ">
          <div>
            © {currentYear}{" "}
            <span className="text-danger fw-bold">Tech Mahindra</span>. All
            Rights Reserved.
          </div>
          <div className="mt-4 text-center mt-md-0">
            Designed by <span className="text-danger fw-semibold"> Rakesh </span>
          </div>
        </div>
      </div>

      {/* Back to Top */}
      <button
        className="btn btn-danger back-to-top shadow-lg"
        onClick={scrollToTop}
        aria-label="Back to top"
        title="Back to Top"
      >
        <i className="fa-solid fa-arrow-up"></i>
      </button>
    </footer>

  );
}

export default Footer;
