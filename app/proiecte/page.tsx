import React from 'react'
import Hero from '../components/Hero'
import Anchor from '../components/Anchor'
import Proiecte from '@/app/proiecte/components/Proiecte'

const page = () => {
  return (
    <div>
        <Hero htext="lui Sergiu" evtext="Proiectele" ptext="Mai jos puteți să aruncați o privire prin fiecare proiect pe care l-am pregătit pentru portofoliul meu." btext="Vezi proiecte" elementId="proiect"/>
        <Anchor text="main"/>
        <Proiecte />
    </div>
  )
}

export default page