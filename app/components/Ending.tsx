"use client";

import React from 'react'
import FadeInOnScroll from './FadeInOnScroll'
import Anchor from './Anchor'
import { bodyW } from '../variables/variables'
import H3 from './H3'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Ending = () => {

    const pathName = usePathname();

  return (
    <FadeInOnScroll>
        <section
            className="my-24">
                <Anchor text="section" />
                <H3 text="Nu ești convins dacă m-aș potrivi în echipa ta?" />
                <div
                    className={`${bodyW} flex justify-center`}>
                        <Link href={pathName}><button className="hero-cta-btn">Vezi portofoliu</button></Link>
                </div>
                <div className="mt-4 mb-16"><Anchor text="section" type="end"/></div>
                <div className="mt-4 mb-16"><Anchor text="body" type="end"/></div>
        </section>
    </FadeInOnScroll>
  )
}

export default Ending