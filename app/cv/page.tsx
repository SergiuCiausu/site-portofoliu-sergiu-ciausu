import React from 'react'
import Hero from "@/app/components/Hero"
import CVBanner from './components/CVBanner'
import DespreMine from './components/DespreMine'
import ExperienteAnterioare from './components/ExperienteAnterioare'

const page = () => {
  return (
    <div>
        <Hero htext="lui Sergiu" evtext="CV-ul" ptext="Acesta este CV-ul meu, pe care l-am construit pe durata anilor de liceu, în încercarea de a demonstra că merit o șansă pentru a mă angaja de foarte tânăr." btext="Descarcă CV PDF" elementId="" />
        <CVBanner />
        <DespreMine />
        <ExperienteAnterioare />
    </div>
  )
}

export default page