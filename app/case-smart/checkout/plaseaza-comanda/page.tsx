"use client";

import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import Cookies from "js-cookie";
import { useCart } from '@/app/case-smart/context/CartContext';
import ProdusCard from '../cosul-meu/components/ProdusCard';

const Page = () => {

  const { cart } = useCart();
  // const [dateComanda, setDateComanda] = useState<Record<string, string> | null>(null);
  const router = useRouter();

  // const [pretTotal, setPretTotal] = useState<number>(0);

  const pretLivrare = 14.99 * cart.length;

  // const pret = () => {
  //     let suma = 0;
  //     cart.map(produs => {
  //         suma += Math.round((produs.pret - (produs.pret * produs.reducere / 100)) * Number(localStorage.getItem(`cantitate${produs.denumire_produs}-${produs.variants[0].culoare}`)))
  //     })
  //     localStorage.setItem("pretProduse", String(suma));
  //     return suma;
  // }

  useEffect(() => {
          // setPretTotal(pret());
          localStorage.setItem("numarProduse", String(cart.length));
          localStorage.setItem("pretLivrare", String(pretLivrare));
      }, [cart, pretLivrare]);
  

  useEffect(() => {
    const dateComandaCookie = Cookies.get("dateComanda");
    if (dateComandaCookie) {
      // setDateComanda(JSON.parse(dateComandaCookie));
    } else {
      router.push("/checkout/cosul-meu");
    }
  }, [router]);

  return (
    <div>
      <ul>
        {cart.map((produs, index) => (
          <ProdusCard key={index} produs={produs} index={index}/>
        ))}
      </ul>
    </div>
  )
}

export default Page
