import React from "react";
import {
  BookOpen,
   // (no existe, evitamos usarlo)
  Network,
  Wifi,
  Smartphone,
  Globe,
  Code,
  Server,
  Database,
  Mail,
  Shield,
  
  Terminal,
  FileText,
  Link as LinkIcon,
  Rss,
  Layers,
  GitBranch,
  Lock,
} from "lucide-react";

// Pequeño componente para títulos de sección con icono
const SectionTitle: React.FC<{ icon: React.ReactNode; children: React.ReactNode }> = ({
  icon,
  children,
}) => (
  <div className="flex items-center gap-2 text-gray-100">
    <div className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 border border-white/10">
      {icon}
    </div>
    <h3 className="text-xl font-semibold tracking-tight">{children}</h3>
  </div>
);

// Tarjeta de término del glosario
const TermCard: React.FC<{
  title: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}> = ({ title, children, icon }) => (
  <article className="rounded-xl border border-white/10 bg-neutral-900/60 p-4 hover:bg-neutral-900/80 transition">
    <div className="flex items-start gap-3">
      {icon ? (
        <div className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 border border-white/10 shrink-0">
          {icon}
        </div>
      ) : null}
      <div className="w-full">
        <h4 className="text-lg font-medium text-gray-100">{title}</h4>
        <p className="mt-1 text-sm leading-relaxed text-gray-300">{children}</p>
      </div>
    </div>
  </article>
);

const Glosario: React.FC = () => {
  return (
    <div className="pb-12">
      {/* HERO (intro) */}
      <header className="py-10 md:py-14">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300">
            <BookOpen className="h-4 w-4" />
            Glosario de Tecnologías Web y Redes
          </div>
          <h1 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight">
            INTRODUCCIÓN
          </h1>
          <p className="mt-4 text-gray-300 md:text-lg">
            El desarrollo de tecnologías web y de redes ha impulsado la
            comunicación, el acceso a la información y la transformación digital.
            Este glosario explica conceptos clave —protocolos, estándares,
            lenguajes y sistemas— para comprender cómo funciona la Web y cómo
            interactúan sus componentes.
          </p>
        </div>
      </header>

      {/* Índice rápido */}
      <nav className="mb-8">
        <div className="flex flex-wrap gap-2">
          {["Números y Redes", "A", "C", "D", "E", "F", "G", "H", "I", "J", "L", "M", "P", "R", "S", "U", "W", "X"].map(
            (sec) => (
              <a
                key={sec}
                href={`#sec-${sec.replace(/\s+/g, "-")}`}
                className="text-xs md:text-sm rounded-full border border-white/10 bg-white/5 px-3 py-1 text-gray-300 hover:bg-white/10"
              >
                {sec}
              </a>
            )
          )}
        </div>
      </nav>

      <main className="space-y-10">
        {/* Sección Números y Redes */}
        <section id="sec-Números-y-Redes" className="space-y-4">
          <SectionTitle icon={<Network className="h-5 w-5" />}>
            Números y Redes
          </SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            <TermCard title="2G (Segunda Generación de Redes Móviles)" icon={<Smartphone className="h-5 w-5" />}>
              La segunda generación se enfocó en digitalizar la voz y habilitar el
              SMS. Supuso un salto frente a 1G (analógica).
            </TermCard>

            <TermCard title="3G – Tercera Generación" icon={<Wifi className="h-5 w-5" />}>
              Habilitó navegación web y videollamadas con velocidades decentes;
              base para la era de smartphones.
            </TermCard>

            <TermCard title="4G – Cuarta Generación (LTE)" icon={<Wifi className="h-5 w-5" />}>
              Aumenta velocidad y capacidad de red para streaming HD, videollamadas
              estables y baja latencia. LTE es su variante más extendida.
            </TermCard>
          </div>
        </section>

        {/* Sección A */}
        <section id="sec-A" className="space-y-4">
          <SectionTitle icon={<Code className="h-5 w-5" />}>A</SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            <TermCard title="ADSL – Asymmetric Digital Subscriber Line" icon={<Server className="h-5 w-5" />}>
              Acceso a Internet sobre línea telefónica; descarga mayor que subida.
              Muy extendida antes de la fibra.
            </TermCard>

            <TermCard title="AJAX – Asynchronous JavaScript And XML" icon={<Code className="h-5 w-5" />}>
              Actualiza partes de la página sin recargarla completa. Hoy suele
              usar JSON; se implementa con <code>fetch()</code> o XHR.
            </TermCard>

            <TermCard title="AMF – Action Message Format" icon={<Layers className="h-5 w-5" />}>
              Formato binario de Adobe para intercambio cliente-servidor. Más
              compacto/rápido que XML/JSON en su ecosistema histórico (Flash/Flex).
            </TermCard>

            <TermCard title="ASP – Active Server Pages" icon={<Server className="h-5 w-5" />}>
              Tecnología de Microsoft para páginas dinámicas del lado servidor.
            </TermCard>

            <TermCard title="ATOM – Atom Syndication Format" icon={<Rss className="h-5 w-5" />}>
              Formato XML para distribución de contenido (feeds), alternativa a
              RSS con mejor soporte de metadatos.
            </TermCard>
          </div>
        </section>

        {/* Sección C */}
        <section id="sec-C" className="space-y-4">
          <SectionTitle icon={<BookOpen className="h-5 w-5" />}>C</SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            <TermCard title="CERN" icon={<Globe className="h-5 w-5" />}>
              Laboratorio europeo de física de partículas (LHC). Investiga la
              estructura fundamental de la materia y el universo.
            </TermCard>

            <TermCard title="CGI – Common Gateway Interface" icon={<Server className="h-5 w-5" />}>
              Puente para ejecutar programas en el servidor al procesar peticiones
              web y generar HTML dinámico.
            </TermCard>

            <TermCard title="CSS – Cascading Style Sheets" icon={<FileText className="h-5 w-5" />}>
              Lenguaje de estilos para dar presentación (colores, tamaños,
              layout) al contenido HTML.
            </TermCard>
          </div>
        </section>

        {/* Sección D */}
        <section id="sec-D" className="space-y-4">
          <SectionTitle icon={<Database className="h-5 w-5" />}>D</SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            <TermCard title="DBMS – DataBase Management System" icon={<Database className="h-5 w-5" />}>
              Software para crear, almacenar y consultar datos de forma segura y
              eficiente.
            </TermCard>

            <TermCard title="DHCP – Dynamic Host Configuration Protocol" icon={<Network className="h-5 w-5" />}>
              Asigna IPs automáticamente en la red; evita configuración manual en
              cada dispositivo.
            </TermCard>

            <TermCard title="DNS – Domain Name System" icon={<LinkIcon className="h-5 w-5" />}>
              Traduce dominios legibles (ej.: google.com) a direcciones IP; la
              “agenda telefónica” de Internet.
            </TermCard>
          </div>
        </section>

        {/* Sección E */}
        <section id="sec-E" className="space-y-4">
          <SectionTitle icon={<Code className="h-5 w-5" />}>E</SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            <TermCard title="ECMA – European Computer Manufacturers Association" icon={<BookOpen className="h-5 w-5" />}>
              Organiza estándares tecnológicos (ej.: ECMA-262/ECMAScript, base de
              JavaScript) para compatibilidad entre plataformas.
            </TermCard>
          </div>
        </section>

        {/* Sección F */}
        <section id="sec-F" className="space-y-4">
          <SectionTitle icon={<Shield className="h-5 w-5" />}>F</SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            <TermCard title="FreeBSD – Free Berkeley Software Distribution" icon={<Server className="h-5 w-5" />}>
              SO derivado de BSD Unix, reconocido por estabilidad y rendimiento;
              usado en servidores y redes.
            </TermCard>

            <TermCard title="FTP – File Transfer Protocol" icon={<LinkIcon className="h-5 w-5" />}>
              Transferencia de archivos cliente/servidor. Hoy se prefiere FTPS o
              SFTP por seguridad.
            </TermCard>
          </div>
        </section>

        {/* Sección G */}
        <section id="sec-G" className="space-y-4">
          <SectionTitle icon={<GitBranch className="h-5 w-5" />}>G</SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            <TermCard title="GPRS – General Packet Radio Service" icon={<Wifi className="h-5 w-5" />}>
              Mejora de GSM con datos por paquetes; base 2.5G para primeras apps
              móviles.
            </TermCard>

            <TermCard title="GNU/Linux – GNU's Not Unix / Linux Kernel" icon={<Terminal className="h-5 w-5" />}>
              SO libre con núcleo Linux y herramientas GNU; ampliamente usado en
              servidores (Ubuntu, Debian, Fedora…).
            </TermCard>

            <TermCard title="GSM – Global System for Mobile Communications" icon={<Smartphone className="h-5 w-5" />}>
              Estándar de telefonía móvil (voz, SMS). Muchas redes lo mantienen
              junto con 4G/5G.
            </TermCard>
          </div>
        </section>

        {/* Sección H */}
        <section id="sec-H" className="space-y-4">
          <SectionTitle icon={<Globe className="h-5 w-5" />}>H</SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            <TermCard title="HTML – HyperText Markup Language" icon={<FileText className="h-5 w-5" />}>
              Lenguaje de marcado para estructurar contenido web.
            </TermCard>

            <TermCard title="HTTP – HyperText Transfer Protocol" icon={<Globe className="h-5 w-5" />}>
              Protocolo usado por navegadores para solicitar/entregar recursos;
              su versión segura es HTTPS.
            </TermCard>
          </div>
        </section>

        {/* Sección I */}
        <section id="sec-I" className="space-y-4">
          <SectionTitle icon={<Layers className="h-5 w-5" />}>I</SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            <TermCard title="IANA – Internet Assigned Numbers Authority" icon={<Network className="h-5 w-5" />}>
              Coordina identificadores únicos (IP, dominios, etc.) para que
              Internet funcione de forma estable.
            </TermCard>

            <TermCard title="IETF – Internet Engineering Task Force" icon={<BookOpen className="h-5 w-5" />}>
              Comunidad abierta que publica RFCs y define estándares de Internet.
            </TermCard>

            <TermCard title="IMAP – Internet Message Access Protocol" icon={<Mail className="h-5 w-5" />}>
              Recibe correos manteniéndolos en el servidor, ideal para varios
              dispositivos (a diferencia de POP).
            </TermCard>

            <TermCard title="IP – Internet Protocol" icon={<Network className="h-5 w-5" />}>
              Direccionamiento y entrega de paquetes en la red (IPv4/IPv6).
            </TermCard>

            <TermCard title="ISO – International Organization for Standardization" icon={<Shield className="h-5 w-5" />}>
              Publica normas internacionales (ej.: ISO 9001, 27001) para
              calidad/seguridad.
            </TermCard>
          </div>
        </section>

        {/* Sección J */}
        <section id="sec-J" className="space-y-4">
          <SectionTitle icon={<Code className="h-5 w-5" />}>J</SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            <TermCard title="JSP – JavaServer Pages" icon={<Code className="h-5 w-5" />}>
              Tecnología Java del lado servidor para generar HTML dinámico.
            </TermCard>
          </div>
        </section>

        {/* Sección L */}
        <section id="sec-L" className="space-y-4">
          <SectionTitle icon={<Wifi className="h-5 w-5" />}>L</SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            <TermCard title="LTE – Long Term Evolution" icon={<Wifi className="h-5 w-5" />}>
              Tecnología de la familia 4G con altas velocidades y baja latencia.
            </TermCard>
          </div>
        </section>

        {/* Sección M */}
        <section id="sec-M" className="space-y-4">
          <SectionTitle icon={<Server className="h-5 w-5" />}>M</SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            <TermCard title="Mac OS X (macOS)" icon={<LaptopIconFallback />}>
              SO de Apple basado en Unix; destaca por estabilidad, diseño y
              seguridad; optimizado para hardware Apple.
            </TermCard>

            <TermCard title="Módem-cable" icon={<LinkIcon className="h-5 w-5" />}>
              Conectividad a Internet vía red coaxial de TV; precursor común a la
              fibra en entornos urbanos.
            </TermCard>
          </div>
        </section>

        {/* Sección P */}
        <section id="sec-P" className="space-y-4">
          <SectionTitle icon={<Code className="h-5 w-5" />}>P</SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            <TermCard title="PHP – Hypertext Preprocessor" icon={<Code className="h-5 w-5" />}>
              Lenguaje del lado servidor para páginas dinámicas.
            </TermCard>

            <TermCard title="POP – Post Office Protocol" icon={<Mail className="h-5 w-5" />}>
              Descarga correos al cliente; típicamente los elimina del servidor
              (según configuración).
            </TermCard>
          </div>
        </section>

        {/* Sección R */}
        <section id="sec-R" className="space-y-4">
          <SectionTitle icon={<Rss className="h-5 w-5" />}>R</SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            <TermCard title="RDSI – Red Digital de Servicios Integrados" icon={<Network className="h-5 w-5" />}>
              Transmite voz/datos/video digitalmente por línea telefónica; muy
              usada en empresas.
            </TermCard>

            <TermCard title="RFC – Request for Comments" icon={<FileText className="h-5 w-5" />}>
              Documentos técnicos de la IETF que definen protocolos y, en muchos
              casos, estándares de Internet.
            </TermCard>

            <TermCard title="RIA – Rich Internet Application" icon={<Layers className="h-5 w-5" />}>
              Aplicaciones web más interactivas/fluídas (AJAX, JS). Ej.: Google
              Docs, Canva.
            </TermCard>

            <TermCard title="RSS – Really Simple Syndication" icon={<Rss className="h-5 w-5" />}>
              Suscripción a contenidos mediante feeds XML para agregadores.
            </TermCard>

            <TermCard title="RTC – Red Telefónica Conmutada" icon={<LinkIcon className="h-5 w-5" />}>
              Red telefónica tradicional; base del dial-up en los 90s.
            </TermCard>
          </div>
        </section>

        {/* Sección S */}
        <section id="sec-S" className="space-y-4">
          <SectionTitle icon={<Shield className="h-5 w-5" />}>S</SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            <TermCard title="SMTP – Simple Mail Transfer Protocol" icon={<Mail className="h-5 w-5" />}>
              Protocolo principal para envío de correo (cliente→servidor y entre
              servidores).
            </TermCard>

            <TermCard title="SOAP – Simple Object Access Protocol" icon={<FileText className="h-5 w-5" />}>
              Protocolo basado en XML para servicios web. Enfocado en
              interoperabilidad y contratos estrictos.
            </TermCard>

            <TermCard title="Solaris" icon={<Server className="h-5 w-5" />}>
              SO tipo Unix (Sun/Oracle) para servidores empresariales de alta
              demanda.
            </TermCard>

            <TermCard title="STD – Standard (IETF)" icon={<Shield className="h-5 w-5" />}>
              Documento que formaliza un estándar de Internet a partir de RFCs.
            </TermCard>
          </div>
        </section>

        {/* Sección U */}
        <section id="sec-U" className="space-y-4">
          <SectionTitle icon={<Globe className="h-5 w-5" />}>U</SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            <TermCard title="UDDI – Universal Description, Discovery and Integration" icon={<FileText className="h-5 w-5" />}>
              Directorio para publicar/descubrir servicios web (especialmente SOAP).
            </TermCard>

            <TermCard title="UMTS – Universal Mobile Telecommunications System" icon={<Wifi className="h-5 w-5" />}>
              Tecnología 3G que mejoró velocidad/capacidad frente a 2G.
            </TermCard>

            <TermCard title="URL – Uniform Resource Locator" icon={<LinkIcon className="h-5 w-5" />}>
              Dirección de un recurso en la Web (protocolo + dominio + ruta).
            </TermCard>

            <TermCard title="UTC – Coordinated Universal Time" icon={<ClockFallback />}>
              Tiempo universal de referencia basado en relojes atómicos; base de
              zonas horarias.
            </TermCard>

            <TermCard title="UTR – Unicode Technical Report" icon={<FileText className="h-5 w-5" />}>
              Informes técnicos del Consorcio Unicode sobre implementación
              (scripts, bidi, normalización, emoji, etc.).
            </TermCard>
          </div>
        </section>

        {/* Sección W */}
        <section id="sec-W" className="space-y-4">
          <SectionTitle icon={<Globe className="h-5 w-5" />}>W</SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            <TermCard title="W3C – World Wide Web Consortium" icon={<Globe className="h-5 w-5" />}>
              Organismo que define estándares abiertos de la Web (HTML, CSS,
              SVG…).
            </TermCard>

            <TermCard title="Windows" icon={<Server className="h-5 w-5" />}>
              Sistema operativo de Microsoft; extendido en hogares, oficinas y
              escuelas.
            </TermCard>

            <TermCard title="World Wide Web" icon={<Globe className="h-5 w-5" />}>
              Sistema de documentos y recursos vinculados que usamos al navegar.
            </TermCard>

            <TermCard title="WSDL – Web Services Description Language" icon={<FileText className="h-5 w-5" />}>
              Lenguaje XML que describe operaciones/formatos de un servicio web.
            </TermCard>
          </div>
        </section>

        {/* Sección X */}
        <section id="sec-X" className="space-y-4">
          <SectionTitle icon={<FileText className="h-5 w-5" />}>X</SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            <TermCard title="XHTML – eXtensible HyperText Markup Language" icon={<FileText className="h-5 w-5" />}>
              Variante más estricta de HTML basada en XML; promueve compatibilidad
              y código bien formado.
            </TermCard>
          </div>
        </section>
      </main>

      {/* Conclusión / Bibliografía */}
      <footer className="mt-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">CONCLUSIÓN</h2>
        <p className="text-gray-300 max-w-4xl">
          Este glosario es una base de consulta para entender tecnologías web y
          redes: cada término es una pieza del engranaje que sostiene Internet,
          servicios móviles y sistemas actuales.
        </p>

        <div className="mt-8">
          <h3 className="text-xl font-semibold text-gray-100 mb-3">
            EGRAFÍAS / REFERENCIAS
          </h3>
          <ul className="list-disc list-inside text-gray-300/90 space-y-1">
            <li>W3C — w3.org</li>
            <li>MDN Web Docs — developer.mozilla.org</li>
            <li>IETF RFCs — rfc-editor.org</li>
            <li>ECMA — ecma-international.org</li>
            <li>ISO — iso.org</li>
            <li>GNU / Linux — gnu.org / kernel.org</li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

/**
 * Iconos de fallback simples para evitar imports dudosos.
 * Si quieres íconos específicos (ej. Laptop, Clock), puedes cambiarlos por
 * los equivalentes de lucide-react si están disponibles en tu versión.
 */
const LaptopIconFallback = () => (
  <Layers className="h-5 w-5" aria-hidden="true" />
);
const ClockFallback = () => <Lock className="h-5 w-5" aria-hidden="true" />;

export default Glosario;
