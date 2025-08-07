import { Link } from 'react-router-dom';
import { FaHome, FaTasks } from 'react-icons/fa';


export interface SidebarProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar = ({ isSidebarOpen, toggleSidebar }: SidebarProps) => {
  const menuItems = [
    {
      path: "/",
      icon: <FaHome className="icon" />,
      label: "Inicio"
    },
    {
      path: "/tareas",
      icon: <FaTasks className="icon" />,
      label: "Tareas"
    },
  ];

  return (
    <>
      <aside className={`sidebar ${isSidebarOpen ? 'sidebar--open' : 'sidebar--closed'}`}>
        <div className="sidebar-header">
          <button 
            className={`hamburger-menu-btn ${isSidebarOpen ? 'hamburger-menu-btn--active' : ''}`}
            onClick={toggleSidebar}
            aria-label={isSidebarOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isSidebarOpen}
          >
            <div className="hamburger-icon">
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
            </div>
          </button>
          <h2>Mi App</h2>
        </div>

        <nav className="sidebar-nav">
          <ul>
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link to={item.path} className="sidebar-link">
                  {item.icon}
                  <span className="sidebar-text">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {isSidebarOpen && <div className="sidebar-overlay" onClick={toggleSidebar}></div>}
    </>
  );
};

export default Sidebar;
