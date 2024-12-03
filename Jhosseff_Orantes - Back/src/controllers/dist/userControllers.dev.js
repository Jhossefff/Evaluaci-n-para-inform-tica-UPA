"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var pool = require("../config/db"); // Crear un usuario


exports.crearUsuario = function _callee(req, res) {
  var _req$body, nombre, fecha, telefono, correo, EstadoUsuarioId, sql, _ref, _ref2, result;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _req$body = req.body, nombre = _req$body.nombre, fecha = _req$body.fecha, telefono = _req$body.telefono, correo = _req$body.correo, EstadoUsuarioId = _req$body.EstadoUsuarioId;
          _context.prev = 1;
          sql = "INSERT INTO usuario (nombre, fecha, telefono, correo, EstadoUsuarioId) VALUES (?, ?, ?, ?, ?)";
          _context.next = 5;
          return regeneratorRuntime.awrap(pool.query(sql, [nombre, fecha, telefono, correo, EstadoUsuarioId]));

        case 5:
          _ref = _context.sent;
          _ref2 = _slicedToArray(_ref, 1);
          result = _ref2[0];
          res.status(201).json({
            id: result.insertId,
            mensaje: "Usuario creado exitosamente"
          });
          _context.next = 14;
          break;

        case 11:
          _context.prev = 11;
          _context.t0 = _context["catch"](1);
          res.status(500).json({
            error: "Error al crear usuario: ".concat(_context.t0.message)
          });

        case 14:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 11]]);
}; // Obtener todos los usuarios


exports.obtenerUsuarios = function _callee2(req, res) {
  var sql, _ref3, _ref4, rows;

  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          sql = "SELECT * FROM usuario";
          _context2.next = 4;
          return regeneratorRuntime.awrap(pool.query(sql));

        case 4:
          _ref3 = _context2.sent;
          _ref4 = _slicedToArray(_ref3, 1);
          rows = _ref4[0];
          res.status(200).json(rows);
          _context2.next = 13;
          break;

        case 10:
          _context2.prev = 10;
          _context2.t0 = _context2["catch"](0);
          res.status(500).json({
            error: "Error al obtener usuarios: ".concat(_context2.t0.message)
          });

        case 13:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 10]]);
}; // Obtener un usuario por ID


exports.obtenerUsuarioPorId = function _callee3(req, res) {
  var id, sql, _ref5, _ref6, rows;

  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          id = req.params.id;
          _context3.prev = 1;
          sql = "SELECT * FROM usuario WHERE id = ?";
          _context3.next = 5;
          return regeneratorRuntime.awrap(pool.query(sql, [id]));

        case 5:
          _ref5 = _context3.sent;
          _ref6 = _slicedToArray(_ref5, 1);
          rows = _ref6[0];

          if (!(rows.length === 0)) {
            _context3.next = 10;
            break;
          }

          return _context3.abrupt("return", res.status(404).json({
            error: "Usuario no encontrado"
          }));

        case 10:
          res.status(200).json(rows[0]);
          _context3.next = 16;
          break;

        case 13:
          _context3.prev = 13;
          _context3.t0 = _context3["catch"](1);
          res.status(500).json({
            error: "Error al obtener usuario: ".concat(_context3.t0.message)
          });

        case 16:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[1, 13]]);
}; // Actualizar un usuario


exports.actualizarUsuario = function _callee4(req, res) {
  var id, _req$body2, nombre, fecha, telefono, correo, EstadoUsuarioId, sql, _ref7, _ref8, result;

  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          id = req.params.id;
          _req$body2 = req.body, nombre = _req$body2.nombre, fecha = _req$body2.fecha, telefono = _req$body2.telefono, correo = _req$body2.correo, EstadoUsuarioId = _req$body2.EstadoUsuarioId;
          _context4.prev = 2;
          sql = "UPDATE usuario SET nombre = ?, fecha = ?, telefono = ?, correo = ?, EstadoUsuarioId = ? WHERE id = ?";
          _context4.next = 6;
          return regeneratorRuntime.awrap(pool.query(sql, [nombre, fecha, telefono, correo, EstadoUsuarioId, id]));

        case 6:
          _ref7 = _context4.sent;
          _ref8 = _slicedToArray(_ref7, 1);
          result = _ref8[0];

          if (!(result.affectedRows === 0)) {
            _context4.next = 11;
            break;
          }

          return _context4.abrupt("return", res.status(404).json({
            error: "Usuario no encontrado"
          }));

        case 11:
          res.status(200).json({
            mensaje: "Usuario actualizado exitosamente"
          });
          _context4.next = 17;
          break;

        case 14:
          _context4.prev = 14;
          _context4.t0 = _context4["catch"](2);
          res.status(500).json({
            error: "Error al actualizar usuario: ".concat(_context4.t0.message)
          });

        case 17:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[2, 14]]);
}; // Eliminar un usuario


exports.eliminarUsuario = function _callee5(req, res) {
  var id, sql, _ref9, _ref10, result;

  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          id = req.params.id;
          _context5.prev = 1;
          sql = "DELETE FROM usuario WHERE id = ?";
          _context5.next = 5;
          return regeneratorRuntime.awrap(pool.query(sql, [id]));

        case 5:
          _ref9 = _context5.sent;
          _ref10 = _slicedToArray(_ref9, 1);
          result = _ref10[0];

          if (!(result.affectedRows === 0)) {
            _context5.next = 10;
            break;
          }

          return _context5.abrupt("return", res.status(404).json({
            error: "Usuario no encontrado"
          }));

        case 10:
          res.status(200).json({
            mensaje: "Usuario eliminado exitosamente"
          });
          _context5.next = 16;
          break;

        case 13:
          _context5.prev = 13;
          _context5.t0 = _context5["catch"](1);
          res.status(500).json({
            error: "Error al eliminar usuario: ".concat(_context5.t0.message)
          });

        case 16:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[1, 13]]);
};
//# sourceMappingURL=userControllers.dev.js.map
