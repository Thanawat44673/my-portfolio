import { useEffect, useRef, useState } from 'react';

export default function Contact() {
    const sectionRef = useRef(null);
    const [sent, setSent] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => entries.forEach(e => e.target.classList.toggle('visible', e.isIntersecting)),
            { threshold: 0.1 }
        );
        sectionRef.current?.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSent(true);
        setTimeout(() => setSent(false), 4000);
        e.target.reset();
    };

    return (
        <section className="contact" id="contact" ref={sectionRef}>
            <div className="container">
                <h2 className="section-title fade-in">Get In Touch</h2>
                <p className="section-subtitle fade-in">
                    Have a project in mind or just want to chat? I'd love to hear from you.
                </p>

                <div className="contact-wrapper fade-in">
                    <div className="contact-card">
                        <span className="contact-emoji">👋</span>
                        <h3 className="contact-title">Let's work together!</h3>
                        <p className="contact-desc">
                            I'm currently open to freelance work and full-time positions.
                            Drop me a message and let's make something great.
                        </p>

                        {sent ? (
                            <div style={{
                                padding: '20px',
                                background: 'rgba(34, 197, 94, 0.1)',
                                border: '1px solid rgba(34, 197, 94, 0.3)',
                                borderRadius: '16px',
                                color: '#22c55e',
                                fontWeight: 600,
                                fontSize: '0.95rem'
                            }}>
                                ✅ Message sent! I'll get back to you soon.
                            </div>
                        ) : (
                            <form className="contact-form" onSubmit={handleSubmit}>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label>First Name</label>
                                        <input type="text" placeholder="John" required />
                                    </div>
                                    <div className="form-group">
                                        <label>Last Name</label>
                                        <input type="text" placeholder="Doe" required />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="email" placeholder="john@example.com" required />
                                </div>

                                <div className="form-group">
                                    <label>Subject</label>
                                    <input type="text" placeholder="Project Inquiry" required />
                                </div>

                                <div className="form-group">
                                    <label>Message</label>
                                    <textarea placeholder="Tell me about your project..." required />
                                </div>

                                <button type="submit" className="btn btn-primary form-submit">
                                    Send Message 🚀
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
