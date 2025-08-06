
import '../App.css'; // Asegúrate de que esta ruta sea correcta

const TasksPage = () => {
  return (
    <div className="tasks-page">
      <div className="tasks-header">
        <h1 className="tasks-title">Mis Tareas</h1>
        <p className="tasks-subtitle">Organiza y gestiona todas tus tareas pendientes.</p>
      </div>

      <div className="tasks-grid">
        {/* Aquí puedes agregar componentes para mostrar tus tareas */}
        {/* Por ejemplo: un componente <TaskItem /> */}
        <div className="card">
          <h3>Tarea de ejemplo</h3>
          <p>Esta es una tarea de ejemplo para el curso de Desarrollo Web.</p>
        </div>
        <div className="card">
          <h3>Otra tarea</h3>
          <p>Completar la funcionalidad del sidebar.</p>
        </div>
      </div>
    </div>
  );
};

export default TasksPage;