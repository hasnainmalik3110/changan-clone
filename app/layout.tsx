// app/layout.tsx
import './globals.css'
import { Roboto } from 'next/font/google' // Optimized Font
import Navbar from './ui/Navbar'

const roboto = Roboto({
  weight: ['300', '400', '700'],
  subsets: ['latin'],
  variable: '--font-roboto',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={roboto.variable}>
      <body className="antialiased font-sans">
        {/* Navbar stays fixed on top of everything */}
        <Navbar />
        {children}
      </body>
    </html>
  )
}