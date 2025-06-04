import React from 'react'
import "@/app/globals.css"

const Anchor = ({ text, type }: { text: string, type?: string }) => {
  return (
    <div
        className={`flex justify-end`}>
        <p className="anchor">
            <span className="anchor-tag">{`<`}</span>
            {type === "end" ? <span className="anchor-slash">/</span> : ""}
            <span className="anchor-text">{text}</span>
            <span className="anchor-tag">{`>`}</span>
        </p>
    </div>
    
  )
}

export default Anchor