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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { useAddSkillMutation } from "@/redux/api/skillsApi";
import { TOptions } from "@/type/common";
import { uploadImage } from "@/utils/uploadImage";
import { zodResolver } from "@hookform/resolvers/zod";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

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
  const router = useRouter();
  const [addSkill] = useAddSkillMutation();
  const [imageUrl, setImageUrl] = useState("");
  const [image, setImage] = useState<File | null>();
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImage(e.target.files ? e.target.files[0] : null);
  };

  useEffect(() => {
    const handleGetImageUrl = async () => {
      if (image) {
        setLoading(true);
        const data = await uploadImage(image);
        setImageUrl(data.display_url);
        setImage(null);
        setLoading(false);
      }
    };
    handleGetImageUrl();
  }, [image, setImageUrl]);
  const onSubmit = async (values: FieldValues) => {
    values.skillAvater = imageUrl;
    const response = await addSkill(values);
    if (response?.data) {
      toast.success("Skill create succesfull");
    }
    console.log(response);
    router.refresh();
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
              <div className="col-span-2 text-white">
                <Label className="pb-2" htmlFor="picture">
                  Skill avater
                </Label>
                <Input
                  onChange={handleImageChange}
                  name="skillAvater"
                  type="file"
                  className="bg-transparent mt-2"
                />
              </div>
              <div className="col-span-2 flex justify-end mt-5">
                <Button disabled={loading}>Add Skill</Button>
              </div>
            </div>
          </MyForm>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddSkillModal;
