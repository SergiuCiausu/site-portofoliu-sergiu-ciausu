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

export async function GET(request: NextRequest) {
    const url = new URL(request.url);
    const pathParts = url.pathname.split("/");

    const prod = pathParts[pathParts.indexOf("pagina-produs") + 1];
    const produse = await prisma.produs.findMany({
        where: {
            url: prod
        },
        orderBy: {
            id: "asc"
        }
    });
    const grouped = produse.reduce((acc : Record<string, GroupedProdus>, produs: Produs) => {
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
}
