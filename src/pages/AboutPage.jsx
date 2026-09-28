import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./AboutPage.css";

const AboutPage = () => {
  return (
    <>
      <Navbar />

      <main className="about-page">

        {/* HERO */}
        <section className="about-page-hero">

          <div className="about-page-hero-overlay"></div>

          <div className="about-page-hero-content">

            <span>ABOUT AF FURNITURE</span>

            <h1>
              Spaces
              <br />
              That Feel
              <br />
              Like <em>Home.</em>
            </h1>

            <p>
              At AF Furniture, we create spaces with thoughtful
              design, quality craftsmanship and a deep
              understanding of how people live.
            </p>

            <a href="#our-story" className="about-page-btn">
              OUR STORY
              <b>→</b>
            </a>

          </div>

        </section>


        {/* OUR STORY */}
        <section className="about-page-story" id="our-story">

          <div className="about-story-image">
            <img
              src="/images/about.png"
              alt="AF Furniture interior"
            />
          </div>

          <div className="about-story-content">

            <span>OUR JOURNEY</span>

            <h2>
              Built on
              <br />
              People, Design
              <br />
              and Trust.
            </h2>

            <p>
              With 13 years of experience and 2000+ clients,
              we continue to create furniture and living
              solutions that are functional, stylish and
              made to last.
            </p>

            <div className="about-page-stats">

              <div>
                <strong>13+</strong>
                <small>YEARS OF<br />EXPERIENCE</small>
              </div>

              <div>
                <strong>2000+</strong>
                <small>HAPPY<br />CLIENTS</small>
              </div>

              <div>
                <strong>100%</strong>
                <small>QUALITY<br />COMMITMENT</small>
              </div>

            </div>

          </div>

        </section>


        {/* WHY AF FURNITURE */}
        <section className="about-page-quality">

          <span>WHY CHOOSE AF FURNITURE</span>

          <h2>Quality in Every Detail.</h2>

          <div className="about-quality-grid">

            <div className="about-quality-item">
              <div className="about-quality-icon">◇</div>
              <h3>PREMIUM</h3>
              <p>MATERIALS</p>
            </div>

            <div className="about-quality-line"></div>

            <div className="about-quality-item">
              <div className="about-quality-icon">⚙</div>
              <h3>EXPERT</h3>
              <p>CRAFTSMANSHIP</p>
            </div>

            <div className="about-quality-line"></div>

            <div className="about-quality-item">
              <div className="about-quality-icon">♢</div>
              <h3>CUSTOM</h3>
              <p>SOLUTIONS</p>
            </div>

          </div>

        </section>


        {/* CTA */}
        <section className="about-page-cta">

          <div className="about-page-cta-overlay"></div>

          <div className="about-page-cta-content">

            <div>
              <span>LET'S CREATE TOGETHER</span>

              <h2>
                Turn Your Ideas
                <br />
                Into <em>Reality.</em>
              </h2>
            </div>

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

      </main>

      <Footer />
    </>
  );
};

export default AboutPage;