import React from 'react';
import './styles/Dashboard.css';
import Card from './Card';
import Table from './Table';

const Dashboard = () => {
  return (
    <main className="dashboard">
      <section className="dashboard-cards">
        <Card title="Ingresos " value="Diciembre" />
        <Card title="Gastos" value="2024" />
        <Card title="Prestamos" value="Ocubre" />
      </section>
      <section className="dashboard-tables">


      </section>
    </main>
  );
};

export default Dashboard;
