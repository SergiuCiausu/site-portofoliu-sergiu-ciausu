import FadeInOnScroll from '@/app/components/FadeInOnScroll'
import React from 'react'
import Anchor from './Anchor'
import "./experiente-anterioare.css"
import { bodyW } from '@/app/variables/variables'
import Heading from './Heading'
import Link from 'next/link'

const Educatie = () => {

    const contributii = [
        {
            perioada: "01.11.2024 - 15.11.2024",
            curs: "Reponsive Web Design, freeCodeCamp",
            contributii: [
                "Programarea unei aplicații web folosind HTML, CSS, JavaScript, React.js, Redux, Bootstrap și Tailwind CSS",
                "Bazele limbajelor de programare folosite pentru construirea unui site funcțional, optimizat și cu o experiență plăcută pentru utilizatori",
                "Crearea unor componente esențiale unui site, precum bara de navigație, hero section, pagină „despre noi”, coș de cumpărături, etc."
            ],
            link: "https://drive.google.com/file/d/1E37pNWMxpnxg9FykNuF07iT8qEb3lBIJ/view?usp=drive_link"
        },
        {
            perioada: "30.07.2022 - 10.08.2022",
            curs: "Magazine Layout & Professional Design Using Indesign CC, Udemy",
            contributii: [
                "Bazele de tehnoredactare ale unei reviste, precum și de utilizare a programului Adobe Indesign, alături de tehnici de stilizare globală a conținutului pentru lucrul cu multiple pagini;",
                "Standardele industriei pentru așezarea în pagină a conținutului unei reviste, al unui document ce cuprinde lucrări de portofoliu sau al unei prezentări către un client.",
            ],
            link: "https://drive.google.com/file/d/1CBsVctDzMqSLw35tBHcuSaXbksGnPSSf/view?usp=drive_link"
        },
        {
            perioada: "30.12.2021 - 26.01.2022",
            curs: "Adobe Photoshop CC - Advanced Training Course, Udemy",
            contributii: [
                "Generarea de imagini și conținut media folosind AI",
                "Tehnici avansate de editare și manipulare foto, precum: blending, retouching, corecții de culoare prin suprapunerea layerelor, efecte predefinite, editarea GIF, crearea efectului de paralaxă, compunerea de mock-up-uri, etc.",
                "Noțiuni de controlare a setărilor aplicației și de alocare de resurse hardware."
            ],
            link: "https://drive.google.com/file/d/1ZPq5CqKTscZF-ItYH_SOX6Sn3ncDmn8e/view?usp=drive_link"
        },
        {
            perioada: "09.11.2021 - 21.11.2021",
            curs: "Adobe Photoshop CC - Essentials Training Course, Udemy",
            contributii: [
                {
                    bullet: "Bazele utilizării aplicației Photoshop, precum: ",
                    subcontributii: [
                        "folosirea layerelor;",
                        "corecții de culoare;",
                        "schimbări de culoare;",
                        "blending modes;",
                        "unelte de transformare și distorsionare/ lichefiere a imaginilor, etc."
                    ]
                },
                "Cele mai bune practici de export, învățând despre termeni precum Dots Per Inch/ Points Per Inch, rezoluție, diferențele dintre formatul JPG vs. PNG;",
                "Să lucrez rapid și să mă simt confortabil în mediul Photoshop.",
            ],
            link: "https://drive.google.com/file/d/1sGXfeEAPmxopwpN7E62NFVZLKyV6QvDy/view?usp=drive_link"
        },
        {
            perioada: "22.11.2021 - 30.12.2021",
            curs: "Adobe Premiere Pro CC - Advanced Training Course, Udemy",
            contributii: [
                "Toate abilitățile necesare producerii videoclipurilor profesionale, de la videoclipuri scurte (reels, shorts, tik tok-uri, etc.) la videoclipuri mai lungi (videoclipuri educaționale de tip talking head, clipuri de podcast, etc.), precum: tranziții, corecții de culoare, corecții de lumină, animarea subtitrărilor, alegerea videoclipurilor stock potrivite, planificarea unui videoclip, etc.;",
                "Noțiuni avansate din jargonul unui editor video, precum A-roll sau B-roll, dar și tehnici avansate de producție, precum stabilizarea videoclipurilor, generarea de subtitrări cu AI, personalizarea animațiilor de orice fel, comutarea cu Adobe After Effects, etc.;",
                "Noțiuni de controlare a setărilor aplicației și de alocare de resurse hardware."
            ],
            link: "https://drive.google.com/file/d/1SIR5qarBCHGQfadG7wbh1ho1raQRifKK/view?usp=drive_link"
        },
        {
            perioada: "22.10.2021 - 09.11.2021",
            curs: "Adobe Premiere Pro CC - Essentials Training Course, Udemy",
            contributii: [
                "Bazele utilizării aplicației Premiere Pro, prin producerea a 10 proiecte fundamentale, prin care am învățat elemente esențiale pentru compunerea unui videoclip, pentru reprezentarea unor culori vibrante, potrivite evenimentului în cauză, corectarea secvențelor audio ale videoclipurilor și îmbunătățirea acestora pentru evocarea sentimentelor dorite;",
                "Explorarea fiecărui efect de corectarea a culorilor și a luminilor.",
            ],
            link: "https://drive.google.com/file/d/11RtH3_qlPMRBlf-JhhJzUTlJOPxWgJw2/view?usp=drive_link"
        },
        {
            perioada: "30.12.2021 - 27.01.2022",
            curs: "User Experience Design Essentials - Adobe XD UI UX Design, Udemy",
            contributii: [
                "Stadiile unui proiect web, de la schiță Lo-Fi la cea Hi-Fi și la pregătirea pentru programarea acestuia;",
                {
                    bullet: "Bazele structurii unui site, precum:",
                    subcontributii: [
                        "așezarea în pagină după regula celor 12 coloane;",
                        "grid-uri modulare, standardele privind spațierea (whitespace) și dimensiunile elementelor de pe o pagină web;",
                        "regula 60-30-10 pentru construirea unei palete de culori;",
                        "ierarhizarea tipografica;",
                        "sisteme tipografice;",
                        "sisteme de culori;",
                        "lucrul pe componente, etc."
                    ]
                },
                {
                    bullet: "Să creez componentele fundamentale oricărui site, precum:",
                    subcontributii: [
                        "bara de navigație;",
                        "secțiunea hero;",
                        "secțiunea de beneficii;",
                        "pagină de listare produse;",
                        "pagină de produs;",
                        "pagină de checkout;",
                        "pagină de logare;",
                        "pagină de comparare a ofertelor;",
                        "sidebar, etc."
                    ]
                },
                {
                    bullet: "Să fac animații și micro interacțiuni pentru optimizarea experienței utilizatorului, precum:",
                    subcontributii: [
                        "animații de hover;",
                        "animații de scroll;",
                        "animații de încărcare, etc.",
                    ]
                },
            ],
            link: "https://drive.google.com/file/d/11VSj_pE-OeZ5jV4wONGgkjJs_1oEQInq/view?usp=drive_link"
        },
        {
            perioada: "18.03.2022 - 19.04.2022",
            curs: "Figma UI UX Design Essentials, Udemy",
            contributii: [
                "Stadiile unui proiect web, de la schiță Lo-Fi la cea Hi-Fi și la pregătirea pentru programarea acestuia;",
                {
                    bullet: "Bazele structurii unui site, precum:",
                    subcontributii: [
                        "așezarea în pagină după regula celor 12 coloane;",
                        "grid-uri modulare, standardele privind spațierea (whitespace) și dimensiunile elementelor de pe o pagină web;",
                        "regula 60-30-10 pentru construirea unei palete de culori;",
                        "ierarhizarea tipografica;",
                        "sisteme tipografice;",
                        "sisteme de culori;",
                        "lucrul pe componente, etc."
                    ]
                },
                {
                    bullet: "Să creez componentele fundamentale oricărui site, precum:",
                    subcontributii: [
                        "bara de navigație;",
                        "secțiunea hero;",
                        "secțiunea de beneficii;",
                        "pagină de listare produse;",
                        "pagină de produs;",
                        "pagină de checkout;",
                        "pagină de logare;",
                        "pagină de comparare a ofertelor;",
                        "sidebar, etc."
                    ]
                },
                {
                    bullet: "Să fac animații și micro interacțiuni pentru optimizarea experienței utilizatorului, precum:",
                    subcontributii: [
                        "animații de hover;",
                        "animații de scroll;",
                        "animații de încărcare, etc.",
                    ]
                },
            ],
            link: "https://drive.google.com/file/d/1ByjSd4C6kk18Px6VxZ_dhwHwzGM9k8Nn/view?usp=drive_link"
        },
        {
            perioada: "22.10.2021 - 05.11.2021",
            curs: "After Effects - Motion Graphics & Data Visualization, Udemy",
            contributii: [
                "Bazele utilizării programului After Effects, precum: lucrul cu compoziții, animații de mișcare, manipularea velocității animațiilor, lucrul cu tabele Excel și documente CSV în After Effects, crearea unei animații 3D „înregistrată” din unghiuri multiple, etc.;",
                "Efecte avansate de animare, precum monitorizarea unui punct de mișcare (camera tracking), generarea de diagrame moderne, interactive, animarea unei iconițe, etc.",
            ],
            link: "https://drive.google.com/file/d/1u0AtcsuKBp6H1I94mBJJ8ubahSAbeGhp/view?usp=drive_link"
        },
        {
            perioada: "16.06.2022 - 29.07.2022",
            curs: "Graphic Design Masterclass Intermediate: The Next Level, Udemy",
            contributii: [
                "Principiile fundamentale ale design-ului grafic, atât pentru materiale printabile, cât și pentru cele digitale;",
                "Tehnici avansate de așezare în pagină, precum ghidarea după Raportul de Aur, Principiile Gestalt, parcurgerea în Z a unei lucrări, parcurgerea în F a unei lucrări, etc.;",
                "Combinarea principiilor de design grafic utilizând abilitățile de editare în Photoshop, Illustrator și Indesign;",
                "Construirea de la zero a unei postări, unui afiș sau a unui document de prezentare;",
                "Alcătuirea aceluiași material în diferite dimensiuni și aspecte, în scopul păstrării unei constanțe în identitatea vizuală;",
                "Asamblarea unei prezentări profesionale a unui brand, incluzând mock-up-uri și metode creative de a afișa elementele ce alcătuiesc identitatea vizuală;",
                "Psihologia culorilor, a font-urilor, a spațierilor, a așezărilor în pagină și a totalității și diversității contrastelor;",
                "Teoria culorilor, tehnici de construire a paletelor de culori profesionale și selectarea culorilor potrivite în funcție de sistemul de redare al culorilor care va fi folosit (RGB/ CMYK)."
            ],
            link: "https://drive.google.com/file/d/1LoqI_A9SY1bS7ULUS5RXepMF244pxNzX/view?usp=drive_link"
        },
        {
            perioada: "29.05.2022 - 15.06.2022",
            curs: "Graphic Design Masterclass - Learn Great Design, Udemy",
            contributii: [
                "Bazele lucrului simultan cu aplicațiile Photoshop, Illustrator și Indesign;",
                "Efecte creative de manipulare foto în Photoshop, precum efectul Double Exposure;",
                "Bazele alcătuirii unei identități vizuale, fiind introdus noțiunilor precum: logo, moodboard, sistem tipografic, sistem de culori, prevederi ale unei identități vizuale, etc.;",
                "Tipuri de stiluri pentru postări pe social media, precum: postări de tip citat/ short-form, postări carusel/ medium-form, postări de anunțare a unui eveniment, precum și pregătirea unei campanii de social media marketing;",
                "Lucrul cu vectori în Illustrator."
            ],
            link: "https://drive.google.com/file/d/1EYnOtM0tK7wLxfbiPhVar2mU0-oD0UCR/view?usp=drive_link"
        },
        {
            perioada: "29.07.2022 - 20.08.2022",
            curs: "The Branding Masterclass - The Entire Brand Design Process, Udemy",
            contributii: [
                "Crearea unei identități vizuale de la zero, de la logo, sisteme tipografice și sisteme de culori la prezentări complexe și manual de identitate vizuală;",
                "Combinarea imaginilor cu culori, font-uri, vectori și spațieri pentru redarea vocii și mesajului de brand dorite;",
                "Utilizarea platformei Behance pentru prezentarea portofoliului."
            ],
            link: "https://drive.google.com/file/d/1oE7CWjpNH58YgNptmKDhxzHA5TvsoCdg/view?usp=drive_link"
        },
        {
            perioada: "15.09.2012 - 15.06.2017",
            curs: "Diplomă de absolvire clasele 0-IV, Liceul Teoretic „Emil Racoviță” Techirghiol",
            contributii: []
        },
        {
            perioada: "15.09.2017 - 08.06.2021",
            curs: "Diplomă de absolvire clasele V-VIII, Școala Gimnazială nr.24 „Ion Jalea” Constanța",
            contributii: []
        },
    ]

  return (
    <div>
        <FadeInOnScroll><Heading text="Educație și cursuri de formare"/></FadeInOnScroll>
        {contributii.map((contributie, index) => (
            <FadeInOnScroll key={index}>
            <section
                className={`${bodyW} my-16`}>
                <div className="mb-4"><Anchor text="section" /></div>
                <p className="contributie-perioada mb-2">{contributie.perioada}</p>
                <h5 className="contributie-h5 mb-4">{contributie.link ? <Link href={contributie.link} target="_blank" className="underline">{contributie.curs}</Link> : contributie.curs}</h5>
                <p
                    className="contributii-label mb-4">
                        {contributie.contributii.length > 0 ? "Am învățat:" : ""}
                </p>
                <ol
                    className="list-decimal ml-4">
                        {contributie.contributii.map((bullet, indexBullet) => (
                            typeof bullet !== 'string'
                            ? 
                                <div
                                    key={indexBullet}>
                                    <li className="contributii-label mb-2">{bullet.bullet}</li>
                                    <ol 
                                        className="list-decimal ml-12">
                                        {bullet.subcontributii.map((subcontributie, indexSub) => (
                                                    <div
                                                        key={indexSub}>
                                                        <li className="contributii-label mb-2">{subcontributie}</li>
                                                    </div>
                                            ))}
                                    </ol>
                                </div>
                            : <li key={indexBullet} className="contributii-label mb-2">{bullet}</li>
                        ))}
                </ol>
                <div className="my-4"><Anchor text="section" type="end"/></div>
            </section>
            </FadeInOnScroll>
        ))}
    </div>
  )
}

export default Educatie
