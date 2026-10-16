const WORDS = ["Degradê", "Navalhado", "Barba", "Pigmentação", "Régua", "Freestyle", "Social", "Sobrancelha"];

const Row = ({ rev, testId, className }) => (
  <div className={`overflow-hidden py-4 ${className}`} data-testid={testId}>
    <div className={`marquee-track ${rev ? "rev" : ""}`}>
      {[...WORDS, ...WORDS, ...WORDS, ...WORDS].map((w, i) => (
        <span key={i} className="flex items-center gap-8 pr-8 font-display font-black uppercase text-4xl sm:text-6xl whitespace-nowrap">
          {w}
          <span className="font-tag text-spray text-3xl sm:text-4xl">✕</span>
        </span>
      ))}
    </div>
  </div>
);

export const Marquee = () => (
  <section className="relative py-10 sm:py-16" aria-label="Serviços">
    <Row testId="marquee-row-1" className="bg-white text-black -rotate-2 scale-105" />
    <Row rev testId="marquee-row-2" className="text-zinc-300 rotate-1 scale-105 border-y border-white/10 -mt-2" />
  </section>
);
