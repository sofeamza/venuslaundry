import Link from "next/link"
import Image from "next/image"
import { Facebook, MessageCircle } from "lucide-react"
import { FooterNewsletter } from "@/components/footer-newsletter"

export function SiteFooter() {
  return (
    <footer className="bg-[#e6f7fc] text-[#0a3049] py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Company Info */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Image src="/Venus-Laundry-logo.png" alt="Venus Laundry Logo" width={40} height={40} />
              <span className="text-xl font-script italic">Venus Laundry</span>
            </div>
            <p className="text-sm mb-2 font-medium">One Stop Premium Laundry Service Provider</p>
            <address className="not-italic text-sm text-gray-600 mb-6">
              <p>17, Jalan Bukit Desa 5, Taman Bukit Desa,</p>
              <p>Kuala Lumpur, Federal Territory of Kuala Lumpur,</p>
              <p>Malaysia</p>
            </address>


            <FooterNewsletter />
          </div>

          {/* Venus Laundry Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Venus Laundry</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-[#5bc0de]">
                  About us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-600 hover:text-[#5bc0de]">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-gray-600 hover:text-[#5bc0de]">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-[#5bc0de]">
                  Contact us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-gray-600 hover:text-[#5bc0de]">
                  Bulk Bliss
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-600 hover:text-[#5bc0de]">
                  Linen Luxury
                </Link>
              </li>
              <li>
                <Link href="/services/" className="text-gray-600 hover:text-[#5bc0de]">
                  Furnishing Finesse
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-bold mb-4">Check us out</h3>
            <div className="flex space-x-4">
              <Link href="https://www.facebook.com/langsirdansofa.venus/" className="text-[#0a3049] hover:text-[#5bc0de]">
                <Facebook size={24} />
              </Link>
              <Link href="https://api.whatsapp.com/send?phone=0122229425" className="text-[#0a3049] hover:text-[#5bc0de]">
                <MessageCircle size={24} />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-300 mt-8 pt-8 text-center text-sm text-gray-600">
          <p>&copy; {new Date().getFullYear()} Venus Laundry. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
