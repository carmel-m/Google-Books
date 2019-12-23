import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <a className="nav-item nav-link" href="/">
          Home
        </a>
        <a className="nav-item nav-link" href="/Saved">
          Saved Books
        </a>
      </div>
    </nav>
  );
}

export default Nav;
