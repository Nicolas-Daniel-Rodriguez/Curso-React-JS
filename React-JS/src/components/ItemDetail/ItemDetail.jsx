import { Item } from "../Item/Item"
import Boton from "../Boton"
import { useCartContext } from "../../context/CartContext/useCartContext"

export const ItemDetail = ({detail}) => {
    const {addItem} = useCartContext();
   


    return (
        <Item {...detail}>
            <Boton onClick={() => addItem(detail)} color="green" texto="Agregar al carrito" />
        </Item>
    )
}