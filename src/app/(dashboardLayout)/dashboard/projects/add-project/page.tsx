"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, FormProvider, useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";

import MyForm from "@/components/form/MyForm";
import MyInput from "@/components/form/MyInput";
import MyTextarea from "@/components/form/MyTextarea";

const formSchema = z.object({
  name: z.string().min(1, {
    message: "Project name is required",
  }),
  category: z.string().min(1, {
    message: "Project category is required",
  }),
  description: z.string().min(1, {
    message: "Project description is required",
  }),
});

const CreateProjectPage = () => {
  const onSubmit = (values: FieldValues) => {
    console.log(values);
  };
  const defaultValues = {
    name: "",
    category: "",
    description: "",
  };
  return (
    <MyForm
      defaultValues={defaultValues}
      resolver={zodResolver(formSchema)}
      onSubmit={onSubmit}
    >
      <MyInput
        name="name"
        label="Project Name"
        type="text"
        placeholder="Enter project name"
      />
      <MyInput
        name="category"
        label="Project Category"
        type="text"
        placeholder="Enter Category name"
      />
      <MyTextarea
        name="description"
        label="Project description"
        placeholder="Enter project description"
      />
      <Button type="submit">Submit</Button>
    </MyForm>
  );
};

export default CreateProjectPage;

// const MyInput = () => {
//   const { control } = useFormContext();
//   return (
//     <FormField
//       control={control}
//       name="usernames"
//       render={({ field }) => (
//         <FormItem>
//           <FormLabel>Username</FormLabel>
//           <FormControl>
//             <Input placeholder="shadcn" {...field} />
//           </FormControl>
//           <FormDescription>This is your public display name.</FormDescription>
//           <FormMessage />
//         </FormItem>
//       )}
//     />
//   );
// };
