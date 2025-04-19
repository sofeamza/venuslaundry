import Link from "next/link"
import Image from "next/image"
import { redirect } from "next/navigation"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, FileText, Truck, CheckCircle, AlertCircle } from "lucide-react"

export default async function FurnishingFinesseServicePage() {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect("/login")
  }

  return (
    <main className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <Link href="/dashboard/services" className="text-[#5bc0de] hover:underline mb-4 inline-block">
            ← Back to Services
          </Link>
          <h1 className="text-3xl font-bold text-[#0a3049]">Furnishing Finesse Service</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-2">
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3">
                  <Image
                    src="/soft-splendor.jpg"
                    alt="Furnishing Finesse"
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                <div className="md:w-2/3">
                  <h2 className="text-2xl font-bold text-[#0a3049] mb-2">Furnishing Finesse</h2>
                  <p className="text-gray-700 mb-4">
                    We clean and maintain soft furnishings, adding comfort and class to your space. Our specialized
                    cleaning processes preserve the quality and extend the life of your valuable furnishings.
                  </p>
                  <div className="flex items-center">
                    <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">Pending</span>
                    <span className="ml-4 text-gray-600 text-sm">
                      <span className="font-medium">Request ID:</span> FF-2023-0356
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
                    <p className="text-gray-600">Quarterly (Every 3 months)</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="h-5 w-5 text-[#5bc0de] mr-2 mt-0.5" />
                  <div>
                    <p className="font-medium">Next Scheduled Service</p>
                    <p className="text-gray-600">Not yet scheduled</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FileText className="h-5 w-5 text-[#5bc0de] mr-2 mt-0.5" />
                  <div>
                    <p className="font-medium">Service Package</p>
                    <p className="text-gray-600">Office Furnishings Package</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Truck className="h-5 w-5 text-[#5bc0de] mr-2 mt-0.5" />
                  <div>
                    <p className="font-medium">Service Method</p>
                    <p className="text-gray-600">On-site Cleaning</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold text-[#0a3049] mb-4">Service Status</h2>
              <div className="mb-6">
                <div className="relative pt-1">
                  <div className="flex mb-2 items-center justify-between">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-[#0a3049] bg-[#e6f7fc]">
                        Application Progress
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-semibold inline-block text-[#0a3049]">50%</span>
                    </div>
                  </div>
                  <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                    <div
                      style={{ width: "50%" }}
                      className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-[#5bc0de]"
                    ></div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <div>
                    <p className="font-medium">Application Submitted</p>
                    <p className="text-sm text-gray-600">May 20, 2023 - 2:45 PM</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <div>
                    <p className="font-medium">Initial Review Completed</p>
                    <p className="text-sm text-gray-600">May 21, 2023 - 10:30 AM</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <AlertCircle className="h-5 w-5 text-yellow-500 mr-2 mt-0.5" />
                  <div>
                    <p className="font-medium">Site Assessment Pending</p>
                    <p className="text-sm text-gray-600">Scheduled for May 26, 2023</p>
                  </div>
                </div>
                <div className="flex items-start opacity-50">
                  <div className="h-5 w-5 border-2 border-gray-300 rounded-full mr-2 mt-0.5"></div>
                  <div>
                    <p className="font-medium">Service Agreement</p>
                    <p className="text-sm text-gray-600">Pending</p>
                  </div>
                </div>
                <div className="flex items-start opacity-50">
                  <div className="h-5 w-5 border-2 border-gray-300 rounded-full mr-2 mt-0.5"></div>
                  <div>
                    <p className="font-medium">Service Activation</p>
                    <p className="text-sm text-gray-600">Pending</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <h2 className="text-xl font-bold text-[#0a3049] mb-4">Quick Actions</h2>
              <div className="space-y-3">
                <Button className="w-full bg-[#5bc0de] hover:bg-[#4ab0ce] text-white">Check Application Status</Button>
                <Button className="w-full bg-[#0a3049] hover:bg-[#0a3049]/90 text-white">Update Request Details</Button>
                <Button className="w-full bg-white border border-[#5bc0de] hover:bg-[#e6f7fc] text-[#0a3049]">
                  Cancel Request
                </Button>
                <Button className="w-full bg-white border border-[#5bc0de] hover:bg-[#e6f7fc] text-[#0a3049]">
                  Contact Support
                </Button>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <h2 className="text-xl font-bold text-[#0a3049] mb-4">Requested Service Package</h2>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Office furniture cleaning</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Curtain and blind cleaning</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Carpet deep cleaning</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Stain protection treatment</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Quarterly maintenance</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Emergency spot cleaning</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#e6f7fc] p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold text-[#0a3049] mb-4">Next Steps</h2>
              <p className="text-gray-700 mb-4">
                Our team will conduct a site assessment on May 26, 2023, to evaluate your furnishings and finalize the
                service agreement.
              </p>
              <Button className="w-full bg-[#0a3049] hover:bg-[#0a3049]/90 text-white">Reschedule Assessment</Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
