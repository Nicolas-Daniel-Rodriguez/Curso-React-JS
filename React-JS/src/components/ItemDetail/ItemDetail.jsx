import { Item } from "../Item/Item"
import Boton from "../Boton"

export const ItemDetail = ({detail}) => {
    return (
        <Item {...detail}>
            <Boton color="green" texto="Agregar al carrito" />
        </Item>
    )
}