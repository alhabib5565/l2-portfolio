import Container from "@/components/shared/Container";
import { convertTimee } from "@/utils/convertTime";
import Image from "next/image";
import React from "react";

type TParams = {
  params: {
    blogId: string;
  };
};

const BlogDetailsPage = async ({ params }: TParams) => {
  const response = await fetch(
    `https://portfolio-server-six-phi.vercel.app/api/v1/blogs/${params?.blogId}`
  );
  const blog = await response.json();

  //   const convertTimee = () => {
  //     const date = new Date(blog.data.createdAt);

  //     // Define options for formatting the date
  //     const options: Intl.DateTimeFormatOptions = {
  //       year: "numeric",
  //       month: "short",
  //       day: "2-digit",
  //     };

  //     // Use Intl.DateTimeFormat to format the date
  //     const formattedDate = new Intl.DateTimeFormat("en-US", options).format(
  //       date
  //     );

  //     return formattedDate;
  //   };

  //   console.log(convertTimee());

  return (
    <Container>
      <h1 className="text-center text-[35px] md:text-[50px] font-extrabold mb-4">
        {blog?.data?.blogTitle}
      </h1>
      <p className="text-center text-lg mb-4">
        {convertTimee(blog?.data?.createdAt)}
      </p>
      <div>
        <Image
          style={{
            width: "100%",
          }}
          width={300}
          className="rounded-md"
          height={300}
          src={blog?.data.blogImage}
          alt=""
        />
      </div>
      <div
        className="mt-10"
        dangerouslySetInnerHTML={{ __html: blog.data.description }}
      />
    </Container>
  );
};

export default BlogDetailsPage;
