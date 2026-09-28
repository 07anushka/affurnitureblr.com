import React from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import WhyChooseUs from "../components/WhyChooseUs";
import Collection from "../components/Collection";
import SmartLiving from "../components/SmartLiving";
import About from "../components/About";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

import "./Home.css";

const Home = () => {
  return (
    <div className="home-page">

      {/* NAVBAR */}
      <Navbar />

      {/* HERO CAROUSEL */}
      <Hero />

      {/* EXPERIENCE / TRUST */}
      <WhyChooseUs />

      {/* COLLECTION PREVIEW */}
      <Collection />

      <SmartLiving />

      <About />

      <CTA />
      <Footer />

    </div>
  );
};

export default Home;