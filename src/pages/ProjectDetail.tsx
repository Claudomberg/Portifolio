import { useParams, Link } from "react-router";
import { PROJECTS } from "../data/portfolio";

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <p className="font-display text-[#3a6888] text-2xl font-light mb-6">Projeto não encontrado.</p>
        <Link to="/" className="frost-link text-[#5a90b8] text-xs tracking-[0.2em] uppercase">← Voltar ao início</Link>
      </div>
    );
  }

  const currentIndex = PROJECTS.findIndex((p) => p.slug === slug);
  const prev = PROJECTS[currentIndex - 1] ?? null;
  const next = PROJECTS[currentIndex + 1] ?? null;

  return (
    <div className="min-h-screen">
      {/* Hero image */}
      <div className="relative h-[55vh] md:h-[65vh] overflow-hidden mt-16">
        <img
          src={project.img}
          alt={project.title}
          className="w-full h-full object-cover"
          style={{ filter: "saturate(0.6) brightness(0.5)" }}
        />
        <div className="absolute inset-0"
          style={{ background: "linear-gradient(180deg, rgba(8,18,30,0.3) 0%, rgba(8,18,30,0.85) 100%)" }} />

        <div className="absolute inset-0 flex flex-col justify-end pb-14 px-8 md:px-16 max-w-[1400px] mx-auto left-0 right-0">
          <p className="text-[#3a78aa] text-xs tracking-[0.3em] uppercase font-medium mb-4">
            {project.category} — {project.year}
          </p>
          <h1 className="font-display font-light text-[clamp(3rem,7vw,7rem)] text-[#d8eaf8] leading-none tracking-[-0.03em]">
            {project.title}
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-[1400px] mx-auto px-8 md:px-16 py-20 md:py-28">
        <div className="grid md:grid-cols-[2fr_1fr] gap-16 md:gap-24">

          {/* Main description */}
          <div>
            <p className="text-[#4a90c0] text-xs tracking-[0.3em] uppercase font-medium mb-8">Sobre o Projeto</p>
            <p className="font-display font-light text-[clamp(1.1rem,2vw,1.5rem)] text-[#c8dff0] leading-[1.6] mb-10">
              {project.longDesc}
            </p>

            {/* Highlights */}
            <p className="text-[#2a5878] text-xs tracking-[0.3em] uppercase font-medium mb-6 mt-12">Destaques</p>
            <ul className="flex flex-col gap-4">
              {project.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="text-[#1e4a70] text-xs mt-1 shrink-0">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M2 7L6 11L12 3" stroke="#3a78aa" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="text-[#5a90b8] text-sm leading-[1.8]">{h}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Sidebar */}
          <div className="flex flex-col gap-8">
            {/* Tech stack */}
            <div className="p-8 rounded-sm"
              style={{ background: "rgba(8,18,32,0.6)", backdropFilter: "blur(6px)", border: "1px solid rgba(80,140,220,0.07)" }}>
              <p className="text-[#2a5878] text-xs tracking-[0.3em] uppercase font-medium mb-6">Tecnologias</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="px-3 py-1.5 text-[#5a90b8] text-xs tracking-[0.1em]"
                    style={{ border: "1px solid rgba(60,110,180,0.2)", borderRadius: 2 }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            {(project.repo || project.link) && (
              <div className="p-8 rounded-sm"
                style={{ background: "rgba(8,18,32,0.6)", backdropFilter: "blur(6px)", border: "1px solid rgba(80,140,220,0.07)" }}>
                <p className="text-[#2a5878] text-xs tracking-[0.3em] uppercase font-medium mb-6">Links</p>
                <div className="flex flex-col gap-3">
                  {project.repo && (
                    <a href={project.repo} target="_blank" rel="noreferrer"
                      className="inline-flex items-center gap-3 text-[#5a90b8] text-xs tracking-[0.2em] uppercase frost-link hover:text-[#8ab8d8] transition-colors">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                      </svg>
                      Repositório
                    </a>
                  )}
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noreferrer"
                      className="inline-flex items-center gap-3 text-[#5a90b8] text-xs tracking-[0.2em] uppercase frost-link hover:text-[#8ab8d8] transition-colors">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15,3 21,3 21,9" /><line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                      Ver ao vivo
                    </a>
                  )}
                </div>
              </div>
            )}

            {/* Back */}
            <Link to="/#projetos"
              className="inline-flex items-center gap-3 text-[#2a5878] text-xs tracking-[0.2em] uppercase frost-link hover:text-[#5a90b8] transition-colors">
              <svg width="20" height="8" viewBox="0 0 24 8" fill="none">
                <path d="M24 4H2M6 1L2 4L6 7" stroke="currentColor" strokeWidth="1.2" />
              </svg>
              Todos os projetos
            </Link>
          </div>
        </div>

        {/* Prev / Next navigation */}
        {(prev || next) && (
          <div className="mt-24 pt-10 flex items-center justify-between gap-8"
            style={{ borderTop: "1px solid rgba(80,140,220,0.08)" }}>
            {prev ? (
              <Link to={`/projeto/${prev.slug}`} className="group flex flex-col gap-2">
                <span className="text-[#1e4060] text-[10px] tracking-[0.3em] uppercase">← Anterior</span>
                <span className="font-display text-[#8ab8d8] text-xl font-light group-hover:text-[#c8dff0] transition-colors">{prev.title}</span>
              </Link>
            ) : <div />}
            {next && (
              <Link to={`/projeto/${next.slug}`} className="group flex flex-col gap-2 text-right">
                <span className="text-[#1e4060] text-[10px] tracking-[0.3em] uppercase">Próximo →</span>
                <span className="font-display text-[#8ab8d8] text-xl font-light group-hover:text-[#c8dff0] transition-colors">{next.title}</span>
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
