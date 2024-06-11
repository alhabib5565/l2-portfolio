import React from "react";

const SkeletonSkillAvater = () => {
  return (
    <div className="h-20 w-20 grid place-items-center gap-4 text-[16px] font-semibold p-2 rounded-full bg-slate-500 text-[#666] shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset] shadow-black animate-pulse">
      <div className="h-14 w-14 bg-gray-600 rounded-full"></div>
    </div>
  );
};

export default SkeletonSkillAvater;
