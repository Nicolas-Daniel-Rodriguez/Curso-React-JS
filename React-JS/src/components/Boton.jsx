export default function Boton({color, texto, onClick}) {
  return (
    <div>
      <button style={{ backgroundColor: color, margin: '0.2rem' }} onClick={onClick}>
        {texto}
        </button>
    </div>
  )
}