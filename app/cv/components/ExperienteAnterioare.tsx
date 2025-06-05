import FadeInOnScroll from '@/app/components/FadeInOnScroll'
import React from 'react'
import Anchor from './Anchor'
import "./experiente-anterioare.css"
import { bodyW } from '@/app/variables/variables'
import Heading from './Heading'

const ExperienteAnterioare = () => {

    const contributii = [
        {
            perioada: "01.04.2023 - 31.12.2023",
            post: "Grafician ZIUA de Constanța",
            contributii: [
                "Repoziționarea strategică a identității vizuale pe rețelele sociale;",
                "Crearea graficilor publicitare pentru promovarea ziarului pe rețelele sociale;",
                "Social Media Management - doar pe Instagram"
            ]
        },
        {
            perioada: "19.06.2023 - 01.09.2023",
            post: "Redactor ZIUA de Constanța",
            contributii: [
                "Conceperea rapidă a unor texte pentru articolele de știri pe baza anunțurilor simplificate primite/ extrase din surse credibile;",
                "Efectuarea de research pe internet pentru documentare sau pentru a ține evidența evenimentelor petrecute la nivel internațional;",
            ]
        },
        {
            perioada: "19.05.2023 - 05.02.2024",
            post: "Redactor-șef Zări Alb Astre, revista Colegiului Național „Mircea cel Bătrân” Constanța",
            contributii: [
                "Administrarea redacției Zări Alb Astre;",
                "Managerierea site-ului revistei, singura revistă din Dobrogea cu propriul site (zarialbastre.ro);",
                "Desfășurarea unor multiple campanii digitale, precum campanii culturale în cinstea somităților dobrogene mirciste (Grigore Sălceanu, Ion Faiter, etc.), jurnalistice, de digitalizare a arhivei și educaționale",
                "Mentor pentru redactori și articolele acestora"
            ]
        },
        {
            perioada: "12.09.2022 - 18.05.2023",
            post: "Redactor-șef adjunct Zări Alb Astre, revista Colegiului Național „Mircea cel Bătrân” Constanța",
            contributii: [
                "Administrarea întregii redacții Zări Alb Astre, alături de un grup managerial timp de doi ani -> abilități de leadership, management, comunicare, public speaking, creativitate, viziune antreprenorială, organizatorice, întreprinzător, intermediar;",
                "Mentor pentru redactori și articolele lor -> abilități de persuasiune, comunicare, creativitate, skill-uri tehnice (de redactare);",
                {
                    bullet: "Organizarea tuturor procedurilor de bună funcționare ale redacției, de exemplu: ",
                    subcontributii: [
                        "organizarea internă a redacției folosind platforma Google Drive printr-un sistem automat;",
                        {
                            bullet: "crearea unor sisteme ingenioase pe site-ul redacției, precum:",
                            subsubcontributii: [
                                "clasamentul redactorilor (care stimulează motivația și competitivitatea redactorilor);",
                                "profilul redactorului (unde le este recunoscută munca, fiind afișate toate realizările lor în redacție);",
                                "medaliile redactorului (realizate custom de către mine pentru a recunoaște realizările speciale ale redactorilor)."
                            ]
                        }
                    ]
                },
                "Digitalizarea numerelor de revistă din colecția „Serie Nouă“."
            ]
        },
        {
            perioada: "28.02.2022 - 05.02.2024",
            post: "Tehnoredactor-șef Zări Alb Astre, revista Colegiului Național „Mircea cel Bătrân” Constanța",
            contributii: [
                "Repoziționarea strategică a întregii identități vizuale a revistei;",
                "Organizarea, structurarea și proiectarea concepției grafice a celor două numere de revistă lansate;",
                "Corectarea a peste 100 de articole;",
                "Crearea materialelor promoționale pe rețelele sociale, editare fotografică, producerea bannerelor și diplomelor de lansare",
                "Asigurarea copywriting-ului pe rețelele sociale ale revistei (pe descrieri, postări, story-uri, etc.)",
                "Crearea unor postere prin tehnica de manipulare foto"
            ]
        },
        {
            perioada: "19.09.2022 - 09.01.2023",
            post: "Secretar de redacție Zări Alb Astre, revista Colegiului Național „Mircea cel Bătrân” Constanța",
            contributii: [
                "Organizarea tuturor procedurilor și sistemelor de management intern și extern ale redacției;",
                "Organizarea întregii proceduri de înscriere, înregistrare și manageriere a redacției și a tuturor articolelor prin conceperea unui sistem simplu și eficient, 100% digital.",
            ]
        },
        {
            perioada: "11.11.2022 - 04.06.2023",
            post: "Directorul Departamentului PR și comunicare, Consiliul Județean al Elevilor Constanța",
            contributii: [
                "Implementarea politicii de imagine a CJE Constanța;",
                "Gestiunea relației cu trusturile de presă prin transmiterea de poziții și comunicate de presă;",
                "Comunicarea eficientă a valorilor structurii în mediul online."
            ]
        },
        {
            perioada: "19.11.2022 - 16.06.2023",
            post: "Directorul Departamentului PR și comunicare, Consiliul Școlar al Elevilor Colegiului Național „Mircea cel Bătrân” Constanța",
            contributii: [
                "Implementarea politicii de imagine a CȘE CNMB;",
                "Imortalizarea ședințelor generale ale consiliului, editare foto;",
                "Dezvoltarea unui flux de comunicare eficient cu direcțiunea colegiului și cu elevii reprezentanți;",
                "Creșterea paginii de Instagram de la 10-20 de like-uri la 100 într-o lună",
                "Organizarea de activități culturale și de divertisment pentru elevii colegiului"
            ]
        },
        {
            perioada: "12.12.2021 - 16.06.2023",
            post: "Grafician, Consiliul Școlar al Elevilor Colegiului Național „Mircea cel Bătrân” Constanța",
            contributii: [
                "Repoziționarea strategică a identității vizuale a consiliului, atât pe rețelele sociale, cât și prin materiale printate;",
                "Crearea materialelor promoționale pentru campanii electorale, diverse anunțuri, înscrierea la evenimente și concursuri;",
                "Asigurarea copywriting-ului lucrărilor create;",
            ]
        },
    ]

  return (
    <div>
        <FadeInOnScroll><Heading text="Experiente anterioare"/></FadeInOnScroll>
        {contributii.map((contributie, index) => (
        <FadeInOnScroll key={index}>
        <section
            className={`${bodyW} my-16`}>
            <div className="mb-4"><Anchor text="section" /></div>
            <p className="contributie-perioada mb-2">{contributie.perioada}</p>
            <h5 className="contributie-h5 mb-4">{contributie.post}</h5>
            <p
                className="contributii-label mb-4">
                    Contribuția mea:
            </p>
            <ol
                className="list-decimal ml-4">
                    {contributie.contributii.map((bullet, indexBullet) => (
                        bullet.subcontributii 
                        ? 
                            <div
                                key={indexBullet}>
                                <li className="contributii-label mb-2">{bullet.bullet}</li>
                                <ol 
                                    className="list-decimal ml-12">
                                    {bullet.subcontributii.map((subcontributie, indexSub) => (
                                            subcontributie.subsubcontributii 
                                                ? 
                                                    <div
                                                        key={indexSub}>
                                                        <li className="contributii-label mb-2">{subcontributie.bullet}</li>
                                                        <ul
                                                            key={index}
                                                            className="list-disc ml-20">
                                                        {subcontributie.subsubcontributii.map((subsub, indexSubSub) => (  
                                                                <li key={indexSubSub} className="contributii-label mb-2">{subsub}</li>
                                                        ))}
                                                        </ul>
                                                    </div>
                                                : <div key={indexSub}></div>
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

export default ExperienteAnterioare
