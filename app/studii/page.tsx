import React from 'react'
import Hero from '@/app/components/Hero'
import Studii from './components/Studii'
import Navbar from '../components/Navbar'
import FadeInOnLoad from '../components/FadeInOnLoad'
import Anchor from '../components/Anchor'
import { bodyW } from '../variables/variables'
import Ending from '../components/Ending'

const page = () => {
  return (
    <div>
        <Navbar />
        <div
            className={`${bodyW} mx-auto flex justify-center my-16`}>
              <FadeInOnLoad><Anchor text="body" /></FadeInOnLoad>
        </div>
        <Hero htext="lui Sergiu" evtext="Studiile" ptext="Faptul că nu locuiesc în Constanța m-a învățat o abilitate ce pare să fie foarte utilă în vioță: organizarea la nivel de minute a timpului meu." btext="Vezi studii" elementId="lter" />
        <Studii />
        <Ending />
    </div>
  )
}

export default page