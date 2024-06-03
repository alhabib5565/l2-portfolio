"use client";
import Container from "@/components/shared/Container";
import { cn } from "@/lib/utils";
import React from "react";
import hero from "../../assets/hero.jpg";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
const Hero = () => {
  const textWraper = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        // delayChildren: 0.2,
        staggerChildren: 0.05,
      },
    },
  };
  const text = {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        // delay: 0.1 + index / 10,
      },
    },
  };

  return (
    <Container>
      <div
        className={cn(
          "flex flex-col md:flex-row items-center md:items-start md:justify-between gap-8 pt-5"
        )}
      >
        <div className="max-w-[550px] w-full flex flex-col items-center md:items-start md:text-left text-center">
          <motion.div
            variants={textWraper}
            initial="initial"
            animate="animate"
            className="text-[40px] md:text-[60px] font-[800] tracking-[1px] mt-10"
          >
            {"Hello, I’m".split("").map((letter, index) => (
              <motion.span
                className="inline-block min-w-6"
                variants={text}
                key={index}
              >
                {letter}
              </motion.span>
            ))}

            <div className="bg-gradient-to-r from-[#D899FF] via-[#D660FF] to-[#FF5133] text-transparent bg-clip-text">
              <p>
                {" "}
                {"MD. Al-Habib!".split("").map((letter, index) => (
                  <motion.span
                    className="inline-block"
                    variants={text}
                    key={index}
                  >
                    {letter}
                  </motion.span>
                ))}
              </p>
            </div>
          </motion.div>
          <h2 className="text-[22px]">
            I’m a Frontend Web Developer, MERN Stack Web Developer
          </h2>
          <div className="mt-6 flex items-center gap-6">
            <Button>
              {" "}
              <a
                href="https://drive.google.com/uc?export=download&id=1Q286hmzLIeEhrvEXqNcCzCxSlu1trdpE"
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
          </div>
        </div>
        <div className="w-[300px] h-[300px] md:h-[400px] md:w-[400px] ">
          <Image
            style={{
              height: "100%",
              width: "100%",
            }}
            className="rounded-full "
            src={hero}
            alt=""
          />
        </div>
      </div>
    </Container>
  );
};

export default Hero;
