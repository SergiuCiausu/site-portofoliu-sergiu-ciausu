import Anchor from '@/app/components/Anchor'
import FadeInOnScroll from '@/app/components/FadeInOnScroll'
import Heading from '@/app/cv/components/Heading'
import React from 'react'
import Image from "next/image"
import { bodyW } from '@/app/variables/variables'

const DespreZiua = () => {
  return (
    <FadeInOnScroll>
        <section>
            <div className="mt-16"><Anchor text="section"/></div>
            <div
                className={`${bodyW} flex gap-16 items-center`}>
                <div
                    className="w-3/5">
                    <div><Heading text="Despre ZIUA de Constanța" /></div>
                    <p>
                        <strong>ZIUA de Constanța este o publicație locală din Constanța</strong> care distribuie știri reale, de actualitate, acoperind diverse domenii, precum politica, administrația locală, evenimente rutiere, hotărâri judecătorești, sport, cultura, etc.
                    </p>
                    <p>
                        Redacția se ocupă de administrarea unui site, a unei pagini de Facebook și a unei pagini de Instagram. Pe Facebook se anunță fiecare știre nouă și se rulează reclame, în timp ce pe Instagram se publică articolele care au avut cel mai mare succes.
                    </p>
                    <p >
                        ZIUA de Constanța are scopul de a informa locuitorii din județul Constanța despre lucrurile care se întâmplă zilnic în teritoriu.
                    </p>
                </div>
                <div>
                    <Image src="/despre-ziua-de-constanta.jpg" width={420} height={526} alt="despre ziua de constanta"></Image>
                </div>
            </div>
            <div className="mt-16"><Anchor text="section" type="end"/></div>
        </section>
    </FadeInOnScroll>
  )
}

export default DespreZiua