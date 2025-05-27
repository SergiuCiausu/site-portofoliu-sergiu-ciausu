import React from 'react'
import Hero from '@/app/components/Hero'
import Studii from './components/Studii'

const page = () => {
  return (
    <div>
        <Hero htext="lui Sergiu" evtext="Studiile" ptext="Faptul că nu locuiesc în Constanța m-a învățat o abilitate ce pare să fie foarte utilă în vioță: organizarea la nivel de minute a timpului meu." btext="Vezi studii" elementId="lter" />
        <Studii />
    </div>
  )
}

export default page