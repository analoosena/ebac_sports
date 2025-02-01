import { useSelector } from 'react-redux'

import { RootState } from '../../redux/store'
import * as S from './styles'
import cesta from '../../assets/cesta.png'
import { paraReal } from '../Produto'

const Header = () => {
  const itensNoCarrinho = useSelector(
    (state: RootState) => state.carrinho.itens
  )
  const itensFavoritados = useSelector(
    (state: RootState) => state.carrinho.favoritos
  )

  const valorTotal = itensNoCarrinho.reduce(
    (acc, item) => acc + item.preco * item.quantidade,
    0
  )
  const totalItens = itensNoCarrinho.reduce(
    (acc, item) => acc + item.quantidade,
    0
  )

  return (
    <S.Header>
      <h1>EBAC Sports</h1>
      <div>
        <span>{itensFavoritados.length} favoritos</span>
        <img src={cesta} />
        <span>
          {totalItens} itens, valor total: {paraReal(valorTotal)}
        </span>
      </div>
    </S.Header>
  )
}

export default Header
