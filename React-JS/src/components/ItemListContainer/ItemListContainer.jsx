
import { ItemList } from '../ItemList/ItemList'
import { useEffect, useState } from 'react'

export const ItemListContainer = ({ titulo }) => {
    //Estados
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    //Llamadas a una api
    useEffect(() => {
        fetch('/data/products.json')
            .then((res) => {
                setLoading(true)
                if(!res.ok) 
                    throw new Error('Error al cargar los productos')
                return res.json();
            })
            .then((data) => {
                setProducts(data);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false); 
            });
    }, []);

    return (
        <div>
            <h1>{titulo}</h1>
            {loading ? (
                <p>Cargando...</p>
            ) : (
                <ItemList lista={products} />
            )}
        </div>
    )
}