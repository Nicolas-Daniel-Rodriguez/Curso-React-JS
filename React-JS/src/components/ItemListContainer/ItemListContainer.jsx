
import { ItemList } from '../ItemList/ItemList'
import { useEffect, useState } from 'react'

export const ItemListContainer = ({ titulo }) => {
    //Estados
    const [products, setProducts] = useState([])

    //Llamadas a una api
    useEffect(() => {
        fetch('/data/products.json')
            .then((res) => {
                if(!res.ok) 
                    throw new Error('Error al cargar los productos')
                return res.json();
            })
            .then((data) => {
                setProducts(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div>
            <h1>{titulo}</h1>
            <ItemList lista={products} />
        </div>
    )
}