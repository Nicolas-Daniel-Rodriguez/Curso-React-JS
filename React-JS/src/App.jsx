import './App.css'
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer' 
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { ItemDetailContainer } from './components/ItemDetailConteiner/ItemDetailContainer'

export default function App() {

  return (
    <>
      <div>
        <Header />
        <ItemListContainer 
          titulo="Bienvenidos a mi tienda" 
        />
        <ItemDetailContainer />
        <Footer />
      </div>
    </>
  )
}

