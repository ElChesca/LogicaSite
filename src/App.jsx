import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  BarChart3,
  Workflow,
  Palette,
  Search,
  Users,
  ArrowRight,
  Menu,
  X,
  Linkedin,
  Mail,
  CheckCircle2
} from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a href="#" className="font-heading font-bold text-2xl tracking-tighter">
          LÓGICA<span style={{ color: 'var(--accent-color)' }}>.</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 font-medium text-sm letter-spacing-wide">
          <a href="#inicio" className="hover:text-blue-400">Inicio</a>
          <a href="#servicios" className="hover:text-blue-400">Servicios</a>
          <a href="#proyectos" className="hover:text-blue-400">Proyectos</a>
          <a href="#equipo" className="hover:text-blue-400">Equipo</a>
          <a href="#contacto" className="btn-primary" style={{ padding: '0.5rem 1.5rem', fontSize: '0.75rem' }}>Conversemos</a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl py-10 px-8 flex flex-col gap-6"
          >
            <a href="#inicio" onClick={() => setIsMenuOpen(false)}>Inicio</a>
            <a href="#servicios" onClick={() => setIsMenuOpen(false)}>Servicios</a>
            <a href="#proyectos" onClick={() => setIsMenuOpen(false)}>Proyectos</a>
            <a href="#equipo" onClick={() => setIsMenuOpen(false)}>Equipo</a>
            <a href="#contacto" className="btn-primary" onClick={() => setIsMenuOpen(false)}>Conversemos</a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => (
  <section id="inicio" className="section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '150px' }}>
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div style={{ display: 'inline-block', padding: '0.5rem 1rem', background: 'var(--accent-soft)', borderRadius: '100px', marginBottom: '1.5rem', color: 'var(--accent-color)', fontWeight: '600', fontSize: '0.875rem' }}>
          Marketing con método, sin humo.
        </div>
        <h1 style={{ fontSize: 'clamp(3rem, 8vw, 5.5rem)', lineHeight: '1', marginBottom: '2rem' }}>
          Hacemos crecer negocios <br />
          <span className="text-gradient">desde adentro.</span>
        </h1>
        <p style={{ maxWidth: '600px', fontSize: '1.25rem', color: 'var(--text-muted)', marginBottom: '3rem' }}>
          Creemos en el marketing que se mide, se optimiza y genera resultados. Aplicamos un enfoque metódico: entendemos tu negocio, definimos objetivos y ejecutamos estrategias que funcionan.
        </p>
        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
          <a href="#contacto" className="btn-primary">
            Trabajemos juntos <ArrowRight size={20} />
          </a>
          <a href="#servicios" style={{ display: 'flex', alignItems: 'center', fontWeight: '600', gap: '0.5rem' }}>
            Nuestra metodología
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

const Services = () => {
  const services = [
    {
      icon: <BarChart3 size={32} />,
      title: "Estrategia y Performance",
      desc: "Análisis profundo de KPIs y optimización constante de embudos de venta para maximizar el retorno."
    },
    {
      icon: <Workflow size={32} />,
      title: "Automatización y CRM",
      desc: "Implementación de sistemas que trabajan por vos, nutriendo leads y mejorando la retención de clientes."
    },
    {
      icon: <Palette size={32} />,
      title: "Branding y Comunicación",
      desc: "Construimos marcas con propósito y una estética premium que resuena con tu audiencia ideal."
    }
  ];

  return (
    <section id="servicios" className="section">
      <div className="container">
        <div style={{ marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Especialidades</h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '500px' }}>
            No disparamos al aire. Cada acción tiene una razón lógica detrás.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {services.map((s, i) => (
            <motion.div
              key={i}
              className="glass-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div style={{ color: 'var(--accent-color)', marginBottom: '1.5rem' }}>{s.icon}</div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{s.title}</h3>
              <p style={{ color: 'var(--text-muted)' }}>{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Roadmap = () => {
  const steps = [
    { title: "Consultoría Operativa", sub: "Entendemos cómo funciona tu proceso de ventas actual." },
    { title: "Implementación Tecnológica", sub: "Montamos las herramientas necesarias: CRM, Tracking, Ads." },
    { title: "Optimización Continua", sub: "Iteramos sobre los datos para escalar lo que funciona." }
  ];

  return (
    <section id="proyectos" className="section" style={{ background: '#0a0a0a' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <h2 style={{ fontSize: '3rem' }}>Nuestro proceso</h2>
        </div>
        <div style={{ position: 'relative' }}>
          <div className="hidden md:block" style={{ position: 'absolute', top: '24px', left: '0', width: '100%', height: '2px', background: 'var(--border-color)', zIndex: '0' }} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '4rem', position: 'relative', zIndex: '1' }}>
            {steps.map((step, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'var(--bg-color)', border: '2px solid var(--accent-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', fontWeight: 'bold' }}>
                  {i + 1}
                </div>
                <h3 style={{ marginBottom: '1rem' }}>{step.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>{step.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Team = () => {
  const team = [
    { name: "Federico Sánchez Gil", role: "Strategy" },
    { name: "Martín Luna", role: "Growth" },
    { name: "Marcos Alcaraz", role: "Tech" },
    { name: "Agustina Roca", role: "Design" },
    { name: "Federico Pereyra", role: "Ads" },
    { name: "Milagros Fernández", role: "Content" }
  ];

  return (
    <section id="equipo" className="section">
      <div className="container">
        <div style={{ marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '3rem' }}>El equipo</h2>
          <p style={{ color: 'var(--text-muted)' }}>Personas detrás de la estrategia.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '3rem' }}>
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <h4 style={{ fontSize: '1.25rem' }}>{member.name}</h4>
              <p style={{ color: 'var(--accent-color)', fontSize: '0.875rem', fontWeight: '500' }}>{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => (
  <section id="contacto" className="section" style={{ background: 'var(--accent-soft)' }}>
    <div className="container">
      <div style={{ background: 'var(--bg-color)', borderRadius: '30px', padding: '4rem', textAlign: 'center', border: '1px solid var(--border-color)' }}>
        <h2 style={{ fontSize: '3.5rem', marginBottom: '2rem' }}>¿Listo para escalar?</h2>
        <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto 3rem', fontSize: '1.25rem' }}>
          Si buscás un partner que se involucre en los resultados de tu negocio, hablemos.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
          <a href="mailto:hola@somoslogica.com" className="btn-primary">
            Enviar un mail <Mail size={20} />
          </a>
          <a href="#" className="btn-primary" style={{ background: 'transparent', border: '1px solid var(--border-color)', color: 'white' }}>
            Ver LinkedIn <Linkedin size={20} />
          </a>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer style={{ padding: '60px 0', borderTop: '1px solid var(--border-color)' }}>
    <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
      <div>
        <div className="font-heading font-bold text-xl tracking-tighter mb-4">LÓGICA.</div>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>© 2026 Somos Lógica. Todos los derechos reservados.</p>
      </div>
      <div style={{ display: 'flex', gap: '3rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <span style={{ fontWeight: 'bold' }}>Social</span>
          <a href="#" style={{ color: 'var(--text-muted)' }}>LinkedIn</a>
          <a href="#" style={{ color: 'var(--text-muted)' }}>Instagram</a>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <span style={{ fontWeight: 'bold' }}>Legal</span>
          <a href="#" style={{ color: 'var(--text-muted)' }}>Privacidad</a>
        </div>
      </div>
    </div>
  </footer>
);

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Services />
      <Roadmap />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
