import { useEffect, useRef } from 'react';

const projects = [
    {
        emoji: '🛒',
        gradient: 'linear-gradient(135deg, #7c3aed22, #a855f722)',
        title: 'Village Food Trading',
        description:
            'A full-stack e-commerce platform for local food shops. Features authentication, shop management, cart, and orders.',
        tags: ['React', 'Node.js', 'PostgreSQL', 'JWT'],
        demo: '#',
        code: 'https://github.com/Thanawat44673/E-Commerce_minimal_API.git',
    },
    {
        emoji: '📱',
        gradient: 'linear-gradient(135deg, #0ea5e922, #6366f122)',
        title: 'Task Manager Pro',
        description:
            'A productivity app with real-time collaboration, drag-and-drop boards, and team workspaces.',
        tags: ['React', 'WebSockets', 'Redis', 'Express'],
        demo: '#',
        code: 'https://github.com',
    },
    {
        emoji: '🤖',
        gradient: 'linear-gradient(135deg, #22c55e22, #14b8a622)',
        title: 'AI Chat Interface',
        description:
            'A ChatGPT-style interface with streaming responses, conversation history, and multiple model support.',
        tags: ['React', 'OpenAI API', 'Node.js', 'MongoDB'],
        demo: '#',
        code: 'https://github.com',
    },
    {
        emoji: '📊',
        gradient: 'linear-gradient(135deg, #f59e0b22, #ef444422)',
        title: 'Analytics Dashboard',
        description:
            'Interactive data visualization dashboard with charts, filters, and real-time metric updates.',
        tags: ['React', 'D3.js', 'REST API', 'TypeScript'],
        demo: '#',
        code: 'https://github.com',
    },
    {
        emoji: '🎵',
        gradient: 'linear-gradient(135deg, #ec489922, #8b5cf622)',
        title: 'Music Streaming App',
        description:
            'Spotify-inspired app with playlist management, audio playback, and personalized recommendations.',
        tags: ['React', 'Node.js', 'PostgreSQL', 'Prisma'],
        demo: '#',
        code: 'https://github.com',
    },
    {
        emoji: '🌐',
        gradient: 'linear-gradient(135deg, #06b6d422, #3b82f622)',
        title: 'Portfolio v1',
        description:
            'My first portfolio — a static site showcasing early projects and experiments. The beginning of everything.',
        tags: ['HTML', 'CSS', 'JavaScript', 'Vanilla'],
        demo: '#',
        code: 'https://github.com',
    },
];

export default function Projects() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => entries.forEach(e => e.target.classList.toggle('visible', e.isIntersecting)),
            { threshold: 0.08 }
        );
        sectionRef.current?.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <section className="projects" id="projects" ref={sectionRef}>
            <div className="container">
                <h2 className="section-title fade-in">Featured Projects</h2>
                <p className="section-subtitle fade-in">
                    A selection of things I've built with passion
                </p>

                <div className="projects-grid">
                    {projects.map((p, i) => (
                        <div
                            className="project-card fade-in"
                            key={p.title}
                            style={{ transitionDelay: `${i * 0.08}s` }}
                        >
                            <div
                                className="project-card-header"
                                style={{ background: p.gradient }}
                            >
                                <span style={{ fontSize: '3.5rem', filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.3))' }}>
                                    {p.emoji}
                                </span>
                            </div>

                            <div className="project-card-body">
                                <h3 className="project-title">{p.title}</h3>
                                <p className="project-desc">{p.description}</p>

                                <div className="project-tags">
                                    {p.tags.map(t => (
                                        <span className="project-tag" key={t}>{t}</span>
                                    ))}
                                </div>

                                <div className="project-links">
                                    <a href={p.demo} className="project-link primary" target="_blank" rel="noreferrer">
                                        🚀 Live Demo
                                    </a>
                                    <a href={p.code} className="project-link secondary" target="_blank" rel="noreferrer">
                                        &lt;/&gt; Code
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
