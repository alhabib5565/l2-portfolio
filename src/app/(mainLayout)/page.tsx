import AboutMe from "@/components/home/about/AboutMe";
import Blogs from "@/components/home/Blogs";
import ContactMe from "@/components/home/ContactMe";
import Hero from "@/components/home/Hero";
import Projects from "@/components/home/Projects";
import React from "react";

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
