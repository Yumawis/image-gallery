import { baseAPi } from "../store/baseApi";

export const photoService = baseAPi.injectEndpoints({
  endpoints: (builder) => ({
    uploadPhoto: builder.mutation({
      query: ({ userId, base64Image }) => ({
        url: `photo/upload/${userId}`,
        method: "POST",
        body: { base64Image },
      }),
      transformResponse: (response) => response?.data,
      transformErrorResponse: (response) => response?.data,
      invalidatesTags: (result, error, { userId }) => [
        { type: "Photo", id: userId },
      ],
    }),

    getPhotoByUser: builder.query({
      query: (userId) => ({
        url: `photo/${userId}`,
        method: "GET",
      }),
      transformResponse: (response) => response?.data?.result,
      transformErrorResponse: (response) => response?.data,
      providesTags: (result, error, userId) => [{ type: "Photo", id: userId }],
    }),
  }),
});

export const { useUploadPhotoMutation, useGetPhotoByUserQuery } = photoService;
