import "./Count.css"
import { useState } from "react";
import Boton from "../Boton";


export const Count = ({ btnText, onConfirm}) => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount((prev) => prev + 1);
    }

    const decrement = () => {
        setCount((prev) => prev > 0 ? prev - 1 : 0);
    }
    
    const confirm = () => {
        if (count > 0) {
            onConfirm(count);
        } else {
            alert("Por favor, selecciona al menos un producto");
        }
    }
 
    
    return (
        <div className="count-container">
            <div className="count-buttons">
                <Boton className="btn" onClick={decrement} disabled={count === 0} texto="-"/>
                <span>{count}</span>
                <Boton className="btn" onClick={increment} texto="+"/>
            </div>

            <Boton texto={btnText} onClick={confirm} disabled={count === 0}/>
        </div>
    );
};