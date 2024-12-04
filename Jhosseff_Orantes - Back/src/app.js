const express = require('express');
const userRoutes = require('./routes/userRoutes');
const cors = require('cors'); // Importa CORS

const app = express();

// Configuración de CORS
app.use(
  cors({
    origin: 'http://localhost:5173', // Dirección del frontend
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos
    allowedHeaders: ['Content-Type', 'Authorization'], // Encabezados permitidos
  })
);

app.use(express.json());

// Rutas
app.use('/api', userRoutes);

module.exports = app;
