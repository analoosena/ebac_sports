import { configureStore } from '@reduxjs/toolkit'
import carrinhoSlice from './Carrinho/reducer'
import api from '../services/api'

const store = configureStore({
  reducer: {
    carrinho: carrinhoSlice.reducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})
export type RootState = ReturnType<typeof store.getState>
export default store
