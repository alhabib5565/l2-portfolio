import { z } from "zod";

export const addProjectFormValidation = z.object({
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


export const addProjectDefaultValues = {
    name: "name",
    category: "categoy",
    description: "des",
    liveUrl: "https://ww",
};