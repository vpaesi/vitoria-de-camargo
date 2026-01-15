import spinning from "../../assets/captura-de-tela/spinning.png";
import falaCidadao from "../../assets/captura-de-tela/fala-cidadao.png";
import compartilhaMais from "../../assets/captura-de-tela/compartilha-plus.png";
import acervi from "../../assets/captura-de-tela/acervi.png";

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
    title: "Spinning Joias",
    description:
      "Interface web responsiva para catálogo de produtos da Spinning Joias.",
    tech: ["React", "TypeScript", "Jest"],
    link: "https://spinning-joias.vercel.app/",
    repo: "https://github.com/vpaesi/spinning-joias",
    image: spinning,
  },
  {
    id: "p2",
    title: "Fala Cidadão",
    description:
      "Aplicação de denúncias para reportar problemas urbanos de forma simples.",
    tech: ["React", "TypeScript", "Jest"],
    link: "https://fala-cidadao.vercel.app/",
    repo: "https://github.com/vpaesi/fala-cidadao",
    image: falaCidadao,
  },
  {
    id: "p3",
    title: "Compartilha+",
    description:
      "Plataforma para doação e troca comunitária de itens essenciais.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    link: "https://compartilha-mais.vercel.app/",
    repo: "https://github.com/vpaesi/compartilha-mais",
    image: compartilhaMais,
  },
  {
    id: "p4",
    title: "Acervi",
    description: "App mobile para catalogação e organização de acervo pessoal.",
    tech: ["AppSheet"],
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7417311388450250753/",
    image: acervi,
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card" aria-labelledby={`proj-${project.id}`}>
      {project.image && (
        <img
          src={project.image}
          alt={project.title}
          className="project-image"
        />
      )}
      <header>
        <h3 id={`proj-${project.id}`} className="project-title">
          {project.title}
        </h3>
      </header>
      <p className="project-description">{project.description}</p>
      {project.tech && (
        <ul className="project-tech-list">
          {project.tech.map((t) => (
            <li key={t} className="project-tech">
              {t}
            </li>
          ))}
        </ul>
      )}
      <div className="project-links">
        {project.link && (
          <a
            href={project.link}
            className="contato-social"
            target="_blank"
            rel="noreferrer"
          >
            Ver projeto
          </a>
        )}
        {project.repo && (
          <a
            href={project.repo}
            className="contato-social"
            target="_blank"
            rel="noreferrer"
          >
            Repositório
          </a>
        )}
      </div>
    </article>
  );
}

export default function ProjetosSection({
  projects = sampleProjects,
}: {
  projects?: Project[];
}) {
  return (
    <section aria-labelledby="projetos-title" className="card projetos" id="projetos">
      <h2 id="projetos-title">Projetos</h2>
      <p>
        Aqui estão alguns projetos reais que desenvolvi, com foco na qualidade e
        na entrega de valor aos usuários.
      </p>
      <div className="project-grid">
        {projects.map((p) => (
          <div key={p.id} className="project-tile">
            <ProjectCard project={p} />
          </div>
        ))}
      </div>

      <div className="project-more">
        <a href="https://github.com/vpaesi" target="_blank" rel="noreferrer" className="badges-toggle btn">
          <span className="btn-text">Ver mais projetos</span>
        </a>
      </div>
    </section>
  );
}
