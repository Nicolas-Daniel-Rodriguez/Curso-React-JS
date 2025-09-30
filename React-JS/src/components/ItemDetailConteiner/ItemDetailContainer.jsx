import { useEffect, useState } from "react"
import { ItemDetail } from "../ItemDetail/ItemDetail"

export const ItemDetailContainer = () => {
    //Estados
    const [detail, setDetail] = useState({});

    //useEffect
    useEffect(() => {
        fetch("/data/products.json")
            .then((res) => {
                if(!res.ok) throw new Error("Error al cargar el producto");
                return res.json();
            })
            .then((data) => {
                const found = data.find((p) => p.id === "2");
                if (found) {
                    setDetail(found);
                } else {
                    console.log("No se encontro el producto");
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    
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