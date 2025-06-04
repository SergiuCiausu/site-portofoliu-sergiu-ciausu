import React from 'react'
import AnchorRight from './AnchorRight'

const Heading = ({ text }: { text: string }) => {
  return (
    <div
        className={`flex flex-col items-end ${text === "Despre mine" ? "mt-24 mb-4" : "my-16"}`}>
        <AnchorRight text="header" />
        <h3 className="text-right">{text}</h3>
        <div className="mt-1"><AnchorRight text="header" type="end" /></div>
    </div>
  )
}

export default Heading