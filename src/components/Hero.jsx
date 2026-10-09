import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Settings } from 'lucide-react';

const Hero = () => {
    const words = ["adentro.", "el dato.", "el método.", "la lógica."];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % words.length);
        }, 2500);
        return () => clearInterval(timer);
    }, [words.length]);

    return (
        <header id="inicio" className="section tech-dot-bg hero-header">
            <div className="container-wide hero-grid" style={{ position: 'relative' }}>



                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className="modern-badge" style={{ marginBottom: '2rem' }}>CONSULTORÍA OPERATIVA</div>
                    <h1 style={{ fontSize: 'clamp(2.5rem, 9vw, 6.5rem)', lineHeight: '0.85', fontWeight: '900', letterSpacing: '-0.05em', marginBottom: '3rem' }}>
                        <span style={{ color: '#eee' }}>Hacemos crecer</span> <br />
                        <span style={{ color: '#ccc' }}>negocios desde</span> <br />
                        <span style={{ color: '#000', display: 'inline-flex', position: 'relative', minWidth: 'min(350px, 100%)' }}>
                            <AnimatePresence mode="wait">
                                <motion.span
                                    key={words[index]}
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: -20, opacity: 0 }}
                                    transition={{ duration: 0.5, ease: "circOut" }}
                                >
                                    {words[index]}
                                </motion.span>
                            </AnimatePresence>
                        </span>
                    </h1>
                    <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', maxWidth: '500px', marginBottom: '3rem', lineHeight: '1.6' }}>
                        Ayudamos a pymes y empresas a transformar su caos operativo en procesos escalables y rentables.
                    </p>
                    <div className="flex gap-4">
                        <a href="#contacto" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.8rem' }} aria-label="Hablar con un consultor">
                            Hablar con un consultor <ArrowRight size={18} />
                        </a>
                    </div>
                </motion.div>

                {/* Improved Gears Layout */}
                <div className="hidden md:flex justify-end" style={{ position: 'relative' }}>
                    <div style={{ position: 'relative', width: '500px', height: '500px' }} aria-hidden="true">
                        <motion.div
                            style={{ position: 'absolute', top: '0', right: '0', color: '#f5f5f5' }}
                            className="animate-spin-slow"
                        >
                            <Settings size={400} strokeWidth={0.1} />
                        </motion.div>
                        <motion.div
                            style={{ position: 'absolute', bottom: '10%', left: '10%', color: '#000' }}
                            className="animate-spin-reverse-slow"
                        >
                            <Settings size={220} strokeWidth={0.4} />
                        </motion.div>

                        <div style={{ position: 'absolute', top: '45%', right: '15%', zIndex: 1, textAlign: 'right' }}>
                            <div style={{ fontSize: '0.65rem', fontWeight: '800', letterSpacing: '0.4em', textTransform: 'uppercase', marginBottom: '0.8rem', color: '#666' }}>EL MÉTODO</div>
                            <div style={{ fontSize: '3rem', fontWeight: '900', lineHeight: '1', letterSpacing: '-0.05em', color: '#000' }}>
                                SOMOS <br /> LÓGICA<span style={{ color: '#ccc' }}>.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Hero;
