"use strict";

var express = require('express');

var router = express.Router();

var _require = require('../controllers/userControllers'),
    guardarUsuario = _require.guardarUsuario,
    obtenerUsuarios = _require.obtenerUsuarios,
    obtenerUsuarioPorId = _require.obtenerUsuarioPorId,
    actualizarUsuario = _require.actualizarUsuario,
    eliminarUsuario = _require.eliminarUsuario; // Rutas del CRUD


router.post('/guardar_usuario', guardarUsuario); // Crear usuario

router.get('/usuarios', obtenerUsuarios); // Leer todos los usuarios

router.get('/usuarios/:id', obtenerUsuarioPorId); // Leer un usuario por ID

router.put('/usuarios/:id', actualizarUsuario); // Actualizar usuario

router["delete"]('/usuarios/:id', eliminarUsuario); // Eliminar usuario

module.exports = router;
//# sourceMappingURL=userRouters.dev.js.map
