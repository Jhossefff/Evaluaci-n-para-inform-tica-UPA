import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Hook para la navegación
import "./styles/Formulario.css";

const Formulario = () => {
  const [nombre, setNombre] = useState("");
  const [fechaNacimiento, setFechaNacimiento] = useState("");
  const [telefono, setTelefono] = useState("");
  const [correo, setCorreo] = useState("");
  const [estadoUsuarioId, setEstadoUsuarioId] = useState(1);
  const [mensaje, setMensaje] = useState("");
  const [errores, setErrores] = useState({});

  const navigate = useNavigate(); // Hook para redireccionar

  const handleSubmit = async (e) => {
    e.preventDefault();

    const nuevosErrores = {};
    const nombreRegex = /^[a-zA-Z\s]+$/;
    const telefonoRegex = /^[0-9]+$/;
    const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!nombreRegex.test(nombre)) {
      nuevosErrores.nombre = "El nombre solo puede contener letras.";
    }
    if (!telefonoRegex.test(telefono)) {
      nuevosErrores.telefono = "El teléfono solo puede contener números.";
    }
    if (!correoRegex.test(correo)) {
      nuevosErrores.correo = "El correo no es válido.";
    }
    if (!fechaNacimiento) {
      nuevosErrores.fechaNacimiento = "La fecha de nacimiento es obligatoria.";
    }

    setErrores(nuevosErrores);

    if (Object.keys(nuevosErrores).length === 0) {
      try {
        const response = await fetch("http://localhost:3000/api/usuarios", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            nombre,
            fecha: fechaNacimiento,
            telefono,
            correo,
            EstadoUsuarioId: estadoUsuarioId,
          }),
        });

        const data = await response.json();

        if (response.ok) {
          setMensaje("Usuario creado exitosamente.");
          setNombre("");
          setFechaNacimiento("");
          setTelefono("");
          setCorreo("");
        } else {
          setMensaje(data.error || "Error al crear el usuario.");
        }
      } catch (error) {
        setMensaje("Error al conectarse con el servidor.");
      }
    }
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h2 className="form-title">Formulario de Registro</h2>

      {mensaje && <p className="success-message">{mensaje}</p>}

      <div className="form-group">
        <label htmlFor="nombre">Nombre:</label>
        <input
          id="nombre"
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Ingresa tu nombre"
          className={errores.nombre ? "input-error" : ""}
        />
        {errores.nombre && <span className="error">{errores.nombre}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="fechaNacimiento">Fecha de Nacimiento:</label>
        <input
          id="fechaNacimiento"
          type="date"
          value={fechaNacimiento}
          onChange={(e) => setFechaNacimiento(e.target.value)}
          className={errores.fechaNacimiento ? "input-error" : ""}
        />
        {errores.fechaNacimiento && (
          <span className="error">{errores.fechaNacimiento}</span>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="telefono">Teléfono:</label>
        <input
          id="telefono"
          type="text"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
          placeholder="Ingresa tu teléfono"
          className={errores.telefono ? "input-error" : ""}
        />
        {errores.telefono && <span className="error">{errores.telefono}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="correo">Correo Electrónico:</label>
        <input
          id="correo"
          type="email"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
          placeholder="Ingresa tu correo"
          className={errores.correo ? "input-error" : ""}
        />
        {errores.correo && <span className="error">{errores.correo}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="estadoUsuarioId">Estado:</label>
        <select
          id="estadoUsuarioId"
          value={estadoUsuarioId}
          onChange={(e) => setEstadoUsuarioId(e.target.value)}
        >
          <option value={1}>Activo</option>
          <option value={2}>Inactivo</option>
        </select>
      </div>

      <div className="form-buttons">
        <button type="submit" className="form-button">
          Enviar
        </button>
        <button
          type="button"
          className="form-button back-button"
          onClick={() => navigate("/")} // Navega a la ruta principal
        >
          Regresar
        </button>
      </div>
    </form>
  );
};

export default Formulario;
