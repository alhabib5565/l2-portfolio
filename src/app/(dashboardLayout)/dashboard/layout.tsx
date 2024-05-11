// import Sidebar from "@/components/sidebar/Sidebar";
"use client";
import dynamic from "next/dynamic";
import React from "react";
const Sidebar = dynamic(() => import("@/components/sidebar/Sidebar"), {
  ssr: false,
});

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <Sidebar />
      <div className="md:ml-[300px] p-3">{children}</div>
    </div>
  );
};

export default layout;
