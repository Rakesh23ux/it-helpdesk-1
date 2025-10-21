import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { NavLink } from "react-router-dom";

function Header() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-white rounded fixed-top shadow-lg">
                <div className="container-fluid px-4 px-lg-5">
                    <h1 className="text-secondary">Tech</h1>
                    <h1 className="text-danger"> Mahindra</h1>
                    <h5 className="text-secondary"> Foundation</h5>
                    <p className="text-danger"> 🛠 IT Helpdesk</p>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        title="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <div className="navbar-nav ms-auto">
                            <a className="nav-link text-danger" href="#dashboard">
                                Dashboard
                            </a>
                            <a className="nav-link text-danger" href="#about">
                                About
                            </a>
                            <a className="nav-link text-danger" href="#contact">
                                Contact
                            </a>
                            <a className="nav-link  text-danger" href="#">
                                Register
                            </a>
                            <a className="nav-link  text-danger" href="#services">
                                Services
                            </a>
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item dropdown">
                                    <a
                                        className="nav-link dropdown-toggle text-danger"
                                        href="#"
                                        id="navbarDropdown"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        More
                                    </a>
                                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                        <li>
                                            <a className="dropdown-item" href="#">
                                                Terms &amp; Conditions
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#services">
                                                Support
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
            </nav>
           
           
           
           
           
           
           
        </div>
    );
}

export default Header;
