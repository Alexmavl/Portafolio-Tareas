import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './layout/Layout';
import Homepage from './pages/Homepage';
import TaskPage from './pages/TasksPage';
import Glosario from './components/glosario';
import Tarea2 from './components/tarea2';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/tareas" element={<TaskPage />} />
          <Route path="/glosario" element={<Glosario />} />
          <Route path="/tarea2" element={<Tarea2 />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
