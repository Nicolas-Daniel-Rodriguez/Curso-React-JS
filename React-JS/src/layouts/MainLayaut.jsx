import {Header} from "../components/Header/Header"
import {Outlet} from "react-router-dom";

export default function MainLayout() {
    return (
        <>
            <Header />
            <div className="main-content">
                <Outlet />
            </div>
        </>
    )
}