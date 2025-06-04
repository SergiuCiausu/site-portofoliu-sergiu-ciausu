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
                            <div><Heading text="Crearea unui sistem simplu de conceput postări "/></div>
                            <p
                                className="mb-16">
                                Am aplicat principii de design grafic într-o manieră simplă, ușor de replicat pentru viitoarele echipe de elevi ce vor alcătuit CȘE CNMB. Contrast mare, atât al culorilor, cât și al dimensiunilor de font și texturilor folosite, design ușor de parcurs, cu o cale vizuală clară, instinctuală și apsect compact, dar curat, pentru comunicarea eficientă a informațiilor.
                            </p>
                    </div>
                    <div
                        className="w-full flex justify-between">
                            <div>
                                <p
                                    className="before-text mb-2">
                                        Before
                                </p>
                                <Image src="/crearea-unui-sistem-simplu-de-conceput-postari-before.png" width={622} height={826} alt="profil cse cnmb before"></Image>
                            </div>
                            <div>
                                <p
                                    className="after-text mb-2">
                                        After
                                </p>
                                <Image src="/despre-cse-cnmb.jpg" width={622} height={826} alt="profil cse cnmb after"></Image>
                            </div>
                        </div>
                    </div>
                </FadeInOnScroll>
                <FadeInOnScroll>
                    <div
                        className={`${bodyW} flex flex-row-reverse items-end gap-16 mb-16`}>
                        <div
                            className="w-3/5">
                            <HeadingRight text="Organizarea de evenimente pe baza intereselor elevilor"/>
                            <p className="mb-8 text-right">
                                Am desfășurat o activitate simbolică, cu ocazia Valetine’s day, în care <strong>elevii din Mircea puteau să trimită scrisori prietenilor din liceele Ovidius și Mihai Eminescu</strong>, și viceversa. 
                            </p>
                            <p className="mb-8 text-right">
                                De asemenea, <strong>am organizat trei ediții ale seriei de ateliere „Combinând pasiunea și cariera”</strong>, unde am invitat specialiști din domeniile: medicină, drept, respectiv psihoterapie, pentru a le prezenta elevilor mirciști bazele domeniului, viața la facultate, oportunități de carieră pe viitor, etc.
                            </p>
                        </div>
                        <div>
                            <Image src="/organizarea-de-evenimente-pe-baza-intereselor-elevilor.JPG" width={622} height={415} alt="secret feelings de valentine's day"></Image>
                        </div>
                    </div>
                </FadeInOnScroll>
                <FadeInOnScroll>
                    <div
                        className={`${bodyW} flex items-end gap-16 mb-16`}>
                        <div className="w-3/5">
                            <div><Heading text="Imortalizarea evenimentelor desfășurate"/></div>
                            <p className="mb-8">
                               <strong>Pe lângă cele două posturi pe care le-am ocupat, m-am oferit să fiu și fotograf</strong> în cadrul activităților pe care le organizam și să surprind momentele cheie ce rezumau cele întâmplate, cu scopul de a ne promova activitatea pe Instagram și de a atrage mai mulți elevi să participe la evenimentele noastre..
                            </p>
                        </div>
                        <div>
                            <Image src="/imortalizarea-evenimentelor-desfasurate.JPG" width={620} height={413} alt="imortalizarea evenimentelor desfasurate"></Image>
                        </div>
                    </div>
                <div className="mt-16"><Anchor text="section" type="end"/></div>
                <div className="mt-16"><Anchor text="main" type="end"/></div>
                </FadeInOnScroll>
        </section>
  )
}

export default ContributiileMele