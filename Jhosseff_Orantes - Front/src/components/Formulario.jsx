import React, { useState } from 'react';

const Formulario = () => {
  const [nombre, setNombre] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Formulario enviado por: ${nombre}`);
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h2 className="form-title">Formulario</h2>
      <div className="form-group">
        <label htmlFor="nombre">Nombre:</label>
        <input
          id="nombre"
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Ingresa tu nombre"
        />
      </div>
      <div className="form-group">
        <label htmlFor="mensaje">Mensaje:</label>
        <textarea
          id="mensaje"
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
          placeholder="Escribe tu mensaje aquí"
        ></textarea>
      </div>
      <button type="submit" className="form-button">
        Enviar
      </button>
    </form>
  );
};

export default Formulario;
