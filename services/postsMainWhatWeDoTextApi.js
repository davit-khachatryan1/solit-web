import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";

export const postsMainWhatWeDoTextApi = createApi({

  reducerPath: "postsMainWhatWeDoTextApi",
  refetchOnFocus: false,
  refetchOnMountOrArgChange: false,
  refetchOnReconnect: false,
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_APP_API,
    
  }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  endpoints: (builder) => ({
    posts: builder.query({ query: () => "/main_what_we_do_text/" }),
  }),
});

export const { usePostsQuery } = postsMainWhatWeDoTextApi;
