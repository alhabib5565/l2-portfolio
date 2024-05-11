"use client";

import React from "react";
import { sidebarItems } from "./Sidebar";
import Link from "next/link";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";
import Image from "next/image";
import logo from "../../assets/logo.png";

const DesktopSidebar = () => {
  const pathName = usePathname();
  return (
    <aside className="bg-slate-800 w-[300px] max-w-xs h-screen fixed left-0 top-0 z-40 border-r overflow-y-scroll">
      <div className="h-full px-3 py-4">
        <Image className="" height={40} width={70} src={logo} alt="" />
        <hr className="mt-3 mb-6" />

        <div className="flex flex-col gap-2">
          {sidebarItems.map((item, index) => (
            <Link key={index} href={item.href}>
              <Button
                variant={pathName === item.href ? "secondary" : "ghost"}
                className="w-full flex justify-start gap-2 uppercase"
              >
                <item.icon size={20} />
                {item.label}
              </Button>
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default DesktopSidebar;
