import { useRef } from "react";
import { motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowDownRight, MessageCircle } from "lucide-react";
import { SprayCanvas } from "./SprayCanvas";
import { waLink } from "@/data";

const D = 2.0;
const LINES = ["Corte de rua.", "Régua de santo."];

export const Hero = () => {
  const ref = useRef(null);
  const mx = useMotionValue(0), my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [12, -12]), { stiffness: 80, damping: 15 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-16, 16]), { stiffness: 80, damping: 15 });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const logoY = useTransform(scrollYProgress, [0, 1], [0, 220]);
  const logoScale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const bgX = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"]);

  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
    mx.set(x - 0.5); my.set(y - 0.5);
    ref.current.style.setProperty("--mx", `${x * 100}%`);
    ref.current.style.setProperty("--my", `${y * 100}%`);
  };

  return (
    <section id="top" ref={ref} onPointerMove={onMove} data-testid="hero-section"
      className="hero-spot relative min-h-[100svh] overflow-hidden flex flex-col justify-end pt-24 pb-10 px-4 sm:px-8 lg:px-16">
      <motion.div style={{ x: bgX }} aria-hidden
        className="absolute top-[18%] left-0 whitespace-nowrap font-display font-black uppercase outline-text text-[38vw] leading-none select-none">
        Santos Santos
      </motion.div>
      <SprayCanvas />

      <div className="absolute inset-x-0 top-20 sm:top-12 bottom-[38%] sm:bottom-[30%] flex items-center justify-center [perspective:1200px]">
        <motion.div style={{ rotateX: rx, rotateY: ry, y: logoY, scale: logoScale }}
          className="relative w-[92vw] max-w-[640px] [transform-style:preserve-3d]">
          <motion.img
            src="/img/logo-t.png" alt="Logo Santos Barber" data-testid="hero-logo"
            className="w-full drop-shadow-[0_0_40px_rgba(255,255,255,0.18)]"
            initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ delay: D - 0.5, duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          />
          <span className="drip left-[25%] top-[60%] h-16" style={{ animationDelay: "0.4s" }} />
          <span className="drip left-[71%] top-[60%] h-24" style={{ animationDelay: "1.6s" }} />
        </motion.div>
      </div>

      <div className="relative z-10 grid gap-8 lg:grid-cols-12 items-end">
        <h1 data-testid="hero-title" className="lg:col-span-7 font-display font-black uppercase leading-[0.95] sm:leading-[0.85] text-5xl sm:text-7xl lg:text-8xl">
          {LINES.map((l, i) => (
            <span key={l} className="block overflow-hidden pt-[0.3em] -mt-[0.3em]">
              <motion.span className="block"
                initial={{ y: "110%" }} animate={{ y: "0%" }}
                transition={{ delay: D + 0.2 + i * 0.14, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}>
                {i === 1 ? <span className="chrome-text inline-block">{l}</span> : l}
              </motion.span>
            </span>
          ))}
        </h1>
        <motion.div className="lg:col-span-5 lg:justify-self-end max-w-md"
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: D + 0.6, duration: 0.9 }}>
          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
            Degradê, navalhado e barba feitos com estilo de quem nasceu na rua. Chega mais, senta na cadeira e sai outro.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <motion.a href={waLink()} target="_blank" rel="noreferrer" data-testid="hero-whatsapp-btn"
              whileHover={{ scale: 1.05, rotate: -1.5 }} whileTap={{ scale: 0.96 }}
              className="inline-flex items-center gap-2 rounded-full bg-spray text-white px-6 py-3 font-semibold shadow-[0_0_30px_rgba(255,42,95,0.45)]">
              <MessageCircle size={18} /> Chamar no WhatsApp
            </motion.a>
            <span className="font-mono2 text-xs uppercase tracking-[0.25em] text-zinc-400 flex items-center gap-2">
              Seg–Sex · 08h–19h <ArrowDownRight size={14} />
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
