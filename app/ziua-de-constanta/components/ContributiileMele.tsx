import Anchor from '@/app/components/Anchor'
import FadeInOnScroll from '@/app/components/FadeInOnScroll'
import H3 from '@/app/components/H3'
import Heading from '@/app/cv/components/Heading'
import { bodyW } from '@/app/variables/variables'
import React from 'react'
import Image from "next/image"
import HeadingRight from '@/app/cv/components/HeadingRight'
import Link from 'next/link'

const ContributiileMele = () => {
  return (
        <section>
            <FadeInOnScroll>
                <div className="mt-16"><Anchor text="section"/></div>
                <div><H3 text="Contribuțiile mele în cadrul proiectului" /></div>
                <div
                    className={`${bodyW} flex gap-16 mb-16 justify-between`}>
                    <div
                        className="w-3/5">
                            <div><Heading text="Crearea unui sistem simplu de conceput postări "/></div>
                            <p
                                className="mb-16">
                                Am aplicat principii de design grafic într-o manieră simplă, ușor de replicat pentru echipa de marketing ZIUA de Constanța. Contrast mare, atât al culorilor, cât și al dimensiunilor de font și texturilor folosite, design ușor de parcurs, cu o cale vizuală clară, instinctuală și apsect compact, dar curat, pentru comunicarea eficientă a informațiilor.
                            </p>
                    </div>
                    <div>
                        <Image src="/crearea-unui-sistem-simplu-de-conceput-postari.jpg" width={360} height={450} alt="crearea unui sistem simplu de conceput postari"></Image>
                    </div>
                </div>
            </FadeInOnScroll>
            <FadeInOnScroll>
                <div
                    className={`${bodyW} flex flex-row-reverse items-center gap-16 mb-16`}>
                    <div
                        className="w-3/5">
                        <HeadingRight text="Atragerea a mii de like-uri prin reclame"/>
                        <p className="mb-8 text-right">
                            Am creat design-ul unor reclame care s-au dovedit a fi de impact, care au atras mii de cititori pe site-ul ZIUA de Constanța și am contribuit la creșterea veniturilor publicației.
                        </p>
                        <p className="mb-8 text-right">Temele reclamelor se învârteau în jurul unor idealuri, evocate frecvent în marketing.</p>
                    </div>
                    <div>
                        <Image src="/reclama facebook trafic site 5.2.jpg" width={493} height={493} alt="atragerea a mii de like-uri prin reclame"></Image>
                    </div>
                </div>
                <div><Anchor text="section" type="end"/></div>
                <div className="mt-16"><Anchor text="main" type="end"/></div>
            </FadeInOnScroll>
        </section>
  )
}

export default ContributiileMele