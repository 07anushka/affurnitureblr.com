import { useEffect, useState } from "react";

import "./Hero.css";


const slides = [
  {
    desktop: "/images/hero/desktop/sofa.png",
    mobile: "/images/hero/mobile/sofa.png",
  },
  {
    desktop: "/images/hero/desktop/work.png",
    mobile: "/images/hero/mobile/work.png",
  },
  {
    desktop: "/images/hero/desktop/curtain.png",
    mobile: "/images/hero/mobile/curtain.png",
  },
  {
    desktop: "/images/hero/desktop/wardrobe.png",
    mobile: "/images/hero/mobile/wardrobe.png",
  },
];


function Hero() {

  const [currentSlide, setCurrentSlide] = useState(0);

  const [isMobile, setIsMobile] = useState(
    window.matchMedia(
      "(max-width: 768px)"
    ).matches
  );


  /* ===================================================
     MOBILE DETECTION
  =================================================== */

  useEffect(() => {

    const mediaQuery =
      window.matchMedia(
        "(max-width: 768px)"
      );

    const handleResize = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener(
      "change",
      handleResize
    );

    return () => {
      mediaQuery.removeEventListener(
        "change",
        handleResize
      );
    };

  }, []);


  /* ===================================================
     AUTO CAROUSEL
  =================================================== */

  useEffect(() => {

    const timer = setInterval(() => {

      setCurrentSlide(
        (previous) =>
          (previous + 1) % slides.length
      );

    }, 5000);

    return () => {
      clearInterval(timer);
    };

  }, []);


  /* ===================================================
     NEXT
  =================================================== */

  const nextSlide = () => {

    setCurrentSlide(
      (previous) =>
        (previous + 1) % slides.length
    );

  };


  /* ===================================================
     PREVIOUS
  =================================================== */

  const previousSlide = () => {

    setCurrentSlide(
      (previous) =>
        (previous - 1 + slides.length) %
        slides.length
    );

  };


  /* ===================================================
     GO TO SLIDE
  =================================================== */

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };


  return (

    <section
      className="hero"
      id="home"
    >

      {/* SLIDES */}

      <div className="hero-slides">

        {slides.map(
          (slide, index) => {

            const image = isMobile
              ? slide.mobile
              : slide.desktop;

            return (

              <div
                key={index}
                className={
                  `hero-slide ${
                    index === currentSlide
                      ? "active"
                      : ""
                  }`
                }
              >

                <img
                  src={image}
                  alt={`AF Furniture ${
                    index + 1
                  }`}
                  className="hero-image"
                  draggable="false"
                />

              </div>

            );

          }
        )}

      </div>


      {/* LEFT ARROW */}

      <button
        className="
          hero-arrow
          hero-arrow-left
        "
        onClick={previousSlide}
        aria-label="Previous slide"
      >
        <span>←</span>
      </button>


      {/* RIGHT ARROW */}

      <button
        className="
          hero-arrow
          hero-arrow-right
        "
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <span>→</span>
      </button>


      {/* SLIDE INDICATORS */}

      <div className="hero-indicators">

        {slides.map(
          (_, index) => (

            <button
              key={index}
              className={
                index === currentSlide
                  ? "hero-dot active"
                  : "hero-dot"
              }
              onClick={() =>
                goToSlide(index)
              }
              aria-label={
                `Go to slide ${
                  index + 1
                }`
              }
            />

          )
        )}

      </div>


      {/* COUNTER */}

      <div className="hero-counter">

        <span>
          {String(
            currentSlide + 1
          ).padStart(2, "0")}
        </span>

        <span className="counter-line"></span>

        <span>
          {String(
            slides.length
          ).padStart(2, "0")}
        </span>

      </div>

    </section>

  );
}


export default Hero;