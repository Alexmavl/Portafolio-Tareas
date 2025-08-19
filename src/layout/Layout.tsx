import { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import "../index.css";

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen((v) => !v);
  const toggleMobileMenu = () => setIsMobileMenuOpen((v) => !v);

  // Cerrar menú móvil al redimensionar a desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Cerrar menú móvil con Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isMobileMenuOpen]);

  // Margen lateral sincronizado con el sidebar SOLO en md+
  const desktopMargin = isSidebarOpen ? "md:ml-64" : "md:ml-20";

  return (
    <div className="min-h-dvh bg-black text-white flex flex-col">
      {/* Overlay para cerrar menú móvil */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Contenedor principal: Sidebar + contenido */}
      <div className="flex flex-1">
        {/* Sidebar: hidden en móvil, fixed en md+ */}
        <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

        {/* Contenido principal */}
        <div
          className={`flex-1 flex flex-col transition-all duration-300 ease-in-out ${desktopMargin}`}
        >
          {/* Header SOLO móvil */}
          <header className="md:hidden sticky top-0 z-40 bg-black/90 backdrop-blur-sm supports-[backdrop-filter]:bg-black/70 border-b border-white/10">
            <div className="flex items-center justify-between px-4 py-3">
              <button
                onClick={toggleMobileMenu}
                className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gray-800/80 hover:bg-gray-700/80 border border-gray-600 shadow-lg transition-colors duration-200"
                aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
                aria-expanded={isMobileMenuOpen}
              >
                <div className="w-5 h-4 flex flex-col justify-between">
                  <span
                    className={`block h-0.5 w-full bg-white rounded-sm transition-all duration-300 ${
                      isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
                    }`}
                  />
                  <span
                    className={`block h-0.5 w-full bg-white rounded-sm transition-all duration-300 ${
                      isMobileMenuOpen
                        ? "opacity-0 scale-0"
                        : "opacity-100 scale-100"
                    }`}
                  />
                  <span
                    className={`block h-0.5 w-full bg-white rounded-sm transition-all duration-300 ${
                      isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                    }`}
                  />
                </div>
              </button>

              <div className="flex items-center space-x-2">
                <span className="text-xs text-gray-400 uppercase tracking-wider">
                  Portafolio
                </span>
              </div>
            </div>

            {/* Dropdown móvil */}
            <div
              className={`absolute left-0 right-0 top-full z-50 mx-3 mt-2 transition-all duration-300 ease-out ${
                isMobileMenuOpen
                  ? "opacity-100 translate-y-0 visible"
                  : "opacity-0 -translate-y-2 invisible"
              }`}
            >
              <nav className="rounded-xl border border-white/20 bg-gray-900/95 backdrop-blur-sm shadow-2xl overflow-hidden">
                <div className="py-2">
                  <Link
                    to="/"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center px-4 py-3 text-gray-200 hover:bg-white/10 hover:text-white transition-all duration-200 border-b border-white/5 last:border-b-0"
                  >
                    <span className="text-sm font-medium">🏠 Inicio</span>
                  </Link>
                  <Link
                    to="/tareas"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center px-4 py-3 text-gray-200 hover:bg-white/10 hover:text-white transition-all duration-200 border-b border-white/5 last:border-b-0"
                  >
                    <span className="text-sm font-medium">📋 Tareas</span>
                  </Link>
                  <Link
                    to="/glosario"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center px-4 py-3 text-gray-200 hover:bg-white/10 hover:text-white transition-all duration-200 border-b border-white/5 last:border-b-0"
                  >
                    <span className="text-sm font-medium">📚 Glosario</span>
                  </Link>
                  <Link
                    to="/tarea2"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center px-4 py-3 text-gray-200 hover:bg-white/10 hover:text-white transition-all duration-200 border-b border-white/5 last:border-b-0"
                  >
                    <span className="text-sm font-medium">✏️ Tarea 2</span>
                  </Link>
                </div>
              </nav>
            </div>
          </header>

          {/* Contenido */}
          <main className="flex-1">
            <div className="w-full h-full mx-auto px-3 py-6 sm:px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-16">
              <Outlet />
            </div>
          </main>
        </div>
      </div>

      {/* Footer full width */}
      <footer className="w-full bg-gray-900/80 backdrop-blur-sm text-gray-400 text-xs sm:text-sm py-4 md:py-6 text-center border-t border-gray-700/50">
        <div className="max-w-4xl mx-auto px-4">
          <p className="mb-2">
            © {new Date().getFullYear()} Portafolio de Tareas — Desarrollado por{" "}
            <span className="text-blue-400 font-medium">Marvin Vásquez</span>
          </p>
          <div className="flex items-center justify-center space-x-1 text-xs">
            <a
              href="https://github.com/Alexmavl"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-300 transition-colors duration-200 px-2 py-1 rounded"
            >
              GitHub
            </a>
            <span className="text-gray-600">•</span>
            <a
              href="#"
              className="hover:text-blue-300 transition-colors duration-200 px-2 py-1 rounded"
            >
              Contacto
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
