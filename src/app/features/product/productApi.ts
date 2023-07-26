import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ICard } from "../../../types/ICard";

const baseQuery = fetchBaseQuery({
  baseUrl:
    "https://sneakers-shop-ac24c-default-rtdb.europe-west1.firebasedatabase.app",
});

export const productApi = createApi({
  baseQuery,
  endpoints: (builder) => ({
    getProducts: builder.query<ICard[], void>({
      query: () => "/sneakers.json",
    }),
  }),
});

export const { useGetProductsQuery } = productApi;
