import React from 'react';
import { motion } from 'framer-motion';
import { Workflow, BarChart3, Search } from 'lucide-react';

const Services = () => {
    const services = [
        {
            icon: <Workflow size={32} />,
            title: "Procesos y Operaciones",
            desc: "Diseñamos y reorganizamos procesos internos para eliminar fricciones y ganar eficiencia."
        },
        {
            icon: <BarChart3 size={32} />,
            title: "Estructura Comercial",
            desc: "Optimizamos tu fuerza de venta y canales de distribución para escalar los resultados."
        },
        {
            icon: <Search size={32} />,
            title: "Implementación Tech",
            desc: "Integramos herramientas como CRM, Odoo y automatizaciones que potencian la gestión diaria."
        }
    ];

    return (
        <section id="servicios" className="section">
            <div className="container">
                <div style={{ marginBottom: '4rem' }}>
                    <div className="modern-badge">FOCO OPERATIVO</div>
                    <h2 style={{ fontSize: 'clamp(2.2rem, 7vw, 3rem)', marginBottom: '1rem', marginTop: '1rem' }}>Soluciones que funcionan.</h2>
                    <p style={{ color: 'var(--text-muted)', maxWidth: '500px' }}>
                        Detectamos fricciones y desarrollamos soluciones para procesos, ventas y gestión interna.
                    </p>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))', gap: '2rem' }}>
                    {services.map((s, i) => (
                        <motion.div
                            key={i}
                            className="glass-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                        >
                            <div style={{ color: 'var(--accent-color)', marginBottom: '1.5rem' }} aria-hidden="true">{s.icon}</div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{s.title}</h3>
                            <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>{s.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
