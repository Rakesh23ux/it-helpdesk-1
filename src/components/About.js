import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Techmlogo from "../images/Techmlogo.svg";

function About() {
  return (
    <div
      style={{
        minHeight: "110vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "30px",
        background: "linear-gradient(135deg, #3e3b3bff,  #a12525ff)",
        animation: "gradientShift 8s ease infinite",
        backgroundSize: "400% 400%",
      }}
    >
      <div className="about-section text-white text-center">
        <img
          src={Techmlogo}
          alt="Tech Mahindra"
          style={{ width: "300px", marginBottom: "20px" }}
        />        <h2 className="text-warning fw-semibold mb-4">
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
          🔍 Transparent communication between users and IT support teams.<br></br>
          📊 Data-driven insights to improve service quality and productivity.<br></br>
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
      <style jsx="true">{`
  @keyframes gradientShift {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`}</style>

    </div>
  );
}

export default About;
