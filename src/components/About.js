import React from 'react';

function About() {
  return (
    <section
      className="about-section rounded py-2"
      style={{
        background: 'linear-gradient(135deg, #f3f2ed9f, #b71c1c, #f3f2ed9f)',
        color: '#fff',
        minHeight: '100vh',
        padding: '20px',
      }}
    >
      <div className="container">
        <h2 className="mb-4 text-center text-light">About Our</h2>
        <h2 className="mb-4 text-center text-dark">IT Help Desk Ticketing System</h2>

        <p className="lead mb-4 text-white">
          Our IT Help Desk Ticketing System is designed to streamline the process of handling IT support requests
          efficiently and effectively. It provides a centralized platform where users can report issues,
          track progress, and communicate with technicians in real-time.
        </p>

        <section className="container my-5">
          <div className="row">
            <div className="col-md-6">
              <div className="card shadow-sm mb-4">
                <div className="card-body rounded bg-danger">
                  <h5 className="card-title text-white text-center">Key Features</h5>
                  <ul className="list-group list-group-flush shadow rounded">
                    <li className="list-group-item">
                      ➤ Submit and track support tickets easily through a user-friendly interface.
                    </li>
                    <li className="list-group-item">
                      ➤ Assign tickets to the right support staff based on expertise and availability.
                    </li>
                    <li className="list-group-item">
                      ➤ Real-time updates to keep users informed about their issue status.
                    </li>
                    
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card mb-4">
                <div className="card-body rounded bg-danger">
                  <h5 className="card-title text-white text-center">
                    Benefits to Users and Support Teams
                  </h5>
                  <ul className="list-group list-group-flush shadow rounded">
                    <li className="list-group-item">
                      ➤ This system improves communication between users and IT staff, reduces resolution time,
                      and enhances overall satisfaction, enabling continuous service improvements.
                    </li>
                    <li className="list-group-item">
                      ➤ Whether you are a small business or a large enterprise, our ticketing system adapts to your
                      needs, helping you maintain a reliable and effective IT support environment.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

export default About;
