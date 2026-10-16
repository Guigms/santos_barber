import { useEffect, useRef } from "react";

export const SprayCanvas = () => {
  const ref = useRef(null);

  useEffect(() => {
    const c = ref.current;
    const ctx = c.getContext("2d");
    let w, h, id;
    const dots = [];
    const specks = Array.from({ length: 70 }, () => ({ x: Math.random(), y: Math.random(), r: Math.random() * 1.6 + 0.3, v: Math.random() * 0.0006 + 0.0002 }));
    const resize = () => { w = c.width = c.offsetWidth; h = c.height = c.offsetHeight; };
    const onMove = (e) => {
      const r = c.getBoundingClientRect();
      const x = e.clientX - r.left, y = e.clientY - r.top;
      for (let i = 0; i < 14; i++) {
        const a = Math.random() * Math.PI * 2, d = Math.random() * 22;
        dots.push({ x: x + Math.cos(a) * d, y: y + Math.sin(a) * d, r: Math.random() * 1.8 + 0.4, life: 1 });
      }
      if (dots.length > 1400) dots.splice(0, dots.length - 1400);
    };
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      specks.forEach((s) => {
        s.y -= s.v; if (s.y < 0) s.y = 1;
        ctx.fillStyle = "rgba(232,235,240,0.35)";
        ctx.beginPath(); ctx.arc(s.x * w, s.y * h, s.r, 0, 7); ctx.fill();
      });
      for (let i = dots.length - 1; i >= 0; i--) {
        const p = dots[i];
        p.life -= 0.008; p.y += 0.15;
        if (p.life <= 0) { dots.splice(i, 1); continue; }
        ctx.fillStyle = `rgba(255,42,95,${p.life * 0.8})`;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, 7); ctx.fill();
      }
      id = requestAnimationFrame(draw);
    };
    resize();
    draw();
    window.addEventListener("resize", resize);
    c.parentElement.addEventListener("pointermove", onMove);
    const parent = c.parentElement;
    return () => {
      cancelAnimationFrame(id);
      window.removeEventListener("resize", resize);
      parent.removeEventListener("pointermove", onMove);
    };
  }, []);

  return <canvas ref={ref} aria-hidden className="absolute inset-0 w-full h-full pointer-events-none" />;
};
