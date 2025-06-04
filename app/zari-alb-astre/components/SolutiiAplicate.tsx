import Anchor from '@/app/components/Anchor'
import FadeInOnScroll from '@/app/components/FadeInOnScroll'
import H3 from '@/app/components/H3'
import Heading from '@/app/cv/components/Heading'
import { bodyW } from '@/app/variables/variables'
import React from 'react'
import Image from 'next/image'
import HeadingRight from '@/app/cv/components/HeadingRight'
import Link from 'next/link'

const SolutiiAplicate = () => {
  return (
    <section>
        <FadeInOnScroll>
            <div className="mt-16"><Anchor text="section"/></div>
            <H3 text="Soluțiile aplicate la redacție" />
            <div
                className={`${bodyW} flex justify-between gap-16 mb-16`}>
                    <div
                        className="w-3/5">
                        <Heading text="Branding folosind cele mai bune practici" />
                        <p>
                            Am creat un logo modern, ușor de recunoscut, ce sugerează ideea de revistă, de articole și de creație. Numele de Zări Alb Astre exprimă un peisaj marin, când soarele „luminează” mințile celor care citesc articolele revistei. De asemenea, am compus și o paletă de culori, un sistem tipografic și un sistem de design pentru postări, <Link href="https://drive.google.com/drive/folders/1JjPEQ8Cbw-yjabTn1HPh44pDLNkIC8I2?usp=drive_link" target="_blank" className="underline"><strong>pe care le puteți vedea în lucrările de aici</strong></Link>.
                        </p>
                    </div>
                    <div>
                        <Image src="/branding-folosind-cele-mai-bune-practici.png" width={545} height={323} alt="branding folosind cele mai bune practici"></Image>
                    </div>
            </div>
        </FadeInOnScroll>
        <FadeInOnScroll>
            <div
                className={`${bodyW} flex flex-row-reverse justify-between gap-16 mb-16`}>
                <div
                    className="w-3/5">
                    <HeadingRight text="Instaurarea unei așezări riguroase în pagină"/>
                    <p className="mb-8 text-right">
                        Revista este elementul central de la Zări Alb Astre, <strong>așa că modul în care erau puse în pagină articolele trebuia să tindă spre perfecțiune</strong>. O combinație între ghidarea cititorului prin conținutul revistei și latura creativă, evidentă în cadrul redacției. 
                    </p>
                </div>
                <div>
                    <Image src="/instaurarea-unei-asezari-riguroase-in-pagina.jpg" width={621} height={440} alt="revista nu avea o marca proprie" className="img-border"></Image>
                </div>
            </div>
            </FadeInOnScroll>
            <FadeInOnScroll>
                <div
                    className={`${bodyW} flex items-center justify-between mb-16`}>
                        <div
                            className="w-3/5">
                            <Heading text="Lansarea site-ului zarialbastre.ro" />
                            <p>
                                Deși nu am contribuit la construirea propriu-zisă a site-ului, am ajutat la popularea acestuia cu articole și la aplicarea normelor de branding pe care le-am creat. Totuși, știam să administrez site-ul, să urc articole și să fac modificări la setările acestuia acolo unde era necesar (din consola WordPress sau în editorul Elementor).
                            </p>
                        </div>
                        <div>
                            <Image src="/mockup-site-zari-solutii-2.png" width={585} height={423} alt="revista nu avea un format corespunzator"></Image>
                        </div>
                </div>
            </FadeInOnScroll>
            <FadeInOnScroll>
            <div
                className={`${bodyW} flex flex-row-reverse justify-between gap-16 mb-16`}>
                <div
                    className="w-3/5">
                    <HeadingRight text="Crearea unor modele de postări"/>
                    <p className="mb-8 text-right">
                        Articolele pe care le publicam în revistă sau pe site nu aveau relevanță și nu puteau să-și împrăștie valoarea fără ca cititorii să știe de existența lor. <strong>Astfel, am creat două modele de postări pe care le-am repetat, pentru a crea un pattern estetic</strong>, prin care să exprimăm ideea de excelență.
                    </p>
                </div>
                <div>
                    <Image src="/crearea-unor-modele-de-postari.jpg" width={370} height={491} alt="revista nu avea o marca proprie" className="img-border"></Image>
                </div>
            </div>
            <div className="mt-16"><Anchor text="section" type="end"/></div>
            </FadeInOnScroll>
    </section>
  )
}

export default SolutiiAplicate