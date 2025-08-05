// src/layout/Sidebar.tsx
import './Sidebar.css';
import { Link } from 'react-router';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h2>Menú</h2>
      <nav>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/tareas">Tareas</Link></li>
          <li><Link to="/proyectos">Proyectos</Link></li>
          <li><Link to="/perfil">Perfil</Link></li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
