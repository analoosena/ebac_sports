import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api'
  }),
  tagTypes: ['Produtos'], // Adiciona suporte a cache
  endpoints: (builder) => ({
    getProdutos: builder.query({
      query: () => '/ebac_sports',
      providesTags: ['Produtos']
    })
  })
})

export const { useGetProdutosQuery } = api
export default api
