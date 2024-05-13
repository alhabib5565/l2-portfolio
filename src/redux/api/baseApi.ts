import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const baseApi = createApi({
    reducerPath: 'portfolioApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://portfolio-server-six-phi.vercel.app/api/v1' }),
    endpoints: () => ({}),
    tagTypes: ['projects', 'skills', 'blog', 'experince']
})