import { baseApi } from "@/redux/api/baseApi";

const reviewsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getReviews: builder.query({
      query: () => ({ url: "/api/v1/reviews", method: "GET" }),
      providesTags: ["reviews"],
    }),
  }),
});
export const { useGetReviewsQuery } = reviewsApi;
export default reviewsApi.reducer;
