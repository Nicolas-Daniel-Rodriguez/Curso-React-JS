import {Outlet} from "react-router-dom"
import { useAuthContext } from "../context/AuthContext/useAuthContext"
import { useNavigate } from "react-router-dom"
import Boton from "../components/Boton"

export const AdminLayout = () => {
    const { user, logout } = useAuthContext()
    const navigate = useNavigate()

    const handleLogout = () => {
        logout()
        navigate("/admin")
    }

    return (
        <section className="admin-layout">
            {user && (
                <Boton 
                    color="red" 
                    texto="Cerrar Sesión" 
                    onClick={handleLogout} 
                />
            )}
            <Outlet />
        </section>
    )
}