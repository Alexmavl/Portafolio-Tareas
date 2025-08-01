import { FaSpinner } from 'react-icons/fa'
import './App.css'

function App() {
  return (
    <>
      <h1>Portafolio de Tareas de Desarrollo Web</h1>
      <h2 className="proceso">
        En Proceso <FaSpinner className="spinner" />
      </h2>

      <img
        src="/Imagenes/LogotipoUMG.png"
        className="logo"
        alt="Logotipo de la Universidad Mariano Gálvez"
      />
    </>
  )
}

export default App
