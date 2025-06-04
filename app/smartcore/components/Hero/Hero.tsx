"use client";

import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image'

type imgFuncProps = {
  imgFunc: (curs: string) => void;
}

const Hero = ({titlu, subtitlu, buton, isLP, imgFunc}: {
  titlu: string,
  subtitlu: string,
  buton: string,
  isLP?: boolean,
  imgFunc?: imgFuncProps
}) => {

  const [isImg1Hover, setIsImg1Hover] = useState<boolean>(false);
  const [isImg2Hover, setIsImg2Hover] = useState<boolean>(false);
  const [isImg3Hover, setIsImg3Hover] = useState<boolean>(false);

    const handleImgClick = (curs: string, event: MouseEvent) => {
        imgFunc(curs, event);
    }

  return (
    <section
        className="w-[1120px] mx-auto pt-[144px] pb-[256px] flex gap-32">
        <div
            className="w-[700px]">
            <h1
                className="mb-4">
                {titlu}
            </h1>
            <p className="mb-8">{subtitlu}</p>
            <button className="px-12 py-2 smartcore-hero-cta-btn cursor-pointer"><Link href="/smartcore"><p className="bold white-color smartcore-hero-cta-btn-text">{buton}</p></Link></button>
        </div>
        <div
          className="flex-1 flex flex-col items-center">
            <div
              className="flex gap-4 relative">
              {isLP 
              ?
              <Link
                href="#cursul-1" onClick={(event) => handleImgClick("cursul-1", event)}>
                  <div
                    className="circle-img" onMouseEnter={() => setIsImg1Hover(true)} onMouseLeave={() => setIsImg1Hover(false)} onClick={(event) => handleImgClick("cursul-1", event)}>
                    <Image src={`/treime-stanga${isImg1Hover ? "-hover" : ""}.png`} width={234} height={356} alt="1/3 circle image" className="cursor-pointer" onMouseEnter={() => setIsImg1Hover(true)} onMouseLeave={() => setIsImg1Hover(false)} onClick={(event) => handleImgClick("cursul-1", event)}></Image>
                    <p
                      className="absolute top-20 left-8 circle-text font-bold cursor-pointer" onMouseEnter={() => setIsImg1Hover(true)} onMouseLeave={() => setIsImg1Hover(false)} onClick={(event) => handleImgClick("cursul-1", event)}>
                      Cursul 1
                    </p>
                  </div>
              </Link>
              : ""}
              {isLP
              ?
                <Link
                  href="#cursul-2" onClick={(event) => handleImgClick("cursul-2", event)}>
                    <div
                    className="circle-img" onMouseEnter={() => setIsImg2Hover(true)} onMouseLeave={() => setIsImg2Hover(false)} onClick={(event) => handleImgClick("cursul-2", event)}>
                    <Image src={`/treime-dreapta${isImg2Hover ? "-hover" : ""}.png`} width={234} height={356} alt="1/3 circle image" className="cursor-pointer" onMouseEnter={() => setIsImg2Hover(true)} onMouseLeave={() => setIsImg2Hover(false)} onClick={(event) => handleImgClick("cursul-2", event)}></Image>
                    <p
                      className="absolute top-20 right-9 circle-text font-bold cursor-pointer" onMouseEnter={() => setIsImg2Hover(true)} onMouseLeave={() => setIsImg2Hover(false)} onClick={(event) => handleImgClick("cursul-2", event)}>
                      Cursul 2
                    </p>
                  </div>
                </Link>
              : ""}    
            </div>
            {isLP 
            ?
            <Link
              href="#cursul-3" onClick={(event) => handleImgClick("cursul-3", event)} className="absolute top-104 circle-img-bottom">
              <div onMouseEnter={() => setIsImg3Hover(true)} onMouseLeave={() => setIsImg3Hover(false)} onClick={(event) => handleImgClick("cursul-3", event)}>
                <Image src={`/treime-jos${isImg3Hover ? "-hover" : ""}.png`} width={234} height={356} alt="1/3 circle image" className="cursor-pointer" onMouseEnter={() => setIsImg3Hover(true)} onMouseLeave={() => setIsImg3Hover(false)} onClick={(event) => handleImgClick("cursul-3", event)}></Image>
                <p
                    className="absolute bottom-7 left-21 circle-text font-bold cursor-pointer" onMouseEnter={() => setIsImg3Hover(true)} onMouseLeave={() => setIsImg3Hover(false)} onClick={(event) => handleImgClick("cursul-3", event)}>
                    Cursul 3
                </p>
              </div>
            </Link>
            : ""}
        </div>
    </section>
  )
}

export default Hero