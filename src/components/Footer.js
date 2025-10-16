import React from 'react';

function Footer() {
  return (
    <footer>
      {/* Compact Footer Main Section */}
      <div className="container-fluid  rounded bg-black text-white py-2 mt-5">
        <div className="container text-white">
          <div className="row">
            {/* Address */}
            <div className="col-lg-4 col-md-6 mb-2">
              <h6 className="mb-2">📍🗺️ Office Address</h6>
              <p className="mb-1" style={{fontSize: '0.95rem'}}>
                <i className="fa fa-map-marker-alt me-2"></i>
                Near MDP Junction, Vizag
              </p>
              <p className="mb-1" style={{fontSize: '0.95rem'}}>
                <i className="fa fa-envelope me-2"></i>
                📩 TechMahindra@gmail.com
              </p>
            </div>

            {/* Quick Links */}
            <div className="col-lg-4 col-md-6 mb-2">
              <h6 className="mb-2">Quick Links 🔗</h6>
              <a className="btn btn-link text-white p-0" href="#" style={{fontSize: '0.95rem'}}>About Us</a><br />
              <a className="btn btn-link text-white p-0" href="#" style={{fontSize: '0.95rem'}}>Contact Us</a><br />
              <a className="btn btn-link text-white p-0" href="#" style={{fontSize: '0.95rem'}}>Our Services</a><br />
              <a className="btn btn-link text-white p-0" href="#" style={{fontSize: '0.95rem'}}>Terms &amp; Conditions</a><br />
              <a className="btn btn-link text-white p-0" href="#" style={{fontSize: '0.95rem'}}>Support</a>
            </div>

            {/* Social / About */}
            <div className="col-lg-4 col-md-12 mb-2">
              <h6 className="mb-2">Contact</h6>
              <p style={{fontSize: '0.95rem'}}>
                Tech Mahindra Foundation - IT Helpdesk. <br />
                Reach us for any support or queries.
              </p>
              <div>
                <a href="#" className="text-white me-2"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="text-white me-2"><i className="fab fa-twitter"></i></a>
                <a href="#" className="text-white me-2"><i className="fab fa-linkedin-in"></i></a>
                <a href="#" className="text-white"><i className="fab fa-instagram"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Copyright */}
      <div className="container-fluid bg-black text-white py-1 border-top border-white-30">
        <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center" style={{fontSize: '0.97rem'}}>
          <div className="mb-1 mb-md-0">
            &copy; {new Date().getFullYear()} <a className="text-danger text-decoration-underline" href="#">Tech Mahindra</a>
            . All Rights Reserved.
          </div>
          <div>
           👨🏻‍💻 Designed by <span className="text-danger lead">/ Rakesh /</span>
          </div>
        </div>
      </div>
      {/* Back-to-Top Button */}
      <a href="#" className="btn btn-lg btn-danger btn-lg-square rounded-circle back-to-top position-fixed end-0 m-2" style={{bottom: '20px', zIndex: 1050}}>↑
        <i className="bi bi-arrow-up"></i>
      </a>
    </footer>
  );
}

export default Footer;
