import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./ContactPage.css";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const whatsappMessage = `
Hello AF Furniture,

Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Service: ${formData.service}

Message:
${formData.message}
    `;

    const whatsappUrl = `https://wa.me/917204552025?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <>
      <Navbar />

      <main className="contact-page">

        {/* =========================================
            HERO
        ========================================= */}

        <section className="contact-hero">

          <div className="contact-hero-overlay"></div>

          <div className="contact-hero-content">

            <span>GET IN TOUCH</span>

            <h1>
              Let's create
              <br />
              something
              <br />
              <em>beautiful.</em>
            </h1>

            <p>
              Have a furniture idea, renovation project or
              smart living requirement? Tell us what you have
              in mind and let's bring it to life.
            </p>

          </div>

        </section>


        {/* =========================================
            CONTACT CONTENT
        ========================================= */}

        <section className="contact-main">

          <div className="contact-intro">

            <span>CONTACT AF FURNITURE</span>

            <h2>
              Your space,
              <br />
              <em>our craftsmanship.</em>
            </h2>

            <p>
              From custom furniture and interior solutions to
              curtain automation, blinds and furniture repair,
              we're here to help you create spaces that feel
              truly yours.
            </p>

          </div>


          <div className="contact-layout">


            {/* =========================================
                CONTACT INFORMATION
            ========================================= */}

            <div className="contact-info">

              <div className="contact-info-item">

                <span className="contact-info-label">
                  CALL US
                </span>

                <a href="tel:7204552025">
                  7204552025
                </a>

                <a href="tel:8088705116">
                  8088705116
                </a>

              </div>


              <div className="contact-info-item">

                <span className="contact-info-label">
                  EMAIL
                </span>

                <a href="mailto:affurniture05@gmail.com">
                  affurniture05@gmail.com
                </a>

              </div>


              <div className="contact-info-item">

                <span className="contact-info-label">
                  FACEBOOK
                </span>

                <a
                  href="https://www.facebook.com/share/1cPQugtsoV/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit our Facebook
                  <span className="contact-arrow">
                    ↗
                  </span>
                </a>

              </div>


              <div className="contact-info-item">

                <span className="contact-info-label">
                  INSTAGRAM
                </span>

                <a
                  href="https://www.instagram.com/a.f.furniture_?stkn=Y21jbnh6Zm0yNGQ0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit our Instagram
                  <span className="contact-arrow">
                    ↗
                  </span>
                </a>

              </div>


              <div className="contact-info-item">

                <span className="contact-info-label">
                  EXPERIENCE
                </span>

                <strong>
                  13+ YEARS
                </strong>

                <p>
                  Crafting furniture and living spaces
                  with care and attention to detail.
                </p>

              </div>


            </div>



            {/* =========================================
                ENQUIRY FORM
            ========================================= */}

            <div className="contact-form-wrapper">

              <div className="form-heading">

                <span>
                  SEND AN ENQUIRY
                </span>

                <h3>
                  Tell us about
                  <br />
                  your <em>project.</em>
                </h3>

              </div>


              <form
                className="contact-form"
                onSubmit={handleSubmit}
              >

                <div className="form-row">

                  <div className="form-group">

                    <label htmlFor="name">
                      YOUR NAME
                    </label>

                    <input
                      id="name"
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />

                  </div>


                  <div className="form-group">

                    <label htmlFor="phone">
                      PHONE NUMBER
                    </label>

                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      placeholder="Enter your number"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />

                  </div>

                </div>


                <div className="form-group">

                  <label htmlFor="email">
                    EMAIL ADDRESS
                  </label>

                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                  />

                </div>


                <div className="form-group">

                  <label htmlFor="service">
                    WHAT DO YOU NEED?
                  </label>

                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                  >

                    <option value="">
                      Select a service
                    </option>

                    <option value="Custom Furniture">
                      Custom Furniture
                    </option>

                    <option value="Office Furniture">
                      Office Furniture
                    </option>

                    <option value="Bedroom Furniture">
                      Bedroom Furniture
                    </option>

                    <option value="Interior Solutions">
                      Interior Solutions
                    </option>

                    <option value="Furniture Repair & Upholstery">
                      Furniture Repair & Upholstery
                    </option>

                    <option value="Smart Curtain Automation">
                      Smart Curtain Automation
                    </option>

                    <option value="Blinds">
                      Blinds
                    </option>

                    <option value="Custom Woodwork & Storage">
                      Custom Woodwork & Storage
                    </option>

                    <option value="Other">
                      Other
                    </option>

                  </select>

                </div>


                <div className="form-group">

                  <label htmlFor="message">
                    TELL US MORE
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    placeholder="Tell us about your space, requirements or project..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>

                </div>


                <button
                  type="submit"
                  className="contact-submit"
                >

                  SEND ENQUIRY

                  <span>→</span>

                </button>


                <p className="form-note">
                  Your enquiry will open WhatsApp so we can
                  get back to you directly.
                </p>

              </form>

            </div>

          </div>

        </section>



        {/* =========================================
            FINAL CTA
        ========================================= */}

        <section className="contact-cta">

          <div className="contact-cta-content">

            <span>
              HAVE A PROJECT IN MIND?
            </span>

            <h2>
              Let's turn your
              <br />
              ideas into <em>reality.</em>
            </h2>

            <a href="tel:7204552025">
              CALL US
              <b>→</b>
            </a>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
};

export default ContactPage;