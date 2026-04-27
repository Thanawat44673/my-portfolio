import { useEffect, useRef } from 'react';

const stats = [
    { number: '3+', label: 'Years of Learning' },
    { number: '20+', label: 'Projects Built' },
    { number: '10+', label: 'Technologies' },
    { number: '∞', label: 'Curiosity' },
];

const highlights = ['React', 'Node.js', 'TypeScript', 'REST APIs', 'Git', 'Agile'];

export default function About() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => entries.forEach(e => e.target.classList.toggle('visible', e.isIntersecting)),
            { threshold: 0.1 }
        );
        sectionRef.current?.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <section className="about" id="about" ref={sectionRef}>
            <div className="container">
                <h2 className="section-title fade-in">About Me</h2>
                <p className="section-subtitle fade-in"></p>

                <div className="about-grid">
                    <div className="about-text fade-in">
                        <p>
                            Hey! I'm <strong>Thanawat Saninat</strong>, a full-stack developer based in Thailand.
                            I love turning complex ideas into elegant, user-friendly digital experiences that make
                            people's lives better.
                        </p>
                        <p>
                            I started coding out of pure curiosity and it quickly became my passion. I enjoy
                            working across the entire stack — from crafting pixel-perfect UIs to designing
                            robust backend architectures and scalable APIs.
                        </p>
                        <p>
                            When I'm not coding, you'll find me exploring new technologies, contributing to
                            open-source, or sipping coffee while reading about software design patterns.
                        </p>

                        <div className="about-highlights">
                            {highlights.map(h => (
                                <span key={h} className="highlight-chip">{h}</span>
                            ))}
                        </div>

                        <div style={{ marginTop: '28px' }}>
                            <a href="#contact" className="btn btn-primary">Get In Touch ✉️</a>
                        </div>
                    </div>

                    <div className="about-stats fade-in">
                        {stats.map(s => (
                            <div className="stat-card" key={s.label}>
                                <div className="stat-number">{s.number}</div>
                                <div className="stat-label">{s.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
