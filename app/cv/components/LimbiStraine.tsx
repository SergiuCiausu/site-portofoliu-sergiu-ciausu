import FadeInOnScroll from '@/app/components/FadeInOnScroll'
import React from 'react'
import Heading from './Heading'
import "./limbi-straine.css";
import { bodyW } from '@/app/variables/variables';
import Anchor from './Anchor';

const LimbiStraine = () => {

    const limbi = [
        {
            denumire: "engleză",
            listening: "C2",
            reading: "C2",
            speaking: "C2",
            writing: "C2"
        },
        {
            denumire: "franceză",
            listening: "A2",
            reading: "A2",
            speaking: "A2",
            writing: "A2"
        },
    ]

  return (
    <div
        className={`${bodyW}`}>
        <FadeInOnScroll><Heading text="Abilități de comunicare în limbi străine" /></FadeInOnScroll>
        <FadeInOnScroll>
            <div className="mt-16"><Anchor text="table"/></div>
            <table
                className={`tabel-limbi`}>
                <thead>
                    <th className="tabel-h-limbi"></th>
                    <th className="tabel-h-limbi">Listening</th>
                    <th className="tabel-h-limbi">Reading</th>
                    <th className="tabel-h-limbi">Speaking</th>
                    <th className="tabel-h-limbi">Writing</th>
                </thead>
                <tbody>
                    {limbi.map((limba, index) => (
                        <tr
                            key={index}>
                            <td className="tabel-r-limbi pb-2">Limba {limba.denumire}</td>
                            <td className="tabel-d-limbi pb-2">{limba.listening}</td>
                            <td className="tabel-d-limbi pb-2">{limba.reading}</td>
                            <td className="tabel-d-limbi pb-2">{limba.speaking}</td>
                            <td className="tabel-d-limbi pb-2">{limba.writing}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="mt-4"><Anchor text="table" type="end"/></div>
        </FadeInOnScroll>
    </div>
  )
}

export default LimbiStraine