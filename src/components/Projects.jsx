import { useEffect, useRef } from "react";

const projects = [
  {
    accentColor: "#7c3aed",
    title: "Vegetable Trading Application",
    description:
      "Khun Kamboon's Vegetable Trading Application is an online platform designed to expand market access for homegrown vegetable trading.",
    tags: ["Flutter", "Dart", "Android Studio", "Firebase"],
    demo: "#",
    code: "https://github.com/Thanawat44673/A-Development-of-Vegetable-Trading-Application-A-Case-Study-of-Khun-Khambun-Garden",
  },
  {
    accentColor: "#0ea5e9",
    title: "E-Budget Management System",
    description:
      "API system for user management and access control with JWT authentication. Built with .NET 9.0, ASP.NET Identity, and SQL Server.",
    tags: [
      ".NET 9.0",
      "ASP.NET Core",
      "JWT",
      "SQL Server",
      "Entity Framework Core",
    ],
    demo: "#",
    code: "https://github.com/Thanawat44673/Identity_minimal_API",
  },
  {
    accentColor: "#22c55e",
    title: "Village Food Trading API",
    description:
      "RESTful API for food trading marketplace. Enables vendors to list products and customers to browse and order food.",
    tags: ["Node.js", "Express.js", "PostgreSQL", "Prisma", "Scalar"],
    demo: "#",
    code: "https://github.com/Thanawat44673/E-Commerce_API_backend/tree/main",
  },
  {
    accentColor: "#f59e0b",
    title: "Mini Student Management API",
    description:
      "RESTful API for student management with user authentication, file upload, and student data operations.",
    tags: ["Node.js", "Express.js", "PostgreSQL", "Postman"],
    demo: "#",
    code: "https://github.com/Thanawat44673/Mini-Student-Management-API-Prisma",
  },
];

export default function Projects() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) =>
          e.target.classList.toggle("visible", e.isIntersecting),
        ),
      { threshold: 0.08 },
    );
    sectionRef.current
      ?.querySelectorAll(".fade-in")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="projects" id="projects" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title fade-in">Featured Projects</h2>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <div
              className="project-card fade-in"
              key={p.title}
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              {/* Thin color bar instead of emoji header */}
              <div
                className="project-card-header"
                style={{ background: p.accentColor, opacity: 0.55 }}
                aria-hidden="true"
              />

              <div className="project-card-body">
                <h3 className="project-title">{p.title}</h3>
                <p className="project-desc">{p.description}</p>

                <div className="project-tags">
                  {p.tags.map((t) => (
                    <span className="project-tag" key={t}>
                      {t}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  {p.demo && p.demo !== "#" && (
                    <a
                      href={p.demo}
                      className="project-link primary"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live Demo
                    </a>
                  )}
                  <a
                    href={p.code}
                    className="project-link secondary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Code
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
