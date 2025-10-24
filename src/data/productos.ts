export type ProductoType = {
  id: number;
  nombre: string;
  precio: number;
  cantidad?: number;
};

export const productos: ProductoType[] = [
  { id: 1, nombre: "Camisa", precio: 299 },
  { id: 2, nombre: "Pantalón", precio: 499 },
  { id: 3, nombre: "Tenis", precio: 899 },
  { id: 4, nombre: "Gorra", precio: 199 },
];
