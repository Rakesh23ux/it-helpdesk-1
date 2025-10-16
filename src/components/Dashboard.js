import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Dashboard() {
  return (
    <div className="d-flex" style={{ minHeight: '100vh' }}>

      {/* Sidebar */}
      <aside className="bg-dark text-white p-3" style={{ width: '120px' }}>
        <h4 className=" text-secondary ms-auto">Tech </h4>
        <h5 className=" text-danger ms-auto">Mahindra</h5>
        <ul className="nav flex-column">
          <li className="nav-item">
            <a className="nav-link text-white" href="#">Dashboard</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#">Tickets</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#">Users</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#">Settings</a>
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-grow-1 bg-light">
        {/* Top Navbar */}
        <nav className="navbar navbar-expand navbar-light bg-white shadow-sm px-4">
          <div className="container-fluid">
            <span className="navbar-brand">Dashboard</span>
            <button className="btn btn-outline-danger ms-auto">Logout</button>
          </div>
        </nav>

        {/* Content Area */}
        <div className="container py-4">
          <h3>Welcome, Admin</h3>
          <p className="text-muted">Overview of your system status</p>

          <div className="row">
            {/* Card 1 */}
            <div className="col-md-4 mb-4">
              <div className="card bg-primary text-white h-100">
                <div className="card-body">
                  <h5 className="card-title">Open Tickets</h5>
                  <p className="card-text fs-4">23</p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-md-4 mb-4">
              <div className="card bg-success text-white h-100">
                <div className="card-body">
                  <h5 className="card-title">Resolved Issues</h5>
                  <p className="card-text fs-4">78</p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-md-4 mb-4">
              <div className="card bg-warning text-dark h-100">
                <div className="card-body">
                  <h5 className="card-title">Pending Approvals</h5>
                  <p className="card-text fs-4">5</p>
                  <div
                    id="spinner"
                    className="show  translate-middle w-100 vh-50 top-50 start-50 d-flex align-items-center justify-content-center"
                  >
                    <div className="spinner-grow text-danger" role="status"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
