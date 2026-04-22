import { useEffect, useRef } from 'react';

const categories = [
    {
        icon: '🎨',
        title: 'Frontend',
        skills: ['React', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Vite', 'Redux'],
    },
    {
        icon: '⚙️',
        title: 'Backend',
        skills: ['Node.js', 'Express', 'REST API', 'GraphQL', 'JWT', 'WebSockets'],
    },
    {
        icon: '🗄️',
        title: 'Database',
        skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Prisma', 'Sequelize'],
    },
    {
        icon: '🛠️',
        title: 'Tools & DevOps',
        skills: ['Git', 'GitHub', 'Docker', 'Linux', 'VS Code', 'Postman', 'Figma'],
    },
];

export default function Skills() {
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
        <section className="skills" id="skills" ref={sectionRef}>
            <div className="container">
                <h2 className="section-title fade-in">Skills & Technologies</h2>
                <p className="section-subtitle fade-in">
                    The tools I use to bring ideas to life
                </p>

                <div className="skills-grid">
                    {categories.map((cat, i) => (
                        <div
                            className="skill-category fade-in"
                            key={cat.title}
                            style={{ transitionDelay: `${i * 0.1}s` }}
                        >
                            <div className="skill-category-title">
                                <div className="skill-icon">{cat.icon}</div>
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
