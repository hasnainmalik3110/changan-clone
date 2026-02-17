import Image from 'next/image'

export default function SectionCar({ img }: { img: string }) {
  return (
    <section className="w-screen h-screen relative">
      <Image src={img} alt="section" fill className="object-cover"/>
    </section>
  )
}
