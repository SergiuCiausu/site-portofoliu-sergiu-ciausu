import ProductCard from '@/app/case-smart/components/ProductCard'
import React from 'react'
import type { ProduseProps } from "@/app/case-smart/produse/types"

const Produse = ({ produse, isSingleFiltruCuloare } : { produse: ProduseProps, isSingleFiltruCuloare: boolean}) => {
  return (
    <div
        className="grid grid-cols-3 gap-5">
        {produse!.produse.length > 0
        ? produse!.produse.map((produs) => (
                <ProductCard 
                    key={produs.id}
                    title={produs.denumire_produs}
                    rating={produs.rating}
                    src={produs.img}
                    pret={produs.pret}
                    reducere={produs.reducere}
                    totalRecenzii={produs.totalRecenzii}
                    variants={produs.variants}
                    isSingleFiltruCuloare={isSingleFiltruCuloare}
                    url={produs.url}
                />
            ))
        : <p>Not found</p>
        }
    </div>
  )
}

export default Produse
