import Image from "next/image";
import Navbar from "../components/Navbar";
import Link from "next/link";

export default function Home() {

  return (
    <div>
      <Navbar />
      <div className="w-[1120px] h-[80vh] flex flex-col items-center justify-center gap-8 mx-auto">
        <Image src="/stea-crapata-2.png" width={400} height={600} alt="stea crapata" className="opacity-50"></Image>
        <h5>
            Momentan nu există recenzii.
        </h5>
      </div>
    </div>
  );
}
