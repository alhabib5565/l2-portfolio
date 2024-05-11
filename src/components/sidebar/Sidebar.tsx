import { BookOpen, Code, Layers } from "lucide-react";
import MobileSidebar from "./MobileSidebar";
import DesktopSidebar from "./DesktopSidebar";

export const sidebarItems = [
  {
    label: "Projects",
    href: "/dashboard/projects",
    icon: Layers,
  },
  {
    label: "Skills",
    href: "/dashboard/skills",
    icon: Code,
  },
  {
    label: "Blogs",
    href: "/dashboard/blogs",
    icon: BookOpen,
  },
];

const Sidebar = () => {
  return (
    <div>
      <div className="md:hidden">
        <MobileSidebar />
      </div>
      <div className="hidden md:flex">
        <DesktopSidebar />
      </div>
    </div>
  );
};

export default Sidebar;
