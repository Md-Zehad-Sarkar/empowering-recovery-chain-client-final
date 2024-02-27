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
  }),
});

export const { useCreateUserMutation, useLoginUserMutation } = authApi;
