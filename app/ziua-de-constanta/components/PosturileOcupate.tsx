import Anchor from '@/app/components/Anchor'
import FadeInOnScroll from '@/app/components/FadeInOnScroll'
import H3 from '@/app/components/H3'
import { bodyW } from '@/app/variables/variables'
import React from 'react'
import Image from "next/image"
import "./posturi-ocupate.css"

const PosturiOcupate = () => {

    const posturi = [
        {
            img: "/redactor-ziua-de-constanta-icon.png",
            post: "Redactor",
            perioada: "19.06.2023 - 01.09.2023"
        },
        {
            img: "/grafician-icon.png",
            post: "Grafician",
            perioada: "01.04.2023 - 31.12.2023"
        },
    ]

  return (
    <FadeInOnScroll>
        <section>
            <div className="mt-16"><Anchor text="section"/></div>
            <div><H3 text="Posturile ocupate" /></div>
            <div
                className={`${bodyW} flex justify-between`}>
                    {posturi.map((post, index) => (
                        <div
                            key={index}
                            className="w-[301px] mx-72 flex flex-col items-center justify-between">
                                <Image src={post.img} height={49} width={64} alt={post.img.slice(1, post.img.length - 3)} className="mb-4"></Image>
                                <div
                                    className="flex flex-col items-center">
                                    <h5
                                        className="posturi-ocupate-h5">
                                            {post.post}
                                    </h5>
                                    <p
                                        className="posturi-ocupate-p">
                                            {post.perioada}
                                    </p>
                                </div>

                        </div>
                    ))}
            </div>
            <div className="mt-16"><Anchor text="section" type="end"/></div>
        </section>
    </FadeInOnScroll>
  )
}

export default PosturiOcupate