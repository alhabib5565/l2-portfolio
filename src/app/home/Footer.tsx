import Container from "@/components/shared/Container";
import Image from "next/image";
import React from "react";
import logo from "../../assets/logo.png";
import { categoryItems, navItems } from "@/constant/common";
import Link from "next/link";
import linkedin from "../../assets/icons/linkedin.png";
import github from "../../assets/icons/github.png";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="bg-[#131E2B] py-[50px] mt-10">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
          {/* <div className=" bg-red-500"> */}
          <div className="w-fit">
            <Image
              className="mx-auto"
              height={40}
              width={70}
              src={logo}
              alt=""
            />
            <h2 className="text-3xl font-bold uppercase mt-2">MD. Al-Habib</h2>
          </div>
          {/* </div> */}
          <div className="">
            <h3 className="text-xl font-medium text-slate-400 tracking-[1px]">
              General Info
            </h3>
            <div className="flex flex-col ">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className="text-lg leading-8 group relative link-before capitalize w-fit"
                >
                  {item.pathName}
                </Link>
              ))}
            </div>
          </div>
          <div className="">
            <h3 className="text-lg font-medium text-slate-400 tracking-[1px]">
              Categories
            </h3>
            <div className="flex flex-col ">
              {categoryItems.map((item) => (
                <Link
                  key={item.path}
                  href={`projects?ategory=${item.path}`}
                  className="text-lg leading-8 group relative link-before capitalize w-fit"
                >
                  {item.pathName}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <hr className="my-5" />
        <div className="flex justify-between items-center ">
          <p>© {year} MD. Al-Habib</p>
          <div className="flex gap-4">
            <Link
              target="_blank"
              href={"https://www.linkedin.com/in/alhabib5565/"}
            >
              <Image height={30} width={30} src={linkedin} alt="" />
            </Link>
            <Link target="_blank" href={"https://github.com/alhabib5565"}>
              <Image height={30} width={30} src={github} alt="" />
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
