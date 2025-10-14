import React, { useContext } from 'react';
import { useCartContext } from '../../context/CartContext/useCartContext';
import './Cart.css';
import Boton from '../Boton';

export const Cart = () => {
 const { cart, clearCart } = useCartContext();
 const total = cart.reduce((acc, producto) => acc + producto.price, 0);

 return (
    <div>
            <h1>Carrito de Compras</h1>
            {cart.length > 0 ? (
                <>
                <ul>
                    {cart.map((producto, index) => (
                        <li key={index}>{producto.name} - ${producto.price}</li>
                    ))}
                </ul>
                <p>Total: ${total}</p>
                <Boton color="green" texto="Comprar" onClick={() => alert('Compra realizada')} />
                </>
            ) : (
                <p>El carrito está vacío.</p>
            )}
            {cart.length > 0 && <Boton color="red" texto="Vaciar Carrito" onClick={clearCart} />}
        </div>
    );
}