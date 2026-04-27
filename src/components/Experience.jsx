import { useEffect, useRef } from 'react';

export default function Experience() {
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
        <section className="experience" id="experience" ref={sectionRef}>
            <div className="container">
                <h2 className="section-title fade-in">My Experience</h2>
                <p className="section-subtitle fade-in"></p>

                <div className="experience-wrapper fade-in">
                    <div className="experience-grid">
                        <div className="experience-item fade-in">
                            <div className="experience-header">
                                <h3 className="job-title">Final Project</h3>
                                <span className="job-period">5 months</span>
                            </div>
                            <p className="company-name">Dec. 2023 - Mar. 2024</p>
                            <p className="job-subtitle">A Development of Vegetable Trading Application: A Case Study of Khun Khambun Garden</p>
                            <p className="job-highlights">
                                • Developed an online vegetable trading app using Flutter and Firebase to expand market access for smallholder farmers.<br/>
                                • Implemented core features including vegetable management, buying and selling functions, income statistics, promotion and notification system, and member registration & management.<br/>
                                • Designed role-based functionality for shop owners and users<br/>
                                • Utilized Firebase Authentication, Cloud Firestore, and Firebase Cloud Messaging (FCM)
                            </p>
                            <div className="tech-stack">
                                <span className="tech-tag">Flutter</span>
                                <span className="tech-tag">Firebase</span>
                                <span className="tech-tag">Dart</span>
                                <span className="tech-tag">Mobile App</span>
                            </div>
                        </div>

                        <div className="experience-item fade-in">
                            <div className="experience-header">
                                <h3 className="job-title">Internship</h3>
                                <span className="job-period">4 months</span>
                            </div>
                            <p className="company-name">INFOLINK COMPANY LIMITED</p>
                            <p className="company-name">Dec. 2024 – Mar. 2025</p>
                            <p className="job-subtitle">Web API .Net Developer (C#)</p>
                            <p className="job-highlights">
                                • Developed backend services for the e-Budget management system using .NET 9 Minimal API and Entity Framework Core for SQL Server.<br/>
                                • Implemented secure RESTful APIs with JWT Authentication and ASP.NET Identity Framework to handle user login, registration, and role-based authorization.<br/>
                                • Designed, documented and tested endpoints with Swagger/OpenAPI (including grouped Swagger docs)<br/>
                                • Designed sequence diagrams for key workflows to clarify API contracts and reduce integration bugs
                            </p>
                            <div className="tech-stack">
                                <span className="tech-tag">.NET 9</span>
                                <span className="tech-tag">C#</span>
                                <span className="tech-tag">REST API</span>
                                <span className="tech-tag">JWT Auth</span>
                                <span className="tech-tag">SQL Server</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
