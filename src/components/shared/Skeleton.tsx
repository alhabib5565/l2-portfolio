import React from "react";

const Skeleton = () => {
  return (
    <div className=" rounded-md overflow-hidden">
      <div className="h-[250px] overflow-hidden">
        <div className="w-full h-full bg-gray-300 animate-pulse"></div>
      </div>
      <div className="p-4">
        <div className="w-3/4 h-8 bg-gray-300 animate-pulse mb-2 rounded"></div>
        <div className="w-full h-6 bg-gray-300 animate-pulse mb-2 rounded"></div>
        <div className="w-full h-6 bg-gray-300 animate-pulse rounded"></div>
      </div>
    </div>
  );
};

export default Skeleton;
