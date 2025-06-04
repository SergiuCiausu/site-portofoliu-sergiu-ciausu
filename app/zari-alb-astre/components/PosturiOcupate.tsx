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
            img: "/tehnoredactor-sef.png",
            post: "Tehnoredactor-șef",
            perioada: "28.02.2022 - 05.02.2024"
        },
        {
            img: "/secretar-de-redactie-icon.png",
            post: "Secretar de redacție",
            perioada: "19.09.2022 - 09.01.2023"
        },
        {
            img: "/redactor-sef-adjunct-icon.png",
            post: "Redactor-șef adjunct",
            perioada: "12.09.2022 - 18.05.2023"
        },
        {
            img: "/redactor-sef-icon.png",
            post: "Redactor-șef",
            perioada: "19.05.2023 - 05.02.2024"
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
                            className="flex flex-col items-center justify-between">
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