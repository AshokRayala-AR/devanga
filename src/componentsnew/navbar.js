import React, { useState } from "react";
import logo from "../images/logo.jpg";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "./navbar.css";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  const LogoutHandler = () => {
    props.setIsLoggedIn(false);
  };
  return (
    <div className="container-fluid nav-card">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top bg-primary">
        <a href= '#banner' className="navbar-brand">
          <img src={logo} alt="logo" />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav  ms-auto text-center">
            <li className="nav-item">
              <a className="nav-link" href="#banner">
                ಮುಖ್ಯ ಪುಟ
              </a>
            </li>
            <li>
              <a className="nav-link" href="#guru-card">
                ನಮ್ಮ ಬಗ್ಗೆ
              </a>
            </li>
            <li>
              <a className="nav-link" href="#gopuram-card">
                ಕಾರ್ಯಕಾರಿ ಸಮಿತಿ
              </a>
            </li>
            <li>
              <a className="nav-link" href="#text-card">
                ಸೇವೆಗಳು
              </a>
            </li>
            <li>
              <a className="nav-link" href="#pink-receipt-card">
                ಕಾರ್ಯಕ್ರಮಗಳು
              </a>
            </li>
            <li>
              <a className="nav-link" href="#facilities-card">
                ಸೌಲಭ್ಯಗಳು
              </a>
            </li>
            <li>
              <a className="nav-link" href="#">
                ಸಂಪರ್ಕಿಸಿ
              </a>
            </li>
            <li>
              <a className="nav-link" href="#">
                ಗ್ಯಾಲರಿ
              </a>
            </li>
            <li>
              <a className="nav-link" href="#">
                Privacy
              </a>
            </li>
            <li>
              <a className="nav-link" href="#" onClick={LogoutHandler}>
                LogOut
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
