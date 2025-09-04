import './App.css'
import Lista from './components/Lista'
import Tarjeta from './components/Tarjeta'
import Boton from './components/Boton'

export default function App() {

  return (
    <>
      <div>
        <h1>Clase 2 - Nicolas D. Rodriguez</h1>
        <h2>Ejercicio 1</h2>
        <Lista items={['Manzanas ', 'Bananas', 'Naranjas']} />
        <Boton color="orange" texto="Ver lista completa..." />
        <h2>Ejercicio 2</h2>
        <Tarjeta 
          titulo="Tarjeta 1" 
          descripcion="Esta es la tarjeta 1" 
          color="green" 
          texto="Ver más" 
        />
        <Tarjeta 
          titulo="Tarjeta 2" 
          descripcion="Esta es la tarjeta 2" 
          color="blue" 
          texto="Ver más" 
        />
      </div>
    </>
  )
}

