import Container from "@/components/shared/Container";
import SectionHeader from "@/components/shared/SectionHeader";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const AboutMe = () => {
  const skills = [
    "HTML",
    "CSS",
    "Tailwind",
    "Bootstrap",
    "Javascript",
    "Typescript",
    "React.js",
    "Next.js",
    "Redux",
    "Axios",
    "Firebase",
    "Node.js",
    "Express",
    "MongoDB",
    "Mongoosh",
    "JWT",
  ];

  const s = [
    {
      title: "HTML",
      color: "bg-orange-500",
    },
  ];

  const tools = ["GitHub", "VS Code", "Postman", "Vercel", "Netlify"];
  return (
    <div className="mt-20 py-[50px]">
      <Container>
        <SectionHeader
          title="About Me"
          description=" Here you will find more information about me, what I do, and my
            current skills mostly in terms of programming and technology"
        />

        <div className="flex justify-between gap-10 md:gap-14">
          <div className="flex-1">
            <h1 className="text-[28px] mb-3 font-bold text-slate-300">
              Get to know me!
            </h1>
            <p className="text-lg mb-3 text-slate-300 text-justify">
              I&apos;m a{" "}
              <span className="text-white text-[19px] font-medium">
                Frontend Focused Web Developer
              </span>{" "}
              building and managing the Front-end of Websites and Web
              Applications that leads to the success of the overall product.
              Check out some of my work in the{" "}
              <Link href="/projects">
                <span className="text-blue-500 hover:underline">projects</span>{" "}
              </Link>
              section.
            </p>
            <p className="text-lg mb-5 text-slate-300 text-justify">
              I&apos;m open to
              <span className="text-white text-[19px] font-medium">
                {" "}
                Job{" "}
              </span>{" "}
              opportunities where I can contribute, learn and grow. If you have
              a good opportunity that matches my skills and experience then
              don&apos;t hesitate to contact me
              <Link href="/contact">
                {" "}
                <span className="text-blue-500 hover:underline">
                  contact
                </span>{" "}
              </Link>
              me.
            </p>
            <Button>Contact</Button>
          </div>

          <div className=" flex-1">
            <h1 className="text-[28px] mb-3 font-bold text-slate-300">
              My skills
            </h1>
            <div>
              <h3 className="text-[16px] font-extrabold ">Technology</h3>
              <div className="mt-3 flex gap-4 flex-wrap">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-[16px] font-semibold py-2 px-5 rounded-md bg-white text-[#666]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-4">
              <h3 className="text-[16px] font-extrabold ">Tools</h3>
              <div className="mt-3 flex gap-4 flex-wrap">
                {tools.map((tool) => (
                  <span
                    key={tool}
                    className="text-[16px] font-semibold py-2 px-5 rounded-md bg-white text-[#666]"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutMe;