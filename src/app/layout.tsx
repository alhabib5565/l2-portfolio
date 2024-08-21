import type { Metadata } from "next";
import "./globals.css";
import { K2d } from "@/lib/font";
import ReduxProvider from "@/providers/ReduxProvider";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Portfoli",
  description:
    "MD. Al-Habib Front-End Developer || Full-Stack Developer || MERN stack developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReduxProvider>
      <html lang="en">
        <body className={`${K2d.className} bg-[#131B25] text-[#FFFFFF]`}>
          <Toaster />
          {children}
        </body>
      </html>
    </ReduxProvider>
  );
}
