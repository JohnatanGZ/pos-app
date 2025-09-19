import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Inventario from "./pages/Inventario";

function Home() {
  return <h2>Bienvenido al POS</h2>;
}

export default function App() {
  return (
    <BrowserRouter>
      <nav style={{ padding: "1rem", background: "#eee" }}>
        <Link to="/" style={{ marginRight: "1rem" }}>Inicio</Link>
        <Link to="/inventario">Inventario</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inventario" element={<Inventario />} />
      </Routes>
    </BrowserRouter>
  );
}
