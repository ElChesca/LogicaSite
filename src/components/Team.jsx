import React from 'react';

const Team = () => {
    const partners = [
        { 
            name: "Federico Sánchez Gil", 
            role: "Socio Fundador", 
            desc: "Estrategia, Marketing y Crecimiento empresarial.",
            img: "/federico.jpg",
            imgClass: "partner-img-fede"
        },
        { 
            name: "Martín Luna", 
            role: "Socio Fundador", 
            desc: "Operaciones, Logística y Optimización de procesos.",
            img: "/martin.jpg",
            imgClass: "partner-img-martin"
        }
    ];

    const teamMembers = [
        { name: "Valentina", role: "Producción Audiovisual" },
        { name: "Marcos", role: "Performance & Paid Media" },
        { name: "Agustina", role: "Coordinación de Contenidos" }
    ];

    return (
        <section id="equipo" className="section" style={{ background: '#fff' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
                    <div className="modern-badge">TEAM_MEMBERS</div>
                    <h2 style={{ fontSize: 'clamp(2.2rem, 7vw, 4rem)', letterSpacing: '-0.04em', marginTop: '1rem' }}>Personas que hacen.</h2>
                </div>

                <div style={{ marginBottom: '8rem' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(320px, 100%), 1fr))', gap: '4rem' }}>
                        {partners.map((p, i) => (
                            <div key={i} className="partner-card">
                                <div className="partner-image-container">
                                    <img
                                        src={p.img}
                                        alt={`Socio Fundador ${p.name}`}
                                        className={`partner-img ${p.imgClass}`}
                                        loading="lazy"
                                        onError={(e) => { e.target.src = "https://via.placeholder.com/400x500?text=" + encodeURIComponent(p.name); }}
                                    />
                                    <div className="partner-mask"></div>
                                    <div className="partner-tech-pattern"></div>
                                </div>
                                <h4 style={{ fontSize: '2rem', marginBottom: '0.4rem', fontWeight: '700' }}>{p.name}</h4>
                                <div style={{ color: 'var(--accent-color)', fontWeight: '800', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '1.2rem' }}>{p.role}</div>
                                <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.6', maxWidth: '420px' }}>{p.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <div className="team-image-container">
                        <img
                            src="/team-operative.png"
                            alt="Equipo Operativo"
                            className="team-img"
                            loading="lazy"
                            onError={(e) => { e.target.src = "https://via.placeholder.com/1200x500?text=Operative+Team"; }}
                        />
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '4rem' }}>
                        {teamMembers.map((m, i) => (
                            <div key={i}>
                                <h4 style={{ fontSize: '1.3rem', marginBottom: '0.4rem' }}>{m.name}</h4>
                                <p style={{ color: '#888', fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase' }}>{m.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Team;
