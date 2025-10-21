import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaTicketAlt, FaClock, FaCloud, FaRobot, FaGlobe } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";
import Techmlogo from "../images/Techmlogo.svg";

function Services() {
  return (
    <section
      id="services"
      style={{
        background: "linear-gradient(135deg, #ffffff, #f4f5f7)",
        padding: "4rem 0 ",
        fontFamily: "'Poppins', Arial, sans-serif",
        color: "#212529",
      }}
    >
      <div className="container">
        <div className="text-center mb-5">
          <img
            src={Techmlogo}
            alt="Tech Mahindra Logo"
            style={{ width: "200px", marginTop: "10rem" }}
          />
        </div>

        {/* Header */}
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold text-danger text-uppercase">
              Our Core Services
            </h2>
            <p className="text-muted fs-5">
              Powering efficient IT operations with intelligent systems for
              ticket management, automation, and enterprise support.
            </p>
          </div>

          {/* ====== Row 1 ====== */}
          <div className="row g-4">
            {/* Ticket Management */}
            <div className="col-lg-4 col-md-6">
              <div className="card shadow-lg service-card">
                <div className="card-body text-center">
                  <div className="icon-circle bg-danger bg-opacity-25 text-danger mb-3">
                    <FaTicketAlt size={32} />
                  </div>
                  <h5 className="fw-bold">Ticket Management</h5>
                  <p className="text-muted mb-3">
                    Centralized system for creating, assigning, and tracking IT
                    tickets in real time.
                  </p>

                  <div className="text-start">
                    <div className="d-flex justify-content-between">
                      <span>Open Tickets</span>
                      <span className="fw-bold text-danger">28</span>
                    </div>
                    <div className="progress mb-2">
                      <div
                        className="progress-bar bg-danger"
                        style={{ width: "40%" }}
                      ></div>
                    </div>

                    <div className="d-flex justify-content-between">
                      <span>In Progress</span>
                      <span className="fw-bold text-warning">5</span>
                    </div>
                    <div className="progress mb-2">
                      <div
                        className="progress-bar bg-warning"
                        style={{ width: "65%" }}
                      ></div>
                    </div>

                    <div className="d-flex justify-content-between">
                      <span>Resolved</span>
                      <span className="fw-bold text-success">134</span>
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar bg-success"
                        style={{ width: "90%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Approvals & Resolutions */}
            <div className="col-lg-4 col-md-6">
              <div className="card shadow-lg service-card">
                <div className="card-body text-center">
                  <div className="icon-circle bg-success bg-opacity-25 text-success mb-3">
                    <FaCircleCheck size={32} />
                  </div>
                  <h5 className="fw-bold">Approvals & Resolutions</h5>
                  <p className="text-muted mb-3">
                    Streamlined workflow for quicker approvals, automated
                    resolutions, and consistent service quality.
                  </p>
                  <div className="table-responsive">
                    <table className="table table-sm text-center align-middle">
                      <thead className="table-success text-dark">
                        <tr>
                          <th>Type</th>
                          <th>Count</th>
                          <th>Rate</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Auto-Resolved</td>
                          <td>58</td>
                          <td>89%</td>
                        </tr>
                        <tr>
                          <td>Manually Approved</td>
                          <td>24</td>
                          <td>72%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            {/* Pending & Monitoring */}
            <div className="col-lg-4 col-md-12">
              <div className="card shadow-lg service-card">
                <div className="card-body text-center">
                  <div className="icon-circle bg-warning bg-opacity-25 text-warning mb-3">
                    <FaClock size={32} />
                  </div>
                  <h5 className="fw-bold">Pending & Monitoring</h5>
                  <p className="text-muted mb-3">
                    Real-time insight into pending tickets and priority levels,
                    enabling timely escalation.
                  </p>
                  <ul className="list-group text-start shadow-sm rounded">
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                      High Priority
                      <span className="badge bg-danger rounded-pill">8</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                      Medium Priority
                      <span className="badge bg-warning text-dark rounded-pill">
                        2
                      </span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                      Low Priority
                      <span className="badge bg-success rounded-pill">3</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* ====== Row 2: TechM-Focused Additions ====== */}
          <div className="row g-4 mt-4">
            {/* Digital Transformation */}
            <div className="col-lg-4 col-md-6">
              <div className="card shadow-lg service-card">
                <div className="card-body text-center">
                  <div className="icon-circle bg-primary bg-opacity-25 text-primary mb-3">
                    <FaGlobe size={32} />
                  </div>
                  <h5 className="fw-bold">Digital Transformation</h5>
                  <p className="text-muted">
                    Enabling enterprise modernization through automation, AI-driven
                    insights, and next-gen digital tools for better performance and
                    innovation.
                  </p>
                </div>
              </div>
            </div>

            {/* Cloud Infrastructure */}
            <div className="col-lg-4 col-md-6">
              <div className="card shadow-lg service-card">
                <div className="card-body text-center">
                  <div className="icon-circle bg-info bg-opacity-25 text-info mb-3">
                    <FaCloud size={32} />
                  </div>
                  <h5 className="fw-bold">Cloud Infrastructure</h5>
                  <p className="text-muted">
                    Scalable and secure cloud environments optimized for TechM clients,
                    ensuring uptime, performance, and cost efficiency.
                  </p>
                </div>
              </div>
            </div>

            {/* IT Automation */}
            <div className="col-lg-4 col-md-12">
              <div className="card shadow-lg service-card">
                <div className="card-body text-center">
                  <div className="icon-circle bg-secondary bg-opacity-25 text-secondary mb-3">
                    <FaRobot size={32} />
                  </div>
                  <h5 className="fw-bold">IT Support Automation</h5>
                  <p className="text-muted">
                    AI-based chatbots, predictive maintenance, and automated issue
                    detection reduce downtime and enhance employee experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Inline CSS */}
        <style jsx="true">{`
          .icon-circle {
            width: 70px;
            height: 70px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            margin: 0 auto;
          }

          .service-card {
            border: none;
            border-radius: 1rem;
            transition: all 0.35s ease;
            background-color: #fff;
          }

          .service-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
          }

          .progress {
            height: 8px;
            border-radius: 5px;
          }

          .list-group-item {
            font-size: 0.95rem;
          }
        `}</style>
      </div>
    </section>
  );
}

export default Services;
