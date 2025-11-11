import { useState } from "react"
import { useAuthContext } from "../../context/AuthContext/useAuthContext"
import { useNavigate, Navigate } from "react-router-dom"
import "./Login.css"
import Boton from "../Boton"

export const Login = () => {
    const [userForm, setUserForm] = useState({
        name: "",
        password: ""
    })
    const { user, login } = useAuthContext()
    const navigate = useNavigate()

    if (user) {
        return <Navigate to="/admin/alta-productos" />
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setUserForm({ ...userForm, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const succecs = login(userForm.name, userForm.password)
        if (succecs) {
            navigate("/admin/alta-productos")
        } else {
            alert("Usuario o contraseña incorrectos")
            setUserForm({ name: "", password: "" })
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Iniciar sesión</h1>
            <input type="text" name="name" value={userForm.name} onChange={handleChange} placeholder="Nombre de usuario" />
            <input type="password" name="password" value={userForm.password} onChange={handleChange} placeholder="Contraseña" />
            <Boton 
                color="#4a90e2" 
                texto="Iniciar sesión" 
                onClick={handleSubmit}
            />
        </form>
    )
}