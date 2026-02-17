import Image from 'next/image'

export default function SectionImage({ src, alt }: { src?: string; alt?: string }) {
  if (!src) return null // don't render if src is missing

  return (
    <section className="w-screen h-screen relative">
      <Image src={src} alt={alt || 'section-image'} fill className="object-cover" />
    </section>
  )
}
