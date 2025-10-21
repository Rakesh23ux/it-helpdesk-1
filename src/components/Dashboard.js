import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Techmlogo from "../images/Techmlogo.svg";

function Dashboard() {
  const [selectedTicket, setSelectedTicket] = useState(null);

  const tickets = [
    { id: "#73f5", title: "System Crash", desc: "Server downtime issue", status: "In-progress", priority: "High" },
    { id: "#8ece", title: "Login Error", desc: "Error on login page", status: "In-progress", priority: "Medium" },
    { id: "#d795", title: "Node.js Issue", desc: "Installation problem", status: "In-progress", priority: "High" },
    { id: "#y458", title: "Clipboard Bug", desc: "Copy not working", status: "In-progress", priority: "High" },
    { id: "#u546", title: "Network", desc: "Internet issue", status: "In-progress", priority: "High" },
  ];

  const resolvedTickets = [
    { id: "#p3f5", title: "Access Reset", desc: "Password reset", status: "Completed", priority: "High" },
    { id: "#b5f8", title: "Login Fix", desc: "Fixed login page error", status: "Completed", priority: "Medium" },
    { id: "#xc76", title: "Node Installation", desc: "Setup completed", status: "Completed", priority: "High" },
    { id: "#e570", title: "Clipboard", desc: "Clipboard issue resolved", status: "Completed", priority: "High" },
    { id: "#e897", title: "Internet", desc: "Network restored", status: "Completed", priority: "High" },
  ];

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "160vh", backgroundColor: "#f8f9fa" }}
    >
      <div className="dashboard-container border rounded shadow p-4 w-100 bg-white">
        {/* Navbar */}
        <nav className="navbar-custom mb-4 d-flex justify-content-between  align-items-center rounded p-3" style={{ backgroundColor: "#a72e2eff", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }}>
          <span className="fw-bold text-warning fs-4">Admin Dashboard</span>
          <button type="button" className="btn btn-outline-warning text-white fw-bold">
            Logout
          </button>
        </nav>

        {/* Dashboard Overview */}
        <div className="content-container container-fluid text-center">
          <h3 className="fw-bold text-dark">Welcome, Admin 👋</h3>
          <p className="text-muted mb-4">
            Here’s an overview of your IT system’s current performance.
          </p>

          <div className="row g-4 mb-5 justify-content-center">
            <div className="col-md-3">
              <div className="card bg-primary text-white">
                <div className="card-body">
                  <h5 className="card-title">Open Tickets</h5>
                  <p className="card-text fs-3 fw-semibold">28</p>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card bg-success text-white">
                <div className="card-body">
                  <h5 className="card-title">Resolved Issues</h5>
                  <p className="card-text fs-3 fw-semibold">134</p>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card bg-warning text-dark">
                <div className="card-body">
                  <h5 className="card-title">Pending Approvals</h5>
                  <p className="card-text fs-3 fw-semibold">5</p>
                </div>
              </div>
            </div>
          </div>

          {/* IT Help Desk Section */}
          <div className="card border-0 shadow-lg text-center p-4 mb-5">
            <div className="d-flex justify-content-center align-items-center mb-4">
              <img
                src={Techmlogo}
                alt="Tech Mahindra Logo"
                className="img-fluid"
                style={{
                  width: "180px",
                  filter: "drop-shadow(0px 0px 4px rgba(0,0,0,0.3))",
                }}
              />
            </div>

            <h4 className="fw-bold text-danger mb-2">IT Help Desk Ticket Management</h4>
            <p className="mb-4 lead px-5">
              The IT Help Desk ensures smooth functioning of Tech Mahindra
              Foundation’s digital systems. It tracks, prioritizes, and resolves
              internal IT issues efficiently, ensuring uninterrupted workflows
              and improved productivity.
            </p>
            <p className="fst-italic mb-3">
              “Technology is powerful when managed efficiently.”
            </p>
          </div>

          {/* Pending Tickets Table */}
          <h3 className="fw-bold text-center mb-3">🔴 Pending 🎟️ Tickets</h3>
          <div className="table-responsive">
            <table className="table align-middle table-striped">
              <thead>
                <tr>
                  <th className="bg-black text-success">ID</th>
                  <th className="bg-black text-warning">Title</th>
                  <th className="bg-black text-warning">Description</th>
                  <th className="bg-black text-white">🟢 Status</th>
                  <th className="bg-black text-white">📊 Priority</th>
                  <th className="bg-black text-white">❗ Actions</th>
                </tr>
              </thead>
              <tbody>
                {tickets.map((ticket) => (
                  <tr key={ticket.id}>
                    <td>{ticket.id}</td>
                    <td className="text-danger fw-semibold">{ticket.title}</td>
                    <td>{ticket.desc}</td>
                    <td>
                      <span className="badge bg-success">{ticket.status}</span>
                    </td>
                    <td>
                      <span className="badge bg-primary">{ticket.priority}</span>
                    </td>
                    <td>
                      <button
                        className="btn btn-light border shadow-sm"
                        data-bs-toggle="modal"
                        data-bs-target="#ticketModal"
                        onClick={() => setSelectedTicket(ticket)}
                      >
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Resolved Tickets Table */}
          <h3 className="fw-bold text-center mb-3 mt-5">✅ Resolved 🎟️ Tickets</h3>
          <div className="table-responsive">
            <table className="table align-middle table-striped">
              <thead>
                <tr>
                  <th className="bg-black text-success">ID</th>
                  <th className="bg-black text-warning">Title</th>
                  <th className="bg-black text-warning">Description</th>
                  <th className="bg-black text-white">🟢 Status</th>
                  <th className="bg-black text-white">📊 Priority</th>
                  <th className="bg-black text-white">❗ Actions</th>
                </tr>
              </thead>
              <tbody>
                {resolvedTickets.map((ticket) => (
                  <tr key={ticket.id}>
                    <td>{ticket.id}</td>
                    <td className="text-danger fw-semibold">{ticket.title}</td>
                    <td>{ticket.desc}</td>
                    <td>
                      <span className="badge bg-success">{ticket.status}</span>
                    </td>
                    <td>
                      <span className="badge bg-primary">{ticket.priority}</span>
                    </td>
                    <td>
                      <button
                        className="btn btn-light border shadow-sm"
                        data-bs-toggle="modal"
                        data-bs-target="#ticketModal"
                        onClick={() => setSelectedTicket(ticket)}
                      >
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Modal Popup */}
      <div
        className="modal fade"
        id="ticketModal"
        tabIndex="-1"
        aria-labelledby="ticketModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header bg-dark text-white">
              <h5 className="modal-title" id="ticketModalLabel">
                Ticket Details
              </h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body text-start">
              {selectedTicket ? (
                <>
                  <h5 className="text-danger fw-bold">
                    {selectedTicket.title} ({selectedTicket.id})
                  </h5>
                  <p className="text-muted mb-2">{selectedTicket.desc}</p>
                  <p>
                    <strong>Status:</strong>{" "}
                    <span className="badge bg-success">{selectedTicket.status}</span>
                  </p>
                  <p>
                    <strong>Priority:</strong>{" "}
                    <span className="badge bg-primary">{selectedTicket.priority}</span>
                  </p>
                  <hr />
                  <h6 className="fw-bold text-dark">About IT Help Desk</h6>
                  <p className="text-muted">
                    The <strong>Tech Mahindra IT Help Desk System</strong> ensures
                    timely resolution of internal IT issues, improving operational
                    efficiency and service quality. Each ticket is categorized by
                    priority to streamline workflow and ensure faster turnaround.
                  </p>
                  <ul>
                    <li>🟢 <strong>In-progress:</strong> Ticket is being actively worked on by the IT team.</li>
                    <li>🟡 <strong>Pending Approval:</strong> Awaiting admin validation or action.</li>
                    <li>✅ <strong>Completed:</strong> Issue resolved and verified by the user.</li>
                  </ul>
                </>
              ) : (
                <p>Loading ticket details...</p>
              )}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
