import fs from "fs/promises"
import path from "path"
import { v4 as uuidv4 } from "uuid"

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

// Define file paths
const FILES = {
  contacts: path.join(DATA_DIR, "contacts.json"),
  serviceRequests: path.join(DATA_DIR, "service-requests.json"),
  newsletter: path.join(DATA_DIR, "newsletter.json"),
  users: path.join(DATA_DIR, "users.json"),
}

// Initialize with empty data files
async function initializeDataFiles() {
  await ensureDataDir()

  const initialData = {
    contacts: [],
    serviceRequests: [],
    newsletter: [],
    users: [],
  }

  for (const [key, filePath] of Object.entries(FILES)) {
    try {
      await fs.access(filePath)
    } catch {
      // File doesn't exist, create it
      await fs.writeFile(filePath, JSON.stringify(initialData[key as keyof typeof initialData], null, 2))
    }
  }

  // Create admin user if it doesn't exist
  await createAdminUserIfNotExists()
}

// Create admin user if it doesn't exist
async function createAdminUserIfNotExists() {
  try {
    const usersFilePath = FILES.users
    let users = []

    try {
      const data = await fs.readFile(usersFilePath, "utf8")
      users = JSON.parse(data)
    } catch (error) {
      // File doesn't exist or is empty, create it with empty array
      users = []
    }

    // Check if admin user exists
    const adminExists = users.some((user: any) => user.email === "admin@venuslaundry.com")

    if (!adminExists) {
      // Create admin user
      const admin = {
        id: uuidv4(),
        name: "Admin User",
        email: "admin@venuslaundry.com",
        hashedPassword: "admin123", // Store password directly (not secure for production)
        role: "admin",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      }

      users.push(admin)
      await fs.writeFile(usersFilePath, JSON.stringify(users, null, 2))
      console.log("Admin user created successfully")
    }
  } catch (error) {
    console.error("Error creating admin user:", error)
  }
}

// Initialize data storage
initializeDataFiles().catch(console.error)

// Read data from a file
async function readData(filePath: string) {
  try {
    const data = await fs.readFile(filePath, "utf8")
    return JSON.parse(data)
  } catch (error) {
    console.error(`Error reading from ${filePath}:`, error)
    return []
  }
}

// Write data to a file
async function writeData(filePath: string, data: any) {
  try {
    await fs.writeFile(filePath, JSON.stringify(data, null, 2))
  } catch (error) {
    console.error(`Error writing to ${filePath}:`, error)
    throw error
  }
}

// Helper function to execute SQL-like queries on JSON data
export async function executeQuery(query: string, params: any[] = []) {
  // Parse the query to determine what operation to perform
  const trimmedQuery = query.trim().toLowerCase()

  // Handle SELECT queries
  if (trimmedQuery.startsWith("select")) {
    // Determine which table to query
    let filePath = ""
    if (trimmedQuery.includes('"contact"') || trimmedQuery.includes("contact")) {
      filePath = FILES.contacts
    } else if (trimmedQuery.includes('"servicerequest"') || trimmedQuery.includes("servicerequest")) {
      filePath = FILES.serviceRequests
    } else if (trimmedQuery.includes('"newsletter"') || trimmedQuery.includes("newsletter")) {
      filePath = FILES.newsletter
    } else if (trimmedQuery.includes('"user"') || trimmedQuery.includes("user")) {
      filePath = FILES.users
    } else {
      throw new Error(`Could not determine table from query: ${query}`)
    }

    const data = await readData(filePath)

    // Handle WHERE clauses (very basic implementation)
    if (trimmedQuery.includes("where")) {
      // For email lookup (common in our app)
      if (trimmedQuery.includes("email =") && params.length > 0) {
        const email = params[0]
        return data.filter((item: any) => item.email === email)
      }

      // For ID lookup
      if (trimmedQuery.includes("id =") && params.length > 0) {
        const id = params[0]
        return data.filter((item: any) => item.id === id)
      }

      // For limit
      if (trimmedQuery.includes("limit 1") && data.length > 0) {
        return [data[0]]
      }
    }

    return data
  }

  // Handle INSERT queries
  if (trimmedQuery.startsWith("insert")) {
    let filePath = ""
    let dataToInsert: any = {}

    // Determine which table to insert into
    if (trimmedQuery.includes('"contact"') || trimmedQuery.includes("contact")) {
      filePath = FILES.contacts
      dataToInsert = {
        id: params[0] || uuidv4(),
        firstName: params[1] || "",
        lastName: params[2] || "",
        email: params[3] || "",
        phone: params[4] || "",
        subject: params[5] || "",
        message: params[6] || "",
        createdAt: params[7] || new Date().toISOString(),
        status: params[8] || "new",
      }
    } else if (trimmedQuery.includes('"servicerequest"') || trimmedQuery.includes("servicerequest")) {
      filePath = FILES.serviceRequests
      dataToInsert = {
        id: params[0] || uuidv4(),
        name: params[1] || "",
        email: params[2] || "",
        phone: params[3] || "",
        serviceType: params[4] || "",
        details: params[5] || "",
        date: params[6] || null,
        createdAt: params[7] || new Date().toISOString(),
        status: params[8] || "pending",
      }
    } else if (trimmedQuery.includes('"newsletter"') || trimmedQuery.includes("newsletter")) {
      filePath = FILES.newsletter
      dataToInsert = {
        id: params[0] || uuidv4(),
        email: params[1] || "",
        createdAt: params[2] || new Date().toISOString(),
      }
    } else if (trimmedQuery.includes('"user"') || trimmedQuery.includes("user")) {
      filePath = FILES.users
      dataToInsert = {
        id: params[0] || uuidv4(),
        name: params[1] || "",
        email: params[2] || "",
        hashedPassword: params[3] || "",
        role: params[4] || "user",
        createdAt: params[5] || new Date().toISOString(),
        updatedAt: params[6] || new Date().toISOString(),
      }
    } else {
      throw new Error(`Could not determine table from query: ${query}`)
    }

    const data = await readData(filePath)

    // Handle ON CONFLICT DO UPDATE/NOTHING
    if (trimmedQuery.includes("on conflict")) {
      // Check if the item already exists
      const existingItemIndex = data.findIndex((item: any) => {
        if (trimmedQuery.includes("email") && dataToInsert.email) {
          return item.email === dataToInsert.email
        }
        return item.id === dataToInsert.id
      })

      if (existingItemIndex !== -1) {
        // If it includes UPDATE, update the item
        if (trimmedQuery.includes("do update")) {
          data[existingItemIndex] = { ...data[existingItemIndex], ...dataToInsert }
        }
        // If it includes NOTHING, do nothing
        await writeData(filePath, data)
        return { insertId: data[existingItemIndex].id }
      }
    }

    // Insert the new item
    data.push(dataToInsert)
    await writeData(filePath, data)
    return { insertId: dataToInsert.id }
  }

  // Handle UPDATE queries (simplified)
  if (trimmedQuery.startsWith("update")) {
    // Not implemented for this example, but would follow similar pattern
    return { affectedRows: 0 }
  }

  // Handle DELETE queries (simplified)
  if (trimmedQuery.startsWith("delete")) {
    // Not implemented for this example, but would follow similar pattern
    return { affectedRows: 0 }
  }

  // Default return
  return []
}

// Export the database object
export const db = {
  executeQuery,
}

export default db
