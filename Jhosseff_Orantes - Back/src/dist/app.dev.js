"use strict";

var express = require('express');

var userRoutes = require('./routes/userRoutes');

var app = express();
app.use(express.json()); // Rutas

app.use('/api', userRoutes);
module.exports = app;
//# sourceMappingURL=app.dev.js.map
