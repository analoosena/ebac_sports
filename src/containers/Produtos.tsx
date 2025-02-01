// import { Produto as ProdutoType } from '../App'
import Produto from '../components/Produto'
import { useGetProdutosQuery } from '../services/api'

import * as S from './styles'

// type Props = {
//   produtos: ProdutoType[]
// }

const ProdutosComponent = () => {
  const { data: produtos, error, isLoading } = useGetProdutosQuery()

  if (isLoading) return <p>Carregando...</p>
  if (error) return <p>Erro ao carregar produtos.</p>
  return (
    <>
      <S.Produtos>
        {produtos?.map((produto) => (
          <Produto key={produto.id} produto={produto} />
        ))}
      </S.Produtos>
    </>
  )
}

export default ProdutosComponent
