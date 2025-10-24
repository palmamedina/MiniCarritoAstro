# Mini Carrito de Compras 🛒

## Objetivo
Crear una aplicación en **Astro + React + TypeScript** que muestre un listado de productos y permita agregarlos a un carrito de compras interactivo, actualizando cantidades y total automáticamente.

## Decisiones Técnicas
- Se utilizó **Astro** para la página principal y **React** para los componentes interactivos.  
- Los productos se almacenan localmente en `src/data/productos.ts`.  
- Componentes independientes:
  - `Producto.tsx`: muestra cada producto y permite agregar al carrito.  
  - `Carrito.tsx`: muestra los productos añadidos, permite actualizar cantidades y eliminar.  
  - `MiniCarrito.tsx`: componente principal que maneja el estado del carrito.  
- Se usa **TypeScript** para tipado seguro y **React Hooks** (`useState`) para manejo de estado.  
- Estilos simples en **inline CSS** para mantener la interfaz clara y moderna.

## Funcionalidades
- `agregar(producto)` añade productos al carrito.  
- `eliminar(id)` elimina un producto del carrito.  
- `actualizarCantidad(id, cantidad)` modifica la cantidad de un producto en tiempo real.  
- Cálculo automático del **total** del carrito.  
- Validaciones para evitar cantidades negativas o vacías.

## Aprendizajes
- Manejo de **estado local en React** dentro de Astro.  
- Comunicación entre **componentes padre e hijo**.  
- Renderizado dinámico de listas y manejo de eventos.  
- Estructura modular y código limpio para fácil mantenimiento.  
- Integración de **datos estáticos TypeScript** en Astro.
