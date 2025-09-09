import { ItemList } from '../ItemList/ItemList'

export const ItemListContainer = ({ titulo, productos }) => {
    //Estados

    //Llamadas a una api
    return (
        <div>
            <h1>{titulo}</h1>
            <ItemList lista={productos} />
        </div>
    )
}