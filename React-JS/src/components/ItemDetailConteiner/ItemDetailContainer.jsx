import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail"

export const ItemDetailContainer = () => {
    //Estados
    const [detail, setDetail] = useState({});

    const {id}= useParams();
    //useEffect
    useEffect(() => {
        fetch("/data/products.json")
            .then((res) => {
                if(!res.ok) throw new Error("Error al cargar el producto");
                return res.json();
            })
            .then((data) => {
                const found = data.find((p) => p.id === id);
                if (found) {
                    setDetail(found);
                } else {
                    console.log("No se encontro el producto");
                }
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