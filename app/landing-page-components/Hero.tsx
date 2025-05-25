import React from 'react'
import { bodyW } from '../variables/variables'
import Anchor from '../components/Anchor'
import { Typewriter } from "react-simple-typewriter";
import FadeInOnLoad from "@/app/components/FadeInOnLoad";

const Hero = () => {

    const cuvinteEvidentiator = ["programator", "designer web", "designer grafic", "editor video", "iubitor de fitness", "fotograf"]

  return (
    <FadeInOnLoad>
        <section>
        <div
            className={`${bodyW} flex flex-col gap-8`}>
                <Anchor text="header" />
                <h1
                    className="titlu text-center">
                        <div
                            className="flex flex-col">
                            <span>Eu sunt <strong>Sergiu</strong> și sunt</span>
                            <span className="evidentiator-titlu ml-16">
                                <Typewriter
                                    words={cuvinteEvidentiator}
                                    loop={true}
                                    cursor
                                    cursorStyle="_"
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={2000}
                                />
                            </span>
                        </div>             
                </h1>
                <p
                    className="p-subtitlu">
                        Am 19 ani, am absolvit Colegiul Național „Mircea cel Bătrân” din Constanța și acesta este portofoliul meu de web design & development! Păstrez cât mai scurtă descrierea, prefer să-mi las faptele să vorbească :{`>`}
                </p>
                <button className="hero-cta-btn">Vezi portofoliu</button>
                <Anchor text="header" type="end"/>
        </div>
            <div
                className="ascii-name flex justify-between">
                    <span>01000011 01101001 01100001 01110101 01110011 01110101</span>
                    <span>01010011 01100101 01110010 01100111 01101001 01110101</span>
                    <span>01000001 01101110 01100100 01110010 01100101 01101001</span>
            </div>
        </section>
    </FadeInOnLoad>
  )
}

export default Hero;