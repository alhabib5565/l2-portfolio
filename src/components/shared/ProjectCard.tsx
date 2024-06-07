"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { TProject } from "@/type/common";
import { Button } from "../ui/button";
import { navItems } from "@/constant/common";
import Link from "next/link";

const ProjectCard = ({ project }: { project: TProject }) => {
  console.log(project);
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
    <div className="relative overflow-hidden group flex flex-col md:flex-row gap-4 bg-[#2C3E50] shadow-lg p-4 rounded-md">
      <div className="md:flex-1 rounded-md h-[350px] overflow-hidden">
        <Image
          style={{
            width: "100%",
            height: "auto",
          }}
          width={300}
          height={220}
          className="rounded-md"
          src={project.image || ""}
          alt=""
        />
      </div>
      <div className="md:flex-1 md:flex flex-col justify-between">
        <div className="space-y-2">
          <span className="px-4 py-1.5 text-sm rounded-full border-primary border-2 bg-transparent b-[#DC5847] bg-opacity-20">
            {project.category}
          </span>
          <h1 className="text-2xl -mt-2 font-extrabold tracking-[0.5px]">
            {project.name}
          </h1>
          <p className="text-[16px] text-gray-300 font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
            placeat tempore corrupti? Voluptatum quibusdam perferendis quae ex
            quam? Delectus vitae deserunt a inventore, quas fuga numquam
            accusamus nisi odit officia?
          </p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((item) => (
              <span
                key={item.label}
                className="px-4 py-1.5 text-sm rounded-full border-primary border-2 bg-transparent b-[#DC5847] bg-opacity-20"
              >
                {item.label}
              </span>
            ))}
          </div>
        </div>
        <div className="flex justify-end gap-4 mt-4 md:mt-0">
          <Link target="_blank" href={project.liveUrl}>
            <span className="px-4 py-1.5 text-sm rounded-full border-primary border-2 bg-transparent b-[#DC5847] bg-opacity-20">
              Live
            </span>
          </Link>
          <Link target="_blank" href={project.clientCode}>
            <Button>Client Code</Button>
          </Link>
          <Link target="_blank" href={project.serverCode}>
            <Button>Sever Code</Button>
          </Link>
        </div>
      </div>
      {/* <motion.div
        whileHover={{ opacity: 1 }}
        transition={{
          staggerChildren: 0.2,
        }}
        className="absolute z-10 hidden group-hover:block opacity-70 translate-y-[100%] group-hover:translate-y-0 inset-0 bg-[#2C3E50] rounded-md p-4 duration-200"
      >
        {navItems.map((item) => (
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
            }}
            key={item.pathName}
            className="px-4 py-1.5 text-sm rounded-full border-primary border-2 bg-transparent b-[#DC5847] bg-opacity-20"
          >
            {item.pathName}
          </motion.span>
        ))}
      </motion.div> */}
    </div>
  );
};

export default ProjectCard;

/**
 *  return (
    <motion.div
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.5 }}
      layout
      key={project.name}
      className=" bg-slate-800 rounded-t-lg space-y-4 overflow-hidden"
    >
      <motion.div
        className="h-[250px] w-full overflow-hidden"
        variants={imageVariants}
      >
        <Image
          style={{
            width: "100%",
            height: "auto",
          }}
          width={300}
          height={220}
          className=" rounded-md"
          src={project.image || ""}
          alt=""
        />
      </motion.div>
      <div className="p-4 space-y-2">
        <motion.h1
          variants={textVariants}
          className="text-2xl -mt-2 font-extrabold tracking-[0.5px]"
        >
          {project.name}
        </motion.h1>
        <motion.p
          variants={textVariants}
          className="text-[16px] text-gray-300 font-medium  "
        >
          {project.description.split(" ").slice(0, 5).join(" ")}
        </motion.p>
      </div>
    </motion.div>
  );
 */
