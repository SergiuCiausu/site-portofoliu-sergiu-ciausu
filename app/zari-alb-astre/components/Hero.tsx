import FadeInOnLoad from '@/app/components/FadeInOnLoad'
import Anchor from '@/app/cv/components/Anchor'
import { bodyW } from '@/app/variables/variables'
import React from 'react'
import "./hero.css"
import Link from 'next/link'
import Image from "next/image"

const Hero = ({ h1, p, img, link } : { h1: string, p: string, img: string, link: string }) => {
  return (
    <FadeInOnLoad>
        <section
            className={`${bodyW} flex items-center gap-8`}>
                <div
                    className="w-3/5">
                    <div className="mb-2"><Anchor text="header"/></div>
                    <h1
                        className="proiect-h1">
                        {h1}
                    </h1>
                    <p
                        className="proiect-p">
                        {p}
                    </p>
                    <Link href={link}><button className="mt-10 proiect-btn">Descarcă studiu de caz</button></Link>
                    <p
                        className="mt-2 proiect-btn-sidenote">
                            sau vezi prezentarea de mai jos
                    </p>
                    <div className="my-16"><Anchor text="header" type="end"/></div>
                </div>
                <div
                    className="flex-50">
                    <Image src={img} width={752} height={501} alt={img.slice(1, img.length - 3)}></Image>
                </div>
        </section>
        <div
            className="ascii-name flex justify-between">
                <span>01000011 01101001 01100001 01110101 01110011 01110101</span>
                <span>01010011 01100101 01110010 01100111 01101001 01110101</span>
                <span>01000001 01101110 01100100 01110010 01100101 01101001</span>
        </div>
    </FadeInOnLoad>
  )
}

export default Hero
