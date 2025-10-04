import React, { useEffect, useState } from "react";
import {
  FaCode,
  FaGraduationCap,
  FaLightbulb,
  FaRocket,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaArrowDown,
  FaLaptopCode,
  FaTasks,
} from "react-icons/fa";
import { SiTailwindcss, SiTypescript } from "react-icons/si";
import { Link } from "react-router-dom";
import RevealSection from "../components/RevealSection";
import { motion } from "framer-motion";
import { containerStagger } from "../animation/variants";

// ===== Animaciones (CSS-in-JS) =====
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

// ====== Componentes Reutilizables ======
const GlassCard: React.FC<React.PropsWithChildren<{ className?: string }>> = ({
  className = "",
  children,
}) => (
  <motion.div
    className={`relative group rounded-3xl p-[1px] bg-gradient-to-br from-white/40 via-white/10 to-white/5 shadow-2xl shadow-black/20 ${className}`}
    initial={{ opacity: 0, y: 20, scale: 0.97 }}  // entrada discreta
    whileInView={{ opacity: 1, y: 0, scale: 1 }} // reveal elegante
    viewport={{ amount: 0.25 }}                  // se repite cada vez que entra
    transition={{
      type: "spring",
      stiffness: 120,   // resorte medio
      damping: 22,      // más damping = menos rebote
    }}
    whileHover={{ y: -2, scale: 1.01 }}          // micro interacción
    whileTap={{ scale: 0.99 }}
    style={{ willChange: "transform, opacity" }}
  >
    <motion.div
      className="rounded-[calc(1.5rem-1px)] bg-white/10 backdrop-blur-xl ring-1 ring-white/15 transition-all duration-300 group-hover:bg-white/15 group-hover:ring-white/25"
      layout
    >
      {children}
    </motion.div>
  </motion.div>
);

const SectionHeader: React.FC<{
  icon: React.ReactNode;
  tag: string;
  tagColor: string;
  gradient: string;
  title: string;
}> = ({ icon, tag, tagColor, gradient, title }) => (
  <motion.div
    className="space-y-4 md:space-y-6"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ amount: 0.3 }} // 👈 se repite cada vez
    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
  >
    <motion.div
      className="flex items-center gap-3 md:gap-4"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ amount: 0.3 }} // 👈 se repite cada vez
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <div
        className={`p-2 md:p-3 rounded-full ${gradient} shadow-lg shadow-black/30`}
      >
        {icon}
      </div>
      <span
        className={`${tagColor} font-semibold text-base md:text-lg tracking-wide`}
      >
        {tag}
      </span>
    </motion.div>

    <motion.h2
      className="text-3xl md:text-5xl lg:text-6xl font-black leading-tight"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.3 }} // 👈 se repite cada vez
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      {title}{" "}
      <span className="bg-gradient-to-r bg-clip-text text-transparent block">
        {tag}
      </span>
    </motion.h2>
  </motion.div>
);

type GlowVariant = "blue" | "green" | "warm" | "teal" | "white";

const GlowBelow: React.FC<{
  variant?: GlowVariant;
  widthClass?: string;
  heightClass?: string;
  className?: string;
}> = ({
  variant = "white",
  widthClass = "w-[85%]",
  heightClass = "h-16 md:h-20",
  className = "",
}) => {
  const glowClasses = {
    blue: "from-blue-400/35 via-purple-500/20",
    green: "from-green-400/35 via-cyan-400/20",
    warm: "from-amber-300/35 via-orange-400/20",
    teal: "from-cyan-400/35 via-teal-400/20",
    white: "from-white/25 via-gray-300/10",
  };

  return (
    <motion.div
      className={[
        "absolute -bottom-3 left-1/2 -translate-x-1/2",
        widthClass,
        heightClass,
        "pointer-events-none blur-3xl",
        className,
      ].join(" ")}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ amount: 0.3 }} // se repite al entrar
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }} // timing del reveal
      style={{ willChange: "transform, opacity" }}
    >
      {/* Hijo que pulsa infinito */}
      <motion.div
        className={[
          "w-full h-full bg-gradient-to-t to-transparent blur-3xl pointer-events-none",
          glowClasses[variant],
        ].join(" ")}
        animate={{ scale: [1, 1.05, 1], opacity: [0.9, 1, 0.9] }}
        transition={{ duration: 2.5, ease: "easeInOut", repeat: Infinity }}
      />
    </motion.div>
  );
};

// ====== Datos ======
const techStack = [
  { name: "HTML5", icon: <FaHtml5 color="#e34c26" /> },
  { name: "CSS3", icon: <FaCss3Alt color="#264de4" /> },
  { name: "JavaScript", icon: <FaJs color="#f0db4f" /> },
  { name: "React", icon: <FaReact color="#61dafb" /> },
  { name: "Node.js", icon: <FaNodeJs color="#3c873a" /> },
  { name: "TypeScript", icon: <SiTypescript color="#3178c6" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss color="#38bdf8" /> },
];

const Homepage: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const sections = document.querySelectorAll(".section-observer");
    sections.forEach((s) => observer.observe(s));

    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToNext = () =>
    document
      .getElementById("development")
      ?.scrollIntoView({ behavior: "smooth" });

  return (
    <>
      <style>{ANIM_CSS}</style>
      <main className="min-h-screen bg-gray-950 text-gray-100">
        {/* Hero Section */}
        <RevealSection
          id="hero"
          direction="up"
          amount={0.2}
          className="relative min-h-[82vh] md:min-h-[88vh] flex items-center justify-center text-center overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 via-blue-900/20 to-teal-900/20"
        >
          {/* Fondo animado con gradiente y partículas */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/20 to-teal-900/20">
            <div
              className="absolute inset-0 opacity-10"
              style={{
                background: `radial-gradient(circle at ${50 + scrollY * 0.1}% ${
                  50 + scrollY * 0.05
                }%, rgba(59,130,246,0.35) 0%, transparent 50%)`,
              }}
            />
          </div>

          {/* Partículas animadas */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className={`absolute ${
                  i === 0
                    ? "top-1/4 left-1/4 w-2 h-2 bg-blue-400 animate-pulse"
                    : i === 1
                    ? "top-1/3 right-1/4 w-1 h-1 bg-teal-400 animate-ping"
                    : i === 2
                    ? "bottom-1/3 left-1/3 w-3 h-3 bg-cyan-400 animate-bounce"
                    : i === 3
                    ? "bottom-1/4 right-1/3 w-2 h-2 bg-green-400 animate-pulse"
                    : i === 4
                    ? "top-1/5 right-1/5 w-1.5 h-1.5 bg-purple-400 animate-pulse delay-300"
                    : "bottom-1/5 left-1/5 w-2 h-2 bg-yellow-400 animate-pulse delay-500"
                } rounded-full opacity-${i === 1 ? 40 : i === 2 ? 30 : 50}`}
              />
            ))}
          </div>

          {/* Contenido principal */}
          <motion.div
            className="relative z-10 w-full max-w-7xl px-4 sm:px-6 md:px-8 lg:px-10 py-10 mx-auto flex flex-col items-center"
            variants={containerStagger}
            initial="hidden"
            animate="show"
          >
            <div className="flex flex-col items-center w-full max-w-5xl">
              {/* Logo y título */}
              <motion.div
                className="mb-10 md:mb-12"
                initial={{ opacity: 0, y: -80 }} // empieza arriba y oculto
                whileInView={{ opacity: 1, y: 0 }} // baja a su posición
                viewport={{ amount: 0.3 }} // se repite cada vez que entra
                transition={{
                  type: "spring", // animación tipo resorte
                  stiffness: 500, // qué tan fuerte es el resorte
                  damping: 20, // controla el rebote
                  bounce: 0.6, // fuerza del “brinco”
                  duration: 1,
                }}
              >
                <div className="inline-flex items-center gap-3 p-4 rounded-full bg-gradient-to-r from-blue-600 to-teal-600 shadow-2xl">
                  <FaCode className="text-4xl md:text-5xl text-white" />
                  <span className="text-xl md:text-2xl font-bold text-white">
                    Portafolio de Tareas Desarrollo Web
                  </span>
                </div>
              </motion.div>

              {/* Título principal */}
              <motion.h1
                className="text-5xl sm:text-6xl md:text-7xl font-black mb-8 text-center leading-tight"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ amount: 0.3 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                <motion.span
                  className="bg-gradient-to-r from-blue-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent inline-block"
                  animate={{
                    textShadow: [
                      "0px 0px 0px rgba(59,130,246,0)",
                      "0px 0px 12px rgba(59,130,246,0.6)",
                      "0px 0px 0px rgba(59,130,246,0)",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    ease: "easeInOut",
                    repeat: Infinity,
                  }}
                >
                  Hola soy Marvin Vásquez
                </motion.span>
              </motion.h1>

              {/* Subtítulo */}

              <motion.h2
                className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-10 text-center max-w-3xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ amount: 0.3 }} // 👈 se repite cada vez que entra
                transition={{
                  duration: 0.7,
                  delay: 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <motion.span
                  className="bg-gradient-to-r from-teal-300 via-cyan-300 to-blue-300 bg-clip-text text-transparent inline-block"
                  animate={{
                    textShadow: [
                      "0px 0px 0px rgba(34,211,238,0)",
                      "0px 0px 10px rgba(34,211,238,0.6)",
                      "0px 0px 0px rgba(34,211,238,0)",
                    ],
                  }}
                  transition={{
                    duration: 2.2,
                    ease: "easeInOut",
                    repeat: Infinity,
                  }}
                >
                  Estudiante de Ingeniería en Sistemas de la Información
                </motion.span>
              </motion.h2>

              {/* Contenedor de imágenes */}
              <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 mb-12 md:mb-16 w-full">
                {[
                  {
                    src: "/Imagenes/perfil2.png",
                    alt: "Foto de perfil",
                    className: "object-cover",
                    label: "Desarrollador Web",
                    icon: <FaLaptopCode className="text-blue-400 text-xl" />,
                    labelClass: "text-blue-400",
                  },
                  {
                    src: "/Imagenes/LogotipoUMG.png",
                    alt: "Logotipo UMG",
                    className: "object-contain p-4",
                    label: "Universidad Mariano Gálvez",
                    icon: <FaGraduationCap className="text-teal-400 text-xl" />,
                    labelClass: "text-teal-400",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex flex-col items-center">
                    {/* GlassCard solo para la imagen */}
                    <div className="relative group mb-4">
                      <GlassCard>
                        <div
                          className="relative w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-[inherit] overflow-hidden kenburns float-slow tilt-hover parallax-1"
                          style={{
                            ["--parallax" as any]: `${scrollY * 0.03}px`,
                          }}
                        >
                          <img
                            src={item.src}
                            alt={item.alt}
                            className={`w-full h-full ${item.className}`}
                          />
                          {/* Eliminado el overlay con el texto */}
                        </div>
                      </GlassCard>
                    </div>

                    {/* Etiqueta fuera del GlassCard */}
                    <div
                      className={`flex items-center gap-2 ${item.labelClass}`}
                    >
                      {item.icon}
                      <span className="text-lg font-medium">{item.label}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Descripción y botones */}
              <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 w-full max-w-4xl">
                <GlassCard className="flex-1">
                  <div className="px-8 py-6">
                    <p className="text-lg md:text-xl font-light text-gray-200 text-center">
                      Soluciones innovadoras y código eficiente. Explora mis
                      proyectos y el proceso de aprendizaje en desarrollo web.
                    </p>
                  </div>
                </GlassCard>

                <div className="flex flex-col sm:flex-row md:flex-col gap-4">
                  {/* Botón Verde Neón */}
                  <Link
                    to="/tareas"
                    className="
      inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3
      bg-green-400 hover:bg-green-500
      shadow-lg shadow-green-500/30
      transition-all text-base font-bold text-gray-900
      min-w-[180px] border-2 border-green-300
      active:scale-95
    "
                  >
                    <FaTasks className="text-lg" />
                    <span>Ver Tareas</span>
                  </Link>

                  {/* Botón Cyan Neón */}
                  <button
                    onClick={scrollToNext}
                    className="
      inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3
      bg-cyan-400 hover:bg-cyan-500
      shadow-lg shadow-cyan-500/30
      transition-all text-base font-bold text-gray-900
      min-w-[180px] border-2 border-cyan-300
      active:scale-95
    "
                    aria-label="Desplazarse hacia abajo"
                  >
                    <FaArrowDown className="text-lg" />
                    <span>Explorar Mis Ideas</span>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </RevealSection>

        {/* Contenedor para el resto del contenido */}

        {/* ===== Desarrollo ===== */}
        <RevealSection
          id="development"
          direction="up"
          amount={0.25}
          className="relative py-16 md:py-24 bg-gradient-to-b from-gray-950 to-gray-900"
        >
          <div className="container mx-auto px-4 sm:px-6 md:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-10 lg:gap-16">
              <div className="w-full lg:w-1/2 space-y-6 md:space-y-8">
                <SectionHeader
                  icon={<FaCode className="text-xl md:text-2xl text-white" />}
                  tag="DESARROLLO"
                  tagColor="text-blue-400"
                  gradient="bg-gradient-to-r from-blue-600 to-cyan-600"
                  title="El Poder en nuestra manos"
                />

                <div className="max-w-xl">
                  <GlassCard>
                    <div className="px-6 py-5 md:px-8 md:py-7">
                      <p className="text-base md:text-lg text-gray-200">
                        El desarrollo web moderno es mucho más que código: es la
                        puerta de entrada a la innovación digital. En este curso
                        hemos explorado las tecnologías más actuales que definen
                        el futuro de la web.
                      </p>
                    </div>
                  </GlassCard>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
                  <GlassCard>
                    <div className="px-4 py-4 md:px-6 md:py-5 flex gap-3 md:gap-4">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-1.5 md:mt-2 flex-shrink-0" />
                      <p className="text-sm md:text-base text-gray-200">
                        Interfaces interactivas que cautivan usuarios
                      </p>
                    </div>
                  </GlassCard>
                  <GlassCard>
                    <div className="px-4 py-4 md:px-6 md:py-5 flex gap-3 md:gap-4">
                      <div className="w-2 h-2 bg-teal-400 rounded-full mt-1.5 md:mt-2 flex-shrink-0" />
                      <p className="text-sm md:text-base text-gray-200">
                        Arquitecturas robustas y escalables
                      </p>
                    </div>
                  </GlassCard>
                  <GlassCard>
                    <div className="px-4 py-4 md:px-6 md:py-5 flex gap-3 md:gap-4">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mt-1.5 md:mt-2 flex-shrink-0" />
                      <p className="text-sm md:text-base text-gray-200">
                        Experiencias excepcionales para usuarios
                      </p>
                    </div>
                  </GlassCard>
                </div>
              </div>

              <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
                <div className="relative mx-auto max-w-xs sm:max-w-sm md:max-w-md">
                  <GlassCard>
                    <div
                      className="relative rounded-[inherit] overflow-hidden kenburns float-slow tilt-hover parallax-1"
                      style={{ ["--parallax" as any]: `${scrollY * 0.06}px` }}
                    >
                      <img
                        src="/Imagenes/Home1.jpg"
                        alt="Desarrollo Web Moderno"
                        className="w-full h-auto"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent flex items-end justify-center p-4 md:p-6">
                        <span className="text-lg md:text-xl font-bold text-white drop-shadow">
                          Desarrollo Web Moderno
                        </span>
                      </div>
                    </div>
                  </GlassCard>
                  <GlowBelow variant="teal" />
                </div>
              </div>
            </div>
          </div>
        </RevealSection>

        {/* ===== Tecnologías ===== */}
        <RevealSection
          id="technologies"
          direction="up"
          amount={0.25}
          className="relative py-16 md:py-24 bg-gradient-to-b from-gray-900 to-gray-950"
        >
          <motion.div
            className="relative z-10 w-full max-w-7xl px-4 sm:px-6 md:px-8 lg:px-10 py-10 mx-auto flex flex-col items-center"
            variants={containerStagger}
            initial="hidden"
            animate="show"
          >
            <div className="flex flex-col lg:flex-row-reverse items-center gap-8 md:gap-10 lg:gap-16">
              <div className="w-full lg:w-1/2 space-y-6 md:space-y-8">
                <SectionHeader
                  icon={
                    <FaGraduationCap className="text-xl md:text-2xl text-white" />
                  }
                  tag="TECNOLOGÍAS"
                  tagColor="text-teal-400"
                  gradient="bg-gradient-to-r from-teal-600 to-green-600"
                  title="Stacks de los lenguajes"
                />

                <GlassCard>
                  <div className="px-6 py-5 md:px-8 md:py-7">
                    <p className="text-base md:text-lg text-gray-200">
                      Durante este curso he adquirido competencias en las
                      tecnologías más demandadas del mercado actual,
                      construyendo una base sólida para el desarrollo moderno.
                    </p>
                  </div>
                </GlassCard>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
                  {techStack.map((tech, idx) => (
                    <GlassCard key={idx}>
                      <div className="px-4 py-4 md:px-6 md:py-6 flex flex-col items-center">
                        <span className="text-3xl md:text-4xl mb-2 md:mb-3">
                          {tech.icon}
                        </span>
                        <span className="text-xs sm:text-sm md:text-sm font-medium text-center text-gray-200">
                          {tech.name}
                        </span>
                      </div>
                    </GlassCard>
                  ))}
                </div>

                <GlassCard>
                  <div className="px-6 py-5 md:px-6 md:py-5">
                    <p className="text-base md:text-lg text-gray-200">
                      <span className="text-teal-300 font-semibold">
                        Cada herramienta
                      </span>{" "}
                      representa una pieza fundamental en el ecosistema del
                      desarrollo web moderno, permitiendo crear aplicaciones
                      robustas, escalables y con excelente UX.
                    </p>
                  </div>
                </GlassCard>
              </div>

              <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
                <div className="relative mx-auto max-w-xs sm:max-w-sm md:max-w-md">
                  <GlassCard>
                    <div
                      className="relative rounded-[inherit] overflow-hidden kenburns float-slow tilt-hover parallax-1"
                      style={{ ["--parallax" as any]: `${-scrollY * 0.04}px` }}
                    >
                      <img
                        src="/Imagenes/Home2.jpg"
                        alt="Tecnologías de Desarrollo"
                        className="w-full h-auto"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent flex items-end justify-center p-4 md:p-6">
                        <span className="text-lg md:text-xl font-bold text-white drop-shadow">
                          Stack Tecnológico
                        </span>
                      </div>
                    </div>
                  </GlassCard>
                  <GlowBelow variant="green" />
                </div>
              </div>
            </div>
          </motion.div>
        </RevealSection>

        {/* ===== Visión ===== */}
        <RevealSection
          id="vision"
          direction="up"
          amount={0.25}
          className="relative py-16 md:py-24 bg-gradient-to-b from-gray-950 to-gray-900"
        >
          <motion.div
            className="relative z-10 w-full max-w-7xl px-4 sm:px-6 md:px-8 lg:px-10 py-10 mx-auto flex flex-col items-center"
            variants={containerStagger}
            initial="hidden"
            animate="show"
          >
            <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-10 lg:gap-16">
              <div className="w-full lg:w-1/2 space-y-6 md:space-y-8">
                <SectionHeader
                  icon={
                    <FaLightbulb className="text-xl md:text-2xl text-white" />
                  }
                  tag="Misión y Visión"
                  tagColor="text-yellow-400"
                  gradient="bg-gradient-to-r from-yellow-600 to-orange-600"
                  title="Objetivos claros"
                />

                <GlassCard>
                  <div className="px-6 py-5 md:px-8 md:py-7">
                    <p className="text-base md:text-lg text-gray-200">
                      Esta clase nos ha brindado una visión clara del panorama
                      tecnológico actual y futuro. No solo hemos aprendido a
                      programar, sino a pensar como verdaderos desarrolladores.
                    </p>
                  </div>
                </GlassCard>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
                  <GlassCard>
                    <div className="px-4 py-4 md:px-6 md:py-5">
                      <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                        <div className="w-2 h-2 md:w-3 md:h-3 bg-yellow-400 rounded-full" />
                        <strong className="text-sm md:text-base text-yellow-300">
                          Pensamiento Crítico
                        </strong>
                      </div>
                      <p className="text-sm md:text-base text-gray-200">
                        Resolver problemas complejos con soluciones elegantes y
                        eficientes
                      </p>
                    </div>
                  </GlassCard>
                  <GlassCard>
                    <div className="px-4 py-4 md:px-6 md:py-5">
                      <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                        <div className="w-2 h-2 md:w-3 md:h-3 bg-orange-400 rounded-full" />
                        <strong className="text-sm md:text-base text-orange-300">
                          Innovación Constante
                        </strong>
                      </div>
                      <p className="text-sm md:text-base text-gray-200">
                        Mantenerse al día con las últimas tendencias y
                        tecnologías emergentes
                      </p>
                    </div>
                  </GlassCard>
                  <GlassCard>
                    <div className="px-4 py-4 md:px-6 md:py-5">
                      <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                        <div className="w-2 h-2 md:w-3 md:h-3 bg-red-400 rounded-full" />
                        <strong className="text-sm md:text-base text-red-300">
                          Colaboración
                        </strong>
                      </div>
                      <p className="text-sm md:text-base text-gray-200">
                        Trabajar en equipo para lograr objetivos comunes y
                        ambiciosos
                      </p>
                    </div>
                  </GlassCard>
                </div>
              </div>

              <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
                <div className="relative mx-auto max-w-xs sm:max-w-sm md:max-w-md">
                  <GlassCard>
                    <div
                      className="relative rounded-[inherit] overflow-hidden kenburns float-slow tilt-hover parallax-1"
                      style={{ ["--parallax" as any]: `${scrollY * 0.05}px` }}
                    >
                      <img
                        src="/Imagenes/Home 3.jpg"
                        alt="Visión del Desarrollo"
                        className="w-full h-auto"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent flex items-end justify-center p-4 md:p-6">
                        <span className="text-lg md:text-xl font-bold text-white drop-shadow">
                          Nuestra Visión
                        </span>
                      </div>
                    </div>
                  </GlassCard>
                  <GlowBelow variant="warm" />
                </div>
              </div>
            </div>
          </motion.div>
        </RevealSection>

        {/* ===== Futuro ===== */}
        <RevealSection
          id="future"
          direction="up"
          amount={0.25}
          className="relative py-16 md:py-24 bg-gradient-to-b from-gray-900 to-gray-950"
        >
          <motion.div
            className="relative z-10 w-full max-w-7xl px-4 sm:px-6 md:px-8 lg:px-10 py-10 mx-auto flex flex-col items-center"
            variants={containerStagger}
            initial="hidden"
            animate="show"
          >
            <div className="flex flex-col lg:flex-row-reverse items-center gap-8 md:gap-10 lg:gap-16">
              <div className="w-full lg:w-1/2 space-y-6 md:space-y-8">
                <SectionHeader
                  icon={<FaRocket className="text-xl md:text-2xl text-white" />}
                  tag="FUTURO"
                  tagColor="text-green-400"
                  gradient="bg-gradient-to-r from-green-600 to-teal-600"
                  title="Innovación constante"
                />

                <GlassCard>
                  <div className="px-6 py-5 md:px-8 md:py-7">
                    <p className="text-base md:text-lg text-gray-200">
                      Este curso ha sido una base firme, no solo para entender
                      el desarrollo web, sino para comenzar a construir
                      soluciones reales que impacten positivamente en el mundo
                      digital.
                    </p>
                    <p className="text-base md:text-lg text-gray-200 mt-2 md:mt-3">
                      La tecnología cambia, pero el pensamiento lógico, la
                      disciplina y la curiosidad son constantes. Aquí es donde
                      comienza un camino de evolución continua.
                    </p>
                  </div>
                </GlassCard>

                <GlassCard>
                  <div className="px-6 py-5 md:px-8 md:py-7">
                    <FaRocket className="text-3xl md:text-4xl text-green-300 mb-3 md:mb-4" />
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-green-300 mb-2 md:mb-3">
                      "El desarrollo web no es solo una carrera"
                    </h3>
                    <p className="text-base md:text-lg text-gray-100">
                      Es una forma de transformar ideas en soluciones que
                      mejoran la vida de las personas y conectan el mundo a
                      través de la tecnología.
                    </p>
                    <div className="flex items-center gap-2 mt-4 md:mt-6">
                      <div className="flex space-x-1">
                        <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-green-400 rounded-full animate-pulse" />
                        <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-teal-400 rounded-full animate-pulse delay-150" />
                        <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-blue-400 rounded-full animate-pulse delay-300" />
                      </div>
                      <span className="text-gray-400 text-xs md:text-sm">
                        Innovando constantemente...
                      </span>
                    </div>
                  </div>
                </GlassCard>
              </div>

              <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
                <div className="relative mx-auto max-w-xs sm:max-w-sm md:max-w-md">
                  <GlassCard>
                    <div
                      className="relative rounded-[inherit] overflow-hidden kenburns float-slow tilt-hover parallax-1"
                      style={{ ["--parallax" as any]: `${-scrollY * 0.03}px` }}
                    >
                      <img
                        src="/Imagenes/Home 4.jpg"
                        alt="Futuro del Desarrollo"
                        className="w-full h-auto"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent flex items-end justify-center p-4 md:p-6">
                        <span className="text-lg md:text-xl font-bold text-white drop-shadow">
                          El Futuro Digital
                        </span>
                      </div>
                    </div>
                  </GlassCard>
                  <GlowBelow variant="teal" />
                </div>
              </div>
            </div>
          </motion.div>
        </RevealSection>
      </main>
    </>
  );
};

export default Homepage;
