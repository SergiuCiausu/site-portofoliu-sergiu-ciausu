import FadeInOnScroll from '@/app/components/FadeInOnScroll'
import React from 'react'
import "./cv.css";
import Link from 'next/link';
import { bodyW } from '@/app/variables/variables';
import Heading from './Heading';
import "@/app/landing-page-components/despre-mine.css"

const DespreMine = () => {
  return (
    <FadeInOnScroll>
        <section
            className={`${bodyW}`}>
            <Heading text="Despre mine" />
            <Link href="/" className="cv-big-link">Acesta este portofoliul meu de web + graphic design.</Link>
            <p
                className="flex flex-col gap-8 despre-mine-text mt-6">
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
        </section>
    </FadeInOnScroll>
  )
}

export default DespreMine