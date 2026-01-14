import React, { useState } from "react";

type Project = {
    id: string;
    title: string;
    description: string;
    tech?: string[];
    link?: string;
    repo?: string;
    image?: string;
};

const sampleProjects: Project[] = [
    {
        id: "p1",
        title: "Projeto A",
        description: "Descrição curta e genérica do Projeto A.",
        tech: ["React", "TypeScript", "CSS"],
        link: "#",
        repo: "#",
    },
    {
        id: "p2",
        title: "Projeto B",
        description: "Descrição curta e genérica do Projeto B.",
        tech: ["Node", "Express", "Postgres"],
        link: "#",
        repo: "#",
    },
    {
        id: "p3",
        title: "Projeto C",
        description: "Descrição curta e genérica do Projeto C.",
        tech: ["Next.js", "Vercel"],
        link: "#",
        repo: "#",
    },
];

const cardStyle: React.CSSProperties = {
    border: "1px solid #e5e7eb",
    borderRadius: 8,
    padding: 16,
    background: "#fff",
    boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
    minWidth: 240,
    maxWidth: 340,
    display: "flex",
    flexDirection: "column",
    gap: 8,
};

const gridStyle: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
    gap: 16,
    alignItems: "start",
};

function ProjectCard({ project }: { project: Project }) {
    return (
        
        <article style={cardStyle} aria-labelledby={`proj-${project.id}`}>
            <header>
                <h3 id={`proj-${project.id}`} style={{ margin: 0, fontSize: 18 }}>
                    {project.title}
                </h3>
            </header>
            <p style={{ margin: 0, color: "#374151", fontSize: 14 }}>
                {project.description}
            </p>
            {project.tech && (
                <ul style={{ display: "flex", gap: 8, flexWrap: "wrap", padding: 0, margin: 0, listStyle: "none" }}>
                    {project.tech.map((t) => (
                        <li key={t} style={{ fontSize: 12, color: "#6b7280", background: "#f3f4f6", padding: "4px 8px", borderRadius: 999 }}>
                            {t}
                        </li>
                    ))}
                </ul>
            )}
            <div style={{ marginTop: "auto", display: "flex", gap: 8 }}>
                {project.link && (
                    <a href={project.link} style={{ fontSize: 13, color: "#111827", textDecoration: "none" }}>
                        Ver projeto
                    </a>
                )}
                {project.repo && (
                    <a href={project.repo} style={{ fontSize: 13, color: "#6b7280" }}>
                        Repositório
                    </a>
                )}
            </div>
        </article>
    );
}

export default function ProjetosSection({ projects = sampleProjects }: { projects?: Project[] }) {
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState<Project | null>(null);

    function openModal(p: Project) {
        setActive(p);
        setOpen(true);
    }

    function closeModal() {
        setOpen(false);
        setActive(null);
    }

    return (
        <section aria-labelledby="projetos-title" style={{ padding: 24 }} className="card projetos" id="projetos">
            <h2 id="projetos-title" style={{ margin: "0 0 16px 0" }}>
                Projetos
            </h2>
            <p style={{ marginTop: 0, marginBottom: 16, color: "#6b7280" }}>
                Seção genérica com exemplos de projetos — substitua pelos seus.
            </p>
            <div style={gridStyle}>
                {projects.map((p) => (
                    <div key={p.id} onClick={() => openModal(p)} style={{ cursor: 'pointer' }}>
                        <ProjectCard project={p} />
                    </div>
                ))}
            </div>

            {open && active && (
                <div className="modal" role="dialog" aria-modal="true">
                    <div className="modal-backdrop" onClick={closeModal}></div>
                    <div className="modal-content">
                        <button className="modal-close" onClick={closeModal}>&times;</button>
                        <div style={{ display: 'flex', gap: 12 }}>
                            <img src={active.image || ''} alt={active.title} style={{ width: 240, height: 'auto' }} />
                            <div>
                                <h3>{active.title}</h3>
                                <p>{active.description}</p>
                                <div style={{ marginTop: 12 }}>
                                    {active.link && <a href={active.link} target="_blank" rel="noreferrer" className="btn">Site</a>}
                                    {active.repo && <a href={active.repo} target="_blank" rel="noreferrer" className="btn" style={{ marginLeft: 8 }}>Repo</a>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}