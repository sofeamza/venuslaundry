import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Star } from "@/components/ui/star"

export default function PortfolioPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#e6f7fc] py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-[#0a3049] mb-6">Our Portfolio</h1>
            <p className="text-lg text-[#0a3049] mb-8">
              Explore our work with prestigious clients across various industries.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#0a3049] mb-12 text-center">Featured Projects</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-64 overflow-hidden">
                <Image
                  src="/portfolio-hotel.png"
                  alt="Luxury Hotel Project"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#0a3049] mb-2">Hotel Elegance</h3>
                <p className="text-gray-700 mb-4">
                Welcome to a world where your hotelʼs linens speak volumes about your taste for excellence. Our Hotel Elegance service ensures your guests are wrapped in top-tier comfort. We provide premium laundry care for your bedding, towels, and robes, making them feel plush, look pristine, and smell divine. Our meticulous attention to detail guarantees each item returns to you ready to pamper and impress. Plus, with our eco-friendly methods, youʼre not just choosing luxury, youʼre choosing sustainability. Say goodbye to laundry woes and hello to delighted guests, every day!
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-64 overflow-hidden">
                <Image
                  src="portfolio-spa.png"
                  alt="Spa Project"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#0a3049] mb-2">Spa Serenity</h3>
                <p className="text-gray-700 mb-4">
                Dive into Spa Serenity, where we understand the essence of a tranquil spa experience starts with the finest linens. Our service lavishes your spa with impeccably cleaned and folded towels, robes, and spa wear. Each piece is treated with gentle, hypoallergenic products, ensuring comfort for even the most sensitive skin. The result? A blissful, sensory journey for your clients from the moment they step in. Partner with us and transform your spaʼs ambiance into a sanctuary of purity and peace. Your clientsʼ relaxation is our top priority.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-64 overflow-hidden">
                <Image
                  src="/portfolio-event.png"
                  alt="Event portfolio"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0a3049] mb-2">Event Glamour</h3>
                <p className="text-gray-700 mb-4">Make every event sparkle with our Event Glamour service! We cater to convocations, weddings, and galas, ensuring your linens and gowns are beyond compare. Our premium treatments give fabrics a stunning finish, so tablecloths dazzle and gowns gleam. Fast, reliable, and with an eye for style, we keep your events looking their best. Trust us to handle the details while you shine in the spotlight. With us, your eventʼs elegance will be the talk of the town!</p>
              </div>
            </div>

          </div>  
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-48 overflow-hidden">
                <Image
                  src="/portfolio-restaurant.png"
                  alt="Luxury Restaurant"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0a3049] mb-2">Restaurant Radiance</h3>
                <p className="text-gray-700 mb-4">Serve up sophistication with our Restaurant Radiance service. We specialize in keeping your restaurantʼs linens—napkins, tablecloths, and chef wear—spotless and splendid. Each item is treated to our signature clean, ensuring a dining atmosphere thatʼs as impeccable as your cuisine. Weʼre fast, efficient, and we understand the importance of presentation in the culinary world. Let us take care of the details, so you can focus on creating unforgettable meals and experiences for your guests. Your tables will thank you!</p>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-48 overflow-hidden">
                <Image
                  src="/portfolio-linen.png"
                  alt="Linen Leasing"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0a3049] mb-2">Linen Leasing</h3>
                <p className="text-gray-700 mb-4">Step into the ease of our Linen Leasing service, your ultimate solution for top-notch linens without the hassle. Perfect for businesses needing flexibility, we offer a wide range of stylish, high-quality linens for rent. From crisp sheets to elegant tableware, our leasing options are convenient and cost-effective. We handle the laundering, you enjoy a constant rotation of fresh, beautiful linens. Itʼs the smart choice for keeping your business looking its best at all times. Let us manage the linens, so you can manage the applause!</p>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-48 overflow-hidden">
                <Image
                  src="/portfolio-softmakeover.png"
                  alt="Soft Makeover"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0a3049] mb-2">Soft Makeover</h3>
                <p className="text-gray-700 mb-4">Transform any space with our Soft Makeover service, where comfort meets style. We supply and maintain a variety of soft furnishings like curtains, cushions, and throws. Each piece is chosen for its quality and washed with care to ensure lasting softness and vibrancy. Whether youʼre refreshing a salon, updating a hotel room, or giving a restaurant a new look, our selections bring warmth and elegance to your establishment. With our help, you can create inviting spaces that guests love. Letʼs make your place the cozy corner everyone adores!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="bg-slate-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#0a3049] mb-12 text-center">Client Testimonials</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-center mb-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                "Venus Laundry has transformed our hotel operations. Their attention to detail and consistent quality
                have made them an invaluable partner."
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-center mb-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                "The quality of service is exceptional. Our restaurant linens are always impeccable, which enhances our
                guests' dining experience."
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-center mb-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                "As a healthcare facility, we require the highest standards of cleanliness. Venus Laundry consistently
                exceeds our expectations."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-[#0a3049] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Join Our Success Stories?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Let us help elevate your business with our premium laundry services. Contact us today to discuss your needs.
          </p>
        </div>
      </section>
    </main>
  )
}
