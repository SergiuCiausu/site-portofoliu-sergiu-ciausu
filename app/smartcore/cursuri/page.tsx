import Image from "next/image";
import Navbar from "../components/Navbar";
import Link from "next/link";

export default function Home() {

    const cursuri = [
        {
            titlu: "Cursul 1: Joaca nu e doar pentru copii — cum să-ți transformi munca într-un joc pe care vrei să-l maxezi",
            descriere: "Trasnformă-ți munca într-un joc pe care vrei să-l maxezi.",
        },
        {
            titlu: "Cursul 2: Motivație fără efort — cum să-ți găsești energia să muncești la capacitate maximă (și de ce ar trebui să faci asta)",
            descriere: "Găsește-ți energia să muncește la capacitate maximă (și de ce ar trebui să faci asta).",
        },
        {
            titlu: "Cursul 3: Joacă-ți ziua cu cap — cum să-ți creezi o rutină zilnică de care să-ți fie imposibil să nu te ții",
            descriere: "Cum să-ți creezi o rutină zilnică de care să-ți fie imposibil să nu te ții.",
        },
    ]

  return (
    <div>
      <Navbar />
      <h1 className="w-[1120px] mx-auto mt-16">Alege cursul</h1>
      <div
        className="flex gap-8 mt-8 w-[1120px] mx-auto">
            {cursuri.map((curs, index) => (
                <Link
                    href={`/smartcore/cursul-${index +  1}`}
                    className="flex-33 flex flex-col p-8 card-shadow justify-between cursor-pointer">
                        <Image src={`/cursul-${index + 1}-img.jpg`} width={300} height={300} alt="curs banner" className="mb-8"></Image>
                        <h5>{curs.titlu}</h5>
                        <p>
                            {curs.descriere}
                        </p>
                        <button className="px-8 lp-btn mt-4 cursor-pointer"><Link href={`/cursul-${index +  1}`}><p className="bold white-color">Înscrie-te în curs</p></Link></button>
                </Link>
            ))}
      </div>
    </div>
  );
}
