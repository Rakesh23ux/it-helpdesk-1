import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  Legend,
  ResponsiveContainer,
} from "recharts";
import Techmlogo from "../images/Techmlogo.svg";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
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

  const handleLogout = () => {
    alert("🚪 Logged out successfully!");
    navigate("/");
  };

  // Chart data
  const monthlyTickets = [
    { month: "Jan", Open: 20, Resolved: 35 },
    { month: "Feb", Open: 25, Resolved: 40 },
    { month: "Mar", Open: 15, Resolved: 50 },
    { month: "Apr", Open: 30, Resolved: 55 },
    { month: "May", Open: 18, Resolved: 42 },
    { month: "Jun", Open: 10, Resolved: 60 },
  ];

  const pieData = [
    { name: "High Priority", value: 8 },
    { name: "Medium Priority", value: 4 },
    { name: "Low Priority", value: 2 },
  ];

  const COLORS = ["#dc3545", "#ffc107", "#0d6efd"];

  return (
    <div className="d-flex" style={{ minHeight: "160vh", backgroundColor: "#f5f6fa" }}>
      {/* Sidebar */}
      <div className="bg-dark text-white p-4 d-flex flex-column justify-content-start sidebar">
        <h5 className="fw-bold text-danger mb-4 text-center">Admin Panel</h5>
        <ul className="nav flex-column gap-3">
          <li><a href="#overview" className="text-white text-decoration-none">🏠 Dashboard Overview</a></li>
          <li><a href="#analytics" className="text-white text-decoration-none">📊 Analytics</a></li>
          <li><a href="#pending" className="text-white text-decoration-none">🔴 Pending Tickets</a></li>
          <li><a href="#resolved" className="text-white text-decoration-none">✅ Resolved Tickets</a></li>
          <li>
            <button onClick={handleLogout} className="btn btn-outline-danger w-100 fw-bold mt-4">
              Logout
            </button>
          </li>
        </ul>
      </div>

      {/* Main Dashboard */}
      <div className="flex-grow-1 p-4">
        <div className="dashboard-container border rounded shadow p-4 w-100 bg-white">

          {/* Navbar */}
          <nav className="navbar-custom mb-4 d-flex bg-secondary justify-content-between align-items-center rounded p-3">
            <span className="fw-bold text-warning fs-4">Admin Dashboard</span>
            <button type="button" className="btn btn-outline-warning text-white fw-bold" onClick={handleLogout}>
              Logout
            </button>
          </nav>

          {/* Overview Cards */}
          <section id="overview" className="text-center mb-5">
            <h3 className="fw-bold text-dark">Welcome, Admin 👋</h3>
            <p className="text-muted mb-4">
              Track IT performance, open tickets, and resolution metrics in one glance.
            </p>
            <div className="row g-4 justify-content-center">
              <div className="col-md-3"><div className="card bg-primary text-white"><div className="card-body"><h5>Open Tickets</h5><p className="fs-3 fw-semibold">28</p></div></div></div>
              <div className="col-md-3"><div className="card bg-success text-white"><div className="card-body"><h5>Resolved Issues</h5><p className="fs-3 fw-semibold">134</p></div></div></div>
              <div className="col-md-3"><div className="card bg-warning text-dark"><div className="card-body"><h5>Pending Approvals</h5><p className="fs-3 fw-semibold">5</p></div></div></div>
              <div className="col-md-3"><div className="card bg-danger text-white"><div className="card-body"><h5>High Priority</h5><p className="fs-3 fw-semibold">8</p></div></div></div>
            </div>
          </section>

          {/* Charts Section */}
          <section id="analytics" className="mb-5">
            <h4 className="fw-bold text-center mb-4">📊 System Analytics</h4>
            <div className="row g-4">
              <div className="col-lg-8 col-md-12">
                <div className="card p-3 shadow-sm">
                  <h6 className="text-center mb-3">Monthly Ticket Trends</h6>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={monthlyTickets}>
                      <Line type="monotone" dataKey="Open" stroke="#dc3545" strokeWidth={2} />
                      <Line type="monotone" dataKey="Resolved" stroke="#28a745" strokeWidth={2} />
                      <CartesianGrid stroke="#ccc" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="col-lg-4 col-md-12">
                <div className="card p-3 shadow-sm">
                  <h6 className="text-center mb-3">Priority Distribution</h6>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie data={pieData} dataKey="value" outerRadius={100} label>
                        {pieData.map((entry, index) => (
                          <Cell key={index} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </section>

          {/* Pending Tickets */}
          <h3 id="pending" className="fw-bold text-center mb-3">🔴 Pending 🎟️ Tickets</h3>
          <div className="table-responsive mb-5">
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
                    <td><span className="badge bg-success">{ticket.status}</span></td>
                    <td><span className="badge bg-primary">{ticket.priority}</span></td>
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

          {/* Resolved Tickets */}
          <h3 id="resolved" className="fw-bold text-center mb-3">✅ Resolved 🎟️ Tickets</h3>
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
                    <td><span className="badge bg-success">{ticket.status}</span></td>
                    <td><span className="badge bg-primary">{ticket.priority}</span></td>
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

      {/* Modal */}
      <div className="modal fade" id="ticketModal" tabIndex="-1" aria-labelledby="ticketModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header bg-dark text-white">
              <h5 className="modal-title">Ticket Details</h5>
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body text-start">
              {selectedTicket ? (
                <>
                  <h5 className="text-danger fw-bold">{selectedTicket.title} ({selectedTicket.id})</h5>
                  <p className="text-muted mb-2">{selectedTicket.desc}</p>
                  <p><strong>Status:</strong> <span className="badge bg-success">{selectedTicket.status}</span></p>
                  <p><strong>Priority:</strong> <span className="badge bg-primary">{selectedTicket.priority}</span></p>
                  <hr />
                  <h6 className="fw-bold text-dark">About IT Help Desk</h6>
                  <p className="text-muted">
                    The <strong>Tech Mahindra IT Help Desk System</strong> ensures smooth resolution of IT issues.
                  </p>
                </>
              ) : (
                <p>Loading ticket details...</p>
              )}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
