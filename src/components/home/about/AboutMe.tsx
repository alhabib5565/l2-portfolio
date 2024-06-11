"use client";
import Container from "@/components/shared/Container";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import SectionHeader from "../SectionHeader";
import { motion } from "framer-motion";
import Skills from "./Skills";
import {
  aboutMeSectionContainerVariants,
  avaterContainerVariants,
  bottomToTop,
  leftToRightVariants,
} from "@/variants/aboutMeVariants";
import DetailsTextOfMe from "./DetailsTextOfMe";
import { useGetAllSkillsQuery } from "@/redux/api/skillsApi";
import { TSkills } from "@/type/common";
import SkillAvater from "./SkillAvater";
import SkeletonSkillAvater from "./SkeletonSkillAvater";

const AboutMe = () => {
  const { data, isLoading } = useGetAllSkillsQuery({});
  const skills = data?.data;
  console.log(skills);
  return (
    <div className="mt-20 py-[50px]">
      <Container>
        <SectionHeader
          title="About Me"
          description=" Here you will find more information about me, what I do, and my
            current skills mostly in terms of programming and technology"
        />

        <motion.div
          variants={aboutMeSectionContainerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:justify-between gap-10 md:gap-14"
        >
          <div className="flex-1">
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
              building and managing the Front-end of Websites and Web
              Applications that leads to the success of the overall product.
              Check out some of my work in the{" "}
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
              <span className="text-white text-[19px] font-medium">
                {" "}
                Job{" "}
              </span>{" "}
              opportunities where I can contribute, learn and grow. If you have
              a good opportunity that matches my skills and experience then
              don&apos;t hesitate to contact me
              <Link href="/contact">
                {" "}
                <span className="text-blue-500 hover:underline">
                  contact
                </span>{" "}
              </Link>
              me.
            </motion.p>
            <motion.div variants={leftToRightVariants}>
              <Button>Contact</Button>
            </motion.div>
          </div>
          <div className="flex-1">
            <motion.h1
              variants={bottomToTop}
              className="text-[28px] mb-3 font-bold text-slate-300"
            >
              My skills
            </motion.h1>

            <motion.div
              variants={avaterContainerVariants}
              className="mt-3 flex gap-3 md:gap-4 flex-wrap"
            >
              {!isLoading && skills && skills.length ? (
                <>
                  {skills.map((skill: TSkills) => (
                    <SkillAvater key={skill.name} skill={skill} />
                  ))}
                </>
              ) : (
                <>
                  <SkeletonSkillAvater />
                  <SkeletonSkillAvater />
                  <SkeletonSkillAvater />
                  <SkeletonSkillAvater />
                  <SkeletonSkillAvater />
                  <SkeletonSkillAvater />
                  <SkeletonSkillAvater />
                  <SkeletonSkillAvater />
                  <SkeletonSkillAvater />
                </>
              )}
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </div>
  );
};

export default AboutMe;
