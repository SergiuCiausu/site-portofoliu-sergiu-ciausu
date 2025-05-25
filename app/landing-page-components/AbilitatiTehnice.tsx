import React from 'react'
import H3 from '../components/H3'
import Anchor from '../components/Anchor'
import FadeInOnScroll from '../components/FadeInOnScroll'
import { bodyW } from '../variables/variables'
import "@/app/landing-page.css"

const AbilitatiTehnice = () => {

    const limbajeProgramare = [
        {
            nume: "HTML",
            nivel: "Avansat",
            idNivel: 4
        },
        {
            nume: "CSS",
            nivel: "Avansat",
            idNivel: 4
        },
        {
            nume: "Javascript/ Typescript",
            nivel: "Mediu",
            idNivel: 3
        },
        {
            nume: "React",
            nivel: "Mediu",
            idNivel: 3
        },
        {
            nume: "Next.js",
            nivel: "Mediu",
            idNivel: 3
        },
        {
            nume: "SQL",
            nivel: "Avansat",
            idNivel: 4
        },
        {
            nume: "Postgresql",
            nivel: "Avansat",
            idNivel: 4
        },
        {
            nume: "Prisma ORM",
            nivel: "Mediu",
            idNivel: 3
        },
        {
            nume: "Node.js",
            nivel: "Începător",
            idNivel: 2
        },
        {
            nume: "Express.js",
            nivel: "Începător",
            idNivel: 2
        },
        {
            nume: "Python",
            nivel: "Începător",
            idNivel: 2
        },
        {
            nume: "C/C++",
            nivel: "Începător",
            idNivel: 2
        },
    ]

    const niveluri = ["Nimic", "Începător", "Mediu", "Avansat", "Expert"]

  return (
    <FadeInOnScroll>
        <section
            className="mt-16">
            <Anchor text="section"/>
            <H3 text="Abilitățile tehnice ale lui Sergiu"/>
            <div
                className={`${bodyW} flex flex-col gap-12 p-8`}>
                {limbajeProgramare.map((limbaj, index) => (
                    <div
                        className="flex justify-between">
                            <h5>
                                {limbaj.nume}
                            </h5>
                            <div
                                className="flex gap-6">
                                {niveluri.map((nivel, indexNivel) => (
                                    <div
                                        key={index}
                                        className="flex flex-col gap-2 items-center">
                                        <span className={`level-label ${indexNivel === limbaj.idNivel ? "current-" : "not-current-"}level-label`}>{nivel}</span>
                                        <div
                                            className={`skill-bar ${indexNivel === limbaj.idNivel ? "current-" : ""}${indexNivel > limbaj.idNivel ? "not-reached-" : ""}${indexNivel < limbaj.idNivel ? "passed-" : ""}level-bar`}>
                                        </div>
                                    </div>
                                ))}
                            </div>
                    </div>
                ))}
            </div>
            <div
                className="my-16">
                <Anchor text="section" type="end"/>
            </div>
        </section>
    </FadeInOnScroll>
  )
}

export default AbilitatiTehnice;