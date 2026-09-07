import { useState, useEffect, useRef } from "react";
import { RouterProvider } from "react-router";
import { router } from "./routes";
import Atmosphere from "./components/Atmosphere";
import SnowCanvas from "./components/SnowCanvas";

function clamp(v: number, lo = 0, hi = 1) {
  return Math.max(lo, Math.min(hi, v));
}

function norm(v: number, lo: number, hi: number) {
  return clamp((v - lo) / (hi - lo));
}

function useScrollProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    let raf = 0;
    const tick = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setP(max > 0 ? window.scrollY / max : 0);
      raf = 0;
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(tick); };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { window.removeEventListener("scroll", onScroll); if (raf) cancelAnimationFrame(raf); };
  }, []);
  return p;
}

// Cursor glow — only appears after halfway through the page
function CursorGlow({ p }: { p: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const move = (e: MouseEvent) => { el.style.left = e.clientX + "px"; el.style.top = e.clientY + "px"; };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);
  const glowOpacity = clamp(norm(p, 0.50, 0.68));
  return (
    <div
      ref={ref}
      style={{
        position: "fixed",
        width: 380,
        height: 380,
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(80,150,255,0.11) 0%, rgba(40,100,220,0.05) 45%, transparent 70%)",
        transform: "translate(-50%, -50%)",
        opacity: glowOpacity,
        transition: "opacity 1.8s ease",
        pointerEvents: "none",
        zIndex: 9998,
      }}
    />
  );
}

// Surface waterline crossing indicator
function SurfaceBreak({ p }: { p: number }) {
  const op = Math.sin(norm(p, 0.33, 0.60) * Math.PI) * 0.55;
  if (op < 0.02) return null;
  return (
    <div style={{ position: "fixed", top: "50%", left: 0, right: 0, transform: "translateY(-50%)", pointerEvents: "none", zIndex: 9997, opacity: op }}>
      <div style={{ width: "100%", height: 1, background: "linear-gradient(90deg, transparent 0%, rgba(80,150,255,0.35) 30%, rgba(120,190,255,0.45) 50%, rgba(80,150,255,0.35) 70%, transparent 100%)" }} />
      <div style={{ textAlign: "center", marginTop: 10 }}>
        <span style={{ color: "rgba(140,190,255,0.5)", fontSize: 10, letterSpacing: "0.4em", textTransform: "uppercase", fontFamily: "Inter, sans-serif" }}>— surface —</span>
      </div>
    </div>
  );
}

// Depth meter
function DepthIndicator({ p }: { p: number }) {
  const depth = Math.round(norm(p, 0.5, 1) * 3800);
  const op = clamp(norm(p, 0.52, 0.64)) * 0.5;
  if (depth < 10) return null;
  return (
    <div style={{ position: "fixed", bottom: 32, right: 32, zIndex: 9997, display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 4, pointerEvents: "none", opacity: op }}>
      <span style={{ color: "#3b7aa8", fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase" }}>Depth</span>
      <span style={{ fontFamily: "Fraunces, Georgia, serif", color: "#4a7aaa", fontSize: "1.1rem", fontWeight: 300 }}>{depth.toLocaleString()} m</span>
    </div>
  );
}

export default function App() {
  const p = useScrollProgress();
  // Snow fully visible at top, fades as you cross the waterline
  const snowOpacity = clamp(1 - norm(p, 0.38, 0.62));

  return (
    <>
      {/* Fixed atmospheric layers */}
      <Atmosphere p={p} />

      {/* Snow — fixed, very high z-index to guarantee visibility */}
      <SnowCanvas opacity={snowOpacity} />

      {/* Cursor glow — only in the deep */}
      <CursorGlow p={p} />

      {/* Surface crossing line */}
      <SurfaceBreak p={p} />

      {/* Depth indicator */}
      <DepthIndicator p={p} />

      {/* Routed pages */}
      <RouterProvider router={router} />
    </>
  );
}
