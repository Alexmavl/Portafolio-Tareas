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
      icon: <FaHome className="text-xl min-w-[20px]" />, 
      label: "Inicio"
    },
    {
      path: "/tareas",
      icon: <FaTasks className="text-xl min-w-[20px]" />, 
      label: "Tareas"
    },
  ];

  return (
    <>
      <aside
        className={`
          bg-gradient-to-br from-[#1e1e2f] to-[#2c2c54] 
          text-white p-0 fixed top-0 left-0 
          h-screen shadow-2xl z-[1000] overflow-hidden 
          flex flex-col 
          transition-all duration-300 ease-in-out
          ${isSidebarOpen ? 'w-64' : 'w-20'}
        `}
      >
        <div className="flex items-center gap-4 px-6 py-4 border-b border-white/10 bg-white/5">
          <button
            className={`
              relative w-9 h-9 bg-transparent border-none flex items-center justify-center 
              cursor-pointer p-0 m-0
            `}
            onClick={toggleSidebar}
            aria-label={isSidebarOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isSidebarOpen}
          >
            <div className="w-5 h-4 relative flex flex-col justify-between">
              <span
                className={`
                  block w-full h-0.5 bg-white rounded-sm transition-all duration-300 origin-center
                  ${isSidebarOpen ? 'translate-y-[7px] rotate-45' : ''}
                `}
              ></span>
              <span
                className={`
                  block w-full h-0.5 bg-white rounded-sm transition-all duration-300
                  ${isSidebarOpen ? 'opacity-0 scale-x-0' : ''}
                `}
              ></span>
              <span
                className={`
                  block w-full h-0.5 bg-white rounded-sm transition-all duration-300 origin-center
                  ${isSidebarOpen ? '-translate-y-[7px] -rotate-45' : ''}
                `}
              ></span>
            </div>
          </button>
          <h2 className={`text-2xl font-semibold text-[#8faaff] whitespace-nowrap ${isSidebarOpen ? 'block' : 'hidden'}`}>
            Mi Portafolio 
          </h2>
    
        </div>

        <nav className="flex-1 py-4">
          <ul>
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  className="
                    text-[#f0f0f0] no-underline font-medium py-4 px-6 flex items-center gap-4
                    transition-all duration-300 border-l-[3px] border-transparent
                    hover:bg-[#8faaff]/10 hover:border-[#8faaff] hover:text-[#8faaff] hover:translate-x-1
                  "
                >
                  {item.icon}
                  <span className={`text-base tracking-wide ${isSidebarOpen ? 'block' : 'hidden'}`}>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[999] transition-opacity duration-300"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
};

export default Sidebar;