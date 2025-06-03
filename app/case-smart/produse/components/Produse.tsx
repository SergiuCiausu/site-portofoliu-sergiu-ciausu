import ProductCard from '@/app/case-smart/components/ProductCard'
import React from 'react'

interface Variant {
    culoare: string,
    img: string
}

interface Produs {
    id: number
    denumire_produs: string,
    rating: number,
    img: string,
    reducere: number,
    totalRecenzii: number
    brand: string,
    categorie: string,
    pret: number,
    variants: Variant[],
    url: string
}

interface ProduseProps {
    produse: Produs[];
}

const Produse = ({ produse, isSingleFiltruCuloare } : { produse: ProduseProps, isSingleFiltruCuloare: boolean}) => {
  return (
    <div
        className="grid grid-cols-3 gap-5">
        {produse.produse.length > 0
        ? produse.produse.map((produs) => (
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
