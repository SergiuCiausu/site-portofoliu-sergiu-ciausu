"use client";

import "@/app/globals.css"
import Hero from "./landing-page-components/Hero";
import Anchor from "./components/Anchor";
import FadeInOnLoad from "./components/FadeInOnLoad";
import Proiecte from "./landing-page-components/Proiecte";
import FadeInOnScroll from "./components/FadeInOnScroll";
import AbilitatiTehnice from "./landing-page-components/AbilitatiTehnice";
import ExperienteAnterioare from "./landing-page-components/ExperienteAnterioare";
import DespreMine from "./landing-page-components/DespreMine";

export default function Home() {
  return (
    <div>
      <Hero elementId="proiecte"/>
      <FadeInOnLoad>
        <Anchor text="main" />
        <Proiecte />
      </FadeInOnLoad>
      <FadeInOnScroll>
        <Anchor text="main" type="end"/>
      </FadeInOnScroll>
      <AbilitatiTehnice />
      <ExperienteAnterioare />
      <DespreMine />
    </div>
  );
}
