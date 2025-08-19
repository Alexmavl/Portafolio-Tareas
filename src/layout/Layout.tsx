import { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { FaGithub } from 'react-icons/fa'; // ✅ Esto es correcto
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

  const WhatsAppIcon = ({ className = "w-5 h-5" }) => (
  <svg 
    className={className} 
    fill="currentColor" 
    viewBox="0 0 24 24" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12.03 2.05a9.96 9.96 0 0 0-9.846 9.96c0 1.76.516 3.42 1.492 4.84l-1.57 5.76 5.86-1.54a9.96 9.96 0 0 0 4.06 1.01c5.51 0 9.98-4.48 9.98-9.98a9.96 9.96 0 0 0-9.98-9.97zM12.03 20.25a8.28 8.28 0 0 1-4.23-1.15l-.3-.18-3.07.82.84-3.03-.2-.33a8.3 8.3 0 0 1-1.28-4.32c0-4.57 3.7-8.28 8.28-8.28a8.28 8.28 0 0 1 5.87 2.43 8.28 8.28 0 0 1 2.44 5.85c0 4.58-3.71 8.29-8.29 8.29zM16.42 14.9a.6.6 0 0 0-.29-.16c-.22-.12-.86-.42-.99-.47-.13-.06-.28-.08-.42.08-.14.16-.54.65-.66.78-.12.13-.26.15-.49.07a8.5 8.5 0 0 1-2.9-1.84c-.38-.3-.86-.76-1.14-1.25-.28-.49-.03-.76.22-1.02.21-.21.46-.5.69-.75.23-.25.3-.43.4-.63.1-.2.05-.38-.02-.53-.08-.15-.79-1.9-.99-2.3a.98.98 0 0 0-.44-.39c-.15-.08-.32-.08-.49-.08a.9.9 0 0 0-.68.29c-.2.2-.76.75-.76 1.83s.77 2.12.88 2.27c.12.16 1.5.21 2.62 2.6c1.11 2.39 1.11 2.32.12 2.5a.7.7 0 0 1-.36.08c-.18 0-.58-.06-1.42-.5s-1.39-.77-2.65-1.29c-1.26-.52-2.38-1.46-3.23-2.15-.85-.69-1.72-1.47-1.8-1.57a.5.5 0 0 1-.05-.44l.1-.21c.09-.17.2-.33.3-.46.12-.13.25-.26.37-.38.12-.13.25-.24.38-.34.13-.1.25-.2.38-.28.13-.08.25-.15.38-.22.13-.07.25-.13.38-.19.13-.06.25-.12.38-.18.13-.06.25-.11.38-.16.13-.05.25-.1.38-.15.13-.05.25-.1.38-.14.13-.04.25-.08.38-.11.13-.03.25-.06.38-.08.13-.02.25-.04.38-.05.13-.01.25-.02.38-.02h.1l.08-.01c.2 0 .4.04.59.12.19.08.36.2.5.34.14.14.26.3.38.48.12.18.2.39.27.63.07.24.1.5.08.77-.02.27-.1.54-.25.79-.15.25-.33.5-.54.74-.21.24-.42.47-.62.7-.2.23-.39.46-.57.69-.18.23-.35.45-.5.68-.15.23-.28.46-.4.69-.12.23-.22.46-.3.7-.08.24-.1.49-.07.75.03.26.15.5.3.73.15.23.34.46.56.67.22.21.48.4.77.58.29.18.6.34.94.48.34.14.7.27 1.08.39.38.12.77.22 1.17.31.4.09.8.16 1.2.21.4.05.8.08 1.2.08.4 0 .8-.01 1.2-.04.4-.03.8-.07 1.2-.12.4-.05.8-.11 1.2-.19.4-.08.8-.16 1.2-.24.4-.08.8-.17 1.2-.26.4-.09.8-.19 1.2-.3.4-.11.8-.23 1.2-.36.4-.13.8-.27 1.2-.42.4-.15.8-.3.92-.37.12-.07.25-.12.37-.15.12-.03.25-.04.37-.03.12 0 .25.02.37.05.12.03.25.07.37.12.12.05.25.1.37.16.12.06.25.13.37.2.12.07.25.15.37.24.12.09.25.18.37.28.12.1.25.21.37.33.12.12.25.24.37.37.12.13.25.27.37.41.12.14.25.29.37.45.12.16.25.33.37.5.12.17.25.35.37.54.12.19.25.39.37.6a.44.44 0 0 1 .15.31c-.01.21-.1.4-.24.58-.15.18-.32.33-.51.46-.19.13-.4.23-.62.3-.22.07-.44.11-.67.12-.23 0-.46-.02-.69-.08-.23-.06-.46-.15-.69-.26-.23-.11-.46-.25-.69-.41-.23-.16-.46-.35-.69-.57-.23-.22-.46-.47-.69-.74-.23-.27-.46-.56-.69-.87-.23-.31-.46-.65-.69-1.01-.23-.36-.46-.75-.69-1.16-.23-.41-.46-.85-.69-1.3-.23-.45-.46-.92-.69-1.41-.23-.49-.46-1.02-.69-1.57-.23-.55-.46-1.12-.69-1.72-.23-.6-.46-1.22-.69-1.85-.23-.63-.46-1.28-.69-1.95-.23-.67-.46-1.35-.69-2.06-.23-.71-.46-1.44-.69-2.18z" />
  </svg>
);

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
        <div className="relative z-10 text-center mt-20 pt-8 border-t border-gray-700">
      <div className="flex items-center justify-center gap-4 mb-4">
        <div className="w-8 h-1 bg-gradient-to-r from-blue-400 to-teal-400 rounded-full"></div>
        {/* Aquí puedes mantener el ícono decorativo o eliminarlo si solo quieres los de redes sociales */}
        <FaGithub className="w-6 h-6 text-gray-400" />
        <div className="w-8 h-1 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full"></div>
      </div>
      <p className="text-gray-500 text-sm">
        Desarrollado con <span className="text-red-400">❤️</span> usando 
        <span className="text-blue-400"> React</span> y 
        <span className="text-teal-400"> Tailwind CSS</span>
      </p>

      {/* ➡️ Código del nuevo pie de página con iconos de GitHub y WhatsApp */}
      <div className="flex items-center justify-center space-x-4 mt-4">
        <a
          href="https://github.com/Alexmavl"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-blue-300 transition-colors duration-200"
        >
          <FaGithub className="w-6 h-6" />
        </a>
        <a
          href="https://wa.me/50233585075" 
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-green-500 transition-colors duration-200"
        >
          <WhatsAppIcon className="w-6 h-6" />
        </a>
      </div>
    </div>
      </footer>
    </div>
  );
};

export default Layout;
