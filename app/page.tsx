import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Star, Clock, Award, Gift } from "lucide-react"
import { ServiceRequestButton } from "@/components/service-request-button"
import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-slate-300 to-slate-200 overflow-hidden">
        <div className="container mx-auto px-4 pt-0 pb-16 md:pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="z-10">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0a3049] leading-tight">
                Delivering freshness,
                <br />
                elevating experiences.
              </h1>
              <p className="mt-6 text-[#0a3049] max-w-md">
                Your premier destination for top-tier laundry solutions.
                <br />
                Elevate Your Business Experience Now!
              </p>

              <div className="mt-8 space-y-4 sm:space-y-0 sm:space-x-4 sm:flex">
                <Link href="/services">
                  <Button className="w-full sm:w-auto bg-[#5bc0de] hover:bg-[#4ab0ce] text-white rounded-full px-8">
                    Our Services
                  </Button>
                </Link>
                <Link href="/about">
                  <Button
                    variant="outline"
                    className="w-full sm:w-auto bg-[#e6f7fc] hover:bg-[#d6f0f8] text-[#0a3049] border-[#5bc0de] rounded-full px-8"
                  >
                    Learn More
                  </Button>
                </Link>
              </div>

              <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex flex-col">
                  <span className="text-4xl font-bold text-[#0a3049]">100%</span>
                  <span className="text-[#5bc0de] text-sm">Satisfaction Guaranteed</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-4xl font-bold text-[#0a3049]">20+</span>
                  <span className="text-[#5bc0de] text-sm">Years of Experience</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-4xl font-bold text-[#0a3049]">&lt;8hrs</span>
                  <span className="text-[#5bc0de] text-sm">Fast & Responsive</span>
                </div>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="absolute inset-0 bg-[#e6f7fc] rounded-full scale-150 translate-x-1/4 translate-y-0 z-0"></div>
              <div className="flex justify-end">
              <div className="relative z-10 ml-10 mt-[30px]">
                <Image
                  src="/washing machine.png"
                  alt="Washing Machine"
                  width={500}
                  height={500}
                  className="relative z-10 ml-10"
                />
                {/* Bubbles */}
                {[1, 2, 3, 4, 5, 6, 7].map((i) => (
                  <div
                    key={i}
                    className={`absolute rounded-full border border-[#5bc0de] bg-[#e6f7fc]/50 z-0
                      ${i === 1 ? "w-16 h-16 top-10 right-20" : ""}
                      ${i === 2 ? "w-8 h-8 top-20 right-10" : ""}
                      ${i === 3 ? "w-12 h-12 bottom-40 right-0" : ""}
                      ${i === 4 ? "w-20 h-20 bottom-20 right-20" : ""}
                      ${i === 5 ? "w-10 h-10 bottom-10 right-40" : ""}
                      ${i === 6 ? "w-14 h-14 top-40 right-0" : ""}
                      ${i === 7 ? "w-6 h-6 top-60 right-10" : ""}
                    `}
                  ></div>
                ))}
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="bg-[#e6f7fc] py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="h-8 w-8 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a3049] mb-6">5-STAR CLIENT PRAISE</h2>
            <p className="text-[#0a3049] text-lg mb-8 leading-relaxed">
              "Our hotel's linens have never looked better. The attention to detail and superior clean we get every time
              is unmatched. Guests constantly compliment the pristine condition of our rooms. Partnering with this
              laundry service has truly elevated our brand."
            </p>
            <Link href = "/contact">
              <Button className="bg-[#0a3049] hover:bg-[#0a3049]/90 text-white rounded-full px-8 py-6">
                JOIN OUR HAPPY CLIENTS
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-slate-100 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-[#5bc0de] font-medium">SERVICES</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a3049] mt-2">Laundry Mastery Suite</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Service Card 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-48 overflow-hidden">
                <Image
                  src="/Bulk-Elegance.png"
                  alt="Bulk Elegance"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0a3049] mb-2">Bulk Elegance</h3>
                <p className="text-gray-700 mb-4">
                  Efficient large-scale laundry services ensuring your linens look clean and pristine!
                </p>
                <ServiceRequestButton
                  serviceType="bulk-elegance"
                  buttonText="Order"
                  className="w-full bg-[#e6f7fc] hover:bg-[#d6f0f8] text-[#0a3049] rounded-full"
                />
              </div>
            </div>

            {/* Service Card 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-48 overflow-hidden">
                <Image
                  src="/Linen-Luxury.png"
                  alt="Linen Luxury"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0a3049] mb-2">Linen Luxury</h3>
                <p className="text-gray-700 mb-4">
                  High-quality linen rental and supply, making every guest's experience exceptional.
                </p>
                <ServiceRequestButton
                  serviceType="linen-luxury"
                  buttonText="Hire"
                  className="w-full bg-[#5bc0de] hover:bg-[#4ab0ce] text-white rounded-full"
                />
              </div>
            </div>

            {/* Service Card 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-48 overflow-hidden">
                <Image
                  src="/Soft-Splendor.png"
                  alt="Soft Splendor"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0a3049] mb-2">Soft Splendor</h3>
                <p className="text-gray-700 mb-4">
                  We clean and maintain soft furnishings, adding comfort and class to your space.
                </p>
                <ServiceRequestButton
                  serviceType="soft-splendor"
                  buttonText="Serve"
                  className="w-full bg-[#e6f7fc] hover:bg-[#d6f0f8] text-[#0a3049] rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-[#e6f7fc] rounded-3xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left side with illustration */}
              <div className="p-8 lg:p-12 flex flex-col justify-center items-center">
                <h2 className="text-3xl md:text-4xl font-bold text-[#0a3049] mb-8 lg:hidden text-center">
                  Why Choose Us?
                </h2>
                <div className="relative">
                  <Image src="/why.png" alt="Woman thinking" width={300} height={300} className="mx-auto" />
                  <Link href = "/about">
                    <Button
                      variant="outline"
                      className="mt-6 bg-white hover:bg-gray-100 text-[#0a3049] border-[#5bc0de] rounded-full px-40"
                    >
                      Learn more
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Right side with benefits */}
              <div className="p-8 lg:p-12">
                <h2 className="text-3xl md:text-4xl font-bold text-[#0a3049] mb-8 hidden lg:block">Why Choose Us?</h2>
                <div className="space-y-8">
                  {/* Benefit 1 */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-white rounded-full flex items-center justify-center">
                      <Clock className="h-6 w-6 text-[#0a3049]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#0a3049] mb-2">Reliable Service</h3>
                      <p className="text-gray-700">
                        We're always on time, making sure your laundry needs are met without delay. Trust us to be there
                        for you.
                      </p>
                    </div>
                  </div>

                  {/* Benefit 2 */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-white rounded-full flex items-center justify-center">
                      <Award className="h-6 w-6 text-[#0a3049]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#0a3049] mb-2">Unmatched Quality</h3>
                      <p className="text-gray-700">
                        Our laundry services are top-notch. We use the best methods to make sure your items look
                        amazing.
                      </p>
                    </div>
                  </div>

                  {/* Benefit 3 */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-white rounded-full flex items-center justify-center">
                      <Gift className="h-6 w-6 text-[#0a3049]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#0a3049] mb-2">Personalized Care</h3>
                      <p className="text-gray-700">
                        We listen and adapt to your needs, offering tailored laundry services just for your business.
                        Your satisfaction guaranteed.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get In Touch Section */}
      <section className="py-20 bg-cover bg-center" style={{ backgroundImage: "url('/linen.png')" }}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-script text-[#0a3049] mb-8">Get In Touch</h2>
          <Link href = "/contact">
            <Button className="bg-gray-300 hover:bg-gray-400 text-[#0a3049] rounded-full px-8 py-6">Reach Out</Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
