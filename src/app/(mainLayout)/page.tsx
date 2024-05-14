import React from "react";
import Hero from "../home/Hero";
import AboutMe from "../home/AboutMe";
import Projects from "../home/Projects";
import ContactMe from "../home/ContactMe";
import Blogs from "../home/Blogs";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <AboutMe />
      <Projects />
      <Blogs />
      <ContactMe />
    </div>
  );
};

export default HomePage;
