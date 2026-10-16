import { motion } from "framer-motion";
import { WEEK } from "@/data";
import { Eyebrow, MaskLines } from "./Reveal";

const nowInShop = () => {
  const p = new Intl.DateTimeFormat("en-US", { timeZone: "America/Fortaleza", weekday: "short", hour: "numeric", minute: "numeric", hour12: false }).formatToParts(new Date());
  const get = (t) => p.find((x) => x.type === t)?.value;
  const idx = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].indexOf(get("weekday"));
  const mins = (Number(get("hour")) % 24) * 60 + Number(get("minute"));
  return { idx, open: idx >= 0 && idx < 5 && mins >= 480 && mins < 1140 };
};

export const Hours = () => {
  const { idx, open } = nowInShop();
  return (
    <section id="horario" data-testid="hours-section" className="relative px-4 sm:px-8 lg:px-16 py-20 sm:py-32 overflow-hidden">
      <div aria-hidden className="absolute -right-10 top-10 font-display font-black outline-text text-[30vw] leading-none select-none">08–19</div>
      <div className="relative grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Eyebrow testId="hours-eyebrow">Horário de funcionamento</Eyebrow>
          <h2 className="mt-5 font-display font-black uppercase text-5xl sm:text-7xl leading-[0.9]">
            <MaskLines lines={["Segunda", "a sexta."]} />
          </h2>
          <p className="mt-6 font-display font-black text-6xl sm:text-8xl chrome-text">08h — 19h</p>
          <div data-testid="hours-status" className={`mt-8 inline-flex items-center gap-3 rounded-full border px-5 py-2 font-mono2 text-xs uppercase tracking-[0.2em] ${open ? "border-emerald-400/50 text-emerald-300" : "border-white/20 text-zinc-300"}`}>
            <span className={`live-dot h-2 w-2 rounded-full ${open ? "bg-emerald-400" : "bg-spray"}`} />
            {open ? "Aberto agora" : "Fechado agora"}
          </div>
        </div>
        <ul className="lg:col-span-6 lg:col-start-7 self-end">
          {WEEK.map((w, i) => (
            <motion.li key={w.d} data-testid={`hours-day-${i}`}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }} transition={{ delay: i * 0.06, duration: 0.6 }}
              className={`flex items-center justify-between border-b border-white/10 py-4 ${i === idx ? "text-white" : "text-zinc-400"}`}>
              <span className="font-display font-extrabold uppercase text-2xl sm:text-3xl flex items-center gap-3">
                {w.d}
                {i === idx && <span className="tape font-tag text-xs px-2 py-0.5">hoje</span>}
              </span>
              <span className={`font-mono2 text-sm ${w.open ? "" : "line-through decoration-[var(--spray)] decoration-2"}`}>
                {w.open ? "08:00 – 19:00" : "Fechado"}
              </span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};
