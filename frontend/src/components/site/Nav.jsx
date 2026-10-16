import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { waLink } from "@/data";

const LINKS = [["#cortes", "Cortes"], ["#precos", "Preços"], ["#horario", "Horário"], ["#local", "Local"]];

export const goTo = (e, hash) => {
  e.preventDefault();
  const el = document.querySelector(hash);
  if (window.__lenis) window.__lenis.scrollTo(el, { offset: -70 });
  else el?.scrollIntoView({ behavior: "smooth" });
};

export const Nav = () => (
  <motion.header
    data-testid="site-nav"
    className="fixed top-0 inset-x-0 z-50 bg-black/60 backdrop-blur-xl border-b border-white/10"
    initial={{ y: -80 }}
    animate={{ y: 0 }}
    transition={{ delay: 2.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
  >
    <div className="flex items-center justify-between px-4 sm:px-8 lg:px-16 h-16">
      <a href="#top" onClick={(e) => goTo(e, "#top")} data-testid="nav-logo" className="flex items-center">
        <img src="/img/logo-t.png" alt="Santos Barber" className="h-10 w-auto" />
      </a>
      <nav className="hidden md:flex gap-10">
        {LINKS.map(([h, l]) => (
          <a key={h} href={h} onClick={(e) => goTo(e, h)} data-testid={`nav-link-${l.toLowerCase()}`}
            className="group relative font-mono2 text-xs uppercase tracking-[0.25em] text-zinc-300 hover:text-white transition-colors">
            {l}
            <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-spray transition-[width] duration-300 group-hover:w-full" />
          </a>
        ))}
      </nav>
      <a href={waLink()} target="_blank" rel="noreferrer" data-testid="nav-whatsapp-btn"
        className="inline-flex items-center gap-2 rounded-full bg-white text-black px-4 sm:px-5 py-2 text-sm font-semibold hover:bg-[var(--spray)] transition-colors">
        <MessageCircle size={16} /> Agendar
      </a>
    </div>
  </motion.header>
);
