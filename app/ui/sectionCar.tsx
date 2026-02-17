'use client'
import Image from 'next/image'
import { useRef, useEffect, useState } from 'react'

interface SectionCarProps {
  img: string
  title: string
  description: string
}

export default function SectionCar({ img, title, description }: SectionCarProps) {
  const ref = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.4 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={ref}
      className="relative w-screen h-screen flex flex-col justify-center items-center overflow-hidden"
    >
    {/* ===== CUSTOM STUDIO BACKGROUND ===== */}
<div className="absolute inset-0 -z-20 overflow-hidden">

  {/* Base color */}
  <div className="absolute inset-0 bg-[rgb(114,163,194)]" />

  {/* Radial white center glow */}
  <div className="absolute inset-0 
    bg-[radial-gradient(circle_at_50%_55%,#ffffff_0%,#f8fafc_25%,rgba(114,163,194,0.6)_55%,rgba(114,163,194,1)_90%)]">
  </div>

  {/* Soft side vignette */}
  <div className="absolute inset-0 
    bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.25)_100%)]">
  </div>

</div>





      {/* ===== Text ===== */}
      <div
        className={`z-10 text-center px-4 transition-all duration-1000 transform ${
          isVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-20'
        }`}
      >
        <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-black">
          {title}
        </h2>
        <p className="text-lg md:text-xl text-gray-700 font-light pr-8">
          {description}
        </p>
      </div>

      {/* ===== Car Image ===== */}
      <div
        className={`relative w-full max-w-6xl h-[55vh] transition-all duration-1000 delay-200 transform ${
          isVisible
            ? 'scale-100 opacity-100'
            : 'scale-95 opacity-0'
        }`}
      >
        <Image
          src={img}
          alt={title}
          fill
          className="object-contain drop-shadow-2xl"
          unoptimized
        />
      </div>

      {/* ===== Button ===== */}
      <button className="mt-6 bg-[rgb(31,68,123)] hover:bg-[#FF8C00] text-white px-12 py-4 uppercase text-sm font-bold transition-all rounded-sm">
        Learn more
      </button>
      <div className="absolute bottom-[30%] left-1/2 -translate-x-1/2 w-[900px] h-[300px] 
  bg-white/70 blur-[150px] rounded-full -z-10">
</div>

    </section>
  )
}
