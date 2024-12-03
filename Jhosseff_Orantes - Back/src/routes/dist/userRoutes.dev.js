"use strict";

var express = require("express");

var _require = require("../controllers/userControllers"),
    crearUsuario = _require.crearUsuario,
    obtenerUsuarios = _require.obtenerUsuarios,
    obtenerUsuarioPorId = _require.obtenerUsuarioPorId,
    actualizarUsuario = _require.actualizarUsuario,
    eliminarUsuario = _require.eliminarUsuario;

var router = express.Router();
router.post("/usuarios", crearUsuario);
router.get("/usuarios", obtenerUsuarios);
router.get("/usuarios/:id", obtenerUsuarioPorId);
router.put("/usuarios/:id", actualizarUsuario);
router["delete"]("/usuarios/:id", eliminarUsuario);
module.exports = router;
//# sourceMappingURL=userRoutes.dev.js.map
