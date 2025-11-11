import React, { useContext } from 'react';
import { useCartContext } from '../../context/CartContext/useCartContext';
import './Cart.css';
import Boton from '../Boton';
import { Item } from '../Item/Item';
import { Link } from 'react-router-dom';

export const Cart = () => {
 const { cart, clearCart, deleteItem, total, checkout } = useCartContext();

 return (
    <section>
            <h2>Carrito de Compras</h2>
            {cart.length ? (cart.map((prod) => ( 
                <Item key={prod.id} {...prod}>
                    <span>Cantidad: {prod.quantity}</span>
                    <Boton color="red" texto="Eliminar" onClick={() => deleteItem(prod.id)} />
                </Item>))
            ) : (
                <p>El carrito está vacío.</p>
            )}

            {cart.length ? (
                <div className="cart-container">
                        <p>Total a pagar: ${total()}</p>
                        <Boton color="green" texto="Comprar" onClick={checkout}/>
                        <Boton color="red" texto="Vaciar Carrito" onClick={clearCart} />
                </div>
            ) : (
                <Link to="/">Volver al inicio</Link>
            )}
    </section>
    );
}