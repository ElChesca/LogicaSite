import React from 'react';

const Footer = () => (
    <footer style={{ padding: '60px 0', borderTop: '1px solid var(--border-color)' }}>
        <div className="container footer-inner">
            {/* Brand & Copyright */}
            <div className="footer-brand">
                <div className="font-heading font-bold text-xl tracking-tighter mb-4">LÓGICA<span style={{ color: 'var(--accent-color)' }}>.</span></div>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>© {new Date().getFullYear()} Somos Lógica. <br />Todos los derechos reservados.</p>
            </div>

            <div className="footer-cols">
                {/* Social Column */}
                <div className="flex flex-col gap-2">
                    <span style={{ fontWeight: 'bold', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>Social</span>
                    <a href="#" className="nav-link" style={{ fontSize: '0.875rem' }} aria-label="LinkedIn">LinkedIn</a>
                    <a href="#" className="nav-link" style={{ fontSize: '0.875rem' }} aria-label="Instagram">Instagram</a>
                </div>

                {/* Construction Column */}
                <div className="flex flex-col gap-4">
                    <span style={{ fontWeight: 'bold', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>Construcción</span>
                    <div className="flex items-center gap-3">
                        <div style={{ padding: '4px', borderRadius: '4px', background: 'transparent' }}>
                            <img
                                src="/logoBaboons.png"
                                alt="Logo de Baboons"
                                style={{
                                    height: '35px',
                                    width: 'auto',
                                    filter: 'invert(1) grayscale(1) contrast(5)',
                                    opacity: 0.8,
                                    transition: 'opacity 0.3s ease'
                                }}
                                onMouseEnter={(e) => e.target.style.opacity = '1'}
                                onMouseLeave={(e) => e.target.style.opacity = '0.8'}
                                loading="lazy"
                            />
                        </div>
                        <div className="flex flex-col">
                            <a href="mailto:info@baboons.com.ar" className="nav-link" style={{ fontSize: '0.875rem', textTransform: 'none', letterSpacing: 'normal' }} aria-label="Correo de Baboons">
                                info@baboons.com.ar
                            </a>
                        </div>
                    </div>
                </div>

                {/* Tech Stack Column */}
                <div className="flex flex-col gap-4">
                    <span style={{ fontWeight: 'bold', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>Tech Stack</span>
                    <div className="flex gap-4 items-center" style={{ filter: 'grayscale(1)', opacity: 0.4 }}>
                        <img src="/vite.svg" alt="Vite" title="Vite" style={{ height: '18px' }} />
                        <img src="/react.svg" alt="React" title="React" style={{ height: '18px' }} />
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" title="Framer Motion">
                            <path d="M0 0h24v12l-12 12V12H0V0zM12 12h12V0L12 12zM0 12h12v12l-12-12z" />
                        </svg>
                        <svg width="16" height="16" viewBox="0 0 75 65" fill="currentColor" title="Vercel">
                            <path d="M37.59.25l36.95 64H.64l36.95-64z" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;
