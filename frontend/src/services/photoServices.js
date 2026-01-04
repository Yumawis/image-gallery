import { baseAPi } from "../store/baseApi";

export const photoService = baseAPi.injectEndpoints({
  endpoints: (builder) => ({
    uploadPhoto: builder.mutation({
      query: ({ userId, imageBase64 }) => ({
        url: `photo/upload/${userId}`,
        method: "POST",
        body: { imageBase64 },
      }),
      transformResponse: (response) => response?.data,
      transformErrorResponse: (response) => response?.data,
    }),

    getPhotoByUser: builder.query({
      query: (userId) => ({
        url: `photo/${userId}`,
        method: "GET",
      }),
      transformResponse: (response) => response?.data?.result,
      transformErrorResponse: (response) => response?.data,
    }),
  }),
});

export const { useUploadPhotoMutation, useGetPhotoByUserQuery } = photoService;
