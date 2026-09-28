import React from "react";
import "./About.css";

function About() {
  return (
    <section className="about-section" id="about">

      {/* IMAGE SIDE */}
      <div className="about-image-wrapper">
        <img
          src="/images/about-furniture.png"
          alt="AF Furniture"
          className="about-image"
        />
      </div>


      {/* CONTENT SIDE */}
      <div className="about-content">

        <p className="about-eyebrow">
          ABOUT AF FURNITURES
        </p>

        <h2>
          More Than Just
          <br />
          Furniture
        </h2>

        <p className="about-description">
          With 13 years of experience and 2000+ clients, we create
          functional, stylish and personalized living spaces. From
          premium furniture to smart curtain automation and blinds,
          we are committed to quality, innovation and customer
          satisfaction.
        </p>

        <a
          href="/about"
          className="about-button"
        >
          ABOUT US
          <span>→</span>
        </a>

      </div>

    </section>
  );
}

export default About;