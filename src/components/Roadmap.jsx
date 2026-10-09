import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Roadmap = () => {
    const [activeStep, setActiveStep] = useState(0);
    const steps = [
        { title: "Diagnóstico", sub: "Nos sumergimos en las fricciones de tu negocio para priorizar el problema principal." },
        { title: "Solución Operativa", sub: "Diseñamos una propuesta concreta: procesos, estructura comercial o logística." },
        { title: "Implementación", sub: "Ejecutamos codo a codo: CRM, automatización y optimización de herramientas." },
        { title: "Transformación", sub: "Acompañamos hasta consolidar resultados reales en la operación diaria." }
    ];

    return (
        <section id="proyectos" className="section" style={{ background: '#fcfcfc', overflow: 'hidden' }}>
            <div className="container-wide">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))', gap: '4rem', alignItems: 'center' }}>

                    <div
                        className="roadmap-orbit" style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}
                        aria-hidden="true"
                    >
                        <div className="center-system">
                            MÉTODO<br />LÓGICA
                        </div>
                        {steps.map((_, i) => {
                            const size = 180 + i * 110;
                            const duration = 15 + i * 5;
                            return (
                                <div
                                    key={i}
                                    className="orbit-line"
                                    style={{
                                        width: `${size}px`,
                                        height: `${size}px`,
                                        borderColor: activeStep === i ? '#000' : '#eee',
                                        borderStyle: activeStep === i ? 'solid' : 'dashed',
                                        opacity: activeStep === i ? 1 : 0.5,
                                        transition: 'all 0.5s ease'
                                    }}
                                >
                                    <motion.div
                                        className="planet-point"
                                        style={{
                                            background: activeStep === i ? '#000' : '#ccc',
                                            scale: activeStep === i ? 1.5 : 1
                                        }}
                                        animate={{ rotate: 360 }}
                                        transition={{ duration, repeat: Infinity, ease: "linear" }}
                                    />
                                </div>
                            );
                        })}
                    </div>

                    <div>
                        <div style={{ marginBottom: '3rem' }}>
                            <div className="modern-badge">METODOLOGÍA</div>
                            <h2 style={{ fontSize: 'clamp(2.2rem, 7vw, 3.5rem)', letterSpacing: '-0.04em', lineHeight: '1', marginTop: '1rem' }}>Evolución continua.</h2>
                        </div>
                        <div className="flex flex-col gap-4">
                            {steps.map((step, i) => (
                                <div
                                    key={i}
                                    className={`system-card ${activeStep === i ? 'active' : ''}`}
                                    onMouseEnter={() => setActiveStep(i)}
                                    onFocus={() => setActiveStep(i)}
                                    tabIndex={0}
                                    role="button"
                                    aria-pressed={activeStep === i}
                                    style={{ cursor: 'pointer', outline: 'none' }}
                                >
                                    <div style={{ fontSize: '0.7rem', fontWeight: '900', color: activeStep === i ? 'var(--accent-color)' : '#ccc', marginBottom: '0.5rem', letterSpacing: '0.1em' }}>
                                        FASE 0{i + 1}
                                    </div>
                                    <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: activeStep === i ? '#000' : '#888' }}>
                                        {step.title}
                                    </h3>
                                    <AnimatePresence mode="wait">
                                        {activeStep === i && (
                                            <motion.p
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: 'auto' }}
                                                exit={{ opacity: 0, height: 0 }}
                                                style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.6', overflow: 'hidden' }}
                                            >
                                                {step.sub}
                                            </motion.p>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Roadmap;
