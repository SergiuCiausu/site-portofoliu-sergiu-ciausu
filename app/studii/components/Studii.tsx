"use client";

import FadeInOnScroll from '@/app/components/FadeInOnScroll'
import React from 'react'
import "./studii.css"
import FadeInOnLoad from '@/app/components/FadeInOnLoad';
import Anchor from '@/app/components/Anchor';

const Studii = () => {

    const studii = [
        {
            clase: "0-IV",
            scoala: "Liceul Teoretic „Emil Racoviță” Techirghiol",
            bullets: [
                "- am fost tipul de copil care voia să-și facă temele exemplar la fiecare materie și am avut doar nota FB în toți anii de școală primară;",
                "- știam că începând cu gimnaziul trebuia să mă mut de urgență la o școală din Constanța, colectivul din Techirghiol nefiind prea... interesat de școală."
            ]
        },
        {
            clase: "V-VIII",
            scoala: "Școala Gimnazială nr.24 „Ion Jalea” Constanța",
            bullets: [
                "- și în gimnaziu am fost tipul de elev care voia să fie exemplar la fiecare materie, dovadă și faptul că am terminat șef de promoție, având media generală 10 în fiecare an de gimnaziu;",
                "- de când am ajuns clasa a V-a m-am văzut la Mircea, însă știam că gimnaziul la acea școală era mult mai dificil, așa că am decis că liceul va fi momentul oportun."
            ]
        },
        {
            clase: "IX-XII",
            scoala: "Colegiul Național „Mircea cel Bătrân” Constanța",
            bullets: [
                "- în liceu am reușit să găsesc un echilibru între a obține note bune și foarte bune și a învăța abilități de viitor de pe internet;",
                "- încă din clasa a IX-a m-am convins că viitorul meu nu poate sta în mâinile sistemului de învățământ, am înțeles că dacă vreau un viitor excepțional, trebuie să depun eforturi excepționale."
            ]
        },
        {
            clase: "Aș vrea să urmez studii universitare și de masterat la:",
            scoala: "Facultatea de Matematică și Informatică, Universitatea Ovidius Constanța",
            bullets: [
                "- dorința mea este să-mi construiesc o carieră în domeniul IT, sunt convins că m-am născut cu niște avantaje care cred că mă vor ajuta să devin un programator foarte bun;",
                "- n-am ales o facultate din alt oraș (din București, de exemplu), pentru că știu că în IT se pot deschide portițe de unde te aștepți mai puțin;",
                "- astfel, cred că dacă m-aș fi mutat la București pentru studii superioare, iar apoi aș fi fost nevoit să mă mut din nou într-un alt oraș unde mi-am găsit de muncă, părinții mei ar fi nevoiți să suporte un efort financiar dublu, față de varianta în care mă mut doar atunci când îmi găsesc un loc de muncă în alt oraș;",
                "- acest plan este avantajos mai ales datorită faptului că materia predată la facultatea din Constanța este similară cu facultatea omoloagă de la București, din cadrul UniBuc."
            ]
        },
    ]

  return (
    <div>
        <div className="mb-16"><Anchor text="main" /></div>
         <div
            className="w-[1024px] mx-auto flex flex-row-reverse gap-10 items-center">
            <div
                className="flex flex-col items-stretch">
                {studii.map((studiu, index) => (
                        <FadeInOnScroll key={index}>
                            <section
                                className={`w-[984px] mx-autoflex flex-col justify-center ${index !== 0 ? "pt-36" : ""}`}
                                id={index === 0 ? "lter" : ""}>
                                    <p
                                        className={`clasa-p studiu${index + 4}`}>
                                            {studiu.clase.length < 10 ? `Clasele ${studiu.clase}` : studiu.clase}
                                    </p>
                                    <h4
                                        className="scoala-h4 mb-4">
                                        {studiu.scoala}
                                    </h4>
                                    <ul
                                        className="flex flex-col gap-2">
                                        {studiu.bullets.map((bullet, indexBullet) => (
                                            <li key={`${index}${indexBullet}`} className="bullet-li">{bullet}</li>
                                        ))}
                                    </ul>
                            </section>
                        </FadeInOnScroll>
                    ))}
            </div>
            <FadeInOnLoad>
                <div
                    className="studii-bar relative flex flex-col items-center">
                        <div className="studii-cerc absolute top-18"></div>
                        <div className="studii-cerc absolute top-90"></div>
                        <div className="studii-cerc absolute top-167"></div>
                        <div className="studii-cerc absolute top-240"></div>
                </div>
            </FadeInOnLoad>
        </div>
        <div className="mt-16"><Anchor text="main" type="end"/></div>
    </div>
   
  )
}

export default Studii
