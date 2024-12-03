const pool = require("../config/db");

// Crear un usuario
exports.crearUsuario = async (req, res) => {
  const { nombre, fecha, telefono, correo, EstadoUsuarioId } = req.body;
  try {
    const sql = "INSERT INTO usuario (nombre, fecha, telefono, correo, EstadoUsuarioId) VALUES (?, ?, ?, ?, ?)";
    const [result] = await pool.query(sql, [nombre, fecha, telefono, correo, EstadoUsuarioId]);
    res.status(201).json({ id: result.insertId, mensaje: "Usuario creado exitosamente" });
  } catch (error) {
    res.status(500).json({ error: `Error al crear usuario: ${error.message}` });
  }
};

// Obtener todos los usuarios
exports.obtenerUsuarios = async (req, res) => {
  try {
    const sql = "SELECT * FROM usuario";
    const [rows] = await pool.query(sql);
    res.status(200).json(rows);
  } catch (error) {
    res.status(500).json({ error: `Error al obtener usuarios: ${error.message}` });
  }
};

// Obtener un usuario por ID
exports.obtenerUsuarioPorId = async (req, res) => {
  const { id } = req.params;
  try {
    const sql = "SELECT * FROM usuario WHERE id = ?";
    const [rows] = await pool.query(sql, [id]);
    if (rows.length === 0) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }
    res.status(200).json(rows[0]);
  } catch (error) {
    res.status(500).json({ error: `Error al obtener usuario: ${error.message}` });
  }
};

// Actualizar un usuario
exports.actualizarUsuario = async (req, res) => {
  const { id } = req.params;
  const { nombre, fecha, telefono, correo, EstadoUsuarioId } = req.body;
  try {
    const sql = "UPDATE usuario SET nombre = ?, fecha = ?, telefono = ?, correo = ?, EstadoUsuarioId = ? WHERE id = ?";
    const [result] = await pool.query(sql, [nombre, fecha, telefono, correo, EstadoUsuarioId, id]);
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }
    res.status(200).json({ mensaje: "Usuario actualizado exitosamente" });
  } catch (error) {
    res.status(500).json({ error: `Error al actualizar usuario: ${error.message}` });
  }
};

// Eliminar un usuario
exports.eliminarUsuario = async (req, res) => {
  const { id } = req.params;
  try {
    const sql = "DELETE FROM usuario WHERE id = ?";
    const [result] = await pool.query(sql, [id]);
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }
    res.status(200).json({ mensaje: "Usuario eliminado exitosamente" });
  } catch (error) {
    res.status(500).json({ error: `Error al eliminar usuario: ${error.message}` });
  }
};
