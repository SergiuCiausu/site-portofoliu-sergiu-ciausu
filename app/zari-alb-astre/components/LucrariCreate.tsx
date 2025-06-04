import FadeInOnScroll from '@/app/components/FadeInOnScroll'
import H3 from '@/app/components/H3'
import Heading from '@/app/cv/components/Heading'
import { bodyW } from '@/app/variables/variables'
import Link from 'next/link'
import React from 'react'
import Image from "next/image"
import HeadingRight from '@/app/cv/components/HeadingRight'
import Anchor from '@/app/components/Anchor'

const LucrariCreate = () => {
  return (
        <section>
            <FadeInOnScroll>
                <div className="mt-16"><Anchor text="section"/></div>
                <div><H3 text="Lucrări create" /></div>
                <div
                    className={`${bodyW} flex gap-16 mb-16`}>
                    <div className="w-3/5">
                        <div><Heading text="Reviste"/></div>
                        <p className="mb-8">
                            De-a lungul perioadei mele petrecute la Zări Alb Astre, <strong>am contribuit la tehnoredactarea a două numere de revistă</strong>, amândouă fiind premiate cu locul întâi la concursul de reviste școlare din Dobrogea.
                        </p>
                        <p className="mb-8">Puteți accesa cele două reviste în format digital, pe site-ul <Link href="https://www.zarialbastre.ro/" target="_blank" className="underline"><strong>zarialbastre.ro</strong></Link>, mai jos:</p>
                        <ul
                            className="list-disc ml-4">
                            <li><Link href="https://www.zarialbastre.ro/arhiva/#dearflip-df_1757/1/" target="_blank" className="underline"><strong>Revista Zări Alb Astre, volum aniversar de 75 de ani, publicat în mai 2022</strong></Link></li>
                            <li><Link href="https://www.zarialbastre.ro/arhiva/#dearflip-df_7768/1/" target="_blank" className="underline"><strong>Revista Zări Alb Astre, publicat în mai 2023</strong></Link></li>
                        </ul>
                    </div>
                    <div>
                        <Image src="/lucrari-create-reviste.png" width={1300} height={1200} alt="reviste zari alb astre"></Image>
                    </div>
                </div>
            </FadeInOnScroll>
            <FadeInOnScroll>
            <div
                className={`${bodyW} flex flex-row-reverse gap-16 mb-16`}>
                <div>
                    <HeadingRight text="Postere"/>
                    <p className="mb-8 text-right">
                        Pentru ca articolele redactorilor să fie citite și revista să fie cunoscută de elevi, <strong>am desfășurat multiple campanii de promovare cu materiale printate</strong>, lipite pe holurile și prin clasele liceului.
                    </p>
                    <p className="mb-8 text-right">Pentru o listă cu toate posterele, bannerele și broșurile pe care le-am creat la redacție, <Link href="https://drive.google.com/drive/folders/1JjPEQ8Cbw-yjabTn1HPh44pDLNkIC8I2?usp=drive_link" className="underline">apăsați aici</Link>.</p>
                </div>
                <div>
                    <Image src="/lucrari-create-postere.jpg" width={1300} height={1200} alt="reviste zari alb astre"></Image>
                </div>
            </div>
            </FadeInOnScroll>
            <FadeInOnScroll>
            <div
                className={`${bodyW} flex gap-16 mb-16`}>
                <div className="w-3/5">
                    <div><Heading text="Postări"/></div>
                    <p className="mb-8">
                        Eforturile de promovare a articolelor din revista Zări Alb Astre au fost făcute și pe platformele de socializare, unde adolescenții și tinerii sunt activi. Am postat regulat pe <strong>Instagram și Facebook</strong>, ceea ce ne diversifica impactul: Instagram-ul era folosit pentru anunțarea noutăților din liceu și legate de revistă, pe când Facebook-ul era folosit mai mult pentru marcarea unor evenimente recent petrecute, precum și pentru prezentarea noilor articole ce își făceau apariția pe site-ul <Link href="https://www.zarialbastre.ro/" target="_blank" className="underline"><strong>zarialbastre.ro</strong></Link>.
                    </p>
                    <Link href="https://www.instagram.com/zari.alb.astre/" target="_blank" className="underline"><strong>Instagram: @zari.alb.astre</strong></Link>
                    <Link href="https://www.facebook.com/revistazarialbastre?locale=ro_RO" target="_blank" className="underline"><strong>Facebook: Zări Alb Astre</strong></Link>
                </div>
                <div>
                    <Image src="/lucrari-create-postari.png" width={1300} height={1200} alt="reviste zari alb astre"></Image>
                </div>
            </div>
            <div className="mt-16"><Anchor text="section" type="end"/></div>
            </FadeInOnScroll>
        </section>
  )
}

export default LucrariCreate