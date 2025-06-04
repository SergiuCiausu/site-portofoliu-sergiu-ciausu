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
            <div
                className={`${bodyW} flex flex-col gap-8 items-center`}>
                <div
                    className="flex gap-8 justify-between items-center">
                    <Image src="/9 ani puscarie radu mazare slide instagram.jpg" width={440} height={550} alt="postare 1 ziua de constanta" style={{objectFit: "contain"}}></Image>
                    <Image src="/reclama facebook trafic site 2.3.jpg" width={550} height={550} alt="postare 2 ziua de constanta" style={{objectFit: "contain"}}></Image>
                    <Image src="/grafica deschidere editie instagram.jpg" width={440} height={550} alt="postare 3 cse cnmb" style={{objectFit: "contain"}}></Image>
                </div>
                <div
                    className="flex gap-8">
                    <Image src="/reclama facebook trafic site 4.1.jpg" width={365} height={365} alt="postare 4 ziua de constanta" style={{objectFit: "contain"}}></Image>
                    <Image src="/reclama facebook trafic facebook 1.jpg" width={365} height={365} alt="postare 5 ziua de constanta" style={{objectFit: "contain"}}></Image>
                    <Image src="/reclama facebook trafic site 2.1.jpg" width={365} height={365} alt="postare 6 ziua de constanta" style={{objectFit: "contain"}}></Image>
                    <Image src="/reclama facebook trafic whatsapp.jpg" width={365} height={457} alt="postare 7 ziua de constanta" style={{objectFit: "contain"}}></Image>
                </div>
            </div>
        </section>
        <div className="mt-16"><Anchor text="section" type="end"/></div>
    </FadeInOnScroll>
  )
}

export default LucrariCreate