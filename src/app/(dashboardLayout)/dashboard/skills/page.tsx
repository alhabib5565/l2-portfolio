"use client";
import React from "react";
import AddSkillModal from "./components/AddSkillModal";

const SkillsPage = () => {
  return (
    <div>
      <div className="bg-slate-800 px-4 py-3 rounded-md flex justify-between items-center">
        <h1 className="text-lg font-semibold">Skills</h1>
        <AddSkillModal />
      </div>
    </div>
  );
};

export default SkillsPage;
