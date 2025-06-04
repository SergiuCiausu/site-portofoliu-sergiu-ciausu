import FadeInOnScroll from '@/app/components/FadeInOnScroll'
import Heading from '@/app/cv/components/Heading'
import HeadingRight from '@/app/cv/components/HeadingRight'
import { bodyW } from '@/app/variables/variables'
import React from 'react'
import Image from 'next/image'
import Anchor from '@/app/components/Anchor'

const Hobby = () => {

    const hobby = [
        {
            denumire: "Fitness-ul",
            p: [
                "Hobby-ul meu preferat, care mă ajută să... nu o iau razna :). Sala este activitatea care m-a învățat să am răbdare și să deprind abilitatea de a munci fără a vedea rezultate imediate. Este hobby-ul care-mi resetează mintea și o umple de o claritate extremă.",
                "Fără sală, nu aș fi același om și sper că nu va fi nevoie niciodată să mă opresc din a ridica greutăți și din a-mi îmbunătăți sănătatea, aspectul fizic și aspectul mental."
            ],
            img: "/spate.png"
        },
        {
            denumire: "Fotografia",
            p: [
                "Îmi place să petrec timp în vacanțe surprinzând natura în ipostazele ei cele mai fermecătoare. De asemenea, de fiecare dată când vreun prieten are nevoie de niște poze pentru rețelele sociale -- mă ocup! Prin fotografie am interacționat pentru prima dată cu lumea conținutului digital.",
            ],
            img: "/fotografia.png"
        },
        {
            denumire: "Scrisul",
            p: [
                "Scrisul este hobby-ul care m-a ajutat să mă vindec de anxietate. Când eram mic, am fost batjocorit continuu pentru faptul că eram mai gras decât colegii mei de la școală și de la clubul de fotbal la care mergeam.",
                "Prin scris îmi creez o ordine cognitivă, prin care reușesc să-mi găsesc răspunsuri la anumite gânduri care-mi stârnesc disconfort."
            ],
            img: "/scrisul.png"
        },
    ]

  return (
    <section>
        {hobby.map((hobby, index) => (
            index % 2 
            ?
                <FadeInOnScroll>
                    <div
                        className={`${bodyW} flex flex-row-reverse justify-between gap-16 mb-16`}>
                        <div
                            className="w-3/5">
                            <HeadingRight text={hobby.denumire}/>
                            {hobby.p.map((text, indexP) => (
                                <p 
                                    key={indexP}
                                    className="mb-8 text-right">
                                    {text}
                                </p>
                            ))}
                        </div>
                        <div>
                            <Image src={hobby.img} width={420} height={420} alt={hobby.img.slice(1, hobby.img.length - 3)}></Image>
                        </div>
                    </div>
                </FadeInOnScroll>
            :
            <FadeInOnScroll>
                <div
                    key={index}
                    className={`${bodyW} flex gap-16 items-center justify-between mb-16`}>
                        <div
                            className="w-3/5">
                            <div id={index === 0 ? "hobby" : ""}><Heading text={hobby.denumire}/></div>
                            {hobby.p.map((text, indexP) => (
                                <p
                                    key={indexP}
                                    className="mb-8">
                                        {text}
                                </p>
                            ))}
                        </div>
                        
                        <div>
                            <Image src={hobby.img} width={420} height={420} alt={hobby.img.slice(1, hobby.img.length - 3)}></Image>
                        </div>
                </div>
            </FadeInOnScroll>
        ))}
        <FadeInOnScroll>
            <div><Anchor text="main" type="end"/></div>
        </FadeInOnScroll>
    </section>
  )
}

export default Hobby