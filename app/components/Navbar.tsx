import React from 'react'
import "@/app/globals.css"
import NavAnchor from './NavAnchor'
import Link from 'next/link';
import { bodyW } from "@/app/variables/variables";
import FadeInOnLoad from './FadeInOnLoad';

const Navbar = () => {

    const navLinks = ["Proiecte", "Studii", "CV", "Hobby-uri"];

  return (
    <FadeInOnLoad>
        <header>
            <nav
                className={`${bodyW} mx-auto mt-8 flex justify-between`}>
                    <div
                        className="flex gap-8">
                        <NavAnchor text="nav" />
                        <p
                            className="nav-logo">
                                SERGIU CIAUSU
                        </p>
                    </div>
                    <ul
                        className="flex gap-8">
                        {navLinks.map((link, index) => (
                            <div className="nav-link-spacing"><Link href={`/${link.toLowerCase()}`}><li key={index} className="nav-link">{link}</li></Link></div>
                        ))}
                    </ul>
                    <NavAnchor text="nav" type="end"/>
            </nav>
        </header>
    </FadeInOnLoad>
  )
}

export default Navbar;