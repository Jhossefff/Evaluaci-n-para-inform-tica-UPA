import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Formulario from './components/Formulario';
import Reportes from './components/Reportes';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/formulario" element={<Formulario />} />
        <Route path="/reportes" element={<Reportes />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
