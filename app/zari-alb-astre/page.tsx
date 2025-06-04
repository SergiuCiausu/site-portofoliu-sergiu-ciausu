import React from 'react'
import Hero from './components/Hero'
import Anchor from '../components/Anchor'
import DespreZari from './components/DespreZari'
import PosturiOcupate from './components/PosturiOcupate'
import LucrariCreate from './components/LucrariCreate'
import ContributiileMele from './components/ContributiileMele'
import FadeInOnLoad from '../components/FadeInOnLoad'
import ProblemeIntampinate from './components/ProblemeIntampinate'
import Sarcini from './components/Sarcini'
import SolutiiAplicate from './components/SolutiiAplicate'
import RezutateleObtiunte from './components/RezutateleObtiunte'
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
        <Hero h1="Zări Alb Astre" p="Revista Colegiului Național „Mircea cel Bătrân” Constanța, pe care am transformat-o în prima revistă de liceu dobrogeană cu propria prezență online!" img="/zari-alb-astre-mockup-hero.png"/>
        <FadeInOnLoad><div className="mb-16"><Anchor text="main"/></div></FadeInOnLoad>
        <DespreZari />
        <PosturiOcupate />
        <LucrariCreate />
        <ContributiileMele />
        <ProblemeIntampinate />
        <Sarcini />
        <SolutiiAplicate />
        <RezutateleObtiunte />
        <Ending />
    </div>
  )
}

export default page