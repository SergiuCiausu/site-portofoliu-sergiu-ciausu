import React from 'react'
import Anchor from './Anchor'
import { bodyW } from '@/app/variables/variables'

const Heading = ({ text }: { text: string }) => {
  return (
    <div
        className={`${bodyW} ${text === "Despre mine" ? "mt-24 mb-4" : "my-16"}`}>
        <Anchor text="header" />
        <h3>{text}</h3>
        <div className="mt-1"><Anchor text="header" type="end" /></div>
    </div>
  )
}

export default Heading