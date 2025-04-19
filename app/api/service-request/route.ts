import { NextResponse } from "next/server"
import { executeQuery } from "@/lib/db"
import { z } from "zod"
import { v4 as uuidv4 } from "uuid"

// Define validation schema
const serviceRequestSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(1, "Phone number is required"),
  serviceType: z.enum(["bulk-elegance", "linen-luxury", "soft-splendor"]),
  details: z.string().min(10, "Please provide more details about your request"),
  date: z.string().optional(),
})

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // Validate the request body
    const result = serviceRequestSchema.safeParse(body)

    if (!result.success) {
      return NextResponse.json({ error: "Invalid form data", details: result.error.format() }, { status: 400 })
    }

    // Parse date if provided
    const date = body.date ? new Date(body.date).toISOString() : null
    const id = uuidv4()

    // Save to database
    await executeQuery(
      `INSERT INTO "ServiceRequest" (id, name, email, phone, "serviceType", details, date, "createdAt", status) 
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)`,
      [
        id,
        body.name,
        body.email,
        body.phone,
        body.serviceType,
        body.details,
        date,
        new Date().toISOString(),
        "pending",
      ],
    )

    return NextResponse.json({ success: true, id })
  } catch (error) {
    console.error("Error processing service request:", error)
    return NextResponse.json({ error: "Failed to process service request" }, { status: 500 })
  }
}
