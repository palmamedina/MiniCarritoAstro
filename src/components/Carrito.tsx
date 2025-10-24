import React from 'react';
import type { ProductoType } from '../data/productos';

interface Props {
  carrito: (ProductoType & { cantidad?: number })[];
  eliminar: (id: number) => void;
  actualizarCantidad: (id: number, cantidad: number) => void;
}

export default function Carrito({ carrito, eliminar, actualizarCantidad }: Props) {
  const total = carrito.reduce((sum, p) => sum + p.precio * (p.cantidad ?? 1), 0);

  return (
    <div style={{
      background: '#2b2b3d',
      padding: '1rem',
      borderRadius: '0.5rem'
    }}>
      <h2>🛍 Tu Carrito</h2>
      {carrito.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <ul>
          {carrito.map((item) => (
            <li key={item.id} style={{ marginBottom: '0.5rem' }}>
              {item.nombre} - ${item.precio.toFixed(2)} ×
              <input
                type="number"
                value={item.cantidad ?? 1}
                min="1"
                onChange={(e) => actualizarCantidad(item.id, Number(e.target.value))}
                style={{ width: '50px', marginLeft: '0.5rem' }}
              />
              <button
                onClick={() => eliminar(item.id)}
                style={{
                  marginLeft: '1rem',
                  background: '#ff4d4d',
                  color: 'white',
                  border: 'none',
                  borderRadius: '0.3rem',
                  cursor: 'pointer',
                  padding: '0.3rem 0.6rem'
                }}
              >
                Eliminar
              </button>
            </li>
          ))}
        </ul>
      )}
      <h3>Total: ${total.toFixed(2)}</h3>
    </div>
  );
}