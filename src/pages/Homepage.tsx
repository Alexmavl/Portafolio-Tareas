import React, { useEffect, useState } from 'react';
import { FaCode, FaGraduationCap, FaLightbulb, FaRocket, FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaArrowDown } from 'react-icons/fa';
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
  const [scrollY, setScrollY] = useState(0);

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

    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToNext = () => {
    const nextSection = document.getElementById('development');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-gray-900 text-gray-100 font-sans leading-relaxed overflow-x-hidden">
      {/* Hero Section */}
      <section
        id="hero"
        className={`section-observer relative h-screen flex items-center justify-center text-center overflow-hidden transition-all duration-1000 ${visibleSections.has('hero') ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}
      >
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/20 to-teal-900/20">
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              background: `radial-gradient(circle at ${50 + scrollY * 0.1}% ${50 + scrollY * 0.05}%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)`,
            }}
          />
        </div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-pulse opacity-60" />
          <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-teal-400 rounded-full animate-ping opacity-40" />
          <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-cyan-400 rounded-full animate-bounce opacity-30" />
          <div className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-green-400 rounded-full animate-pulse opacity-50" />
        </div>

        <div className="relative z-10 p-8 max-w-4xl mx-auto">
          <div className="mb-8 animate-fade-in-up">
            <div className="inline-block p-4 rounded-full bg-gradient-to-r from-blue-600 to-teal-600 shadow-2xl mb-6">
              <FaCode className="text-4xl text-white" />
            </div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black mb-6 animate-fade-in-up delay-200">
            <span className="bg-gradient-to-r from-blue-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Tareas
            </span>
          </h1>
          
          <p className="text-2xl md:text-3xl font-light max-w-3xl mx-auto mb-8 text-gray-300 animate-fade-in-up delay-400">
            Desarrollo Web - Una experiencia de aprendizaje 
            <span className="text-teal-400 font-medium"> transformadora</span>
          </p>
          
          <div className="animate-fade-in-up delay-600 mb-12">
            <img
              src="/Imagenes/LogotipoUMG.png"
              alt="Universidad Mariano Gálvez"
              className="h-28 md:h-36 mx-auto filter drop-shadow-2xl hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Scroll Indicator */}
          <button 
            onClick={scrollToNext}
            className="animate-bounce animate-fade-in-up delay-800 text-teal-400 hover:text-teal-300 transition-colors duration-300"
          >
            <FaArrowDown className="text-2xl mx-auto" />
            <span className="block text-sm mt-2">Descubre más</span>
          </button>
        </div>
      </section>

      {/* Development Section */}
      <section
        id="development"
        className={`section-observer relative min-h-screen py-32 bg-gradient-to-b from-gray-900 to-gray-800 transition-all duration-1000 ${visibleSections.has('development') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div className="container mx-auto px-6 md:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2 space-y-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 shadow-lg">
                  <FaCode className="text-2xl text-white" />
                </div>
                <span className="text-blue-400 font-semibold text-lg">DESARROLLO</span>
              </div>
              
              <h2 className="text-5xl md:text-6xl font-black mb-8 leading-tight">
                El Poder del 
                <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent block">
                  Desarrollo Web
                </span>
              </h2>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                El desarrollo web moderno es mucho más que código: es la puerta de entrada
                a la innovación digital. En este curso hemos explorado las tecnologías más
                actuales que definen el futuro de la web.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-800/50 border border-gray-700 hover:border-blue-500/50 transition-colors duration-300">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-gray-300">Interfaces interactivas que cautivan usuarios</p>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-800/50 border border-gray-700 hover:border-teal-500/50 transition-colors duration-300">
                  <div className="w-2 h-2 bg-teal-400 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-gray-300">Arquitecturas robustas y escalables</p>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-800/50 border border-gray-700 hover:border-cyan-500/50 transition-colors duration-300">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-gray-300">Experiencias excepcionales para usuarios</p>
                </div>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-teal-600 to-cyan-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
                <img
                  src="/Imagenes/Home1.jpg"
                  alt="Desarrollo Web Moderno"
                  className="relative w-full h-auto rounded-2xl shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
                  <span className="text-2xl font-bold text-white">Desarrollo Web Moderno</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section
        id="technologies"
        className={`section-observer relative min-h-screen py-32 bg-gradient-to-b from-gray-800 to-gray-900 transition-all duration-1000 ${visibleSections.has('technologies') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div className="container mx-auto px-6 md:px-8">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
            <div className="w-full lg:w-1/2 space-y-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-full bg-gradient-to-r from-teal-600 to-green-600 shadow-lg">
                  <FaGraduationCap className="text-2xl text-white" />
                </div>
                <span className="text-teal-400 font-semibold text-lg">TECNOLOGÍAS</span>
              </div>
              
              <h2 className="text-5xl md:text-6xl font-black mb-8 leading-tight">
                Stack
                <span className="bg-gradient-to-r from-teal-400 to-green-400 bg-clip-text text-transparent block">
                  Tecnológico
                </span>
              </h2>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Durante este curso he adquirido competencias en las tecnologías más
                demandadas del mercado actual, construyendo una base sólida para el desarrollo moderno.
              </p>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {techStack.map((tech, index) => (
                  <div
                    key={index}
                    className="group flex flex-col items-center justify-center p-6 rounded-xl bg-gray-800 border border-gray-700 shadow-lg hover:border-teal-500/50 hover:shadow-teal-500/10 transform transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                  >
                    <span className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">{tech.icon}</span>
                    <span className="text-sm font-medium text-center text-gray-300 group-hover:text-white transition-colors duration-300">{tech.name}</span>
                  </div>
                ))}
              </div>
              
              <div className="p-6 rounded-xl bg-gradient-to-r from-teal-900/20 to-green-900/20 border border-teal-500/30">
                <p className="text-lg text-gray-300 leading-relaxed">
                  <span className="text-teal-400 font-semibold">Cada herramienta</span> representa una pieza fundamental
                  en el ecosistema del desarrollo web moderno, permitiendo crear
                  aplicaciones robustas, escalables y con excelente UX.
                </p>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-teal-600 via-green-600 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
                <img
                  src="/Imagenes/Home2.jpg"
                  alt="Tecnologías de Desarrollo"
                  className="relative w-full h-auto rounded-2xl shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
                  <span className="text-2xl font-bold text-white">Stack Tecnológico</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section
        id="vision"
        className={`section-observer relative min-h-screen py-32 bg-gradient-to-b from-gray-900 to-gray-800 transition-all duration-1000 ${visibleSections.has('vision') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div className="container mx-auto px-6 md:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2 space-y-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-full bg-gradient-to-r from-yellow-600 to-orange-600 shadow-lg">
                  <FaLightbulb className="text-2xl text-white" />
                </div>
                <span className="text-yellow-400 font-semibold text-lg">VISIÓN</span>
              </div>
              
              <h2 className="text-5xl md:text-6xl font-black mb-8 leading-tight">
                Visión y
                <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent block">
                  Propósito
                </span>
              </h2>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Esta clase nos ha brindado una visión clara del panorama tecnológico
                actual y futuro. No solo hemos aprendido a programar, sino a pensar
                como verdaderos desarrolladores.
              </p>
              
              <div className="space-y-4">
                <div className="group p-6 rounded-xl bg-gradient-to-r from-gray-800 to-gray-700 border border-gray-600 hover:border-yellow-500/50 hover:shadow-yellow-500/10 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <strong className="text-yellow-400">Pensamiento Crítico</strong>
                  </div>
                  <p className="text-gray-300">Resolver problemas complejos con soluciones elegantes y eficientes</p>
                </div>
                
                <div className="group p-6 rounded-xl bg-gradient-to-r from-gray-800 to-gray-700 border border-gray-600 hover:border-orange-500/50 hover:shadow-orange-500/10 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                    <strong className="text-orange-400">Innovación Constante</strong>
                  </div>
                  <p className="text-gray-300">Mantenerse al día con las últimas tendencias y tecnologías emergentes</p>
                </div>
                
                <div className="group p-6 rounded-xl bg-gradient-to-r from-gray-800 to-gray-700 border border-gray-600 hover:border-red-500/50 hover:shadow-red-500/10 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <strong className="text-red-400">Colaboración</strong>
                  </div>
                  <p className="text-gray-300">Trabajar en equipo para lograr objetivos comunes y ambiciosos</p>
                </div>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
                <img
                  src="/Imagenes/Home 3.jpg"
                  alt="Visión del Desarrollo"
                  className="relative w-full h-auto rounded-2xl shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
                  <span className="text-2xl font-bold text-white">Nuestra Visión</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Section */}
      <section
        id="future"
        className={`section-observer relative min-h-screen py-32 bg-gradient-to-b from-gray-800 to-gray-900 transition-all duration-1000 ${visibleSections.has('future') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div className="container mx-auto px-6 md:px-8">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
            <div className="w-full lg:w-1/2 space-y-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-full bg-gradient-to-r from-green-600 to-teal-600 shadow-lg">
                  <FaRocket className="text-2xl text-white" />
                </div>
                <span className="text-green-400 font-semibold text-lg">FUTURO</span>
              </div>
              
              <h2 className="text-5xl md:text-6xl font-black mb-8 leading-tight">
                Hacia el Futuro
                <span className="bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent block">
                  Digital
                </span>
              </h2>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Este curso ha sido una base firme, no solo para entender el desarrollo web,
                sino para comenzar a construir soluciones reales que impacten positivamente
                en el mundo digital.
              </p>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                La tecnología cambia, pero el pensamiento lógico, la disciplina y la curiosidad
                son constantes. Aquí es donde comienza un camino de evolución continua.
              </p>
              
              <div className="p-8 rounded-2xl bg-gradient-to-br from-green-900/30 via-teal-900/30 to-blue-900/30 border border-green-500/30 backdrop-blur-sm">
                <FaRocket className="text-4xl text-green-400 mb-4" />
                <h3 className="text-2xl md:text-3xl font-bold text-green-400 mb-4">
                  "El desarrollo web no es solo una carrera"
                </h3>
                <p className="text-xl text-gray-200 leading-relaxed">
                  Es una forma de transformar ideas en soluciones que mejoran la vida de las personas
                  y conectan el mundo a través de la tecnología.
                </p>
                <div className="flex items-center gap-2 mt-6">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse delay-150"></div>
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-300"></div>
                  </div>
                  <span className="text-gray-400 text-sm">Innovando constantemente...</span>
                </div>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-green-600 via-teal-600 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
                <img
                  src="/Imagenes/Home 4.jpg"
                  alt="Futuro del Desarrollo"
                  className="relative w-full h-auto rounded-2xl shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
                  <span className="text-2xl font-bold text-white">El Futuro Digital</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;