// import { HomeIcon, ProjectIcon, BlogIcon, AboutIcon, ContactIcon, FrontendIcon, FullStackIcon, DraggableIcon, BackendIcon } from 'lucid-react';
import github from "../assets/icons/github.png";
import linkedin from "../assets/icons/linkedin.png";
import facebook from "../assets/icons/facebook.webp";
import twitter from "../assets/icons/twitter.png";

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
  //   {
  //     path: "/about",
  //     pathName: "About",
  //     Icon: User,
  //   },
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

export const socialLinks = [
  {
    path: "https://github.com/alhabib5565",
    name: "GitHub",
    subTitle: "Profile On GitHub",
    image: github,
  },
  {
    path: "https://www.linkedin.com/in/alhabib5565/",
    name: "Linkedin",
    subTitle: "Connect with me",
    image: linkedin,
  },
  {
    path: "https://web.facebook.com/profile.php?viewas=100000686899395&id=100071110307696",
    name: "Facebook",
    subTitle: "Connect with me",
    image: facebook,
  },
  {
    path: "https://x.com/alhabib5565?t=yHjW1TYXhC0gbzKNHbRZMA&s=09",
    name: "Twitter",
    subTitle: "Connect with me",
    image: twitter,
  },
];
