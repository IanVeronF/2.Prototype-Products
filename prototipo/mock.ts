// Datos iniciales de productos en memoria
// Este array simula una base de datos — los cambios duran mientras el servidor esté corriendo
 
export const products = [
  {
    id: "1",
    name: "Laptop Pro 15",
    price: 1299.99,
    stock: 10,
    is_active: true,
    created_at: new Date("2024-01-10T09:00:00.000Z"),
    updated_at: new Date("2024-01-10T09:00:00.000Z"),
  },
  {
    id: "2",
    name: "Teclado mecánico RGB",
    price: 89.99,
    stock: 50,
    is_active: true,
    created_at: new Date("2024-02-14T11:30:00.000Z"),
    updated_at: new Date("2024-02-14T11:30:00.000Z"),
  },
  {
    id: "3",
    name: "Monitor 4K",
    price: 549.00,
    stock: 7,
    is_active: true,
    created_at: new Date("2024-03-01T08:15:00.000Z"),
    updated_at: new Date("2024-03-01T08:15:00.000Z"),
  },
];