import React from "react";
import "./Collection.css";

const collections = [
  {
    title: "SOFAS",
    image: "/images/sofa.png",
    link: "#sofas",
  },
  {
    title: "DINING",
    image: "/images/dining.png",
    link: "#dining",
  },
  {
    title: "BEDROOM",
    image: "/images/bedroom.png",
    link: "#bedroom",
  },
  {
    title: "WARDROBES",
    image: "/images/wardrobe.png",
    link: "#wardrobes",
  },
];

function Collection() {
  return (
    <section className="collection-section" id="collection">

      {/* Heading */}
      <div className="collection-heading">

        <div>
          <p className="collection-eyebrow">OUR COLLECTION</p>

          <h2>
            Curated for Every Space
          </h2>
        </div>

        <a
          href="/collection"
          className="view-all-collections"
        >
          VIEW ALL COLLECTIONS
          <span>→</span>
        </a>

      </div>


      {/* Collection Cards */}
      <div className="collection-grid">

        {collections.map((item, index) => (
          <a
            href={item.link}
            className="collection-card"
            key={index}
          >

            <img
              src={item.image}
              alt={item.title}
              className="collection-image"
            />

            <div className="collection-overlay"></div>

            <div className="collection-title">
              {item.title}
            </div>

          </a>
        ))}

      </div>

    </section>
  );
}

export default Collection;