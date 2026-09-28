import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">

      {/* =========================================
          LOGO
      ========================================= */}

      <NavLink
        to="/"
        className="navbar-logo"
        onClick={closeMenu}
      >
        <img
          src="/images/logo.png"
          alt="AF Furniture"
        />
      </NavLink>


      {/* =========================================
          NAVIGATION
      ========================================= */}

      <nav
        className={`navbar-links ${
          menuOpen ? "mobile-open" : ""
        }`}
      >

        <NavLink
          to="/"
          end
          onClick={closeMenu}
        >
          HOME
        </NavLink>

        <NavLink
          to="/about"
          onClick={closeMenu}
        >
          ABOUT
        </NavLink>

        <NavLink
          to="/collection"
          onClick={closeMenu}
        >
          COLLECTION
        </NavLink>

        <NavLink
          to="/services"
          onClick={closeMenu}
        >
          SERVICES
        </NavLink>

        <NavLink
          to="/contact"
          onClick={closeMenu}
        >
          CONTACT
        </NavLink>

      </nav>


      {/* =========================================
          MOBILE HAMBURGER
      ========================================= */}

      <button
        className={`navbar-toggle ${
          menuOpen ? "active" : ""
        }`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
      >

        <span></span>
        <span></span>
        <span></span>

      </button>

    </header>
  );
};

export default Navbar;