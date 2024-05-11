"use client";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "../ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import logo from "../../assets/logo.png";
import { sidebarItems } from "./Sidebar";
const MobileSidebar = () => {
  const pathName = usePathname();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          className="rounded-full fixed top-3 left-3"
          size={"icon"}
          variant="ghost"
        >
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent
        hideClose
        className="bg-slate-800 px-3 py-4 w-[300px]"
        side="left"
      >
        <SheetHeader className="flex flex-row justify-between items-center space-y-0">
          <Image className="" height={40} width={70} src={logo} alt="" />

          <SheetClose asChild>
            <Button className="h-7 w-7 p-0" variant="ghost">
              <X size={20} />
            </Button>
          </SheetClose>
        </SheetHeader>
        <hr className="mt-3 mb-6" />
        <div className="flex flex-col gap-2">
          {sidebarItems.map((item, index) => (
            <SheetClose key={index} asChild>
              <Link href={item.href}>
                <Button
                  variant={pathName === item.href ? "secondary" : "ghost"}
                  className="w-full flex justify-start gap-2 uppercase"
                >
                  <item.icon size={20} />
                  {item.label}
                </Button>
              </Link>
            </SheetClose>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
