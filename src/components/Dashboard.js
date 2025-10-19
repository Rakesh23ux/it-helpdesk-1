import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Techmlogorgb from '../images/Techmlogorgb.svg';

function Dashboard() {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: '160vh', backgroundColor: '#f8f9fa' }}>
      <div className="dashboard-container border rounded shadow p-4  w-100 bg-white" >

        {/* Navbar */}
        <nav className="navbar-custom mb-4 d-flex justify-content-between align-items-center">
          <span className="fw-bold fs-4">Admin Dashboard</span>
          <button type="button" className="btn btn-outline-danger">Logout</button>
        </nav>

        {/* Dashboard Overview */}
        <div className="content-container container-fluid text-center">
          <h3 className="fw-bold text-dark">Welcome, Admin 👋</h3>
          <p className="text-muted mb-4">Here’s an overview of your IT system’s current performance.</p>

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
              <div className="card bg-warning text-dark position-relative">
                <div className="card-body">
                  <h5 className="card-title">Pending Approvals</h5>
                  <p className="card-text fs-3 fw-semibold">5</p>
                  <div id="spinner" role="status">
                    <div className="spinner-grow text-danger"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Ticket Management Section with Logo */}
          <div
            className="card border-0 shadow-lg text-center p-4 mb-5"
          >
            {/* Brand Logo */}
            <div className="d-flex justify-content-center align-items-center mb-4">
              <img
                src={Techmlogorgb}
                alt="Tech Mahindra Logo"
                className="img-fluid"
                style={{ width: '180px', filter: 'drop-shadow(0px 0px 4px rgba(0,0,0,0.3))' }}
              />
            </div>

            {/* Icon */}
            <div className="mb-3">
              <i className="bi bi-ticket-detailed fs-1"></i>
            </div>

            {/* Content */}
            <h4 className="fw-bold text-danger mb-2">IT Ticket Management</h4>
            <p className="mb-4  lead px-6">
              Manage internal IT tickets with real-time insights, approvals, and analytics. Ensure faster response times and seamless collaboration across teams.
            </p>


            <hr className="opacity-50" />

            <p className="fst-italic mb-3">“Your IT efficiency reflects in your response time.”</p>

            {/* CTA Button */}
            <a href="#" className="btn btn-light fw-semibold shadow-sm px-4">
              View Dashboard
            </a>
          </div>

          {/* Tickets Table */}
          <h3 className="fw-bold mb-3">🔴 Pending 🎟️ Tickets</h3>
          <div className="table-responsive ">
            <table className="table align-middle table-striped ">
              <thead>
                <tr>
                  <th className='bg-black text-success'>ID</th>
                  <th className='bg-black text-warning'>Title</th>
                  <th className='bg-black text-warning'>Description</th>
                  <th className='bg-black text-white'>🟢 Status</th>
                  <th className='bg-black text-white'>📊 Priority</th>
                  <th className='bg-black text-white'>❗ Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td># 73f5</td>
                  <td className="text-danger  fw-semibold"> Issue</td>
                  <td>We need IT</td>
                  <td>
                    <span className="badge bg-success"> In-progress</span>
                  </td>
                  <td>
                    <span className="badge bg-primary"> High</span>
                  </td>
                  <td>
                    <button className="btn btn-light border shadow-sm">View</button>
                  </td>
                </tr>
                <tr>
                  <td># 8ece</td>
                  <td className="text-danger fw-semibold">Issue</td>
                  <td>Error on login page</td>
                  <td>
                    <span className="badge bg-success">In-progress</span>
                  </td>
                  <td>
                    <span className="badge bg-warning text-dark">Medium</span>
                  </td>
                  <td>
                    <button className="btn btn-light border shadow-sm">View</button>
                  </td>
                </tr>
                <tr>
                  <td># d795</td>
                  <td className="text-danger fw-semibold">Issue</td>
                  <td>Node.js installation issue</td>
                  <td>
                    <span className="badge bg-success">In-progress</span>
                  </td>
                  <td>
                    <span className="badge bg-primary">High</span>
                  </td>
                  <td>
                    <button className="btn btn-light border shadow-sm">View</button>
                  </td>
                </tr>
                <tr>
                  <td># y458</td>
                  <td className="text-danger fw-semibold">Issue</td>
                  <td>Code snippets not copied to clipboard</td>
                  <td>
                    <span className="badge bg-success">In-progress</span>
                  </td>
                  <td>
                    <span className="badge bg-primary">High</span>
                  </td>
                  <td>
                    <button className="btn btn-light border shadow-sm">View</button>
                  </td>
                </tr>
                <tr>
                  <td># u546</td>
                  <td className="text-danger fw-semibold">Issue</td>
                  <td>Internet issue</td>
                  <td>
                    <span className="badge bg-success">In-progress</span>
                  </td>
                  <td>
                    <span className="badge bg-primary">High</span>
                  </td>
                  <td>
                    <button className="btn btn-light border shadow-sm">View</button>
                  </td>
                </tr>
              </tbody>
            </table>
            <h3 className="fw-bold mb-3"> ✅ Resovlved 🎟️  Tickets</h3>
            <div className="table-responsive ">
              <table className="table align-middle table-striped ">
                <thead>
                  <tr>
                    <th className='bg-black text-success'>ID</th>
                    <th className='bg-black text-warning'>Title</th>
                    <th className='bg-black text-warning'>Description</th>
                    <th className='bg-black text-white'>🟢 Status</th>
                    <th className='bg-black text-white'>📊 Priority</th>
                    <th className='bg-black text-white'>❗ Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td># p3f5</td>
                    <td className="text-danger  fw-semibold"> Issue</td>
                    <td>We need IT</td>
                    <td>
                      <span className="badge bg-success"> completed</span>
                    </td>
                    <td>
                      <span className="badge bg-primary"> High</span>
                    </td>
                    <td>
                      <button className="btn btn-light border shadow-sm">View</button>
                    </td>
                  </tr>
                  <tr>
                    <td># b5f8</td>
                    <td className="text-danger fw-semibold">Issue</td>
                    <td>Error on login page</td>
                    <td>
                      <span className="badge bg-success">completed</span>
                    </td>
                    <td>
                      <span className="badge bg-warning text-dark">Medium</span>
                    </td>
                    <td>
                      <button className="btn btn-light border shadow-sm">View</button>
                    </td>
                  </tr>
                  <tr>
                    <td># xc76</td>
                    <td className="text-danger fw-semibold">Issue</td>
                    <td>Node.js installation issue</td>
                    <td>
                      <span className="badge bg-success">completed</span>
                    </td>
                    <td>
                      <span className="badge bg-primary">High</span>
                    </td>
                    <td>
                      <button className="btn btn-light border shadow-sm">View</button>
                    </td>
                  </tr>
                  <tr>
                    <td># e570</td>
                    <td className="text-danger fw-semibold">Issue</td>
                    <td>Code snippets not copied to clipboard</td>
                    <td>
                      <span className="badge bg-success">completed</span>
                    </td>
                    <td>
                      <span className="badge bg-primary">High</span>
                    </td>
                    <td>
                      <button className="btn btn-light border shadow-sm">View</button>
                    </td>
                  </tr>
                  <tr>
                    <td># e897</td>
                    <td className="text-danger fw-semibold">Issue</td>
                    <td>Internet issue</td>
                    <td>
                      <span className="badge bg-success">completed</span>
                    </td>
                    <td>
                      <span className="badge bg-primary">High</span>
                    </td>
                    <td>
                      <button className="btn btn-light border shadow-sm">View</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
      );
}

      export default Dashboard;
