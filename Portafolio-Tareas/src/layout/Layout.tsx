import React, { useState } from "react";
import Sidebar from "./Sidebar";
import "../index.css";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex min-h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Contenedor principal */}
      <div
        className={`flex flex-col flex-1 transition-all duration-300 ease-in-out ${
          isSidebarOpen ? "md:ml-64" : "md:ml-20"
        }`}
      >
        {/* Contenido */}
        <main className="flex-grow p-8 md:p-12">{children}</main>

        {/* Footer */}
        <footer className="bg-gray-800 text-gray-400 text-sm py-4 text-center border-t border-gray-700">
          <p>
            © {new Date().getFullYear()} Portafolio de Tareas — Desarrollado por{" "}
            <span className="text-blue-400">Marvin Vásquez</span>
          </p>
          <p className="mt-1">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-300 transition"
            >
              GitHub
            </a>{" "}
            |{" "}
            <a
              href="#"
              className="hover:text-blue-300 transition"
            >
              Contacto
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Layout;
