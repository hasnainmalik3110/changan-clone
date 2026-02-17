'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 flex justify-between items-center p-4 transition-colors duration-300
      ${scrolled ? 'bg-white text-black shadow-md' : 'bg-transparent text-white'}`}>
      <div className="text-2xl font-bold">Changan</div>
      <div className="space-x-6 font-medium uppercase tracking-wide">
        <Link href="#home">Home</Link>
        <Link href="#models">Models</Link>
        <Link href="#news">News</Link>
        <Link href="#contact">Contact</Link>
      </div>
    </nav>
  )
}
