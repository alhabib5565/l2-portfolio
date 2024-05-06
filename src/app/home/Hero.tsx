import Container from "@/components/shared/Container";
import { cn } from "@/lib/utils";
import React from "react";
import hero from "../../assets/hero.jpg";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <Container>
      <div className={cn("flex justify-between gap-8")}>
        <div className="max-w-[550px] w-full flex flex-col">
          <h1 className="text-[40px] md:text-[60px] font-[800] tracking-[1px] mt-10">
            <span>Hello, I’m </span>
            <span className="bg-gradient-to-r from-[#D899FF] via-[#D660FF] to-[#FF5133] text-transparent bg-clip-text">
              Habib!
            </span>
          </h1>
          <h2 className="text-[22px]">
            I’m a Frontend Web Developer, MERN Stack Web Developer
          </h2>
          <div className="mt-4 flex items-center gap-6">
            <Button>My resume</Button>
            <Button variant="outline" className="bg-transparent">
              Show projects
            </Button>
          </div>
        </div>
        <div className="max-w-[440px] w-full">
          <Image
            style={{
              height: "440px",
              width: "100%",
            }}
            className="rounded-full"
            src={hero}
            alt=""
          />
        </div>
      </div>
    </Container>
  );
};

export default Hero;
