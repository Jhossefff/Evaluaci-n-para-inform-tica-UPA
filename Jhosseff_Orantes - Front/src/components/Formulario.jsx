import React, { useState } from 'react';
import './styles/Formulario.css';

const Formulario = () => {
  const [nombre, setNombre] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState('');
  const [edad, setEdad] = useState(0);
  const [telefono, setTelefono] = useState('');
  const [correo, setCorreo] = useState('');
  const [errores, setErrores] = useState({});

  const calcularEdad = (fecha) => {
    const hoy = new Date();
    const nacimiento = new Date(fecha);
    let edadCalculada = hoy.getFullYear() - nacimiento.getFullYear();
    const diferenciaMeses = hoy.getMonth() - nacimiento.getMonth();
    if (diferenciaMeses < 0 || (diferenciaMeses === 0 && hoy.getDate() < nacimiento.getDate())) {
      edadCalculada--;
    }
    setEdad(edadCalculada > 0 ? edadCalculada : 0);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validaciones
    const nuevosErrores = {};
    const nombreRegex = /^[a-zA-Z\s]+$/;
    const telefonoRegex = /^[0-9]+$/;
    const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!nombreRegex.test(nombre)) {
      nuevosErrores.nombre = 'El nombre solo puede contener letras.';
    }
    if (!telefonoRegex.test(telefono)) {
      nuevosErrores.telefono = 'El teléfono solo puede contener números.';
    }
    if (!correoRegex.test(correo)) {
      nuevosErrores.correo = 'El correo no es válido.';
    }
    if (!fechaNacimiento) {
      nuevosErrores.fechaNacimiento = 'La fecha de nacimiento es obligatoria.';
    }

    setErrores(nuevosErrores);

    if (Object.keys(nuevosErrores).length === 0) {
      // Enviar datos al servidor
      try {
        const response = await fetch('http://localhost:5000/api/formulario', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ nombre, fechaNacimiento, telefono, correo }),
        });
        const data = await response.json();
        alert(data.message || 'Formulario enviado correctamente');
      } catch (error) {
        alert('Hubo un error al enviar el formulario.');
      }
    }
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h2 className="form-title">Formulario de Registro</h2>

      <div className="form-group">
        <label htmlFor="nombre">Nombre:</label>
        <input
          id="nombre"
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Ingresa tu nombre"
          className={errores.nombre ? 'input-error' : ''}
        />
        {errores.nombre && <span className="error">{errores.nombre}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="fechaNacimiento">Fecha de Nacimiento:</label>
        <input
          id="fechaNacimiento"
          type="date"
          value={fechaNacimiento}
          onChange={(e) => {
            setFechaNacimiento(e.target.value);
            calcularEdad(e.target.value);
          }}
          className={errores.fechaNacimiento ? 'input-error' : ''}
        />
        {errores.fechaNacimiento && <span className="error">{errores.fechaNacimiento}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="edad">Edad:</label>
        <input
          id="edad"
          type="text"
          value={`${edad} años`}
          readOnly
          className="input-readonly"
        />
      </div>

      <div className="form-group">
        <label htmlFor="telefono">Teléfono:</label>
        <input
          id="telefono"
          type="text"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
          placeholder="Ingresa tu teléfono"
          className={errores.telefono ? 'input-error' : ''}
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
          className={errores.correo ? 'input-error' : ''}
        />
        {errores.correo && <span className="error">{errores.correo}</span>}
      </div>

      <button type="submit" className="form-button">
        Enviar
      </button>
    </form>
  );
};

export default Formulario;
