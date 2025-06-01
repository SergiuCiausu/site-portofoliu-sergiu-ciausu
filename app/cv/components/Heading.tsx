import React from 'react'
import Anchor from './Anchor'
import { bodyW } from '@/app/variables/variables'

const Heading = ({ text }: { text: string }) => {
  return (
    <div
        className={`${bodyW} ${text === "Despre mine" ? "mt-24 mb-4" : "mt-16 mb-8"}`}>
        <Anchor text="header" />
        <h3 className="w-[860px]">{text}</h3>
        <div className="mt-1"><Anchor text="header" type="end" /></div>
    </div>
  )
}

export default Heading