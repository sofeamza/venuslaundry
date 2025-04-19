import { NextResponse } from "next/server"
import { executeQuery } from "@/lib/db"
import { z } from "zod"
import { hash } from "bcrypt"
import { v4 as uuidv4 } from "uuid"

// Define validation schema
const registerSchema = z.object({
  name: z.string().min(1, "Full name is required"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
})

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // Validate the request body
    const result = registerSchema.safeParse(body)

    if (!result.success) {
      return NextResponse.json({ error: "Invalid form data", details: result.error.format() }, { status: 400 })
    }

    // Check if user already exists
    const existingUser = await executeQuery(`SELECT * FROM "User" WHERE email = $1 LIMIT 1`, [body.email])

    if (existingUser.length > 0) {
      return NextResponse.json({ error: "User with this email already exists" }, { status: 409 })
    }

    // Hash password
    const hashedPassword = await hash(body.password, 10)
    const id = uuidv4()
    const now = new Date().toISOString()

    // Create user
    await executeQuery(
      `INSERT INTO "User" (id, name, email, "hashedPassword", role, "createdAt", "updatedAt") 
       VALUES ($1, $2, $3, $4, $5, $6, $7)`,
      [id, body.name, body.email, hashedPassword, "user", now, now],
    )

    return NextResponse.json(
      {
        user: {
          id,
          name: body.name,
          email: body.email,
          role: "user",
        },
        message: "User created successfully",
      },
      { status: 201 },
    )
  } catch (error) {
    console.error("Error registering user:", error)
    return NextResponse.json({ error: "Failed to register user" }, { status: 500 })
  }
}
