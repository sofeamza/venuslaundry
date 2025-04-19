import { redirect } from "next/navigation"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { executeQuery } from "@/lib/db"

export default async function AdminDashboardPage() {
  const session = await getServerSession(authOptions)

  // Check if user is authenticated and has admin role
  if (!session?.user || session.user.role !== "admin") {
    redirect("/admin/login")
  }

  // Fetch data counts
  const serviceRequests = await executeQuery(`SELECT * FROM "ServiceRequest"`, [])
  const contacts = await executeQuery(`SELECT * FROM "Contact"`, [])
  const newsletters = await executeQuery(`SELECT * FROM "Newsletter"`, [])

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold text-[#0a3049] mb-8">Admin Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold text-[#0a3049] mb-4">Service Requests</h2>
          <p className="text-3xl font-bold text-[#5bc0de]">{serviceRequests.length}</p>
          <p className="text-gray-600 mt-2">Total service requests</p>
          <Link href="/admin/service-requests">
            <Button className="mt-4 w-full bg-[#e6f7fc] hover:bg-[#d6f0f8] text-[#0a3049]">
              Manage Service Requests
            </Button>
          </Link>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold text-[#0a3049] mb-4">Contact Messages</h2>
          <p className="text-3xl font-bold text-[#5bc0de]">{contacts.length}</p>
          <p className="text-gray-600 mt-2">Total contact messages</p>
          <Link href="/admin/contacts">
            <Button className="mt-4 w-full bg-[#e6f7fc] hover:bg-[#d6f0f8] text-[#0a3049]">Manage Messages</Button>
          </Link>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold text-[#0a3049] mb-4">Newsletter Subscribers</h2>
          <p className="text-3xl font-bold text-[#5bc0de]">{newsletters.length}</p>
          <p className="text-gray-600 mt-2">Total newsletter subscribers</p>
          <Link href="/admin/subscribers">
            <Button className="mt-4 w-full bg-[#e6f7fc] hover:bg-[#d6f0f8] text-[#0a3049]">Manage Subscribers</Button>
          </Link>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-[#0a3049] mb-6">Recent Activity</h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold text-[#0a3049] mb-4">Recent Service Requests</h3>
            {serviceRequests.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2 px-4">Name</th>
                      <th className="text-left py-2 px-4">Email</th>
                      <th className="text-left py-2 px-4">Service Type</th>
                      <th className="text-left py-2 px-4">Status</th>
                      <th className="text-left py-2 px-4">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {serviceRequests.slice(0, 5).map((request: any) => (
                      <tr key={request.id} className="border-b">
                        <td className="py-2 px-4">{request.name}</td>
                        <td className="py-2 px-4">{request.email}</td>
                        <td className="py-2 px-4">{request.serviceType}</td>
                        <td className="py-2 px-4">{request.status}</td>
                        <td className="py-2 px-4">{new Date(request.createdAt).toLocaleDateString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <p className="text-gray-500">No service requests found</p>
            )}
          </div>

          <div>
            <h3 className="text-xl font-bold text-[#0a3049] mb-4">Recent Contact Messages</h3>
            {contacts.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2 px-4">Name</th>
                      <th className="text-left py-2 px-4">Email</th>
                      <th className="text-left py-2 px-4">Subject</th>
                      <th className="text-left py-2 px-4">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {contacts.slice(0, 5).map((contact: any) => (
                      <tr key={contact.id} className="border-b">
                        <td className="py-2 px-4">{`${contact.firstName} ${contact.lastName}`}</td>
                        <td className="py-2 px-4">{contact.email}</td>
                        <td className="py-2 px-4">{contact.subject}</td>
                        <td className="py-2 px-4">{new Date(contact.createdAt).toLocaleDateString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <p className="text-gray-500">No contact messages found</p>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
