import React, { useEffect, useState } from 'react';
import { 
  FaCode, FaGraduationCap, FaLightbulb, FaRocket, FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaArrowDown, FaTasks
} from 'react-icons/fa';
import { SiTailwindcss, SiTypescript } from 'react-icons/si';
import { Link } from 'react-router-dom';

// ===== Animaciones (CSS-in-JS, sin tocar tailwind.config) =====
const ANIM_CSS = `
@media (prefers-reduced-motion: no-preference) {
  .float-slow { animation: floatY 7s ease-in-out infinite; }
  .float-delay { animation: floatY 8.5s ease-in-out infinite 1.2s; }
  .tilt-hover { transition: transform .35s ease; }
  .tilt-hover:hover { transform: perspective(900px) rotateX(2deg) rotateY(-2deg) scale(1.02); }
  .kenburns { overflow: hidden; }
  .kenburns > img { transform-origin: center; animation: kenburns 12s ease-in-out infinite alternate; }
  .parallax-1 { transform: translateY(var(--parallax, 0px)); will-change: transform; }

  @keyframes floatY {
    0% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0); }
  }
  @keyframes kenburns {
    0% { transform: scale(1); }
    100% { transform: scale(1.06); }
  }
}
`;

// ====== Utilidades Glass ======
const GlassCard: React.FC<React.PropsWithChildren<{ className?: string }>> = ({ className = '', children }) => (
  <div className={`relative group rounded-3xl p-[1px] bg-gradient-to-br from-white/40 via-white/10 to-white/5 shadow-2xl shadow-black/20 ${className}`}>
    <div className="rounded-[calc(1.5rem-1px)] bg-white/10 backdrop-blur-xl ring-1 ring-white/15 transition-all duration-300 group-hover:bg-white/15 group-hover:ring-white/25">
      {children}
    </div>
  </div>
);

// Header reutilizable
const SectionHeader: React.FC<{ icon: React.ReactNode; tag: string; tagColor: string; gradient: string; title: string; titleAccent: string; }>
= ({ icon, tag, tagColor, gradient, title, titleAccent }) => (
  <div className="space-y-6">
    <div className="flex items-center gap-4">
      <div className={`p-3 rounded-full ${gradient} shadow-lg shadow-black/30`}>{icon}</div>
      <span className={`${tagColor} font-semibold text-lg tracking-wide`}>{tag}</span>
    </div>
    <h2 className="text-5xl md:text-6xl font-black leading-tight">
      {title}{' '}
      <span className={`bg-gradient-to-r ${titleAccent} bg-clip-text text-transparent block`}>{tag}</span>
    </h2>
  </div>
);

// ====== Glow reutilizable (fuera del card) ======
type GlowVariant = 'blue' | 'green' | 'warm' | 'teal' | 'white';
const glowClasses: Record<GlowVariant, string> = {
  blue:  'from-blue-400/35 via-purple-500/20',
  green: 'from-green-400/35 via-cyan-400/20',
  warm:  'from-amber-300/35 via-orange-400/20',
  teal:  'from-cyan-400/35 via-teal-400/20',
  white: 'from-white/25 via-gray-300/10',
};

const GlowBelow: React.FC<{ variant?: GlowVariant; widthClass?: string; heightClass?: string; className?: string }>
= ({ variant = 'white', widthClass = 'w-[85%]', heightClass = 'h-20', className = '' }) => (
  <div
    className={[
      'absolute -bottom-3 left-1/2 -translate-x-1/2',
      widthClass, heightClass,
      'pointer-events-none blur-3xl',
      'bg-gradient-to-t to-transparent',
      glowClasses[variant],
      className
    ].join(' ')}
  />
);

// ====== Datos ======
type Tech = { name: string; icon: React.ReactNode };
const techStack: Tech[] = [
  { name: 'HTML5', icon: <FaHtml5 color="#e34c26" /> },
  { name: 'CSS3', icon: <FaCss3Alt color="#264de4" /> },
  { name: 'JavaScript', icon: <FaJs color="#f0db4f" /> },
  { name: 'React', icon: <FaReact color="#61dafb" /> },
  { name: 'Node.js', icon: <FaNodeJs color="#3c873a" /> },
  { name: 'TypeScript', icon: <SiTypescript color="#3178c6" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss color="#38bdf8" /> },
];

const Homepage: React.FC = () => {
  const [visibleSections, setVisibleSections] = useState(new Set<string>());
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setVisibleSections((prev) => new Set(prev).add(entry.target.id));
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    const sections = document.querySelectorAll('.section-observer');
    sections.forEach((s) => observer.observe(s));

    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);

    return () => { observer.disconnect(); window.removeEventListener('scroll', handleScroll); };
  }, []);

  const scrollToNext = () => document.getElementById('development')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <>
      <style>{ANIM_CSS}</style>
<div className="bg-gray-950/50 text-gray-100 font-sans leading-relaxed selection:bg-teal-500/20 selection:text-teal-200 backdrop-blur-md border border-white/10 rounded-xl shadow-lg">
       <section
  id="hero"
  className={`section-observer relative min-h-[92vh] flex items-center justify-center text-center overflow-hidden transition-all duration-1000 ${visibleSections.has('hero') ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}
>
  {/* Fondo animado */}
  <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/20 to-teal-900/20">
    <div
      className="absolute inset-0 opacity-10"
      style={{
        background: `radial-gradient(circle at ${50 + scrollY * 0.1}% ${50 + scrollY * 0.05}%, rgba(59,130,246,0.35) 0%, transparent 50%)`,
      }}
    />
  </div>

  {/* Partículas */}
  <div className="pointer-events-none absolute inset-0 overflow-hidden">
    <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-pulse opacity-60" />
    <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-teal-400 rounded-full animate-ping opacity-40" />
    <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-cyan-400 rounded-full animate-bounce opacity-30" />
    <div className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-green-400 rounded-full animate-pulse opacity-50" />
  </div>

  <div className="relative z-10 p-8 max-w-3xl mx-auto flex flex-col items-center">
    <div className="mb-8">
      <div className="inline-block p-4 rounded-full bg-gradient-to-r from-blue-600 to-teal-600 shadow-2xl">
        <FaCode className="text-4xl text-white" />
      </div>
    </div>

    {/* Wrapper relative -> Card + GlowBelow fuera */}
    <div className="relative mb-10">
      <GlassCard>
        <div
          className="relative w-56 h-56 rounded-[inherit] overflow-hidden kenburns float-slow tilt-hover parallax-1"
          style={{ ['--parallax' as any]: `${scrollY * 0.03}px` }}
        >
          <img src="/Imagenes/perfil.jpeg" alt="Foto de perfil" className="object-cover w-full h-full" />
        </div>
      </GlassCard>
      {/* Si ya tienes el componente GlowBelow, mantenlo */}
      {/* <GlowBelow variant="blue" /> */}
    </div>

    <h1 className="text-4xl md:text-6xl font-black mb-4 text-center">
      <span className="bg-gradient-to-r from-blue-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
        ¡Hola! Soy Marvin Vásquez
      </span>
    </h1>

    <GlassCard className="mb-6">
      <p className="text-lg md:text-xl font-light max-w-2xl mx-auto px-6 py-4 text-gray-200">
        Bienvenido a mi portafolio de tareas de Desarrollo Web. Aquí comparto mi aprendizaje y proyectos realizados durante este curso.
      </p>
    </GlassCard>

    {/* 🔹 BOTÓN TAREAS dentro del Hero */}
    <div className="mb-10">
      <Link
        to="/tareas"
        className="
          inline-flex items-center gap-2 rounded-2xl px-5 py-3
          ring-1 ring-white/15 bg-white/5 hover:bg-white/10
          backdrop-blur-md shadow-lg shadow-black/20
          transition
        "
      >
        <FaTasks className="text-lg" />
        <span className="text-base">Tareas</span>
      </Link>
      {/* Brillito difuminado por fuera del botón (opcional) */}
      <div className="relative">
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2/3 h-6 bg-gradient-to-t from-blue-400/30 via-purple-500/10 to-transparent blur-2xl pointer-events-none" />
      </div>
    </div>

    {/* Indicador de scroll */}
    <button onClick={scrollToNext} className="text-teal-400 hover:text-teal-300 transition-colors">
      <FaArrowDown className="text-2xl mx-auto" />
      <span className="block text-sm mt-2">¡Descubre mis pensamientos!</span>
    </button>
  </div>
</section>
        {/* ===== Desarrollo ===== */}
        <section
          id="development"
          className={`section-observer relative min-h-screen py-24 bg-gradient-to-b from-gray-950 to-gray-900 transition-all duration-1000 ${visibleSections.has('development') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="container mx-auto px-6 md:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
              <div className="w-full lg:w-1/2 space-y-8">
                <SectionHeader
                  icon={<FaCode className="text-2xl text-white" />}
                  tag="DESARROLLO"
                  tagColor="text-blue-400"
                  gradient="bg-gradient-to-r from-blue-600 to-cyan-600"
                  title="El Poder del"
                  titleAccent="from-blue-400 to-teal-400"
                />

                <div className="max-w-xl">
                  <GlassCard>
                    <div className="px-8 py-7">
                      <p className="text-lg text-gray-200">
                        El desarrollo web moderno es mucho más que código: es la puerta de entrada a la innovación digital. En este curso hemos explorado las tecnologías más actuales que definen el futuro de la web.
                      </p>
                    </div>
                  </GlassCard>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <GlassCard>
                    <div className="px-6 py-5 flex gap-4">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                      <p className="text-gray-200">Interfaces interactivas que cautivan usuarios</p>
                    </div>
                  </GlassCard>
                  <GlassCard>
                    <div className="px-6 py-5 flex gap-4">
                      <div className="w-2 h-2 bg-teal-400 rounded-full mt-2 flex-shrink-0" />
                      <p className="text-gray-200">Arquitecturas robustas y escalables</p>
                    </div>
                  </GlassCard>
                  <GlassCard>
                    <div className="px-6 py-5 flex gap-4">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                      <p className="text-gray-200">Experiencias excepcionales para usuarios</p>
                    </div>
                  </GlassCard>
                </div>
              </div>

              <div className="w-full lg:w-1/2">
                {/* Wrapper relative: Card + GlowBelow fuera */}
                <div className="relative mx-auto max-w-md">
                  <GlassCard>
                    <div
                      className="relative rounded-[inherit] overflow-hidden kenburns float-slow tilt-hover parallax-1"
                      style={{ ['--parallax' as any]: `${scrollY * 0.06}px` }}
                    >
                      <img src="/Imagenes/Home1.jpg" alt="Desarrollo Web Moderno" className="w-full h-auto" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent flex items-end justify-center p-6">
                        <span className="text-xl font-bold text-white drop-shadow">Desarrollo Web Moderno</span>
                      </div>
                    </div>
                  </GlassCard>
                  <GlowBelow variant="teal" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== Tecnologías ===== */}
        <section
          id="technologies"
          className={`section-observer relative min-h-screen py-24 bg-gradient-to-b from-gray-900 to-gray-950 transition-all duration-1000 ${visibleSections.has('technologies') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="container mx-auto px-6 md:px-8">
            <div className="flex flex-col lg:flex-row-reverse items-center gap-10 lg:gap-16">
              <div className="w-full lg:w-1/2 space-y-8">
                <SectionHeader
                  icon={<FaGraduationCap className="text-2xl text-white" />}
                  tag="TECNOLOGÍAS"
                  tagColor="text-teal-400"
                  gradient="bg-gradient-to-r from-teal-600 to-green-600"
                  title="Stack"
                  titleAccent="from-teal-400 to-green-400"
                />

                <GlassCard>
                  <div className="px-8 py-7">
                    <p className="text-lg text-gray-200">
                      Durante este curso he adquirido competencias en las tecnologías más demandadas del mercado actual, construyendo una base sólida para el desarrollo moderno.
                    </p>
                  </div>
                </GlassCard>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                  {techStack.map((tech, idx) => (
                    <GlassCard key={idx}>
                      <div className="px-6 py-6 flex flex-col items-center">
                        <span className="text-4xl mb-3">{tech.icon}</span>
                        <span className="text-sm font-medium text-center text-gray-200">{tech.name}</span>
                      </div>
                    </GlassCard>
                  ))}
                </div>

                <GlassCard>
                  <div className="px-6 py-5">
                    <p className="text-lg text-gray-200">
                      <span className="text-teal-300 font-semibold">Cada herramienta</span> representa una pieza fundamental en el ecosistema del desarrollo web moderno, permitiendo crear aplicaciones robustas, escalables y con excelente UX.
                    </p>
                  </div>
                </GlassCard>
              </div>

              <div className="w-full lg:w-1/2">
                <div className="relative mx-auto max-w-md">
                  <GlassCard>
                    <div
                      className="relative rounded-[inherit] overflow-hidden kenburns float-slow tilt-hover parallax-1"
                      style={{ ['--parallax' as any]: `${-scrollY * 0.04}px` }}
                    >
                      <img src="/Imagenes/Home2.jpg" alt="Tecnologías de Desarrollo" className="w-full h-auto" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent flex items-end justify-center p-6">
                        <span className="text-xl font-bold text-white drop-shadow">Stack Tecnológico</span>
                      </div>
                    </div>
                  </GlassCard>
                  <GlowBelow variant="green" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== Visión ===== */}
        <section
          id="vision"
          className={`section-observer relative min-h-screen py-24 bg-gradient-to-b from-gray-950 to-gray-900 transition-all duration-1000 ${visibleSections.has('vision') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="container mx-auto px-6 md:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
              <div className="w-full lg:w-1/2 space-y-8">
                <SectionHeader
                  icon={<FaLightbulb className="text-2xl text-white" />}
                  tag="VISIÓN"
                  tagColor="text-yellow-400"
                  gradient="bg-gradient-to-r from-yellow-600 to-orange-600"
                  title="Visión y"
                  titleAccent="from-yellow-400 to-orange-400"
                />

                <GlassCard>
                  <div className="px-8 py-7">
                    <p className="text-lg text-gray-200">
                      Esta clase nos ha brindado una visión clara del panorama tecnológico actual y futuro. No solo hemos aprendido a programar, sino a pensar como verdaderos desarrolladores.
                    </p>
                  </div>
                </GlassCard>

                <div className="grid sm:grid-cols-2 gap-5">
                  <GlassCard>
                    <div className="px-6 py-5">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-3 h-3 bg-yellow-400 rounded-full" />
                        <strong className="text-yellow-300">Pensamiento Crítico</strong>
                      </div>
                      <p className="text-gray-200">Resolver problemas complejos con soluciones elegantes y eficientes</p>
                    </div>
                  </GlassCard>
                  <GlassCard>
                    <div className="px-6 py-5">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-3 h-3 bg-orange-400 rounded-full" />
                        <strong className="text-orange-300">Innovación Constante</strong>
                      </div>
                      <p className="text-gray-200">Mantenerse al día con las últimas tendencias y tecnologías emergentes</p>
                    </div>
                  </GlassCard>
                  <GlassCard>
                    <div className="px-6 py-5">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-3 h-3 bg-red-400 rounded-full" />
                        <strong className="text-red-300">Colaboración</strong>
                      </div>
                      <p className="text-gray-200">Trabajar en equipo para lograr objetivos comunes y ambiciosos</p>
                    </div>
                  </GlassCard>
                </div>
              </div>

              <div className="w-full lg:w-1/2">
                <div className="relative mx-auto max-w-md">
                  <GlassCard>
                    <div
                      className="relative rounded-[inherit] overflow-hidden kenburns float-slow tilt-hover parallax-1"
                      style={{ ['--parallax' as any]: `${scrollY * 0.05}px` }}
                    >
                      <img src="/Imagenes/Home 3.jpg" alt="Visión del Desarrollo" className="w-full h-auto" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent flex items-end justify-center p-6">
                        <span className="text-xl font-bold text-white drop-shadow">Nuestra Visión</span>
                      </div>
                    </div>
                  </GlassCard>
                  <GlowBelow variant="warm" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== Futuro ===== */}
        <section
          id="future"
          className={`section-observer relative min-h-screen py-24 bg-gradient-to-b from-gray-900 to-gray-950 transition-all duration-1000 ${visibleSections.has('future') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="container mx-auto px-6 md:px-8">
            <div className="flex flex-col lg:flex-row-reverse items-center gap-10 lg:gap-16">
              <div className="w-full lg:w-1/2 space-y-8">
                <SectionHeader
                  icon={<FaRocket className="text-2xl text-white" />}
                  tag="FUTURO"
                  tagColor="text-green-400"
                  gradient="bg-gradient-to-r from-green-600 to-teal-600"
                  title="Hacia el Futuro"
                  titleAccent="from-green-400 to-teal-400"
                />

                <GlassCard>
                  <div className="px-8 py-7">
                    <p className="text-lg text-gray-200">
                      Este curso ha sido una base firme, no solo para entender el desarrollo web, sino para comenzar a construir soluciones reales que impacten positivamente en el mundo digital.
                    </p>
                    <p className="text-lg text-gray-200 mt-3">
                      La tecnología cambia, pero el pensamiento lógico, la disciplina y la curiosidad son constantes. Aquí es donde comienza un camino de evolución continua.
                    </p>
                  </div>
                </GlassCard>

                <GlassCard>
                  <div className="px-8 py-7">
                    <FaRocket className="text-4xl text-green-300 mb-4" />
                    <h3 className="text-2xl md:text-3xl font-bold text-green-300 mb-3">"El desarrollo web no es solo una carrera"</h3>
                    <p className="text-lg text-gray-100">
                      Es una forma de transformar ideas en soluciones que mejoran la vida de las personas y conectan el mundo a través de la tecnología.
                    </p>
                    <div className="flex items-center gap-2 mt-6">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                        <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse delay-150" />
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-300" />
                      </div>
                      <span className="text-gray-400 text-sm">Innovando constantemente...</span>
                    </div>
                  </div>
                </GlassCard>
              </div>

              <div className="w-full lg:w-1/2">
                <div className="relative mx-auto max-w-md">
                  <GlassCard>
                    <div
                      className="relative rounded-[inherit] overflow-hidden kenburns float-slow tilt-hover parallax-1"
                      style={{ ['--parallax' as any]: `${-scrollY * 0.03}px` }}
                    >
                      <img src="/Imagenes/Home 4.jpg" alt="Futuro del Desarrollo" className="w-full h-auto" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent flex items-end justify-center p-6">
                        <span className="text-xl font-bold text-white drop-shadow">El Futuro Digital</span>
                      </div>
                    </div>
                  </GlassCard>
                  <GlowBelow variant="teal" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Homepage;
