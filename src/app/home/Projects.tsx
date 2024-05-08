"use client";
import React from "react";
import { motion } from "framer-motion";
import tripsure from "../../assets/projects/tripsure.png";
import eclass from "../../assets/projects/eclass.png";
import collage_addmission from "../../assets/projects/collage_addmision.png";
import Container from "@/components/shared/Container";
import Image, { StaticImageData } from "next/image";
import SectionHeader from "./SectionHeader";
const Projects = () => {
  const projects = [
    {
      name: "Tripsure (team project)",
      categroy: "Team project",
      live_link: "https://tripsure-client.web.app/",
      clien_code: "https://github.com/Sayemsaadat0/tripsure-client",
      server_code: "https://github.com/Sayemsaadat0/tripsure-server",
      technologies: [
        "HTML",
        "Tailwind",
        "Ant Design",
        "Firebase",
        "React",
        "Express",
        "Mongodb",
        "Redux",
      ],
      image: tripsure,
    },
    {
      name: "E_Class",
      categroy: "full stack project",
      live_link: "https://edu-clas.web.app/",
      clien_code: "https://github.com/alhabib5565/summer_camp_client",
      server_code: "https://github.com/alhabib5565/summer_camp_server",
      technologies: [
        "HTML",
        "Tailwind",
        "daisyUI",
        "Firebase",
        "React",
        "Express",
        "Mongodb",
        "JWT",
        "TanStack Query",
      ],
      image: eclass,
    },
    // {
    //     name: "Toy Robot",
    //     categroy: 'front end',
    //     live_link: 'https://ema-john-simple-with-fir-a29b0.web.app/',
    //     clien_code: 'https://github.com/alhabib5565/toy_robot_client/',
    //     server_code: 'https://github.com/alhabib5565/toy_robot_server/',
    //     technologies: ['HTML', "Tailwind", "daisyUI", "Firebase", "React", "Express", "Mongodb"],
    //     image: robotToy
    // },
    {
      name: "Collage Admission",
      categroy: "front end",
      live_link: "https://collage-app-40b89.web.app/",
      clien_code: "https://github.com/alhabib5565/collage-app",
      server_code: "https://github.com/alhabib5565/collage-app-server",
      technologies: [
        "HTML",
        "Tailwind",
        "daisyUI",
        "Firebase",
        "React",
        "Express",
        "Mongodb",
      ],
      image: collage_addmission,
    },
  ];
  return (
    <div className="py-[50px]">
      <Container>
        <SectionHeader
          title="PROJECTS
"
          description="Here you will find some of the personal projects that I created with each project containing its own case study
"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 md:gap-6 mt-10 mx-auto">
          {/* card */}
          {projects.map((item) => (
            <Card project={item} key={item.name} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Projects;

type TProjectProps = {
  name: string;
  categroy: string;
  live_link: string;
  clien_code: string;
  server_code: string;
  technologies: string[];
  image: StaticImageData;
};

const Card = ({ project }: { project: TProjectProps }) => {
  //animation variants
  const imageVariants = {
    initial: { x: -100, opacity: 0 },
    whileInView: {
      x: 0,
      // rotate: [20, 0],
      opacity: 1,
      transition: {
        duration: 2,
        type: "spring",
        bounce: "0.5",
      },
    },
  };

  const textVariants = {
    initial: { y: 50, opacity: 0 },
    whileInView: {
      y: 0,
      opacity: 1,
      transition: { duration: 1, type: "spring", bounce: "0.5" },
    },
  };
  return (
    <motion.div
      initial="initial"
      whileInView="whileInView"
      transition={{ staggerChildren: 0.5 }}
      layout
      key={project.name}
      className=" bg-zinc-800 rounded-lg space-y-4 overflow-hidden"
    >
      <motion.div
        className="h-[220px] w-full overflow-hidden"
        variants={imageVariants}
      >
        <Image
          style={{
            width: "100%",
            height: "auto",
          }}
          className=" rounded-md"
          src={project.image}
          alt=""
        />
      </motion.div>
      <div className="p-4">
        <motion.h1
          variants={textVariants}
          className="text-2xl  font-extrabold tracking-[0.5px]"
        >
          {project.name}
        </motion.h1>
        {/* <motion.p variants={textVariants} className="text-xl font-medium  ">
          {project.description.split(" ").slice(0, 5).join(" ")}
        </motion.p> */}
      </div>
    </motion.div>
  );
};
