import React from "react";
import "./CTA.css";
import ctaFurniture from "../assets/cta-furniture.png";

const CTA = () => {
  return (
    <section className="cta-section">

      <div className="cta-background">
        <img
          src={ctaFurniture}
          alt="AF Furniture showroom"
        />
      </div>

      <div className="cta-overlay"></div>

      <div className="cta-content">

        <p className="cta-eyebrow">
          LET'S CREATE YOUR SPACE
        </p>

        <h2>
          Your Space.
          <br />
          Your Style.
          <br />
          <span>Our Craft.</span>
        </h2>

        <p className="cta-description">
          From custom furniture to smart curtain automation and blinds,
          we bring everything together to create a space that feels
          completely yours.
        </p>

       <a
  href="https://wa.me/917204552025?text=Hello%20AF%20Furniture%2C%20I%20would%20like%20to%20know%20more%20about%20your%20furniture%20and%20services."
  target="_blank"
  rel="noopener noreferrer"
  className="cta-button"
>
  <span className="cta-button-text">
    GET IN TOUCH
  </span>

  <span className="cta-arrow">
    →
  </span>
</a>
      </div>

    </section>
  );
};

export default CTA;