import { Link } from "react-router-dom";
import "../css/Navbar.css";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <header className="navbar">

      {/* MovieRec Logo */}
      <Link to="/home" className="navbar-logo">
        <img
          src={logo}
          alt="MovieRec Logo"
          className="navbar-logo-image"
        />

        <span className="logo-text">
          Movie<span>Rec</span>
        </span>
      </Link>

      {/* Navigation Links */}
      <nav className="nav-links">
        <Link to="/home">
          Home
        </Link>

        <Link to="/search">
          Search
        </Link>

        <Link to="/recommendations">
          Recommendations
        </Link>

        <Link to="/about">
          About
        </Link>
      </nav>

      {/* Right Side */}
      <div className="nav-actions">

        {/* User Icon */}
        <span className="user-icon">
          👤
        </span>

        {/* Logout */}
        <button className="logout-btn">
          Log out
        </button>

      </div>

    </header>
  );
}

export default Navbar;