'use client'
import Image from 'next/image'

interface SectionImageProps {
  src?: string
  alt?: string
}

export default function SectionImage({ src, alt }: SectionImageProps) {
  if (!src) return null

  return (
    <section className="relative w-screen h-screen overflow-hidden">
      <Image
        src={src}
        alt={alt || 'section-image'}
        fill
        className="object-cover"
        unoptimized
      />
    </section>
  )
}
