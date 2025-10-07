import { Item } from '../Item/Item'
import { Link } from 'react-router-dom'
import './ItemList.css'

export const ItemList = ({lista}) => {
    
    
    return (
        <div className="ItemList">
            {lista.length ? 
                lista.map((prod) => (
                    <Link key={prod.id} to={`/detail/${prod.id}`}>
                        <Item 
                            {...prod}>
                        </Item>
                    </Link>
                ))
            : <p>No hay productos</p>}  
        </div>
    )
}