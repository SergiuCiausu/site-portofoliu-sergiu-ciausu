import FadeInOnScroll from '@/app/components/FadeInOnScroll'
import { bodyW } from '@/app/variables/variables'
import React from 'react'
import "@/app/proiecte/components/proiecte.css"
import Image from "next/image";
import Anchor from '@/app/components/Anchor';
import Link from 'next/link';

const Proiecte = () => {

    const proiecte = [
        {
            titlu: "Edu Docs",
            descriere: "Website de „smart study” pentru elevii de liceu, cu toată materia prevăzută în programa școlară, pentru fiecare profil și specializare, cu elemente ce facilitează parcurgerea lecțiilor, precum:",
            bullets: [
                "Sidebar funcțional cu fiecare lecție din capitolul sau subcapitolul corespunzător;",
                "Cuprins funcțional cu fiecare intertitlu (h2 și h3) al fiecărei lecții;",
                "Breadcrumbs funcțional cu întreaga adresă prin care a navigat utilizatorul pentru a ajunge într-o anumită locație de pe site;",
                "Șablon de lecție ușor de replicat, cu posibilitatea de a fi transformat într-o interfață interactivă (pentru profesori, de exemplu, pentru a încărca lecții pe platformă);",
                "Inspirație din site-uri de documentație ale limbajelor de programare/ bibliotecilor."
            ],
            typescript: 85,
            css: 10,
            javascript: 5, 
            liniiCod: 5000,
            imagine: "/edu-docs-banner.png",
            link: "https://github.com/SergiuCiausu/e-docs"
        },
        {
            titlu: "Case Smart",
            descriere: "Website de e-Commerce, ce vinde întrerupătoare, prize și alte produse electrice, fiind o refacere, pentru acest portofoliu, a site-ului deja existent.",
            bullets: [
                "Filtre funcționale de produse, fără refresh-ul paginii;",
                "Pagini fundamentale în e-Commerce, precum listări de produse, pagina produsului și pagină de checkout;",
                "Proiect full stack, fiind conectat la o bază de date administrată cu ajutorul Prisma ORM, în limbajul PostgreSQL.",
            ],
            typescript: 93,
            css: 5,
            javascript: 2, 
            liniiCod: 1000,
            imagine: "/case-smart-banner.png",
            link: "https://github.com/SergiuCiausu/case-smart"
        },
        {
            titlu: "Make Me Fit",
            descriere: "Website de prezentare a cursurilor, axat mai mult pe design web și nu pe conținutul cursurilor sau funcționalități complexe.",
            bullets: [
                "Landing page pentru fiecare curs de pe site, cu design energic, tineresc și feminin, specific audienței țintă al acestui proiect;",
                "Structuri de persuasiune folosite pentru a face ofertele cât mai atrăgătoare pentru audiența cheie;",
                "Interfață completă a platformei planului de antrenament al fiecărui curs.",
            ],
            typescript: 83,
            css: 10,
            javascript: 7, 
            liniiCod: 500,
            imagine: "/make-me-fit-banner.png",
            link: "/make-me-fit"
        },
        {
            titlu: "Smartcore",
            descriere: "Website de prezentare a cursurilor, acesta este proiectul pe care l-am construit pentru una dintre probele atestatului de unde am obținut certificarea de „ajutor analist programator”.",
            bullets: [
                "Landing page cu link-uri interne utile, cu navigație lină (animație smooth);",
                "Structură simplă de organizare, fiind foarte ușor de replicat, de exemplu, pentru a crea o interfață de creare cursuri;",
                "Proiect finalizat în 3 zile de lucru în gălăgia din clasă :))",
            ],
            typescript: 92.4,
            css: 6.5,
            javascript: 1.1, 
            liniiCod: 250,
            imagine: "/smartcore-banner.png",
            link: "/smartcore"
        },
    ]

  return (
    <FadeInOnScroll>
        <section
            className={`${bodyW} mt-24`}>
            <div className="mb-16"><Anchor text="ul" /></div>
            {proiecte.map((proiect, index) => (
                <Link
                    key={index}
                    href={proiect.link}
                    id={index === 0 ? "proiect" : ""}
                    className="flex items-center mb-12"
                    target="_blank">
                        <div 
                            className="flex-50">
                                <Image src={proiect.imagine} width={1468} height={1074} alt={proiect.imagine.slice(1, proiect.imagine.length - 3)}></Image>
                        </div>
                        <div 
                            className="flex-50 px-12 py-8 flex flex-col gap-6">
                                <div
                                    className="flex items-center gap-4">
                                    <h3>
                                        {proiect.titlu}
                                    </h3>
                                    <p
                                        className="descriere-proiect">
                                        {`(> ${proiect.liniiCod} de linii de cod)`}
                                    </p>
                                </div>
                                <div
                                    className="flex flex-col gap-4">
                                    <p
                                        className="descriere-proiect">
                                        {proiect.descriere}
                                    </p>
                                    <ul
                                        className="list-disc ml-8">
                                        {proiect.bullets.map((bullet, bulletIndex) => (
                                            <li key={bulletIndex} className="descriere-proiect">{bullet}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div
                                    className="flex flex-col justify-center gap-2">
                                    <div
                                        className={`flex items-center gap-4`}
                                        style={{
                                            width: `${proiect.typescript * 516 / 100 + 184}px`
                                        }}>
                                        <p
                                            className="limbaj-programare-label w-[111px] text-right">
                                                Typescript
                                        </p>
                                        <div
                                            className={`flex-1 typescript-bar flex`}>
                                        </div>
                                        <p
                                            className="limbaj-programare-label">
                                                {`${proiect.typescript}%`}
                                        </p>
                                    </div>
                                    <div
                                        className={`flex items-center gap-4`}
                                        style={{
                                            width: `${proiect.css * 516 / 100 + 184}px`
                                        }}>
                                        <p
                                            id="edu-docs-css"
                                            className={`limbaj-programare-label w-[111px] text-right`}>
                                                CSS
                                        </p>
                                        <div
                                            className={`flex-1 css-bar flex`}>
                                        </div>
                                        <p
                                            className="limbaj-programare-label">
                                                {`${proiect.css}%`}
                                        </p>
                                    </div>
                                    <div
                                        className={`flex items-center gap-4`}
                                        style={{
                                            width: `${proiect.javascript * 516 / 100 + 184}px`
                                        }}>
                                        <p
                                            className="limbaj-programare-label w-[111px] text-right">
                                                Javascript
                                        </p>
                                        <div
                                            className={`flex-1 javascript-bar flex`}>
                                        </div>
                                        <p
                                            className="limbaj-programare-label">
                                                {`${proiect.javascript}%`}
                                        </p>
                                    </div>
                                </div>
                                <button className="proiect-cta-btn">Vezi proiect</button>
                        </div>
                </Link>
            ))}
            <div className="mb-16"><Anchor text="ul" type="end"/></div>
        </section>
    </FadeInOnScroll>
    
  )
}

export default Proiecte
