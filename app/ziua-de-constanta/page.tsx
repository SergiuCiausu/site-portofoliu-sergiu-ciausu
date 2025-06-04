import React from 'react'
import Hero from '../zari-alb-astre/components/Hero'
import FadeInOnLoad from '../components/FadeInOnLoad'
import Anchor from '../components/Anchor'
import DespreZiua from './components/DespreZiua'
import PosturiOcupate from './components/PosturileOcupate'
import LucrariCreate from './components/LucrariCreate'
import ContributiileMele from './components/ContributiileMele'
import Navbar from '../components/Navbar'
import Ending from '../components/Ending'
import { bodyW } from '../variables/variables'

const page = () => {
  return (
    <div>
        <Navbar />
        <div
            className={`${bodyW} mx-auto flex justify-center my-16`}>
              <FadeInOnLoad><Anchor text="body" /></FadeInOnLoad>
        </div>
        <Hero h1="ZIUA de Constanța" p="La ZIUA de Constanța am publicat știri și am creat un sistem pentru consolidarea eficientă a prezenței online, atât pe Facebook, cât și pe Instagram." img="/ziua-de-constanta.jpg" link="https://drive.google.com/file/d/1Gojs8HMIe3Lo8HHAVrdQUWp-Py8u4VvY/view?usp=drive_link" />
        <FadeInOnLoad><div><Anchor text="main" /></div></FadeInOnLoad>
        <DespreZiua />
        <PosturiOcupate />
        <LucrariCreate />
        <ContributiileMele />
        <Ending />
    </div>
  )
}

export default page
