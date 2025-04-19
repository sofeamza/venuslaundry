import { redirect } from "next/navigation"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"
import { Button } from "@/components/ui/button"
import { executeQuery } from "@/lib/db"

export default async function ServiceRequestsPage() {
  const session = await getServerSession(authOptions)

  // Check if user is authenticated and has admin role
  if (!session?.user || session.user.role !== "admin") {
    redirect("/admin/login")
  }

  // Fetch service requests from the database
  const serviceRequests = await executeQuery(`SELECT * FROM "ServiceRequest" ORDER BY "createdAt" DESC`, [])

  return (
    <main className="p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-[#0a3049]">Service Requests</h1>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4">Name</th>
                <th className="text-left py-3 px-4">Email</th>
                <th className="text-left py-3 px-4">Phone</th>
                <th className="text-left py-3 px-4">Service Type</th>
                <th className="text-left py-3 px-4">Date</th>
                <th className="text-left py-3 px-4">Status</th>
                <th className="text-left py-3 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {serviceRequests.length === 0 ? (
                <tr>
                  <td colSpan={7} className="py-4 px-4 text-center text-gray-500">
                    No service requests found
                  </td>
                </tr>
              ) : (
                serviceRequests.map((request: any) => (
                  <tr key={request.id} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4">{request.name}</td>
                    <td className="py-3 px-4">{request.email}</td>
                    <td className="py-3 px-4">{request.phone}</td>
                    <td className="py-3 px-4">
                      {request.serviceType === "bulk-elegance"
                        ? "Bulk Elegance"
                        : request.serviceType === "linen-luxury"
                          ? "Linen Luxury"
                          : "Soft Splendor"}
                    </td>
                    <td className="py-3 px-4">
                      {request.date ? new Date(request.date).toLocaleDateString() : "Not specified"}
                    </td>
                    <td className="py-3 px-4">
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${
                          request.status === "pending"
                            ? "bg-yellow-100 text-yellow-800"
                            : request.status === "confirmed"
                              ? "bg-green-100 text-green-800"
                              : request.status === "completed"
                                ? "bg-blue-100 text-blue-800"
                                : "bg-red-100 text-red-800"
                        }`}
                      >
                        {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline" className="text-xs">
                          View
                        </Button>
                        <Button size="sm" variant="outline" className="text-xs">
                          Edit
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  )
}
