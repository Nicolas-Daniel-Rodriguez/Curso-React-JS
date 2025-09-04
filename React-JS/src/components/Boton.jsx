export default function Boton({color, texto}) {
  return (
    <div>
      <button style={{ backgroundColor: color }}>
        {texto}
        </button>
    </div>
  )
}