import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Award, Clock, Star, HeartHandshake } from "lucide-react"
import { ServiceRequestButton } from "@/components/service-request-button"

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#e6f7fc] py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-[#0a3049] mb-6">Our Services</h1>
            <p className="text-lg text-[#0a3049] mb-8">
              Comprehensive laundry solutions tailored to meet the unique needs of your business or residence.
            </p>
          </div>
        </div>
      </section>

      {/* Pure Elegance Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#0a3049]">Pure Elegance</h2>
            <p className="text-gray-700 mt-4 max-w-2xl mx-auto">
              Our comprehensive range of services is designed to meet all your laundry needs with exceptional quality
              and efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-48 overflow-hidden">
                <Image
                  src="/Bulk-Elegance.png"
                  alt="Bulk Bliss"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0a3049] mb-2">Bulk Bliss</h3>
                <p className="text-gray-700 mb-4">
                  We handle mountains of clothes with ease! Our Bulk Bliss service is perfect for businesses with lots
                  to wash. Sheets, towels, uniforms—we make them all sparkle. Plus, we're fast and gentle on fabrics.
                  Trust us to keep your garments looking their best.
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
                  Step into a world where your linens always impress. We offer top-notch rental and supply services. We
                  provide fresh, high-quality sheets and towels that make guests feel pampered. Perfect for hotels and
                  spas that value elegance and comfort.
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
                  alt="Furnishing Finesse"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0a3049] mb-2">Furnishing Finesse</h3>
                <p className="text-gray-700 mb-4">
                  Furnishing Finesse brings cozy to your doorstep! Soft, stylish cushions and drapes for any space.
                  They're perfect for lounges and event halls. From plush to chic, we supply the comfort and class your
                  business deserves. Let's make every corner inviting!
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
      <section className="bg-slate-100 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0a3049]">Why Choose Us?</h2>
            <p className="text-gray-700 mt-4 max-w-2xl mx-auto">
              We're not just a laundry service; we're a promise of excellence.
            </p>
            <p className="text-gray-700 mt-4 max-w-2xl mx-auto italic">
              ~ Our dedication to detail and superior quality sets us apart.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-[#5bc0de] rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#0a3049] mb-2">Proven Expertise</h3>
              <p className="text-gray-700">
                Years of experience and specialized knowledge in fabric care and cleaning techniques.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-[#5bc0de] rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#0a3049] mb-2">Speedy Service</h3>
              <p className="text-gray-700">
                Quick turnaround times without compromising on quality or attention to detail.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-[#5bc0de] rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#0a3049] mb-2">Top-Rated Care</h3>
              <p className="text-gray-700">
                Award-winning service with a commitment to excellence in every aspect of our work.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-[#5bc0de] rounded-full flex items-center justify-center mx-auto mb-4">
                <HeartHandshake className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#0a3049] mb-2">Genuine Support</h3>
              <p className="text-gray-700">
                Dedicated customer service team ready to assist with any questions or concerns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Say Hey! Call to Action */}
      <section className="bg-[#5bc0de] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Say Hey!</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Ready to dazzle? Click here and let's make laundry magic together!
          </p>
          <Link href="/contact">
            <Button className="bg-white hover:bg-gray-100 text-[#0a3049] rounded-full px-8 py-6 text-lg">
              Get in Touch
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
