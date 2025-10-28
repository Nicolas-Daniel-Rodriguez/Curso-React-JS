import { CartContext } from "./CartContext"
import { useState } from "react"

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])


    const exists = (id) => {
        const exist = cart.some((p) => p.id === id)
        return exist;
    }

    const addItem = (item) => {
        if (exists(item.id)) {
            const updatedCart = cart.map((prod) => {
                if (prod.id === item.id) {
                    return {...prod, quantity: prod.quantity + item.quantity}
                } else {
                    return prod;
                }
            });
            setCart(updatedCart);
            alert(`${item.name} se agrego al carrito`);
            return;
        } else {
            setCart([...cart, item]);
            alert(`${item.name} se agrego al carrito`);
        }
    }

    const deleteItem = (id) => {
        const newCart = cart.filter((item) => item.id !== id);
        setCart(newCart);
        alert(`${item.name} se elimino del carrito`);
    }

    const clearCart = () => {
        setCart([]);
    }

    const getTotalItems = () => {
        const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
        return totalItems;
    }

    const total = () => {
        const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
        return Math.round(total * 100) / 100;
    }

    const checkout = () => {
        const ok = confirm(`¿Seguro que desea realizar la compra? Total a pagar: ${total()}`);
        if (ok) {
            clearCart();
            alert('Gracias por su compra');
        }
    }

    const values = {
        cart,
        addItem,
        clearCart,
        getTotalItems,
        total,
        deleteItem,
        checkout
    }
    return (
        <CartContext.Provider value={values}>
            {children}
        </CartContext.Provider>
    )
}