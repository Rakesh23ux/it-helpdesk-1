import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Services from "./components/Services";

function App() {
  return (
    <div className="App">
      {/* <Router> */}
      {/* <Header /> */}
      {/* <div style={{ marginTop: "100px" }}> */}
      {/* <Routes> */}
      {/* <Route path="/" element={<Dashboard />} /> */}
      {/* <Route path="/about" element={<About />} /> */}
      {/* <Route path="/contact" element={<Contact />} /> */}
      {/* <Route path="/register" element={<Register />} /> */}
      {/* <Route path="/services" element={<Services />} /> */}
      {/* </Routes> */}
      {/* <Footer /> */}
      {/* </div> */}
      {/* </Router> */}
      <Header />
      < Register />
      < Dashboard />
      < Services />
      < Contact />
      < About />
      
      < Footer />
    </div>
  );
}

export default App;
