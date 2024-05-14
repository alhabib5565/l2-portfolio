"use strict"; // Use strict mode to enforce stricter parsing and error handling
"use client";
import { FieldValues } from "react-hook-form";
import React, { useState, useRef } from "react";
import dynamic from "next/dynamic";
import MyForm from "@/components/form/MyForm";
import MyInput from "@/components/form/MyInput";
import { toast } from "sonner";
import { useCreateBlogMutation } from "@/redux/api/blogApi";
import AddImage from "@/components/shared/AddImage";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });

const blogDefaultValue = {
  blogTitle: "",
  description: "",
  blogImage: "",
};
const AddBlog = () => {
  const [imageUrl, setImageUrl] = useState("");
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const [createBlog] = useCreateBlogMutation();
  const router = useRouter();

  const handleToSubmit = async (values: FieldValues) => {
    const Blog = {
      blogTitle: values.blogTitle,
      description: content,
      blogImage: imageUrl || "",
    };
    const res = await createBlog(Blog).unwrap();
    console.log(res);
    if (res.success) {
      toast.success(res?.message);
      router.push("/dashboard/blogs");
    }
  };
  return (
    <div className="max-w-5xl mx-auto bg-slate-800 shadow-md rounded-lg p-6 mt-10">
      <h1 className="text-lg font-semibold">Add a new blog</h1>

      <hr className="mb-5 mt-2 border border-gray-600" />
      <MyForm onSubmit={handleToSubmit} defaultValues={blogDefaultValue}>
        <div className="  h-full space-y-10">
          <div className=" space-y-4">
            <div className=" ">
              <MyInput
                label="Blog Title"
                name="blogTitle"
                placeholder="Enter your blog title"
                type="text"
              />
            </div>

            <div className="text-slate-800">
              <JoditEditor
                ref={editor}
                value={content}
                onBlur={(newContent) => setContent(newContent)}
                onChange={(newContent) => setContent(newContent)}
              />
            </div>
            <div className="mt-2">
              <AddImage imageUrl={imageUrl} setImageUrl={setImageUrl} />
            </div>
          </div>

          <div className="flex justify-end">
            <Button type="submit">Submit</Button>
          </div>
        </div>
      </MyForm>
    </div>
  );
};

export default AddBlog;
