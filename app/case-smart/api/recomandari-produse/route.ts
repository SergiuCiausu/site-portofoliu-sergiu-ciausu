import prisma from "@/prisma/client";
import { NextResponse } from "next/server";

interface Produs {
  url: string;
  culoare: string;
  img: string;
  grup_produs: number
  [key: string]: unknown;
}


interface GroupedProdus extends Produs {
  variants: { culoare: string; img: string }[];
}


export async function GET() {

    const produse = await prisma.produs.findMany({
        orderBy: {
            id: "asc"
        }
    })

    
    if (!produse) {
        return NextResponse.json("Error occured");
    }

    const grouped = produse.reduce((acc : Record<string, GroupedProdus>, produs : Produs) => {
        if (!acc[produs.grup_produs]) {
          acc[produs.grup_produs] = { 
            ...produs, 
            variants: [] 
          };
        }
        acc[produs.grup_produs].variants.push({ culoare: produs.culoare, img: produs.img});
        return acc;
      }, {});

      const finalProducts = Object.values(grouped);
    return NextResponse.json(finalProducts);
  
  }
    