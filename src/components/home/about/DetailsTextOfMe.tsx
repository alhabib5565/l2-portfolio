"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  aboutMeSectionContainerVariants,
  bottomToTop,
  leftToRightVariants,
} from "@/variants/aboutMeVariants";
import Link from "next/link";
import { Button } from "@/components/ui/button";
const DetailsTextOfMe = () => {
  return (
    <motion.div
      variants={aboutMeSectionContainerVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="flex-1"
    >
      <motion.h1
        variants={leftToRightVariants}
        className="text-[28px] mb-3 font-bold text-slate-300"
      >
        Get to know me!
      </motion.h1>
      <motion.p
        variants={leftToRightVariants}
        className="text-lg mb-3 text-slate-300 text-justify"
      >
        I&apos;m a{" "}
        <span className="text-white text-[19px] font-medium">
          Frontend Focused Web Developer
        </span>{" "}
        building and managing the Front-end of Websites and Web Applications
        that leads to the success of the overall product. Check out some of my
        work in the{" "}
        <Link href="/projects">
          <span className="text-blue-500 hover:underline">projects</span>{" "}
        </Link>
        section.
      </motion.p>
      <motion.p
        variants={leftToRightVariants}
        className="text-lg mb-5 text-slate-300 text-justify"
      >
        I&apos;m open to
        <span className="text-white text-[19px] font-medium"> Job </span>{" "}
        opportunities where I can contribute, learn and grow. If you have a good
        opportunity that matches my skills and experience then don&apos;t
        hesitate to contact me
        <Link href="/contact">
          {" "}
          <span className="text-blue-500 hover:underline">contact</span>{" "}
        </Link>
        me.
      </motion.p>
      <motion.div variants={leftToRightVariants}>
        <Button>Contact</Button>
      </motion.div>
    </motion.div>
  );
};

export default DetailsTextOfMe;

const SkillHeader = () => {
  return (
    <motion.h1
      variants={bottomToTop}
      initial="initial"
      whileInView="animate"
      className="text-[28px] mb-3 font-bold text-slate-300"
    >
      My skills
    </motion.h1>
  );
};
