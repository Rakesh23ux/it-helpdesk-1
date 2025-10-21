import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Techmlogo1 from "../images/Techmlogo1.svg";

function About() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "30px",
        background: "linear-gradient(105deg, #b71c1c, #4a0000, #43ffefff)",
        animation: "gradientShift 8s ease infinite",
        backgroundSize: "400% 400%",
      }}
    >
      <div className="about-section text-white text-center">
        <h1 className="fw-bold mb-3">Tech Mahindra Foundation</h1>
        <h2 className="text-warning fw-semibold mb-4">
          IT Help Desk Ticketing System
        </h2>


        <p className="lead  text-white mb-4 px-md-5">
          The IT Help Desk acts as the backbone of technical assistance for
          internal teams, ensuring smooth workflows, quick response times, and
          effective problem resolution. It reflects the Foundation’s belief in
          using technology to empower people and simplify processes.
        </p>

        <h3 className="fw-bold text-warning mt-5 mb-3">System Overview</h3>
        <p className=" text-center mx-auto px-3 px-md-5">
          ⚙️ A user-friendly interface to submit and monitor IT-related issues.
          📩 Automated ticket creation and tracking for faster resolution.
          🔍 Transparent communication between users and IT support teams.
          📊 Data-driven insights to improve service quality and productivity.
          💡 Promotes accountability, collaboration, and continuous improvement
        </p>

        <p className="lead mt-5 text-white px-md-5">
          By integrating the Help Desk System, Tech Mahindra Foundation ensures
          that technology remains a reliable enabler — supporting its mission to
          empower communities and deliver excellence with purpose.
        </p>

        <div className="text-black">
          © 2025 Tech Mahindra Foundation | Empowering Futures with Technology
       </div>
      </div>
    </div>
  );
}

export default About;
