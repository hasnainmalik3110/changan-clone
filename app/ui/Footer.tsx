import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-0">
      
      {/* Left side: Brand */}
      <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
        <span className="font-bold text-lg">Changan Automobile Maroc</span>
        <span className="text-sm">Tous droits réservés 2026</span>
      </div>

      {/* Center: Links */}
      <div className="flex flex-wrap justify-center md:justify-start gap-6">
        <a href="#" className="hover:text-orange-500 transition-colors">Join us</a>
        <a href="#" className="hover:text-orange-500 transition-colors">Term of Use</a>
        <a href="#" className="hover:text-orange-500 transition-colors">Contact</a>
        <a href="#" className="hover:text-orange-500 transition-colors">Become a distributor</a>
      </div>

      {/* Right side: Button + Social */}
      <div className="flex flex-col md:flex-row md:items-center gap-4">
       <div className="flex gap-4">
  <a href="#">
    <Image src="/icons/facebook.svg" alt="Facebook" width={20} height={20} />
  </a>
  <a href="#">
    <Image src="/icons/instagram.svg" alt="Instagram" width={20} height={20} />
  </a>
  <a href="#">
    <Image src="/icons/linkedin.svg" alt="LinkedIn" width={20} height={20} />
  </a>
</div>
      </div>

    </footer>
  )
}
