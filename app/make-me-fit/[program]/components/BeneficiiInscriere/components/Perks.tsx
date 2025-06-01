import Checkmark from '@/app/make-me-fit/components/Checkmark'
import React from 'react'

const Perks = ({ markType, perks }: { markType: "checkmark" | "crossmark", perks: string[]}) => {

    let src;
    if (markType === "checkmark")
        src="/Checkmark icon web.png"
    else if (markType === "crossmark")
        src="/Crossmark icon web.png"
    else
        return console.error("Marktype invalid")

  return (
    <div>
        {perks.map((perk, index) => (
            <div
                key={index}
                className="flex"
                style={{
                    marginBottom: "var(--benefit-mb)"
                }}
                >
                    <Checkmark src={src} />
                    <p 
                        className="make-me-fit-heading-lp-p"
                        style={{
                            fontSize: "var(--p-size)"
                        }}>
                        {perk}
                    </p>
            </div>
        ))}
        
    </div>
  )
}

export default Perks
