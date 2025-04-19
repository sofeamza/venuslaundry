"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"
import { z } from "zod"

// Define validation schema
const newsletterSchema = z.object({
  email: z.string().email("Invalid email address"),
})

export function NewsletterForm() {
  const { toast } = useToast()
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validate email
    const result = newsletterSchema.safeParse({ email })
    if (!result.success) {
      setError("Please enter a valid email address")
      return
    }

    setError("")
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to subscribe")
      }

      // Reset form on success
      setEmail("")

      toast({
        title: "Subscribed!",
        description: data.message || "You've successfully subscribed to our newsletter.",
      })
    } catch (error) {
      console.error("Error subscribing to newsletter:", error)
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to subscribe. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
      <div className="flex-grow">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
            if (error) setError("")
          }}
          className="w-full"
        />
        {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
      </div>
      <Button type="submit" disabled={isSubmitting} className="bg-[#5bc0de] hover:bg-[#4ab0ce] text-white">
        {isSubmitting ? "Subscribing..." : "Subscribe"}
      </Button>
    </form>
  )
}
