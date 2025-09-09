export const Item = ({item, children}) => {
    return (
        <article>
            <h2>{item.nombre}</h2>
            <p>{item.descripcion}</p>
            <p>{item.precio}</p>
            {children}
        </article>
    )
}