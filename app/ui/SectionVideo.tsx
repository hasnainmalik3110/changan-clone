// app/ui/SectionVideo.tsx
'use client'

interface SectionVideoProps {
  src: string
  overlayText?: string
  overlaySize?: string
}

export default function SectionVideo({ src, overlayText, overlaySize }: SectionVideoProps) {
  return (
    <section className="w-screen h-screen relative">
      <video
        src={src}
        autoPlay
        muted
        loop
        className="w-full h-full object-cover"
      />
      {overlayText && (
        <div className="absolute inset-0 flex justify-center items-center text-center text-white px-4">
          <h1 className={overlaySize || 'text-3xl font-bold'}>{overlayText}</h1>
        </div>
      )}
    </section>
  )
}
