"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { z } from "zod"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Define validation schema
const serviceRequestSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(1, "Phone number is required"),
  serviceType: z.enum(["bulk-elegance", "linen-luxury", "soft-splendor"]),
  details: z.string().min(10, "Please provide more details about your request"),
  date: z.string().optional(),
})

type ServiceRequestFormData = z.infer<typeof serviceRequestSchema>

// Update the component props
interface ServiceRequestFormProps {
  initialServiceType?: "bulk-elegance" | "linen-luxury" | "soft-splendor"
  onSuccess?: () => void
  onLearnMore?: () => void
}

export function ServiceRequestForm({
  initialServiceType = "bulk-elegance",
  onSuccess,
  onLearnMore,
}: ServiceRequestFormProps) {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState<ServiceRequestFormData>({
    name: "",
    email: "",
    phone: "",
    serviceType: initialServiceType,
    details: "",
    date: "",
  })
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, serviceType: value as "bulk-elegance" | "linen-luxury" | "soft-splendor" }))

    // Clear error when user selects
    if (errors.serviceType) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors.serviceType
        return newErrors
      })
    }
  }

  const validateForm = () => {
    try {
      serviceRequestSchema.parse(formData)
      setErrors({})
      return true
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {}
        error.errors.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0] as string] = err.message
          }
        })
        setErrors(newErrors)
      }
      return false
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)

    try {
      const response = await fetch("/api/service-request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit request")
      }

      // Reset form on success
      setFormData({
        name: "",
        email: "",
        phone: "",
        serviceType: "bulk-elegance",
        details: "",
        date: "",
      })

      toast({
        title: "Request Submitted!",
        description: "We've received your service request and will contact you shortly.",
      })

      if (onSuccess) {
        onSuccess()
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to send request. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-1">
        <label htmlFor="name" className="text-sm font-medium text-gray-700">
          Full Name
        </label>
        <Input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your full name" />
        {errors.name && <p className="text-xs text-red-500">{errors.name}</p>}
      </div>
      <div className="space-y-1">
        <label htmlFor="email" className="text-sm font-medium text-gray-700">
          Email Address
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email address"
        />
        {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
      </div>
      <div className="space-y-1">
        <label htmlFor="phone" className="text-sm font-medium text-gray-700">
          Phone Number
        </label>
        <Input
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Enter your phone number"
        />
        {errors.phone && <p className="text-xs text-red-500">{errors.phone}</p>}
      </div>
      <div className="space-y-1">
        <label htmlFor="serviceType" className="text-sm font-medium text-gray-700">
          Service Type
        </label>
        <Select value={formData.serviceType} onValueChange={handleSelectChange}>
          <SelectTrigger>
            <SelectValue placeholder="Select a service" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="bulk-elegance">Bulk Elegance</SelectItem>
            <SelectItem value="linen-luxury">Linen Luxury</SelectItem>
            <SelectItem value="soft-splendor">Soft Splendor</SelectItem>
          </SelectContent>
        </Select>
        {errors.serviceType && <p className="text-xs text-red-500">{errors.serviceType}</p>}
      </div>
      <div className="space-y-1">
        <label htmlFor="date" className="text-sm font-medium text-gray-700">
          Preferred Date (Optional)
        </label>
        <Input id="date" name="date" type="date" value={formData.date} onChange={handleChange} />
        {errors.date && <p className="text-xs text-red-500">{errors.date}</p>}
      </div>
      <div className="space-y-1">
        <label htmlFor="details" className="text-sm font-medium text-gray-700">
          Service Details
        </label>
        <Textarea
          id="details"
          name="details"
          value={formData.details}
          onChange={handleChange}
          placeholder="Please describe your service needs in detail"
          rows={5}
        />
        {errors.details && <p className="text-xs text-red-500">{errors.details}</p>}
      </div>
      <div className="flex flex-col sm:flex-row gap-2">
        <Button
          type="submit"
          disabled={isSubmitting}
          className="flex-1 bg-[#5bc0de] hover:bg-[#4ab0ce] text-white rounded-full py-2"
        >
          {isSubmitting ? "Submitting..." : "Submit Request"}
        </Button>
      </div>
    </form>
  )
}
