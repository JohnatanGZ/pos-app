import React, { useEffect, useState } from 'react';
import API from '../services/api';

export default function Inventario() {
  const [productos, setProductos] = useState([]);
  const [nuevo, setNuevo] = useState({ nombre: '', codigo: '', precio: 0, stock: 0, iva: false });

  useEffect(() => { cargarProductos(); }, []);
  
  const cargarProductos = async () => {
    try {
      const res = await API.get('/productos');
      setProductos(res.data);
    } catch (err) {
      console.error('Error cargando productos:', err);
    }
  };

  const agregarProducto = async () => {
    await API.post('/productos', nuevo);
    setNuevo({ nombre: '', codigo: '', precio: 0, stock: 0, iva: false });
    cargarProductos();
  };

  return (
    <section className="w-full mt-25 ml-2 mb-2 p-5 rounded-2xl border border-gray-200 shadow-lg bg-primary-light dark:bg-primary-dark dark:border-transparent dark:text-white">
      <h2>Inventario</h2>
      <div>
        <input placeholder="Nombre" value={nuevo.nombre} onChange={e => setNuevo({ ...nuevo, nombre: e.target.value })} />
        <input placeholder="Código" value={nuevo.codigo} onChange={e => setNuevo({ ...nuevo, codigo: e.target.value })} />
        <input type="number" placeholder="Precio" value={nuevo.precio} onChange={e => setNuevo({ ...nuevo, precio: +e.target.value })} />
        <input type="number" placeholder="Stock" value={nuevo.stock} onChange={e => setNuevo({ ...nuevo, stock: +e.target.value })} />
        <label>
          <input type="checkbox" checked={nuevo.iva} onChange={e => setNuevo({ ...nuevo, iva: e.target.checked })} /> IVA
        </label>
        <button onClick={agregarProducto}>Agregar</button>
      </div>

      <table>
        <thead><tr><th>ID</th><th>Nombre</th><th>Código</th><th>Precio</th><th>Stock</th><th>IVA</th></tr></thead>
        <tbody>
          {productos.map(p => (
            <tr key={p.id}>
              <td>{p.id}</td><td>{p.nombre}</td><td>{p.codigo}</td>
              <td>${p.precio.toFixed(2)}</td><td>{p.stock}</td><td>{p.iva ? 'Sí' : 'No'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
