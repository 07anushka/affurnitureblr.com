import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./ServicesPage.css";

const ServicesPage = () => {
  return (
    <>
      <Navbar />

      <main className="services-page">

        {/* ================= HERO ================= */}
        <section className="services-hero">

          <div className="services-hero-overlay"></div>

          <div className="services-hero-content">

            <span>OUR SERVICES</span>

            <h1>
              Design.
              <br />
              Craft. Create.
              <br />
              Your <em>Space.</em>
            </h1>

            <p>
              At AF Furniture, we offer complete furniture and
              interior solutions with a focus on quality,
              functionality and personalized design.
            </p>

          </div>

        </section>


        {/* ================= SERVICES ================= */}
        <section className="services-list" id="services">

          <div className="services-heading">

            <div>

              <span>OUR SERVICES</span>

              <h2>
                Complete Solutions for{" "}
                <em>Every Space.</em>
              </h2>

            </div>

            <p>
              From custom furniture to smart living solutions,
              we provide end-to-end services to create functional,
              stylish and comfortable spaces for homes and
              workspaces.
            </p>

          </div>


          {/* ================= SERVICE GRID ================= */}

          <div className="services-grid">

            {/* 01 — CUSTOM FURNITURE */}
            <article className="service-card">

              <img
                src="/images/service-custom-furniture.png"
                alt="Custom Furniture"
              />

              <div className="service-info">

                <div className="service-number">
                  01
                </div>

                <div>

                  <h3>
                    CUSTOM FURNITURE
                  </h3>

                  <p>
                    Tailor-made furniture designed to match
                    your space, style and needs.
                  </p>

                </div>

              </div>

            </article>


            {/* 02 — OFFICE FURNITURE */}
            <article className="service-card">

              <img
                src="/images/service-office-furniture.png"
                alt="Office Furniture"
              />

              <div className="service-info">

                <div className="service-number">
                  02
                </div>

                <div>

                  <h3>
                    OFFICE FURNITURE
                  </h3>

                  <p>
                    Ergonomic and elegant furniture for
                    productive and comfortable workspaces.
                  </p>

                </div>

              </div>

            </article>


            {/* 03 — BEDROOM FURNITURE */}
            <article className="service-card">

              <img
                src="/images/service-bedroom.png"
                alt="Bedroom Furniture"
              />

              <div className="service-info">

                <div className="service-number">
                  03
                </div>

                <div>

                  <h3>
                    BEDROOM FURNITURE
                  </h3>

                  <p>
                    Stylish and functional bedroom furniture
                    designed for modern living.
                  </p>

                </div>

              </div>

            </article>


            {/* 04 — INTERIOR SOLUTIONS */}
            <article className="service-card">

              <img
                src="/images/service-interior.png"
                alt="Interior Solutions"
              />

              <div className="service-info">

                <div className="service-number">
                  04
                </div>

                <div>

                  <h3>
                    INTERIOR SOLUTIONS
                  </h3>

                  <p>
                    Complete interior solutions for a
                    cohesive, stylish and comfortable space.
                  </p>

                </div>

              </div>

            </article>


            {/* 05 — REPAIR & UPHOLSTERY */}
            <article className="service-card">

              <img
                src="/images/service-repair.png"
                alt="Furniture Repair and Upholstery"
              />

              <div className="service-info">

                <div className="service-number">
                  05
                </div>

                <div>

                  <h3>
                    FURNITURE REPAIR &amp; UPHOLSTERY
                  </h3>

                  <p>
                    Sofa repair, cushion and foam replacement,
                    fabric change, leather and vinyl work,
                    frame repair, reclining mechanism repair
                    and complete re-upholstery services.
                  </p>

                </div>

              </div>

            </article>


            {/* 06 — SMART CURTAIN AUTOMATION */}
            <article className="service-card">

              <img
                src="/images/service-curtain.png"
                alt="Smart Curtain Automation"
              />

              <div className="service-info">

                <div className="service-number">
                  06
                </div>

                <div>

                  <h3>
                    SMART CURTAIN AUTOMATION
                  </h3>

                  <p>
                    Motorized curtains with remote control,
                    automatic operation, smart-home integration,
                    silent motors and professional installation
                    for homes and offices.
                  </p>

                </div>

              </div>

            </article>


            {/* 07 — BLINDS */}
            <article className="service-card">

              <img
                src="/images/service-blinds.png"
                alt="Blinds"
              />

              <div className="service-info">

                <div className="service-number">
                  07
                </div>

                <div>

                  <h3>
                    BLINDS
                  </h3>

                  <p>
                    Roller blinds, zebra blinds, Roman blinds,
                    Venetian blinds, vertical blinds, blackout
                    blinds and motorized blinds with custom
                    sizing and professional installation.
                  </p>

                </div>

              </div>

            </article>
{/* 08 — WALLPAPERS */}

<article className="service-card">

  <img
    src="/images/service-wallpaper.png"
    alt="Wallpapers"
  />

  <div className="service-info">

    <div className="service-number">
      08
    </div>

    <div>

      <h3>
        WALLPAPERS
      </h3>

      <p>
        Premium wallpapers in a variety of textures,
        patterns and finishes, professionally selected
        and installed to transform your walls and interiors.
      </p>

    </div>

  </div>

</article>

          </div>

        </section>


        {/* ================= PROCESS ================= */}
        <section className="services-process">

          <div className="process-title">

            <span>OUR PROCESS</span>

            <h2>
              From Idea
              <br />
              to <em>Reality.</em>
            </h2>

          </div>


          <div className="process-steps">

            {/* 01 */}
            <div className="process-step">

              <div className="process-icon">
                01
              </div>

              <div>

                <h3>
                  CONSULTATION
                </h3>

                <p>
                  Understand your needs
                  <br />
                  and space.
                </p>

              </div>

            </div>


            <div className="process-line"></div>


            {/* 02 */}
            <div className="process-step">

              <div className="process-icon">
                02
              </div>

              <div>

                <h3>
                  DESIGN
                </h3>

                <p>
                  Create personalized
                  <br />
                  design concepts.
                </p>

              </div>

            </div>


            <div className="process-line"></div>


            {/* 03 */}
            <div className="process-step">

              <div className="process-icon">
                03
              </div>

              <div>

                <h3>
                  CRAFTSMANSHIP
                </h3>

                <p>
                  Expertly crafted with
                  <br />
                  premium materials.
                </p>

              </div>

            </div>


            <div className="process-line"></div>


            {/* 04 */}
            <div className="process-step">

              <div className="process-icon">
                04
              </div>

              <div>

                <h3>
                  DELIVERY &amp; SETUP
                </h3>

                <p>
                  Hassle-free delivery
                  <br />
                  and installation.
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* ================= CTA ================= */}
        <section className="services-cta">

          <div className="services-cta-content">

            <div>

              <span>
                LET'S WORK TOGETHER
              </span>

              <h2>
                Bring Your Vision
                <br />
                to <em>Life.</em>
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

export default ServicesPage;