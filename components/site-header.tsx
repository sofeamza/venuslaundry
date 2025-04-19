import Link from "next/link"
import Image from "next/image"
import { ChevronDown } from "lucide-react"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full bg-slate-300">
      <div className="container flex h-20 items-center justify-between">
        <div className="flex items-center gap-2">
          <Image src="/Venus-Laundry-logo.png" alt="Venus Laundry Logo" width={60} height={60} />
          <span className="text-2xl font-script text-[#0a3049] italic">Venus Laundry</span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-[#0a3049] font-medium">
            Home
          </Link>
          <Link href="/about" className="text-[#0a3049] font-medium">
            About
          </Link>
          <div className="relative group">
            <button className="flex items-center gap-1 text-[#0a3049] font-medium">
              Services <ChevronDown className="h-4 w-4" />
            </button>
            <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md p-2 min-w-[150px]">
              <Link href="/services/bulk-bliss" className="block px-4 py-2 hover:bg-slate-100 text-[#0a3049]">
                Bulk Bliss
              </Link>
              <Link href="/services/linen-luxury" className="block px-4 py-2 hover:bg-slate-100 text-[#0a3049]">
                Linen Luxury
              </Link>
              <Link href="/services/furnishing-finesse" className="block px-4 py-2 hover:bg-slate-100 text-[#0a3049]">
                Furnishing Finesse
              </Link>
            </div>
          </div>
          <Link href="/portfolio" className="text-[#0a3049] font-medium">
            Portfolio
          </Link>
          <Link href="/contact" className="text-[#0a3049] font-medium">
            Contact us
          </Link>
        </nav>
        <button className="md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-[#0a3049]"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </button>
      </div>
    </header>
  )
}
