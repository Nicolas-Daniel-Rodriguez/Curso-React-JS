export default function Lista(props) {
  return (
    <div>
      <h2>Lista</h2>
      <ul>
        {props.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  )
}