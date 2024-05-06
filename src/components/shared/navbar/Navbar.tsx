import React from "react";
import Container from "../Container";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { roboto } from "@/lib/font";
import Image from "next/image";
import logo from "../../../assets/Logo_Light.webp";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const navItems = [
    {
      path: "/",
      pathName: "Home",
    },
    {
      path: "/projects",
      pathName: "Projects",
    },
    {
      path: "/about",
      pathName: "About",
    },
  ];
  return (
    <Container>
      <div
        className={cn(
          " h-[50px] mt-[35px] mb-[50px] flex justify-between items-center"
        )}
      >
        <div className="flex justify-between items-center gap-5">
          <Image
            className="text-white"
            height={40}
            width={70}
            src={logo}
            alt=""
          />
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className="text-[17px] leading-8 group relative link-before uppercase"
            >
              {item.pathName}
              <span className="absolute bottom-0 left-0  h-[3px] rounded-md w-0 group-hover:w-full duration-200 bg-white z-10 transition-all"></span>
            </Link>
          ))}
        </div>
        <div>
          <Button>Contact</Button>
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
