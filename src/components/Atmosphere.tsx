import { useMemo } from "react";

function hexToRgb(hex: string): [number, number, number] {
  return [
    parseInt(hex.slice(1, 3), 16),
    parseInt(hex.slice(3, 5), 16),
    parseInt(hex.slice(5, 7), 16),
  ];
}

function lerpColor(a: string, b: string, t: number): string {
  const c = Math.max(0, Math.min(1, t));
  const [r1, g1, b1] = hexToRgb(a);
  const [r2, g2, b2] = hexToRgb(b);
  return `rgb(${Math.round(r1 + (r2 - r1) * c)},${Math.round(g1 + (g2 - g1) * c)},${Math.round(b1 + (b2 - b1) * c)})`;
}

function norm(v: number, lo: number, hi: number) {
  return Math.max(0, Math.min(1, (v - lo) / (hi - lo)));
}

const STARS = (() => {
  let s = 42;
  const rand = () => {
    s = (s * 1664525 + 1013904223) & 0xffffffff;
    return (s >>> 0) / 0xffffffff;
  };
  return Array.from({ length: 260 }, () => ({
    x: rand() * 100,
    y: rand() * 60,
    r: rand() * 1.1 + 0.3,
    op: rand() * 0.5 + 0.15,
  }));
})();

export default function Atmosphere({ p }: { p: number }) {
  const bg = useMemo(() => {
    if (p < 0.35) {
      const t = norm(p, 0, 0.35);
      const top = lerpColor("#0f2d4a", "#0c1929", t);
      const bot = lerpColor("#152d4a", "#0a1e32", t);
      return `linear-gradient(180deg, ${top} 0%, ${bot} 100%)`;
    }
    if (p < 0.55) {
      const t = norm(p, 0.35, 0.55);
      const top = lerpColor("#0c1929", "#060f1c", t);
      const bot = lerpColor("#0a1e32", "#060f1c", t);
      return `linear-gradient(180deg, ${top} 0%, ${bot} 100%)`;
    }
    return lerpColor("#060f1c", "#010308", norm(p, 0.55, 1));
  }, [p]);

  const starsOp = norm(1 - norm(p, 0.28, 0.52), 0, 1);
  const causticOp = Math.sin(norm(p, 0.40, 0.68) * Math.PI) * 0.13;
  const moonOp = (1 - norm(p, 0, 0.4)) * 0.55;

  return (
    <>
      <div style={{ position: "fixed", inset: 0, zIndex: -30, background: bg }} />

      {moonOp > 0.01 && (
        <div
          style={{
            position: "fixed", inset: 0, zIndex: -29, pointerEvents: "none",
            opacity: moonOp,
            background: "radial-gradient(ellipse 55% 30% at 65% -2%, rgba(140,190,255,0.22) 0%, transparent 100%)",
          }}
        />
      )}

      <div
        style={{
          position: "fixed", inset: 0, zIndex: -28, pointerEvents: "none",
          opacity: starsOp, transition: "opacity 0.8s ease",
        }}
      >
        <svg width="100%" height="100%" style={{ position: "absolute", inset: 0 }}>
          {STARS.map((s, i) => (
            <circle key={i} cx={`${s.x}%`} cy={`${s.y}%`} r={s.r} fill={`rgba(210,230,255,${s.op})`} />
          ))}
        </svg>
      </div>

      {causticOp > 0.005 && (
        <div style={{ position: "fixed", inset: 0, zIndex: -27, pointerEvents: "none", opacity: causticOp }}>
          <svg width="100%" height="100%" style={{ position: "absolute", inset: 0 }} preserveAspectRatio="none">
            <defs>
              <linearGradient id="cr1" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="rgba(90,160,255,0.35)" />
                <stop offset="100%" stopColor="rgba(90,160,255,0)" />
              </linearGradient>
            </defs>
            {[
              { x: "13%", w: "3%", h: "60%", sk: -7 },
              { x: "29%", w: "2%", h: "50%", sk: -3 },
              { x: "44%", w: "4%", h: "65%", sk: 4 },
              { x: "60%", w: "2.5%", h: "55%", sk: 6 },
              { x: "74%", w: "3%", h: "58%", sk: -5 },
              { x: "87%", w: "2%", h: "44%", sk: 9 },
            ].map((r, i) => (
              <rect key={i} x={r.x} y="0" width={r.w} height={r.h} fill="url(#cr1)"
                style={{ transformOrigin: `${r.x} 0`, transform: `skewX(${r.sk}deg)` }} />
            ))}
          </svg>
        </div>
      )}
    </>
  );
}
