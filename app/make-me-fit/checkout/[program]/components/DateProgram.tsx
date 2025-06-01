import React from 'react'
import prismaMakeMeFit from '@/prisma/make-me-fit/client'
import CheckoutProgram from './CheckoutProgram'

const DateProgram = async ({ program }: { program: string }) => {

    const programDB = await prismaMakeMeFit.program.findUnique({
        where: {
            nume: program
        }
    })

    if(!programDB) {
        return;
    }

    return(
        <section>
            <CheckoutProgram nume={programDB.nume} descriere={programDB.descriere} img={programDB.img} pret={programDB.pret}/>
        </section>
    )
}

export default DateProgram