import React from "react";

type TSectionHeader = {
  title: string;
  description: string;
};

const SectionHeader = ({ title, description }: TSectionHeader) => {
  return (
    <div className="mb-10 max-w-[800px]">
      <h1 className="header-border relative text-[35px] md:text-[45px] font-extrabold tracking-[2px]">
        {title}
      </h1>
      <p className="font-medium text-xl mt-5">{description}</p>
    </div>
  );
};

export default SectionHeader;
