import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Techmlogorgb from "../images/Techmlogorgb.svg";

function About() {
  return (
    <div   style={{
    minHeight: '100vh',
    backgroundImage: `linear-gradient(135deg, #151111bb, #f7f4ea), url(${Techmlogorgb})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'contain', // or 'cover' for full coverage
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px'
  }}
>
    <div className="opacity-8">
      <div className="about-container  transition-shadow bg-transparent"> 
        <h1>IT Help Desk Ticketing System</h1>
        <h2 className="text-warning fw-bold">Overview</h2>

        <p className="lead text-white ">
          Our IT Help Desk Ticketing System is built to simplify and accelerate
          IT support processes. It provides a centralized, intuitive platform
          for reporting, tracking, and resolving technical issues — improving
          communication and boosting productivity.
        </p>

        <div className="row g-4">
          <div className="col-md-6">
            <div className="card card-custom bg-secondary h-100">
              <div className="card-body">
                <h5 className="card-title text-center"> 🛠️ Key Features</h5>
                <ul className="list-group list-group-flush mt-3">
                  <li className="list-group-item bg-transparent text-white">
                    ➤ Submit and monitor IT support tickets with ease.
                  </li>
                  <li className="list-group-item bg-transparent text-white">
                    ➤ Intelligent ticket assignment based on skill and workload.
                  </li>
                  <li className="list-group-item bg-transparent text-white">
                    ➤ Real-time progress tracking and updates.
                  </li>
                  <li className="list-group-item bg-transparent text-white">
                    ➤ Centralized dashboard for user and admin visibility.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card card-custom bg-success h-100">
              <div className="card-body">
                <h5 className="card-title text-center">
                  📜 Benefits for Users & Teams
                </h5>
                <ul className="list-group list-group-flush mt-3">
                  <li className="list-group-item bg-transparent text-white">
                    ➤ Enhances communication and collaboration between users and
                    IT support staff.
                  </li>
                  <li className="list-group-item bg-transparent text-white">
                    ➤ Reduces resolution time and increases service quality.
                  </li>
                  <li className="list-group-item bg-transparent text-white">
                    ➤ Scalable for small businesses to large enterprises.
                  </li>
                  <li className="list-group-item bg-transparent text-white">
                    ➤ Facilitates continuous improvement in IT operations and
                    customer satisfaction.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

          <div className="text-white lead  text-center mt-5" >© 2025 IT Help Desk Ticketing System | All rights reserved

          </div>
      </div>

      {/* Inline Styles */}
      <style jsx>{`
        body {
          margin: 0;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        .about-container {
          background-color: #9c4a4abc;
          border-radius: 1rem;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
          padding: 40px 30px;
          max-width: 1000px;
          width: 100%;
          animation: fadeInUp 1s ease;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        h1,
        h2 {
          font-weight: 700;
        }

        h1 {
          color: #b71c1c;
          text-align: center;
          margin-bottom: 10px;
        }

        h2 {
          text-align: center;
          margin-bottom: 30px;
          color: #555;
        }

        .lead {
          text-align: center;
          color: #555;
          margin-bottom: 40px;
        }

        .card-custom {
          background-color: #b71c1c;
          color: #fff;
          border: none;
          border-radius: 0.75rem;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .card-custom:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
        }

        .card-title {
          font-size: 1.25rem;
          font-weight: 600;
        }

        .list-group-item {
          background-color: #fff;
          color: #212529;
          border: none;
          margin-bottom: 0.5rem;
          border-radius: 0.5rem;
          box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.08);
        }

        footer {
          text-align: center;
          margin-top: 40px;
          font-size: 0.9rem;
          color: #863838ff;
        }
      `}</style>
    </div>
    </div>
  );
}

export default About;
