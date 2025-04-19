import Link from "next/link"
import Image from "next/image"
import { redirect } from "next/navigation"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"
import { Button } from "@/components/ui/button"

export default async function DashboardServicesPage() {
  const session = await getServerSession(authOptions)

  // Service data
  const services = [
    {
      id: "bulk-bliss",
      name: "Bulk Bliss",
      description: "Efficient large-scale laundry services ensuring your linens look clean and pristine!",
      image: "/bulk-elegance.jpg",
      status: "Active",
      nextService: "May 25, 2023",
    },
    {
      id: "linen-luxury",
      name: "Linen Luxury",
      description: "High-quality linen rental and supply, making every guest's experience exceptional.",
      image: "/linen-luxury.jpg",
      status: "Active",
      nextService: "May 28, 2023",
    },
    {
      id: "furnishing-finesse",
      name: "Furnishing Finesse",
      description: "We clean and maintain soft furnishings, adding comfort and class to your space.",
      image: "/soft-splendor.jpg",
      status: "Pending",
      nextService: "Not scheduled",
    },
  ]

  return (
    <main className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-[#0a3049]">My Services</h1>
          <Button className="bg-[#5bc0de] hover:bg-[#4ab0ce] text-white">Request New Service</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-[#0a3049] mb-4">Active Services</h2>
            <p className="text-3xl font-bold text-[#5bc0de]">2</p>
            <p className="text-gray-600 mt-2">Current active service contracts</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-[#0a3049] mb-4">Pending Services</h2>
            <p className="text-3xl font-bold text-[#5bc0de]">1</p>
            <p className="text-gray-600 mt-2">Services awaiting confirmation</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-[#0a3049] mb-4">Upcoming Services</h2>
            <p className="text-3xl font-bold text-[#5bc0de]">2</p>
            <p className="text-gray-600 mt-2">Scheduled in the next 7 days</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-[#0a3049] mb-6">My Service Subscriptions</h2>

          <div className="grid grid-cols-1 gap-6">
            {services.map((service) => (
              <div key={service.id} className="border rounded-lg overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="md:col-span-1 h-48 md:h-full overflow-hidden">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.name}
                      width={300}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="md:col-span-3 p-6">
                    <div className="flex flex-col md:flex-row justify-between mb-4">
                      <h3 className="text-xl font-bold text-[#0a3049]">{service.name}</h3>
                      <div className="mt-2 md:mt-0">
                        <span
                          className={`px-3 py-1 rounded-full text-sm ${
                            service.status === "Active"
                              ? "bg-green-100 text-green-800"
                              : "bg-yellow-100 text-yellow-800"
                          }`}
                        >
                          {service.status}
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4">{service.description}</p>
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                      <div>
                        <p className="text-sm text-gray-600">
                          <span className="font-medium">Next Service:</span> {service.nextService}
                        </p>
                      </div>
                      <div className="mt-4 md:mt-0">
                        <Link href={`/dashboard/services/${service.id}`}>
                          <Button className="bg-[#e6f7fc] hover:bg-[#d6f0f8] text-[#0a3049] mr-2">View Details</Button>
                        </Link>
                        <Button className="bg-[#5bc0de] hover:bg-[#4ab0ce] text-white">Schedule Service</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
