import React from "react";
import Hero from "../home/Hero";
import AboutMe from "../home/AboutMe";
import Projects from "../home/Projects";
import ContactMe from "../home/ContactMe";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <AboutMe />
      <Projects />
      <ContactMe />
    </div>
  );
};

export default HomePage;
