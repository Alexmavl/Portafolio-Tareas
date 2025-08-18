import React, { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import "../index.css";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // solo afecta escritorio
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // menú móvil dropdown

  const toggleSidebar = () => setIsSidebarOpen((v) => !v);
  const toggleMobileMenu = () => setIsMobileMenuOpen((v) => !v);

  return (
    <div className="flex min-h-screen bg-black text-white">
      {/* Sidebar SOLO en escritorio */}
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Contenedor principal */}
      <div
        className={[
          "flex flex-col flex-1 transition-[margin] duration-300 ease-in-out",
          isSidebarOpen ? "md:ml-64" : "md:ml-20", // margen solo en md+
        ].join(" ")}
      >
        {/* Header SOLO móvil con botón hamburguesa */}
        <header className="md:hidden sticky top-0 z-50 bg-black/90 backdrop-blur supports-[backdrop-filter]:bg-black/60">
          <div className="flex items-center justify-between px-4 py-3">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center w-10 h-10 rounded-md bg-gray-900 border border-gray-700 shadow-lg"
              aria-label="Abrir menú"
              aria-expanded={isMobileMenuOpen}
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span className={`block h-0.5 w-full bg-white rounded-sm transition-transform duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
                <span className={`block h-0.5 w-full bg-white rounded-sm transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`} />
                <span className={`block h-0.5 w-full bg-white rounded-sm transition-transform duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
              </div>
            </button>
            <span className="text-sm text-gray-300">Menú</span>
          </div>

          {/* Dropdown móvil (no empuja el layout, posición absoluta) */}
          {isMobileMenuOpen && (
            <div className="absolute left-0 right-0 top-full z-40 mx-3 mt-2 rounded-xl border border-white/10 bg-neutral-900/95 shadow-2xl">
              <nav className="py-2">
                <Link
                  to="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-3 text-gray-200 hover:bg-white/10"
                >
                  Inicio
                </Link>
                <Link
                  to="/tareas"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-3 text-gray-200 hover:bg-white/10"
                >
                  Tareas
                </Link>
              </nav>
            </div>
          )}
        </header>

        {/* Contenido */}
        <main className="flex-grow p-6 sm:p-8 md:p-12">{children}</main>

        {/* Footer */}
        <footer className="bg-gray-800 text-gray-400 text-sm py-4 text-center border-t border-gray-700">
          <p>
            © {new Date().getFullYear()} Portafolio de Tareas — Desarrollado por{" "}
            <span className="text-blue-400">Marvin Vásquez</span>
          </p>
          <p className="mt-1">
            <a
              href="https://github.com/Alexmavl"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-300 transition"
            >
              GitHub
            </a>{" "}
            |{" "}
            <a href="#" className="hover:text-blue-300 transition">
              Contacto
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Layout;
