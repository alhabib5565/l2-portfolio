"use client";
import Container from "@/components/shared/Container";
import { cn } from "@/lib/utils";
import React from "react";
import hero from "../../assets/hero.jpg";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  heroSectionContainerVariants,
  imageVariants,
  letterVariants,
  sentenceVariants,
  textWraperVariants,
} from "@/variants/heroVariants";
import {
  description,
  greeting,
  name,
  resumeLink,
} from "@/constant/heroConstant";
const Hero = () => {
  return (
    <Container>
      <motion.div
        variants={heroSectionContainerVariants}
        initial="initial"
        animate="animate"
        className={cn(
          "flex flex-col md:flex-row items-center md:items-start md:justify-between gap-8 pt-5 mt-14"
        )}
      >
        <div className="max-w-[550px] w-full flex flex-col gap-4 items-center md:items-start md:text-left text-center">
          <motion.div
            variants={textWraperVariants}
            className="text-[40px] md:text-[60px] font-[800] tracking-[1px] mt-10"
          >
            {greeting.split("").map((letter, index) => (
              <motion.span
                className="inline-block min-w-6 uppercase"
                variants={letterVariants}
                key={index}
              >
                {letter}
              </motion.span>
            ))}

            <div className="bg-gradient-to-r from-[#D899FF] via-[#D660FF] to-[#FF5133]  bg-clip-text">
              {name.split("").map((letter, index) => (
                <motion.span
                  className="inline-block min-w-6 uppercase"
                  variants={letterVariants}
                  key={index}
                >
                  {letter}
                </motion.span>
              ))}
            </div>
          </motion.div>
          <motion.h2 variants={sentenceVariants} className="text-[22px]">
            {description}
          </motion.h2>
          <motion.div
            variants={sentenceVariants}
            className="mt-6 flex items-center gap-6"
          >
            <Button>
              <a
                href={
                  "https://drive.google.com/file/d/1_xtl2ZLvXzBubCfwZ_VrDq4Aya5R1n_U/view"
                }
                download="resume.pdf"
              >
                Download My Resume
              </a>
            </Button>
            <Link href="/projects">
              <Button variant="outline" className="bg-transparent">
                Show projects
              </Button>
            </Link>
          </motion.div>
        </div>
        <motion.div
          variants={imageVariants}
          className="w-[300px] h-[300px] md:h-[400px] md:w-[400px] "
        >
          <Image
            style={{
              height: "100%",
              width: "100%",
            }}
            className="rounded-full "
            src={hero}
            alt=""
          />
        </motion.div>
      </motion.div>
    </Container>
  );
};

export default Hero;
