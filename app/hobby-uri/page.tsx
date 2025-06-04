import React from 'react'
import Hero from '../components/Hero'
import Hobby from './components/Hobby'
import Ending from '../components/Ending'
import Navbar from '../components/Navbar'
import FadeInOnLoad from '../components/FadeInOnLoad'
import { bodyW } from '../variables/variables'
import Anchor from '../components/Anchor'

const page = () => {
  return (
    <div>
        <Navbar />
        <div
            className={`${bodyW} mx-auto flex justify-center my-16`}>
              <FadeInOnLoad><Anchor text="body" /></FadeInOnLoad>
        </div>
        <Hero htext="lui Sergiu" evtext="Hobby-urile" ptext="Activitățile prin care încerc să devin un bărbat complet, capabil să întemeieze o familie și să crească copii extraordinari." btext="Vezi hobby-uri" elementId="hobby" />
        <Hobby />
        <Ending />
    </div>
  )
}

export default page