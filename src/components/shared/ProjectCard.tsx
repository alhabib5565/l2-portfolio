"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { TProject } from "@/type/common";

type TProjectProps = Pick<TProject, "image" | "name" | "description">;

const ProjectCard = ({ project }: { project: TProjectProps }) => {
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
};

export default ProjectCard;
