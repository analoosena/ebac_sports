import { Provider } from 'react-redux'

import Header from './components/Header'
import Produtos from './containers/Produtos'

import { GlobalStyle } from './styles'
import store from './redux/store'

export type Produto = {
  id: number
  nome: string
  preco: number
  imagem: string
  quantidade: number
}

function App() {
  return (
    <>
      <Provider store={store}>
        <GlobalStyle />
        <div className="container">
          <Header />
          <Produtos />
        </div>
      </Provider>
    </>
  )
}

export default App
