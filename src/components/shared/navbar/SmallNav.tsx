"use client";
import { navItems } from "@/constant/common";
import Link from "next/link";
import logo from "../../../assets/logo.png";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
type TSmallNavProps = {
  hidden: boolean;
};

type TPosition = {
  opacity: number;
  left: number;
  width: number;
};

const SmallNav = ({ hidden }: TSmallNavProps) => {
  const [position, setPosition] = useState<TPosition>({
    opacity: 0,
    left: 0,
    width: 0,
  });
  return (
    <div
      onMouseLeave={() => {
        setPosition((prev) => ({
          ...prev,
          opacity: 0,
        }));
      }}
      className="relative flex bg-white p-1 rounded-full w-fit mx-auto overflow-hidden"
    >
      {/* <Image className="" height={40} width={70} src={logo} alt="" /> */}

      {navItems.map((item) => (
        <NavItem setPosition={setPosition} item={item} key={item.pathName}>
          {item.pathName}
        </NavItem>
      ))}
      <LinkBG position={position} />
    </div>
  );
};

export default SmallNav;

type NavItemProps = {
  children: string;
  item: {
    path: string;
    pathName: string;
  };
  setPosition: React.Dispatch<React.SetStateAction<TPosition>>;
};
const NavItem = ({ setPosition, item, children }: NavItemProps) => {
  const ref = useRef<null | HTMLAnchorElement>(null);

  return (
    <Link
      onMouseEnter={() => {
        if (!ref?.current) return;
        const { width } = ref.current.getBoundingClientRect();
        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      ref={ref}
      href={item.path}
      className=" z-10 text-[16px] font-thin capitalize flex justify-center items-center text-gray-400 px-4 h-8 rounded-full  mix-blend-difference overflow-hidden "
    >
      {children}
    </Link>
  );
};

const LinkBG = ({ position }: { position: TPosition }) => {
  return (
    <motion.span
      animate={{ ...position }}
      transition={{
        type: "spring",
        damping: 15,
        stiffness: 200,
      }}
      className="absolute h-8 bg-black rounded-full"
    ></motion.span>
  );
};
