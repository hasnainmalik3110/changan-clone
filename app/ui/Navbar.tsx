'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const scrollContainer = document.querySelector('.scroll-snap')

    const handleScroll = () => {
      if (scrollContainer) {
        setScrolled(scrollContainer.scrollTop > 50)
      }
    }

    scrollContainer?.addEventListener('scroll', handleScroll)
    return () => scrollContainer?.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={"fixed top-0 left-0 w-full z-50 bg-black/30 transition-all duration-300"}
    >
      {/* Centered Container */}
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">
        
        {/* Logo */}
        <div className="text-2xl font-bold tracking-[0.3em] text-white">
          CHANGAN
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10 text-sm font-medium uppercase tracking-widest text-white">
          
          <Link href="#gammes" className="hover:text-[#FF8C00] transition-colors duration-300">
            Vehicles
          </Link>

          <Link href="#acheter" className="hover:text-[#FF8C00] transition-colors duration-300">
            About
          </Link>

          <Link href="#services" className="hover:text-[#FF8C00] transition-colors duration-300">
            Test Drive
          </Link>

          <Link href="#contact" className="hover:text-[#FF8C00] transition-colors duration-300">
            Location
          </Link>

          <button className="bg-white text-black text-xs font-semibold px-6 py-2 rounded-sm hover:bg-[#FF8C00] hover:text-white transition-all duration-300">
            Sales Contact
          </button>

        </div>
      </div>
    </nav>
  )
}
