import SectionHeader from "@/app/home/SectionHeader";
import BlogCard from "@/components/shared/BlogCard";
import Container from "@/components/shared/Container";
import { TBlog } from "@/type/common";
import React from "react";

const BlogsPage = async () => {
  const response = await fetch(
    "https://portfolio-server-six-phi.vercel.app/api/v1/blogs"
  );
  const blogs = await response.json();
  return (
    <div className="py-[50px]">
      <Container>
        <SectionHeader
          title="Blogs"
          description="Here you will find some latest blogs"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 md:gap-6 mt-10 mx-auto">
          {/* card */}
          {blogs.data &&
            blogs.data
              .slice(0, 3)
              .map((item: TBlog) => (
                <BlogCard blogInfo={item} key={item._id} />
              ))}
        </div>
      </Container>
    </div>
  );
};

export default BlogsPage;
