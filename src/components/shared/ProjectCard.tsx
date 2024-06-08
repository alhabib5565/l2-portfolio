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
      className="relative overflow-hidden group flex flex-col md:flex-row gap-4 bg-[#2C3E50] shadow-lg p-4 rounded-md"
    >
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
            <span className="relative z-10 bg-animate-btn text-sm px-5 py-2 rounded-md flex justify-center items-center bg-transparent bg-[#2C3E50] shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset]  ">
              Live
            </span>
          </Link>
          {project.clientCode && (
            <Link target="_blank" href={project.clientCode}>
              <Button>Client Code</Button>
            </Link>
          )}
          {project.serverCode && (
            <Link target="_blank" href={project.serverCode}>
              <Button>Sever Code</Button>
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
