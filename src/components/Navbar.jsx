import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md border-b border-gray-100 py-4' : 'bg-transparent py-8'}`}
            role="navigation"
            aria-label="Navegación principal"
        >
            <div className="container-wide" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <a href="#inicio" className="flex items-center" aria-label="Volver al inicio">
                    <img
                        src="/logo.png"
                        alt="Lógica."
                        loading="lazy"
                        style={{ height: '45px', width: 'auto' }}
                        onError={(e) => {
                            if (e.target.style.display !== 'none') {
                                e.target.style.display = 'none';
                                e.target.insertAdjacentHTML('afterend', '<span style="font-size: 1.5rem; font-weight: 800; font-family: var(--font-heading); letter-spacing: -0.05em;">LÓGICA<span style="color: var(--accent-color)">.</span></span>');
                            }
                        }}
                    />
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-12">
                    <a href="#inicio" className="nav-link">Inicio</a>
                    <a href="#servicios" className="nav-link">Servicios</a>
                    <a href="#proyectos" className="nav-link">Proyectos</a>
                    <a href="#equipo" className="nav-link">Equipo</a>
                    <a href="#contacto" className="btn-primary" style={{ padding: '0.6rem 1.8rem', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1em' }} aria-label="Iniciar una conversación">
                        Conversemos
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-expanded={isMenuOpen}
                    aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
                    style={{ background: 'transparent', border: 'none' }}
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        className="mobile-overlay"
                        role="dialog"
                        aria-modal="true"
                        aria-label="Menú móvil"
                    >
                        <button
                            onClick={() => setIsMenuOpen(false)}
                            style={{ position: 'absolute', top: '2rem', right: '2rem', background: 'transparent' }}
                            aria-label="Cerrar menú móvil"
                        >
                            <X size={32} />
                        </button>
                        <div className="flex flex-col gap-8 items-center pt-24">
                            <a href="#inicio" className="nav-link" style={{ fontSize: '1.5rem' }} onClick={() => setIsMenuOpen(false)}>Inicio</a>
                            <a href="#servicios" className="nav-link" style={{ fontSize: '1.5rem' }} onClick={() => setIsMenuOpen(false)}>Servicios</a>
                            <a href="#proyectos" className="nav-link" style={{ fontSize: '1.5rem' }} onClick={() => setIsMenuOpen(false)}>Proyectos</a>
                            <a href="#equipo" className="nav-link" style={{ fontSize: '1.5rem' }} onClick={() => setIsMenuOpen(false)}>Equipo</a>
                            <a href="#contacto" className="btn-primary" onClick={() => setIsMenuOpen(false)}>Conversemos</a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
