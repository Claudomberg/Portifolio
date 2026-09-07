import { useEffect, useRef } from "react";

export default function SnowCanvas({ opacity }: { opacity: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();

    const COUNT = Math.floor((canvas.width * canvas.height) / 5500);

    type Flake = {
      x: number;
      y: number;
      r: number;
      speed: number;
      drift: number;
      angle: number;
    };

    const flakes: Flake[] = Array.from({ length: COUNT }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 2.4 + 0.6,
      speed: Math.random() * 0.8 + 0.3,
      drift: Math.random() * 0.5 - 0.25,
      angle: Math.random() * Math.PI * 2,
    }));

    let running = true;

    function loop() {
      if (!running || !ctx) return;
      ctx.clearRect(0, 0, canvas!.width, canvas!.height);
      ctx.fillStyle = "rgba(230, 242, 255, 0.92)";
      ctx.beginPath();
      for (const f of flakes) {
        ctx.moveTo(f.x, f.y);
        ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
        f.y += f.speed;
        f.x += Math.sin(f.angle) * f.drift;
        f.angle += 0.005;
        if (f.y > canvas!.height + 4) {
          f.y = -4;
          f.x = Math.random() * canvas!.width;
        }
        if (f.x > canvas!.width + 4) f.x = -4;
        else if (f.x < -4) f.x = canvas!.width + 4;
      }
      ctx.fill();
      requestAnimationFrame(loop);
    }

    loop();
    window.addEventListener("resize", resize);

    return () => {
      running = false;
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 9999,
        opacity,
        transition: "opacity 1.5s ease",
      }}
    />
  );
}
