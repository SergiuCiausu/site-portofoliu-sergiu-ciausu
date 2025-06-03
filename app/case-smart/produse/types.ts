export type FilterValueObject = {
  [key: string]: FilterValue;
}

export type FilterValue = string | number | FilterValueObject | (string | number)[];

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

export type ProduseProps = {
    produse: Produs[];
}
