import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { ContactForm } from "@/components/contact-form"

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#e6f7fc] py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-[#0a3049] mb-6">Contact Us</h1>
            <p className="text-lg text-[#0a3049] mb-8">
              Have questions or ready to elevate your laundry experience? We're here to help!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-[#0a3049] mb-6">Send Us a Message</h2>
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-[#0a3049] mb-6">Contact Information</h2>
              <p className="text-gray-700 mb-8">
                We'd love to hear from you. Reach out to us through any of the following channels or visit our facility.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <MapPin className="h-6 w-6 text-[#5bc0de]" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-[#0a3049]">Our Location</h3>
                    <p className="text-gray-700 mt-1">
                      17, Jalan Bukit Desa 5, Taman Bukit Desa,
                      <br />
                      Kuala Lumpur, Federal Territory of Kuala Lumpur,
                      <br />
                      Malaysia
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Phone className="h-6 w-6 text-[#5bc0de]" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-[#0a3049]">Phone</h3>
                    <p className="text-gray-700 mt-1">
                      +60 12-222 9425
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-lg font-medium text-[#0a3049] mb-4">Connect With Us</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://www.facebook.com/langsirdansofa.venus/"
                    className="bg-[#e6f7fc] p-3 rounded-full hover:bg-[#5bc0de] hover:text-white transition-colors"
                  >
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />                   
                    </svg>
                  </a> 
                  <a
                    href="https://api.whatsapp.com/send?phone=0122229425"
                    className="bg-[#e6f7fc] p-3 rounded-full hover:bg-[#5bc0de] hover:text-white transition-colors"
                  >
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2H7l-5 4V6c0-1.1.9-2 2-2z" />
                    </svg>
                  </a>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-slate-100 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0a3049]">Find Us</h2>
            <p className="text-gray-700 mt-4">
              Visit our facility to see our state-of-the-art equipment and meet our team.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="h-96 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.887387447723!2d101.68685561476363!3d3.139003997144994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc49f4628ebefb%3A0x30ef97d5fe645cd0!2s17%2C%20Jalan%20Bukit%20Desa%205%2C%20Taman%20Bukit%20Desa%2C%2058100%20Kuala%20Lumpur%2C%20Malaysia!5e0!3m2!1sen!2smy!4v1713501234567!5m2!1sen!2smy"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          </div>
        </div>
      </section>
    </main>
  )
}
