import { useEffect, useRef } from 'react';

const categories = [
    {
        title: 'Frontend',
        skills: ['React', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Vite'],
    },
    {
        title: 'Backend',
        skills: ['Node.js', 'Express', 'REST API', 'JWT', '.NET Minimal API'],
    },
    {
        title: 'Database',
        skills: ['PostgreSQL', 'MySQL', 'Firebase'],
    },
    {
        title: 'Tools & DevOps',
        skills: ['Git', 'GitHub', 'Docker', 'Vercel', 'Postman', 'Figma'],
    },
];

const OBSERVER_OPTIONS = { threshold: 0.1 };

export default function Skills() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        const elements = Array.from(section.querySelectorAll('.fade-in'));

        const observer = new IntersectionObserver(
            entries => entries.forEach(e => e.target.classList.toggle('visible', e.isIntersecting)),
            OBSERVER_OPTIONS
        );

        elements.forEach(el => observer.observe(el));

        return () => {
            elements.forEach(el => observer.unobserve(el));
            observer.disconnect();
        };
    }, []);

    return (
        <section className="skills" id="skills" ref={sectionRef} aria-label="Skills and Technologies">
            <div className="container">
                <h2 className="section-title fade-in">Skills &amp; Technologies</h2>

                <div className="skills-grid">
                    {categories.map((cat, i) => (
                        <div
                            className="skill-category fade-in"
                            key={cat.title}
                            style={{ transitionDelay: `${i * 0.1}s` }}
                        >
                            <div className="skill-category-title">
                                {/* CSS dot replaces emoji icon box */}
                                <span className="skill-icon" aria-hidden="true" />
                                {cat.title}
                            </div>
                            <div className="skill-tags">
                                {cat.skills.map(skill => (
                                    <span className="skill-tag" key={skill}>{skill}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
