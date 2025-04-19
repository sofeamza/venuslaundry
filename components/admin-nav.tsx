"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { signOut } from "next-auth/react"
import { Button } from "@/components/ui/button"
import { LayoutDashboard, MessageSquare, Users, FileText, Settings, LogOut } from "lucide-react"

export function AdminNav() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path || pathname.startsWith(`${path}/`)
  }

  return (
    <div className="bg-[#0a3049] text-white h-screen w-64 fixed left-0 top-0 overflow-y-auto">
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6">Admin Panel</h1>

        <nav className="space-y-1">
          <Link href="/admin/dashboard">
            <div
              className={`flex items-center gap-3 px-4 py-3 rounded-md ${isActive("/admin/dashboard") ? "bg-[#5bc0de] text-white" : "hover:bg-[#0a3049]/80"}`}
            >
              <LayoutDashboard size={20} />
              <span>Dashboard</span>
            </div>
          </Link>

          <Link href="/admin/service-requests">
            <div
              className={`flex items-center gap-3 px-4 py-3 rounded-md ${isActive("/admin/service-requests") ? "bg-[#5bc0de] text-white" : "hover:bg-[#0a3049]/80"}`}
            >
              <FileText size={20} />
              <span>Service Requests</span>
            </div>
          </Link>

          <Link href="/admin/contacts">
            <div
              className={`flex items-center gap-3 px-4 py-3 rounded-md ${isActive("/admin/contacts") ? "bg-[#5bc0de] text-white" : "hover:bg-[#0a3049]/80"}`}
            >
              <MessageSquare size={20} />
              <span>Contact Messages</span>
            </div>
          </Link>

          <Link href="/admin/subscribers">
            <div
              className={`flex items-center gap-3 px-4 py-3 rounded-md ${isActive("/admin/subscribers") ? "bg-[#5bc0de] text-white" : "hover:bg-[#0a3049]/80"}`}
            >
              <Users size={20} />
              <span>Subscribers</span>
            </div>
          </Link>

          <Link href="/admin/settings">
            <div
              className={`flex items-center gap-3 px-4 py-3 rounded-md ${isActive("/admin/settings") ? "bg-[#5bc0de] text-white" : "hover:bg-[#0a3049]/80"}`}
            >
              <Settings size={20} />
              <span>Settings</span>
            </div>
          </Link>
        </nav>
      </div>

      <div className="absolute bottom-0 left-0 w-full p-6">
        <Button
          onClick={() => signOut({ callbackUrl: "/" })}
          className="w-full bg-transparent hover:bg-[#0a3049]/80 border border-white text-white"
        >
          <LogOut size={18} className="mr-2" />
          Sign Out
        </Button>
      </div>
    </div>
  )
}
