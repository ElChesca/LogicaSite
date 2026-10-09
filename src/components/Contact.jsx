import React from 'react';

const Contact = () => (
    <section id="contacto" className="section" style={{ background: '#fff' }}>
        <div className="container">
            <div style={{ background: '#000', borderRadius: '40px', padding: '6rem 4rem', textAlign: 'center', color: '#fff' }}>
                <h2 style={{ fontSize: '4rem', marginBottom: '2rem', letterSpacing: '-0.03em' }}>¿Hablamos con lógica?</h2>
                <p style={{ color: '#aaa', maxWidth: '500px', margin: '0 auto 4rem', fontSize: '1.1rem' }}>
                    Si buscás un partner estratégico que se involucre en los resultados de tu negocio, estamos listos.
                </p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
                    <a href="mailto:hola@somoslogica.com" className="btn-primary" style={{ background: '#fff', color: '#000' }} aria-label="Enviar un correo a hola@somoslogica.com">
                        Enviar un mail
                    </a>
                    <a href="#" className="btn-primary" style={{ background: 'transparent', border: '1px solid #444', color: '#fff' }} aria-label="Visitar nuestro perfil de LinkedIn">
                        LinkedIn
                    </a>
                </div>
            </div>
        </div>
    </section>
);

export default Contact;
