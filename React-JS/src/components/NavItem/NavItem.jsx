import { NavLink } from "react-router-dom";

export const NavItem = ({ to, children }) => {
  return (
    <li>
      <NavLink to={to} className={({ isActive }) => (isActive ? "active" : "")}>
        {children}
      </NavLink>
    </li>
  );
};
