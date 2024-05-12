"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";

import MyForm from "@/components/form/MyForm";
import MyInput from "@/components/form/MyInput";
import MyTextarea from "@/components/form/MyTextarea";
import { MySelect } from "@/components/form/MySelect";
import MyMuliSelect from "@/components/form/MyMuliSelect";

const formSchema = z.object({
  name: z.string().min(1, {
    message: "Project name is required",
  }),
  category: z.string().min(1, {
    message: "Project name is required",
  }),
  description: z.string().min(1, {
    message: "Project description is required",
  }),
  technologies: z
    .array(
      z.object({
        value: z.string(),
        label: z.string(),
      })
    )
    .nonempty(),
  liveUrl: z
    .string({
      required_error: "Project live url is requird",
    })
    .url({ message: "Invalid url" }),
  clientCode: z.string().url({ message: "Invalid url" }).optional(),
  serverCode: z.string().url({ message: "Invalid url" }).optional(),
});

const categoryOptions = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const CreateProjectPage = () => {
  const onSubmit = (values: FieldValues) => {
    console.log(values);
  };
  const defaultValues = {
    name: "name",
    category: "categoy",
    description: "des",
    liveUrl: "https://ww",
  };
  return (
    <div className="max-w-5xl mx-auto bg-slate-800 p-4 rounded-md mt-10">
      <MyForm
        defaultValues={defaultValues}
        resolver={zodResolver(formSchema)}
        onSubmit={onSubmit}
      >
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-6">
            <MyInput
              name="name"
              label="Project Name"
              type="text"
              placeholder="Enter project name"
            />
          </div>
          <div className="col-span-12 md:col-span-6">
            <MySelect
              options={categoryOptions}
              label="Select Category"
              name="category"
              placeholder="Select"
            />
          </div>
          <div className="col-span-12 ">
            <MyInput
              name="liveUrl"
              type="url"
              label="Live Url"
              placeholder="Enter live url"
            />
          </div>
          <div className="col-span-12 md:col-span-6">
            <MyInput
              name="clientCode"
              type="url"
              label="Client GitHub Url"
              placeholder="Enter client code github"
            />
          </div>
          <div className="col-span-12 md:col-span-6">
            <MyInput
              name="serverCode"
              type="url"
              label="Server GitHub Url"
              placeholder="Enter server code github"
            />
          </div>
          <div className="col-span-12">
            <MyMuliSelect
              label="Select Technologies"
              name="technologies"
              options={categoryOptions}
              placeholder=""
            />
          </div>
          <div className="col-span-12 ">
            <MyTextarea
              name="description"
              label="Project description"
              placeholder="Enter project description"
            />
          </div>
        </div>
        <div className="flex justify-end mt-6">
          <Button type="submit">Submit</Button>
        </div>
      </MyForm>
    </div>
  );
};

export default CreateProjectPage;
