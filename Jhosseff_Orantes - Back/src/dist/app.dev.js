"use strict";

var express = require('express');

var userRoutes = require('./routes/userRoutes');

var cors = require('cors'); // Importa CORS


var app = express(); // Configuración de CORS

app.use(cors({
  origin: 'http://localhost:5173',
  // Dirección del frontend
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  // Métodos permitidos
  allowedHeaders: ['Content-Type', 'Authorization'] // Encabezados permitidos

}));
app.use(express.json()); // Rutas

app.use('/api', userRoutes);
module.exports = app;
//# sourceMappingURL=app.dev.js.map
