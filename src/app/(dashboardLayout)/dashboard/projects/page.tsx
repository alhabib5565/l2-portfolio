"use client";
import ProjectCard from "@/components/shared/ProjectCard";
import { Button } from "@/components/ui/button";
import { useGetAllProjectsQuery } from "@/redux/api/projectApi";
import { TProject } from "@/type/common";
import { Plus } from "lucide-react";
import Link from "next/link";
import React from "react";

const DashboardProjectsPage = () => {
  const { data: projects, isLoading } = useGetAllProjectsQuery({});

  if (isLoading) {
    return <p>loading...</p>;
  }

  return (
    <div>
      <div className="bg-slate-800 px-4 py-3 rounded-md flex justify-between items-center">
        <h1 className="text-lg font-semibold">Projects</h1>
        <Link href="projects/add-project">
          <Button>
            ADD <Plus size={15} />
          </Button>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 md:gap-6 mt-14 mx-auto">
        {/* card */}
        {projects.data &&
          projects.data.map((item: TProject) => (
            <ProjectCard project={item} key={item.name} />
          ))}
      </div>
    </div>
  );
};

export default DashboardProjectsPage;
