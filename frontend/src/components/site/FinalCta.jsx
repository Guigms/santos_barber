import { useRef } from "react";
import { motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { ADDRESS, WA_DISPLAY, waLink } from "@/data";
import { MaskLines } from "./Reveal";

const Magnetic = ({ children }) => {
  const x = useSpring(useMotionValue(0), { stiffness: 200, damping: 15 });
  const y = useSpring(useMotionValue(0), { stiffness: 200, damping: 15 });
  const move = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - r.left - r.width / 2) * 0.35);
    y.set((e.clientY - r.top - r.height / 2) * 0.35);
  };
  return (
    <motion.div style={{ x, y }} onMouseMove={move} onMouseLeave={() => { x.set(0); y.set(0); }} className="inline-block">
      {children}
    </motion.div>
  );
};

export const FinalCta = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <section ref={ref} data-testid="final-cta-section" className="relative overflow-hidden">
      <motion.img src="/img/neon.jpg" alt="" aria-hidden style={{ y: bgY }}
        className="absolute inset-0 h-[130%] w-full object-cover opacity-35 grayscale-[30%]" />
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--ink)] via-black/60 to-[var(--ink)]" />
      <div className="relative px-4 sm:px-8 lg:px-16 py-28 sm:py-40 text-left">
        <p className="font-tag text-spray text-2xl sm:text-3xl -rotate-2">bora?</p>
        <h2 className="mt-4 font-display font-black uppercase text-6xl sm:text-8xl lg:text-[10rem] leading-[0.85]">
          <MaskLines lines={["Marca teu", "horário."]} lastClass="chrome-text" />
        </h2>
        <div className="mt-12 flex flex-col sm:flex-row sm:items-center gap-8">
          <Magnetic>
            <a href={waLink()} target="_blank" rel="noreferrer" data-testid="final-whatsapp-btn"
              className="inline-flex items-center gap-3 rounded-full bg-[#25d366] text-black px-8 py-5 text-lg font-semibold hover:bg-white transition-colors">
              <MessageCircle size={22} /> {WA_DISPLAY}
            </a>
          </Magnetic>
          <p className="text-zinc-300 max-w-xs text-sm">Resposta rápida pelo WhatsApp. Escolhe o corte, o dia e a hora.</p>
        </div>
      </div>
      <footer data-testid="site-footer" className="relative border-t border-white/10 px-4 sm:px-8 lg:px-16 pt-8 pb-24 sm:pb-8 flex flex-col sm:flex-row justify-between gap-3 font-mono2 text-xs uppercase tracking-[0.2em] text-zinc-400">
        <span>© {new Date().getFullYear()} Santos Barber</span>
        <span>{ADDRESS} · Seg–Sex 08h–19h</span>
      </footer>
    </section>
  );
};
