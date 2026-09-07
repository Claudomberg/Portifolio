import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const isHome = location.pathname === "/";

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={
        scrolled
          ? { background: "rgba(8,18,30,0.65)", backdropFilter: "blur(16px)", borderBottom: "1px solid rgba(100,160,255,0.07)" }
          : {}
      }
    >
      <div className="max-w-[1400px] mx-auto px-8 md:px-12 flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="font-display text-lg tracking-[0.15em] text-[#d8eaf8] font-light select-none">
          GELIDO
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {isHome ? (
            ["Sobre", "Stacks", "Projetos", "Contato"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="frost-link text-[#8ab8d8] text-xs tracking-[0.2em] uppercase font-medium opacity-80 hover:opacity-100 transition-opacity"
              >
                {item}
              </a>
            ))
          ) : (
            <Link to="/" className="frost-link text-[#8ab8d8] text-xs tracking-[0.2em] uppercase font-medium opacity-80 hover:opacity-100 transition-opacity">
              ← Voltar
            </Link>
          )}
        </div>

        <button className="md:hidden flex flex-col gap-1.5 p-2" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <span className={`block w-6 h-px bg-[#8ab8d8] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-px bg-[#8ab8d8] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-px bg-[#8ab8d8] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden px-8 pb-6 pt-4 flex flex-col gap-4"
          style={{ background: "rgba(8,18,30,0.9)", backdropFilter: "blur(16px)" }}>
          {isHome
            ? ["Sobre", "Stacks", "Projetos", "Contato"].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-[#8ab8d8] text-xs tracking-[0.2em] uppercase font-medium">
                  {item}
                </a>
              ))
            : (
                <Link to="/" className="text-[#8ab8d8] text-xs tracking-[0.2em] uppercase font-medium">← Voltar</Link>
              )}
        </div>
      )}
    </nav>
  );
}
