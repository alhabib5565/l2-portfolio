"use client";
import { TOptions } from "@/type/common";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { useFormContext } from "react-hook-form";
import Select from "react-select";

type TMyMuliSelect = {
  name: string;
  label: string;
  placeholder?: string;
  options: TOptions[];
};

const MyMuliSelect = ({ name, label, options }: TMyMuliSelect) => {
  const form = useFormContext();
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field, fieldState: { error } }) => {
        return (
          <FormItem>
            <FormLabel>{label}</FormLabel>
            <FormControl>
              <Select
                {...field}
                defaultValue={[options[0]]}
                isMulti
                options={options}
                className="basic-multi-select text-slate-800"
                classNamePrefix="select"
              />
            </FormControl>
            <FormMessage>{error?.message}</FormMessage>
          </FormItem>
        );
      }}
    />
  );
};

export default MyMuliSelect;
