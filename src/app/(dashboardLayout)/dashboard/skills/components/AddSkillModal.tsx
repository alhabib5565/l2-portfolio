"use client";
import MyForm from "@/components/form/MyForm";
import MyInput from "@/components/form/MyInput";
import { MySelect } from "@/components/form/MySelect";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { TOptions } from "@/type/common";
import { zodResolver } from "@hookform/resolvers/zod";
import { Plus } from "lucide-react";
import { FieldValues } from "react-hook-form";
import { z } from "zod";

export type TSkills = {
  name: string;
  expertiseLavel: string;
};

const expertiseLavelOptions: TOptions[] = [
  {
    label: "Expert",
    value: "expert",
  },
  {
    label: "Familar",
    value: "familar",
  },
];

const addSkillFormValidationSchema = z.object({
  name: z.string().min(1, { message: "Skill name is required" }),
  expertiseLavel: z.string().min(1, { message: "Expertise lavel is required" }),
});

const defaultValue = {
  name: "",
  expertiseLavel: "",
};

const AddSkillModal = () => {
  const onSubmit = (values: FieldValues) => {
    console.log(values);
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button>
            ADD <Plus size={15} />
          </Button>
        </DialogTrigger>

        <DialogContent className={cn("bg-slate-800 max-w-xl")}>
          <DialogHeader>
            <DialogTitle>Add a new skill!!</DialogTitle>
          </DialogHeader>
          <hr />

          <MyForm
            defaultValues={defaultValue}
            resolver={zodResolver(addSkillFormValidationSchema)}
            onSubmit={onSubmit}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="col-span-2 md:col-span-1">
                <MyInput
                  type="text"
                  name="name"
                  placeholder="Enter skill name"
                  label="Skill name"
                />
              </div>
              <div className="col-span-2 md:col-span-1">
                <MySelect
                  label="Select expertise lavel"
                  name="expertiseLavel"
                  placeholder="Expertise lavel"
                  options={expertiseLavelOptions}
                />
              </div>
              <div className="col-span-2 flex justify-end mt-5">
                <Button>Add Skill</Button>
              </div>
            </div>
          </MyForm>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddSkillModal;
