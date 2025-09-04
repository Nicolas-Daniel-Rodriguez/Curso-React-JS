import Boton from './Boton'

export default function Tarjeta(props) {
  return (
    <div style={{ border: '1px solid green', padding: '1rem', margin: '1rem' }}>
      <h2>{props.titulo}</h2>
      <p>{props.descripcion}</p>
      <Boton color={props.color} texto={props.texto} />
    </div>
  )
}