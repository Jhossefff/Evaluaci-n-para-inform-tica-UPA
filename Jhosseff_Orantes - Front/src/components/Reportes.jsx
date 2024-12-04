import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Hook para la navegación
import "./styles/Reportes.css";

const Reportes = () => {
  const [reportes, setReportes] = useState([]); // Estado para almacenar datos del reporte
  const [error, setError] = useState(""); // Estado para manejar errores
  const [codigoReporte, setCodigoReporte] = useState("usuarios"); // Código del reporte seleccionado
  const navigate = useNavigate(); // Hook para redireccionar

  // Función para cargar los datos desde la API
  const cargarReporte = async () => {
    try {
      const urlBase = "http://localhost:3000/api"; // URL base del backend
      const response = await fetch(`${urlBase}/${codigoReporte}`); // Construir la URL del reporte

      if (!response.ok) {
        throw new Error("Error al obtener el reporte.");
      }

      const data = await response.json();
      setReportes(data); // Actualizar el estado con los datos recibidos
      setError(""); // Limpiar cualquier error previo
    } catch (err) {
      setError(err.message);
    }
  };

  // Cargar los datos del reporte cada vez que cambie el código seleccionado
  useEffect(() => {
    cargarReporte();
  }, [codigoReporte]);

  return (
    <div className="reportes-container">
      <h2 className="reportes-title">Reportes</h2>

      {/* Selector de reportes */}
      <div className="reportes-selector">
        <label htmlFor="codigoReporte">Selecciona un reporte:</label>
        <select
          id="codigoReporte"
          value={codigoReporte}
          onChange={(e) => setCodigoReporte(e.target.value)}
        >
          <option value="usuarios">Usuarios</option>
          <option value="productos">Productos</option>
          <option value="ventas">Ventas</option>
        </select>
      </div>

      {/* Mensaje de error */}
      {error && <p className="error">{error}</p>}

      {/* Lista de reportes */}
      <ul className="reportes-list">
        {reportes.map((reporte, index) => (
          <li key={index} className="reportes-item">
            {Object.entries(reporte).map(([key, value]) => (
              <p key={key}>
                <strong>{key}:</strong> {value}
              </p>
            ))}
          </li>
        ))}
      </ul>

      {/* Botón de Regresar */}
      <button
        className="back-button"
        onClick={() => navigate("/")} // Cambia "/" por la ruta a donde deseas regresar
      >
        Regresar
      </button>
    </div>
  );
};

export default Reportes;
