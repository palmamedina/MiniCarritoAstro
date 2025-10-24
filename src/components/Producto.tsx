import React from 'react';
import type { ProductoType } from '../data/productos';

interface Props {
  producto: ProductoType;
  agregar: (producto: ProductoType) => void;
}

export default function Producto({ producto, agregar }: Props) {
  return (
    <div style={{
      border: '1px solid #444',
      borderRadius: '0.5rem',
      padding: '1rem',
      width: '180px',
      background: '#2b2b3d',
      textAlign: 'center'
    }}>
      <h3>{producto.nombre}</h3>
      <p>💲{producto.precio.toFixed(2)}</p>
      <button
        onClick={() => agregar(producto)}
        style={{
          background: '#00bfff',
          color: '#fff',
          border: 'none',
          padding: '0.5rem 1rem',
          borderRadius: '0.3rem',
          cursor: 'pointer'
        }}
      >
        Agregar
      </button>
    </div>
  );
}