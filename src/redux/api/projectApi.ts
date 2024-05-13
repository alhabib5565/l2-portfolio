import { baseApi } from "./baseApi";


const projectApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        addProject: builder.mutation({
            query: (data) => ({
                method: "POST",
                url: '/projects/add-project',
                body: data,
            }),
            invalidatesTags: ['projects']
        }),
        getAllProjects: builder.query({
            query: () => ({
                url: '/projects'
            })
        })
    })
})

export const { useAddProjectMutation, useGetAllProjectsQuery } = projectApi