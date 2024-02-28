import { baseApi } from "@/redux/api/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createUser: builder.mutation({
      query: (userInfo) => {
        return {
          url: "/api/v1/register",
          method: "POST",
          body: userInfo,
        };
      },
    }),
    loginUser: builder.mutation({
      query: (userInfo) => {
        return {
          url: "/api/v1/login",
          method: "POST",
          body: userInfo,
        };
      },
    }),

    createVolunteer: builder.mutation({
      query: (data) => {
        return {
          url: "/api/v1/create-volunteer",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["volunteers"],
    }),

    getAllVolunteers: builder.query({
      query: () => {
        return {
          url: "/api/v1/volunteers",
          method: "GET",
        };
      },
      providesTags: ["volunteers"],
    }),
  }),
});

export const {
  useCreateUserMutation,
  useLoginUserMutation,
  useCreateVolunteerMutation,
  useGetAllVolunteersQuery,
} = authApi;
