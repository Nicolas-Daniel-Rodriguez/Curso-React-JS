import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail"
import { getProductById } from "../../services/products"

export const ItemDetailContainer = () => {
    //Estados
    const [detail, setDetail] = useState({});

    const {id}= useParams();
    //useEffect
    useEffect(() => {
        getProductById(id)
            .then((data) => {
                setDetail(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [id]);
    
    return (
        <main>
            {Object.keys(detail).length ? (
                <ItemDetail detail={detail} />
            ) : (
                <p>Cargando...</p>
            )}
        </main>
    )
}