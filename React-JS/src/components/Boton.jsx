export default function Boton({color, texto, onClick}) {
  return (
    <div>
      <button style={{ backgroundColor: color }} onClick={onClick}>
        {texto}
        </button>
    </div>
  )
}