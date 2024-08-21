"use client";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { TProject } from "@/type/common";
import Link from "next/link";
import { useRef } from "react";

const ProjectCard = ({ project }: { project: TProject }) => {
  const cardRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end end"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.stopPropagation();
  };

  return (
    <Link href={`projects/${project?._id}` || ""} className="h-full  ">
      <motion.div
        style={{
          scale: scale,
          rotateX: rotate,
        }}
        ref={cardRef}
        className="overflow-hidden relative h-full shadow-lg rounded-md bg-[#2C3E50] flex flex-col justify-between"
      >
        <div>
          <div className="rounded-t-md h-[250px] overflow-hidden">
            <Image
              style={{
                width: "100%",
                height: "100%",
              }}
              width={300}
              height={220}
              className="rounded-t-md object-cover"
              src={project.image || ""}
              alt=""
            />
          </div>
          <div className="px-4 pt-4 flex-grow">
            <span className="absolute rotate-45 -top-8 text-center capitalize origin-top-left -right-[90px] w-[200px] px-4 py-1.5 text-lg border-primary border-2 bg-[#DC5847] ">
              {project.category}
            </span>
            <h1 className="text-lg font-bold tracking-[0.5px] -mt-2">
              {project.name}
            </h1>
            <p className="text-[14px] text-gray-300 font-medium mt-2">
              {project.description.split(" ").slice(0, 10).join(" ")}...
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {project.technologies.map((item) => (
                <span
                  key={item.label}
                  className="px-3 py-1 text-sm rounded-full border-primary border-2 bg-transparent b-[#DC5847] bg-opacity-20"
                >
                  {item.label}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-end gap-4 p-4">
          <Link onClick={handleClick} target="_blank" href={project.liveUrl}>
            <span className="bg-animate-btn">Live</span>
          </Link>
          {project.clientCode && (
            <Link
              onClick={handleClick}
              target="_blank"
              href={project.clientCode}
            >
              <span className="bg-animate-btn">Client Code</span>
            </Link>
          )}
          {project.serverCode && (
            <Link
              onClick={handleClick}
              target="_blank"
              href={project.serverCode}
            >
              <span className="bg-animate-btn">Server Code</span>
            </Link>
          )}
        </div>
      </motion.div>
    </Link>
  );
};

export default ProjectCard;
