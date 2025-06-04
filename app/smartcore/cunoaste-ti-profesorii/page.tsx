import React from 'react'
import Navbar from '../components/Navbar'
import Image from 'next/image'

const page = () => {

  const profesori = [
    {
      nume: "Ciaușu Sergiu-Andrei",
      poza: "/sergiu-ciausu.png",
      descriere: "Ciaușu Sergiu-Andrei este un elev din clasa a XII-a A din cadrul Colegiului Național „Mircea cel Bătrân” Constanța, care a participat la diverse activități de voluntariat, menite să dezvolte spiritul de colaborare în echipă și să inspire elevii să deprindă o mentalitate bazată pe dezvoltare. Acesta a fost redactor-șef la revista „Zări Alb Astre” a liceului, a fost director al Departamentului de PR și comunicare din cadrul Consiliului Județean al Elevilor Constanța și Consiliul Școlar al Elevilor CNMB Constanța, unde a promovat vocea, gândurile și interesele elevilor în scopul facilitării unui mediu prielnic exprimării libere."
    },
    {
      nume: "Fifere Șerban-Alexandru",
      poza: "/serban-fifere.jpg",
      descriere: "Fifere Șerban-Alexandru este un elev din clasa a XII-a A din cadrul Colegiului Național „Mircea cel Bătrân” Constanța, care a participat în repetare rânduri la olimpiadele de limbi străine, reușind să se calificeî o dată la etapa națională a Olimpiadei de Limbă Engleză. Acesta a deprins particularitățile care alcătuiesc un caracter greu de doborât și a învățat tainele exprimării nu doar în scris, ci și verbal."
    }
  ]

  return (
    <div>
      <Navbar />
      <h1 className="mt-16 mb-8 w-[1120px] mx-auto">Cunoaște-ți profesorii</h1>
      {profesori.map((profesor, index) => (
        index % 2 
        ?
        <div
          className="flex gap-8 w-[1120px] mx-auto mb-16">
          <div
            className="flex-50">
            <Image src={profesor.poza} width={600} height={400} alt="poza serban"></Image>
          </div>
          <div
            className="flex-50 flex flex-col gap-2">
            <h5>{profesor.nume}</h5>
            <p>
              {profesor.descriere}
            </p>
          </div>
        </div>
        : 
        <div
          className="flex gap-8 w-[1120px] mx-auto mb-16">
            <div
                className="flex-50 flex flex-col gap-2">
                <h5>{profesor.nume}</h5>
                <p>
                  {profesor.descriere}
                </p>
              </div>
            <div
              className="flex-50">
              <Image src={profesor.poza} width={600} height={400} alt="poza serban"></Image>
            </div>
          </div>
      ))}
    </div>
  )
}

export default page