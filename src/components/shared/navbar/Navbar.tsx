import React from "react";
import Container from "../Container";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../assets/logo.png";
import { Button } from "@/components/ui/button";
import { navItems } from "@/constant/common";
import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <Container className="relative">
      <div
        className={cn(
          " h-[50px] mt-5 lg:mt-[35px] mb-[50px] flex justify-between lg:justify-normal items-center gap-5"
        )}
      >
        <div>
          <Image className="" height={40} width={70} src={logo} alt="" />
        </div>
        {/* mobile */}
        <MobileNav />
        {/* desktop */}
        <div className="flex-1 hidden lg:flex justify-between items-center">
          <div className="flex justify-between items-center gap-5">
            {navItems.slice(0, 3).map((item) => (
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
            <Link href="contact">
              <Button>Contact</Button>
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
