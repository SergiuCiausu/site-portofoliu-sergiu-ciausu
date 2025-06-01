import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import type { Prisma } from "@prisma/client";
import { Brand } from '@prisma/client';
import { Culori } from '@prisma/client';

interface Produs {
  url: string,
  culoare: string,
  img: string,
  grup_produs: number,
  [key: string]: unknown;
}


interface GroupedProdus extends Produs {
  variants: { culoare: string; img: unknown | string }[];
}

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);

    const filtre = [
        {
            nume: "brand",
            valoare: searchParams.getAll("brand[]")
        },
        {
            nume: "culoare",
            valoare: searchParams.getAll("culoare[]")
        },
        {
            nume: "tipIntrerupator",
            valoare: searchParams.getAll("tip_intrerupator[]")
        },
        {
            nume: "vizualizate",
            valoare: searchParams.get("vizualizate[]")
        },
        {
            nume: "orderBy[id]",
            valoare: searchParams.get("orderBy[id]")
        },
        {
            nume: "pretMin",
            valoare: searchParams.get("pretMin")
        },
        {
            nume: "pretMax",
            valoare: searchParams.get("pretMax")
        },
    ]

    const where: Prisma.ProdusWhereInput = {}
    const orderBy: Prisma.ProdusOrderByWithRelationInput = {}

    const castToBrandArray = (arr: string[]): Brand[] => {
        return arr.map((v) => v as Brand);
    };
    
    const castToCuloriArray = (arr: string[]): Culori[] => {
        return arr.map(v => v as Culori);
    };

    filtre.forEach(filtru => {
        if (filtru.valoare && filtru.nume) {
            if (filtru.nume === "pretMin" || filtru.nume === "pretMax") {
                const minPrice = searchParams.get("pretMin") ? parseFloat(searchParams.get("pretMin") as string) : undefined;
                const maxPrice = searchParams.get("pretMax") ? parseFloat(searchParams.get("pretMax") as string) : undefined;

                if (!where.pret || typeof where.pret === "number") {
                    where.pret = {} as Prisma.IntFilter;
                }
                
                if (minPrice !== undefined) where.pret.gte = minPrice;
                if (maxPrice !== undefined) where.pret.lte = maxPrice;
            } else if (filtru.nume === "vizualizate") {
                orderBy.id = filtru.valoare as "asc" | "desc";
            } else if (filtru.nume === "orderBy[id]") {
                orderBy.id = (searchParams.get("orderBy[id]") as "asc" | "desc") ?? "asc";
            } 
            if (Array.isArray(filtru.valoare)) {
                where.brand = { in: castToBrandArray(filtru.valoare) };
             } else if (filtru.nume === "culoare") {
                if (Array.isArray(filtru.valoare)) {
                    where.culoare = { in: castToCuloriArray(filtru.valoare) };
                }
            } 
    }})

    try {
        const produse = await prisma.produs.findMany({
            where: Object.keys(where).length ? where : undefined,
            orderBy: Object.keys(orderBy).length ? orderBy: {id: "asc"}
        })
        const grouped = produse.reduce((acc : Record<string, GroupedProdus>, produs: Produs) => {
            if (!acc[produs.grup_produs]) {
              acc[produs.grup_produs] = { 
                ...produs, 
                variants: [] 
              };
            }
            acc[produs.grup_produs].variants.push({ culoare: produs.culoare, img: produs.img});
            return acc;
          }, {});

          Object.values(grouped).forEach(prod => {
            if (orderBy.id === "desc") {
                prod.variants.reverse();
            }
        });
          const finalProducts = orderBy.id === "desc" ? Object.values(grouped).reverse() : Object.values(grouped);
        return NextResponse.json(finalProducts);
    } catch (error) {
        return NextResponse.json({ error: `${NextResponse.error} ${error}` }, { status: 500 })
    }
}