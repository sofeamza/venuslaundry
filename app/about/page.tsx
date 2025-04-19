import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#e6f7fc] py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-[#0a3049] mb-6">About Venus Laundry</h1>
            <p className="text-lg text-[#0a3049] mb-8">
              Delivering exceptional laundry services with a commitment to quality, sustainability, and customer
              satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#0a3049] mb-6">Our Story</h2>
              <p className="text-gray-700 mb-4">
              Venus Laundry has been established since 1998. We are committed to being the premier full-service provider 
              to the commercial laundry industry in Klang Valley. We commit to the success of our customers by providing 
              the highest quality equipment brand and services, technological advancement and innovative business 
              solution, driven by 24 years of proven performance.
              </p>
              <p className="text-gray-700 mb-4">
              Weʼre not just cleaners; weʼre caretakers of your comfort clothes.
              </p>
              <p className="text-gray-700">
              Born from a passion for perfection, our journey began with a simple idea: to provide unrivaled laundry excellence.
              </p> <br></br>
              <p className="text-gray-700">
              With each wash, we aim to exceed expectations, elevating the essence of hospitality.
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-[#e6f7fc] rounded-lg -rotate-3 transform"></div>
              <Image
                src="/about-image.png"
                alt="Venus Laundry Team"
                width={600}
                height={400}
                className="relative rounded-lg shadow-lg z-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-slate-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#0a3049] text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-[#5bc0de] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0a3049] mb-2">Quality</h3>
              <p className="text-gray-700">
                We are committed to delivering exceptional results with every service. Our attention to detail ensures
                that your linens and garments are treated with the utmost care.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-[#5bc0de] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0a3049] mb-2">Innovation</h3>
              <p className="text-gray-700">
                We continuously invest in advanced technology and processes to improve efficiency and deliver superior
                results while reducing our environmental impact.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-[#5bc0de] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0a3049] mb-2">Reliability</h3>
              <p className="text-gray-700">
                We understand the importance of timely service. Our clients count on us to deliver consistently
                excellent results on schedule, every time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      
      <section className="bg-[#0a3049] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Experience the Venus Difference?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Join our growing family of satisfied clients and discover why Venus Laundry is the preferred choice for
            businesses that demand excellence.
          </p>
          <Link href = "/contact">
            <Button className="bg-[#5bc0de] hover:bg-[#4ab0ce] text-white rounded-full px-8 py-6 text-lg">
              Contact Us Today
            </Button>
          </Link>
        </div>
      </section>
      
    </main>
  )
}
