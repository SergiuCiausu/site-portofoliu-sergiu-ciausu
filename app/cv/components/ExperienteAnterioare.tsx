import React from 'react'
import FadeInOnScroll from '@/app/components/FadeInOnScroll'
import Anchor from '@/app/components/Anchor'
import H3 from '@/app/components/H3'
import { bodyW } from '@/app/variables/variables'
import Image from "next/image";
import "@/app/landing-page-components/proiecte.css"
import Link from 'next/link'

const ExperienteAnterioare = () => {

    const experiente = [
        {
            titlu: "Zări Alb Astre",
            descriere: "Zări Alb Astre este revista Colegiului Național „Mircea cel Bătrân”, unde am ocupat mai multe funcții de conducere. Este singura revistă de liceu din Dobrogea cu propriul site!",
            imagine: "/zari-alb-astre-banner.png",
            link: "/zari-alb-astre"
        },
        {
            titlu: "Consiliul Școlar al Elevilor",
            descriere: "Consiliul Școlar al Elevilor CNMB este o structură de reprezentare a elevilor care are grijă ca drepturile acestora să fie respectate și dirijează diverse activități pentru extinderea orizonturilor elevilor.",
            imagine: "/consiliul-scolar-al-elevilor-banner.png",
            link: "/consiliul-scolar-al-elevilor"
        },
        {
            titlu: "Consiliul Județean al Elevilor",
            descriere: "Consiliul Județean al Elevilor Constanța este structura ce se îngrijește de buna funcționare a Consiliilor Școlare ale Elevilor.",
            imagine: "/consiliul-judetean-al-elevilor-banner.png",
            link: "/consiliul-judetean-al-elevilor"
        },
        {
            titlu: "ZIUA de Constanța",
            descriere: "ZIUA de Constanța publică știri predominant de pe teritoriul Dobrogei.Am lucrat ca redactor, am creat zeci de reclame pe Facebook și Instagram și am făcut și un pachet de branding.",
            imagine: "/ziua-de-constanta-banner.png",
            link: "/ziua-de-constanta"
        },

    ]

  return (
    <FadeInOnScroll>
        <section
            className="my-24">
            <Anchor text="section" />
            <H3 text="Experiențe anterioare" />
            <div
                className={`${bodyW} flex gap-5 p-8`}>
                    {experiente.map((experienta, index) => (
                        <Link
                            key={index}
                            href={experienta.link}
                            className="flex flex-25 flex-col justify-between">
                                <Image src={experienta.imagine} width={301} height={210} alt={experienta.imagine.slice(1, experienta.imagine.length - 3)} className="mb-6"></Image>
                                <h5>{experienta.titlu}</h5>
                                <p
                                    className="descriere">
                                        {experienta.descriere}
                                </p>
                                <button
                                    className="proiect-btn mt-4">
                                        Vezi experiență
                                </button>
                        </Link>
                    ))}
            </div>
        </section>
        <Anchor text="section" type="end"/>
    </FadeInOnScroll>
  )
}

export default ExperienteAnterioare
