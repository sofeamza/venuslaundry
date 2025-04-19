import fs from "fs/promises"
import path from "path"
import { v4 as uuidv4 } from "uuid"
import { hash } from "bcrypt"

// Define the data directory
const DATA_DIR = path.join(process.cwd(), "data")

// Ensure data directory exists
async function ensureDataDir() {
  try {
    await fs.mkdir(DATA_DIR, { recursive: true })
  } catch (error) {
    console.error("Error creating data directory:", error)
  }
}

async function main() {
  console.log("Seeding JSON database...")
  await ensureDataDir()

  // Create admin user
  const adminPassword = await hash("admin123", 10)
  const admin = {
    id: uuidv4(),
    name: "Admin User",
    email: "admin@venuslaundry.com",
    hashedPassword: adminPassword,
    role: "admin",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  }

  // Create regular user
  const userPassword = await hash("user123", 10)
  const user = {
    id: uuidv4(),
    name: "Test User",
    email: "user@example.com",
    hashedPassword: userPassword,
    role: "user",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  }

  // Create sample service requests
  const serviceRequests = [
    {
      id: uuidv4(),
      name: "John Smith",
      email: "john@example.com",
      phone: "123-456-7890",
      serviceType: "bulk-elegance",
      details: "Need laundry service for our hotel with 50 rooms",
      status: "pending",
      createdAt: new Date().toISOString(),
    },
    {
      id: uuidv4(),
      name: "Sarah Johnson",
      email: "sarah@example.com",
      phone: "123-456-7891",
      serviceType: "linen-luxury",
      details: "Looking for linen rental for our restaurant",
      status: "confirmed",
      createdAt: new Date().toISOString(),
    },
    {
      id: uuidv4(),
      name: "Michael Brown",
      email: "michael@example.com",
      phone: "123-456-7892",
      serviceType: "soft-splendor",
      details: "Need cleaning for office curtains and upholstery",
      status: "completed",
      createdAt: new Date().toISOString(),
    },
  ]

  // Create sample contact messages
  const contacts = [
    {
      id: uuidv4(),
      firstName: "David",
      lastName: "Wilson",
      email: "david@example.com",
      phone: "123-456-7893",
      subject: "Service Inquiry",
      message: "I'm interested in your laundry services for my business. Please provide more information.",
      createdAt: new Date().toISOString(),
      status: "new",
    },
    {
      id: uuidv4(),
      firstName: "Emily",
      lastName: "Davis",
      email: "emily@example.com",
      phone: "123-456-7894",
      subject: "Pricing Question",
      message: "Could you please send me your pricing details for linen rental services?",
      createdAt: new Date().toISOString(),
      status: "new",
    },
  ]

  // Create sample newsletter subscribers
  const subscribers = [
    { id: uuidv4(), email: "subscriber1@example.com", createdAt: new Date().toISOString() },
    { id: uuidv4(), email: "subscriber2@example.com", createdAt: new Date().toISOString() },
    { id: uuidv4(), email: "subscriber3@example.com", createdAt: new Date().toISOString() },
  ]

  // Write data to files
  await fs.writeFile(path.join(DATA_DIR, "users.json"), JSON.stringify([admin, user], null, 2))
  await fs.writeFile(path.join(DATA_DIR, "service-requests.json"), JSON.stringify(serviceRequests, null, 2))
  await fs.writeFile(path.join(DATA_DIR, "contacts.json"), JSON.stringify(contacts, null, 2))
  await fs.writeFile(path.join(DATA_DIR, "newsletter.json"), JSON.stringify(subscribers, null, 2))

  console.log("JSON database seeded successfully!")
}

main().catch((error) => {
  console.error("Error seeding database:", error)
  process.exit(1)
})
