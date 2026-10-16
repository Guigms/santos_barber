import { MapPin, Navigation } from "lucide-react";
import { ADDRESS, MAP_QUERY } from "@/data";
import { Eyebrow, MaskLines, Reveal } from "./Reveal";

const q = encodeURIComponent(MAP_QUERY);

export const Location = () => (
  <section id="local" data-testid="location-section" className="px-4 sm:px-8 lg:px-16 py-20 sm:py-32 bg-[var(--card)]">
    <div className="grid gap-10 lg:grid-cols-12 items-stretch">
      <div className="lg:col-span-4 flex flex-col justify-between gap-10">
        <div>
          <Eyebrow testId="location-eyebrow">Onde a mágica acontece</Eyebrow>
          <h2 className="mt-5 font-display font-black uppercase text-5xl sm:text-7xl leading-[0.9]">
            <MaskLines lines={["Cola", "na base."]} />
          </h2>
        </div>
        <Reveal>
          <p data-testid="location-address" className="flex items-start gap-3 text-xl sm:text-2xl text-white">
            <MapPin className="text-spray mt-1 shrink-0" /> {ADDRESS}
          </p>
          <a href={`https://www.google.com/maps/dir/?api=1&destination=${q}`} target="_blank" rel="noreferrer"
            data-testid="location-directions-btn"
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold hover:bg-white hover:text-black transition-colors">
            <Navigation size={16} /> Traçar rota
          </a>
        </Reveal>
      </div>
      <Reveal className="lg:col-span-8" delay={0.15}>
        <div className="relative h-[360px] sm:h-[480px] overflow-hidden clip-slant border border-white/10">
          <iframe title="Mapa Santos Barber" data-testid="location-map"
            src={`https://www.google.com/maps?q=${q}&output=embed`}
            className="map-dark h-full w-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          <span className="pointer-events-none absolute top-5 left-5 tape font-tag px-3 py-1">Santos tá aqui</span>
        </div>
      </Reveal>
    </div>
  </section>
);
