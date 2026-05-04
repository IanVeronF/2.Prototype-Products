# API REST Prototipo Products

API construida con Node.js, TypeScript, Express.js, que permite realizar operaciones CRUD sobre una entidad *Products*.
En este prototipo, además, podemos ver todas las dependencias instaladas a nivel de desarrollador, en el archivo *package.json*.

## Proyecto

```text
├── src/
│   └── prototipo/
│       ├── server1.ts        - Código principal de la API (único fichero)
│       └── mock.ts           - Productos (datos iniciales en memoria)
├── prisma/
│   └── schema.prisma         - Schema de Prisma para PostgreSQL
├── .env.sample
├── .gitignore
├── eslint.config.js
├── package.json
├── prisma.config.ts
├── tsconfig.json
└── README.md
```

### Entidad Product

id (string)
name (string)
price (number)
stock (number)
is_active (boolean)
created_at (datetime)
updated_at (datetime)

## Endpoints:

GET /products: Debe devolver la lista de productos.
GET /products/:id: Debe devolver un producto por su id.
POST /products: Debe crear un producto.
PATCH /products/:id: Debe actualizar un producto por su id.
DELETE /products/:id: Debe eliminar un producto por su id.

## Instalación

Puedes clonar el repositorio en tu VSC:

git clone -url de este repositorio-

Y después:

npm i (o npm install)

Así se instalan las dependencias necesarias para que funcione correctamente.





