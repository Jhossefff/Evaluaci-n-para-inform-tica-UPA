import React from 'react';
import './styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-title">
        <h1>Declaraciones</h1>
        <button className="add-filter">+ Agregar Filtro</button>
      </div>
      <div className="header-profile">
        <img
          src="https://via.placeholder.com/40"
          alt="User"
          className="profile-avatar"
        />
        <p>Jhosseff Orantes</p>
      </div>
    </header>
  );
};

export default Header;
