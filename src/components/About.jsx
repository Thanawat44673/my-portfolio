import { useEffect, useRef } from 'react';
import avatarImg from '../assets/ปกเลซูเม่.jpg';

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
                <div className="about-grid">

                    {/* ─── Left: Avatar ─── */}
                    <div className="about-image-wrapper fade-in">
                        <div className="about-avatar-scene">
                            <div className="about-avatar">
                                <div className="about-avatar-inner">
                                    <img src={avatarImg} alt="Thanawat Saninat" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ─── Right: Bio ─── */}
                    <div className="about-text fade-in">
                        <div className="about-bio-header">
                            <span className="about-bio-name">Thanawat Saninat</span>
                            <span className="about-bio-role">Computer Engineering · Fullstack Developer</span>
                        </div>
                        <p>
                            My name is Fluk, a Computer Engineering graduate seeking a Full-stack Developer role,
                            passionate about building both intuitive user interfaces and robust backend systems.
                            Committed to continuous learning and delivering meaningful value to every organization
                            I am part of.
                        </p>
                        <p>
                            During the year following graduation, I was unable to begin full-time employment due
                            to mandatory military service obligations, which have now been fully completed. I am
                            ready to dedicate my full effort and enthusiasm to a professional career in software
                            development.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}
