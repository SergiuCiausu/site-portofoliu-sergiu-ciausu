"use client";

import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero/Hero";
import Sectiune1 from "./components/Sectiuni/Sectiune1";
import Sectiune2 from "./components/Sectiuni/Sectiune2";
import Sectiune3 from "./components/Sectiuni/Sectiune3";

export default function Home() {

  const handleImgClick = (curs: string, event: React.MouseEvent) => {

    event.preventDefault();

    const element = document.getElementById(curs);

    if (element) {
       const targetPosition = element.getBoundingClientRect().top - 50;

       window.scrollTo({
        top: targetPosition,
        behavior: "smooth"
       })
    }

   
  }

  return (
    <div>
      <Navbar />
      <Hero titlu="Cum să faci munca să se simtă ca un joc video." subtitlu="Preia controlul asupra vieții tale și învață metodele prin care nu te vei mai simți niciodată obligat să muncești și cu ajutorul cărora nu vei mai ajunge la burnout niciodată." buton="Vezi cursuri" isLP={true} imgFunc={handleImgClick}/>
      <div
        className="flex flex-col gap-32 mb-32">
        <Sectiune1 />
        <Sectiune2 />
        <Sectiune3 />
      </div>
    </div>
  );
}
