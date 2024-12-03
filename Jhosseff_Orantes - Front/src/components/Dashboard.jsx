import React from 'react';
import './styles/Dashboard.css';
import Card from './Card';
import Table from './Table';

const Dashboard = () => {
  return (
    <main className="dashboard">
      <section className="dashboard-cards">
        <Card title="Ingresos " value="$17,643.41" />
        <Card title="Gastos" value="$2,348.00" />
        <Card title="Prestamos" value="$2,348.00" />
      </section>
      <section className="dashboard-tables">


      </section>
    </main>
  );
};

export default Dashboard;
