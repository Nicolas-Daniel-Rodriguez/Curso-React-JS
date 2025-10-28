import './App.css'
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer' 
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { ItemDetailContainer } from './components/ItemDetailConteiner/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext/CartProvider'
import { Cart } from './components/Cart/Cart'

export default function App() {

  return (
    <>
      <BrowserRouter>
        <CartProvider>
        <Header />
        <Routes>  
          <Route path="/" element={<ItemListContainer 
          titulo="Bienvenidos a mi tienda" 
        />} /> 
          <Route path="/category/:category" element={<ItemListContainer 
          titulo="Bienvenidos a mi tienda" 
        />} />
          <Route path="/detail/:id" element={<ItemDetailContainer />}/>
          <Route path="/carrito" element={<Cart />}/>
        </Routes>
        <Footer />
        </CartProvider>
      </BrowserRouter>
    </>
  )
}

