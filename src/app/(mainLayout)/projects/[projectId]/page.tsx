import Container from "@/components/shared/Container";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type TParams = {
  params: {
    projectId: string;
  };
};

const ProjectDetailsPage = async ({ params }: TParams) => {
  const response = await fetch(
    `https://portfolio-server-six-phi.vercel.app/api/v1/projects/${params?.projectId}`
  );
  const project = await response.json();
  console.log(project);
  return (
    <Container className="mt-10">
      <h1 className="uppercase text-2xl md:text-[35px] lg:text-[50px] leading-tight font-bold mb-4">
        {project?.data?.name}
      </h1>
      <div className="h-[300px] md:h-[500px] overflow-hidden relative">
        <Image
          style={{
            width: "100%",
          }}
          width={300}
          className="rounded-md bg-contain"
          height={300}
          src={project?.data?.image}
          alt=""
        />
        <span className="absolute rotate-45 -top-8 text-center capitalize origin-top-left -right-[90px] w-[200px] px-4 py-1.5 text-lg border-primary border-2 bg-[#DC5847] ">
          {project?.data?.category}
        </span>
      </div>
      <div className="mt-4 space-y-4">
        <div>
          <h1 className=" text-2xl md:text-[35px] font-semibold mb-4">
            Project Overview
          </h1>
          <p className="text-lg text-gray-300 font-medium">
            {project.data?.description}
          </p>
        </div>
        <div>
          <h1 className=" text-2xl md:text-[35px] font-semibold mb-4">
            Technology Used
          </h1>
          <div className="flex flex-wrap gap-2 mt-4">
            {project.data?.technologies.map((item: any) => (
              <span
                key={item.label}
                className="px-5 py-2 text-lg rounded-full border-primary border-2 bg-transparent b-[#DC5847] bg-opacity-20"
              >
                {item?.label}
              </span>
            ))}
          </div>
        </div>
        <div>
          <h1 className=" text-2xl md:text-[35px] font-semibold mb-4">Links</h1>
          <div className="flex  gap-4">
            <Link target="_blank" href={project?.data?.liveUrl || ""}>
              <span className="bg-animate-btn px-5 py-2 text-lg font-semibold bg-primary">
                Live
              </span>
            </Link>
            {project?.data?.clientCode && (
              <Link target="_blank" href={project.data.clientCode}>
                <span className="bg-animate-btn bg-animate-btn px-5 py-2 text-lg font-semibold bg-primary">
                  Client Code
                </span>
              </Link>
            )}
            {project?.data?.serverCode && (
              <Link target="_blank" href={project.data.serverCode}>
                <span className="bg-animate-btn bg-animate-btn px-5 py-2 text-lg font-semibold bg-primary">
                  Server Code
                </span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProjectDetailsPage;
