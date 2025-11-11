import './App.css'
import { Footer } from './components/Footer/Footer'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { ItemDetailContainer } from './components/ItemDetailConteiner/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext/CartProvider'
import { Cart } from './components/Cart/Cart'
import { ProductFormContainer } from './components/adminComponents/ProductFormContainer/ProductFormContainer'
import { Login } from './components/Login/Login'
import { RutaProtegida } from './components/RutaProtegida/RutaProtegida'
import { AdminLayout } from './layouts/AdminLayout'
import { MainLayout } from './layouts/MainLayout'

export default function App() {

  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route path="/" element={<ItemListContainer
                titulo="Bienvenidos a mi tienda"
              />} />
              <Route path="/category/:category" element={<ItemListContainer
                titulo="Bienvenidos a mi tienda"
              />} />
              <Route path="/detail/:id" element={<ItemDetailContainer />} />
              <Route path="/carrito" element={<Cart />} />
            </Route>

            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<Login />} />
              <Route path="alta-productos" element={
                <RutaProtegida>
                  <ProductFormContainer />
                </RutaProtegida>} />
            </Route>
          </Routes>
          <Footer />
        </CartProvider>
      </BrowserRouter>
    </>
  )
}

