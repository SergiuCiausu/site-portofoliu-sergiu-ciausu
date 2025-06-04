import Anchor from '@/app/components/Anchor'
import FadeInOnScroll from '@/app/components/FadeInOnScroll'
import H3 from '@/app/components/H3'
import Heading from '@/app/cv/components/Heading'
import React from 'react'
import Image from "next/image"
import { bodyW } from '@/app/variables/variables'
import HeadingRight from '@/app/cv/components/HeadingRight'
import Link from 'next/link'

const ProblemeIntampinate = () => {
  return (
        <section>
            <FadeInOnScroll>
                <div className="mt-16"><Anchor text="section" /></div>
                <div><H3 text="Problemele întâmpinate" /></div>
                <div
                    className={`${bodyW} flex justify-between`}>
                        <div
                            className="w-3/5">
                            <div><Heading text="Revista nu avea un format corespunzător" /></div>
                            <p>
                                Este adevărat, nu se așteaptă nimeni la o revistă școlară să poată fi comparată cu cele profesionale, tipărite de publicații prestigioase din România. <strong>Totuși, știam că am abilitățile necesare pentru a transforma aspectul revistei</strong>. Încă de când am participat la prima ședință de redacție, știam că fac parte dintr-o echipă care va fi de acord să lucreze împreună la avansarea revistei către următorul nivel.
                            </p>
                        </div>
                        <div>
                            <Image src="/revista-nu-avea-un-format-corespunzator.png" width={347} height={422} alt="revista nu avea un format corespunzator"></Image>
                        </div>
                </div>
            </FadeInOnScroll>
            <FadeInOnScroll>
            <div
                className={`${bodyW} flex flex-row-reverse justify-between gap-16 mb-16`}>
                <div
                    className="w-3/5">
                    <HeadingRight text="Revista nu avea o marcă proprie"/>
                    <p className="mb-8 text-right">
                        De la an la an, elemente de identitate ale revistei au fost schimbate. <strong>Logo-ul, paleta de culori, font-urile, dispunerea în pagină, modelul coperților -- toate acestea erau schimbate la fiecare 2-3 numere lansate</strong>. Astfel, am creat un brand cu indicații clare de folosință, în speranța de a ajuta revista atât în timpul în care făceam parte din redacție, cât și pentru cei care mă vor precede.
                    </p>
                    <p className="text-right">De asemenea, revista nu avea o identitate stabilită, pentru a putea promova articolele redactorilor în mediul online.</p>
                </div>
                <div>
                    <Image src="/revista-nu-avea-o-marca-proprie.jpg" width={384} height={538} alt="revista nu avea o marca proprie"></Image>
                </div>
            </div>
            </FadeInOnScroll>
            <FadeInOnScroll>
                <div
                    className={`${bodyW} flex items-center justify-between mb-16`}>
                        <div
                            className="w-3/5">
                            <Heading text="Existau articole primite care nu erau publicate nicăieri" />
                            <p>
                                Lucrul cel mai frustrant pentru redacție era acela că spațiul revistei era limitat. Acesta era un motiv de necăjire nu doar pentru cei care se ocupau de publicarea revistei, dar în special și pentru cei care scriau articolele, munca lor fiind în zadar. Astfel, alături de redacție -- și în special al unei colege cu multiple firme în IT -- am reușit să punem bazele unui site al revistei, care se numește <Link href="https://www.zarialbastre.ro/" className="underline"><strong>zarialbastre.ro!</strong></Link>
                            </p>
                        </div>
                        <div>
                            <Image src="/existau-articole-primite-care-nu-erau-publicate-nicaieri.png" width={558} height={180} alt="revista nu avea un format corespunzator"></Image>
                        </div>
                </div>
            </FadeInOnScroll>
            <FadeInOnScroll>
            <div
                className={`${bodyW} flex flex-row-reverse justify-between items-end gap-16 mb-16`}>
                <div
                    className="w-3/5">
                    <HeadingRight text="Titlurile articolelor din revistă aveau vizibilitate scăzută"/>
                    <p className="mb-8 text-right">
                        <strong>Titlul unui material face parte dintre acele elemente care ajută cititorul (sau, în general, audiența) să decidă dacă acel material merită parcurs, urmărit, sau citit</strong>. De aceea, titlul câștigă un grad însemnat de importanță și ar trebui să fie cât mai ușor vizibil.
                    </p>
                    <p className="text-right">Iar pentru articolele dintr-o revistă, titlul reprezintă, de multe ori, singurul element după care se ghidează un cititor. Așa că trebuia să ne asigurăm că acesta atrage atenția.</p>
                </div>
                <div>
                    <Image src="/titlul-articolelor-din-revista-aveau-o-vizibilitate-scazuta.jpg" width={621} height={443} alt="titlurile articolelor din revista aveau viziblitate scazuta" className="img-border"></Image>
                </div>
            </div>
            </FadeInOnScroll>
            <FadeInOnScroll>
                <div
                    className={`${bodyW} flex items-center justify-between mb-16`}>
                        <div
                            className="w-3/5">
                            <Heading text="Nu existau canale de promovare a revistei" />
                            <p>
                                Deși în revistă ajung, de obicei, doar articolele ce abordează teme cu cel mai mare potențial interes în rândul elevilor mirciști, pentru ca revista să poată fi citită de către aceștia, întâi trebuia să-i facem să o citească. <strong>Am desfășurat la Zări Alb Astre campanii de promovare pe Instagram și pe Facebook, cu obiective separate pe fiecare platformă</strong>, dar care să conducă atenția audienței către site-ul revistei.
                            </p>
                        </div>
                        <div>
                            <Image src="/nu-existau-canale-de-promovare-a-revistei.jpg" width={398} height={530} alt="revista nu avea un format corespunzator" className="img-border"></Image>
                        </div>
                </div>
            </FadeInOnScroll>
            <FadeInOnScroll>
            <div
                className={`${bodyW} flex flex-row-reverse justify-between items-end gap-16 mb-16`}>
                <div
                    className="w-3/5">
                    <HeadingRight text="Evenimentele din liceu nu erau publicate într-un mediu ușor de accesat"/>
                    <p className="mb-8 text-right">
                        Deși scopul principal al revistei Zări Alb Astre este de a lansa numere de revistă, <strong>în liceu aveau loc activități și evenimente ce nu puteau aștepta</strong> a fi anunțate sau dezvăluite până când se publica o nouă revistă. Era nevoie de o soluție prin care desfășurarea acestor evenimente putea ajunge la urechile elevilor, părinților și profesorilor din liceu.
                    </p>
                </div>
                <div>
                    <Image src="/evenimentele-din-liceu-nu-erau-publicate-intr-un-mediu-usor-de-accesat.jpg" width={380} height={538} alt="evenimentele din liceu nu erau publicate intr-un mediu usor de accesat"></Image>
                </div>
            </div>
            <div className="mt-16"><Anchor text="section" type="end" /></div>
            </FadeInOnScroll>
        </section>
  )
}

export default ProblemeIntampinate