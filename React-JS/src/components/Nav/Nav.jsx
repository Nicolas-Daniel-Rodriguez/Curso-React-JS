import { NavItem } from "../NavItem/NavItem"
import { useCartContext } from "../../context/CartContext/useCartContext"
import "./Nav.css"

export const Nav = () => {
    const { getTotalItems } = useCartContext();


    return (
        <nav>
            <ul>
                <li> 
                    <NavItem to="/">Home</NavItem>
                </li>
                <li> 
                    <NavItem to="/category/salado">Salado</NavItem>
                </li>
                <li> 
                    <NavItem to="/category/dulce">Dulce</NavItem>
                </li>
                <li> 
                    <NavItem to="/carrito">Carrito</NavItem>
                    {getTotalItems() > 0 && (
                    <span className="in-cart">{getTotalItems()}</span>
                    )}
                </li>
            </ul>
        </nav>
    )
}