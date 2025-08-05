import { useState } from 'react';
import { Link } from 'react-router'; // Se asume react-router-dom
import { FaHome, FaTasks, FaProjectDiagram, FaUserCircle } from 'react-icons/fa';
import { IoMdMenu } from 'react-icons/io';
import './Sidebar.css';

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <button className="hamburger-menu-btn" onClick={toggleSidebar}>
        <IoMdMenu />
      </button>
      <aside className={`sidebar ${isSidebarOpen ? '' : 'sidebar--hidden'}`}>
        <div className="sidebar-header">
          <h2>Menú</h2>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/" onClick={toggleSidebar}>
                <FaHome className="icon" />
                <span>Inicio</span>
              </Link>
            </li>
            <li>
              <Link to="/tareas" onClick={toggleSidebar}>
                <FaTasks className="icon" />
                <span>Tareas</span>
              </Link>
            </li>
            <li>
              <Link to="/proyectos" onClick={toggleSidebar}>
                <FaProjectDiagram className="icon" />
                <span>Proyectos</span>
              </Link>
            </li>
            <li>
              <Link to="/perfil" onClick={toggleSidebar}>
                <FaUserCircle className="icon" />
                <span>Perfil</span>
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;