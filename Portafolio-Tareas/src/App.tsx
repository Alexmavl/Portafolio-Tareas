// src/App.tsx
import { Routes, Route } from 'react-router';
import Layout from './layout/Layout';
import Homepage from './pages/Homepage';
import TaskPage from './pages/TasksPage';

// Aquí puedes ir agregando más páginas como Tareas, Proyectos...

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/tareas" element={<TaskPage />} />
        {/* Agrega más rutas aquí */}
      </Routes>
    </Layout>
  );
}

export default App;
