import Anchor from '@/app/components/Anchor'
import FadeInOnScroll from '@/app/components/FadeInOnScroll'
import H3 from '@/app/components/H3'
import { bodyW } from '@/app/variables/variables'
import React from 'react'
import Image from 'next/image'

const LucrariCreate = () => {
  return (
    <FadeInOnScroll>
        <section>
            <div className="mt-16"><Anchor text="section"/></div>
            <H3 text="Exemple de lucrări create"/>
            <div>
                <div
                    className={`${bodyW} flex justify-center gap-8`}>
                    <Image src="/Voting card vocational.jpg" width={365} height={259} alt="postare 1 cje constanta" style={{objectFit: "contain"}}></Image>
                    <Image src="/Voting card tehnologic.jpg" width={365} height={259} alt="postare 2 cje constanta" style={{objectFit: "contain"}}></Image>
                    <Image src="/Voting card teoretic.jpg" width={365} height={259} alt="postare 3 cje constanta" style={{objectFit: "contain"}}></Image>
                    <Image src="/impartire-carusel-sesiune-extraordinara-patrata_01.jpg" width={259} height={259} alt="postare 4 cje constanta" style={{objectFit: "contain"}}></Image>
                </div>
            </div>
        </section>
        <div className="mt-16"><Anchor text="section" type="end"/></div>
        <div className="mt-16"><Anchor text="main" type="end"/></div>
    </FadeInOnScroll>
  )
}

export default LucrariCreate