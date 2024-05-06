import Navbar from "@/components/shared/navbar/Navbar";
import React from "react";
import Hero from "./home/Hero";
import Projects from "./home/Projects";
import AboutMe from "./home/AboutMe";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutMe />
      <Projects />
    </div>
  );
};

export default HomePage;
