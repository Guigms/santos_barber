import { useState } from "react";
import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SERVICES, waLink } from "@/data";
import { Eyebrow, MaskLines } from "./Reveal";

const Row = ({ s, i, onEnter }) => (
  <motion.a
    href={waLink(s.msg ?? `Salve! Quero agendar: ${s.name}`)} target="_blank" rel="noreferrer"
    data-testid={`service-row-${s.id}`}
    onMouseEnter={() => onEnter(s.img)}
    className="group relative flex items-center gap-4 sm:gap-8 border-b border-white/10 py-6 sm:py-8 overflow-hidden"
    initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.8, delay: i * 0.06 }}
  >
    <span className="absolute inset-0 bg-white origin-bottom scale-y-0 transition-transform duration-500 ease-out group-hover:scale-y-100" />
    <img src={s.img} alt="" className="relative md:hidden h-14 w-14 object-cover grayscale" />
    <span className="relative font-mono2 text-xs text-zinc-400 group-hover:text-black w-8 hidden sm:block">0{i + 1}</span>
    <span className="relative flex-1 font-display font-extrabold uppercase text-2xl sm:text-5xl group-hover:text-black transition-colors duration-300">
      {s.name}
      <span className="block sm:inline sm:ml-4 font-mono2 text-xs normal-case tracking-normal font-normal text-zinc-400 group-hover:text-zinc-700">{s.time}</span>
    </span>
    <span data-testid={`service-price-${s.id}`} className={`relative font-display font-black text-spray group-hover:text-black transition-colors text-right ${s.quote ? "text-lg sm:text-3xl leading-none" : "text-2xl sm:text-4xl"}`}>
      {s.quote && <span className="block font-mono2 font-normal text-[11px] sm:text-xs tracking-normal text-zinc-400 group-hover:text-zinc-700">sob</span>}
      {s.price}
    </span>
    <ArrowUpRight className="relative hidden sm:block text-zinc-400 group-hover:text-black group-hover:rotate-45 transition-transform duration-300" />
  </motion.a>
);

export const Menu = () => {
  const [img, setImg] = useState(null);
  const x = useSpring(useMotionValue(0), { stiffness: 150, damping: 20 });
  const y = useSpring(useMotionValue(0), { stiffness: 150, damping: 20 });
  const onMove = (e) => { x.set(e.clientX + 30); y.set(e.clientY - 120); };

  return (
    <section id="precos" data-testid="menu-section" onMouseMove={onMove} onMouseLeave={() => setImg(null)}
      className="relative px-4 sm:px-8 lg:px-16 py-20 sm:py-32 bg-[var(--card)]">
      <Eyebrow testId="menu-eyebrow">Tabela · Serviços</Eyebrow>
      <h2 className="mt-5 mb-12 font-display font-black uppercase text-5xl sm:text-7xl leading-[0.9]">
        <MaskLines lines={["Escolhe", "o teu."]} />
      </h2>
      <div className="border-t border-white/10">
        {SERVICES.map((s, i) => <Row key={s.id} s={s} i={i} onEnter={setImg} />)}
      </div>
      <p className="mt-8 font-tag text-zinc-400 text-lg -rotate-1">* clica no serviço e agenda direto no zap · corte a domicílio: orçamento direto com o barbeiro</p>
      <AnimatePresence>
        {img && (
          <motion.img key={img} src={img} alt="" aria-hidden style={{ x, y }}
            className="pointer-events-none fixed left-0 top-0 z-40 hidden md:block h-60 w-48 object-cover clip-slant"
            initial={{ opacity: 0, scale: 0.7, rotate: -8 }} animate={{ opacity: 1, scale: 1, rotate: -4 }}
            exit={{ opacity: 0, scale: 0.8 }} transition={{ duration: 0.3 }} />
        )}
      </AnimatePresence>
    </section>
  );
};
