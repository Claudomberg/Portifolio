import { useState } from "react";
import { Link } from "react-router";
import { PROJECTS, SKILLS } from "../data/portfolio";

// ─── ticker ──────────────────────────────────────────────────────────────────

const TICKER_ITEMS = [
  "Engenharia de Software","Tecnologia em Informática","Análise de Sistemas","React","Node.js","TypeScript","PostgreSQL","Docker",
  "Engenharia de Software","Tecnologia em Informática","Análise de Sistemas","React","Node.js","TypeScript","PostgreSQL","Docker",
];

function Ticker() {
  return (
    <div className="overflow-hidden py-4"
      style={{ borderTop: "1px solid rgba(100,160,255,0.08)", borderBottom: "1px solid rgba(100,160,255,0.08)", background: "rgba(8,18,30,0.4)", backdropFilter: "blur(8px)" }}>
      <div className="ticker-track">
        {TICKER_ITEMS.map((item, i) => (
          <span key={i} className="flex items-center gap-5 px-6 whitespace-nowrap">
            <span className="text-[#3a78aa] text-xs tracking-[0.22em] uppercase font-medium">{item}</span>
            <span style={{ color: "rgba(100,160,255,0.18)", fontSize: 10 }}>✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

// ─── hero ────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-end pb-20 md:pb-28" id="inicio">
      <div className="absolute bottom-0 left-0 right-0 h-72 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 70% 100% at 58% 100%, rgba(40,100,180,0.18) 0%, transparent 100%)" }} />

      <div className="relative z-10 max-w-[1400px] mx-auto px-8 md:px-12 w-full">
        <p className="reveal reveal-delay-1 text-[#6aa0c8] text-xs tracking-[0.3em] uppercase mb-8 md:mb-12 font-medium">
          Claudomberg Olivira Cruz
        </p>

        <h1 className="font-display font-light leading-[0.92] tracking-[-0.02em] text-[clamp(3.2rem,10vw,10rem)] text-[#d8eaf8]">
          <span className="block reveal reveal-delay-2">Eng. de Software</span>
          <span className="block reveal reveal-delay-3 italic text-[#7ab8e8]">Tec. em Informática</span>
          <span className="block reveal reveal-delay-4">Analista de Sistema</span>
        </h1>

        <div className="reveal reveal-delay-5 flex flex-col md:flex-row md:items-end gap-6 md:gap-0 md:justify-between mt-10">
          <p className="text-[#5a90b8] text-sm md:text-base leading-relaxed max-w-sm font-light">
            As vezes uso palavras difíceis que não entendo para dar mais fotossíntese
          </p>
          <a href="#sobre" className="inline-flex items-center gap-3 text-[#d8eaf8] text-xs tracking-[0.2em] uppercase font-medium group">
            <span className="frost-link">Sobre mim</span>
            <svg width="24" height="8" viewBox="0 0 24 8" fill="none" className="opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
              <path d="M0 4H22M18 1L22 4L18 7" stroke="#7ab8e8" strokeWidth="1.2" />
            </svg>
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 scroll-bounce flex flex-col items-center gap-2 opacity-30">
        <span className="text-[#6aa0c8] text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <svg width="1" height="40" viewBox="0 0 1 40"><line x1="0.5" y1="0" x2="0.5" y2="40" stroke="#6aa0c8" strokeWidth="1" /></svg>
      </div>
    </section>
  );
}

// ─── about ───────────────────────────────────────────────────────────────────

function About() {
  return (
    <section className="py-28 md:py-40" id="sobre">
      <div className="max-w-[1400px] mx-auto px-8 md:px-12">
        <div className="rounded-sm p-10 md:p-16"
          style={{ background: "rgba(8,18,32,0.65)", backdropFilter: "blur(6px)", border: "1px solid rgba(80,140,220,0.08)" }}>
          <div className="grid md:grid-cols-[1fr_2fr] gap-16 md:gap-24 items-start">
            <div>
              <p className="text-[#4a90c0] text-xs tracking-[0.3em] uppercase font-medium mb-4">filosofia</p>
              <div className="ice-divider mb-8" />
              <p className="text-[#3a6888] text-xs tracking-[0.2em] uppercase leading-relaxed">estudio gelido / são luis</p>

              <div className="mt-10 flex flex-col gap-3">
                {[
                  { label: "Localização", val: "São Luís, MA" },
                  { label: "Formação", val: "Eng. de Software" },
                  { label: "Disponível", val: "Para projetos" },
                ].map((r) => (
                  <div key={r.label} className="flex gap-4 items-baseline">
                    <span className="text-[#1e4060] text-[10px] tracking-[0.25em] uppercase w-24 shrink-0">{r.label}</span>
                    <span className="text-[#5a90b8] text-xs">{r.val}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="font-display font-light text-[clamp(1.6rem,3.5vw,3rem)] text-[#c8dff0] leading-[1.2] tracking-[-0.01em]">
                Nosso meio é a{" "}
                <em className="not-italic text-[#7ab8e8]">quietude.</em> A pausa antes da tempestade, o azul do gelo nas profundezas — trabalhamos no espaço onde as coisas parecem inóspito.
              </p>
              <p className="mt-10 text-[#5a90b8] text-sm leading-[1.9] max-w-lg font-light">
                Somos um pequeno estúdio com um grande apetite pela sobriedade. Todo projeto começa com uma única pergunta:{" "}
                <em>o que podemos renovar?</em> A resposta é sempre: mais do que você imagina.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-px grid grid-cols-2 md:grid-cols-4 gap-px bg-[rgba(80,140,220,0.05)]">
          {[
            { n: "4+", label: "Anos estudando" },
            { n: "12+", label: "Projetos feitos" },
            { n: "3", label: "Certificações" },
            { n: "∞", label: "Café consumido" },
          ].map((s) => (
            <div key={s.n} className="p-8 md:p-10" style={{ background: "rgba(8,18,32,0.6)", backdropFilter: "blur(4px)" }}>
              <p className="stat-num text-[3.5rem] md:text-[4.5rem] font-light text-[#c8dff0] leading-none tracking-[-0.03em]">{s.n}</p>
              <p className="mt-3 text-[#3a6888] text-xs tracking-[0.2em] uppercase">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── skills ───────────────────────────────────────────────────────────────────

function SkillBar({ name, level }: { name: string; level: number }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <span className="text-[#8ab8d8] text-xs tracking-[0.15em]">{name}</span>
        <span className="text-[#2a5878] text-[10px] tracking-[0.1em]">{level}%</span>
      </div>
      <div className="h-px w-full" style={{ background: "rgba(80,140,220,0.12)" }}>
        <div
          className="h-px transition-all duration-1000"
          style={{
            width: `${level}%`,
            background: "linear-gradient(90deg, #1e4a70 0%, #4a90c0 100%)",
          }}
        />
      </div>
    </div>
  );
}

function Skills() {
  return (
    <section className="py-28 md:py-40" id="stacks">
      <div className="max-w-[1400px] mx-auto px-8 md:px-12">
        <div className="mb-20">
          <p className="text-[#2a5878] text-xs tracking-[0.3em] uppercase font-medium mb-4">Tecnologias</p>
          <h2 className="font-display font-light text-[clamp(2.4rem,5vw,5rem)] text-[#c8dff0] leading-none tracking-[-0.02em]">Stacks</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-[rgba(60,110,180,0.06)]">
          {SKILLS.map((area) => (
            <div
              key={area.area}
              className="p-10 md:p-12 flex flex-col gap-7"
              style={{ background: "rgba(6,14,24,0.65)", backdropFilter: "blur(4px)" }}
            >
              <p className="text-[#1e4a70] text-xs tracking-[0.3em] uppercase font-medium mb-2">{area.area}</p>
              {area.items.map((item) => (
                <SkillBar key={item.name} name={item.name} level={item.level} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── projects ────────────────────────────────────────────────────────────────

function Projects() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section className="py-20 md:py-28" id="projetos">
      <div className="max-w-[1400px] mx-auto px-8 md:px-12">
        <div className="flex items-end justify-between mb-16">
          <div>
            <p className="text-[#3a78aa] text-xs tracking-[0.3em] uppercase font-medium mb-3">Trabalhos Selecionados</p>
            <h2 className="font-display font-light text-[clamp(2.4rem,5vw,5rem)] text-[#c8dff0] leading-none tracking-[-0.02em]">Projetos</h2>
          </div>
        </div>

        <div className="flex flex-col rounded-sm overflow-hidden"
          style={{ background: "rgba(8,18,32,0.6)", backdropFilter: "blur(4px)", border: "1px solid rgba(80,140,220,0.06)" }}>
          {PROJECTS.map((proj, i) => (
            <div key={proj.id}>
              <Link
                to={`/projeto/${proj.slug}`}
                className="block px-8 md:px-12 py-8 md:py-10 group transition-colors duration-300"
                style={{ textDecoration: "none" }}
                onMouseEnter={() => setActive(proj.id)}
                onMouseLeave={() => setActive(null)}
              >
                <div
                  className="px-0 transition-colors duration-300"
                  style={active === proj.id ? { background: "rgba(20,50,90,0.18)" } : {}}
                >
                  <div className="grid md:grid-cols-[80px_1fr_1fr_auto] gap-4 md:gap-8 items-center">
                    <p className="font-display text-[#1e4a70] text-4xl font-light leading-none transition-colors duration-300 group-hover:text-[#7ab8e8]">
                      {proj.id}
                    </p>
                    <div>
                      <h3 className="font-display text-[clamp(1.6rem,3vw,2.8rem)] font-light text-[#c8dff0] leading-none tracking-[-0.01em] mb-2">
                        {proj.title}
                      </h3>
                      <p className={`text-[#5a90b8] text-sm leading-relaxed transition-all duration-500 max-w-xs ${active === proj.id ? "opacity-100 max-h-20" : "opacity-0 max-h-0 overflow-hidden"}`}>
                        {proj.shortDesc}
                      </p>
                    </div>
                    <div className="hidden md:block">
                      <p className="text-[#3a78aa] text-xs tracking-[0.2em] uppercase">{proj.category}</p>
                      <p className="text-[#1e4a70] text-xs mt-1">{proj.year}</p>
                    </div>
                    <div className={`hidden md:block w-48 h-32 rounded-sm overflow-hidden bg-[#0a1e30] transition-all duration-700 ${active === proj.id ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
                      <img src={proj.img} alt={proj.title} className="w-full h-full object-cover"
                        style={{ filter: "saturate(0.65) brightness(0.65)" }} />
                    </div>
                  </div>
                </div>
              </Link>
              {i < PROJECTS.length - 1 && (
                <div className="mx-8 md:mx-12 h-px"
                  style={{ background: "linear-gradient(90deg, transparent, rgba(80,140,220,0.1), transparent)" }} />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── underwater manifesto ─────────────────────────────────────────────────────

function UnderwaterManifesto() {
  return (
    <section className="py-40 md:py-56 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-8 md:px-12 relative z-10">
        <div className="max-w-3xl">
          <p className="text-[#1a4a7a] text-xs tracking-[0.35em] uppercase font-medium mb-8">
            — 300 metros abaixo dos seus pés —
          </p>
          <h2 className="font-display font-light text-[clamp(2.4rem,5.5vw,6rem)] text-[#a8c8e4] leading-[1.0] tracking-[-0.025em]">
            <span className="block">A maior parte do que fazemos</span>
            <span className="block not-italic text-[#4a88c0]">você nunca verá.</span>
          </h2>
          <p className="mt-12 text-[#3a6888] text-sm leading-[2] max-w-sm font-light">
            Estratégia, pesquisa, revisão, silêncio. O trabalho visível é apenas a superfície. O iceberg sempre vence.
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── contact ─────────────────────────────────────────────────────────────────

function Contact() {
  return (
    <section className="py-40 md:py-64" id="contato">
      <div className="max-w-[1400px] mx-auto px-8 md:px-12 text-center">
        <p className="text-[#1e4060] text-xs tracking-[0.35em] uppercase font-medium mb-10">— Bora conversar —</p>
        <h2 className="font-display font-light text-[clamp(3rem,8vw,8rem)] text-[#6aa0c8] leading-[0.95] tracking-[-0.03em] mb-16">
          <span className="block">Vamos fazer</span>
          <span className="block not-italic text-[#2a5880]">algo GELIDO.</span>
        </h2>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a
            href="mailto:claudomberg@email.com"
            className="inline-flex items-center gap-4 px-10 py-4 text-[#7ab0d0] text-xs tracking-[0.2em] uppercase font-medium group transition-all duration-300"
            style={{ border: "1px solid rgba(60,110,180,0.25)" }}
            onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(80,150,220,0.45)"; el.style.background = "rgba(20,50,90,0.12)"; }}
            onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(60,110,180,0.25)"; el.style.background = "transparent"; }}
          >
            <span>Entre em contato</span>
            <svg width="20" height="8" viewBox="0 0 24 8" fill="none" className="group-hover:translate-x-1 transition-transform duration-300">
              <path d="M0 4H22M18 1L22 4L18 7" stroke="currentColor" strokeWidth="1.2" />
            </svg>
          </a>
          <a href="#projetos" className="text-[#1e4060] text-xs tracking-[0.2em] uppercase font-medium frost-link hover:text-[#3a7098] transition-colors duration-300">
            Ver projetos
          </a>
        </div>
        <p className="mt-10 text-[#1a3050] text-xs tracking-[0.2em]">claudomberg@email.com</p>
      </div>
    </section>
  );
}

// ─── footer ──────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="py-10" style={{ borderTop: "1px solid rgba(40,80,140,0.1)", background: "rgba(2,6,12,0.7)" }}>
      <div className="max-w-[1400px] mx-auto px-8 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-display text-[#1a3050] text-sm font-light tracking-[0.15em]">GELIDO</p>
        <p className="text-[#142438] text-xs tracking-[0.15em]">© 2026 — FRIO POR ESCOLHA</p>
        <div className="flex items-center gap-6">
          {[
            { label: "GITHUB", href: "https://github.com" },
            { label: "LinkedIn", href: "#" },
            { label: "Twitter", href: "#" },
          ].map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noreferrer"
              className="text-[#1a3050] text-xs tracking-[0.15em] uppercase hover:text-[#3a6888] transition-colors duration-300">
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

// ─── home page ───────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <>
      <Hero />
      <Ticker />
      <About />
      <Skills />
      <Projects />
      <UnderwaterManifesto />
      <Contact />
      <Footer />
    </>
  );
}
