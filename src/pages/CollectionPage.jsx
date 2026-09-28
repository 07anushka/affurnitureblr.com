import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./CollectionPage.css";


// =========================================
// COLLECTION PHOTOS
// =========================================

const photos = [
  { id: 1, src: "/images/gallery/1.jpeg" },
  { id: 2, src: "/images/gallery/2.jpeg" },
  { id: 3, src: "/images/gallery/3.jpeg" },
  { id: 4, src: "/images/gallery/4.jpeg" },
  { id: 5, src: "/images/gallery/5.jpeg" },
  { id: 6, src: "/images/gallery/6.jpeg" },
  { id: 7, src: "/images/gallery/7.jpeg" },
  { id: 8, src: "/images/gallery/8.jpeg" },
  { id: 9, src: "/images/gallery/9.jpeg" },
  { id: 10, src: "/images/gallery/10.jpeg" },
  { id: 11, src: "/images/gallery/11.jpeg" },
  { id: 12, src: "/images/gallery/12.jpeg" },
  { id: 13, src: "/images/gallery/13.jpeg" },
  { id: 14, src: "/images/gallery/14.jpeg" },
  { id: 15, src: "/images/gallery/15.jpeg" },
  { id: 16, src: "/images/gallery/16.jpeg" },
  { id: 17, src: "/images/gallery/17.jpeg" },
  { id: 18, src: "/images/gallery/18.jpeg" },
  { id: 19, src: "/images/gallery/19.jpeg" },
  { id: 20, src: "/images/gallery/20.jpeg" },
  { id: 21, src: "/images/gallery/21.jpeg" },
  { id: 22, src: "/images/gallery/22.jpeg" },
  { id: 23, src: "/images/gallery/23.jpeg" },
  { id: 24, src: "/images/gallery/24.jpeg" },
];


// =========================================
// COLLECTION VIDEOS
// =========================================

const videos = [
  { id: 1, src: "/images/gallery/vd1.mp4" },
  { id: 2, src: "/images/gallery/vd2.mp4" },
  { id: 3, src: "/images/gallery/vd3.mp4" },
  { id: 4, src: "/images/gallery/vd4.mp4" },
  { id: 5, src: "/images/gallery/vd5.mp4" },
  { id: 6, src: "/images/gallery/vd6.mp4" },
  { id: 7, src: "/images/gallery/vd7.mp4" },
  { id: 8, src: "/images/gallery/vd8.mp4" },
];


const CollectionPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);


  // =========================================
  // CLOSE IMAGE
  // =========================================

  const closeImage = () => {
    setSelectedImage(null);
  };


  // =========================================
  // PREVIOUS IMAGE
  // =========================================

  const showPrevious = (event) => {
    event.stopPropagation();

    const currentIndex = photos.findIndex(
      (photo) => photo.id === selectedImage.id
    );

    const previousIndex =
      currentIndex === 0
        ? photos.length - 1
        : currentIndex - 1;

    setSelectedImage(photos[previousIndex]);
  };


  // =========================================
  // NEXT IMAGE
  // =========================================

  const showNext = (event) => {
    event.stopPropagation();

    const currentIndex = photos.findIndex(
      (photo) => photo.id === selectedImage.id
    );

    const nextIndex =
      currentIndex === photos.length - 1
        ? 0
        : currentIndex + 1;

    setSelectedImage(photos[nextIndex]);
  };


  return (
    <>
      <Navbar />

      <main className="collection-page">


        {/* =========================================
            HERO
        ========================================= */}

        <section className="collection-hero">

          <div className="collection-hero-overlay"></div>

          <div className="collection-hero-content">

            <span>OUR COLLECTION</span>

            <h1>
              Furniture
              <br />
              designed for
              <br />
              the way <em>you live.</em>
            </h1>

            <p>
              Explore our collection of custom furniture,
              modern interiors and timeless designs crafted
              to bring comfort, beauty and functionality
              to your space.
            </p>

          </div>

        </section>



        {/* =========================================
            PHOTO COLLECTION
        ========================================= */}

        <section className="collection-gallery-section">

          <div className="collection-heading">

            <div>

              <span>OUR WORK</span>

              <h2>
                Crafted for
                <br />
                <em>your space.</em>
              </h2>

            </div>


            <div className="collection-count">

              <span></span>

              <p>24 PHOTOS</p>

            </div>

          </div>


          <div className="collection-grid">

            {photos.map((photo) => (

              <article
                className="collection-photo"
                key={photo.id}
                onClick={() => setSelectedImage(photo)}
              >

                <img
                  src={photo.src}
                  alt={`AF Furniture Collection ${photo.id}`}
                  loading="lazy"
                />

                <div className="photo-hover">

                  <span>VIEW</span>

                  <b>↗</b>

                </div>

              </article>

            ))}

          </div>

        </section>



        {/* =========================================
            VIDEOS
        ========================================= */}

        <section className="collection-videos">

          <div className="videos-heading">

            <div>

              <span>VIDEOS</span>

              <h2>
                See it.
                <em> Feel it.</em>
                Live it.
              </h2>

              <p>
                Watch our latest projects and see
                how our furniture brings spaces to life.
              </p>

            </div>


            <div className="video-count">
              8 VIDEOS
            </div>

          </div>


          {/* =========================================
              VIDEO GRID — 4 PER ROW
          ========================================= */}

          <div className="video-grid">

            {videos.map((video) => (

              <article
                className="video-card"
                key={video.id}
                onClick={() => setSelectedVideo(video)}
              >

                <video
                  src={video.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                />

                <div className="video-play-overlay">

                  <span>▶</span>

                </div>

              </article>

            ))}

          </div>

        </section>



        {/* =========================================
            CTA
        ========================================= */}

        <section className="collection-cta">

          <div className="collection-cta-overlay"></div>

          <div className="collection-cta-content">

            <div>

              <span>
                FIND SOMETHING YOU LOVE?
              </span>

              <h2>
                Let's create the perfect
                <br />
                space <em>for you.</em>
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



      {/* =========================================
          IMAGE LIGHTBOX
      ========================================= */}

      {selectedImage && (

        <div
          className="collection-lightbox"
          onClick={closeImage}
        >

          <button
            className="lightbox-close"
            onClick={closeImage}
            aria-label="Close"
          >
            ×
          </button>


          <button
            className="lightbox-prev"
            onClick={showPrevious}
            aria-label="Previous image"
          >
            ←
          </button>


          <img
            src={selectedImage.src}
            alt="AF Furniture Collection"
            onClick={(event) =>
              event.stopPropagation()
            }
          />


          <button
            className="lightbox-next"
            onClick={showNext}
            aria-label="Next image"
          >
            →
          </button>

        </div>

      )}



      {/* =========================================
          VIDEO LIGHTBOX
      ========================================= */}

      {selectedVideo && (

        <div
          className="video-lightbox"
          onClick={() => setSelectedVideo(null)}
        >

          <button
            className="video-lightbox-close"
            onClick={() => setSelectedVideo(null)}
            aria-label="Close video"
          >
            ×
          </button>


          <video
            src={selectedVideo.src}
            controls
            autoPlay
            playsInline
            onClick={(event) =>
              event.stopPropagation()
            }
          />

        </div>

      )}


      <Footer />

    </>
  );
};


export default CollectionPage;