"use client";

import React from 'react'
import { bodyW } from '@/app/variables/variables'
import Anchor from '@/app/components/Anchor'
import FadeInOnLoad from "@/app/components/FadeInOnLoad";
import Link from 'next/link';

const Hero = ({ htext, evtext, ptext, btext, elementId, link }: { htext: string, evtext: string, ptext: string, btext: string, elementId: string, link?: string }) => {

    const ctaBtnClick = () => {
        const target = document.getElementById(elementId);

        console.log(document.getElementById(elementId));
        console.log(elementId);
        const rect = target!.getBoundingClientRect();

        console.log("Clicked, ", target);

        window.scrollTo({
            top: rect.top + window.pageYOffset - 150,
            behavior: "smooth"
        })
    }

  return (
    <FadeInOnLoad>
        <section>
        <div
            className={`${bodyW} flex flex-col gap-8`}>
                <Anchor text="header" />
                <h1
                    className="titlu text-center">
                        <div
                            className="flex justify-center items-end gap-4">
                            <span className="evidentiator-titlu">{evtext}</span>
                            <span><strong>{htext}</strong></span>   
                        </div>             
                </h1>
                <p
                    className="p-subtitlu">
                        {ptext}
                </p>
                <button className="hero-cta-btn" onClick={ctaBtnClick}>{link ? <Link href={link} target="_blank">{btext}</Link>: btext}</button>
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