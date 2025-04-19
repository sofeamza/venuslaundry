import Link from "next/link"
import Image from "next/image"
import { redirect } from "next/navigation"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, FileText, Truck, CheckCircle } from "lucide-react"

export default async function BulkBlissServicePage() {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect("/login")
  }

  // Service history data (would come from database in a real app)
  const serviceHistory = [
    {
      id: "SH001",
      date: "May 15, 2023",
      type: "Regular Service",
      status: "Completed",
      items: "250 bed sheets, 500 towels, 100 tablecloths",
      notes: "All items cleaned and delivered on time",
    },
    {
      id: "SH002",
      date: "April 30, 2023",
      type: "Regular Service",
      status: "Completed",
      items: "250 bed sheets, 500 towels, 100 tablecloths",
      notes: "Customer requested extra fabric softener",
    },
    {
      id: "SH003",
      date: "April 15, 2023",
      type: "Regular Service",
      status: "Completed",
      items: "250 bed sheets, 500 towels, 100 tablecloths",
      notes: "Some stained items required special treatment",
    },
  ]

  return (
    <main className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <Link href="/dashboard/services" className="text-[#5bc0de] hover:underline mb-4 inline-block">
            ← Back to Services
          </Link>
          <h1 className="text-3xl font-bold text-[#0a3049]">Bulk Bliss Service</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-2">
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3">
                  <Image
                    src="/bulk-elegance.jpg"
                    alt="Bulk Bliss"
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                <div className="md:w-2/3">
                  <h2 className="text-2xl font-bold text-[#0a3049] mb-2">Bulk Bliss</h2>
                  <p className="text-gray-700 mb-4">
                    Efficient large-scale laundry services ensuring your linens look clean and pristine! Our
                    commercial-grade cleaning processes handle high volumes with consistent quality.
                  </p>
                  <div className="flex items-center">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Active</span>
                    <span className="ml-4 text-gray-600 text-sm">
                      <span className="font-medium">Contract ID:</span> BLK-2023-0542
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <h2 className="text-xl font-bold text-[#0a3049] mb-4">Service Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <Calendar className="h-5 w-5 text-[#5bc0de] mr-2 mt-0.5" />
                  <div>
                    <p className="font-medium">Service Frequency</p>
                    <p className="text-gray-600">Bi-weekly (Every 2 weeks)</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="h-5 w-5 text-[#5bc0de] mr-2 mt-0.5" />
                  <div>
                    <p className="font-medium">Next Scheduled Service</p>
                    <p className="text-gray-600">May 25, 2023 - 9:00 AM</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FileText className="h-5 w-5 text-[#5bc0de] mr-2 mt-0.5" />
                  <div>
                    <p className="font-medium">Service Package</p>
                    <p className="text-gray-600">Premium Hotel Package</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Truck className="h-5 w-5 text-[#5bc0de] mr-2 mt-0.5" />
                  <div>
                    <p className="font-medium">Delivery Method</p>
                    <p className="text-gray-600">Door-to-Door Service</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold text-[#0a3049] mb-4">Service History</h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4">Date</th>
                      <th className="text-left py-3 px-4">Service Type</th>
                      <th className="text-left py-3 px-4">Status</th>
                      <th className="text-left py-3 px-4">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {serviceHistory.map((history) => (
                      <tr key={history.id} className="border-b hover:bg-gray-50">
                        <td className="py-3 px-4">{history.date}</td>
                        <td className="py-3 px-4">{history.type}</td>
                        <td className="py-3 px-4">
                          <span className="flex items-center">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-1" />
                            {history.status}
                          </span>
                        </td>
                        <td className="py-3 px-4">
                          <Button size="sm" variant="outline" className="text-xs">
                            View Details
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <h2 className="text-xl font-bold text-[#0a3049] mb-4">Quick Actions</h2>
              <div className="space-y-3">
                <Button className="w-full bg-[#5bc0de] hover:bg-[#4ab0ce] text-white">Schedule Service</Button>
                <Button className="w-full bg-[#0a3049] hover:bg-[#0a3049]/90 text-white">Modify Service</Button>
                <Button className="w-full bg-white border border-[#5bc0de] hover:bg-[#e6f7fc] text-[#0a3049]">
                  View Invoices
                </Button>
                <Button className="w-full bg-white border border-[#5bc0de] hover:bg-[#e6f7fc] text-[#0a3049]">
                  Contact Support
                </Button>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <h2 className="text-xl font-bold text-[#0a3049] mb-4">Service Package</h2>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Up to 500 items per service</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Commercial-grade cleaning</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Stain removal treatment</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Eco-friendly detergents</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Free pickup and delivery</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>24-hour turnaround available</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#e6f7fc] p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold text-[#0a3049] mb-4">Need Assistance?</h2>
              <p className="text-gray-700 mb-4">
                Our customer support team is available to help you with any questions or concerns about your Bulk Bliss
                service.
              </p>
              <Button className="w-full bg-[#0a3049] hover:bg-[#0a3049]/90 text-white">Contact Support</Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
