
import '../App.css'; // You can remove this line if all styles are converted to Tailwind

const tasksData = [
  {
    id: 1,
    title: 'Tarea de ejemplo',
    description: 'Esta es una tarea de ejemplo para el curso de Desarrollo Web.',
    imageUrl: '/Imagenes/glosario.jpg',
    link: 'https://github.com/tuusuario/tu-repo-ejemplo',
  },
  {
    id: 2,
    title: 'Otra tarea',
    description: 'Completar la funcionalidad del sidebar.',
    imageUrl: '/Imagenes/Formulario.png',
    link: 'https://github.com/tuusuario/otro-repo',
  },
  {
    id: 3,
    title: 'Otra tarea',
    description: 'Completar la funcionalidad del sidebar.',
    imageUrl: '',
    link: 'https://github.com/tuusuario/otro-repo',
  },
  {
    id: 4,
    title: 'Otra tarea',
    description: 'Completar la funcionalidad del sidebar.',
    imageUrl: '',
    link: 'https://github.com/tuusuario/otro-repo',
  },
  {
    id: 5,
    title: 'Otra tarea',
    description: 'Completar la funcionalidad del sidebar.',
    imageUrl: '',
    link: 'https://github.com/tuusuario/otro-repo',
  },
  {
    id: 6,
    title: 'Otra tarea',
    description: 'Completar la funcionalidad del sidebar.',
    imageUrl: '',
    link: 'https://github.com/tuusuario/otro-repo',
  },
];

const TasksPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Mis Tareas</h1>
        <p className="text-lg md:text-xl text-gray-400">
          Organiza y gestiona todas tus tareas pendientes.
        </p>
      </div>

      {/* Task Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {tasksData.map(({ id, title, description, imageUrl, link }) => (
          <div
            key={id}
            className="bg-gray-800 rounded-lg shadow-xl p-6 flex flex-col justify-between transform transition-all duration-300 hover:scale-105"
          >
            {/* Conditional Image */}
            {imageUrl && (
              <div className="mb-4 rounded-lg overflow-hidden">
                <img
                  src={imageUrl}
                  alt={title}
                  className="w-full h-48 object-cover"
                />
              </div>
            )}
            
            <h3 className="text-2xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-400 text-sm mb-4">{description}</p>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-block text-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300"
            >
              Ver contenido teórico
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TasksPage;