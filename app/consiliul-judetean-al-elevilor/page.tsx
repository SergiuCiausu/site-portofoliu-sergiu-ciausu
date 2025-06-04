import React from 'react'
import Hero from '../zari-alb-astre/components/Hero'
import FadeInOnLoad from '../components/FadeInOnLoad'
import Anchor from '../components/Anchor'
import DespreCJE from './components/DespreCJE'
import PostOcupat from './components/PostOcupat'
import LucrariCreate from './components/LucrariCreate'
import Navbar from '../components/Navbar'
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
        <Hero h1="Consiliul Județean al Elevilor" p="În cadrul CJE Constanța am contribuit la creșterea audienței de pe Instagram și la solidificarea mărcii consiliului." img="/consiliul-judetean-al-elevilor.JPG" />
        <FadeInOnLoad><div className="mb-16"><Anchor text="main"/></div></FadeInOnLoad>
        <DespreCJE />
        <PostOcupat />
        <LucrariCreate />
        <Ending />
    </div>
  )
}

export default page