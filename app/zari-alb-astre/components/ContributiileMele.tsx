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
                    className={`${bodyW} flex flex-col gap-16 mb-16`}>
                    <div
                        className="w-3/5">
                            <div><Heading text="Aspectul modern al revistei"/></div>
                            <p
                                className="mb-16">
                                Încă din prima zi în care m-am alăturat redacției Zări Alb Astre, <strong>am avut în gând să-mi pun la treabă toate abilitățile pe care le acumulez</strong>. Această motivație, dar și nevoia de o refacere a mărcii revistei cu ocazia unui an aniversar -- 75 de ani de publicație -- au dus la o transformare completă a atât al aspectului revistei, cât și al întregului brand Zări Alb Astre.
                            </p>
                    </div>
                    <div
                        className="w-full flex justify-between">
                            <div>
                                <p
                                    className="before-text mb-2">
                                        Before
                                </p>
                                <Image src="/revista-zari-alb-astre-2021.jpg" width={602} height={429} alt="revista zari alb astre 2021"></Image>
                                <p 
                                    className="before-text mt-4">
                                        Revista Zări Alb Astre 2021
                                </p>
                            </div>
                            <div>
                                <p
                                    className="before-text mb-2">
                                        After
                                </p>
                                <Image src="/revista-zari-alb-astre-2023.jpg" width={602} height={429} alt="revista zari alb astre 2023"></Image>
                                <p 
                                    className="before-text mt-4">
                                        Revista Zări Alb Astre 2023
                                </p>
                            </div>
                        </div>
                    </div>
                </FadeInOnScroll>
                <FadeInOnScroll>
                    <div
                        className={`${bodyW} flex flex-row-reverse items-end gap-16 mb-16`}>
                        <div>
                            <HeadingRight text="Ședințe de lucru cu redacția"/>
                            <p className="mb-8 text-right">
                                Am fost unul dintre liderii unei <strong>redacții formate din peste 50 de elevi mirciști</strong>, colegi care au fost serioși și pe care am reușit să-i convingem că <strong>Zări Alb Astre este un proiect de luat în serios</strong>.
                            </p>
                            <p className="mb-8 text-right">Ședințele erau organizate de două ori pe lună, iar în cadrul lor discutam idei de articole, dezbăteam idei pentru articolele în lucru și veneam cu idei noi de postări, proiecte și activități de desfășurat în liceu pentru extinderea popularității revistei.</p>
                        </div>
                        <div>
                            <Image src="/sedinte-de-lucru-cu-redactia.jpg" width={1300} height={1200} alt="reviste zari alb astre"></Image>
                        </div>
                    </div>
                </FadeInOnScroll>
                <FadeInOnScroll>
                    <div
                        className={`${bodyW} flex items-end gap-16 mb-16`}>
                        <div className="w-3/5">
                            <div><Heading text="Demersuri jurnalistice"/></div>
                            <p className="mb-8">
                                Niciodată nu s-a pus problema la Zări Alb Astre să nu fie ceva de făcut. Și dacă nu era, mereu mi-a plăcut să-mi fac de lucru. <strong>De la interviuri simple, cu 1-2 persoane, la coordonarea pe durata unui eveniment complex, în care redactorii alergau de la un olimpic la altul pentru a le lua interviuri</strong>, am făcut tot posibilul ca revista Zări Alb Astre să fie o publicație a tinerilor, care merită citită.
                            </p>
                            <p>
                                <Link href="https://www.zarialbastre.ro/2023/05/28/reusitele-tuturor-elevilor-geniali-de-la-mircea-au-fost-premiate/" target="_blank" className="underline"><strong>Articolul meu preferat pe care îl consider un „demers jurnalistic” poate fi citit aici.</strong></Link>
                            </p>
                        </div>
                        <div>
                            <Image src="/demersuri-jurnalistice.jpg" width={1300} height={1200} alt="reviste zari alb astre"></Image>
                        </div>
                    </div>
                <div className="mt-16"><Anchor text="section" type="end"/></div>
                </FadeInOnScroll>
        </section>
  )
}

export default ContributiileMele