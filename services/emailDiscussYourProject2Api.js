import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";

export const emailDiscussYourProject2Api = createApi({

  reducerPath: "emailDiscussYourProject2Api",
  refetchOnFocus: true,
  refetchOnMountOrArgChange: true,
  refetchOnReconnect: true,
  tagTypes: ['Posts'],
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_APP_API,
  }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  endpoints: (builder) => ({
    email: builder.query({
      query: (body) => {
        return {
          url: '/email_discuss_your_project_2/',
          method: 'POST',
          body,
        }
      }
    })
  }),
});

export const { useEmailQuery } = emailDiscussYourProject2Api;
