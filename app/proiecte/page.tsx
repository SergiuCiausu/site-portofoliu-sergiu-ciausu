import React from 'react'
import Hero from '../components/Hero'
import Anchor from '../components/Anchor'
import Proiecte from '@/app/proiecte/components/Proiecte'
import Navbar from '../components/Navbar'
import FadeInOnLoad from '../components/FadeInOnLoad'
import { bodyW } from '../variables/variables'
import Ending from '../components/Ending'
import "@/app/globals.css"

const page = () => {
  return (
    <div>
        <Navbar />
        <div
            className={`${bodyW} mx-auto flex justify-center my-16`}>
              <FadeInOnLoad><Anchor text="body" /></FadeInOnLoad>
        </div>
        <Hero htext="lui Sergiu" evtext="Proiectele" ptext="Mai jos puteți să aruncați o privire prin fiecare proiect pe care l-am pregătit pentru portofoliul meu." btext="Vezi proiecte" elementId="proiect"/>
        <Anchor text="main"/>
        <Proiecte />
        <Ending />
    </div>
  )
}

export default page