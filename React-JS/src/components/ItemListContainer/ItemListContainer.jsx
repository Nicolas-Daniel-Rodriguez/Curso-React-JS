
import { ItemList } from '../ItemList/ItemList'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const ItemListContainer = ({ titulo }) => {
    //Estados
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const {category} = useParams();

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
                if(category) {
                    setProducts(data.filter((prod) => prod.category === category));
                } else {
                    setProducts(data);
                }
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false); 
            });
    }, [category]);

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