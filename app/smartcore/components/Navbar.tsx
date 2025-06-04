import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <header
        className="neutral-background flex justify-center w-full py-4">
        <nav
            className="w-[1120px] flex items-center justify-between mx-auto">
            <Link
                href="/smartcore"
                className="uppercase primary-color nav-text">
                Smartcore
            </Link>
            <ul
                className="flex items-center gap-5">
                <li className="primary-color nav-text cursor-pointer"><Link href="/smartcore/cursuri">Cursuri</Link></li>
                <li className="primary-color nav-text cursor-pointer"><Link href="/smartcore/faq">FAQs</Link></li>
                <li className="primary-color nav-text cursor-pointer"><Link href="/smartcore/cunoaste-ti-profesorii">Cunoaște-ți profesorii</Link></li>
                <li className="primary-color nav-text cursor-pointer"><Link href="/smartcore/recenzii">Recenzii</Link></li>
            </ul>
            <ul
                className="flex items-center gap-5">
                <li className="white-color primary-background nav-bold nav-btn py-3 px-6 cursor-pointer"><Link href="/smartcore/cursuri">Alege-ți cursul</Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar