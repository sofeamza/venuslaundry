import { PrismaClient } from "@prisma/client"
import { hash } from "bcrypt"

const prisma = new PrismaClient()

async function main() {
  // Create admin user
  const adminPassword = await hash("admin123", 10)
  const admin = await prisma.user.upsert({
    where: { email: "admin@venuslaundry.com" },
    update: {},
    create: {
      email: "admin@venuslaundry.com",
      name: "Admin User",
      hashedPassword: adminPassword,
      role: "admin",
    },
  })

  // Create regular user
  const userPassword = await hash("user123", 10)
  const user = await prisma.user.upsert({
    where: { email: "user@example.com" },
    update: {},
    create: {
      email: "user@example.com",
      name: "Test User",
      hashedPassword: userPassword,
      role: "user",
    },
  })

  // Create sample service requests
  const serviceRequests = [
    {
      name: "John Smith",
      email: "john@example.com",
      phone: "123-456-7890",
      serviceType: "bulk-elegance",
      details: "Need laundry service for our hotel with 50 rooms",
      status: "pending",
    },
    {
      name: "Sarah Johnson",
      email: "sarah@example.com",
      phone: "123-456-7891",
      serviceType: "linen-luxury",
      details: "Looking for linen rental for our restaurant",
      status: "confirmed",
    },
    {
      name: "Michael Brown",
      email: "michael@example.com",
      phone: "123-456-7892",
      serviceType: "soft-splendor",
      details: "Need cleaning for office curtains and upholstery",
      status: "completed",
    },
  ]

  for (const data of serviceRequests) {
    await prisma.serviceRequest.upsert({
      where: { email_serviceType: { email: data.email, serviceType: data.serviceType } },
      update: {},
      create: data,
    })
  }

  // Create sample contact messages
  const contacts = [
    {
      firstName: "David",
      lastName: "Wilson",
      email: "david@example.com",
      phone: "123-456-7893",
      subject: "Service Inquiry",
      message: "I'm interested in your laundry services for my business. Please provide more information.",
    },
    {
      firstName: "Emily",
      lastName: "Davis",
      email: "emily@example.com",
      phone: "123-456-7894",
      subject: "Pricing Question",
      message: "Could you please send me your pricing details for linen rental services?",
    },
  ]

  for (const data of contacts) {
    await prisma.contact.upsert({
      where: { email_subject: { email: data.email, subject: data.subject } },
      update: {},
      create: data,
    })
  }

  // Create sample newsletter subscribers
  const subscribers = [
    { email: "subscriber1@example.com" },
    { email: "subscriber2@example.com" },
    { email: "subscriber3@example.com" },
  ]

  for (const data of subscribers) {
    await prisma.newsletter.upsert({
      where: { email: data.email },
      update: {},
      create: data,
    })
  }

  console.log("Database seeded successfully!")
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
