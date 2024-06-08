import Container from "@/components/shared/Container";
import SectionHeader from "./SectionHeader";
import { TProject } from "@/type/common";
import ProjectCard from "@/components/shared/ProjectCard";
const Projects = async () => {
  const response = await fetch(
    "https://portfolio-server-six-phi.vercel.app/api/v1/projects"
  );
  const projects = await response.json();
  // const projects = [
  //   {
  //     name: "Tripsure (team project)",
  //     categroy: "Team project",
  //     live_link: "https://tripsure-client.web.app/",
  //     clien_code: "https://github.com/Sayemsaadat0/tripsure-client",
  //     server_code: "https://github.com/Sayemsaadat0/tripsure-server",
  //     technologies: [
  //       "HTML",
  //       "Tailwind",
  //       "Ant Design",
  //       "Firebase",
  //       "React",
  //       "Express",
  //       "Mongodb",
  //       "Redux",
  //     ],
  //     image: tripsure,
  //   },
  //   {
  //     name: "E_Class",
  //     categroy: "full stack project",
  //     live_link: "https://edu-clas.web.app/",
  //     clien_code: "https://github.com/alhabib5565/summer_camp_client",
  //     server_code: "https://github.com/alhabib5565/summer_camp_server",
  //     technologies: [
  //       "HTML",
  //       "Tailwind",
  //       "daisyUI",
  //       "Firebase",
  //       "React",
  //       "Express",
  //       "Mongodb",
  //       "JWT",
  //       "TanStack Query",
  //     ],
  //     image: eclass,
  //   },
  //   // {
  //   //     name: "Toy Robot",
  //   //     categroy: 'front end',
  //   //     live_link: 'https://ema-john-simple-with-fir-a29b0.web.app/',
  //   //     clien_code: 'https://github.com/alhabib5565/toy_robot_client/',
  //   //     server_code: 'https://github.com/alhabib5565/toy_robot_server/',
  //   //     technologies: ['HTML', "Tailwind", "daisyUI", "Firebase", "React", "Express", "Mongodb"],
  //   //     image: robotToy
  //   // },
  //   {
  //     name: "Collage Admission",
  //     categroy: "front end",
  //     live_link: "https://collage-app-40b89.web.app/",
  //     clien_code: "https://github.com/alhabib5565/collage-app",
  //     server_code: "https://github.com/alhabib5565/collage-app-server",
  //     technologies: [
  //       "HTML",
  //       "Tailwind",
  //       "daisyUI",
  //       "Firebase",
  //       "React",
  //       "Express",
  //       "Mongodb",
  //     ],
  //     image: collage_addmission,
  //   },
  // ];
  return (
    <div className="py-[50px]">
      <Container>
        <SectionHeader
          title="PROJECTS
"
          description="Here you will find some of the personal projects that I created with each project containing its own case study
"
        />
        <div
          className="grid grid-cols-1 gap-4 md:gap-6 mt-10 mx-auto"
          style={{ perspective: "1000px" }}
        >
          {/* card */}
          {projects.data &&
            projects.data
              .slice(0, 3)
              .map((item: TProject) => (
                <ProjectCard project={item} key={item.name} />
              ))}
        </div>
      </Container>
    </div>
  );
};

export default Projects;
