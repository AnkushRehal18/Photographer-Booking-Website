import React from "react";
import '../components/filecss.css';
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <img src="/Logo.webp" alt="Logo" />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <Link to='/' className="nav-link active" aria-current="page">HOME</Link>
              <Link to='/Families' className="nav-link"><u>FAMILIES</u></Link>
              <Link to='/Couple' className="nav-link">COUPLES</Link>
              <Link to='/Proposals' className="nav-link">PROPOSALS</Link>
              <Link to='/Elopments' className="nav-link">ELOPEMENTS</Link>
              <Link to='/Meetteam' className="nav-link">MEET THE TEAM</Link>
              <Link to='/Blog' className="nav-link">BLOG</Link>
            </div>
          </div>
        </div>
      </nav>
      <div className="blur-background">
        {/* The rest of your page content goes here */}
      </div>
    </>
  );
}

export default Navbar;
