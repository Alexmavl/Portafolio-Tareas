import { Link } from "react-router-dom";
import { FaHome, FaTasks } from "react-icons/fa";

export interface SidebarProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar = ({ isSidebarOpen, toggleSidebar }: SidebarProps) => {
  const menuItems = [
    { path: "/", label: "Inicio", icon: <FaHome className="text-xl min-w-[20px]" /> },
    { path: "/tareas", label: "Tareas", icon: <FaTasks className="text-xl min-w-[20px]" /> },
  ];

  return (
    // Oculto en móvil; visible y sticky en md+
    <aside
      className={[
        "hidden md:flex md:flex-col md:shrink-0",
        "bg-gradient-to-br from-[#1a202c] to-[#2d3748] text-gray-100",
        "h-screen shadow-2xl overflow-hidden md:sticky md:top-0 z-40",
        "transition-all duration-300 ease-in-out",
        isSidebarOpen ? "md:w-64" : "md:w-20",
      ].join(" ")}
      aria-label="Barra lateral de navegación"
    >
      {/* Header del sidebar (escritorio) */}
      <div className="flex items-center gap-4 px-6 py-4 border-b border-gray-700/50 bg-gray-800/50">
        <button
          onClick={toggleSidebar}
          className="relative w-9 h-9 flex items-center justify-center"
          aria-label={isSidebarOpen ? "Colapsar menú" : "Expandir menú"}
          aria-expanded={isSidebarOpen}
        >
          <div className="w-5 h-4 relative flex flex-col justify-between">
            <span className={`block w-full h-0.5 bg-gray-300 rounded-sm transition-all duration-300 origin-center ${isSidebarOpen ? "translate-y-[7px] rotate-45" : ""}`} />
            <span className={`block w-full h-0.5 bg-gray-300 rounded-sm transition-all duration-300 ${isSidebarOpen ? "opacity-0 scale-x-0" : ""}`} />
            <span className={`block w-full h-0.5 bg-gray-300 rounded-sm transition-all duration-300 origin-center ${isSidebarOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
          </div>
        </button>

        <h2 className={`text-2xl font-semibold text-gray-100 whitespace-nowrap ${isSidebarOpen ? "block" : "hidden"}`}>
          Mi Portafolio
        </h2>
      </div>

      {/* Navegación */}
      <nav className="flex-1 py-4">
        <ul>
          {menuItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className="
                  text-gray-400 no-underline font-medium py-4 px-6 flex items-center gap-4
                  transition-all duration-300 border-l-[3px] border-transparent
                  hover:bg-[#4a5568]/20 hover:border-[#4299e1] hover:text-gray-100 hover:translate-x-1
                "
              >
                {item.icon}
                <span className={`text-base tracking-wide ${isSidebarOpen ? "block" : "hidden"}`}>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
