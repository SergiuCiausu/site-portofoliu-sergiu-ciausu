import Anchor from '@/app/components/Anchor'
import FadeInOnScroll from '@/app/components/FadeInOnScroll'
import Heading from '@/app/cv/components/Heading'
import React from 'react'
import Image from "next/image"
import { bodyW } from '@/app/variables/variables'

const DespreCSE = () => {
  return (
    <FadeInOnScroll>
        <section>
            <div className="mb-16"><Anchor text="section"/></div>
            <div
                className={`${bodyW} flex gap-16 items-center`}>
                <div
                    className="w-3/5">
                    <div><Heading text="Despre CȘE CNMB" /></div>
                    <p
                        className="mb-8">
                        <strong>Consiliul Elevilor, ca concept, este o structură legală de reprezentare a elevilor, recunoscută prin lege, menită să apere drepturile și libertățile elevilor</strong>. Se angajează în a-i proteja de abuzuri și de a face școala un loc mai frumos.
                    </p>
                    <p
                        className="mb-8">
                        Pentru ca toți elevii să beneficieze de implementările solicitate la nivel național de Consiliul Național al Elevilor, există „sucursale” ale acestuia la nivel județean, respectiv la nivel școlar. <strong>Astfel, CȘE CNMB se ocupă cu protejarea libertăților și reprezentarea elevilor din Colegiul Național „Mircea cel Bătrân” Constanța</strong>.
                    </p>
                    <p
                        className="mb-8">
                        CȘE-urile desfășoară ședinte cu șefii claselor de unde extrag problemele cu care se confruntă elevii liceului, activități de socializare și ateliere de prezentare ale domeniilor spre care se orientează mirciștii.
                    </p>
                </div>
                <div>
                    <Image src="/despre-cse-cnmb.jpg" width={514} height={685} alt="despre zari alb astre"></Image>
                </div>
            </div>
            <div className="mt-16"><Anchor text="section" type="end"/></div>
        </section>
    </FadeInOnScroll>
  )
}

export default DespreCSE