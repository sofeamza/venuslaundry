import Link from "next/link"
import Image from "next/image"
import { redirect } from "next/navigation"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, FileText, Truck, CheckCircle } from "lucide-react"

export default async function LinenLuxuryServicePage() {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect("/login")
  }

  // Service history data (would come from database in a real app)
  const serviceHistory = [
    {
      id: "SH001",
      date: "May 18, 2023",
      type: "Regular Delivery",
      status: "Completed",
      items: "200 premium tablecloths, 300 napkins, 50 table runners",
      notes: "All items delivered in excellent condition",
    },
    {
      id: "SH002",
      date: "May 4, 2023",
      type: "Regular Delivery",
      status: "Completed",
      items: "200 premium tablecloths, 300 napkins, 50 table runners",
      notes: "Customer requested additional napkins for special event",
    },
    {
      id: "SH003",
      date: "April 20, 2023",
      type: "Regular Delivery",
      status: "Completed",
      items: "200 premium tablecloths, 300 napkins, 50 table runners",
      notes: "Standard delivery",
    },
  ]

  return (
    <main className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <Link href="/dashboard/services" className="text-[#5bc0de] hover:underline mb-4 inline-block">
            ← Back to Services
          </Link>
          <h1 className="text-3xl font-bold text-[#0a3049]">Linen Luxury Service</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-2">
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3">
                  <Image
                    src="/linen-luxury.jpg"
                    alt="Linen Luxury"
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                <div className="md:w-2/3">
                  <h2 className="text-2xl font-bold text-[#0a3049] mb-2">Linen Luxury</h2>
                  <p className="text-gray-700 mb-4">
                    High-quality linen rental and supply, making every guest's experience exceptional. Our premium
                    linens add elegance and sophistication to your establishment.
                  </p>
                  <div className="flex items-center">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Active</span>
                    <span className="ml-4 text-gray-600 text-sm">
                      <span className="font-medium">Contract ID:</span> LLX-2023-0789
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
                    <p className="text-gray-600">Weekly (Every Thursday)</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="h-5 w-5 text-[#5bc0de] mr-2 mt-0.5" />
                  <div>
                    <p className="font-medium">Next Scheduled Delivery</p>
                    <p className="text-gray-600">May 28, 2023 - 10:00 AM</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FileText className="h-5 w-5 text-[#5bc0de] mr-2 mt-0.5" />
                  <div>
                    <p className="font-medium">Service Package</p>
                    <p className="text-gray-600">Restaurant Elite Package</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Truck className="h-5 w-5 text-[#5bc0de] mr-2 mt-0.5" />
                  <div>
                    <p className="font-medium">Delivery Method</p>
                    <p className="text-gray-600">Scheduled Delivery</p>
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
                <Button className="w-full bg-[#5bc0de] hover:bg-[#4ab0ce] text-white">Schedule Delivery</Button>
                <Button className="w-full bg-[#0a3049] hover:bg-[#0a3049]/90 text-white">Modify Order</Button>
                <Button className="w-full bg-white border border-[#5bc0de] hover:bg-[#e6f7fc] text-[#0a3049]">
                  View Invoices
                </Button>
                <Button className="w-full bg-white border border-[#5bc0de] hover:bg-[#e6f7fc] text-[#0a3049]">
                  Contact Support
                </Button>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <h2 className="text-xl font-bold text-[#0a3049] mb-4">Your Linen Package</h2>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>200 premium tablecloths</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>300 high-quality napkins</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>50 elegant table runners</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Weekly replacement</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Emergency replacements available</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Seasonal color options</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#e6f7fc] p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold text-[#0a3049] mb-4">Special Event Coming Up?</h2>
              <p className="text-gray-700 mb-4">
                Need additional linens for a special event? We can provide custom linens to match your theme and
                requirements.
              </p>
              <Button className="w-full bg-[#0a3049] hover:bg-[#0a3049]/90 text-white">Request Special Order</Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
