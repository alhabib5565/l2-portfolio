"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Plus } from "lucide-react";
import { useGetAllBlogsQuery } from "@/redux/api/blogApi";
import Image from "next/image";
import Skeleton from "@/components/shared/Skeleton";
import BlogCard from "@/components/shared/BlogCard";
import { TBlog } from "@/type/common";

const Page = () => {
  const { data: blogs, isLoading } = useGetAllBlogsQuery({});
  console.log(blogs);
  return (
    <div className="">
      <div className="bg-slate-800 px-4 py-3 rounded-md flex justify-between items-center">
        <h1 className="text-lg font-semibold">Blogs</h1>
        <Link href="blogs/add-blog">
          <Button>
            ADD BLOG
            <Plus size={15} />
          </Button>
        </Link>
      </div>
      {isLoading && !blogs ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mt-5 gap-4">
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mt-5 gap-4">
          {blogs.data.map((item: TBlog) => (
            <BlogCard blogInfo={item} key={item._id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Page;
