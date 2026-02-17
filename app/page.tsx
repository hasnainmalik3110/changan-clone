// app/page.tsx
'use client'
import { sections } from './seed/sections'
import SectionVideo from './ui/SectionVideo'
import SectionCar from './ui/SectionCar'
import SectionImage from './ui/SectionImage'
import Footer from './ui/Footer'

export default function Home() {
  return (
    <div className="scroll-snap h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
      {sections.map((section, index) => {
        switch (section.type) {
          case 'video':
            return (
              <SectionVideo
                key={index}
                src={section.src}
                overlayText={section.overlayText}
                overlaySize={section.overlaySize}
              />
            )
          case 'car':
            return (
              <SectionCar
                key={index}
                img={section.img}
                title={section.title}
                description={section.description}
              />
            )
          case 'image':
            return <SectionImage key={index} src={section.src} alt={section.alt} />
          default:
            return null
        }
      })}
      
      {/* Footer acts as the last section */}
      <div className="h-screen flex flex-col justify-end snap-start">
  <Footer />
</div>

    </div>
  )
}