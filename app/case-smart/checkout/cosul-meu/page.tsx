"use client";

import Header from '@/app/case-smart/components/Nav/Header'
import ProductPageHeader from '@/app/case-smart/produse/components/ProductPageHeader'
import React, { useEffect, useState } from 'react'
import { useCart } from "@/app/case-smart/context/CartContext";
import Image from "next/image";
import Link from 'next/link';
import ProdusCard from './components/ProdusCard';

const Page = () => {

    const { cart, loadingProds } = useCart();
    const [pretTotal, setPretTotal] = useState<number>(0);
    const [pretLivrare, setPretLivrare] = useState(0);

    useEffect(() => {
        
        const pretLivrareCalc = 14.99 * cart.length;
        setPretLivrare(pretLivrareCalc);

        let suma = 0;
        cart.forEach((produs) => {
            const qty = Number(localStorage.getItem(`cantitate${produs.denumire_produs}-${produs.variants[0].culoare}`)) || 0;
            suma += Math.round((produs.pret - (produs.pret * produs.reducere / 100)) * qty);
        });

        localStorage.setItem("pretProduse", String(suma));
        localStorage.setItem("numarProduse", String(cart.length));
        localStorage.setItem("pretLivrare", String(pretLivrareCalc));

        setPretTotal(suma);
  }, [cart]);



  return (
    <div>
        <Header />
        <ProductPageHeader header="Coșul meu"/>
        <section
            className="flex w-[1220px] gap-5 mx-auto my-8">
            <ul
                className="flex flex-col gap-4">
                {cart.map((produs, index) => (
                    <ProdusCard key={index} produs={produs} index={index} />
                ))}
            </ul>
            {!loadingProds
            && 
                <div
                    className="flex-1 flex flex-col gap-5">
                    <div
                        className="p-8 white-background round-border checkout-product-shadow flex flex-col gap-10 h-fit">
                        <div
                            className="flex flex-col gap-8">
                            <div
                                className="flex flex-col gap-4">
                                <p className="card-denumire-produs">Sumar comandă</p>
                                <div>
                                    <div className="flex justify-between">
                                        <p className="checkout-cod-produs">Cost produse:</p>
                                        <p className="checkout-cod-produs">{pretTotal - 1}.{99 - cart.length + 1} lei</p>
                                    </div>
                                    <div className="flex justify-between">
                                        <p className="checkout-cod-produs">Cost livrare:</p>
                                        <p className="checkout-cod-produs">{pretLivrare} lei</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <p className="checkout-labele-comanda">Total de plată: </p>
                                <p className="checkout-pret-final">{(pretTotal + pretLivrare - 0.01 * cart.length).toFixed(2)} lei</p>
                            </div>
                        </div>
                        <button>
                            <Link href="/checkout/livrare-plata" className="round-border checkout-btn-background w-full flex items-center gap-4 py-4 justify-center relative">
                                <div className="absolute left-0 h-full accent-background w-8 checkout-btn-design-border-radius"></div>
                                <p className="btn-l-text neutral-color ">Continuă</p>
                                <Image src="/forward-arrows.png" alt="Next step icon" width={18} height={12}></Image>
                            </Link>
                        </button>
                    </div>
                    <div
                        className="white-background checkout-product-shadow flex flex-col gap-4 p-8 round-border cod-reducere">
                        <p className="card-denumire-produs">Adaugă cod reducere</p>
                        <input type="text" name="cod-reducere" placeholder="Cod reducere"/>
                    </div>
                </div>
            }
            
        </section>
    </div>
  )
}

export default Page
