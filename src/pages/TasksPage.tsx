import { Link } from 'react-router-dom';
import '../App.css';

const tasksData = [
  {
    id: 1,
    title: 'Glosario Desarrollo Web',
    description: 'Esta es una tarea nos ayuda a comprender el significado de cada sigla que vimos en la clase.',
    imageUrl: '/Imagenes/glosario.jpg',
    link: '/glosario',
    repo: null,
    desp: null,
  },
  {
    id: 2,
    title: 'Formulario de Registro actualización de datos',
    description: 'Esta tarea se utilizaron los diferentes input para generar un formulario.',
    imageUrl: '/Imagenes/Formulario.png',
    link: '/tarea2',
    repo: 'https://github.com/Alexmavl/Formulario-Tarea1',
    desp: 'https://formulario-tarea1.vercel.app/',
  },
  {
    id: 3,
    title: 'Página con aplicaciones responsivas',
    description: 'Implementación de diseño responsive con CSS Grid y Flexbox.',
    imageUrl: '/Imagenes/TareaR.png',
    link: null,
    repo: 'https://github.com/Alexmavl/Tarea-Responsiva',
    desp: 'https://tarea-responsiva.vercel.app/',
  },
];

// Componente de icono GitHub SVG
const GitHubIcon = ({ className = "w-5 h-5" }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
      clipRule="evenodd"
    />
  </svg>
);

// Componente de icono de enlace externo
const ExternalLinkIcon = ({ className = "w-4 h-4" }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
    />
  </svg>
);

// Componente de icono de código
const CodeIcon = ({ className = "w-5 h-5" }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
    />
  </svg>
);

const TasksPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900/20 to-teal-900/20 text-white p-6">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-pulse opacity-60" />
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-teal-400 rounded-full animate-ping opacity-40" />
        <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-cyan-400 rounded-full animate-bounce opacity-30" />
        <div className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-green-400 rounded-full animate-pulse opacity-50" />
      </div>

      {/* Header Section */}
      <div className="relative z-10 text-center mb-16">
        <div className="inline-flex items-center justify-center p-4 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full mb-8 shadow-2xl">
          <GitHubIcon className="w-10 h-10" />
        </div>
        <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-blue-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
          Mis Tareas y Proyectos
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Explora mi portafolio de <span className="text-teal-400 font-semibold">tareas de la clase desarrollo web</span> y aplicaciones
        </p>
        
        {/* Decorative line */}
        <div className="flex items-center justify-center mt-8 gap-4">
          <div className="w-16 h-1 bg-gradient-to-r from-transparent to-blue-400 rounded-full"></div>
          <CodeIcon className="w-6 h-6 text-teal-400" />
          <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-transparent rounded-full"></div>
        </div>
      </div>

      {/* Task Grid */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {tasksData.map((task) => (
          <div
            key={task.id}
            className="group bg-gray-800/90 backdrop-blur-sm rounded-2xl shadow-2xl p-6 border border-gray-700 hover:border-blue-500/50 transform transition-all duration-500 hover:scale-[1.02] hover:shadow-blue-500/20"
          >
            {/* Glow Effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 via-teal-600 to-cyan-600 rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-300"></div>
            
            <div className="relative">
              {/* Conditional Image */}
              {task.imageUrl ? (
                <div className="mb-6 rounded-xl overflow-hidden relative">
                  <img
                    src={task.imageUrl}
                    alt={task.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                      <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse delay-150"></div>
                      <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse delay-300"></div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="mb-6 rounded-xl h-48 bg-gradient-to-br from-gray-700/50 to-gray-600/50 flex items-center justify-center border border-gray-600 group-hover:border-teal-500/50 transition-colors duration-300">
                  <div className="text-center">
                    <GitHubIcon className="w-16 h-16 text-gray-400 group-hover:text-teal-400 transition-colors duration-300 mx-auto mb-2" />
                    <span className="text-xs text-gray-500 group-hover:text-teal-400 transition-colors duration-300">Repositorio GitHub</span>
                  </div>
                </div>
              )}
              
              {/* Content */}
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors duration-300 line-clamp-2">
                  {task.title}
                </h3>
                <p className="text-gray-400 text-sm mb-6 line-clamp-3 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {task.description}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-3">
                {/* GitHub Repository Button */}
                {task.repo && (
                  <a
                    href={task.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 text-white font-medium py-3 px-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-gray-500/25 border border-gray-600 hover:border-gray-400"
                  >
                    <GitHubIcon className="w-5 h-5" />
                    <span>Ver Repositorio</span>
                    <ExternalLinkIcon className="w-4 h-4 opacity-70" />
                  </a>
                )}
                
                {/* Project Link Button */}
                {task.link && (
                  <Link
                    to={task.link}
                    className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white font-medium py-3 px-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 border border-blue-500/50 hover:border-teal-400/50"
                  >
                    <CodeIcon className="w-5 h-5" />
                    <span>Ver tarea</span>
                  </Link>
                )}
                
                {/* Deployment Button */}
                {task.desp && (
                  <a
                    href={task.desp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-gradient-to-r from-lime-400 to-green-500 hover:from-lime-500 hover:to-green-600 text-gray-900 font-bold py-3 px-5 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-lime-400/30 border-2 border-lime-300 hover:border-green-400 group transform hover:-translate-y-0.5"
                  >
                    <svg 
                      className="w-5 h-5 "
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="2.5" 
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                    <span className="text-sm">VER DESPLIEGUE</span>
                    <ExternalLinkIcon className="w-4 h-4 opacity-80 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                    <span className="absolute inset-0 bg-white/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Statistics Section */}
      <div className="relative z-10 max-w-4xl mx-auto mt-20 p-8 rounded-2xl bg-gradient-to-r from-gray-800/50 to-gray-700/50 border border-gray-600 backdrop-blur-sm">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-3xl font-bold text-blue-400">{tasksData.length}</div>
            <div className="text-gray-400 text-sm">Proyectos Completados</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-teal-400">100%</div>
            <div className="text-gray-400 text-sm">Tareas Entregadas</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-cyan-400">∞</div>
            <div className="text-gray-400 text-sm">Ganas de Aprender</div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 text-center mt-20 pt-8 border-t border-gray-700">
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="w-8 h-1 bg-gradient-to-r from-blue-400 to-teal-400 rounded-full"></div>
          <GitHubIcon className="w-6 h-6 text-gray-400" />
          <div className="w-8 h-1 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full"></div>
        </div>
        <p className="text-gray-500 text-sm">
          Desarrollado con <span className="text-red-400">❤️</span> usando 
          <span className="text-blue-400"> React</span> y 
          <span className="text-teal-400"> Tailwind CSS</span>
        </p>
      </div>
    </div>
  );
};

export default TasksPage;