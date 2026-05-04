// API REST CRUD de productos con Express.js
// Los datos viven en memoria — no hay base de datos en este prototipo
 
import express from 'express';
import { products } from './prototipo/mock.js'; // Importamos el array de productos del mock
 
const app = express();
app.use(express.json()); // Permite leer el body de las peticiones en formato JSON
 
const PORT = 3000;
 
// GET /products
// Devuelve la lista completa de productos
app.get('/products', (req, res) => {
  res.json(products);
});
 
// GET /products/:id
// Devuelve un producto por su ID
app.get('/products/:id', (req, res) => {
  const { id } = req.params; // Extraemos el id de la URL
  const product = products.find((p) => p.id === id); // Buscamos el producto en el array
 
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: 'Producto no encontrado' }); // 404 si no existe
  }
});
 
// POST /products
// Crea un nuevo producto con los datos del body
app.post('/products', (req, res) => {
  const { name, price, stock, is_active } = req.body; // Extraemos los campos del body
 
  const newProduct = {
    id: (products.length + 1).toString(), // Generamos un ID correlativo
    name,
    price,
    stock,
    is_active: is_active ?? true, // Si no se envía, se activa por defecto
    created_at: new Date(),        // Fecha de creación generada por el servidor
    updated_at: new Date(),        // Fecha de actualización generada por el servidor
  };
 
  products.push(newProduct); // Añadimos el producto al array en memoria
  res.status(201).json(newProduct); // 201 created — devolvemos el producto creado
});
 
// PATCH /products/:id
// Actualiza parcialmente un producto — solo los campos enviados cambian
app.patch('/products/:id', (req, res) => {
  const { id } = req.params;
  const product = products.find((p) => p.id === id); // Buscamos el producto
 
  if (product) {
    Object.assign(product, req.body, { updated_at: new Date() }); // Sobre escribimos solo los campos recibidos
    res.json(product);
  } else {
    res.status(404).json({ message: 'Producto no encontrado' }); // 404 si no existe
  }
});
 
// DELETE /products/:id
// Elimina un producto por su ID
app.delete('/products/:id', (req, res) => {
  const { id } = req.params;
  const index = products.findIndex((p) => p.id === id); // Buscamos la posición en el array
 
  if (index !== -1) {
    const removed = products.splice(index, 1); // Eliminamos el producto del array
    res.json({ message: 'Producto eliminado', product: removed[0] });
  } else {
    res.status(404).json({ message: 'Producto no encontrado' }); // 404 si no existe
  }
});
 
// Arrancamos el servidor
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});