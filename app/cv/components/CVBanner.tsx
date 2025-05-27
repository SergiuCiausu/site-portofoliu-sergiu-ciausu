import FadeInOnLoad from '@/app/components/FadeInOnLoad'
import { bodyW } from '@/app/variables/variables'
import React from 'react'
import Image from "next/image"
import "./cv.css"
import Anchor from '@/app/components/Anchor'

const CVBanner = () => {
  return (
    <FadeInOnLoad>
        <div className="mb-16"><Anchor text="main" /></div>
        <section
            className={`${bodyW} chenar-cv flex justify-between items-center`}>
                <div>
                    <h3 className="chenar-cv-h3 mb-8">Sergiu-Andrei Ciaușu</h3>
                    <div
                        className="flex flex-col">
                        <div
                            className="flex gap-16">
                            <p className="chenar-p"><span className="chenar-p-label">Data nașterii</span>: 07.06.2006</p>
                            <p className="chenar-p"><span className="chenar-p-label">Naționalitate</span>: român</p>
                            <p className="chenar-p"><span className="chenar-p-label">Gen</span>: masculin</p>
                        </div>
                        <div
                            className="flex gap-16">
                            <p className="chenar-p"><span className="chenar-p-label">Număr de telefon</span>: 0725 399 173</p>
                            <p className="chenar-p"><span className="chenar-p-label">Email</span>: ciausu.sergiu@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div>
                    <Image src="/sergiu-ciausu.png" width={512} height={512} alt="sergiu ciausu" className="chenar-cv-poza"></Image>
                </div>
        </section>
    </FadeInOnLoad>
  )
}

export default CVBanner