import { NavItem } from "../NavItem/NavItem"
import { useCartContext } from "../../context/CartContext/useCartContext"
import "./Nav.css"

export const Nav = () => {
    const { getTotalItems } = useCartContext();


     return (
    <nav>
      <ul>
        <NavItem to="/">Home</NavItem>
        <NavItem to="/category/salado">Salado</NavItem>
        <NavItem to="/category/dulce">Dulce</NavItem>
        <NavItem to="/carrito">
          Carrito
          {getTotalItems() > 0 && (
            <span className="in-cart">{getTotalItems()}</span>
          )}
        </NavItem>
      </ul>
    </nav>
  );
};