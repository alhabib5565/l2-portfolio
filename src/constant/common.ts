// import { HomeIcon, ProjectIcon, BlogIcon, AboutIcon, ContactIcon, FrontendIcon, FullStackIcon, DraggableIcon, BackendIcon } from 'lucid-react';

import { Book, ContactIcon, HomeIcon, ProjectorIcon, User } from "lucide-react";

export const navItems = [
    {
        path: "/",
        pathName: "Home",
        Icon: HomeIcon,
    },
    {
        path: "/projects",
        pathName: "Projects",
        Icon: ProjectorIcon,
    },
    {
        path: "/blogs",
        pathName: "Blogs",
        Icon: Book,
    },
    {
        path: "/about",
        pathName: "About",
        Icon: User,
    },
    {
        path: "/contact",
        pathName: "Contact",
        Icon: ContactIcon,
    },
];

export const categoryItems = [
    {
        path: "front-end",
        pathName: "Frontend",
        // Icon: FrontendIcon,
    },
    {
        path: "full-stack",
        pathName: "Full-Stack",
        // Icon: FullStackIcon,
    },
    {
        path: "draggable",
        pathName: "Draggable",
        // Icon: DraggableIcon,
    },
    {
        path: "backend",
        pathName: "Backend",
        // Icon: BackendIcon,
    },
];
