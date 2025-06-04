import Anchor from '@/app/components/Anchor'
import FadeInOnScroll from '@/app/components/FadeInOnScroll'
import H3 from '@/app/components/H3'
import React from 'react'
import Image from "next/image"
import { bodyW } from '@/app/variables/variables'

const Sarcini = () => {

    const sarcini = [
        {
            img: "/crearea-unei-marci-proprii-usor-de-folosit-icon.png",
            denumire: "Crearea unei mărci proprii ușor de folosit"
        },
        {
            img: "/lansarea-unui-site-al-revistei-icon.png",
            denumire: "Lansarea unui site al revistei"
        },
        {
            img: "/imbunatatirea-aspectului-revistei-icon.png",
            denumire: "Îmbunătățirea aspectului revistei"
        },
        {
            img: "/postatul-pe-retelele-sociale.png",
            denumire: "Postatul pe rețelele sociale"
        },
    ]

  return (
    <FadeInOnScroll>
        <section>
            <div className="mt-16"><Anchor text="section" /></div>
            <H3 text="Sarcini de lucru" />
            <div
                className={`${bodyW} flex justify-between`}>
                {sarcini.map((sarcina, index) => (
                    <div
                        key={index}
                        className="w-[301px] flex flex-col items-center justify-between gap-4">
                            <Image src={sarcina.img} width={49} height={49} alt={sarcina.img.slice(1, sarcina.img.length - 3)}></Image>
                            <h5
                                className="text-center">
                                {sarcina.denumire}
                            </h5>
                    </div>
                ))}
            </div>
            <div className="mt-16"><Anchor text="section" type="end" /></div>
        </section>
    </FadeInOnScroll>
  )
}

export default Sarcini