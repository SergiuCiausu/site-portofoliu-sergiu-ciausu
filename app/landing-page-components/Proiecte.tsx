import React from 'react'
import H3 from '../components/H3'
import Image from "next/image";
import { bodyW } from '../variables/variables';
import "./proiecte.css";
import Link from 'next/link';

const Proiecte = () => {

    const proiecte = [
        {
            titlu: "Edu Docs",
            descriere: "Website de „smart study” pentru elevii de liceu, cu toată materia prevăzută în programa școlară, pentru fiecare profil și specializare, cu elemente ce facilitează parcurgerea lecțiilor.",
            eticheta: "Proiect mare",
            imagine: "/edu-docs-banner.png",
            link: "https://github.com/SergiuCiausu/e-docs"
        },
        {
            titlu: "Case Smart",
            descriere: "Website de e-Commerce, ce vinde întrerupătoare, prize și alte produse electrice, fiind o refacere, pentru acest portofoliu, a site-ului deja existent.",
            eticheta: "Proiect complex",
            imagine: "/case-smart-banner.png",
            link: "https://github.com/SergiuCiausu/case-smart"
        },
        {
            titlu: "Make Me Fit",
            descriere: "Website de prezentare a cursurilor, axat mai mult pe design web și nu pe conținutul cursurilor sau funcționalități complexe.",
            eticheta: "Proiect estetic ;)",
            imagine: "/make-me-fit-banner.png",
            link: "https://github.com/SergiuCiausu/make-me-fit"
        },
        {
            titlu: "Smartcore",
            descriere: "Website de prezentare a cursurilor, acesta este proiectul pe care l-am construit pentru una dintre probele atestatului de unde am obținut certificarea de „ajutor analist programator”.",
            eticheta: "Proiect construit  în 3 zile",
            imagine: "/smartcore-banner.png",
            link: "https://github.com/SergiuCiausu/smartcore-final"
        },
    ]

  return (
    <section
        className="my-24">
        <div id="proiecte"><H3 text="Proiecte de web design & development"></H3></div>
        <div
            className={`${bodyW} flex gap-5`}>
            {proiecte.map((proiect, index) => (
                <Link
                    key={index}
                    href={proiect.link}
                    className="p-8 flex flex-25 flex-col"
                    target="_blank">
                        <div
                            className="relative mb-6">
                            <Image src={proiect.imagine} width={301} height={210} alt={proiect.imagine.slice(1, proiect.imagine.length - 3)}></Image>
                            <p
                                className={`eticheta ${proiect.titlu === "Make Me Fit" ? "eticheta-roz" : ""} absolute top-0 right-0`}>
                                    {proiect.eticheta}
                            </p>
                        </div>
                        <h5>
                            {proiect.titlu}
                        </h5>
                        <p
                            className="descriere">
                                {proiect.descriere}
                        </p>
                        <button
                            className="proiect-btn mt-4">
                                Vezi portofoliu
                        </button>
                </Link>
            ))}
        </div>
    </section>
  )
}

export default Proiecte
