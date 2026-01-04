import { baseAPi } from "../store/baseApi";

export const authService = baseAPi.injectEndpoints({
  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: ({ email }) => ({
        url: "auth/sign-up",
        method: "POST",
        body: { email },
      }),
      transformResponse: (response) => response?.data,
      transformErrorResponse: (response) => response?.data,
    }),

    login: builder.mutation({
      query: ({ email }) => ({
        url: "auth/login",
        method: "POST",
        body: { email },
      }),
      transformResponse: (response) => response?.data?.result,
      transformErrorResponse: (response) => response?.data,
    }),
  }),
});

export const { useSignUpMutation, useLoginMutation } = authService;
