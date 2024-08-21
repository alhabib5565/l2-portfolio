import Container from "@/components/shared/Container";
import SectionHeader from "./SectionHeader";
import { TProject } from "@/type/common";
import ProjectCard from "@/components/shared/ProjectCard";
const Projects = async () => {
  const response = await fetch(
    "https://portfolio-server-six-phi.vercel.app/api/v1/projects"
  );
  const projects = await response.json();
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-10 mx-auto"
          style={{ perspective: "1000px" }}
        >
          {/* card */}
          {projects.data &&
            projects.data
              .slice(0, 6)
              .map((item: TProject) => (
                <ProjectCard project={item} key={item.name} />
              ))}
        </div>
      </Container>
    </div>
  );
};

export default Projects;
