import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type CarrinhoState = {
  itens: Produto[]
  favoritos: Produto[]
  valorTotal: number
}
const initialState: CarrinhoState = {
  itens: [],
  favoritos: [],
  valorTotal: 0
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<Produto>) => {
      const ItemJaAdd = state.itens.find(
        (produto) => produto.id === action.payload.id
      )
      if (ItemJaAdd) {
        ItemJaAdd.quantidade += 1
      } else {
        state.itens.push({ ...action.payload, quantidade: 1 })
      }
    },
    favoritar: (state, action: PayloadAction<Produto>) => {
      const itemFavoritado = state.favoritos.some(
        (item) => item.id === action.payload.id
      )
      if (itemFavoritado) {
        state.favoritos = state.favoritos.filter(
          (item) => item.id !== action.payload.id
        )
      } else {
        state.favoritos.push(action.payload)
      }
    }
  }
})
export const { adicionar, favoritar } = carrinhoSlice.actions
export default carrinhoSlice
