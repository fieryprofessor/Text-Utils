import React from 'react'
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <div>
         <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <Link className="navbar-brand" to="/">{props.title}</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <Link className="nav-link" to="/">{props.AboutHome}<span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about">{props.aboutText}</Link>
      </li>
    </ul>
  </div>
  <div className={`custom-control custom-switch text-${props.mode==="light"?"dark":"light"}`}>
  <input type="checkbox" className="custom-control-input" id="customSwitch1" onClick={props.toggleMode}/>
  <label className="custom-control-label" htmlFor="customSwitch1">Enable DarkMode</label>
</div>
</nav>

    </div>
  );
}



