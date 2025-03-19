import React from "react";

function Navbar() {
  return (
    <div className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a href="/" className="navbar-brand">
          Facegram
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="/#home" className="nav-link active">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="/#helna" className="nav-link">
                Product
              </a>
            </li>
            <li className="nav-item">
              <a href="/#test" className="nav-link">
                Dist
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
