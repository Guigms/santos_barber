import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import "@/App.css";
import { Nav } from "@/components/site/Nav";
import { Intro } from "@/components/site/Intro";
import { Hero } from "@/components/site/Hero";
import { Marquee } from "@/components/site/Marquee";
import { Cuts } from "@/components/site/Cuts";
import { Menu } from "@/components/site/Menu";
import { Hours } from "@/components/site/Hours";
import { Location } from "@/components/site/Location";
import { FinalCta } from "@/components/site/FinalCta";
import { WhatsFab } from "@/components/site/WhatsFab";

function App() {
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.085, smoothWheel: true });
    window.__lenis = lenis;
    let id;
    const raf = (t) => { lenis.raf(t); id = requestAnimationFrame(raf); };
    id = requestAnimationFrame(raf);
    return () => { cancelAnimationFrame(id); lenis.destroy(); };
  }, []);

  return (
    <div className="sb-root" data-testid="santos-site">
      <div className="grain" aria-hidden />
      <Intro />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Cuts />
        <Menu />
        <Hours />
        <Location />
        <FinalCta />
      </main>
      <WhatsFab />
    </div>
  );
}

export default App;
