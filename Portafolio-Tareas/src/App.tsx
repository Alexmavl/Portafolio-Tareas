import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Homepage from "./pages/Homepage";
import TaskPage from "./pages/TasksPage";
import Glosario from "./components/Glosario"; // Nombre y ruta correctos

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/tareas" element={<TaskPage />} />
        <Route path="/glosario" element={<Glosario />} />
        {/* Agrega más rutas aquí */}
      </Routes>
    </Layout>
  );
}

export default App;
