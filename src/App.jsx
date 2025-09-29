import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Ventas from "./pages/Ventas";
import Inventario from "./pages/Inventario";
import Usuarios from "./pages/Usuarios";
import Reportes from "./pages/Reportes";
import Configuracion from "./pages/Configuracion";
import Login from "./pages/Login";
import { useThemeStore } from "./store/useThemeStore"

export default function App() {
  const {theme} = useThemeStore();
  document.documentElement.classList.toggle("dark", theme === "dark")
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/ventas" element={<Ventas />} />
        <Route path="/inventario" element={<Inventario />} />
        <Route path="/usuarios" element={<Usuarios />} />
        <Route path="/reportes" element={<Reportes />} />
        <Route path="/configuracion" element={<Configuracion />} />
      </Routes>
    </BrowserRouter>
  );
}