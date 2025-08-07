import React, { useEffect, useState } from 'react';
import { FaCode, FaGraduationCap, FaLightbulb, FaRocket, FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiTailwindcss, SiTypescript } from 'react-icons/si';

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

    const sections = document.querySelectorAll('.section-observer');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-gray-900 text-gray-100 font-sans leading-relaxed">
      {/* Hero Section */}
      <section
        id="hero"
        className={`section-observer relative h-screen flex items-center justify-center text-center overflow-hidden transition-opacity duration-1000 ${visibleSections.has('hero') ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}
      >
        <div className="absolute inset-0 bg-hero bg-cover bg-center"></div>
        <div className="relative z-10 p-8">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 animate-fade-in-up">
            <span className="text-blue-400">Tareas</span>
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto mb-8 animate-fade-in-up delay-200">
            Desarrollo Web - Una experiencia de aprendizaje transformadora
          </p>
          <div className="animate-fade-in-up delay-400">
            <img
              src="/Imagenes/LogotipoUMG.png"
              alt="Universidad Mariano Gálvez"
              className="h-24 md:h-32 mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Development Section */}
      <section
        id="development"
        className={`section-observer relative min-h-screen py-24 md:py-40 bg-gray-800 transition-opacity duration-1000 ${visibleSections.has('development') ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}
      >
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <div className="text-4xl text-blue-400 mb-4">
                <FaCode />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">El Poder del Desarrollo Web</h2>
              <p className="text-lg md:text-xl text-gray-300 mb-6">
                El desarrollo web moderno es mucho más que código: es la puerta de entrada
                a la innovación digital. En este curso hemos explorado las tecnologías más
                actuales que definen el futuro de la web, desde interfaces interactivas
                hasta arquitecturas robustas que impulsan aplicaciones escalables.
              </p>
              <p className="text-lg md:text-xl text-gray-300">
                Cada línea de código representa una solución, cada componente una
                oportunidad de crear experiencias excepcionales para los usuarios.
              </p>
            </div>
            <div className="w-full md:w-1/2 relative group">
              <img
                src="/Imagenes/Home1.jpg"
                alt="Desarrollo Web Moderno"
                className="w-full h-auto rounded-lg shadow-xl"
              />
              <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                <span className="text-2xl md:text-3xl font-bold">Desarrollo Web</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section
        id="technologies"
        className={`section-observer relative min-h-screen py-24 md:py-40 bg-gray-900 transition-opacity duration-1000 ${visibleSections.has('technologies') ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}
      >
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col-reverse md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2 relative group">
              <img
                src="/Imagenes/Home2.jpg"
                alt="Tecnologías de Desarrollo"
                className="w-full h-auto rounded-lg shadow-xl"
              />
              <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                <span className="text-2xl md:text-3xl font-bold">Stack Tecnológico</span>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="text-4xl text-blue-400 mb-4">
                <FaGraduationCap />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Tecnologías Dominadas</h2>
              <p className="text-lg md:text-xl text-gray-300 mb-6">
                Durante este curso he adquirido competencias en las tecnologías más
                demandadas del mercado actual:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-8">
                {techStack.map((tech, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center justify-center p-4 rounded-lg bg-gray-800 shadow-md transform transition-all duration-300 hover:scale-105"
                  >
                    <span className="text-3xl mb-2">{tech.icon}</span>
                    <span className="text-sm font-medium text-center">{tech.name}</span>
                  </div>
                ))}
              </div>
              <p className="text-lg md:text-xl text-gray-300 mt-6">
                Cada una de estas herramientas representa una pieza fundamental
                en el ecosistema del desarrollo web moderno, permitiendo crear
                aplicaciones robustas, escalables y con excelente experiencia de usuario.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section
        id="vision"
        className={`section-observer relative min-h-screen py-24 md:py-40 bg-gray-800 transition-opacity duration-1000 ${visibleSections.has('vision') ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}
      >
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <div className="text-4xl text-blue-400 mb-4">
                <FaLightbulb />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Visión y Propósito</h2>
              <p className="text-lg md:text-xl text-gray-300 mb-6">
                Esta clase nos ha brindado una visión clara del panorama tecnológico
                actual y futuro. No solo hemos aprendido a programar, sino a pensar
                como verdaderos desarrolladores: analizar problemas, diseñar soluciones
                elegantes y crear código mantenible.
              </p>
              <div className="space-y-4">
                <div className="bg-gray-700 p-4 rounded-lg shadow-sm">
                  <strong>Pensamiento Crítico:</strong> Resolver problemas complejos con soluciones simples
                </div>
                <div className="bg-gray-700 p-4 rounded-lg shadow-sm">
                  <strong>Innovación Constante:</strong> Mantenerse al día con las últimas tendencias
                </div>
                <div className="bg-gray-700 p-4 rounded-lg shadow-sm">
                  <strong>Colaboración:</strong> Trabajar en equipo para lograr objetivos comunes
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 relative group">
              <img
                src="/Imagenes/Home 3.jpg"
                alt="Visión del Desarrollo"
                className="w-full h-auto rounded-lg shadow-xl"
              />
              <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                <span className="text-2xl md:text-3xl font-bold">Nuestra Visión</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Section */}
      <section
        id="future"
        className={`section-observer relative min-h-screen py-24 md:py-40 bg-gray-900 transition-opacity duration-1000 ${visibleSections.has('future') ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}
      >
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col-reverse md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2 relative group">
              <img
                src="/Imagenes/Home 4.jpg"
                alt="Futuro del Desarrollo"
                className="w-full h-auto rounded-lg shadow-xl"
              />
              <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                <span className="text-2xl md:text-3xl font-bold">El Futuro</span>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="text-4xl text-blue-400 mb-4">
                <FaRocket />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Hacia el Futuro Digital</h2>
              <p className="text-lg md:text-xl text-gray-300 mb-6">
                Este curso ha sido una base firme, no solo para entender el desarrollo web,
                sino para comenzar a construir soluciones reales que impacten positivamente.
                Cada línea de código que escribimos refleja nuestra capacidad de resolver problemas.
              </p>
              <p className="text-lg md:text-xl text-gray-300">
                La tecnología cambia, pero el pensamiento lógico, la disciplina y la curiosidad
                son constantes. Aquí es donde comienza un camino de evolución continua, donde
                cada desafío es una oportunidad para mejorar nuestras habilidades.
              </p>
              <div className="mt-8">
                <h3 className="text-xl md:text-2xl font-semibold text-blue-400">
                  El desarrollo web no es solo una carrera, es una forma de transformar ideas en soluciones. 🚀
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;