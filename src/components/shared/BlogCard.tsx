import { TBlog } from "@/type/common";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogCard = ({ blogInfo }: { blogInfo: TBlog }) => {
  return (
    <Link
      href={`blogs/${blogInfo._id}`}
      className="border border-slate-600 rounded-t-md overflow-hidden"
    >
      <div className="h-[250px]  overflow-hidden">
        <Image
          style={{ width: "100%", height: "100%" }}
          width={200}
          height={200}
          src={
            blogInfo?.blogImage ||
            "https://i.ibb.co/bBTLWj8/not-found-image.jpg"
          }
          alt=""
        />
      </div>
      <div className="p-4">
        <h1 className="text-[24px] font-extrabold">{blogInfo?.blogTitle}</h1>
      </div>
    </Link>
  );
};

export default BlogCard;
