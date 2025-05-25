import React from 'react'
import Anchor from './Anchor'
import { bodyW } from '../variables/variables'

const H3 = ({ text }: { text: string }) => {
  return (
    <div
        className={`${bodyW} text-center mt-16 mb-24`}>
        <Anchor text="header" />
        <h3>{text}</h3>
        <div className="mt-1"><Anchor text="header" type="end" /></div>
    </div>
  )
}

export default H3