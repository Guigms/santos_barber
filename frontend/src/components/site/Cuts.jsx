import { motion } from "framer-motion";
import { CUTS } from "@/data";
import { Eyebrow, MaskLines } from "./Reveal";

const SPANS = [
  "md:col-span-5 md:row-span-2",
  "md:col-span-4",
  "md:col-span-3",
  "md:col-span-7",
  "md:col-span-7",
  "md:col-span-5",
];
const ORDER = [2, 0, 1, 3, 4, 5];

const Tile = ({ cut, span, i }) => (
  <motion.figure
    data-testid={`cut-card-${cut.id}`}
    className={`group relative ${span}`}
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.1 }}
    transition={{ duration: 1, delay: (i % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
  >
    <div className="clip-slant relative h-full w-full overflow-hidden bg-[var(--card)]">
      <img src={cut.img} alt={cut.name} loading="lazy"
        className="h-full w-full object-cover grayscale contrast-125 brightness-75 scale-105 transition-[transform,filter] duration-700 ease-out group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-110" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
      <figcaption className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-3">
        <span className="font-display font-extrabold uppercase text-2xl sm:text-3xl leading-none">{cut.name}</span>
        <span className="tape font-tag text-sm px-2 py-0.5 whitespace-nowrap">{cut.tag}</span>
      </figcaption>
      <span className="absolute top-4 left-5 font-mono2 text-xs text-zinc-300">0{i + 1}</span>
    </div>
  </motion.figure>
);

export const Cuts = () => (
  <section id="cortes" data-testid="cuts-section" className="px-4 sm:px-8 lg:px-16 py-20 sm:py-32">
    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 sm:mb-16">
      <div>
        <Eyebrow testId="cuts-eyebrow">Galeria · Os cortes</Eyebrow>
        <h2 className="mt-5 font-display font-black uppercase text-5xl sm:text-7xl leading-[0.9]">
          <MaskLines lines={["Feito na", "navalha."]} lastClass="text-spray" />
        </h2>
      </div>
      <p className="max-w-sm text-zinc-400 text-sm sm:text-base">
        Passa o mouse e vê a cor voltar. Cada corte é assinado como um tag no muro.
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-12 auto-rows-[340px] md:auto-rows-[260px] gap-4 sm:gap-6">
      {ORDER.map((idx, i) => <Tile key={CUTS[idx].id} cut={CUTS[idx]} span={SPANS[i]} i={i} />)}
    </div>
  </section>
);
