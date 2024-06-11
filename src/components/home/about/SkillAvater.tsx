"use client";
import { TSkills } from "@/type/common";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { bottomToTop } from "@/variants/aboutMeVariants";

const SkillAvater = ({ skill }: { skill: TSkills }) => {
  return (
    <motion.div
      variants={bottomToTop}
      className="h-20 w-20 grid place-items-center gap-4 text-[16px] font-semibold p-2 rounded-full bg-white text-[#666] shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset] shadow-black"
    >
      <Image
        height={60}
        width={60}
        src={skill.skillAvater}
        className="rounded-full"
        alt=""
      />
    </motion.div>
  );
};

export default SkillAvater;
