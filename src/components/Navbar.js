import React from 'react';
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} shadow-sm`} style={{ padding: "15px 30px" }}>
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold" to="/" style={{ fontSize: "1.5rem" }}>{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">{props.AboutHome}</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">{props.aboutText}</Link>
            </li>
          </ul>
        </div>

        <div className="form-check form-switch d-flex align-items-center">
          <input className="form-check-input me-2" type="checkbox" id="customSwitch1" onClick={props.toggleMode} />
          <label className="form-check-label" htmlFor="customSwitch1" style={{ fontWeight: "500" }}>Enable Dark Mode</label>
        </div>
      </div>
    </nav>
  );
}
