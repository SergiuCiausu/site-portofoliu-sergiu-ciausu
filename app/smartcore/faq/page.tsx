"use client";

import Navbar from "../components/Navbar";
import { useState } from "react";
import Image from 'next/image'

export default function Home() {

    const [intrebareActiva, setIntrebareActiva] = useState<number>(-1);

    const cursuri = [
        {
            intrebare: "Ce beneficii concrete voi obține în urma acestui curs și cum îmi va influența viața de zi cu zi?",
            raspuns: "Vei învăța să-ți organizezi obiectivele și sarcinile într-un mod care face ca atingerea lor să se simtă ca un joc, nu ca o corvoadă. Vei avea o rutină zilnică clară, vei ști cum să te motivezi chiar și în cele mai obositoare zile, iar rezultatul va fi o viață mai organizată, mai productivă și cu mai puțin stres. Pe scurt: mai multă energie, claritate și control asupra propriei vieți.",
        },
        {
            intrebare: "Este acest curs potrivit pentru mine dacă nu am mai participat la cursuri de dezvoltare personală?",
            raspuns: "Da, absolut. Cursul este gândit tocmai pentru oamenii care vor să înceapă o schimbare reală, dar nu știu de unde să pornească. Totul este explicat pas cu pas: de la cum să-ți creezi o rutină de dimineață care îți dă energie, până la cum să-ți schimbi mentalitatea legată de muncă pentru a da randament cu un efort mai mic. Este ușor de urmat, indiferent de experiență.",
        },
        {
            intrebare: "Ce metodă folosiți pentru a ajuta la schimbarea mentalității și cât de eficientă este?",
            raspuns: "Folosim tehnici mentale validate de cei mai performanți antreprenori și angajați din lume, pentru a te ajuta să accesezi cele mai adânci resurse de motivație, concentrare și energie. În plus, înveți cum să îți creezi modele mentale care funcționează chiar și în lipsa motivației. Practic, devii capabil să acționezi chiar și atunci când „nu ai chef”, iar asta schimbă complet jocul.",
        },
        {
            intrebare: "Cât durează până încep să văd rezultate în viața mea personală sau profesională?",
            raspuns: "Primele rezultate apar chiar din primele săptămâni, când începi să aplici rutina zilnică și strategiile de organizare. Pe măsură ce transformi sarcinile în „misiuni” ușor de parcurs și introduci pauze reale de relaxare, vei observa o creștere a energiei, clarității și motivației. Cu cât aplici mai consecvent, cu atât schimbările devin mai vizibile și de durată.",
        },
        {
            intrebare: "Ce se întâmplă dacă simt că nu progresez sau dacă nu sunt mulțumit de curs?",
            raspuns: "Cursul include suport pentru a te ajuta să te întorci pe traseu atunci când simți că pierzi motivația. În plus, vei învăța cum să muncești eficient chiar și fără motivație — ceea ce înseamnă că vei avea uneltele potrivite pentru a merge mai departe în orice context. Dacă totuși simți că nu progresezi, ai opțiunea de feedback personalizat sau, în anumite cazuri, o garanție de returnare.",
        },
    ]

  return (
    <div>
      <Navbar />
      <h1 className="w-[1120px] mx-auto mt-16 mb-8">Întrebări adresate frecvent</h1>
      <div
        className="w-[1120px] mx-auto flex flex-col gap-8 mb-16">
        {cursuri.map((curs, index) => (
            <div
                key={index}
                className="card-shadow p-8 flex flex-col gap-8" style={{ borderRadius: "16px" }}>
                    <div
                        className="flex gap-4 cursor-pointer"  onClick={() => setIntrebareActiva(intrebareActiva === index ? -1 : index)}>
                        <Image src={`/dropdown-icon-${intrebareActiva === index ? "opened": "closed"}.png`} width={24} height={14} alt="dropdown icon" style={{ objectFit: "contain" }}></Image>
                        <p
                            className="font-bold select-none">
                            {curs.intrebare}
                        </p>
                    </div>
                    
                    {intrebareActiva === index
                    ?
                        <p>
                            {curs.raspuns}
                        </p>
                    : ""}
            </div>
        ))}
      </div>
    </div>
  );
}
