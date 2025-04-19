import { NextResponse } from "next/server"
import { executeQuery } from "@/lib/db"
import { z } from "zod"
import { v4 as uuidv4 } from "uuid"

// Define validation schema
const newsletterSchema = z.object({
  email: z.string().email("Invalid email address"),
})

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // Validate the request body
    const result = newsletterSchema.safeParse(body)

    if (!result.success) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 })
    }

    // Check if email already exists
    const existingSubscription = await executeQuery(`SELECT * FROM "Newsletter" WHERE email = $1 LIMIT 1`, [body.email])

    if (existingSubscription.length > 0) {
      return NextResponse.json({ message: "You're already subscribed to our newsletter!" }, { status: 200 })
    }

    // Save to database
    const id = uuidv4()
    await executeQuery(`INSERT INTO "Newsletter" (id, email, "createdAt") VALUES ($1, $2, $3)`, [
      id,
      body.email,
      new Date().toISOString(),
    ])

    return NextResponse.json({ success: true, message: "Successfully subscribed to newsletter" })
  } catch (error) {
    console.error("Error processing newsletter subscription:", error)
    return NextResponse.json({ error: "Failed to process newsletter subscription" }, { status: 500 })
  }
}
