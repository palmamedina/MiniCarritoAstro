import React, { useState } from 'react';
import Producto from './Producto';
import Carrito from './Carrito';
import { productos, type ProductoType } from '../data/productos';

export default function MiniCarrito() {
  const [carrito, setCarrito] = useState<ProductoType[]>([]);

  const agregar = (producto: ProductoType) => {
    setCarrito((prev) => {
      const existente = prev.find((p) => p.id === producto.id);
      if (existente) {
        return prev.map((p) =>
          p.id === producto.id ? { ...p, cantidad: (p.cantidad ?? 1) + 1 } : p
        );
      }
      return [...prev, { ...producto, cantidad: 1 }];
    });
  };

  const eliminar = (id: number) => {
    setCarrito((prev) => prev.filter((p) => p.id !== id));
  };

  const actualizarCantidad = (id: number, cantidad: number) => {
    if (cantidad <= 0) return eliminar(id);
    setCarrito((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, cantidad } : p
      )
    );
  };

  return (
    <main style={{ maxWidth: '800px', margin: '2rem auto' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
        {productos.map((producto) => (
          <Producto key={producto.id} producto={producto} agregar={agregar} />
        ))}
      </div>
      <div style={{ marginTop: '2rem' }}>
        <Carrito carrito={carrito} eliminar={eliminar} actualizarCantidad={actualizarCantidad} />
      </div>
    </main>
  );
}