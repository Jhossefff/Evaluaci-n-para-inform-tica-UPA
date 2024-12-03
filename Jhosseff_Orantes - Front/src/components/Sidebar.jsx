import React from "react";
import { FaHome, FaBuilding, FaCog } from "react-icons/fa";
import { BiStats } from "react-icons/bi";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom"; // Importamos Link para navegación
import "./styles/Sidebar.css";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="sidebar-logo-container">
          <div className="sidebar-logo-icon">
            <img src="/src/assets/logo.png" alt="Logo" />
          </div>
          <div className="sidebar-logo-text">
            <p className="sidebar-team">Team</p>
            <h2 className="sidebar-finalytic">Cooperativa UPA</h2>
          </div>
          <div className="sidebar-toggle">
            <AiOutlineMenu />
          </div>
        </div>
      </div>
      <ul className="sidebar-menu">
        <li>
          <Link to="/" className="sidebar-link">
            <FaHome /> Dashboard
          </Link>
        </li>
        <li>
          <Link to="/formulario" className="sidebar-link">
            <FaBuilding /> Formulario
          </Link>
        </li>
        <li>
          <Link to="/reportes" className="sidebar-link">
            <BiStats /> Reportes
          </Link>
        </li>
        <li>
          <Link to="/settings" className="sidebar-link">
            <FaCog /> Configuracion
          </Link>
        </li>
      </ul>
      <div className="sidebar-user">
        <img
          src="/src/assets/Usuario.png"
          alt="User"
          className="user-avatar"
        />
        <div>
          <p>Chris </p>
          <small>chris@gmail.com</small>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
