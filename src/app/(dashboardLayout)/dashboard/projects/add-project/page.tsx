"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues } from "react-hook-form";

import { Button } from "@/components/ui/button";

import MyForm from "@/components/form/MyForm";
import MyInput from "@/components/form/MyInput";
import MyTextarea from "@/components/form/MyTextarea";
import { MySelect } from "@/components/form/MySelect";
import MyMuliSelect from "@/components/form/MyMuliSelect";
import {
  addProjectDefaultValues,
  addProjectFormValidation,
} from "@/validationSchema/addProjectValidation";
import { categoryOptions } from "@/selectOptions/categoryOptions";
import {
  useAddProjectMutation,
  useGetAllProjectsQuery,
} from "@/redux/api/projectApi";
import { useRouter } from "next/navigation";

const CreateProjectPage = () => {
  const router = useRouter();
  const [addProject] = useAddProjectMutation();
  const { data, isLoading } = useGetAllProjectsQuery({});
  console.log(data);

  const onSubmit = async (values: FieldValues) => {
    const response = await addProject(values);
    if (response?.data) {
      router.push("/dashboard/projects");
    }
  };

  return (
    <div className="max-w-5xl mx-auto bg-slate-800 p-4 rounded-md mt-10">
      <MyForm
        defaultValues={addProjectDefaultValues}
        resolver={zodResolver(addProjectFormValidation)}
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
