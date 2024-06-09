"use client";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { TProject } from "@/type/common";
import { Button } from "../ui/button";
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

  return (
    <motion.div
      style={{
        scale: scale,
        rotateX: rotate,
      }}
      ref={cardRef}
      className="overflow-hidden relative bg-[#2C3E50] shadow-lg p-4 rounded-md"
    >
      <div className=" rounded-md h-[350px] overflow-hidden">
        <Image
          style={{
            width: "100%",
            height: "100%",
          }}
          width={300}
          height={220}
          className="rounded-md object-cover"
          src={project.image || ""}
          alt=""
        />
      </div>
      <div className="flex gap-6 flex-col justify-between mt-4">
        <div className="space-y-2">
          <span className="absolute rotate-45 -top-8 text-center capitalize origin-top-left -right-[90px] w-[200px] px-4 py-1.5 text-lg border-primary border-2 bg-transparent bg-[#DC5847] ">
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
            <span className="bg-animate-btn">Live</span>
          </Link>
          {project.clientCode && (
            <Link target="_blank" href={project.clientCode}>
              <span className="bg-animate-btn">Client Code</span>
            </Link>
          )}
          {project.serverCode && (
            <Link target="_blank" href={project.serverCode}>
              <span className="bg-animate-btn">Server Code</span>
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
