import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";
import React from "react";

const DashboardProjectsPage = () => {
  return (
    <div>
      <div className="bg-slate-800 px-4 py-3 rounded-md flex justify-between items-center">
        <h1 className="text-lg font-semibold">Add A New Project</h1>
        <Link href="projects/add-project">
          <Button>
            ADD <Plus size={15} />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default DashboardProjectsPage;
