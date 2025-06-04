import React from 'react'
import Image from "next/image"
import Link from 'next/link'

const Sectiune3 = () => {

    const cursuri = [
        {
            titlu: "Cursul 1: Joaca nu e doar pentru copii — cum să-ți transformi munca într-un joc pe care vrei să-l maxezi",
            durata: "1 săptămână",
            beneficii: [
                "Creezi o listă cu cele mai importante sarcini și obiective și să o prelucrezi într-un mod în care îți va permite ca îndeplinirea lor să se simtă ca parcurgerea unui joc",
                "Îți schimbi mentalitatea cu privire la muncă pentru a putea da cel mai bun randament cu efort scăzut",
                "Să-ți organizezi timpul pentru ca „jocul” să aibă și perioade de relaxare"
            ],
            link: "smartcore/cursul-1"
        },
        {
            titlu: "Cursul 2: Motivație fără efort — cum să-ți găsești energia să muncești la capacitate maximă (și de ce ar trebui să faci asta)",
            durata: "1 săptămână",
            beneficii: [
                "Accesezi cele mai adânci resurse de motivație, energie, și concentrare din mintea ta folosind niște tehnici mentale pe care cei mai bogați angajați și antreprenori le adoră",
                "Înțelegi motivele pentru care este important să-ți dezvolți abilitatea de a munci fără motivație",
                "Îți creezi modele mentale pe care să le folosești de fiecare dată când nu-ți poți găsi cheful de muncă"
            ],
            link: "smartcore/cursul-2"
        },
        {
            titlu: "Cursul 3: Joacă-ți ziua cu cap — cum să-ți creezi o rutină zilnică de care să-ți fie imposibil să nu te ții",
            durata: "2 zile",
            beneficii: [
                "Îți creezi o serie de pași care alcătuiesc rutina ta zilnică de dimineață și de seară, precum și din timpul zilei, care să-ți permită să ai mai multă motivație și energie pe timpul zilelor",
                "Te ții de anumite obiective personale pe care ți le-ai fixat, precum antrenamente în sală, alergat, slăbit, rutină de îngrijire personală și multe altele",
                "Îți formezi o mentalitate prin care să prețuiești fiecare zi care îți este dată, folosind o atitiudine care-ți va face mult mai ușoare zilele de muncă"
            ],
            link: "smartcore/cursul-3"
        }
    ]

    const formulare_beneficii = "Acest curs te va ajuta să:"

  return (
    <section
        className="w-[1120px] mx-auto">
        <div
            className="w-full flex flex-col items-center gap-16">
            <h3 className="w-[576px] text-center">Aruncă o privire prin cursurile noastre</h3>
            <div
                className="flex flex-col gap-32">
                    {cursuri.map((curs, index) => (
                        !(index % 2)
                        ?   
                        <div
                            className="flex gap-16">
                            <div
                                className="flex-50">
                                <h5 id={`cursul-${index + 1}`}>{curs.titlu}</h5>
                                <p>
                                    {formulare_beneficii}
                                    <ul
                                        className="list-disc list-inside ps-16">
                                        {curs.beneficii.map(beneficiu =>(
                                            <li>{beneficiu}</li>
                                        ))}
                                    </ul>
                                </p>
                                <button className="px-8 lp-btn mt-4 cursor-pointer"><Link href={`/${curs.link}`}><p className="bold white-color">Înscrie-te în curs</p></Link></button>
                            </div>
                            <div
                                className="flex-50">
                                    <Image src={`/cursul-${index + 1}-img.jpg`} width={1229} height={921} alt="curs banner"></Image>
                            </div>
                        </div>
                        :
                        <div
                            className="flex gap-16">
                                <div
                                    className="flex-50">
                                        <Image src={`/cursul-${index + 1}-img.jpg`} width={1229} height={921} alt="curs banner"></Image>
                                </div>
                                <div
                                    className="flex-50">
                                    <h5 id={`cursul-${index + 1}`}>{curs.titlu}</h5>
                                    <p>
                                        {formulare_beneficii}
                                        <ul
                                            className="list-disc list-inside ps-16">
                                            {curs.beneficii.map(beneficiu =>(
                                                <li>{beneficiu}</li>
                                            ))}
                                        </ul>
                                    </p>
                                    <button className="px-8 lp-btn mt-4 cursor-pointer"><Link href={`/${curs.link}`}><p className="bold white-color">Înscrie-te în curs</p></Link></button>
                                </div>
                        </div>
                        
                    ))}
            </div>
        </div>
    </section>
  )
}

export default Sectiune3