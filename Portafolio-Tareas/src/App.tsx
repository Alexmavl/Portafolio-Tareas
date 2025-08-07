import { Routes, Route } from 'react-router';
import Layout from './layout/Layout';
import Homepage from './pages/Homepage';
import TaskPage from './pages/TasksPage';



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
