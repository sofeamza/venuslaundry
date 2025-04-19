import { NextResponse } from "next/server"
import { executeQuery } from "@/lib/db"
import { z } from "zod"
import { v4 as uuidv4 } from "uuid"

// Define validation schema
const contactSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // Validate the request body
    const result = contactSchema.safeParse(body)

    if (!result.success) {
      return NextResponse.json({ error: "Invalid form data", details: result.error.format() }, { status: 400 })
    }

    // Save to database
    const id = uuidv4()
    const phone = body.phone || ""

    await executeQuery(
      `INSERT INTO "Contact" (id, "firstName", "lastName", email, phone, subject, message, "createdAt", status) 
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)`,
      [
        id,
        body.firstName,
        body.lastName,
        body.email,
        phone,
        body.subject,
        body.message,
        new Date().toISOString(),
        "new",
      ],
    )

    return NextResponse.json({ success: true, id })
  } catch (error) {
    console.error("Error processing contact form:", error)
    return NextResponse.json({ error: "Failed to process contact form" }, { status: 500 })
  }
}
