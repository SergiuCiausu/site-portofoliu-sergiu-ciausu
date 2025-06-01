import prisma from "@/prisma/client";
import { NextResponse } from "next/server";

interface Produs {
  url: string;
  culoare: string;
  grup_produs: number;
  [key: string]: unknown | string;
}


interface GroupedProdus extends Produs {
  variants: { culoare: string; img: unknown | string }[];
}

export async function GET() {
    const produseRecomandate = await prisma.produs.findMany({
        orderBy: {
            id: "asc",
        }
    })
    const grouped = produseRecomandate.reduce((acc : Record<string, GroupedProdus>, produs : Produs) => {
        if (!acc[produs.grup_produs]) {
          acc[produs.grup_produs] = { 
            ...produs, 
            variants: [] 
          };
        }
        acc[produs.grup_produs].variants.push({ culoare: produs.culoare, img: produs.img});
        return acc;
      }, {});
    const finalProduseRecomandate = Object.values(grouped);
    return NextResponse.json(finalProduseRecomandate);
}