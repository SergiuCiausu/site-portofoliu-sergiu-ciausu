import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

interface Produs {
  url: string;
  culoare: string;
  img: string;
  [key: string]: unknown;
}


interface GroupedProdus extends Produs {
  variants: { culoare: string; img: string }[];
}

export async function GET(req: NextRequest) {
    const urlParams = req.nextUrl.searchParams.get("urls");
    const urls = urlParams ? decodeURIComponent(urlParams).split(",").map(Number): [];
    try {
        const produseVizitate = await prisma.produs.findMany({
            where: {
                grup_produs: {
                    in: urls
                }
            },
            orderBy: {
                id: "asc"
            }
        });
        const grouped = produseVizitate.reduce((acc : Record<string, GroupedProdus>, produs : Produs) => {
            if (!acc[produs.url]) {
              acc[produs.url] = { 
                ...produs, 
                variants: [] 
              };
            }
            acc[produs.url].variants.push({ culoare: produs.culoare, img: produs.img});
            return acc;
          }, {});
        const finalProducts = Object.values(grouped);
        return NextResponse.json(finalProducts);
    } catch (error) {
        return NextResponse.json({ error: `Database query failed ${error}` }, { status: 500 })
    }
}