"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ServiceRequestForm } from "@/components/service-request-form"

interface ServiceRequestButtonProps {
  serviceType: "bulk-elegance" | "linen-luxury" | "soft-splendor"
  buttonText: string
  className?: string
}

export function ServiceRequestButton({ serviceType, buttonText, className }: ServiceRequestButtonProps) {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open)
  }

  const handleServicePage = () => {
    router.push(`/services/${serviceType}`)
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button className={className}>{buttonText}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Request Service</DialogTitle>
          <DialogDescription>
            Fill out the form below to request our service. Our team will contact you shortly.
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4">
          <ServiceRequestForm
            initialServiceType={serviceType}
            onSuccess={() => setIsOpen(false)}
            onLearnMore={handleServicePage}
          />
        </div>
      </DialogContent>
    </Dialog>
  )
}
