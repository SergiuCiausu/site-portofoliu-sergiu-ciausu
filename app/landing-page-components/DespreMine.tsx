import React from 'react'
import FadeInOnScroll from '../components/FadeInOnScroll'
import Anchor from '../components/Anchor'
import H3 from '../components/H3'
import "@/app/globals.css"
import "./despre-mine.css"
import { bodyW } from '../variables/variables'
import Image from "next/image"

const DespreMine = () => {
  return (
    <FadeInOnScroll>
        <section
            className="my-24">
            <Anchor text="section" />
            <H3 text="Despre mine"/>
            <div
                className={`${bodyW} flex gap-37 items-stretch`}>
                    <div
                        className="flex-50">
                        <p
                            className="flex flex-col gap-8 despre-mine-text">
                            <strong>Eu sunt Sergiu-Andrei Ciaușu, am 19 ani, iar de-a lungul vieții nu mi-a plăcut niciodată să stau degeaba.</strong> De mic am fost învățat să-mi preocup timpul cu activități care mă vor ajuta să evoluez. Am făcut fotbal 10 ani, de unde am deprins două aspecte care s-au dovedit a fi definitorii pentru caracterul meu:
                            <ul
                                className="list-disc ml-16">
                                    <li>Cât de important este sportul în viață</li>
                                    <li>Cât de în urmă erau corpul și mintea mea</li>
                            </ul>
                            <span>Deși făcusem sport toată viața, eu totuși nu eram în stare să fac o flotare corectă până jos la 15 ani. Știam că acest lucru trebuia să se schimbe urgent...</span>
                            <span><strong>Vârsta de 15 ani a fost momentul când am realizat că nu mai am timp deloc</strong>. Că dacă mai aștept și-mi pierd timpul în anii de liceu, nu voi avea nicio șansă să-mi găsesc un loc de muncă de viitor, în care să-mi pot construi o carieră.</span>
                            <span><strong>În acel an, s-au întâmplat două momente cheie:</strong></span>
                            <ul className="list-disc-ml-16">
                                <li>Am început să merg la sală de 5-6 ori/ săptămână, decizie care m-a schimbat nu doar fizic, ci și mental</li>
                                <li>Am citit cărți de dezvoltare personală, cu precădere cartea „Codul pentru o minte extraordinară” de Vishen Lakhiani, care mi-a redefinit cu totul filtrul gândirii -- sursa principală de „alarmare” în privința viitorului meu.</li>
                            </ul>
                            <span>Iar de-atunci, <strong>tot ce-am învățat și construit a fost cu gândul la a obține un loc de muncă într-un domeniu IT la 19 ani</strong>. Pe parcurs, am realizat cât de mult îmi place să construiesc site-uri web, fiind singura activitate unde am simțit că am avut nevoie de fiecare abilitate interesantă pe care am învățat-o.</span>
                        </p>
                    </div>
                <div 
                    className="flex-1 flex justify-center">
                        <div
                            className="flex flex-col">
                            <div
                                className="max-w-[622px] flex items-center mb-4">
                                <Anchor text="img"/>
                            </div>
                            <Image src="/sergiu-ciausu.png" width={1622} height={1622} alt="sergiu ciausu"></Image>
                        </div>
                </div>
            </div>
        </section>
    </FadeInOnScroll>
  )
}

export default DespreMine