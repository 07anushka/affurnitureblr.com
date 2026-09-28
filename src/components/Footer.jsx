import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">

      {/* =========================================
          MAIN FOOTER
      ========================================= */}

      <div className="footer-main">

        {/* BRAND */}
        <div className="footer-brand">

          <a href="/" className="footer-logo">
            <img
              src="/images/logo.png"
              alt="AF Furniture"
            />
          </a>

          <p className="footer-description">
            Furniture crafted for comfort,
            <br />
            style and everyday living.
          </p>

          <p className="footer-tagline">
            Luxury furniture & smart living solutions.
          </p>

          <a
            href="https://wa.me/917204552025?text=Hello%20AF%20Furniture%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="footer-whatsapp"
          >
            <span>CHAT WITH US</span>
            <b>→</b>
          </a>

        </div>


        {/* EXPLORE */}
        <div className="footer-column">

          <h4>EXPLORE</h4>

          <a href="/">
            Home
          </a>

          <a href="/about">
            About
          </a>

          <a href="/collection">
            Collection
          </a>

          <a href="/services">
            Services
          </a>

          <a href="/contact">
            Contact
          </a>

        </div>


        {/* SERVICES */}
        <div className="footer-column">

          <h4>SERVICES</h4>

          <a href="/services">
            Custom Furniture
          </a>

          <a href="/services">
            Interior Solutions
          </a>

          <a href="/services">
            Furniture Repair
          </a>

          <a href="/services">
            Curtain Automation
          </a>

          <a href="/services">
            Blinds
          </a>

          <a href="/services">
            Custom Woodwork
          </a>

        </div>


        {/* CONTACT */}
        <div className="footer-contact">

          <h4>GET IN TOUCH</h4>


          <div className="footer-contact-item">

            <span>CALL</span>

            <a href="tel:7204552025">
              7204552025
            </a>

          </div>


          <div className="footer-contact-item">

            <span>CALL</span>

            <a href="tel:8088705116">
              8088705116
            </a>

          </div>


          <div className="footer-contact-item">

            <span>EMAIL</span>

            <a href="mailto:affurniture05@gmail.com">
              affurniture05@gmail.com
            </a>

          </div>


          <a
            href="https://www.facebook.com/share/1cPQugtsoV/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social"
          >
            <span>FACEBOOK</span>
            <b>↗</b>
          </a>


          <a
            href="https://www.instagram.com/a.f.furniture_?stkn=Y21jbnh6Zm0yNGQ0"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social"
          >
            <span>INSTAGRAM</span>
            <b>↗</b>
          </a>

        </div>

      </div>


      {/* =========================================
          FOOTER LINE
      ========================================= */}

      <div className="footer-divider"></div>


      {/* =========================================
          BOTTOM
      ========================================= */}

      <div className="footer-bottom">

        <p>
          © {new Date().getFullYear()} AF Furniture.
          All rights reserved.
        </p>

        <p>
          Furniture
          <span>•</span>
          Curtain Automation
          <span>•</span>
          Blinds
          <span>•</span>
          Wallpaper
        </p>

        <p className="footer-made">
          Crafted with care.
        </p>

      </div>

    </footer>
  );
};

export default Footer;