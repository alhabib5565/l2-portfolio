import { baseApi } from "./baseApi";


const skillsApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        addSkill: builder.mutation({
            query: (data) => ({
                method: "POST",
                url: '/skills/add-skill',
                body: data,
            }),
            invalidatesTags: ['skills']
        }),
        getAllSkills: builder.query({
            query: () => ({
                url: '/skills'
            }),
            providesTags: ['skills']
        })
    })
})

export const { useAddSkillMutation, useGetAllSkillsQuery } = skillsApi