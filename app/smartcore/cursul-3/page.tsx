import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero/Hero'
import Sectiune1 from './Sectiuni/Sectiune1'
import Sectiune2 from './Sectiuni/Sectiune2'
import Sectiune3 from './Sectiuni/Sectiune3'
import Link from 'next/link'

const page = () => {
  return (
    <div>
      <Navbar />
      <Hero titlu="Joacă-ți ziua cu cap" subtitlu="Cum să-ți creezi o rutină zilnică de care să-ți fie imposibil să nu te ții." buton="Înscrie-te acum" />
      <div
        className="flex flex-col gap-16 mb-32">
            <div
                className="flex flex-col gap-32">
                <Sectiune1 />
                <Sectiune2 />
                <Sectiune3 />
            </div>
            <div
                className="flex justify-center">
                <button className="px-12 py-2 smartcore-hero-cta-btn cursor-pointer w-fit"><Link href="/smartcore"><p className="bold white-color smartcore-hero-cta-btn-text">Înscrie-te acum</p></Link></button>
            </div>
      </div>
    </div>
  )
}

export default page