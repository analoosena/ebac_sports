import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Produto } from '../App'

const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api'
  }),
  tagTypes: ['Produtos'],
  endpoints: (builder) => ({
    getProdutos: builder.query<Produto[], void>({
      query: () => '/ebac_sports',
      providesTags: ['Produtos']
    })
  })
})

export const { useGetProdutosQuery } = api
export default api
