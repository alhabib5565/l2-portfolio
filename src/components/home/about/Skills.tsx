import React from "react";
import SkillAvater from "./SkillAvater";
import { TSkills } from "@/type/common";

const Skills = async () => {
  const response = await fetch(
    "https://portfolio-server-six-phi.vercel.app/api/v1/skills"
  );
  const data = await response.json();
  const skills = data?.data;
  return (
    <div className="flex-1">
      <div className="mt-3 flex gap-3 md:gap-4 flex-wrap">
        {skills.map((skill: TSkills, index: number) => (
          <SkillAvater key={skill.name} skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
