import '../App.css';
import './TasksPage.css'; // Asegúrate de importar los estilos

const tasksData = [
  {
    id: 1,
    title: 'Tarea de ejemplo',
    description: 'Esta es una tarea de ejemplo para el curso de Desarrollo Web.',
    imageUrl: '/Imagenes/glosario.jpg', // Cambia por tu imagen real
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
    <div className="tasks-page">
      <div className="tasks-header">
        <h1 className="tasks-title">Mis Tareas</h1>
        <p className="tasks-subtitle">Organiza y gestiona todas tus tareas pendientes.</p>
      </div>

      <div className="tasks-grid">
        {tasksData.map(({ id, title, description, imageUrl, link }) => (
          <div key={id} className="card">
            <img src={imageUrl} alt={title} className="card-image" />
            <h3>{title}</h3>
            <p>{description}</p>
            <a href={link} target="_blank" rel="noopener noreferrer" className="card-link">
              Ver contenido teórico
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TasksPage;
