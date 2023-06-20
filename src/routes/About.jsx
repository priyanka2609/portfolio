import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImage2 from "../components/HeroImage2";
import AboutContent from "../components/AboutContent";

const About = () => {
  return (
    <div>
      <Navbar />
      <HeroImage2
        heading="About Me."
        text="I am a Software Developer having experience of 2.5 years of Java Spring Boot and also an enthusiast in learning ReactJs"
      />
      <AboutContent />
      <Footer />
    </div>
  );
};

export default About;
