import React, { useEffect, useState } from 'react';
import { FaCode, FaGraduationCap, FaLightbulb, FaRocket, FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiTailwindcss, SiTypescript } from 'react-icons/si';
import '../App.css';
import '../pages/Homepage.css'
type Tech = {
  name: string;
  icon: React.ReactNode;
};

const techStack: Tech[] = [
  { name: 'HTML5', icon: <FaHtml5 color="#e34c26" /> },
  { name: 'CSS3', icon: <FaCss3Alt color="#264de4" /> },
  { name: 'JavaScript', icon: <FaJs color="#f0db4f" /> },
  { name: 'React', icon: <FaReact color="#61dafb" /> },
  { name: 'Node.js', icon: <FaNodeJs color="#3c873a" /> },
  { name: 'TypeScript', icon: <SiTypescript color="#3178c6" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss color="#38bdf8" /> },
];

// Resto de tu componente Homepage igual...



const Homepage = () => {
  const [visibleSections, setVisibleSections] = useState(new Set<string>());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const sections = document.querySelectorAll('.section');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className={`hero-section ${visibleSections.has('hero') ? 'animate-in' : ''}`} id="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Sistema de <span className="highlight">Tareas</span>
            </h1>
            <p className="hero-subtitle">
              Desarrollo Web - Una experiencia de aprendizaje transformadora
            </p>
            <div className="hero-logo">
              <img 
                src="/Imagenes/LogotipoUMG.png" 
                alt="Universidad Mariano Gálvez" 
                className="umg-logo"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Desarrollo Web Section */}
      <section 
        className={`section development-section ${visibleSections.has('development') ? 'animate-in' : ''}`} 
        id="development"
      >
        <div className="section-content">
          <div className="text-content">
            <div className="section-icon">
              <FaCode />
            </div>
            <h2>El Poder del Desarrollo Web</h2>
            <p>
              El desarrollo web moderno es mucho más que código: es la puerta de entrada 
              a la innovación digital. En este curso hemos explorado las tecnologías más 
              actuales que definen el futuro de la web, desde interfaces interactivas 
              hasta arquitecturas robustas que impulsan aplicaciones escalables.
            </p>
            <p>
              Cada línea de código representa una solución, cada componente una 
              oportunidad de crear experiencias excepcionales para los usuarios.
            </p>
          </div>
          <div className="image-content">
            <img 
              src="/Imagenes/Home1.jpg" 
              alt="Desarrollo Web Moderno" 
              className="section-image"
            />
            <div className="image-overlay">
              <span>Desarrollo Web</span>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section 
        className={`section technologies-section ${visibleSections.has('technologies') ? 'animate-in' : ''}`} 
        id="technologies"
      >
        <div className="section-content reverse">
          <div className="image-content">
            <img 
              src="/Imagenes/Home2.jpg" 
              alt="Tecnologías de Desarrollo" 
              className="section-image"
            />
            <div className="image-overlay">
              <span>Stack Tecnológico</span>
            </div>
          </div>
          <div className="text-content">
            <div className="section-icon">
              <FaGraduationCap />
            </div>
            <h2>Tecnologías Dominadas</h2>
            <p>
              Durante este curso he adquirido competencias en las tecnologías más 
              demandadas del mercado actual:
            </p>
            <div className="tech-grid">
              {techStack.map((tech, index) => (
                <div 
                  key={index} 
                  className="tech-badge"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="tech-icon">{tech.icon}</span>
                  <span className="tech-name">{tech.name}</span>
                </div>
              ))}
            </div>
            <p>
              Cada una de estas herramientas representa una pieza fundamental 
              en el ecosistema del desarrollo web moderno, permitiendo crear 
              aplicaciones robustas, escalables y con excelente experiencia de usuario.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section 
        className={`section vision-section ${visibleSections.has('vision') ? 'animate-in' : ''}`} 
        id="vision"
      >
        <div className="section-content">
          <div className="text-content">
            <div className="section-icon">
              <FaLightbulb />
            </div>
            <h2>Visión y Propósito</h2>
            <p>
              Esta clase nos ha brindado una visión clara del panorama tecnológico 
              actual y futuro. No solo hemos aprendido a programar, sino a pensar 
              como verdaderos desarrolladores: analizar problemas, diseñar soluciones 
              elegantes y crear código mantenible.
            </p>
            <div className="vision-points">
              <div className="vision-point">
                <strong>Pensamiento Crítico:</strong> Resolver problemas complejos con soluciones simples
              </div>
              <div className="vision-point">
                <strong>Innovación Constante:</strong> Mantenerse al día con las últimas tendencias
              </div>
              <div className="vision-point">
                <strong>Colaboración:</strong> Trabajar en equipo para lograr objetivos comunes
              </div>
            </div>
          </div>
          <div className="image-content">
            <img 
              src="/Imagenes/Home 3.jpg" 
              alt="Visión del Desarrollo" 
              className="section-image"
            />
            <div className="image-overlay">
              <span>Nuestra Visión</span>
            </div>
          </div>
        </div>
      </section>

      {/* Future Section */}
      <section 
        className={`section future-section ${visibleSections.has('future') ? 'animate-in' : ''}`} 
        id="future"
      >
        <div className="section-content reverse">
          <div className="image-content">
            <img 
              src="/Imagenes/Home 4.jpg" 
              alt="Futuro del Desarrollo" 
              className="section-image"
            />
            <div className="image-overlay">
              <span>El Futuro</span>
            </div>
          </div>
          <div className="text-content">
            <div className="section-icon">
              <FaRocket />
            </div>
            <h2>Hacia el Futuro Digital</h2>
           <p>
    Este curso ha sido una base firme, no solo para entender el desarrollo web, 
    sino para comenzar a construir soluciones reales que impacten positivamente. 
    Cada línea de código que escribimos refleja nuestra capacidad de resolver problemas.
  </p>
            <p>
    La tecnología cambia, pero el pensamiento lógico, la disciplina y la curiosidad 
    son constantes. Aquí es donde comienza un camino de evolución continua, donde 
    cada desafío es una oportunidad para mejorar nuestras habilidades.
  </p>
            <div className="cta-section">
              <h3>El desarrollo web no es solo una carrera, es una forma de transformar ideas en soluciones. 🚀</h3>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
