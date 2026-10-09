import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Settings } from 'lucide-react';

const Friction = () => {
    const [activeFriction, setActiveFriction] = useState(0);
    const [isFixed, setIsFixed] = useState(false);

    const frictions = [
        { title: "Fricciones operativas", sub: "Procesos desordenados que frenan el negocio." },
        { title: "Decisiones sin ejecución", sub: "Estrategias que no logran bajar a la operación." },
        { title: "Problemas estructurales", sub: "Trabas que se arrastran hace tiempo sin solución." }
    ];

    const gearPositions = [
        { top: '10%', right: '10%', size: 280, color: '#f5f5f5', icon: <Settings size={280} strokeWidth={0.2} /> },
        { bottom: '15%', left: '25%', size: 180, color: '#000', icon: <Settings size={180} strokeWidth={0.5} /> },
        { top: '40%', left: '10%', size: 120, color: '#ddd', icon: <Settings size={120} strokeWidth={0.8} /> }
    ];

    return (
        <section className="section" style={{ background: '#fff', overflow: 'hidden' }}>
            <div className="container-wide">
                <div className="friction-grid" style={{ alignItems: 'center' }}>
                    <div>
                        <div className="modern-badge" style={{ marginBottom: '1.5rem' }}>DIAGNÓSTICO</div>
                        <h2 style={{ fontSize: 'clamp(2.2rem, 7vw, 5.5rem)', lineHeight: '0.9', marginBottom: '4rem', letterSpacing: '-0.04em' }}>
                            <span style={{ color: '#eee' }}>Muchas empresas</span> <br />
                            <span style={{ color: '#ccc' }}>tienen potencial</span> <br />
                            <span style={{ color: '#000' }}>para crecer.</span>
                        </h2>
                        <div className="friction-interaction-container" style={{ maxWidth: '450px' }}>
                            {frictions.map((f, i) => (
                                <motion.div
                                    key={i}
                                    onMouseEnter={() => { setActiveFriction(i); if (!isFixed) setIsFixed(false); }}
                                    onClick={() => { setActiveFriction(i); if (!isFixed) setIsFixed(false); }}
                                    tabIndex={0}
                                    role="button"
                                    aria-pressed={activeFriction === i}
                                    style={{
                                        cursor: 'pointer',
                                        background: activeFriction === i ? '#fff' : 'transparent',
                                        border: activeFriction === i ? '1px solid #eee' : '1px solid transparent',
                                        boxShadow: activeFriction === i ? '0 10px 30px rgba(0,0,0,0.03)' : 'none',
                                        padding: '1.5rem',
                                        borderRadius: '12px',
                                        marginBottom: '1rem',
                                        outline: 'none'
                                    }}
                                >
                                    <h4 style={{ marginBottom: (activeFriction === i && !isFixed) ? '0.5rem' : '0', fontSize: '1.1rem', color: activeFriction === i ? '#000' : '#888', transition: 'all 0.3s ease' }}>{f.title}</h4>
                                    <AnimatePresence>
                                        {(activeFriction === i && !isFixed) && (
                                            <motion.p
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6', overflow: 'hidden' }}
                                            >
                                                {f.sub}
                                            </motion.p>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            ))}

                            <button
                                onClick={() => setIsFixed(true)}
                                className="btn-primary"
                                aria-label={isFixed ? 'Método aplicado' : 'Aplicar método Lógica'}
                                style={{
                                    marginTop: '2rem',
                                    width: '100%',
                                    background: isFixed ? '#10b981' : '#000',
                                    borderColor: isFixed ? '#10b981' : '#000',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    gap: '1rem'
                                }}
                            >
                                {isFixed ? <CheckCircle2 size={18} /> : null}
                                {isFixed ? 'MÉTODO LÓGICA APLICADO' : 'APLICAR NUESTRO MÉTODO'}
                            </button>
                        </div>
                    </div>

                    <div className="gears-container hidden md:flex" style={{ position: 'relative', height: '600px', alignItems: 'center', justifyContent: 'center' }} aria-hidden="true">
                        <div style={{ position: 'relative', width: '100%', height: '100%' }}>

                            {gearPositions.map((g, i) => (
                                <motion.div
                                    key={i}
                                    style={{
                                        position: 'absolute',
                                        top: g.top,
                                        bottom: g.bottom,
                                        left: g.left,
                                        right: g.right,
                                        color: isFixed ? '#000' : g.color,
                                        zIndex: (!isFixed && activeFriction === i) ? 10 : 1
                                    }}
                                    className={(!isFixed && activeFriction === i) ? "gear-stuck" : (i % 2 === 0 ? "animate-spin-slow" : "animate-spin-reverse-slow")}
                                >
                                    {(!isFixed && activeFriction === i) && (
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.5 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            style={{
                                                position: 'absolute',
                                                top: '50%',
                                                left: '50%',
                                                transform: 'translate(-50%, -50%)',
                                                width: '120%',
                                                height: '120%',
                                                background: 'radial-gradient(circle, rgba(255,0,0,0.05) 0%, transparent 70%)',
                                                zIndex: -1
                                            }}
                                        />
                                    )}
                                    {g.icon}

                                    {(!isFixed && activeFriction === i) && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            style={{
                                                position: 'absolute',
                                                top: '-40px',
                                                left: '50%',
                                                transform: 'translateX(-50%)',
                                                background: '#000',
                                                color: '#fff',
                                                fontSize: '0.65rem',
                                                fontWeight: '700',
                                                padding: '6px 12px',
                                                borderRadius: '4px',
                                                whiteSpace: 'nowrap',
                                                boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
                                                border: '1px solid #333'
                                            }}
                                        >
                                            {frictions[i].sub.toUpperCase()}
                                        </motion.div>
                                    )}
                                </motion.div>
                            ))}

                            <div style={{ position: 'absolute', top: '45%', right: '15%', zIndex: 1, textAlign: 'right' }}>
                                <div style={{ fontSize: '0.65rem', fontWeight: '800', letterSpacing: '0.3rem', textTransform: 'uppercase', marginBottom: '0.5rem', color: '#888' }}>
                                    {isFixed ? 'OPERACIÓN ÓPTIMA' : 'IDENTIFICANDO'}
                                </div>
                                <div style={{ fontSize: '2.5rem', fontWeight: '900', lineHeight: '1', letterSpacing: '-0.05rem' }}>
                                    SOMOS <br /> LÓGICA<span style={{ color: isFixed ? '#10b981' : '#000' }}>.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Friction;
