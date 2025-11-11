
import { ItemList } from '../ItemList/ItemList'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProducts } from '../../services/products'


export const ItemListContainer = ({ titulo }) => {
    //Estados
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const {category} = useParams();

    //Llamadas a una api
    useEffect(() => {
        setLoading(true);
        getProducts(category)
            .then((data) => {
                setProducts(data);
            })
            .catch((error) => {
                console.error('Error al cargar los productos:', error);
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