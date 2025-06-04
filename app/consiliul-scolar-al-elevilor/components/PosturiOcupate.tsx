import Anchor from '@/app/components/Anchor'
import FadeInOnScroll from '@/app/components/FadeInOnScroll'
import H3 from '@/app/components/H3'
import { bodyW } from '@/app/variables/variables'
import React from 'react'
import Image from "next/image"

const PosturiOcupate = () => {

    const posturi = [
        {
            img: "/director-al-departamentului-de-pr-si-comunicare-icon.png.png",
            post: "Directorul departamentului PR și comunicare",
            perioada: "19.11.2022 - 16.06.2023"
        },
        {
            img: "/grafician-icon.png",
            post: "Grafician",
            perioada: "12.12.2021 - 16.06.2023"
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
                            className="mx-36 w-[494px] flex flex-col items-center justify-end">
                                <Image src={post.img} height={49} width={64} alt={post.img.slice(1, post.img.length - 3)} className="mb-4"></Image>
                                <div
                                    className="flex flex-col items-center">
                                    <h5
                                        className="text-center">
                                            {post.post}
                                    </h5>
                                    <p
                                        className="text-center">
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