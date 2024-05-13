import type { Metadata } from "next";
import "./globals.css";
import { K2d } from "@/lib/font";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import ReduxProvider from "@/providers/ReduxProvider";

export const metadata: Metadata = {
  title: "Portfoli",
  description: "MD. Al-Habib (MERN stack developer)",
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
          {children}
        </body>
      </html>
    </ReduxProvider>
  );
}
