import React from 'react'
import Link from 'next/link'

export default function Navbar() {
    return (
        <>
            <div className="container">
                <div className="grid grid-cols-1 xs:grid-cols-2">
                    <ul className="flex flex-wrap justify-center px-2 py-2">
                        <li className="px-2 py-2 text-base"><Link  href="/"><a className="hover:text-blue-500">HOME</a></Link></li>
                        <li className="px-2 py-2 text-base"><Link  href="/About"><a className="hover:text-blue-500">ABOUT</a></Link ></li>
                        <li className="px-2 py-2 text-base"><Link  href="/Shop"><a className="hover:text-blue-500">SHOP</a></Link ></li>
                        <li className="px-2 py-2 text-base"><Link  href="/Catalogue"><a className="hover:text-blue-500">CATALOGUE</a></Link ></li>
                        <li className="px-2 py-2 text-base"><Link  href="/Arrivals"><a  className="hover:text-blue-500">NEW ARRIVALS</a></Link ></li>
                        <li className="px-2 py-2 text-base"><Link  href="/Contact"><a  className="hover:text-blue-500">CONTACT</a></Link ></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

