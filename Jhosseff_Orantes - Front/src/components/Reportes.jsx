import React from 'react';

const Reportes = () => {
  const reportes = [
    { id: 1, nombre: 'Juan Pérez', mensaje: 'Reporte de ejemplo 1' },
    { id: 2, nombre: 'Ana López', mensaje: 'Reporte de ejemplo 2' },
  ];

  return (
    <div className="reportes-container">
      <h2 className="reportes-title">Reportes</h2>
      <ul className="reportes-list">
        {reportes.map((reporte) => (
          <li key={reporte.id} className="reportes-item">
            <strong>{reporte.nombre}:</strong> {reporte.mensaje}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reportes;
