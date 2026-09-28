import React from "react";
import "./SmartLiving.css";

function SmartLiving() {
  return (
    <section className="smart-living-section" id="smart-living">

      {/* LEFT CONTENT */}
      <div className="smart-living-content">

        <p className="smart-living-eyebrow">
          SMART LIVING
        </p>

        <h2>
          Curtain Automation
          <br />
          <span>&amp; Blinds</span>
        </h2>

        <p className="smart-living-description">
          Elevate your space with smart curtain automation
          and premium blinds. Experience the perfect blend
          of technology, style and everyday convenience.
        </p>

        <a
          href="/collection"
          className="smart-living-button"
        >
          EXPLORE CURTAIN SOLUTIONS
          <span>→</span>
        </a>

      </div>


      {/* RIGHT IMAGE */}
      <div className="smart-living-image">

        <img
          src="/images/curtain-automation.png"
          alt="Smart Curtain Automation"
        />

        <div className="smart-image-overlay"></div>

      </div>

    </section>
  );
}

export default SmartLiving;