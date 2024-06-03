"use client";
import { navItems } from "@/constant/common";
import { Squash as Hamburger } from "hamburger-react";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
// import { useClickAway } from "react-use";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  const handleMenuOpen = () => {
    setIsOpen((prev) => !prev);
  };

  // useClickAway(ref, () => setOpen(false));

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, scale: 0 },
    show: { opacity: 1, scale: 1 },
  };

  return (
    <div className="lg:hidden" ref={ref}>
      <Hamburger toggled={isOpen} toggle={handleMenuOpen} size={30} />
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            exit={{ opacity: 0 }}
            className="fixed left-0 shadow-4xl right-0 top-[5rem] p-5 bg-zinc-950 border-b border-b-white/20 z-50"
          >
            <ul className="grid gap-2">
              {navItems.map((route, index) => {
                return (
                  <motion.li
                    variants={item}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      // delay: 0.1 + index / 10,
                    }}
                    key={route.pathName}
                    className="w-full p-[0.08rem] rounded-xl bg-gradient-to-tr from-zinc-800 via-zinc-950 to-zinc-700"
                  >
                    <Link
                      onClick={() => setIsOpen((prev) => !prev)}
                      className={
                        "flex items-center justify-between w-full px-5 py-3 rounded-xl bg-zinc-950"
                      }
                      href={route.path}
                    >
                      <span className="flex gap-1 text-lg">
                        {route.pathName}
                      </span>
                      <route.Icon className="text-xl" />
                    </Link>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileNav;
