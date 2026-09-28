import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./CollectionPage.css";

const CollectionPage = () => {
  // ============================================================
  // PHOTOS - 43 TOTAL
  // ============================================================

  const photos = [
    // ==========================================================
    // SOFAS - 17
    // ==========================================================

    {
      id: "sofa1",
      src: "/images/gallery/sofa1.jpeg",
      category: "sofa",
    },
    {
      id: "sofa2",
      src: "/images/gallery/sofa2.jpeg",
      category: "sofa",
    },
    {
      id: "sofa3",
      src: "/images/gallery/sofa3.jpeg",
      category: "sofa",
    },
    {
      id: "sofa4",
      src: "/images/gallery/sofa4.jpeg",
      category: "sofa",
    },
    {
      id: "sofa5",
      src: "/images/gallery/sofa5.jpeg",
      category: "sofa",
    },
    {
      id: "sofa6",
      src: "/images/gallery/sofa6.jpeg",
      category: "sofa",
    },
    {
      id: "sofa7",
      src: "/images/gallery/sofa7.jpeg",
      category: "sofa",
    },
    {
      id: "sofa8",
      src: "/images/gallery/sofa8.jpeg",
      category: "sofa",
    },
    {
      id: "sofa9",
      src: "/images/gallery/sofa9.jpeg",
      category: "sofa",
    },
    {
      id: "sofa10",
      src: "/images/gallery/sofa10.jpeg",
      category: "sofa",
    },
    {
      id: "sofa11",
      src: "/images/gallery/sofa11.jpeg",
      category: "sofa",
    },
    {
      id: "sofa12",
      src: "/images/gallery/sofa12.jpeg",
      category: "sofa",
    },
    {
      id: "sofa13",
      src: "/images/gallery/sofa13.jpeg",
      category: "sofa",
    },
    {
      id: "sofa14",
      src: "/images/gallery/sofa14.jpeg",
      category: "sofa",
    },
    {
      id: "sofa15",
      src: "/images/gallery/sofa15.jpeg",
      category: "sofa",
    },
    {
      id: "sofa16",
      src: "/images/gallery/sofa16.jpeg",
      category: "sofa",
    },
    {
      id: "sofa17",
      src: "/images/gallery/sofa17.jpeg",
      category: "sofa",
    },

    // ==========================================================
    // CHAIRS - 8
    // ==========================================================

    {
      id: "chair1",
      src: "/images/gallery/chair1.jpeg",
      category: "chair",
    },
    {
      id: "chair2",
      src: "/images/gallery/chair2.jpeg",
      category: "chair",
    },
    {
      id: "chair3",
      src: "/images/gallery/chair3.jpeg",
      category: "chair",
    },
    {
      id: "chair4",
      src: "/images/gallery/chair4.jpeg",
      category: "chair",
    },
    {
      id: "chair5",
      src: "/images/gallery/chair5.jpeg",
      category: "chair",
    },
    {
      id: "chair6",
      src: "/images/gallery/chair6.jpeg",
      category: "chair",
    },
    {
      id: "chair7",
      src: "/images/gallery/chair7.jpeg",
      category: "chair",
    },
    {
      id: "chair8",
      src: "/images/gallery/chair8.jpeg",
      category: "chair",
    },

    // ==========================================================
    // CURTAINS - 8
    // ==========================================================

    {
      id: "curtain1",
      src: "/images/gallery/curtain1.jpeg",
      category: "curtain",
    },
    {
      id: "curtain2",
      src: "/images/gallery/curtain2.jpeg",
      category: "curtain",
    },
    {
      id: "curtain3",
      src: "/images/gallery/curtain3.jpeg",
      category: "curtain",
    },
    {
      id: "curtain4",
      src: "/images/gallery/curtain4.jpeg",
      category: "curtain",
    },
    {
      id: "curtain5",
      src: "/images/gallery/curtain5.jpeg",
      category: "curtain",
    },
    {
      id: "curtain6",
      src: "/images/gallery/curtain6.jpeg",
      category: "curtain",
    },
    {
      id: "curtain7",
      src: "/images/gallery/curtain7.jpeg",
      category: "curtain",
    },
    {
      id: "curtain8",
      src: "/images/gallery/curtain8.jpeg",
      category: "curtain",
    },

    // ==========================================================
    // DINING TABLES - 10
    // ==========================================================

    {
      id: "dining1",
      src: "/images/gallery/dining1.jpeg",
      category: "dining",
    },
    {
      id: "dining2",
      src: "/images/gallery/dining2.jpeg",
      category: "dining",
    },
    {
      id: "dining3",
      src: "/images/gallery/dining3.jpeg",
      category: "dining",
    },
    {
      id: "dining4",
      src: "/images/gallery/dining4.jpeg",
      category: "dining",
    },
    {
      id: "dining5",
      src: "/images/gallery/dining5.jpeg",
      category: "dining",
    },
    {
      id: "dining6",
      src: "/images/gallery/dining6.jpeg",
      category: "dining",
    },
    {
      id: "dining7",
      src: "/images/gallery/dining7.jpeg",
      category: "dining",
    },
    {
      id: "dining8",
      src: "/images/gallery/dining8.jpeg",
      category: "dining",
    },
    {
      id: "dining9",
      src: "/images/gallery/dining9.jpeg",
      category: "dining",
    },
    {
      id: "dining10",
      src: "/images/gallery/dining10.jpeg",
      category: "dining",
    },
  ];

  // ============================================================
  // VIDEOS - 8
  // ============================================================

  const videos = [
    {
      id: 1,
      src: "/images/gallery/vd1.mp4",
    },
    {
      id: 2,
      src: "/images/gallery/vd2.mp4",
    },
    {
      id: 3,
      src: "/images/gallery/vd3.mp4",
    },
    {
      id: 4,
      src: "/images/gallery/vd4.mp4",
    },
    {
      id: 5,
      src: "/images/gallery/vd5.mp4",
    },
    {
      id: 6,
      src: "/images/gallery/vd6.mp4",
    },
    {
      id: 7,
      src: "/images/gallery/vd7.mp4",
    },
    {
      id: 8,
      src: "/images/gallery/vd8.mp4",
    },
  ];

  // ============================================================
  // CATEGORIES
  // ============================================================

  const categories = [
    {
      id: "all",
      label: "ALL",
    },
    {
      id: "sofa",
      label: "SOFA",
    },
    {
      id: "chair",
      label: "CHAIR",
    },
    {
      id: "curtain",
      label: "CURTAIN",
    },
    {
      id: "dining",
      label: "DINING TABLE",
    },
  ];

  // ============================================================
  // STATES
  // ============================================================

  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);

  // ============================================================
  // FILTERED PHOTOS
  // ============================================================

  const filteredPhotos =
    activeCategory === "all"
      ? photos
      : photos.filter(
          (photo) => photo.category === activeCategory
        );

  // ============================================================
  // CATEGORY NAME
  // ============================================================

  const getCategoryName = () => {
    switch (activeCategory) {
      case "sofa":
        return "SOFAS";

      case "chair":
        return "CHAIRS";

      case "curtain":
        return "CURTAINS";

      case "dining":
        return "DINING TABLES";

      default:
        return "PHOTOS";
    }
  };

  // ============================================================
  // CATEGORY CHANGE
  // ============================================================

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setSelectedImage(null);
  };

  // ============================================================
  // IMAGE FUNCTIONS
  // ============================================================

  const openImage = (photo) => {
    setSelectedImage(photo);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const showPreviousImage = () => {
    if (!selectedImage || filteredPhotos.length === 0) {
      return;
    }

    const currentIndex = filteredPhotos.findIndex(
      (photo) => photo.id === selectedImage.id
    );

    if (currentIndex === -1) {
      return;
    }

    const previousIndex =
      currentIndex === 0
        ? filteredPhotos.length - 1
        : currentIndex - 1;

    setSelectedImage(filteredPhotos[previousIndex]);
  };

  const showNextImage = () => {
    if (!selectedImage || filteredPhotos.length === 0) {
      return;
    }

    const currentIndex = filteredPhotos.findIndex(
      (photo) => photo.id === selectedImage.id
    );

    if (currentIndex === -1) {
      return;
    }

    const nextIndex =
      currentIndex === filteredPhotos.length - 1
        ? 0
        : currentIndex + 1;

    setSelectedImage(filteredPhotos[nextIndex]);
  };

  // ============================================================
  // VIDEO FUNCTIONS
  // ============================================================

  const openVideo = (video) => {
    setSelectedVideo(video);
  };

  const closeVideo = () => {
    setSelectedVideo(null);
  };

  // ============================================================
  // VIDEO AUTOPLAY
  // ============================================================

  const handleVideoLoaded = (event) => {
    const video = event.currentTarget;

    video.muted = true;

    const playPromise = video.play();

    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Browser may temporarily block autoplay.
      });
    }
  };

  // ============================================================
  // KEYBOARD CONTROLS
  // ============================================================

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (selectedImage) {
        if (event.key === "Escape") {
          closeImage();
        }

        if (event.key === "ArrowLeft") {
          showPreviousImage();
        }

        if (event.key === "ArrowRight") {
          showNextImage();
        }
      }

      if (selectedVideo && event.key === "Escape") {
        closeVideo();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImage, selectedVideo, filteredPhotos]);

  // ============================================================
  // PREVENT BODY SCROLL WHEN LIGHTBOX IS OPEN
  // ============================================================

  useEffect(() => {
    if (selectedImage || selectedVideo) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedImage, selectedVideo]);

  // ============================================================
  // PAGE
  // ============================================================

  return (
    <div className="collection-page">

      {/* ======================================================
          NAVBAR
      ====================================================== */}

      <Navbar />

      {/* ======================================================
          HERO
      ====================================================== */}

      <section className="collection-hero">
        <div className="collection-hero-overlay"></div>

        <div className="collection-hero-content">
          <span className="collection-eyebrow">
            AF FURNITURE
          </span>

          <h1>
            OUR
            <br />
            COLLECTION
          </h1>

          <p>
            Explore our collection of thoughtfully crafted
            furniture designed for comfort, elegance and
            everyday living.
          </p>

          <a
            href="#collection-gallery"
            className="collection-hero-button"
          >
            EXPLORE COLLECTION
            <span>↓</span>
          </a>
        </div>
      </section>

      {/* ======================================================
          GALLERY
      ====================================================== */}

      <section
        className="collection-gallery-section"
        id="collection-gallery"
      >
        <div className="collection-gallery-container">

          {/* HEADING */}

          <div className="collection-heading">
            <div>
              <span className="collection-section-label">
                OUR WORK
              </span>

              <h2>
                FURNITURE
                <br />
                <em>THAT INSPIRES</em>
              </h2>
            </div>

            <div className="collection-count">
              <span>{filteredPhotos.length}</span>
              <small>{getCategoryName()}</small>
            </div>
          </div>

          {/* ==================================================
              CATEGORY FILTER
          ================================================== */}

          <div className="collection-categories">
            {categories.map((category) => (
              <button
                key={category.id}
                type="button"
                className={`category-button ${
                  activeCategory === category.id
                    ? "active"
                    : ""
                }`}
                onClick={() =>
                  handleCategoryChange(category.id)
                }
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* ==================================================
              PHOTO GRID
          ================================================== */}

          {filteredPhotos.length > 0 ? (
            <div className="collection-grid">
              {filteredPhotos.map((photo, index) => (
                <div
                  className="collection-photo"
                  key={photo.id}
                  onClick={() => openImage(photo)}
                >
                  <img
                    src={photo.src}
                    alt={`${photo.category} ${index + 1}`}
                    loading="lazy"
                  />

                  <div className="photo-hover">
                    <span>VIEW</span>

                    <span className="photo-hover-arrow">
                      ↗
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="collection-empty">
              <p>
                No photos available in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ======================================================
          VIDEO SECTION
      ====================================================== */}

      <section className="collection-videos">
        <div className="collection-videos-container">

          <div className="videos-heading">
            <div>
              <span className="collection-section-label">
                EXPERIENCE
              </span>

              <h2>
                SEE IT
                <br />
                <em>IN MOTION</em>
              </h2>
            </div>

            <p>
              Take a closer look at our furniture,
              craftsmanship and interiors through our
              collection of videos.
            </p>
          </div>

          {/* VIDEO GRID */}

          <div className="video-grid">
            {videos.map((video) => (
              <div
                className="video-card"
                key={video.id}
                onClick={() => openVideo(video)}
              >
                <video
                  src={video.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  onLoadedData={handleVideoLoaded}
                />

                <div className="video-play-overlay">
                  <span>▶</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================
          CTA
      ====================================================== */}

      <section className="collection-cta">
        <div className="collection-cta-overlay"></div>

        <div className="collection-cta-content">
          <span className="collection-section-label">
            LET&apos;S CREATE
          </span>

          <h2>
            YOUR SPACE,
            <br />
            <em>YOUR STYLE.</em>
          </h2>

          <p>
            Looking for something unique?
            Let us help you create furniture
            that perfectly fits your space and
            personality.
          </p>

          <a
            href="/contact"
            className="collection-cta-button"
          >
            GET IN TOUCH
            <span>→</span>
          </a>
        </div>
      </section>

      {/* ======================================================
          IMAGE LIGHTBOX
      ====================================================== */}

      {selectedImage && (
        <div
          className="collection-lightbox"
          onClick={closeImage}
        >
          <button
            type="button"
            className="lightbox-close"
            onClick={(event) => {
              event.stopPropagation();
              closeImage();
            }}
            aria-label="Close image"
          >
            ×
          </button>

          <button
            type="button"
            className="lightbox-prev"
            onClick={(event) => {
              event.stopPropagation();
              showPreviousImage();
            }}
            aria-label="Previous image"
          >
            ←
          </button>

          <div
            className="lightbox-image-wrapper"
            onClick={(event) => {
              event.stopPropagation();
            }}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.id}
            />

            <div className="lightbox-counter">
              {filteredPhotos.findIndex(
                (photo) =>
                  photo.id === selectedImage.id
              ) + 1}
              {" / "}
              {filteredPhotos.length}
            </div>
          </div>

          <button
            type="button"
            className="lightbox-next"
            onClick={(event) => {
              event.stopPropagation();
              showNextImage();
            }}
            aria-label="Next image"
          >
            →
          </button>
        </div>
      )}

      {/* ======================================================
          VIDEO LIGHTBOX
      ====================================================== */}

      {selectedVideo && (
        <div
          className="video-lightbox"
          onClick={closeVideo}
        >
          <button
            type="button"
            className="video-lightbox-close"
            onClick={(event) => {
              event.stopPropagation();
              closeVideo();
            }}
            aria-label="Close video"
          >
            ×
          </button>

          <div
            className="video-lightbox-content"
            onClick={(event) => {
              event.stopPropagation();
            }}
          >
            <video
              src={selectedVideo.src}
              controls
              autoPlay
              playsInline
            />
          </div>
        </div>
      )}

      {/* ======================================================
          FOOTER
      ====================================================== */}

      <Footer />
    </div>
  );
};

export default CollectionPage;