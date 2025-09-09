import './App.css'
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer' 
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'

export default function App() {
  const arrayProductos = [
    {
      id: 1,
      nombre: 'Producto 1',
      precio: 100,
      descripcion: 'Descripción del producto 1'
    },
    {
      id: 2,
      nombre: 'Producto 2',
      precio: 200,
      descripcion: 'Descripción del producto 2'
    },
    {
      id: 3,
      nombre: 'Producto 3',
      precio: 300,
      descripcion: 'Descripción del producto 3'
    }
  ]

  return (
    <>
      <div>
        <Header />
        <ItemListContainer 
          titulo="Bienvenidos a mi tienda" 
          productos={arrayProductos} 
        />
        <Footer />
      </div>
    </>
  )
}

