import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

type TContainer = {
  children: ReactNode;
  className?: string;
};

const Container = ({ children, className }: TContainer) => {
  return (
    <div className={cn("max-w-[1100px] mx-auto w-full", className)}>
      {children}
    </div>
  );
};

export default Container;
