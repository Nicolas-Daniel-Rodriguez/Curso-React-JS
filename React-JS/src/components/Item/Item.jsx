import './Item.css'

export const Item = ({name, description, price, imagesUrl, children}) => {
    return (
        <article className="product-item">
            <img src={imagesUrl} alt={name} />
            <h2 className="product-title">{name}</h2>
            <p>Descripción: {description}</p>
            <p>Precio: ${price}</p>
            {children}
        </article>
    )
}