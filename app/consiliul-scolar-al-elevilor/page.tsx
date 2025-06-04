import React from 'react'
import Hero from '../zari-alb-astre/components/Hero'
import DespreCSE from './components/DespreCSE'
import PosturiOcupate from './components/PosturiOcupate'
import LucrariCreate from './components/LucrariCreate'
import ContributiileMele from './components/ContributiileMele'
import FadeInOnLoad from '../components/FadeInOnLoad'
import Anchor from '../components/Anchor'
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
        <Hero h1="Consiliul Școlar al Elevilor" p="La CȘE CNMB m-am ocupat de toată partea de PR, adică reprezentarea pe social media și comunicarea cu cadre didactice, organizatori și alte persoane terțe." img="/consiliul-scolar-al-elevilor.JPG" link="https://drive.google.com/file/d/1BbWQleSvGx-hsU2oLus0O6-5FfaSxNyz/view?usp=drive_link" />
        <FadeInOnLoad><div className="mb-16"><Anchor text="main"/></div></FadeInOnLoad>
        <DespreCSE />
        <PosturiOcupate />
        <LucrariCreate />
        <ContributiileMele />
        <Ending />
    </div>
  )
}

export default page
