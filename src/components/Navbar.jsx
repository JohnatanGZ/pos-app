import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "../pages/Home";
import Ventas from "../pages/Ventas";
import Inventario from "../pages/Inventario";
import Usuarios from "../pages/Usuarios";
import Reportes from "../pages/Reportes";
import Configuracion from "../pages/Configuracion";
import { Icon } from "@iconify/react";
import { useThemeStore } from "../store/useThemeStore";

const Navbar = () => {
    const {theme, toggleTheme} = useThemeStore()

    const opciones = ["opcion1", "opcion2", "opcion1234"]

    return (
        <BrowserRouter>
            <section className="fixed flex w-full justify-between border-b-2 border-transparent rounded-br-3xl bg-secondary-light dark:bg-primary-dark dark:border-b-blue-medium dark:text-white shadow-lg pl-5 pr-7 py-5 mb-5">
                <div className="flex items-center">
                    <h1 className="text-2xl font-bold">Título</h1>
                </div>

                <div className="flex gap-4">
                    <NavLink end className={({ isActive }) => (isActive ? "activo" : "inactivo")} to="/">
                        <Icon icon="material-symbols:home-outline" width="24" height="24" />Inicio
                    </NavLink>
                    <NavLink end className={({ isActive }) => (isActive ? "activo" : "inactivo")} to="/ventas">
                        <Icon icon="material-symbols:monitoring-rounded" width="24" height="24" />Ventas
                    </NavLink>
                    <NavLink end className={({ isActive }) => (isActive ? "activo" : "inactivo")} to="/inventario">
                        <Icon icon="material-symbols:inventory-2-outline" width="24" height="24" />Inventario
                    </NavLink>
                    <NavLink end className={({ isActive }) => (isActive ? "activo" : "inactivo")} to="/usuarios">
                        <Icon icon="material-symbols:group-outline" width="24" height="24" />Usuarios
                    </NavLink>
                    <NavLink end className={({ isActive }) => (isActive ? "activo" : "inactivo")} to="/reportes">
                        <Icon icon="material-symbols:list-alt-check-outline-rounded" width="24" height="24" />Reportes
                    </NavLink>
                    <NavLink end className={({ isActive }) => (isActive ? "activo" : "inactivo")} to="/configuracion">
                        <Icon icon="material-symbols:settings-outline" width="24" height="24" />Configuración
                    </NavLink>

                    <button className="p-2 rounded-lg bg-white text-black border border-amber-500 hover:shadow-amber-200 dark:bg-primary-dark dark:text-white dark:border-blue-high dark:hover:shadow-blue-high font-semibold cursor-pointer hover:shadow-md hover:scale-105 transition-all duration-300 ease-in-out" onClick={ toggleTheme }>
                        {theme === "light" ? "☀" : "☾"}
                    </button>
                </div>
            </section>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/ventas" element={<Ventas />} />
                <Route path="/inventario" element={<Inventario />} />
                <Route path="/usuarios" element={<Usuarios />} />
                <Route path="/reportes" element={<Reportes />} />
                <Route path="/configuracion" element={<Configuracion />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Navbar;