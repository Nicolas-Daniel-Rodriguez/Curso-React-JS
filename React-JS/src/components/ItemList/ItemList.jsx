import { Item } from '../Item/Item'
import Boton from '../Boton'

export const ItemList = ({lista}) => {
    
    //revisar boton
    
    return (
        <>
            {lista.length ? 
                lista.map((prod) => (
                    <Item 
                        key={prod.id} 
                        item={prod}>
                        <Boton color="green" texto="Ver producto" />
                    </Item>
                ))
            : <p>No hay productos</p>}  
        </>
    )
}